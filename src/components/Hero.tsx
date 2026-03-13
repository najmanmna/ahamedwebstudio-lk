"use client";

import { useEffect, useRef, useState } from "react";

// ─── WHATSAPP SVG ─────────────────────────────────────────────────────────────
const WaIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ─── SPEED COMPARISON VISUAL ──────────────────────────────────────────────────
function SpeedVisual({ visible }: { visible: boolean }) {
  const [animDone, setAnimDone] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setAnimDone(true), 600);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div style={{
      background: "#fff",
      border: "1px solid #E5E3DD",
      borderRadius: 8,
      padding: "20px 22px",
      boxShadow: "0 4px 24px rgba(26,40,72,0.08)",
    }}>
      <p style={{
        fontFamily: "var(--font-mono)", fontSize: 9,
        letterSpacing: "0.2em", color: "#6B6B68",
        marginBottom: 14, textTransform: "uppercase",
      }}>
        Page Load Speed Comparison
      </p>

      {/* Their site */}
      <div style={{ marginBottom: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#6B6B68", letterSpacing: "0.1em" }}>
            Typical local site
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#C0392B", fontWeight: 500 }}>
            6.8s
          </span>
        </div>
        <div style={{ height: 6, background: "#F5F0EB", borderRadius: 3, overflow: "hidden" }}>
          <div style={{
            height: "100%", borderRadius: 3,
            background: "linear-gradient(to right, #E8A09A, #C0392B)",
            width: animDone ? "100%" : "0%",
            transition: "width 1.4s cubic-bezier(0.76,0,0.24,1) 0.3s",
          }} />
        </div>
      </div>

      {/* Our site */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#1A2848", letterSpacing: "0.1em", fontWeight: 500 }}>
            Ahamed Web Studio
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#1A2848", fontWeight: 700 }}>
            0.8s ⚡
          </span>
        </div>
        <div style={{ height: 6, background: "#F5F0EB", borderRadius: 3, overflow: "hidden" }}>
          <div style={{
            height: "100%", borderRadius: 3,
            background: "linear-gradient(to right, #1A2848, #F25C43)",
            width: animDone ? "12%" : "0%",
            transition: "width 0.6s cubic-bezier(0.76,0,0.24,1) 1.2s",
          }} />
        </div>
      </div>

      <p style={{
        fontFamily: "var(--font-mono)", fontSize: 8,
        color: "#6B6B68", letterSpacing: "0.15em",
        marginTop: 12, textTransform: "uppercase",
      }}>
        8× faster = more customers stay on your site
      </p>
    </div>
  );
}

// ─── UTHPALA QUOTE CARD ───────────────────────────────────────────────────────
function QuoteCard({ visible }: { visible: boolean }) {
  return (
    <div style={{
      background: "#ECF5EC",
      border: "1px solid rgba(37,211,102,0.25)",
      borderRadius: 12,
      padding: "18px 20px",
      position: "relative",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(16px)",
      transition: "opacity 0.6s ease 0.9s, transform 0.6s ease 0.9s",
    }}>
      {/* WhatsApp header */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <div style={{
          width: 28, height: 28, borderRadius: "50%",
          background: "#1A2848",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "#fff", fontWeight: 700 }}>U</span>
        </div>
        <div>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 500, color: "#1A2848", letterSpacing: "0.05em" }}>
            Uthpala Pathirana
          </p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 8, color: "#6B6B68", letterSpacing: "0.05em" }}>
            HEDONE Natural Skincare
          </p>
        </div>
        {/* WA icon */}
        <div style={{ marginLeft: "auto" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
      </div>

      {/* Message bubble */}
      <div style={{
        background: "#fff",
        borderRadius: "4px 12px 12px 12px",
        padding: "12px 14px",
        position: "relative",
      }}>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: 12.5,
          color: "#1C1C1A",
          lineHeight: 1.65,
          fontWeight: 300,
        }}>
          "For my products I ended up doing even the packaging designs since I{" "}
          <strong style={{ fontWeight: 500 }}>couldn't find anyone with good taste.</strong>
          {" "}For the first time someone nailed it and that's you!!!"
        </p>
        {/* Timestamp + ticks */}
        <div style={{ display: "flex", alignItems: "center", gap: 4, justifyContent: "flex-end", marginTop: 6 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, color: "#6B6B68" }}>5:57 AM</span>
          <svg width="14" height="8" viewBox="0 0 16 11" fill="#34B7F1">
            <path d="M11 1L5 7.5 1 4" stroke="#34B7F1" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            <path d="M15 1L9 7.5" stroke="#34B7F1" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── STAT CHIP ────────────────────────────────────────────────────────────────
function StatChip({ value, label, delay, visible }: { value: string; label: string; delay: number; visible: boolean }) {
  return (
    <div style={{
      background: "#fff",
      border: "1px solid #E5E3DD",
      borderRadius: 6,
      padding: "14px 18px",
      textAlign: "center",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(12px)",
      transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
      flex: "1 1 0",
    }}>
      <p style={{
        fontFamily: "var(--font-display)",
        fontSize: 26, fontWeight: 700,
        color: "#1A2848", lineHeight: 1,
        marginBottom: 4,
      }}>{value}</p>
      <p style={{
        fontFamily: "var(--font-mono)",
        fontSize: 8, letterSpacing: "0.15em",
        color: "#6B6B68", textTransform: "uppercase",
      }}>{label}</p>
    </div>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Slight delay so fonts are loaded before animating
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @keyframes floatY {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes bgPan {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .hero-accent-text {
          background: linear-gradient(135deg, #1A2848 0%, #F25C43 60%, #C8A96E 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: bgPan 5s ease infinite;
        }
        .float-card { animation: floatY 5s ease-in-out infinite; }
        .float-card-slow { animation: floatY 7s ease-in-out 1s infinite; }
      `}</style>

      <section
        ref={ref}
        style={{
          background: "var(--color-cream)",
          paddingTop: "clamp(6rem, 14vw, 10rem)",
          paddingBottom: "clamp(4rem, 8vw, 7rem)",
          paddingInline: "clamp(1.25rem, 6vw, 4rem)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ── Background decorations ── */}
        <div style={{
          position: "absolute", top: 0, right: 0,
          width: "50%", height: "100%",
          background: "radial-gradient(ellipse at 80% 30%, rgba(242,92,67,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: 0, left: 0,
          width: "40%", height: "60%",
          background: "radial-gradient(ellipse at 20% 80%, rgba(26,40,72,0.05) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        {/* Subtle dot grid */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(26,40,72,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }} />

        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(2rem, 5vw, 5rem)",
          alignItems: "center",
        }} className="hero-grid">

          {/* ── LEFT COLUMN ── */}
          <div>

            {/* Pill badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "6px 14px",
              background: "rgba(26,40,72,0.07)",
              border: "1px solid rgba(26,40,72,0.12)",
              borderRadius: 999,
              marginBottom: 28,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
            }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#25D366" }} />
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9, letterSpacing: "0.18em",
                color: "#1A2848", textTransform: "uppercase",
              }}>
                Based in Colombo · Serving Sri Lanka
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.6rem, 5.5vw, 4.4rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              color: "#1C1C1A",
              marginBottom: 24,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            }}>
              Finally. A website<br />
              you'll actually be{" "}
              <em className="hero-accent-text" style={{ fontStyle: "italic" }}>
                proud of.
              </em>
            </h1>

            {/* Subtext */}
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
              fontWeight: 300,
              color: "#6B6B68",
              lineHeight: 1.8,
              maxWidth: 480,
              marginBottom: 36,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease 0.32s, transform 0.6s ease 0.32s",
            }}>
              We build fast, beautiful, professional websites for Sri Lankan
              businesses — with international design quality and prices that make sense locally.
            </p>

            {/* CTAs */}
            <div style={{
              display: "flex", flexWrap: "wrap", gap: 12,
              marginBottom: 48,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease 0.42s, transform 0.6s ease 0.42s",
            }}>
              <a
                href="https://wa.me/94717411188?text=Hi%20Najman%2C%20I%20saw%20your%20website%20and%20I%27m%20interested%20in%20getting%20a%20website%20built."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-wa"
                style={{
                  padding: "14px 24px",
                  fontSize: 11, letterSpacing: "0.12em",
                }}
              >
                <WaIcon size={15} />
                Chat on WhatsApp
              </a>
              <a
                href="#work"
                onClick={e => { e.preventDefault(); document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-primary btn-outline"
                style={{ padding: "14px 24px", fontSize: 11, letterSpacing: "0.12em" }}
              >
                See Our Work ↓
              </a>
            </div>

            {/* Stats row */}
            <div style={{
              display: "flex", gap: 10, flexWrap: "wrap",
              opacity: visible ? 1 : 0,
              transition: "opacity 0.6s ease 0.55s",
            }}>
              <StatChip value="12+" label="Projects done" delay={0.6} visible={visible} />
              <StatChip value="5★"  label="Client rating"  delay={0.68} visible={visible} />
              <StatChip value="7d"  label="Avg delivery"   delay={0.76} visible={visible} />
              <StatChip value="0.8s" label="Load time"     delay={0.84} visible={visible} />
            </div>
          </div>

          {/* ── RIGHT COLUMN — Visual stack ── */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(24px)",
            transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
          }}>

            {/* Browser mockup card */}
            <div className="float-card" style={{
              background: "#fff",
              border: "1px solid #E5E3DD",
              borderRadius: 10,
              overflow: "hidden",
              boxShadow: "0 16px 48px rgba(26,40,72,0.1)",
            }}>
              {/* Browser chrome */}
              <div style={{
                background: "#F5F3EF",
                borderBottom: "1px solid #E5E3DD",
                padding: "10px 14px",
                display: "flex", alignItems: "center", gap: 8,
              }}>
                <div style={{ display: "flex", gap: 5 }}>
                  {["#F25C43", "#F5A623", "#27AE60"].map((c, i) => (
                    <div key={i} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />
                  ))}
                </div>
                <div style={{
                  flex: 1, height: 20,
                  background: "#fff",
                  borderRadius: 4,
                  border: "1px solid #E5E3DD",
                  display: "flex", alignItems: "center",
                  paddingInline: 8,
                }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, color: "#6B6B68", letterSpacing: "0.05em" }}>
                    yourbusiness.lk
                  </span>
                </div>
              </div>

              {/* Page preview */}
              <div style={{ padding: "20px 20px 16px", background: "#FAFAFA" }}>
                {/* Nav mockup */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
                  <div style={{ width: 48, height: 10, background: "#1A2848", borderRadius: 2 }} />
                  <div style={{ display: "flex", gap: 8 }}>
                    {[40, 32, 28].map((w, i) => (
                      <div key={i} style={{ width: w, height: 6, background: "#E5E3DD", borderRadius: 2 }} />
                    ))}
                    <div style={{ width: 44, height: 20, background: "#F25C43", borderRadius: 3 }} />
                  </div>
                </div>
                {/* Hero area */}
                <div style={{
                  background: "linear-gradient(135deg, #1A2848 0%, #243660 100%)",
                  borderRadius: 6,
                  padding: "24px 20px",
                  marginBottom: 14,
                }}>
                  <div style={{ width: "70%", height: 12, background: "rgba(255,255,255,0.7)", borderRadius: 2, marginBottom: 8 }} />
                  <div style={{ width: "50%", height: 8, background: "rgba(255,255,255,0.3)", borderRadius: 2, marginBottom: 16 }} />
                  <div style={{ width: 64, height: 20, background: "#F25C43", borderRadius: 3 }} />
                </div>
                {/* Cards */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                  {["#E5E3DD", "#E5E3DD", "#E5E3DD"].map((bg, i) => (
                    <div key={i} style={{
                      background: "#fff",
                      border: `1px solid ${bg}`,
                      borderRadius: 4,
                      padding: "10px 8px",
                    }}>
                      <div style={{ width: "80%", height: 32, background: "#F5F0EB", borderRadius: 3, marginBottom: 6 }} />
                      <div style={{ width: "60%", height: 5, background: "#E5E3DD", borderRadius: 2, marginBottom: 4 }} />
                      <div style={{ width: "40%", height: 12, background: "#1A2848", borderRadius: 2 }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Speed comparison */}
            <div className="float-card-slow">
              <SpeedVisual visible={visible} />
            </div>

            {/* Uthpala quote */}
            <QuoteCard visible={visible} />

          </div>
        </div>

        {/* ── Responsive grid override ── */}
        <style>{`
          @media (max-width: 860px) {
            .hero-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}