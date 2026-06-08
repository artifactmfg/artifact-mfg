/**
 * ARTIFACT MFG — Commercial Bar Tops Page
 * Design: Dark Prestige / Architectural Editorial
 */
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/useMobile";
import { Link } from "wouter";
import Lightbox from "@/components/Lightbox";

const HERO_IMG = "/images/bartop-commercial-raw_32573b4f.png";
const ELM_STREET_IMG = "/images/commercial-elm-street-plaza-raw_71d6d535.png";
const WINE_BAR_IMG = "/images/bartop-winebar-raw_76be040c.png";
const MADISON_BOWL_IMG = "/images/commercial-madison-bowl-enhanced_72edffe0.png";
const MOELLER_IMG = "/images/commercial-moeller-enhanced_830bea10.png";
const PH = (label: string) => `https://placehold.co/800x600/1a1a1a/555555?text=${encodeURIComponent(label)}`;

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
    img: HERO_IMG,
    title: "Moeller Brew Barn",
    desc: "Full-length Cast Gray bar top for a high-volume craft brewery. Large-format concrete that handles daily service without complaint — and looks better every year.",
    tag: "Commercial · Cast Gray",
  },
  {
    img: MOELLER_IMG,
    title: "Moeller Brew Barn — Bar Face",
    desc: "The end cap of the Moeller Brew Barn bar, featuring a custom rooster logo steel-inlayed into the concrete face. Branding and material in one piece.",
    tag: "Commercial · Cast Gray",
  },
  {
    img: ELM_STREET_IMG,
    title: "Elm Street Plaza Bar",
    desc: "A curved Anthracite bar top anchoring an open-air commercial space. The radius edge and dark finish give this bar a bold, modern presence.",
    tag: "Commercial · Anthracite",
  },
  {
    img: WINE_BAR_IMG,
    title: "Prime and Vine Wine Bar",
    desc: "Alabaster bar top in a boutique wine bar. The concrete glows under pendant lighting.",
    tag: "Commercial · Alabaster",
  },
  {
    img: MADISON_BOWL_IMG,
    title: "Madison Bowl",
    desc: "A long Graphite bar top running the length of the bowling alley's lounge. Artisan finish, built for high-traffic commercial use.",
    tag: "Commercial · Graphite · Artisan Finish",
  },

];

const lbImages = projects.map(p => ({ src: p.img, alt: p.title, title: p.title, subtitle: p.tag }));

export default function Commercial() {
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
        <img src={HERO_IMG} alt="Moeller Brew Barn concrete bar top" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(17,16,16,1) 0%, rgba(17,16,16,0.45) 55%, rgba(17,16,16,0.15) 100%)" }} />
        <div style={{ position: "absolute", bottom: "4rem", left: 0, right: 0, padding: "0 4rem", maxWidth: "1440px", margin: "0 auto" }}>
          <div className="label-text" style={{ marginBottom: "0.75rem" }}>Commercial Work</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#F0EDE8", lineHeight: 1.0 }}>
            Commercial Bar Tops
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "6rem 0", backgroundColor: "#111010" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "2rem" : "6rem", alignItems: "center" }}>
            <Reveal>
              <div className="label-text" style={{ marginBottom: "1rem" }}>Custom Commercial Work</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#F0EDE8", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                A Surface Built<br />for the Space It Lives In.
              </h2>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", color: "#8A8480", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                Commercial concrete surfaces face a different standard. They need to handle daily service, spills, heat, and the weight of a busy operation — without losing their character. Our UHPC concrete is engineered for exactly this.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", color: "#8A8480", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                We work with restaurants, breweries, wine bars, hotels, and coffee shops. Large-format bar tops, host stands, service counters, and outdoor bars. Every piece is a one-off — cast to your dimensions, your finish, your space.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", color: "#8A8480", lineHeight: 1.85, marginBottom: "2rem" }}>
                There is no catalog. There is only your project, and what it deserves.
              </p>
              <Link href="/contact">
                <span className="btn-gold">Discuss Your Project</span>
              </Link>
            </Reveal>
            <Reveal delay={0.2} style={{ position: "relative" }}>
              <img src={MOELLER_IMG} alt="Moeller Brew Barn bar face with custom steel inlay" style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", objectPosition: "center" }} />
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
                <div
                  style={{ position: "relative", overflow: "hidden", aspectRatio: "4/3", cursor: "pointer" }}
                  onClick={() => setLbIndex(i)}
                >
                  <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease", display: "block" }}
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
