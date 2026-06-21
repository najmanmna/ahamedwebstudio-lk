"use client";

import { useEffect, useRef, useState } from "react";

const TIERS = [
  { label: "Elvyn Store", domain: "elvynstore.com", href: "https://elvynstore.com", accent: "#2D6A9F", light: "#D6E8F7" },
  { label: "Ambrins Fabrics", domain: "ambrinsfabrics.lk", href: "https://ambrinsfabrics.lk", accent: "#7B5EA7", light: "#E8DFF5" },
  { label: "Elda", domain: "elda.lk", href: "https://elda.lk", accent: "#C8A96E", light: "#F0E4D0" },
];

export default function IgScale() {
  const ref = useRef(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setEntered(true); obs.disconnect(); }
    }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: "#13182A",
        paddingBlock: "clamp(4.5rem,9vw,7rem)",
        paddingInline: "clamp(1.25rem,6vw,4rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute", top: "-20%", right: "-10%",
        width: 460, height: 460, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(242,92,67,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1.1fr 0.9fr",
          gap: "clamp(2.5rem,5vw,4rem)", alignItems: "center",
        }} className="ig-scale-grid">

          {/* Left — copy */}
          <div style={{
            opacity: entered ? 1 : 0,
            transform: entered ? "translateX(0)" : "translateX(-20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "6px 14px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 999, marginBottom: 22,
            }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#C8A96E" }} />
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em",
                color: "rgba(255,255,255,0.75)", textTransform: "uppercase",
              }}>Phase 2 · Growth Tier</span>
            </div>

            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.9rem,3.8vw,2.8rem)",
              fontWeight: 700, color: "#fff", lineHeight: 1.15,
              marginBottom: 18,
            }}>
              Ready to Scale<br />When You Are.
            </h2>

            <p style={{
              fontFamily: "var(--font-sans)", fontSize: 15.5, fontWeight: 400,
              color: "rgba(255,255,255,0.65)", lineHeight: 1.85, maxWidth: 440,
            }}>
              The Instagram Store Package is just Step 1. Because we build on modern headless architecture, your site can seamlessly grow into a full-scale operation with multi-item carts, user accounts, and payment gateways when your order volume increases.
            </p>
          </div>

          {/* Right — thumbnails */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14,
            opacity: entered ? 1 : 0,
            transform: entered ? "translateX(0)" : "translateX(20px)",
            transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
          }} className="ig-scale-thumbs">
            {TIERS.map((t, i) => (
              <a
                key={t.label}
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ig-scale-card"
                style={{
                  textDecoration: "none",
                  opacity: entered ? 1 : 0,
                  transform: entered ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.5s ease ${0.3 + i * 0.1}s, transform 0.5s ease ${0.3 + i * 0.1}s`,
                  display: "block",
                }}
              >
                {/* Browser-style card */}
                <div
                  className="ig-scale-card-inner"
                  style={{
                    borderRadius: 12,
                    overflow: "hidden",
                    border: `1px solid ${t.accent}3D`,
                    background: "rgba(255,255,255,0.02)",
                    boxShadow: `0 4px 20px rgba(0,0,0,0.25)`,
                    transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease, border-color 0.3s ease",
                  }}
                >
                  {/* Mini chrome bar */}
                  <div style={{
                    display: "flex", alignItems: "center", gap: 4,
                    padding: "7px 9px",
                    background: "rgba(255,255,255,0.04)",
                    borderBottom: `1px solid ${t.accent}26`,
                  }}>
                    {["#F25C43", "#F5A623", "#27AE60"].map(c => (
                      <div key={c} style={{ width: 5, height: 5, borderRadius: "50%", background: c, opacity: 0.7 }} />
                    ))}
                  </div>

                  {/* Preview area */}
                  <div style={{
                    position: "relative",
                    aspectRatio: "3/4",
                    background: `linear-gradient(160deg, ${t.accent}3D 0%, #13182A 100%)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    overflow: "hidden",
                  }}>
                    {/* Dot grid texture */}
                    <div style={{
                      position: "absolute", inset: 0, pointerEvents: "none",
                      backgroundImage: `radial-gradient(circle, ${t.accent}40 1px, transparent 1px)`,
                      backgroundSize: "14px 14px",
                      maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
                      WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
                    }} />
                    <span style={{
                      fontFamily: "var(--font-display)", fontSize: 38, fontWeight: 700,
                      color: t.accent, opacity: 0.85, position: "relative", zIndex: 1,
                    }}>{t.label[0]}</span>

                    {/* Hover overlay */}
                    <div className="ig-scale-overlay" style={{
                      position: "absolute", inset: 0,
                      background: "rgba(19,24,42,0.78)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      gap: 5,
                      opacity: 0,
                      transition: "opacity 0.25s ease",
                    }}>
                      <span style={{
                        fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.12em",
                        color: t.accent, textTransform: "uppercase",
                      }}>Visit site</span>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={t.accent} strokeWidth="3" strokeLinecap="round">
                        <path d="M7 17L17 7M7 7h10v10"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Domain label */}
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 4,
                  marginTop: 10,
                }}>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.06em",
                    color: "rgba(255,255,255,0.55)",
                  }}>{t.domain}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .ig-scale-card:hover .ig-scale-card-inner {
          transform: translateY(-4px);
        }
        .ig-scale-card:hover .ig-scale-overlay {
          opacity: 1 !important;
        }
        @media (max-width: 768px) {
          .ig-scale-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
