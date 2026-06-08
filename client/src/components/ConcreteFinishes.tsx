/**
 * ARTIFACT MFG — Shared Concrete Finishes Component
 * Five standard colors + two surface finishes.
 * Swatches use layered CSS gradients + SVG noise filter — no flat fills.
 * Texture layers use hard-light + multiply blend modes at higher opacity
 * to simulate real cast concrete aggregate and surface variation.
 */

import { useIsMobile } from "@/hooks/useMobile";

const COLORS = [
  {
    name: "Alabaster",
    desc: "A warm, luminous off-white with subtle mineral variation. Bright without losing material character.",
    base: "#EEE8D8",
    mid: "#E2DAC8",
    dark: "#CEC5B0",
  },
  {
    name: "Cast Gray",
    desc: "The honest face of concrete — warm mid-gray with visible aggregate and natural mineral variation.",
    base: "#A8A29A",
    mid: "#928C84",
    dark: "#7A756E",
  },
  {
    name: "Haze",
    desc: "A cool, blue-leaning gray with a quiet, atmospheric quality. Pairs beautifully with steel and glass.",
    base: "#9BA4AE",
    mid: "#858E98",
    dark: "#6E7780",
  },
  {
    name: "Graphite",
    desc: "A medium charcoal with a barely-there cool undertone. Sophisticated and versatile.",
    base: "#5E6268",
    mid: "#4D5158",
    dark: "#3C4048",
  },
  {
    name: "Anthracite",
    desc: "A near-black with cool, slate undertones. Commanding and architectural — absorbs light without feeling flat.",
    base: "#2A2C30",
    mid: "#1E2024",
    dark: "#14161A",
  },
  {
    name: "Any Color",
    desc: "No palette limits. If you can imagine it, we can cast it — from deep jewel tones to pale pastels and everything between.",
    isCustom: true,
  },
];

const FINISHES = [
  {
    name: "Artisan Finish",
    label: "Movement · Depth · Character",
    desc: "Organic variation and visual movement across the surface. No two pieces read the same — the material carries its own character.",
    gradient: `
      radial-gradient(ellipse at 15% 25%, rgba(180,170,155,0.9) 0%, transparent 45%),
      radial-gradient(ellipse at 75% 65%, rgba(120,112,100,0.8) 0%, transparent 40%),
      radial-gradient(ellipse at 50% 80%, rgba(90,84,76,0.7) 0%, transparent 35%),
      radial-gradient(ellipse at 85% 15%, rgba(160,152,140,0.6) 0%, transparent 50%),
      linear-gradient(145deg, #B8B0A4 0%, #8C8680 35%, #6A6460 65%, #4E4A46 100%)
    `,
  },
  {
    name: "Refined Finish",
    label: "Uniform · Contemporary · Precise",
    desc: "A controlled, consistent surface with minimal variation. Clean lines, tight geometry. The material is present but disciplined — letting the form do the talking.",
    gradient: `
      radial-gradient(ellipse at 30% 40%, rgba(175,180,188,0.4) 0%, transparent 60%),
      radial-gradient(ellipse at 70% 60%, rgba(130,136,144,0.3) 0%, transparent 55%),
      linear-gradient(160deg, #B2B8C0 0%, #9AA0A8 40%, #848A92 100%)
    `,
  },
];

// Inline SVG noise filter for concrete grain
const NOISE_FILTER = `<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute;pointer-events:none">
  <defs>
    <filter id="concrete-noise" x="0%" y="0%" width="100%" height="100%" color-interpolation-filters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="0.75 0.65" numOctaves="5" seed="2" stitchTiles="stitch" result="noise"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.7 0" in="noise" result="alphaNoise"/>
      <feComposite in="SourceGraphic" in2="alphaNoise" operator="over" result="withGrain"/>
      <feBlend in="withGrain" in2="SourceGraphic" mode="hard-light" result="blended"/>
      <feComposite in="blended" in2="SourceGraphic" operator="in"/>
    </filter>
  </defs>
</svg>`;

const labelStyle: React.CSSProperties = {
  fontFamily: "'Montserrat', sans-serif",
  fontSize: "0.6rem",
  fontWeight: 700,
  letterSpacing: "0.2em",
  textTransform: "uppercase" as const,
  color: "#C9A96E",
};

const h2Style: React.CSSProperties = {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 400,
  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
  color: "#F0EDE8",
  lineHeight: 1.2,
};

interface ConcreteFinishesProps {
  heading?: string;
  artisanImage?: string;
  refinedImage?: string;
}

export default function ConcreteFinishes({ heading = "Available Finishes", artisanImage, refinedImage }: ConcreteFinishesProps) {
  const isMobile = useIsMobile();
  return (
    <section style={{ padding: "6rem 0", backgroundColor: "#111010" }}>
      <div dangerouslySetInnerHTML={{ __html: NOISE_FILTER }} />

      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 4rem" }}>

        {/* ── Colors ── */}
        <div style={{ marginBottom: "4rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ ...labelStyle, marginBottom: "0.75rem" }}>Color</div>
            <h2 style={h2Style}>{heading}</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(auto-fill, minmax(190px, 1fr))", gap: isMobile ? "1rem" : "1.5rem" }}>
            {COLORS.map((c) => (
              <div key={c.name}>
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    position: "relative",
                    overflow: "hidden",
                    marginBottom: "1rem",
                    background: c.isCustom
                      ? "none"
                      : `
                          radial-gradient(ellipse at 20% 30%, ${c.base}CC 0%, transparent 55%),
                          radial-gradient(ellipse at 80% 70%, ${c.dark}99 0%, transparent 50%),
                          radial-gradient(ellipse at 60% 20%, ${c.mid}88 0%, transparent 45%),
                          linear-gradient(160deg, ${c.base} 0%, ${c.mid} 45%, ${c.dark} 100%)
                        `,
                    filter: c.isCustom ? "none" : "url(#concrete-noise)",
                  }}
                >
                  {!c.isCustom && (
                    <>
                      {/* Primary fine grain — hard-light for strong contrast */}
                      <div style={{
                        position: "absolute", inset: 0, pointerEvents: "none",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85 0.72' numOctaves='4' seed='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E")`,
                        backgroundSize: "200px 200px",
                        mixBlendMode: "hard-light",
                        opacity: 0.75,
                      }} />
                      {/* Coarse aggregate speckle — multiply for dark pits */}
                      <div style={{
                        position: "absolute", inset: 0, pointerEvents: "none",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='s'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9 0.8' numOctaves='2' seed='11' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='0 0 0 1 0 0 0 0 0 1'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23s)' opacity='1'/%3E%3C/svg%3E")`,
                        backgroundSize: "120px 120px",
                        mixBlendMode: "multiply",
                        opacity: 0.55,
                      }} />
                      {/* Large-scale tonal variation — cast pour inconsistency */}
                      <div style={{
                        position: "absolute", inset: 0, pointerEvents: "none",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='b'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.25 0.22' numOctaves='3' seed='17' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23b)' opacity='1'/%3E%3C/svg%3E")`,
                        backgroundSize: "300px 300px",
                        mixBlendMode: "soft-light",
                        opacity: 0.6,
                      }} />
                      {/* Directional form shadow — gives slab depth */}
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,255,255,0.09) 0%, transparent 40%, rgba(0,0,0,0.18) 100%)", pointerEvents: "none" }} />
                    </>
                  )}
                  {c.isCustom && (
                    <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "repeat(3, 1fr)" }}>
                      {[
                        "#D4C5B0", "#7A8FA0", "#4A5E48", "#8B4A4A",
                        "#C4A882", "#3A4E5C", "#6B7A5E", "#B07060",
                        "#9EAAB4", "#5C4A3A", "#A8B89C", "#7A6A8A",
                      ].map((col, i) => (
                        <div key={i} style={{ backgroundColor: col, filter: "url(#concrete-noise)" }} />
                      ))}
                      <div style={{ position: "absolute", inset: 0, background: "rgba(17,16,16,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1rem", color: "rgba(240,237,232,0.85)", letterSpacing: "0.05em", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
                          Any color
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#F0EDE8", marginBottom: "0.4rem" }}>
                  {c.name}
                </div>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.78rem", color: "#8A8480", lineHeight: 1.7 }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(255,255,255,0.06)", marginBottom: "4rem" }} />

        {/* ── Surface Finishes ── */}
        <div>
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ ...labelStyle, marginBottom: "0.75rem" }}>Surface Finish</div>
            <h2 style={h2Style}>Artisan or Refined</h2>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.875rem", color: "#8A8480", lineHeight: 1.85, maxWidth: "560px", marginTop: "1rem" }}>
              Every color is available in either finish. The choice comes down to the character you want the piece to carry.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {FINISHES.map((f, idx) => (
              <div key={f.name} style={{ display: "flex", flexDirection: "column" }}>
                {/* Finish swatch — taller, more expressive */}
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    position: "relative",
                    overflow: "hidden",
                    marginBottom: "1.5rem",
                    background: idx === 0
                      ? `url('${artisanImage || '/images/countertop-live-edge-bar_46da1133.png'}') center/cover no-repeat`
                      : `url('${refinedImage || '/images/countertop-waterfall-island-enhanced_8f707f26.png'}') center center / cover no-repeat`,
                    filter: "none",
                  }}
                >
                  {/* Overlay for legibility */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(17,16,16,0.55) 0%, transparent 60%)", pointerEvents: "none" }} />
                  {/* Label badge */}
                  <div style={{ position: "absolute", bottom: "1rem", left: "1rem", background: "rgba(17,16,16,0.7)", backdropFilter: "blur(4px)", padding: "0.3rem 0.75rem" }}>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C9A96E" }}>
                      {f.label}
                    </span>
                  </div>
                </div>

                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#F0EDE8", marginBottom: "0.6rem" }}>
                  {f.name}
                </div>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", color: "#8A8480", lineHeight: 1.8 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
