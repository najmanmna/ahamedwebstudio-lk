"use client";

import { useEffect, useRef, useState } from "react";

// ─── TRUST POINTS ─────────────────────────────────────────────────────────────
const TRUST = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Fast delivery",
    body: "Portfolio sites in 5–7 days. Stores in 14. I don't disappear for weeks.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/>
      </svg>
    ),
    title: "Mobile-first",
    body: "Most of your customers are on their phones. Every site I build is designed phone-first.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    title: "Direct WhatsApp access",
    body: "You message me, I reply. No account managers, no ticketing systems, no waiting.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: "International-grade design",
    body: "I build for UK and Dubai clients at the same time. Your site gets that same level of craft.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Honest pricing",
    body: "Starting prices are on this page. No surprise fees. 50% to start, 50% when you're happy.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/>
        <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
      </svg>
    ),
    title: "After-launch support",
    body: "I don't disappear after your site goes live. Every package includes post-launch support.",
  },
];

// ─── STAT ─────────────────────────────────────────────────────────────────────
function Stat({ value, label, visible, delay }: { value: string; label: string; visible: boolean; delay: number }) {
  return (
    <div style={{
      textAlign: "center",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(12px)",
      transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
    }}>
      <p style={{
        fontFamily: "var(--font-display)",
        fontSize: 32, fontWeight: 700,
        color: "#1A2848", lineHeight: 1,
        marginBottom: 4,
      }}>{value}</p>
      <p style={{
        fontFamily: "var(--font-mono)",
        fontSize: 8, letterSpacing: "0.16em",
        color: "#6B6B68", textTransform: "uppercase",
      }}>{label}</p>
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function About() {
  const ref = useRef(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setEntered(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        background: "var(--color-cream)",
        paddingBlock: "clamp(5rem,10vw,8rem)",
        paddingInline: "clamp(1.25rem,6vw,4rem)",
        borderTop: "1px solid #E5E3DD",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* ── TOP: Photo + Bio ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "clamp(2.5rem,5vw,6rem)",
          alignItems: "center",
          marginBottom: "clamp(4rem,8vw,6rem)",
        }} className="about-grid">

          {/* Photo column */}
          <div style={{
            opacity: entered ? 1 : 0,
            transform: entered ? "translateX(0)" : "translateX(-24px)",
            transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
          }}>
            {/* Photo frame */}
            <div style={{ position: "relative", display: "inline-block", width: "100%" }}>
              {/* Offset border decoration */}
              <div style={{
                position: "absolute",
                top: 12, left: 12,
                right: -12, bottom: -12,
                border: "1px solid #E5E3DD",
                borderRadius: 12,
                zIndex: 0,
              }} />
              {/* Photo */}
              <div style={{
                position: "relative", zIndex: 1,
                borderRadius: 10,
                overflow: "hidden",
                background: "#E8E4DC",
                aspectRatio: "4/5",
              }}>
                <img
                  src="/najman.jpeg"
                  alt="Najman — Ahamed Web Studio"
                  style={{
                    width: "100%", height: "100%",
                    objectFit: "cover", objectPosition: "top center",
                    display: "block",
                  }}
                  onError={e => { e.currentTarget.style.display = "none"; }}
                />
                {/* Fallback gradient when no photo */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(160deg, #1A2848 0%, #243660 50%, #F25C43 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 80, fontWeight: 700,
                    color: "rgba(255,255,255,0.15)",
                  }}>N</span>
                </div>
              </div>

              {/* Floating badge — currently building */}
              <div style={{
                position: "absolute",
                bottom: -8, right: -8,
                zIndex: 2,
                background: "#fff",
                border: "1px solid #E5E3DD",
                borderRadius: 8,
                padding: "10px 14px",
                boxShadow: "0 4px 16px rgba(26,40,72,0.1)",
                display: "flex", alignItems: "center", gap: 8,
              }}>
                <div style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: "#25D366",
                  boxShadow: "0 0 0 3px rgba(37,211,102,0.2)",
                }} />
                <div>
                  <p style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 8, letterSpacing: "0.14em",
                    color: "#1A2848", textTransform: "uppercase",
                    lineHeight: 1.4,
                  }}>Available now</p>
                  <p style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 7, letterSpacing: "0.1em",
                    color: "#6B6B68",
                  }}>Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Stats row under photo */}
            <div style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: 36,
              paddingTop: 24,
              borderTop: "1px solid #E5E3DD",
            }}>
              <Stat value="15+" label="Projects" visible={entered} delay={0.4} />
              <div style={{ width: 1, background: "#E5E3DD" }} />
              <Stat value="5★" label="Rating" visible={entered} delay={0.5} />
              <div style={{ width: 1, background: "#E5E3DD" }} />
              <Stat value="2+" label="Countries" visible={entered} delay={0.6} />
            </div>
          </div>

          {/* Bio column */}
          <div style={{
            opacity: entered ? 1 : 0,
            transform: entered ? "translateX(0)" : "translateX(24px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}>
            <div className="section-label" style={{ marginBottom: 16 }}>
              <span>About</span>
            </div>

            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 700, color: "#1C1C1A",
              lineHeight: 1.1, marginBottom: 24,
            }}>
              I'm Najman.<br />
              <span style={{ color: "#1A2848" }}>I build websites that</span>{" "}
              <em style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #F25C43, #C8A96E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>work.</em>
            </h2>

            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: 15, fontWeight: 300,
              color: "#6B6B68", lineHeight: 1.85,
              marginBottom: 20,
            }}>
              I'm a web developer based in Colombo. I started Ahamed Web Studio because I kept seeing Sri Lankan businesses settle for slow, template-looking websites that they were embarrassed to share — when they deserved much better.
            </p>

            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: 15, fontWeight: 300,
              color: "#6B6B68", lineHeight: 1.85,
              marginBottom: 20,
            }}>
              I build for international agencies in the UK and Dubai — and I bring that same level of craft to every local project. The difference is you pay Sri Lankan prices and you talk to me directly on WhatsApp.
            </p>

            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: 15, fontWeight: 300,
              color: "#6B6B68", lineHeight: 1.85,
              marginBottom: 32,
            }}>
              Fifteen projects in. Every single client has been happy with what I delivered. I plan to keep it that way.
            </p>

            {/* Signature-style sign-off */}
            <div style={{
              display: "flex", alignItems: "center", gap: 14,
              paddingTop: 20,
              borderTop: "1px solid #E5E3DD",
            }}>
              <div style={{
                width: 44, height: 44,
                borderRadius: "50%",
                background: "#1A2848",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 20, fontWeight: 700, color: "#fff",
                }}>N</span>
              </div>
              <div>
                <p style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 16, fontWeight: 700,
                  color: "#1C1C1A", marginBottom: 2,
                }}>Ahamed Najman</p>
                <p style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 8, letterSpacing: "0.15em",
                  color: "#6B6B68", textTransform: "uppercase",
                }}>Founder · Ahamed Web Studio · Colombo</p>
              </div>
              <a
                href="https://wa.me/94717411188"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginLeft: "auto",
                  display: "flex", alignItems: "center", gap: 7,
                  padding: "9px 16px",
                  background: "#25D366",
                  borderRadius: 6,
                  fontFamily: "var(--font-mono)",
                  fontSize: 9, letterSpacing: "0.12em",
                  color: "#fff", textDecoration: "none",
                  textTransform: "uppercase", flexShrink: 0,
                  boxShadow: "0 4px 16px rgba(37,211,102,0.3)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(37,211,102,0.4)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(37,211,102,0.3)";
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Say hello
              </a>
            </div>
          </div>
        </div>

        {/* ── BOTTOM: Trust grid ── */}
        <div style={{
          opacity: entered ? 1 : 0,
          transition: "opacity 0.6s ease 0.5s",
        }}>
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: 8, letterSpacing: "0.22em",
            color: "#6B6B68", textTransform: "uppercase",
            marginBottom: 20, textAlign: "center",
          }}>Why clients come back</p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
          }} className="trust-grid">
            {TRUST.map((t, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  border: "1px solid #E5E3DD",
                  borderRadius: 8,
                  padding: "20px 22px",
                  opacity: entered ? 1 : 0,
                  transform: entered ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.5s ease ${0.55 + i * 0.07}s, transform 0.5s ease ${0.55 + i * 0.07}s`,
                  display: "flex", gap: 14, alignItems: "flex-start",
                }}
              >
                <div style={{
                  width: 36, height: 36,
                  borderRadius: 8,
                  background: "#F5F4F0",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#1A2848", flexShrink: 0,
                }}>
                  {t.icon}
                </div>
                <div>
                  <p style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 14, fontWeight: 700,
                    color: "#1C1C1A", marginBottom: 5, lineHeight: 1.3,
                  }}>{t.title}</p>
                  <p style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 12.5, fontWeight: 300,
                    color: "#6B6B68", lineHeight: 1.65,
                  }}>{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .trust-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .trust-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}