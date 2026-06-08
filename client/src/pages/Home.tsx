/*
 * ARTIFACT MFG — Home Page
 * Design: Dark Prestige / Architectural Editorial
 * - Full-viewport hero with concrete fireplace image
 * - Dual-audience bifurcation (homeowners vs builders)
 * - Product category grid
 * - Manifesto excerpt with pull-quote
 * - Testimonials
 * - CTA section
 */

import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/useMobile";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";

const HERO_IMG = "/images/fireplace-hero-v4_8c4f346b.png";
const SINK_IMG = "/images/sink-gucci-enhanced_73d9a9ab.png";
const COUNTER_IMG = "/images/countertop-kitchen-island-v2_082db10b.png";
const WALL_PANELS_IMG = "/images/wall-panels-angle2-enhanced_1fff9af1.png";
const BARTOP_IMG = "/images/bartop-commercial-raw_32573b4f.png";
const DETAIL_IMG = "/images/fireplace-panel-final_c4803498.png";
const WHITE_FLUTED_IMG = "/images/fireplace-fluted-white-enhanced_78ed2f91.png";
const GRAND_WHITE_SURROUND_IMG = "/images/fireplace-large-white-surround-enhanced_a549879f.png";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function RevealDiv({ children, style, className }: { children: React.ReactNode; style?: React.CSSProperties; className?: string }) {
  const ref = useReveal();
  return <div ref={ref} className={`reveal${className ? " " + className : ""}`} style={style}>{children}</div>;
}

const testimonials = [
  {
    quote: "Their concrete work is truly impeccable, and they consistently bring our vision to life with exceptional craftsmanship and attention to detail. The end result always exceeds expectations.",
    name: "Madeline Bauman",
    title: "Interior Designer · Dayton, OH"
  },
  {
    quote: "We had a fantastic experience working with Jason and Jenelle on a bespoke concrete table top... Jason isn't just 'a guy who does concrete' — he's the person to create you something exceptional!",
    name: "Kate Daley",
    title: "Homeowner"
  },
  {
    quote: "Working with Jason and Jenelle was an absolute pleasure! High-quality materials and craftsmanship... highly organized and met all projected timelines.",
    name: "Patti Bearley",
    title: "Homeowner"
  },
  {
    quote: "We couldn't be happier with how they turned out... Everyone who has visited our new basement bar has commented on the stunning countertops.",
    name: "Laura Phillips",
    title: "Homeowner"
  },
];

export default function Home() {
  useSEO({ title: "Artifact Mfg — Artisan Concrete | Springboro, Ohio", description: "Handcrafted concrete countertops, fireplace surrounds, sinks, and furniture. Custom artisan concrete for homes and businesses in Dayton, Cincinnati, and the tri-state area." });
  const isMobile = useIsMobile();
  return (
    <div style={{ backgroundColor: "#111010" }}>

      {/* ─── HERO ─── */}
      <section style={{ position: "relative", height: isMobile ? "60vh" : "100vh", minHeight: isMobile ? "400px" : "600px", overflow: "hidden" }}>
        <img
          src={HERO_IMG}
          alt="Custom concrete fireplace surround by Artifact Mfg"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: isMobile ? "60% center" : "center center" }}
        />
        {/* Dark overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(17,16,16,0.75) 0%, rgba(17,16,16,0.3) 60%, rgba(17,16,16,0.1) 100%)" }} />

        {/* Hero content */}
        <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 2rem 0 4rem", maxWidth: "1440px", margin: "0 auto" }}>
          <div style={{ maxWidth: "640px" }}>
            <div className="label-text" style={{ marginBottom: "1.5rem", opacity: 0, animation: "fadeUp 0.8s 0.3s ease forwards" }}>
              Artisan Concrete · Springboro, Ohio
            </div>

            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "1rem",
              fontWeight: 300,
              color: "rgba(240,237,232,0.75)",
              lineHeight: 1.8,
              maxWidth: "420px",
              marginBottom: "2.5rem",
              opacity: 0,
              animation: "fadeUp 0.9s 0.7s ease forwards",
            }}>
              We cast concrete to be honest, durable, and alive — for countertops, sinks, fireplaces, furniture, and panels that hold your stories and stand the test of time.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "3rem", opacity: 0, animation: "fadeUp 0.9s 0.9s ease forwards" }}>
              <Link href="/products">
                <span className="btn-gold">View Our Portfolio</span>
              </Link>
              <Link href="/contact">
                <span className="btn-ghost">Begin Your Project</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator" style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", opacity: 0, animation: "fadeUp 1s 1.2s ease forwards" }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8A8480" }}>Scroll</span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, #C9A96E, transparent)" }} />
        </div>
      </section>

      {/* ─── DUAL AUDIENCE ─── */}
      <section style={{ backgroundColor: "#111010", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 2rem" }}>
          <RevealDiv style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="label-text" style={{ marginBottom: "1rem" }}>Who We Serve</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F0EDE8", lineHeight: 1.2 }}>
              One Material. Two Paths.
            </h2>
          </RevealDiv>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "0.75rem" }}>
            {/* Homeowners card */}
            <RevealDiv style={{ position: "relative", overflow: "hidden", minHeight: "480px" }}>
              <img src="/images/countertop-navy-kitchen_8be38a60.png" alt="Natural White kitchen with copper pendants" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.transform = "scale(1.04)"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.transform = "scale(1)"}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(17,16,16,0.88) 40%, rgba(17,16,16,0.25) 100%)" }} />
              <div style={{ position: "relative", zIndex: 2, padding: "3rem 2.5rem", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <div className="label-text" style={{ marginBottom: "0.75rem" }}>Homeowners & Designers</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "1.75rem", color: "#F0EDE8", marginBottom: "1rem", lineHeight: 1.2 }}>
                  A Piece Made<br />Only for You
                </h3>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.875rem", color: "rgba(240,237,232,0.7)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                  Every casting carries the subtle fingerprints of the maker. Fully custom dimensions, finishes, and profiles — designed around your space and your life.
                </p>
                <Link href="/products">
                  <span className="btn-gold" style={{ alignSelf: "flex-start" }}>View Products</span>
                </Link>
              </div>
            </RevealDiv>

            {/* Builders card */}
            <RevealDiv style={{ position: "relative", overflow: "hidden", minHeight: "480px", transitionDelay: "0.15s" }}>
              <img src="/images/fireplace-fluted-dark-enhanced_02f4ce55.png" alt="Dark fluted concrete fireplace surround" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.transform = "scale(1.04)"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.transform = "scale(1)"}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(17,16,16,0.88) 40%, rgba(17,16,16,0.25) 100%)" }} />
              <div style={{ position: "relative", zIndex: 2, padding: "3rem 2.5rem", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <div className="label-text" style={{ marginBottom: "0.75rem" }}>Builders & Developers</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "1.75rem", color: "#F0EDE8", marginBottom: "1rem", lineHeight: 1.2 }}>
                  The Trace Collection
                </h3>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.875rem", color: "rgba(240,237,232,0.7)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                  Repeatable fireplace surrounds for developers, builders, and fireplace retailers — each piece still carrying the subtle variations that make concrete feel alive.
                </p>
                <Link href="/for-builders">
                  <span className="btn-gold" style={{ alignSelf: "flex-start" }}>Learn About Partnerships</span>
                </Link>
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* ─── PRODUCT CATEGORIES ─── */}
      <section style={{ backgroundColor: "#0D0C0C", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 2rem" }}>
          <RevealDiv style={{ marginBottom: "3.5rem" }}>
            <div className="label-text" style={{ marginBottom: "0.75rem" }}>What We Make</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", color: "#F0EDE8" }}>
              Six Forms. One Material.
            </h2>
          </RevealDiv>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1px", backgroundColor: "rgba(255,255,255,0.05)" }}>
            {[
              { title: "Fireplaces", desc: "Handcrafted hearths, mantles, and surrounds — the centerpiece of any room.", href: "/fireplaces", img: GRAND_WHITE_SURROUND_IMG },
              { title: "Countertops & Bars", desc: "Concrete brings beauty and brawn to your favorite spaces.", href: "/countertops", img: COUNTER_IMG },
              { title: "Sinks & Vanities", desc: "Custom-fit commercial or residential sinks, formed by hand.", href: "/sinks", img: SINK_IMG },
              { title: "Commercial Bar Tops", desc: "Large-format bar tops for restaurants, breweries, and hospitality.", href: "/commercial", img: BARTOP_IMG },
              { title: "Wall & Shower Panels", desc: "Large-format concrete tiles and custom panels for dramatic spaces.", href: "/panels", img: WALL_PANELS_IMG },
              { title: "Tables & Furniture", desc: "Dining tables, coffee tables, desks, and grill stations — built top to base.", href: "/furniture", img: "/images/furniture-coffee-table-cedar-raw_5ed1608d.png" },
            ].map((cat, i) => (
              <RevealDiv key={cat.title} style={{ transitionDelay: `${i * 0.08}s` }}>
                <Link href={cat.href}>
                  <div style={{ backgroundColor: "#111010", padding: "0", cursor: "pointer", overflow: "hidden", position: "relative" }}
                    onMouseEnter={(e) => { const img = (e.currentTarget as HTMLElement).querySelector("img"); if (img) img.style.transform = "scale(1.05)"; }}
                    onMouseLeave={(e) => { const img = (e.currentTarget as HTMLElement).querySelector("img"); if (img) img.style.transform = "scale(1)"; }}
                  >
                    <div style={{ height: "200px", overflow: "hidden", position: "relative" }}>
                      <img src={cat.img} alt={cat.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} />
                      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(17,16,16,0.65)" }} />
                    </div>
                    <div style={{ padding: "1.5rem" }}>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "1.2rem", color: "#F0EDE8", marginBottom: "0.5rem" }}>{cat.title}</h3>
                      <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: "#8A8480", lineHeight: 1.7 }}>{cat.desc}</p>
                      <div style={{ marginTop: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A96E" }}>Explore</span>
                        <span style={{ color: "#C9A96E", fontSize: "0.75rem" }}>→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MANIFESTO EXCERPT ─── */}
      <section style={{ backgroundColor: "#111010", padding: "7rem 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${DETAIL_IMG})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.04 }} />
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 2 }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "2rem" : "6rem", alignItems: "center" }}>
            <RevealDiv>
              <div className="label-text" style={{ marginBottom: "1.5rem" }}>The Concrete Manifesto</div>
              <blockquote style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "#F0EDE8",
                lineHeight: 1.4,
                borderLeft: "2px solid #C9A96E",
                paddingLeft: "2rem",
                marginBottom: "2rem",
              }}>
                "We cast concrete to be honest, durable, and alive. It rejects the sterile shine of perfection and offers something better: pieces that age with you, hold your stories, and stand the test of time."
              </blockquote>
              <Link href="/manifesto">
                <span className="btn-gold">Read the Full Manifesto</span>
              </Link>
            </RevealDiv>

            <RevealDiv style={{ transitionDelay: "0.2s" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {[
                  { num: "I", title: "The Nature of Handcrafted Concrete", desc: "No two castings are identical. Every piece carries artifacts — the subtle fingerprints of the maker." },
                  { num: "II", title: "Longevity Is Earned Through Care", desc: "Concrete stands. It holds heat, shrugs off spills, radiates warmth long after the fire dies." },
                  { num: "III", title: "Uniqueness Through Craft", desc: "Whether fully bespoke or part of our Trace Collection, we never surrender the human touch." },
                  { num: "IV", title: "Sustainability Runs Through Every Form", desc: "Responsibly sourced UHPC mixes that incorporate recycled industrial byproducts. Nothing harmful goes in." },
                ].map((p) => (
                  <div key={p.num} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic", fontSize: "1.5rem", color: "#C9A96E", minWidth: "2rem", lineHeight: 1 }}>{p.num}</div>
                    <div>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F0EDE8", marginBottom: "0.35rem" }}>{p.title}</div>
                      <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: "#8A8480", lineHeight: 1.7 }}>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section style={{ backgroundColor: "#0D0C0C", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 2rem" }}>
          <RevealDiv style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="label-text" style={{ marginBottom: "0.75rem" }}>Client Words</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", color: "#F0EDE8" }}>
              What Our Clients Say
            </h2>
          </RevealDiv>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", backgroundColor: "rgba(255,255,255,0.05)" }}>
            {testimonials.map((t, i) => (
              <RevealDiv key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div style={{ backgroundColor: "#111010", padding: "2.5rem 2rem", height: "100%" }}>
                  <div style={{ color: "#C9A96E", fontSize: "2rem", fontFamily: "'Cormorant Garamond', serif", lineHeight: 1, marginBottom: "1rem" }}>"</div>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.875rem", color: "rgba(240,237,232,0.8)", lineHeight: 1.8, marginBottom: "1.5rem", fontStyle: "italic" }}>
                    {t.quote}
                  </p>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1rem" }}>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F0EDE8" }}>{t.name}</div>
                    {t.title && <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "#8A8480", marginTop: "0.25rem" }}>{t.title}</div>}
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section style={{ position: "relative", padding: "8rem 2rem", overflow: "hidden" }}>
        <img src={COUNTER_IMG} alt="Custom concrete countertop by Artifact Mfg — Springboro, Ohio" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(17,16,16,0.82)" }} />
        <RevealDiv style={{ position: "relative", zIndex: 2, maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <div className="label-text" style={{ marginBottom: "1.25rem" }}>Start the Conversation</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#F0EDE8", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Let time do the rest.
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", color: "rgba(240,237,232,0.7)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            Whether you're designing a single statement piece or ordering at scale, we'd love to hear about your project.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact">
              <span className="btn-gold">Begin Your Project</span>
            </Link>
            <Link href="/process">
              <span className="btn-ghost">Our Process</span>
            </Link>
          </div>
        </RevealDiv>
      </section>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          section > div > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </div>
  );
}
