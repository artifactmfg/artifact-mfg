import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/useMobile";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";

const SINK_GUCCI_IMG = "/images/sink-gucci-enhanced_73d9a9ab.png";
const SINK_PINK_IMG = "/images/sink-pink-double-enhanced_eb432b6c.png";
const COUNTER_IMG = "/images/countertop-alabaster-island-bowl-raw_61299c71.webp";
const WALL_PANELS_IMG = "/images/wall-panels-angle2-enhanced_1fff9af1.png";
const FIREPLACE_IMG = "/images/fireplace-fluted-dark-enhanced_02f4ce55.png";
const BARTOP_IMG = "/images/bartop-commercial-raw_32573b4f.png";
const FURNITURE_IMG = "/images/furniture-coffee-table-cedar-raw_5ed1608d.png";

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

const products = [
  { title: "Fireplaces", desc: "Handcrafted surrounds, hearths, and mantles — the architectural anchor of any room. Fully custom dimensions, profiles, and finishes.", img: FIREPLACE_IMG, href: "/fireplaces", cta: "Explore Fireplaces" },
  { title: "Countertops & Bars", desc: "Concrete brings both beauty and brawn to your favorite spaces to prepare food, dine, or share a beverage with friends. From residential kitchens, to basement bars and pool houses — any color, any form.", img: COUNTER_IMG, href: "/countertops", cta: "Explore Countertops & Bars" },
  { title: "Sinks & Vanities", desc: "Vessels, vanities, or floating — hand-formed basins with character that no factory can replicate. Custom dimensions, custom color, custom form.", img: SINK_GUCCI_IMG, href: "/sinks", cta: "Explore Sinks & Vanities" },
  { title: "Commercial Bar Tops", desc: "Large-format concrete bar tops for restaurants, breweries, and hospitality spaces. We handle the scale, the profile, and the finish — you handle the experience.", img: BARTOP_IMG, href: "/commercial", cta: "Explore Commercial Bar Tops" },
  { title: "Wall & Shower Panels", desc: "Create a luxury shower or dramatic feature wall with large-format concrete panels. Custom dimensions and a finish that improves with age.", img: WALL_PANELS_IMG, href: "/panels", cta: "Explore Wall & Shower Panels" },
  { title: "Tables & Furniture", desc: "Concrete dining tables, coffee tables, desks, and outdoor grill stations — each piece built entirely in-house, from the concrete top to the custom base.", img: FURNITURE_IMG, href: "/furniture", cta: "Explore Tables & Furniture" },
];

export default function Products() {
  useSEO({ title: "Artisan Concrete Products | Artifact Mfg", description: "Explore the full range of handcrafted concrete from Artifact Mfg — fireplaces, countertops, sinks, furniture, wall panels, and commercial bar tops." });
  const isMobile = useIsMobile();
  return (
    <div style={{ backgroundColor: "#111010" }}>
      {/* Page header */}
      <section style={{ paddingTop: isMobile ? "100px" : "140px", paddingBottom: "4rem", backgroundColor: "#0D0C0C" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>
          <Reveal>
            <div className="label-text" style={{ marginBottom: "0.75rem" }}>What We Make</div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F0EDE8", lineHeight: 1.05 }}>
              Six Forms.<br />One Material.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Products */}
      <section style={{ padding: "4rem 0 6rem", backgroundColor: "#111010" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>
          {products.map((p, i) => (
            <Reveal key={p.title} style={{ marginBottom: "1px" }}>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "0", backgroundColor: "#0D0C0C", overflow: "hidden" }}>
                <Link href={p.href} style={{ order: isMobile ? 1 : (i % 2 === 0 ? 1 : 2), overflow: "hidden", minHeight: "380px", position: "relative", display: "block", cursor: "pointer" }}>
                  <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0, transition: "transform 0.6s ease" }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.transform = "scale(1.04)"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.transform = "scale(1)"}
                  />
                  <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(17,16,16,0.45)", pointerEvents: "none" }} />
                </Link>
                <div style={{ order: isMobile ? 2 : (i % 2 === 0 ? 2 : 1), padding: isMobile ? "2rem 1.5rem" : "4rem 3rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic", fontSize: "3rem", color: "rgba(201,169,110,0.15)", lineHeight: 1, marginBottom: "0.5rem" }}>0{i + 1}</div>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#F0EDE8", marginBottom: "1rem", lineHeight: 1.2 }}>{p.title}</h2>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.875rem", color: "#8A8480", lineHeight: 1.85, marginBottom: "2rem" }}>{p.desc}</p>
                  <Link href={p.href}>
                    <span className="btn-gold" style={{ alignSelf: "flex-start" }}>{p.cta}</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .product-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
