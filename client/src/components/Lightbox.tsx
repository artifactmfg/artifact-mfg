/*
 * ARTIFACT MFG — Lightbox Component
 * Design: Dark Prestige / Architectural Editorial
 * Click any gallery image to open full-resolution view.
 * Keyboard: Escape to close, Arrow keys to navigate.
 */

import { useEffect, useCallback } from "react";

interface LightboxProps {
  images: { src: string; alt: string; title?: string; subtitle?: string }[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [currentIndex, onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [currentIndex]);

  if (currentIndex === null) return null;

  const current = images[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        backgroundColor: "rgba(11,10,10,0.96)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        backdropFilter: "blur(6px)",
        animation: "lb-fade-in 0.2s ease",
      }}
    >
      <style>{`
        @keyframes lb-fade-in { from { opacity: 0 } to { opacity: 1 } }
        @keyframes lb-scale-in { from { opacity: 0; transform: scale(0.96) } to { opacity: 1; transform: scale(1) } }
      `}</style>

      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close"
        style={{
          position: "absolute",
          top: "1.25rem",
          right: "1.5rem",
          background: "none",
          border: "1px solid rgba(240,237,232,0.2)",
          color: "#F0EDE8",
          width: "2.5rem",
          height: "2.5rem",
          borderRadius: "50%",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.1rem",
          transition: "border-color 0.2s, color 0.2s",
          zIndex: 10,
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#C9A96E"; (e.currentTarget as HTMLButtonElement).style.color = "#C9A96E"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(240,237,232,0.2)"; (e.currentTarget as HTMLButtonElement).style.color = "#F0EDE8"; }}
      >
        ✕
      </button>

      {/* Prev button */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous"
          style={{
            position: "absolute",
            left: "1.25rem",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(17,16,16,0.7)",
            border: "1px solid rgba(240,237,232,0.15)",
            color: "#F0EDE8",
            width: "3rem",
            height: "3rem",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.2rem",
            transition: "border-color 0.2s, color 0.2s",
            zIndex: 10,
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#C9A96E"; (e.currentTarget as HTMLButtonElement).style.color = "#C9A96E"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(240,237,232,0.15)"; (e.currentTarget as HTMLButtonElement).style.color = "#F0EDE8"; }}
        >
          ‹
        </button>
      )}

      {/* Next button */}
      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next"
          style={{
            position: "absolute",
            right: "1.25rem",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(17,16,16,0.7)",
            border: "1px solid rgba(240,237,232,0.15)",
            color: "#F0EDE8",
            width: "3rem",
            height: "3rem",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.2rem",
            transition: "border-color 0.2s, color 0.2s",
            zIndex: 10,
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#C9A96E"; (e.currentTarget as HTMLButtonElement).style.color = "#C9A96E"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(240,237,232,0.15)"; (e.currentTarget as HTMLButtonElement).style.color = "#F0EDE8"; }}
        >
          ›
        </button>
      )}

      {/* Image container */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "min(90vw, 1200px)",
          maxHeight: "90vh",
          animation: "lb-scale-in 0.22s ease",
        }}
      >
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          style={{
            maxWidth: "100%",
            maxHeight: "calc(90vh - 5rem)",
            objectFit: "contain",
            display: "block",
            boxShadow: "0 8px 60px rgba(0,0,0,0.7)",
          }}
        />
        {(current.title || current.subtitle) && (
          <div style={{ marginTop: "1rem", textAlign: "center" }}>
            {current.title && (
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.1rem",
                fontWeight: 300,
                color: "#F0EDE8",
                marginBottom: "0.25rem",
              }}>
                {current.title}
              </p>
            )}
            {current.subtitle && (
              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#C9A96E",
              }}>
                {current.subtitle}
              </p>
            )}
          </div>
        )}
        {/* Counter */}
        <p style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: "0.65rem",
          letterSpacing: "0.2em",
          color: "rgba(240,237,232,0.3)",
          marginTop: "0.75rem",
          textTransform: "uppercase",
        }}>
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}
