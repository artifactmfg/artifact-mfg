/*
 * ARTIFACT MFG — Layout Component
 * Design: Dark Prestige / Architectural Editorial
 * - Sticky nav that transitions from transparent to dark on scroll
 * - Thin gold rule beneath wordmark
 * - Minimal uppercase tracked navigation labels
 * - Footer with manifesto closing line
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useIsMobile } from "@/hooks/useMobile";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "For Builders", href: "/for-builders" },
  { label: "Our Process", href: "/process" },
  { label: "The Manifesto", href: "/manifesto" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div style={{ backgroundColor: "#111010", minHeight: "100vh" }}>
      {/* Navigation */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background-color 0.4s ease, border-color 0.4s ease",
          backgroundColor: scrolled ? "rgba(17,16,16,0.97)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: isMobile ? "70px" : "96px", position: "relative" }}>
            {/* Logo */}
            <Link href="/">
              <div style={{ cursor: "pointer", flexShrink: 0 }}>
                <img
                  src="/images/artifact-logo-cropped_d7aac9fb.png"
                  alt="Artifact Mfg — Artisan Concrete"
                  style={{
                    height: isMobile ? "50px" : "80px",
                    width: "auto",
                    filter: "none",
                    display: "block",
                  }}
                />
              </div>
            </Link>

            {/* Desktop Nav — right-aligned, optically nudged right */}
            <nav style={{ display: "flex", gap: "1.75rem", alignItems: "center", transform: "translateX(0.875rem)" }} className="hidden-mobile">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: location === link.href ? "#C9A96E" : "#F0EDE8",
                    transition: "color 0.2s ease",
                    cursor: "pointer",
                    textDecoration: "none",
                    textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                  }}
                  onMouseEnter={(e) => { if (location !== link.href) (e.target as HTMLElement).style.color = "#C9A96E"; }}
                  onMouseLeave={(e) => { if (location !== link.href) (e.target as HTMLElement).style.color = "#F0EDE8"; }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <Link href="/contact">
                <span className="btn-gold" style={{ padding: "0.6rem 1.5rem", fontSize: "0.72rem", backgroundColor: "#C9A96E", color: "#111010" }}>
                  Inquire
                </span>
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem", display: "none" }}
              className="show-mobile"
              aria-label="Toggle menu"
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <span style={{ display: "block", width: "22px", height: "1px", backgroundColor: menuOpen ? "#C9A96E" : "#F0EDE8", transition: "all 0.3s ease", transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
                <span style={{ display: "block", width: "22px", height: "1px", backgroundColor: menuOpen ? "#C9A96E" : "#F0EDE8", transition: "all 0.3s ease", opacity: menuOpen ? 0 : 1 }} />
                <span style={{ display: "block", width: "22px", height: "1px", backgroundColor: menuOpen ? "#C9A96E" : "#F0EDE8", transition: "all 0.3s ease", transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            backgroundColor: "rgba(17,16,16,0.98)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "2rem",
          }}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div style={{
                  padding: "0.875rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: location === link.href ? "#C9A96E" : "#F0EDE8",
                  cursor: "pointer",
                }}>
                  {link.label}
                </div>
              </Link>
            ))}
            <Link href="/contact">
              <div style={{ marginTop: "1.5rem" }}>
                <span className="btn-gold" style={{ width: "100%", justifyContent: "center" }}>
                  Inquire Now
                </span>
              </div>
            </Link>
          </div>
        )}
      </header>

      {/* Page content */}
      <main style={{ paddingTop: 0 }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: "#0D0C0C",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "4rem 2rem 3rem",
      }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>
            {/* Brand column */}
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 400, letterSpacing: "0.22em", textTransform: "uppercase", color: "#F0EDE8", marginBottom: "6px" }}>
                Artifact Mfg
              </div>
              <div style={{ width: "2rem", height: "1px", backgroundColor: "#C9A96E", marginBottom: "1rem" }} />
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: "#8A8480", lineHeight: 1.8, maxWidth: "240px" }}>
                The artifacts are the signature.<br />
                We craft concrete.<br />
                You live fully.
              </p>
            </div>

            {/* Products column */}
            <div>
              <div className="label-text" style={{ marginBottom: "1.25rem" }}>Products</div>
              {[
                { label: "Fireplaces", href: "/fireplaces" },
                { label: "Countertops & Bars", href: "/countertops" },
                { label: "Sinks & Vanities", href: "/sinks" },
                { label: "Furniture", href: "/furniture" },
                { label: "Wall & Shower Panels", href: "/panels" },
                { label: "Commercial Bars", href: "/commercial" },
              ].map((item) => (
                <div key={item.label} style={{ marginBottom: "0.625rem" }}>
                  <Link href={item.href}>
                    <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: "#8A8480", cursor: "pointer", transition: "color 0.2s ease", textDecoration: "none" }}
                      onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#C9A96E"}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.color = "#8A8480"}
                    >{item.label}</span>
                  </Link>
                </div>
              ))}
            </div>

            {/* Company column */}
            <div>
              <div className="label-text" style={{ marginBottom: "1.25rem" }}>Company</div>
              {[
                { label: "Our Process", href: "/process" },
                { label: "The Manifesto", href: "/manifesto" },
                { label: "For Builders & Developers", href: "/for-builders" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <div key={item.label} style={{ marginBottom: "0.625rem" }}>
                  <Link href={item.href}>
                    <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: "#8A8480", cursor: "pointer", transition: "color 0.2s ease", textDecoration: "none" }}
                      onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#C9A96E"}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.color = "#8A8480"}
                    >{item.label}</span>
                  </Link>
                </div>
              ))}
            </div>

            {/* Contact column */}
            <div>
              <div className="label-text" style={{ marginBottom: "1.25rem" }}>Get in Touch</div>
              <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: "#8A8480", lineHeight: 2 }}>
                <a href="mailto:jason@artifactmfg.us" style={{ color: "#8A8480", textDecoration: "none", transition: "color 0.2s ease", display: "block" }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#C9A96E"}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = "#8A8480"}
                >jason@artifactmfg.us</a>
                <a href="tel:9372664123" style={{ color: "#8A8480", textDecoration: "none", transition: "color 0.2s ease", display: "block" }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#C9A96E"}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = "#8A8480"}
                >937.266.4123</a>
                <span style={{ display: "block" }}>Springboro, Ohio</span>
              </div>
              <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
                <a href="https://www.facebook.com/ArtifactMfg" target="_blank" rel="noopener noreferrer" style={{ color: "#8A8480", transition: "color 0.2s ease" }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#C9A96E"}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = "#8A8480"}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://www.instagram.com/artifact_mfg/" target="_blank" rel="noopener noreferrer" style={{ color: "#8A8480", transition: "color 0.2s ease" }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#C9A96E"}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = "#8A8480"}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", color: "#4A4744" }}>
              © {new Date().getFullYear()} Artifact Mfg., Inc. All rights reserved.
            </span>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem", fontStyle: "italic", color: "#4A4744" }}>
              Craft. Use. Live. Repeat.
            </span>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </div>
  );
}
