/*
 * ARTIFACT MFG — About Page
 */
import { useEffect, useRef } from "react";
import { useSEO } from "@/hooks/useSEO";

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

export default function About() {
  useSEO({ title: "About | Artifact Mfg.", description: "The story behind Artifact Mfg. — how a philosophy professor ended up making concrete for a living, and why it was the right move." });
  return (
    <div style={{ backgroundColor: "#111010" }}>

      {/* Hero */}
      <section style={{ position: "relative", height: "85vh", overflow: "hidden" }}>
        <img
          src="/images/about-jason-jenelle.jpg"
          alt="Jason and Jenelle Robertson, founders of Artifact Mfg."
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(17,16,16,1) 0%, rgba(17,16,16,0.55) 60%, rgba(17,16,16,0.25) 100%)" }} />
        <div className="hero-text-overlay">
          <div className="label-text" style={{ marginBottom: "0.75rem" }}>Artifact Mfg.</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#F0EDE8", lineHeight: 1.0 }}>
            About
          </h1>
        </div>
      </section>

      {/* Body text */}
      <section style={{ padding: "6rem 0 8rem", backgroundColor: "#111010" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }} className="page-x">

          <Reveal>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", color: "rgba(240,237,232,0.8)", lineHeight: 1.95, marginBottom: "1.5rem" }}>
              People occasionally ask how a philosophy professor ends up making concrete for a living.
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", color: "rgba(240,237,232,0.8)", lineHeight: 1.95, marginBottom: "1.5rem" }}>
              It's a fair question.
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", color: "rgba(240,237,232,0.8)", lineHeight: 1.95, marginBottom: "1.5rem" }}>
              A few years ago, I left academia to start Artifact. Looking back, it probably wasn't the obvious career move, but it was the right one.
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", color: "rgba(240,237,232,0.8)", lineHeight: 1.95, marginBottom: "1.5rem" }}>
              I wanted to build something.
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", color: "rgba(240,237,232,0.8)", lineHeight: 1.95, marginBottom: "1.5rem" }}>
              Not just a business, but a body of work that would stand on its own. One project at a time. One client at a time. One mistake, one lesson, and one improvement at a time.
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", color: "rgba(240,237,232,0.8)", lineHeight: 1.95, marginBottom: "1.5rem" }}>
              Today, Artifact designs and fabricates custom concrete fireplaces, countertops, sinks, furniture, and architectural concrete elements from our shop in southwest Ohio. We work with homeowners, architects, builders, designers, and commercial developers on projects ranging from a single custom piece to large-scale production runs.
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", color: "rgba(240,237,232,0.8)", lineHeight: 1.95, marginBottom: "1.5rem" }}>
              If there's one thing my years teaching philosophy gave me, it wasn't answers. It was an appreciation for asking better questions.
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", color: "rgba(240,237,232,0.8)", lineHeight: 1.95, marginBottom: "1.5rem", paddingLeft: "1.5rem", borderLeft: "1px solid rgba(240,237,232,0.2)" }}>
              How should this piece be built?<br />
              Will this detail still make sense ten years from now?<br />
              Is concrete actually the right material for this project?
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", color: "rgba(240,237,232,0.8)", lineHeight: 1.95, marginBottom: "1.5rem" }}>
              Sometimes the answer to that last question is no.
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", color: "rgba(240,237,232,0.8)", lineHeight: 1.95, marginBottom: "1.5rem" }}>
              We're perfectly comfortable saying that.
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", color: "rgba(240,237,232,0.8)", lineHeight: 1.95, marginBottom: "4rem" }}>
              Other materials do some things better than concrete, and we'd rather lose a project than convince someone to choose the wrong material. But when concrete is the right choice, we think it offers something that's difficult to find anywhere else.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", color: "rgba(240,237,232,0.8)", lineHeight: 1.95, marginBottom: "1.5rem" }}>
              People also ask why we don't have a showroom.
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", color: "rgba(240,237,232,0.8)", lineHeight: 1.95, marginBottom: "1.5rem" }}>
              The honest answer is that, when we started, we couldn't afford one.
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", color: "rgba(240,237,232,0.8)", lineHeight: 1.95, marginBottom: "4rem" }}>
              The unexpected answer is that we've never really missed it.
            </p>
          </Reveal>

          {/* Shop Photo */}
          <Reveal>
            <div style={{ width: "100%", marginBottom: "4rem", overflow: "hidden" }}>
              <img
                src="/images/about-jason-shop.jpg"
                alt="Jason Robertson fabricating concrete in the Artifact Mfg. shop"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", color: "rgba(240,237,232,0.8)", lineHeight: 1.95, marginBottom: "1.5rem" }}>
              Instead, we invite people into our home. They see countertops we've lived with for years, not displays designed to sell them. They get a better sense of what concrete actually looks like, how it ages, and whether it's a material they want to live with.
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", color: "rgba(240,237,232,0.8)", lineHeight: 1.95, marginBottom: "1.5rem" }}>
              Artifact has grown far beyond what my wife, Jenelle, and I imagined when we started. While her career as a physical therapist keeps her busy, her encouragement, perspective, and willingness to believe this crazy idea might actually work have shaped the business from the beginning.
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", color: "rgba(240,237,232,0.8)", lineHeight: 1.95, marginBottom: "1.5rem" }}>
              At the end of the day, this isn't really a story about concrete.
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", color: "rgba(240,237,232,0.8)", lineHeight: 1.95, marginBottom: "1.5rem" }}>
              It's about trying to do honest work, continuing to learn, and making things that deserve to outlast us.
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", color: "rgba(240,237,232,0.8)", lineHeight: 1.95, marginBottom: "4rem" }}>
              If that sounds like the kind of company you're looking for, we'd be glad to start a conversation.
            </p>
          </Reveal>

        </div>
      </section>
    </div>
  );
}
