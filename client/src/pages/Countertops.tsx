/**
 * ARTIFACT MFG — Countertops & Bars Page
 * Design: Dark Prestige / Architectural Editorial
 */
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/useMobile";
import { Link } from "wouter";
import Lightbox from "@/components/Lightbox";
import ConcreteFinishes from "@/components/ConcreteFinishes";

const HERO_IMG = "/images/countertop-kitchen-island-v2_082db10b.png";
const ALABASTER_ISLAND_IMG = "/images/countertop-alabaster-island-bowl-raw_61299c71.webp";
const FARMHOUSE_IMG = "/images/countertop-farmhouse-kitchen_f122faec.png";
const HAND_CARVED_BAR_IMG = "/images/countertop-live-edge-bar_46da1133.png";
const NAVY_KITCHEN_IMG = "/images/countertop-navy-kitchen_8be38a60.png";
const BOURBON_BAR_IMG = "/images/countertop-bourbon-bar_98c80115.png";
const BENGALS_BAR_IMG = "/images/countertop-bengals-bar_1a07dfa4.png";
const LAKEFRONT_BAR_IMG = "/images/countertop-lakefront-bar-enhanced_57c413bf.png";
const OUTDOOR_LBAR_IMG = "/images/countertop-outdoor-lbar-enhanced_05524d65.png";
const WHITE_KITCHEN_IMG = "/images/countertop-white-kitchen-enhanced_11ce65dc.png";
const WATERFALL_ISLAND_IMG = "/images/countertop-waterfall-island-raw_9885f323.png";
const OUTDOOR_KITCHEN_IMG = "/images/countertop-outdoor-kitchen-enhanced_806de99e.png";
const DARK_HOME_BAR_IMG = "/images/countertop-dark-home-bar-raw_75ce84df.png";
const WALNUT_BAR_IMG = "/images/countertop-walnut-bar-integral-sink-v2_0ca6359a.png";

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
  { img: HERO_IMG, title: "Cast Gray Kitchen Island", desc: "Large-format island top in Cast Gray with subtle mineral variation.", tag: "Residential · Cast Gray" },
  { img: FARMHOUSE_IMG, title: "Farmhouse Kitchen Suite", desc: "Alabaster perimeter countertops and island. Clean and luminous.", tag: "Residential · Alabaster" },
  { img: HAND_CARVED_BAR_IMG, title: "Bar Top", desc: "L-shaped basement bar top with a pronounced Artisan finish and hand-carved edge profile.", tag: "Residential · Artisan Finish" },
  { img: NAVY_KITCHEN_IMG, title: "Alabaster Kitchen Island", desc: "Alabaster island in a new build kitchen.", tag: "Residential · Alabaster" },
  { img: BOURBON_BAR_IMG, title: "Basement Bourbon Bar", desc: "Cast Gray home bar. The concrete anchors the room without competing with the collection.", tag: "Residential · Cast Gray" },
  { img: BENGALS_BAR_IMG, title: "L-Shaped Bar Top", desc: "Large L-shaped Cast Gray bar top.", tag: "Residential · Cast Gray" },
  { img: LAKEFRONT_BAR_IMG, title: "Curved Bar Top", desc: "A sweeping curved bar top. The concrete follows the arc of the space — cast to fit, built to outlast the view.", tag: "Outdoor · Cast Gray" },
  { img: OUTDOOR_LBAR_IMG, title: "Poolside Bar", desc: "L-shaped Graphite bar top. Built for outdoor entertaining.", tag: "Outdoor · Graphite" },
  { img: WATERFALL_ISLAND_IMG, title: "U-Shaped Kitchen Island", desc: "Large U-shaped Cast Gray island in a new build. Refined finish.", tag: "Residential · Cast Gray · Refined" },
  { img: OUTDOOR_KITCHEN_IMG, title: "Outdoor Kitchen", desc: "Full outdoor kitchen in Cast Gray with an integral waterfall edge.", tag: "Outdoor · Cast Gray" },
  { img: WALNUT_BAR_IMG, title: "Anthracite Bar with Integral Sink", desc: "Anthracite bar top with integral sink and matching floor tile. An integral sink can be added to any bar top.", tag: "Residential · Anthracite" },
];



const lbImages = projects.map(p => ({ src: p.img, alt: p.title, title: p.title, subtitle: p.tag }));

export default function Countertops() {
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
        <img src={HERO_IMG} alt="Concrete kitchen island countertop" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(17,16,16,1) 0%, rgba(17,16,16,0.45) 55%, rgba(17,16,16,0.15) 100%)" }} />
        <div style={{ position: "absolute", bottom: "4rem", left: 0, right: 0, padding: "0 4rem", maxWidth: "1440px", margin: "0 auto" }}>
          <div className="label-text" style={{ marginBottom: "0.75rem" }}>Signature Work</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#F0EDE8", lineHeight: 1.0 }}>
            Countertops & Bars
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "6rem 0", backgroundColor: "#111010" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "2rem" : "6rem", alignItems: "center" }}>
            <Reveal>
              <div className="label-text" style={{ marginBottom: "1rem" }}>Built for the Way You Live</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#F0EDE8", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                A Surface That Earns<br />Its Place in Your Home.
              </h2>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", color: "#8A8480", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                Concrete countertops are not a trend — they are a return to material honesty. Every surface we cast is unique: the color, the texture, the way light moves across it. No two are identical, and none will look like anything you've seen in a showroom.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", color: "#8A8480", lineHeight: 1.85, marginBottom: "2rem" }}>
                We cast kitchen islands, bar tops, bathroom vanities, and outdoor kitchen surfaces. Every piece is finished to preserve the material's natural character.
              </p>
              <Link href="/contact">
                <span className="btn-gold">Start Your Project</span>
              </Link>
            </Reveal>
            <Reveal delay={0.2} style={{ position: "relative" }}>
              <img src={ALABASTER_ISLAND_IMG} alt="Alabaster concrete kitchen island" style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover" }} />
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
                  <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", transition: "transform 0.6s ease", display: "block" }}
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

      <ConcreteFinishes heading="Finishes & Pigments" />

      {/* CTA */}
      <section style={{ padding: "5rem 0", backgroundColor: "#0D0C0C" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>
          <Reveal>
            <div style={{ border: "1px solid rgba(201,169,110,0.2)", padding: "3rem 4rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
              <div>
                <div className="label-text" style={{ marginBottom: "0.5rem" }}>Ready to Begin?</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "1.75rem", color: "#F0EDE8", lineHeight: 1.2 }}>
                  Every surface starts<br />with a conversation.
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
