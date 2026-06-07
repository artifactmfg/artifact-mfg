/*
 * ARTIFACT MFG — For Builders & Developers Page
 */
import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/useMobile";
import { Link } from "wouter";

// CloudFront images replaced with local assets
const HERO_BG_IMG = "/images/fireplace-fluted-dark-enhanced_576c3595.png";
const DETAIL_IMG = "/images/fireplace-large-white-surround-enhanced_a549879f.png";
const CTA_BG_IMG = "/images/fireplace-hero-v4_8c4f346b.png";

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
  { num: "01", title: "Initial Consultation", desc: "We discuss your development program, project scale, timeline, and design requirements. No commitment required." },
  { num: "02", title: "Specification & Sampling", desc: "We develop a specification sheet with dimensions, finish options, and pricing. Physical samples can be provided." },
  { num: "03", title: "Program Agreement", desc: "We establish a partnership agreement covering volume, lead times, quality standards, and delivery logistics." },
  { num: "04", title: "Production & Delivery", desc: "Each unit is cast, cured, sealed, and inspected before delivery. Every piece carries the Artifact Mfg quality mark." },
];

const advantages = [
  { title: "Consistent Quality", desc: "Every unit in your program is cast from the same specification, with the same finish, to the same tolerances." },
  { title: "Human Character", desc: "Unlike mass-produced stone or tile, each piece retains the subtle variations that make concrete feel alive — not sterile." },
  { title: "Flexible Volume", desc: "Whether you need 10 units or 150, we can structure a program that works for your timeline and budget." },
  { title: "Design Partnership", desc: "We work with your architects and designers to develop a surround profile that becomes your signature finish." },
  { title: "UHPC Durability", desc: "Our Ultra-High Performance Concrete mixes are engineered for longevity — resistant to heat, moisture, and daily use." },
  { title: "Ohio-Made", desc: "Every piece is made by hand in Springboro, Ohio. You're supporting a family business, not a factory." },
];

export default function ForBuilders() {
  const isMobile = useIsMobile();
  return (
    <div style={{ backgroundColor: "#111010" }}>
      {/* Hero */}
      <section style={{ position: "relative", height: "65vh", minHeight: "480px", overflow: "hidden" }}>
        <img src={HERO_BG_IMG} alt="Dark fluted concrete fireplace surround" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(17,16,16,1) 0%, rgba(17,16,16,0.6) 50%, rgba(17,16,16,0.3) 100%)" }} />
        <div className="hero-text-overlay">
          <div className="label-text" style={{ marginBottom: "0.75rem" }}>For Builders & Developers</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#F0EDE8", lineHeight: 1.0 }}>
            The Trace Collection
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "6rem 0", backgroundColor: "#111010" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }} className="page-x">
          <div className="intro-grid">
            <Reveal>
              <div className="label-text" style={{ marginBottom: "1rem" }}>A Program Built for Scale</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#F0EDE8", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Repeatable Quality.<br />Irreplaceable Character.
              </h2>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", color: "#8A8480", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                Whether you're a residential developer, a luxury homebuilder, or a fireplace system retailer, the Artifact Mfg Trace Collection gives you access to architectural concrete fireplace surrounds that elevate every project — without the unpredictability of fully bespoke work.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", color: "#8A8480", lineHeight: 1.85, marginBottom: "2rem" }}>
                Each unit in a Trace Collection program is cast from an agreed specification, finished to a consistent standard, and inspected before delivery. Yet because concrete is concrete, each piece still carries the subtle variations that make it feel alive — not manufactured.
              </p>
              <blockquote style={{ borderLeft: "2px solid #C9A96E", paddingLeft: "1.5rem", marginBottom: "2rem" }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1.1rem", color: "rgba(240,237,232,0.8)", lineHeight: 1.6 }}>
                  "Whether fully bespoke or part of our Trace Collection, we never surrender the human touch to pure mass production."
                </p>
                <cite style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A96E", fontStyle: "normal" }}>— The Concrete Manifesto</cite>
              </blockquote>
              <Link href="/contact">
                <span className="btn-gold">Discuss Your Program</span>
              </Link>
            </Reveal>
            <Reveal delay={0.2}>
              <img src={DETAIL_IMG} alt="Charcoal concrete fireplace surround with hearth" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover" }} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section style={{ padding: "6rem 0", backgroundColor: "#0D0C0C" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }} className="page-x">
          <Reveal style={{ marginBottom: "3rem" }}>
            <div className="label-text" style={{ marginBottom: "0.75rem" }}>Why Artifact Mfg</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#F0EDE8" }}>
              What Sets Us Apart
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "1px", backgroundColor: "rgba(255,255,255,0.05)" }}>
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.07}>
                <div style={{ backgroundColor: "#111010", padding: "2.5rem 2rem" }}>
                  <div style={{ width: "2rem", height: "1px", backgroundColor: "#C9A96E", marginBottom: "1.25rem" }} />
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F0EDE8", marginBottom: "0.75rem" }}>{a.title}</div>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", color: "#8A8480", lineHeight: 1.75 }}>{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: "6rem 0", backgroundColor: "#111010" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }} className="page-x">
          <Reveal style={{ marginBottom: "3rem" }}>
            <div className="label-text" style={{ marginBottom: "0.75rem" }}>How It Works</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#F0EDE8" }}>
              From Inquiry to Installation
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
            {steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.1}>
                <div style={{ position: "relative", paddingTop: "1rem" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic", fontSize: "4rem", color: "rgba(201,169,110,0.12)", lineHeight: 1, marginBottom: "-1rem" }}>{s.num}</div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F0EDE8", marginBottom: "0.75rem" }}>{s.title}</div>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", color: "#8A8480", lineHeight: 1.75 }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: "relative", padding: "7rem 1.5rem", overflow: "hidden" }}>
        <img src={CTA_BG_IMG} alt="" role="presentation" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(17,16,16,0.85)" }} />
        <Reveal style={{ position: "relative", zIndex: 2, maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <div className="label-text" style={{ marginBottom: "1rem" }}>Ready to Partner?</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F0EDE8", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            Ready to work<br />together?
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.875rem", color: "rgba(240,237,232,0.65)", lineHeight: 1.8, marginBottom: "2rem" }}>
            Tell us about your project, your timeline, and your volume requirements. We'll respond within one business day.
          </p>
          <Link href="/contact">
            <span className="btn-gold">Start the Conversation</span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
