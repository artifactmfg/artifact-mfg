/*
 * ARTIFACT MFG — Fireplaces Page
 * Design: Dark Prestige / Architectural Editorial
 */
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/useMobile";
import { Link } from "wouter";
import Lightbox from "@/components/Lightbox";
import ConcreteFinishes from "@/components/ConcreteFinishes";
import { useSEO } from "@/hooks/useSEO";

const HERO_IMG = "/images/fireplace-concave-surround-raw_f7a66b5d.webp";
const CONCAVE_SURROUND_IMG = "/images/fireplace-concave-surround-raw_f7a66b5d.webp";
const ARCH_SURROUND_HEARTH_IMG = "/images/fireplace-architectural-surround-hearth-raw_ddc5882e.png";
const ARCH_SURROUND_ORIG_IMG = "/images/fireplace-arch-enhanced_07413b8e.png";
const FLUTED_DARK_IMG = "/images/fireplace-fluted-dark-enhanced_576c3595.png";

const BATTLESHIP_IMG = "/images/fireplace-panel-final_c4803498.png";
const LINEAR_WALL_PANEL_IMG = "/images/fireplace-hero-v4_8c4f346b.png";
const ANTHRACITE_WALL_PANEL_IMG = "/images/fireplace-charcoal-notv_d4aab1c2.png";
const REFINED_FINISH_IMG = "/images/fireplace-refined-finish-example_e4fa58d4.png";
const STEPPED_SURROUND_HEARTH_IMG = "/images/fireplace-stepped-surround-hearth-alabaster_08f18bd2.png";
const WHITE_FLUTED_IMG = "/images/fireplace-fluted-white-enhanced_78ed2f91.png";
const CHARCOAL_SURROUND_HEARTH_IMG = "/images/fireplace-charcoal-surround-hearth-enhanced_ba8c66e8.png";
const OUTDOOR_POOLHOUSE1_IMG = "/images/fireplace-outdoor-poolhouse1-enhanced_8e7bf68d.png";
const HANDCARVED_HEARTH_IMG = "/images/fireplace-handcarved-hearth-raw_45f1234f.png";
const GRAY_MARBLED_HEARTH_IMG = "/images/fireplace-gray-marbled-hearth-enhanced_64890005.png";
const OUTDOOR_POOLHOUSE2_IMG = "/images/fireplace-outdoor-poolhouse2-enhanced_2242ce78.png";
const LARGE_WHITE_SURROUND_IMG = "/images/fireplace-large-white-surround-enhanced_a549879f.png";
const ALABASTER_STONE_WALL_IMG = "/images/fireplace-alabaster-stone-wall-finished_e7e32277.png";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, style, delay = 0 }: { children: React.ReactNode; style?: React.CSSProperties; delay?: number }) {
  const ref = useReveal();
  return <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}s`, ...style }}>{children}</div>;
}



const projects = [
  {
    img: CONCAVE_SURROUND_IMG,
    title: "Concave Architectural Surround",
    desc: "An Alabaster surround with a concave face profile, set on 24 linear feet of floating hearth. The scale is commanding; the material stays quiet.",
    tag: "Residential · Alabaster · Hearth",
    pos: "center 50%",
  },
  {
    img: LARGE_WHITE_SURROUND_IMG,
    title: "Architectural Surround",
    desc: "A clean Alabaster architectural surround. Simple profile, refined presence.",
    tag: "Residential · Alabaster",
    pos: "center 65%",
  },
  {
    img: ARCH_SURROUND_HEARTH_IMG,
    title: "Architectural Surround and Hearth",
    desc: "An Alabaster surround paired with a matching hearth slab. The two pieces work as one continuous element.",
    tag: "Residential · Alabaster · Hearth",
    pos: "center 55%",
  },
  {
    img: LINEAR_WALL_PANEL_IMG,
    title: "Linear Surround and Wall Panels",
    desc: "An Alabaster linear surround integrated with full-height wall panels. The concrete runs floor to ceiling — surround and cladding cast as one continuous material.",
    tag: "Residential · Alabaster · Wall Panel",
    pos: "center 40%",
  },
  {
    img: ANTHRACITE_WALL_PANEL_IMG,
    title: "Fireplace Wall Panels and Hearth",
    desc: "Full-height Anthracite fireplace wall panels and hearth. The concrete runs floor to ceiling, framing the firebox with quiet authority.",
    tag: "Residential · Anthracite · Wall Panel",
    pos: "center 40%",
  },
  {
    img: STEPPED_SURROUND_HEARTH_IMG,
    title: "Stepped Surround and Hearth",
    desc: "An Alabaster stepped surround and matching hearth slab in artisan finish. The surface carries visible mineral movement — no two pieces read the same.",
    tag: "Residential · Alabaster · Artisan Finish · Hearth",
    pos: "center 40%",
  },
  {
    img: ALABASTER_STONE_WALL_IMG,
    title: "Stepped Surround",
    desc: "A stepped Alabaster surround with refined finish — the form is precise, the material quiet.",
    tag: "Residential · Alabaster · Refined",
    pos: "center 60%",
  },
  {
    img: FLUTED_DARK_IMG,
    title: "Reeded Surround",
    desc: "Anthracite reeded concrete surround with a bold vertical profile.",
    tag: "Residential · Anthracite",
    pos: "center 60%",
  },
  {
    img: WHITE_FLUTED_IMG,
    title: "Reeded Surround",
    desc: "Alabaster with vertical reeded columns and a bullnose frame. Crisp and architectural.",
    tag: "Residential · Alabaster",
    pos: "center 75%",
  },
  {
    img: ARCH_SURROUND_ORIG_IMG,
    title: "Arched Surround",
    desc: "A custom arched Alabaster surround in artisan finish. The soft arch form feels at home without competing with the space.",
    tag: "Residential · Alabaster · Artisan Finish",
    pos: "center 60%",
  },
  {
    img: CHARCOAL_SURROUND_HEARTH_IMG,
    title: "Minimalist Surround and Hearth",
    desc: "A flat Anthracite surround and full-width hearth slab. Intentionally minimal — the concrete grounds the space.",
    tag: "Residential · Anthracite · Hearth",
    pos: "center 80%",
  },
  {
    img: OUTDOOR_POOLHOUSE1_IMG,
    title: "Hand Carved Hearth",
    desc: "A Graphite concrete hearth with hand-carved edges. Every edge shaped by hand — no two are alike.",
    tag: "Outdoor · Graphite · Hearth",
    pos: "center 80%",
  },
  {
    img: HANDCARVED_HEARTH_IMG,
    title: "Hand Carved Hearth",
    desc: "A Haze concrete hearth with hand-carved edges set against stacked stone.",
    tag: "Residential · Haze · Hearth",
    pos: "center bottom",
  },
  {
    img: GRAY_MARBLED_HEARTH_IMG,
    title: "Artisan Hearth",
    desc: "A wide Cast Gray hearth with artisan finish. The movement in the concrete is natural and unrepeatable.",
    tag: "Residential · Cast Gray · Hearth",
    pos: "center 50%",
  },
  {
    img: OUTDOOR_POOLHOUSE2_IMG,
    title: "Hand Carved Hearth",
    desc: "A Graphite concrete hearth with hand-carved edges for an outdoor fireplace.",
    tag: "Outdoor · Graphite · Hearth",
    pos: "center 80%",
  },
];

const lbImages = projects.map(p => ({ src: p.img, alt: p.title, title: p.title, subtitle: p.tag }));

export default function Fireplaces() {
  useSEO({ title: "Concrete Fireplace Surrounds & Hearths | Artifact Mfg", description: "Custom concrete fireplace surrounds, hearths, and mantles. Handcrafted in Springboro, Ohio. Serving Dayton, Cincinnati, and surrounding areas." });
  const isMobile = useIsMobile();
  const [lbIndex, setLbIndex] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: "#111010" }}>
      <Lightbox
        images={lbImages}
        currentIndex={lbIndex}
        onClose={() => setLbIndex(null)}
        onPrev={() => setLbIndex(i => (i !== null && i > 0 ? i - 1 : i))}
        onNext={() => setLbIndex(i => (i !== null && i < lbImages.length - 1 ? i + 1 : i))}
      />

      {/* Hero */}
      <section style={{ position: "relative", height: "80vh", minHeight: "560px", overflow: "hidden" }}>
        <img src={HERO_IMG} alt="Dark fluted concrete fireplace surround" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", objectPosition: "center 55%", backgroundColor: "#1a1816" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(17,16,16,1) 0%, rgba(17,16,16,0.45) 55%, rgba(17,16,16,0.15) 100%)" }} />
        <div style={{ position: "absolute", bottom: "4rem", left: 0, right: 0, padding: "0 4rem", maxWidth: "1440px", margin: "0 auto" }}>
          <div className="label-text" style={{ marginBottom: "0.75rem" }}>Signature Work</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#F0EDE8", lineHeight: 1.0 }}>
            Fireplaces
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "6rem 0", backgroundColor: "#111010" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "2rem" : "6rem", alignItems: "center" }}>
            <Reveal>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#F0EDE8", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                The Architectural Anchor<br />of Every Room.
              </h2>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", color: "#8A8480", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                A fireplace surround is not just a frame — it is the defining element of a room. We handcraft fully custom hearths, mantles, and surrounds using UHPC concrete that withstands heat, weathers time, and grows more beautiful with age.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", color: "#8A8480", lineHeight: 1.85, marginBottom: "2rem" }}>
                Every surround begins with a conversation. We work directly with homeowners, interior designers, architects, and builders to understand the space, the fire system, and the life that will be lived around it.
              </p>
              <Link href="/contact">
                <span className="btn-gold">Start Your Surround</span>
              </Link>
            </Reveal>
            <Reveal delay={0.2} style={{ position: "relative" }}>
              <img
                src={WHITE_FLUTED_IMG}
                alt="White fluted concrete fireplace surround"
                onClick={() => setLbIndex(projects.findIndex(p => p.img === WHITE_FLUTED_IMG))}
                style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", cursor: "zoom-in" }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section style={{ padding: "6rem 0", backgroundColor: "#0D0C0C" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>
          <Reveal style={{ marginBottom: "3.5rem" }}>
            <div className="label-text" style={{ marginBottom: "0.75rem" }}>Recent Work</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#F0EDE8" }}>
              From Our Portfolio
            </h2>
          </Reveal>
          {/* Featured first item — full width */}
          {projects[0] && (
            <Reveal style={{ marginBottom: "2px" }}>
              <div
                onClick={() => setLbIndex(0)}
                style={{ position: "relative", overflow: "hidden", aspectRatio: "16/7", cursor: "zoom-in" }}
              >
                <img
                  src={projects[0].img}
                  alt={projects[0].title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: projects[0].pos ?? "center 40%", transition: "transform 0.6s ease", display: "block" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(17,16,16,0.92) 0%, rgba(17,16,16,0.2) 60%, rgba(17,16,16,0) 100%)" }} />

                <div style={{ position: "absolute", bottom: "2rem", left: "2.5rem", right: "2.5rem", maxWidth: "640px" }}>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "0.5rem" }}>{projects[0].tag}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#F0EDE8", lineHeight: 1.15, marginBottom: "0.75rem" }}>{projects[0].title}</div>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", color: "rgba(240,237,232,0.7)", lineHeight: 1.7, maxWidth: "520px", display: isMobile ? "none" : "block" }}>{projects[0].desc}</p>
                </div>
                {/* Click hint */}
                <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem", display: "flex", alignItems: "center", gap: "0.4rem", background: "rgba(17,16,16,0.6)", padding: "0.35rem 0.75rem", backdropFilter: "blur(4px)" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                  <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A96E" }}>View Full</span>
                </div>
              </div>
            </Reveal>
          )}
          {/* Remaining items — 2-column grid */}
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: "0.75rem" }}>
            {projects.slice(1).map((p, i) => (
              <Reveal key={`${p.title}-${i}`} delay={i * 0.08}>
                <div
                  onClick={() => setLbIndex(i + 1)}
                  style={{ position: "relative", overflow: "hidden", aspectRatio: "4/3", cursor: "zoom-in" }}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: p.pos ?? "center 50%", transition: "transform 0.6s ease", display: "block" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <div style={{ position: "absolute", inset: 0, background: isMobile ? "linear-gradient(to top, rgba(17,16,16,0.97) 0%, rgba(17,16,16,0.7) 60%, rgba(17,16,16,0) 100%)" : "linear-gradient(to top, rgba(17,16,16,0.9) 0%, rgba(17,16,16,0) 55%)" }} />
                  <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", right: "1.5rem" }}>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "0.4rem" }}>{p.tag}</div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: isMobile ? "0.95rem" : "1.25rem", color: "#F0EDE8", lineHeight: 1.2, marginBottom: "0.3rem" }}>{p.title}</div>
                    {!isMobile && <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "rgba(240,237,232,0.65)", lineHeight: 1.6 }}>{p.desc}</p>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ConcreteFinishes heading="Finishes & Pigments" artisanImage={STEPPED_SURROUND_HEARTH_IMG} refinedImage={LARGE_WHITE_SURROUND_IMG} />

      {/* Builder CTA */}
      <section style={{ padding: "5rem 0", backgroundColor: "#0D0C0C" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>
          <Reveal>
            <div style={{ border: "1px solid rgba(201,169,110,0.2)", padding: "3rem 4rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
              <div>
                <div className="label-text" style={{ marginBottom: "0.5rem" }}>For Builders & Developers</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "1.75rem", color: "#F0EDE8", lineHeight: 1.2 }}>
                  Ordering at scale?<br />Ask about the Trace Collection.
                </h3>
              </div>
              <Link href="/for-builders">
                <span className="btn-gold">Learn More</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
