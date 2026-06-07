/*
 * ARTIFACT MFG — Our Process Page
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";

// CloudFront images replaced with local assets
const HERO_IMG = "/images/countertop-kitchen-island-v2_082db10b.png";
const TEXTURE_IMG = "/images/fireplace-refined-finish-example_e4fa58d4.png";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}
function Reveal({ children, style, delay = 0 }: { children: React.ReactNode; style?: React.CSSProperties; delay?: number }) {
  const ref = useReveal();
  return <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}s`, ...style }}>{children}</div>;
}

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "Every project begins with a conversation. We discuss your space, your vision, your timeline, and your budget. We'll ask about dimensions, finish preferences, edge profiles, and how the piece will be used. No commitment required at this stage.",
  },
  {
    num: "02",
    title: "Design & Specification",
    desc: "We develop a detailed specification document including exact dimensions, finish selection, edge profiles, cutouts, and any special features. For complex projects, we may create a physical sample or mockup for your approval.",
  },
  {
    num: "03",
    title: "Mold Fabrication",
    desc: "Custom molds are built to your exact specifications. This is where the precision work begins — every dimension is verified, every profile is tested. The mold determines the final form.",
  },
  {
    num: "04",
    title: "Casting & Curing",
    desc: "We mix and pour our UHPC concrete blend, incorporating any pigments or aggregates specified. The piece cures under controlled conditions for the time required to achieve full strength. This cannot be rushed.",
  },
  {
    num: "05",
    title: "Finishing & Sealing",
    desc: "After demolding, we grind, sand, and finish the surface to the specified texture. Multiple coats of penetrating sealer are applied and buffed. The piece is inspected under raking light for any imperfections.",
  },
  {
    num: "06",
    title: "Delivery & Installation",
    desc: "We deliver and, where applicable, install your piece. We walk you through care and maintenance. The job is not complete until you are completely satisfied.",
  },
];

export default function Process() {
  return (
    <div style={{ backgroundColor: "#111010" }}>
      {/* Hero */}
      <section style={{ position: "relative", height: "55vh", minHeight: "400px", overflow: "hidden" }}>
        <img src={HERO_IMG} alt="Concrete kitchen island — a product of the Artifact Mfg process" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(17,16,16,1) 0%, rgba(17,16,16,0.5) 60%, rgba(17,16,16,0.2) 100%)" }} />
        <div className="hero-text-overlay">
          <div className="label-text" style={{ marginBottom: "0.75rem" }}>How We Work</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#F0EDE8", lineHeight: 1.0 }}>
            Our Process
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "5rem 0 3rem", backgroundColor: "#111010" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }} className="page-x">
          <Reveal>
            <div style={{ maxWidth: "680px" }}>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", color: "#8A8480", lineHeight: 1.9 }}>
                Concrete is not a material that rewards impatience. From the first conversation to the final installation, our process is designed to ensure that every piece we deliver is exactly what you envisioned — and built to outlast everything around it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Steps */}
      <section style={{ padding: "3rem 0 6rem", backgroundColor: "#111010" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }} className="page-x">
          <div style={{ position: "relative" }}>
            {/* Vertical line — hidden on very small screens */}
            <div style={{ position: "absolute", left: "1.75rem", top: 0, bottom: 0, width: "1px", backgroundColor: "rgba(201,169,110,0.15)" }} />
            {steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.08} style={{ display: "flex", gap: "2rem", marginBottom: "3rem", position: "relative" }}>
                {/* Step number bubble */}
                <div style={{ flexShrink: 0, width: "3.5rem", height: "3.5rem", border: "1px solid rgba(201,169,110,0.3)", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#111010", zIndex: 1 }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "0.9rem", color: "#C9A96E" }}>{s.num}</span>
                </div>
                <div style={{ paddingTop: "0.5rem", flex: 1 }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "1.5rem", color: "#F0EDE8", lineHeight: 1.2, marginBottom: "0.75rem" }}>{s.title}</h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.875rem", color: "#8A8480", lineHeight: 1.85, maxWidth: "580px" }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Material note */}
      <section style={{ padding: "5rem 0", backgroundColor: "#0D0C0C" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }} className="page-x">
          <div className="intro-grid">
            <Reveal>
              <div className="label-text" style={{ marginBottom: "1rem" }}>The Material</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", color: "#F0EDE8", marginBottom: "1.25rem", lineHeight: 1.2 }}>
                Why UHPC Concrete?
              </h2>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.875rem", color: "#8A8480", lineHeight: 1.85, marginBottom: "1rem" }}>
                We use Ultra-High Performance Concrete (UHPC) — a pre-blended mix that incorporates recycled industrial byproducts, reducing cement use and environmental impact. It is significantly stronger than standard concrete, with higher density and lower porosity.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.875rem", color: "#8A8480", lineHeight: 1.85, marginBottom: "1.5rem" }}>
                This means your piece holds heat longer, resists staining better, and requires less maintenance than traditional concrete. It can be pigmented to any color and finished to any texture — from polished to raw.
              </p>
              <Link href="/contact">
                <span className="btn-gold">Start Your Project</span>
              </Link>
            </Reveal>
            <Reveal delay={0.2}>
              <img src={TEXTURE_IMG} alt="UHPC concrete surface texture detail" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover" }} />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
