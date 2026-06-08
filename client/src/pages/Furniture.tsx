// Artifact MFG — Furniture & Tables page
// Design: Dark prestige editorial. Cormorant Garamond display, Lato body.
// Warm off-white (#F0EDE8) on near-black (#111010). Gold accents (#C9A84C).
// Concrete furniture: dining tables, coffee tables, desks, grill stations, outdoor bars.

import { useState } from "react";
import { Link } from "wouter";
import Lightbox from "@/components/Lightbox";
import ConcreteFinishes from "@/components/ConcreteFinishes";
import { useIsMobile } from "@/hooks/useMobile";
import { useSEO } from "@/hooks/useSEO";

const pieces = [
  {
    id: 1,
    title: "Dining Table",
    subtitle: "Cast Gray · Custom Steel Base · Artisan Finish",
    description:
      "A full-scale dining table in Cast Gray with artisan finish. Paired with a custom-fabricated black steel H-frame base.",
    image: "/images/furniture-kamado-table-v2-raw_995f0313.png",
    alt: "Gray concrete dining table with black steel H-frame base in dining room",
    wide: true,
  },
  {
    id: 2,
    title: "Dining Table — Detail",
    subtitle: "Cast Gray · Surface Detail",
    description:
      "The concrete surface reveals its character up close — organic movement and depth that only comes from artisan finish.",
    image: "/images/furniture-coffee-table-closeup-raw_71e4f1df.png",
    alt: "Close-up of gray concrete dining table surface and steel base",
    wide: false,
  },
  {
    id: 3,
    title: "Coffee Table",
    subtitle: "Cast Gray · Dark Cedar Base",
    description:
      "A square Cast Gray coffee table top on a custom dark-stained cedar H-base. Two materials in honest dialogue.",
    image: "/images/furniture-coffee-table-cedar-raw_5ed1608d.png",
    alt: "Square gray concrete coffee table with dark cedar H-base in living room",
    wide: false,
  },
  {
    id: 4,
    title: "Outdoor Coffee Table",
    subtitle: "Cast Gray · Metal Base",
    description:
      "Concrete doesn't stop at the back door. Weather-resistant, built to last.",
    image: "/images/furniture-outdoor-coffee-table-enhanced_3fad5944.png",
    alt: "Outdoor concrete coffee table with copper lantern on deck",
    wide: false,
  },
  {
    id: 5,
    title: "Pipe Base Desk",
    subtitle: "Graphite · Industrial Pipe Base",
    description:
      "A large Graphite concrete desk top on a custom industrial pipe base. Dark, clean, and built to work.",
    image: "/images/furniture-desk-pipe-base-graphite-v2_756a9963.png",
    alt: "Graphite concrete desk top on industrial pipe base with laptop and notebook in home office",
    wide: true,
  },
  {
    id: 6,
    title: "Outdoor High-Top Table",
    subtitle: "Anthracite · Rough Sawn Cedar Frame",
    description:
      "An Anthracite concrete top on a rough sawn cedar frame. Built for outdoor use.",
    image: "/images/furniture-outdoor-bar-cedar-raw_91440f68.png",
    alt: "Dark Anthracite concrete outdoor high-top table on cedar frame",
    wide: false,
  },
  {
    id: 7,
    title: "Kamado Grill Station",
    subtitle: "Anthracite · Rough Sawn Cedar",
    description:
      "Rough sawn cedar framing with Anthracite concrete prep surfaces on both sides of the grill — bottle opener, tool hooks, and casters included.",
    image: "/images/furniture-kamado-grill-table-raw_5721b934.png",
    alt: "Kamado grill station with Anthracite concrete prep surfaces on rough sawn cedar frame with red kamado grill",
    wide: false,
  },
];

const lbImages = pieces.map(p => ({ src: p.image, alt: p.alt, title: p.title, subtitle: p.subtitle }));

type Piece = typeof pieces[number];

function WideCard({ piece, lbIdx, onOpen, isMobile }: { piece: Piece; lbIdx: number; onOpen: (i: number) => void; isMobile: boolean }) {
  return (
    <div onClick={() => onOpen(lbIdx)} className="group relative overflow-hidden" style={{ background: "#1a1a1a", cursor: "zoom-in" }}>
      <div className="aspect-[16/7] overflow-hidden">
        <img src={piece.image} alt={piece.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-8" style={{ background: "linear-gradient(to top, rgba(17,16,16,0.95) 0%, transparent 100%)", padding: isMobile ? "1.5rem" : "2rem" }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "#C9A84C", fontFamily: "Lato, sans-serif" }}>{piece.subtitle}</p>
        <h2 className="text-3xl md:text-4xl font-light mb-3" style={{ fontFamily: "Cormorant Garamond, serif", color: "#F0EDE8", fontSize: isMobile ? "1.5rem" : undefined }}>{piece.title}</h2>
        {!isMobile && <p className="text-sm leading-relaxed max-w-2xl" style={{ fontFamily: "Lato, sans-serif", color: "rgba(240,237,232,0.65)" }}>{piece.description}</p>}
      </div>
    </div>
  );
}

function NarrowCard({ piece, lbIdx, onOpen, isMobile }: { piece: Piece; lbIdx: number; onOpen: (i: number) => void; isMobile: boolean }) {
  return (
    <div onClick={() => onOpen(lbIdx)} className="group relative overflow-hidden" style={{ background: "#1a1a1a", cursor: "zoom-in" }}>
      <div className="aspect-[4/3] overflow-hidden">
        <img src={piece.image} alt={piece.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div style={{ padding: isMobile ? "1rem" : "1.5rem" }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "#C9A84C", fontFamily: "Lato, sans-serif" }}>{piece.subtitle}</p>
        <h2 className="text-2xl md:text-3xl font-light mb-3" style={{ fontFamily: "Cormorant Garamond, serif", color: "#F0EDE8", fontSize: isMobile ? "1.1rem" : undefined }}>{piece.title}</h2>
        {!isMobile && <p className="text-sm leading-relaxed" style={{ fontFamily: "Lato, sans-serif", color: "rgba(240,237,232,0.65)" }}>{piece.description}</p>}
      </div>
    </div>
  );
}

export default function Furniture() {
  useSEO({ title: "Concrete Furniture — Tables, Desks & More | Artifact Mfg", description: "Custom concrete dining tables, coffee tables, desks, and grill stations. Built top to base by Artifact Mfg in Springboro, Ohio." });
  const [lbIndex, setLbIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  // Build rows: wide pieces fill a full row; narrow pieces are paired into 2-col rows
  const rows: React.ReactNode[] = [];
  let i = 0;
  while (i < pieces.length) {
    const piece = pieces[i];
    if (piece.wide) {
      rows.push(
        <div key={piece.id}>
          <WideCard piece={piece} lbIdx={i} onOpen={setLbIndex} isMobile={isMobile} />
        </div>
      );
      i += 1;
    } else {
      const next = pieces[i + 1];
      const hasPair = next && !next.wide;
      rows.push(
        <div key={piece.id} className={`grid gap-6 ${hasPair ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2"}`}>
          <NarrowCard piece={piece} lbIdx={i} onOpen={setLbIndex} isMobile={isMobile} />
          {hasPair && <NarrowCard piece={next} lbIdx={i + 1} onOpen={setLbIndex} isMobile={isMobile} />}
        </div>
      );
      i += hasPair ? 2 : 1;
    }
  }

  return (
    <div className="min-h-screen bg-[#111010]">
      <Lightbox
        images={lbImages}
        currentIndex={lbIndex}
        onClose={() => setLbIndex(null)}
        onPrev={() => setLbIndex(i => (i !== null && i > 0 ? i - 1 : i))}
        onNext={() => setLbIndex(i => (i !== null && i < lbImages.length - 1 ? i + 1 : i))}
      />
      {/* Hero */}
      <section style={{ position: "relative", height: "80vh", minHeight: "560px", overflow: "hidden" }}>
        <img
          src="/images/furniture-kamado-table-v2-raw_995f0313.png"
          alt="Concrete dining table with custom steel base"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(17,16,16,1) 0%, rgba(17,16,16,0.45) 55%, rgba(17,16,16,0.15) 100%)" }} />
        <div style={{ position: "absolute", bottom: "4rem", left: 0, right: 0, padding: "0 4rem", maxWidth: "1440px", margin: "0 auto" }}>
          <div className="label-text" style={{ marginBottom: "0.75rem" }}>Signature Work</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#F0EDE8", lineHeight: 1.0 }}>
            Tables &amp; Furniture
          </h1>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto space-y-6">
          {rows}
        </div>
      </section>

      <ConcreteFinishes />

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-6"
            style={{ fontFamily: "Cormorant Garamond, serif", color: "#F0EDE8" }}>
            Commission a piece
          </h2>
          <p className="text-base leading-relaxed mb-10"
            style={{ fontFamily: "Lato, sans-serif", color: "rgba(240,237,232,0.65)" }}>
            Every table, desk, and grill station is built to your dimensions and finish.
            Tell us what you're imagining.
          </p>
          <Link href="/contact">
            <button className="btn-gold px-10 py-4 text-sm tracking-widest uppercase">
              Start a Conversation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
