/**
 * ARTIFACT MFG — Sinks & Vanities Page
 * Design: Dark Prestige / Architectural Editorial
 */
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/useMobile";
import { Link } from "wouter";
import Lightbox from "@/components/Lightbox";
import ConcreteFinishes from "@/components/ConcreteFinishes";

const HERO_IMG = "/images/sink-gucci-enhanced_73d9a9ab.png";
const PINK_SINK_IMG = "/images/sink-pink-double-retro-v2_07881e18.png";
const BLUSH_DOUBLE_RAMP_IMG = "/images/sink-blush-double-ramp-raw_e32279ef.png";
const BW_BATHROOM_IMG = "/images/sink-bathroom-bw-enhanced_c9c0cfd6.png";
const FARMHOUSE_IMG = "/images/sink-farmhouse-raw_9d04435b.png";
const RAMP_SMALL_IMG = "/images/sink-ramp-small-raw_f6a83866.png";
const RAMP_MOELLER_IMG = "/images/sink-ramp-moeller-cleaned_2b785a73.png";
const VANITY_MN1_IMG = "/images/sink-vanity-mn-cabin1-raw_8ba62840.png";
const RAMP_MILE2_IMG = "/images/sink-ramp-mile2-enhanced_3f6748d4.png";
const RAMP_MADISON_IMG = "/images/sink-ramp-madison-bowl-raw_8b89e932.png";
const PARTY_BARN_IMG = "/images/sink-party-barn-graphite-raw_decc912b.png";
const BLACK_SINK_IMG = "/images/sink-black-raw_ac4de1c5.png";
const MARBLED_GRAY_IMG = "/images/sink-marbled-warm-gray-raw_e235e07a.png";
const VANITY_MN2_IMG = "/images/sink-vanity-mn-cabin2-raw_07f13914.png";
const COMMERCIAL_IMG = "/images/sink-commercial-warm-gray-enhanced_66928f7e.png";
const VESSEL_PRODUCT_IMG = "/images/sink-shop-vessel-product_fe9733b6.png";
const WALNUT_BAR_SINK_IMG = "/images/countertop-walnut-bar-integral-sink-v2_0ca6359a.png";
const TROUGH_VANITY_IMG = "/images/sink-trough-cast-gray_0c0ca0c2.webp";

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
  { img: HERO_IMG, title: "Floating Sink", desc: "Deep Anthracite concrete floating sink. A statement piece.", tag: "Residential · Anthracite" },
  { img: BLUSH_DOUBLE_RAMP_IMG, title: "Double Ramp Vanity", desc: "Dual integral ramp sinks in Blush with matte black gooseneck faucets.", tag: "Commercial · Blush", pos: "center 40%" },
  { img: TROUGH_VANITY_IMG, title: "Vanity Top with Integral Trough Sink", desc: "Cast Gray vanity top with an integral trough sink and a bold 2\" thick edge profile. The substantial edge gives the piece a sculptural presence without sacrificing function.", tag: "Residential · Cast Gray" },
  { img: BW_BATHROOM_IMG, title: "Vanity Suite", desc: "Two Anthracite vanity tops with integral sinks flank an Alabaster countertop. Three concrete pieces, one cohesive bathroom.", tag: "Residential · Anthracite · Alabaster" },
  { img: FARMHOUSE_IMG, title: "Hand-Pressed Vessel Sink", desc: "Fully hand-pressed and hand-carved vessel sink in Cast Gray. Every curve and edge shaped by hand.", tag: "Residential · Cast Gray" },
  { img: RAMP_SMALL_IMG, title: "Compact Ramp Sink", desc: "A compact Antiqued Cast Gray ramp sink designed for a tight space.", tag: "Residential · Cast Gray" },
  { img: RAMP_MOELLER_IMG, title: "Moeller Brew Barn", desc: "Floating Anthracite ramp sink. Industrial-grade concrete that fits the brewery's raw aesthetic.", tag: "Commercial · Anthracite" },
  { img: VANITY_MN1_IMG, title: "Vanity", desc: "Cast Gray vanity top with hammered copper drop-in sink.", tag: "Residential · Cast Gray" },
  { img: RAMP_MILE2_IMG, title: "8' Floating Ramp Sink", desc: "An 8-foot floating Cast Gray ramp sink. Set against exposed brick and concrete columns.", tag: "Commercial · Cast Gray" },
  { img: RAMP_MADISON_IMG, title: "Madison Bowl", desc: "Cast Gray ramp sink in a high-traffic commercial restroom.", tag: "Commercial · Cast Gray" },
  { img: PARTY_BARN_IMG, title: "Party Barn Sink", desc: "Anthracite concrete sink. Dark, dramatic, and built for a crowd.", tag: "Residential · Anthracite" },
  { img: BLACK_SINK_IMG, title: "Vanity Top with Integral Sink", desc: "Anthracite vanity top with integral sink. The material at its most dramatic.", tag: "Residential · Anthracite" },
  { img: MARBLED_GRAY_IMG, title: "Countertop with Integral Trough Sink", desc: "Cast Gray countertop with integral trough sink. Artisan finish.", tag: "Residential · Cast Gray · Artisan Finish", pos: "center 75%" },
  { img: VANITY_MN2_IMG, title: "Double Vanity", desc: "Cast Gray vanity top with hammered copper drop-in sink.", tag: "Residential · Cast Gray" },
  { img: COMMERCIAL_IMG, title: "Commercial Trough Sink", desc: "Wide-format Cast Gray concrete trough sink. Two faucet positions, one seamless basin.", tag: "Commercial · Cast Gray" },
  { img: VESSEL_PRODUCT_IMG, title: "Ramp Sink", desc: "A clean rectangular ramp sink in Cast Gray. Thick walls, tight geometry, refined finish.", tag: "Residential · Cast Gray · Refined Finish" },
  { img: WALNUT_BAR_SINK_IMG, title: "Bar with Integral Sink", desc: "Integral sink cast into an Anthracite bar top. An integral sink can be added to any bar top.", tag: "Residential · Anthracite · Integral" },
];



const lbImages = projects.map(p => ({ src: p.img, alt: p.title, title: p.title, subtitle: p.tag }));

export default function Sinks() {
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
        <img src={HERO_IMG} alt="Charcoal concrete sink with Gucci wallpaper" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(17,16,16,1) 0%, rgba(17,16,16,0.45) 55%, rgba(17,16,16,0.15) 100%)" }} />
        <div style={{ position: "absolute", bottom: "4rem", left: 0, right: 0, padding: "0 4rem", maxWidth: "1440px", margin: "0 auto" }}>
          <div className="label-text" style={{ marginBottom: "0.75rem" }}>Signature Work</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#F0EDE8", lineHeight: 1.0 }}>
            Sinks & Vanities
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "6rem 0", backgroundColor: "#111010" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "2rem" : "6rem", alignItems: "center" }}>
            <Reveal>
              <div className="label-text" style={{ marginBottom: "1rem" }}>Formed by Hand</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#F0EDE8", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                A Sink That Belongs<br />Nowhere Else.
              </h2>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", color: "#8A8480", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                A concrete sink is not a commodity. Every vessel, ramp, and integral sink we cast is made to fit your specific space — your dimensions, your faucet layout, your drain position. There is no catalog to flip through. There is only your bathroom, and what it deserves.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", color: "#8A8480", lineHeight: 1.85, marginBottom: "2rem" }}>
                We work on residential vanities, commercial restrooms, and everything in between. Our UHPC concrete is built to outlast every trend.
              </p>
              <Link href="/contact">
                <span className="btn-gold">Start Your Sink</span>
              </Link>
            </Reveal>
            <Reveal delay={0.2} style={{ position: "relative" }}>
              <img src={PINK_SINK_IMG} alt="Blush pink double concrete sink" style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover" }} />
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

      {/* Finishes */}
      <ConcreteFinishes
        heading="Finishes & Pigments"
        artisanImage="/images/sink-party-barn-graphite-raw_decc912b.png"
        refinedImage="/images/sink-shop-vessel-product_fe9733b6.png"
      />

      {/* CTA */}
      <section style={{ padding: "5rem 0", backgroundColor: "#0D0C0C" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>
          <Reveal>
            <div style={{ border: "1px solid rgba(201,169,110,0.2)", padding: "3rem 4rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
              <div>
                <div className="label-text" style={{ marginBottom: "0.5rem" }}>Ready to Begin?</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "1.75rem", color: "#F0EDE8", lineHeight: 1.2 }}>
                  Every sink starts<br />with a conversation.
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
