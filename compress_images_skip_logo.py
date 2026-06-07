#!/usr/bin/env python3
from pathlib import Path
from PIL import Image, ImageFile
import hashlib
import os
import shutil
import sys

ImageFile.LOAD_TRUNCATED_IMAGES = True

ROOT = Path(__file__).resolve().parent
IMG_DIR = ROOT / "client" / "public" / "images"
SKIP_NAME = "artifact-logo-cropped_d7aac9fb.png"
TARGET = 500 * 1024
TMP_DIR = ROOT / ".image_compress_tmp"
TMP_DIR.mkdir(exist_ok=True)

SUPPORTED = {".png", ".jpg", ".jpeg", ".webp"}


def sha256(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def file_size(path: Path) -> int:
    return path.stat().st_size


def save_candidate(img: Image.Image, dest: Path, ext: str, quality: int | None = None, colors: int | None = None) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    if ext == ".png":
        work = img
        if colors is not None:
            # Preserve transparency where present, while using palette compression for photographic PNGs.
            if work.mode in ("RGBA", "LA") or (work.mode == "P" and "transparency" in work.info):
                work = work.convert("RGBA").quantize(colors=colors, method=Image.Quantize.FASTOCTREE)
            else:
                work = work.convert("RGB").quantize(colors=colors, method=Image.Quantize.MEDIANCUT)
        work.save(dest, format="PNG", optimize=True, compress_level=9)
    elif ext in {".jpg", ".jpeg"}:
        work = img.convert("RGB")
        q = quality if quality is not None else 82
        work.save(dest, format="JPEG", quality=q, optimize=True, progressive=True)
    elif ext == ".webp":
        q = quality if quality is not None else 82
        method = 6
        work = img.convert("RGBA") if (img.mode in ("RGBA", "LA") or "transparency" in img.info) else img.convert("RGB")
        work.save(dest, format="WEBP", quality=q, method=method)
    else:
        raise ValueError(ext)


def compress_one(path: Path) -> tuple[str, int, int, bool]:
    ext = path.suffix.lower()
    original_size = file_size(path)
    if path.name == SKIP_NAME:
        return (path.name, original_size, original_size, True)
    if ext not in SUPPORTED:
        return (path.name, original_size, original_size, False)
    if original_size <= TARGET:
        # Still run optimize for PNG if it helps, but never replace with a larger file.
        pass

    try:
        img = Image.open(path)
        img.load()
    except Exception as exc:
        print(f"WARN cannot open {path.name}: {exc}", file=sys.stderr)
        return (path.name, original_size, original_size, False)

    best_path = None
    best_size = original_size

    def consider(candidate: Path):
        nonlocal best_path, best_size
        if candidate.exists():
            s = file_size(candidate)
            if s < best_size:
                best_size = s
                best_path = candidate

    # Candidate sequence: preserve dimensions first; then bounded resizing only if needed.
    scales = [1.0, 0.92, 0.85, 0.78, 0.70, 0.62, 0.55, 0.48]
    if ext == ".png":
        color_options = [256, 192, 128, 96, 64, 48, 32]
        for scale in scales:
            if scale == 1.0:
                work = img.copy()
            else:
                w, h = img.size
                nw, nh = max(1, int(w * scale)), max(1, int(h * scale))
                work = img.resize((nw, nh), Image.Resampling.LANCZOS)
            for colors in color_options:
                cand = TMP_DIR / f"{path.stem}_{scale}_{colors}{ext}"
                try:
                    save_candidate(work, cand, ext, colors=colors)
                    consider(cand)
                    if best_size <= TARGET:
                        break
                except Exception as exc:
                    print(f"WARN failed candidate {path.name} scale={scale} colors={colors}: {exc}", file=sys.stderr)
            if best_size <= TARGET:
                break
    else:
        qualities = [85, 78, 70, 62, 55, 48, 42]
        for scale in scales:
            if scale == 1.0:
                work = img.copy()
            else:
                w, h = img.size
                nw, nh = max(1, int(w * scale)), max(1, int(h * scale))
                work = img.resize((nw, nh), Image.Resampling.LANCZOS)
            for q in qualities:
                cand = TMP_DIR / f"{path.stem}_{scale}_{q}{ext}"
                try:
                    save_candidate(work, cand, ext, quality=q)
                    consider(cand)
                    if best_size <= TARGET:
                        break
                except Exception as exc:
                    print(f"WARN failed candidate {path.name} scale={scale} q={q}: {exc}", file=sys.stderr)
            if best_size <= TARGET:
                break

    # Replace if improved, even if a stubborn file remains just above target.
    if best_path and best_size < original_size:
        shutil.copy2(best_path, path)

    return (path.name, original_size, file_size(path), False)


def main():
    if not IMG_DIR.is_dir():
        raise SystemExit(f"Image folder not found: {IMG_DIR}")
    skip_path = IMG_DIR / SKIP_NAME
    if not skip_path.exists():
        raise SystemExit(f"Required logo to skip not found: {skip_path}")
    before_logo_hash = sha256(skip_path)

    image_paths = sorted(p for p in IMG_DIR.iterdir() if p.is_file() and p.suffix.lower() in SUPPORTED)
    print(f"Image folder: {IMG_DIR}")
    print(f"Images found: {len(image_paths)}")
    print(f"Skipping unchanged: {SKIP_NAME}")
    print(f"Logo SHA256 before: {before_logo_hash}")

    results = []
    for i, path in enumerate(image_paths, 1):
        name, before, after, skipped = compress_one(path)
        results.append((name, before, after, skipped))
        label = "SKIP" if skipped else "OK"
        print(f"[{i:03d}/{len(image_paths):03d}] {label} {name}: {before/1024:.1f} KB -> {after/1024:.1f} KB")

    after_logo_hash = sha256(skip_path)
    if before_logo_hash != after_logo_hash:
        raise SystemExit("ERROR: skipped logo hash changed")

    oversized = [p for p in image_paths if p.name != SKIP_NAME and file_size(p) > TARGET]
    print(f"Logo SHA256 after:  {after_logo_hash}")
    print(f"Non-logo images over 500KB: {len(oversized)}")
    for p in oversized:
        print(f"OVER_TARGET {p.name} {file_size(p)}")
    if oversized:
        raise SystemExit("ERROR: some non-logo images remain over 500KB")

if __name__ == "__main__":
    main()
