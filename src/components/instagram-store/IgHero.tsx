"use client";

import { useEffect, useRef, useState } from "react";

const WA_LINK = "https://wa.me/94717411188?text=Hi%20Najman%2C%20I%27m%20interested%20in%20a%20free%20consultation%20about%20the%20Instagram%20Store%20package.";
const SANDBOX_LINK = "https://lanka-shop-connect.vercel.app/";

// ─── PHONE MOCKUP ─────────────────────────────────────────────────────────────
function PhoneMockup({ visible }: { visible: boolean }) {
  return (
    <div
      className="float-phone"
      style={{
        position: "relative",
        width: 260,
        height: 534,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
      }}
    >
      {/* Side buttons */}
      <div style={{ position: "absolute", left: -3, top: 82, width: 3, height: 20, background: "linear-gradient(to bottom,#8A8A8A,#666)", borderRadius: "2px 0 0 2px" }} />
      <div style={{ position: "absolute", left: -3, top: 114, width: 3, height: 38, background: "linear-gradient(to bottom,#8A8A8A,#666)", borderRadius: "2px 0 0 2px" }} />
      <div style={{ position: "absolute", left: -3, top: 164, width: 3, height: 38, background: "linear-gradient(to bottom,#8A8A8A,#666)", borderRadius: "2px 0 0 2px" }} />
      <div style={{ position: "absolute", right: -3, top: 138, width: 3, height: 62, background: "linear-gradient(to bottom,#8A8A8A,#666)", borderRadius: "0 2px 2px 0" }} />

      {/* Frame */}
      <div style={{
        position: "relative", width: 260, height: 534,
        borderRadius: 46,
        background: "linear-gradient(160deg, #3C3C3C 0%, #1C1C1E 55%, #2C2C2C 100%)",
        boxShadow: "0 48px 120px rgba(0,0,0,0.45), 0 12px 36px rgba(0,0,0,0.25), 0 0 0 1.5px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.12)",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, borderRadius: 46,
          background: "linear-gradient(135deg, rgba(255,255,255,0.09) 0%, transparent 45%)",
          zIndex: 20, pointerEvents: "none",
        }} />

        {/* Screen */}
        <div style={{
          position: "absolute", top: 6, left: 6, right: 6, bottom: 6,
          borderRadius: 40, overflow: "hidden", background: "#0C0C0C",
        }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            src="/screen-recording.MOV"
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover",
            }}
          />

          {/* Dynamic island */}
          <div style={{
            position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)",
            width: 64, height: 17, borderRadius: 999, background: "#060606", zIndex: 30,
          }} />
        </div>
      </div>
    </div>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
export default function IgHero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @keyframes igFloat {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-10px); }
        }
        .float-phone { animation: igFloat 6s ease-in-out infinite; }
      `}</style>

      <section
        ref={ref}
        style={{
          background: "var(--color-cream)",
          paddingTop: "clamp(5rem, 11vw, 7rem)",
          paddingBottom: "clamp(4rem, 8vw, 7rem)",
          paddingInline: "clamp(1.25rem, 6vw, 4rem)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorations */}
        <div style={{
          position: "absolute", top: 0, right: 0,
          width: "50%", height: "100%",
          background: "radial-gradient(ellipse at 80% 30%, rgba(242,92,67,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(26,40,72,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }} />

        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1.1fr 0.9fr",
          gap: "clamp(2rem, 5vw, 5rem)",
          alignItems: "center",
        }} className="ig-hero-grid">

          {/* ── LEFT: Copy ── */}
          <div>
            {/* Pill badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "6px 14px",
              background: "rgba(26,40,72,0.07)",
              border: "1px solid rgba(26,40,72,0.12)",
              borderRadius: 999,
              marginBottom: 24,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
            }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#E1306C" }} />
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em",
                color: "#1A2848", textTransform: "uppercase",
              }}>
                Built for Instagram Sellers
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 700, lineHeight: 1.1,
              color: "#1C1C1A", marginBottom: 22,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            }}>
              Stop Losing Sales in Your{" "}
              <span style={{ color: "#F25C43" }}>
                Instagram DMs.
              </span>
            </h1>

            {/* Subheadline */}
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
              fontWeight: 400, color: "#4E4E4B", lineHeight: 1.8,
              maxWidth: 480, marginBottom: 36,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
            }}>
              Turn your Instagram page into a professional, fast-loading storefront. Let customers browse your products and send pre-filled orders directly to your WhatsApp.
            </p>

            {/* CTAs */}
            <div style={{
              display: "flex", flexDirection: "column", gap: 18,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s",
            }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "flex-start" }}>
                {/* Primary — black */}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 9,
                    padding: "15px 26px",
                    background: "#111110",
                    color: "#fff",
                    borderRadius: 6,
                    fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.1em",
                    textTransform: "uppercase", textDecoration: "none", fontWeight: 500,
                    transition: "background 0.25s, transform 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#2A2A28"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#111110"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  Book a Free Consultation
                </a>

                {/* Secondary — sandbox CTA */}
                <div>
                  <a
                    href={SANDBOX_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      padding: "14px 24px",
                      background: "transparent",
                      border: "1px solid #1A2848",
                      color: "#1A2848",
                      borderRadius: 6,
                      fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.1em",
                      textTransform: "uppercase", textDecoration: "none", fontWeight: 500,
                      transition: "background 0.2s, transform 0.2s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(26,40,72,0.06)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    Test the Storefront
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
                  </a>
                  <p style={{
                    fontFamily: "var(--font-sans)", fontSize: 12.5, fontWeight: 400,
                    color: "#6B6B68", marginTop: 8, maxWidth: 220, lineHeight: 1.5,
                  }}>
                    Experience the fast-loading catalog and WhatsApp checkout yourself.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Phone visual ── */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <PhoneMockup visible={visible} />
          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            .ig-hero-grid {
              grid-template-columns: 1fr !important;
            }
            .ig-hero-grid > div:last-child {
              order: -1;
              margin-bottom: 12px;
            }
          }
        `}</style>
      </section>
    </>
  );
}
