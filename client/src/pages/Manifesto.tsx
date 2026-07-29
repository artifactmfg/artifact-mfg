/*
 * ARTIFACT MFG — The Concrete Manifesto
 */
import { useEffect, useRef } from "react";
import { useSEO } from "@/hooks/useSEO";

// CloudFront texture replaced with a local concrete detail image
const TEXTURE_IMG = "/images/fireplace-charcoal-fullheight-raw_a595fe3c.png";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}
function Reveal({ children, style, delay = 0 }: { children: React.ReactNode; style?: React.CSSProperties; delay?: number }) {
  const ref = useReveal();
  return <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}s`, ...style }}>{children}</div>;
}

export default function Manifesto() {
  useSEO({ title: "Our Philosophy | Artifact Mfg.", description: "Why we work in concrete. The philosophy behind Artifact Mfg. and what drives Jason and Jenelle Robertson's approach to handcrafted work." });
  return (
    <div style={{ backgroundColor: "#111010" }}>
      {/* Hero */}
      <section style={{ position: "relative", height: "55vh", minHeight: "380px", overflow: "hidden" }}>
        <img src={TEXTURE_IMG} alt="Full-height charcoal concrete fireplace" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(17,16,16,1) 0%, rgba(17,16,16,0.55) 60%, rgba(17,16,16,0.25) 100%)" }} />
        <div className="hero-text-overlay">
          <div className="label-text" style={{ marginBottom: "0.75rem" }}>Artifact Mfg.</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#F0EDE8", lineHeight: 1.0 }}>
            Our Philosophy
          </h1>
        </div>
      </section>

      {/* Manifesto text */}
      <section style={{ padding: "6rem 0 8rem", backgroundColor: "#111010" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }} className="page-x">

          {/* Preamble */}
          <Reveal>
            <div className="label-text" style={{ marginBottom: "1.5rem" }}>Preamble: One Material, Many Spaces</div>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", color: "rgba(240,237,232,0.8)", lineHeight: 1.95, marginBottom: "1.5rem" }}>
              We craft concrete not just for surfaces, but for the daily rituals and quiet moments of living — where meals are prepared and shared, hands are washed, work is done, and people gather around warmth. Countertops, sinks, fireplaces, tables, and desks: these are the essential, lived-in elements of a home.
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", color: "rgba(240,237,232,0.8)", lineHeight: 1.95, marginBottom: "4rem" }}>
              At Artifact Mfg., we cast concrete to be honest, durable, and alive. It rejects the sterile shine of perfection and offers something better: pieces that age with you, hold your stories, and stand the test of time.
            </p>
          </Reveal>

          {/* Principle I */}
          <Reveal delay={0.05}>
            <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", marginBottom: "4rem" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic", fontSize: "4rem", color: "rgba(201,169,110,0.2)", lineHeight: 1, flexShrink: 0, marginTop: "-0.5rem" }}>I</div>
              <div>
                <div className="label-text" style={{ marginBottom: "0.75rem" }}>Principle I</div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#F0EDE8", marginBottom: "1rem", lineHeight: 1.2 }}>
                  The Nature of Handcrafted Concrete
                </h2>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "rgba(240,237,232,0.7)", lineHeight: 1.9 }}>
                  Artisan concrete is a handcrafted material and will exhibit natural mottling, tonal movement, and subtle variation inherent to the casting process. These characteristics are considered part of the intended aesthetic of the product.
                </p>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "rgba(240,237,232,0.7)", lineHeight: 1.9, marginTop: "1rem" }}>
                  Every piece carries artifacts — the subtle fingerprints of the maker. A trowel's swirl, a gentle shift in tone where the mix met the mold, the faint trace of a hand's motion: these are not flaws. They are the honest evidence of human work. Concrete welcomes them. It breathes, settles, and wears its origin openly. What begins as a clean form becomes a living record — crafted, singular, uniquely yours.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Principle II */}
          <Reveal delay={0.05}>
            <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", marginBottom: "4rem" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic", fontSize: "4rem", color: "rgba(201,169,110,0.2)", lineHeight: 1, flexShrink: 0, marginTop: "-0.5rem" }}>II</div>
              <div>
                <div className="label-text" style={{ marginBottom: "0.75rem" }}>Principle II</div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#F0EDE8", marginBottom: "1rem", lineHeight: 1.2 }}>
                  Longevity Is Earned Through Care
                </h2>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "rgba(240,237,232,0.7)", lineHeight: 1.9 }}>
                  Life tests every surface. Hot pans on countertops. Soap scum in sinks. Embers on hearths. Hours of work at a desk. Cheap materials fade, chip, or crack. Concrete stands. It holds heat, shrugs off spills, radiates warmth long after the fire dies. It doesn't demand perfection — it asks for presence. Wipe it down. Live with it. In return, it gives decades of service, outlasting appliances, paint, even homes. This is not fragile luxury. This is quiet strength.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Principle III */}
          <Reveal delay={0.05}>
            <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", marginBottom: "4rem" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic", fontSize: "4rem", color: "rgba(201,169,110,0.2)", lineHeight: 1, flexShrink: 0, marginTop: "-0.5rem" }}>III</div>
              <div>
                <div className="label-text" style={{ marginBottom: "0.75rem" }}>Principle III</div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#F0EDE8", marginBottom: "1rem", lineHeight: 1.2 }}>
                  Uniqueness Through Craft
                </h2>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "rgba(240,237,232,0.7)", lineHeight: 1.9 }}>
                  Every casting begins with human hands. Whether it is a fully custom piece shaped entirely by your vision, or part of our Trace Collection for builders and developers, each one still carries its own subtle variation and artifacts. We never surrender the process to pure repetition. The result is work that feels singular — because your home, and your life, are singular too.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Principle IV */}
          <Reveal delay={0.05}>
            <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", marginBottom: "5rem" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic", fontSize: "4rem", color: "rgba(201,169,110,0.2)", lineHeight: 1, flexShrink: 0, marginTop: "-0.5rem" }}>IV</div>
              <div>
                <div className="label-text" style={{ marginBottom: "0.75rem" }}>Principle IV</div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#F0EDE8", marginBottom: "1rem", lineHeight: 1.2 }}>
                  Sustainability Runs Through Every Form
                </h2>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "rgba(240,237,232,0.7)", lineHeight: 1.9 }}>
                  We don't rip stone from mountains. We don't bind it with toxic resins. We start with responsibly sourced, pre-blended UHPC mixes that incorporate recycled industrial byproducts, reducing cement use and environmental impact. Water binds it. Heat cures it. Nothing harmful goes in, nothing harmful comes out. When the house is done, the concrete can be crushed and reused — clean fill, new paths, future foundations. Pigment it earth-red, clay-brown, fire-warm. Let it feel like it grew from the ground, not taken from it. This is daily life without waste.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Closing */}
          <Reveal>
            <div style={{ borderTop: "1px solid rgba(201,169,110,0.2)", paddingTop: "3rem", textAlign: "center" }}>
              <div className="label-text" style={{ marginBottom: "0.75rem" }}>Closing: Craft. Use. Live. Repeat.</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", color: "#F0EDE8", lineHeight: 2, marginBottom: "2rem" }}>
                Your countertop feeds.<br />
                Your sink cleans.<br />
                Your table gathers.<br />
                Your desk creates.<br />
                Your fireplace warms.<br />
                <br />
                Let them be honest.<br />
                Let them be strong.<br />
                Let them be yours.
              </div>
              <div style={{ width: "3rem", height: "1px", backgroundColor: "#C9A96E", margin: "2rem auto" }} />
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "1.1rem", color: "#C9A96E", marginBottom: "0.5rem" }}>
                At Artifact Mfg., the artifacts are the signature.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.875rem", color: "#8A8480", lineHeight: 1.8 }}>
                We craft the concrete.<br />
                You live the life.<br />
                Let time do the rest.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
