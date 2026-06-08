/*
 * ARTIFACT MFG — Contact Page
 */
import { useEffect, useRef, useState } from "react";

// CloudFront image replaced with local asset
const DETAIL_IMG = "/images/fireplace-stepped-surround-hearth-alabaster_08f18bd2.png";

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

const inputStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "#F0EDE8",
  fontFamily: "'Lato', sans-serif",
  fontSize: "0.875rem",
  padding: "0.875rem 1rem",
  outline: "none",
  transition: "border-color 0.2s ease",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'Montserrat', sans-serif",
  fontSize: "0.6rem",
  fontWeight: 600,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "#8A8480",
  display: "block",
  marginBottom: "0.5rem",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", projectType: "", message: "", isBuilder: false });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production this would POST to a backend or form service
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: "#111010" }}>
      {/* Hero */}
      <section style={{ position: "relative", height: "45vh", minHeight: "320px", overflow: "hidden" }}>
        <img src={DETAIL_IMG} alt="Concrete fireplace surround detail" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(17,16,16,1) 0%, rgba(17,16,16,0.5) 60%, rgba(17,16,16,0.2) 100%)" }} />
        <div className="hero-text-overlay">
          <div className="label-text" style={{ marginBottom: "0.75rem" }}>Start the Conversation</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#F0EDE8", lineHeight: 1.0 }}>
            Begin Your Project
          </h1>
        </div>
      </section>

      {/* Contact section */}
      <section style={{ padding: "5rem 0 7rem", backgroundColor: "#111010" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }} className="page-x">
          <div className="intro-grid" style={{ alignItems: "flex-start" }}>

            {/* Left: info */}
            <Reveal>
              <div className="label-text" style={{ marginBottom: "1rem" }}>Artifact Mfg.</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#F0EDE8", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                We'd love to hear<br />about your project.
              </h2>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.875rem", color: "#8A8480", lineHeight: 1.85, marginBottom: "2.5rem" }}>
                Whether you're designing a single statement piece for your home or planning a development program, the process begins with a conversation. We respond to every inquiry within one business day.
              </p>

              <div style={{ marginBottom: "2rem" }}>
                <div className="label-text" style={{ marginBottom: "0.75rem" }}>Reach Jason directly</div>
                <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.875rem", color: "#8A8480", lineHeight: 2.2 }}>
                  <a href="mailto:jason@artifactmfg.us" style={{ color: "#C9A96E", textDecoration: "none", display: "block" }}>jason@artifactmfg.us</a>
                  <a href="tel:9372664123" style={{ color: "#8A8480", textDecoration: "none", display: "block" }}>937.266.4123</a>
                  <span style={{ display: "block" }}>Springboro, Ohio</span>
                </div>
              </div>

              <div>
                <div className="label-text" style={{ marginBottom: "0.75rem" }}>Follow Our Work</div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <a href="https://www.facebook.com/ArtifactMfg" target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", textDecoration: "none", transition: "color 0.2s ease" }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#C9A96E"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = "#8A8480"}
                  >Facebook</a>
                  <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
                  <a href="https://www.instagram.com/artifact_mfg/" target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", textDecoration: "none", transition: "color 0.2s ease" }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#C9A96E"}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = "#8A8480"}
                  >Instagram</a>
                </div>
              </div>
            </Reveal>

            {/* Right: form */}
            <Reveal delay={0.15}>
              {submitted ? (
                <div style={{ padding: "4rem 3rem", border: "1px solid rgba(201,169,110,0.2)", textAlign: "center" }}>
                  <div style={{ width: "3rem", height: "1px", backgroundColor: "#C9A96E", margin: "0 auto 2rem" }} />
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "1.75rem", color: "#F0EDE8", marginBottom: "1rem" }}>Thank you.</h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.875rem", color: "#8A8480", lineHeight: 1.8 }}>
                    We've received your inquiry and will be in touch within one business day. We look forward to hearing about your project.
                  </p>
                  <div style={{ marginTop: "2rem", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1rem", color: "#C9A96E" }}>
                    — Jason & Jenelle, Artifact Mfg.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" }}>
                    <div>
                      <label style={labelStyle}>Your Name *</label>
                      <input required style={inputStyle} type="text" placeholder="Jane Smith" value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = "#C9A96E"}
                        onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)"}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input required style={inputStyle} type="email" placeholder="jane@example.com" value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = "#C9A96E"}
                        onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)"}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" }}>
                    <div>
                      <label style={labelStyle}>Phone Number</label>
                      <input style={inputStyle} type="tel" placeholder="555.000.0000" value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = "#C9A96E"}
                        onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)"}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Project Type</label>
                      <select style={{ ...inputStyle, cursor: "pointer" }} value={form.projectType}
                        onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                        onFocus={(e) => (e.target as HTMLSelectElement).style.borderColor = "#C9A96E"}
                        onBlur={(e) => (e.target as HTMLSelectElement).style.borderColor = "rgba(255,255,255,0.1)"}
                      >
                        <option value="" style={{ backgroundColor: "#1A1918" }}>Select a type</option>
                        <option value="fireplace" style={{ backgroundColor: "#1A1918" }}>Fireplace Surround</option>
                        <option value="countertop" style={{ backgroundColor: "#1A1918" }}>Countertop / Bar</option>
                        <option value="sink" style={{ backgroundColor: "#1A1918" }}>Sink / Vanity</option>
                        <option value="furniture" style={{ backgroundColor: "#1A1918" }}>Furniture</option>
                        <option value="panels" style={{ backgroundColor: "#1A1918" }}>Wall / Shower Panels</option>
                        <option value="builder" style={{ backgroundColor: "#1A1918" }}>Builder / Developer Program</option>
                        <option value="other" style={{ backgroundColor: "#1A1918" }}>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Tell Us About Your Project *</label>
                    <textarea required style={{ ...inputStyle, minHeight: "140px", resize: "vertical" }} placeholder="Describe your project — dimensions, finish ideas, timeline, and any other details that would help us understand your vision." value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={(e) => (e.target as HTMLTextAreaElement).style.borderColor = "#C9A96E"}
                      onBlur={(e) => (e.target as HTMLTextAreaElement).style.borderColor = "rgba(255,255,255,0.1)"}
                    />
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", cursor: "pointer" }} onClick={() => setForm({ ...form, isBuilder: !form.isBuilder })}>
                    <div style={{ width: "16px", height: "16px", border: `1px solid ${form.isBuilder ? "#C9A96E" : "rgba(255,255,255,0.2)"}`, backgroundColor: form.isBuilder ? "#C9A96E" : "transparent", transition: "all 0.2s ease", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {form.isBuilder && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#111010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    </div>
                    <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: "#8A8480" }}>I'm a builder, developer, or fireplace retailer interested in a volume program.</span>
                  </div>

                  <div style={{ paddingTop: "0.5rem" }}>
                    <button type="submit" className="btn-gold" style={{ width: "100%", justifyContent: "center", padding: "1rem 2rem" }}>
                      Send Inquiry
                    </button>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
