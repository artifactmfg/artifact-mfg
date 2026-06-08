/**
 * ARTIFACT MFG — Wall & Shower Panels Page
 * Design: Dark Prestige / Architectural Editorial
 */
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/useMobile";
import { Link } from "wouter";
import Lightbox from "@/components/Lightbox";
import { useSEO } from "@/hooks/useSEO";

const HERO_IMG = "/images/wall-panels-angle2-enhanced_1fff9af1.png";
const BATTLESHIP_IMG = "/images/fireplace-panel-final_c4803498.png";
const SHOWER_PANEL_IMG = "/images/panel-shower-cedar-accent-raw_b02fe8a0.png";
const ALABASTER_STONE_WALL_IMG = "/images/fireplace-alabaster-stone-wall-finished_066d6290.png";
const ANTHRACITE_FULLHEIGHT_IMG = "/images/fireplace-charcoal-fullheight-raw_a595fe3c.png";
const ANTHRACITE_ROOM_IMG = "/images/fireplace-charcoal-notv_d4aab1c2.png";
const HOME_HERO_IMG = "/images/fireplace-hero-v4_8c4f346b.png";

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
  { img: HERO_IMG, title: "Penthouse Interior Wall", desc: "Full-height custom-color panel installation. Floor-to-ceiling concrete that commands the room without competing with the view.", tag: "Residential · Custom Color" },
  { img: SHOWER_PANEL_IMG, title: "Shower with Cedar Accent", desc: "Floor-to-ceiling Anthracite concrete panels with a live-edge cedar accent band.", tag: "Residential · Anthracite" },
  { img: ANTHRACITE_ROOM_IMG, title: "Wall Panels and Hearth", desc: "Full-height Anthracite wall panels and hearth. The concrete runs floor to ceiling, framing the firebox with quiet authority.", tag: "Residential · Anthracite · Wall Panel" },
  { img: HOME_HERO_IMG, title: "Fireplace Wall Panels, Linear Surround, and Hearth", desc: "Large-format Alabaster wall panels, linear surround, and hearth slab. Every element cast in the same material — floor to ceiling.", tag: "Residential · Alabaster · Linear Surround" },
  { img: BATTLESHIP_IMG, title: "Fireplace Wall Panel", desc: "A full-height flat concrete panel filling the wall between classical pilasters, with a gas fireplace insert at the base.", tag: "Residential", pos: "center center" },
];


const lbImages = projects.map(p => ({ src: p.img, alt: p.title, title: p.title, subtitle: p.tag }));

export default function Panels() {
  useSEO({ title: "Concrete Wall & Shower Panels | Artifact Mfg", description: "Large-format concrete wall panels and shower panels for dramatic residential and commercial spaces. Custom color and scale. Artifact Mfg, Ohio." });
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
        <img src={HERO_IMG} alt="Concrete wall panels exterior installation" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(17,16,16,1) 0%, rgba(17,16,16,0.45) 55%, rgba(17,16,16,0.15) 100%)" }} />
        <div style={{ position: "absolute", bottom: "4rem", left: 0, right: 0, padding: "0 4rem", maxWidth: "1440px", margin: "0 auto" }}>
          <div className="label-text" style={{ marginBottom: "0.75rem" }}>Signature Work</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#F0EDE8", lineHeight: 1.0 }}>
            Wall & Shower Panels
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "6rem 0", backgroundColor: "#111010" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "2rem" : "6rem", alignItems: "center" }}>
            <Reveal>
              <div className="label-text" style={{ marginBottom: "1rem" }}>The Full Wall Treatment</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#F0EDE8", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Concrete at Scale.<br />Architecture as Art.
              </h2>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", color: "#8A8480", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                When a single surface isn't enough, we go full wall. Our large-format concrete panels bring the same handcrafted quality to entire walls, shower surrounds, and exterior facades.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", color: "#8A8480", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                Each panel is precision-cast to your exact dimensions for its specific application — interior, exterior, wet area, or dry. The result is a surface that is entirely and unmistakably yours.
              </p>
              <Link href="/contact">
                <span className="btn-gold">Start Your Project</span>
              </Link>
            </Reveal>
            <Reveal delay={0.2} style={{ position: "relative" }}>
              <img src={HERO_IMG} alt="Concrete wall panels" style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover" }} />
              <div style={{ position: "absolute", bottom: "-1.5rem", right: "-1.5rem", width: "60%", height: "60%", border: "1px solid rgba(201,169,110,0.2)", pointerEvents: "none" }} />
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
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: "0.75rem" }}>
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div onClick={() => setLbIndex(i)} style={{ position: "relative", overflow: "hidden", aspectRatio: "4/3", cursor: "zoom-in" }}>
                  <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: (p as any).pos || "center 30%", transition: "transform 0.6s ease", display: "block" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
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

      {/* CTA */}
      <section style={{ padding: "5rem 0", backgroundColor: "#0D0C0C" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>
          <Reveal>
            <div style={{ border: "1px solid rgba(201,169,110,0.2)", padding: "3rem 4rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
              <div>
                <div className="label-text" style={{ marginBottom: "0.5rem" }}>Ready to Begin?</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "1.75rem", color: "#F0EDE8", lineHeight: 1.2 }}>
                  Every panel starts<br />with a conversation.
                </h3>
              </div>
              <Link href="/contact">
                <span className="btn-gold">Inquire Now</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
