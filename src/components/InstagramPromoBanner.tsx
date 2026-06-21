"use client";

import { useEffect, useRef, useState } from "react";

export default function InstagramPromoBanner() {
  const ref = useRef<HTMLElement>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setEntered(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        paddingInline: "clamp(1.25rem,6vw,4rem)",
        paddingBlock: "clamp(1.5rem,3vw,2.25rem)",
        background: "var(--color-cream)",
      }}
    >
      <a
        href="/instagram-store"
        className="ig-promo-banner"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "22px 28px",
          borderRadius: 12,
          textDecoration: "none",
          background: "linear-gradient(120deg, #1A2848 0%, #3A2752 55%, #6B2A5C 100%)",
          position: "relative",
          overflow: "hidden",
          opacity: entered ? 1 : 0,
          transform: entered ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        {/* Decorative glow */}
        <div style={{
          position: "absolute", top: "-40%", right: "-5%",
          width: 280, height: 280, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(225,48,108,0.35) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Icon badge */}
        <div style={{
          width: 46, height: 46, borderRadius: 11, flexShrink: 0,
          background: "linear-gradient(135deg, #F58529 0%, #E1306C 50%, #8134AF 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative", zIndex: 1,
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </div>

        {/* Copy */}
        <div style={{ flex: 1, minWidth: 0, position: "relative", zIndex: 1 }} className="ig-promo-banner-copy">
          <p style={{
            fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
            color: "#fff", marginBottom: 3,
          }}>
            Got an Instagram Page? We built something just for you.
          </p>
          <p style={{
            fontFamily: "var(--font-sans)", fontSize: 13.5, fontWeight: 400,
            color: "rgba(255,255,255,0.7)", lineHeight: 1.55,
          }}>
            A fast storefront with direct WhatsApp checkout — no more answering DMs all day.
          </p>
        </div>

        {/* CTA */}
        <div style={{
          display: "flex", alignItems: "center", gap: 7, flexShrink: 0,
          padding: "10px 18px",
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: 7,
          fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em",
          color: "#fff", textTransform: "uppercase", fontWeight: 500,
          position: "relative", zIndex: 1,
          transition: "background 0.2s, border-color 0.2s",
        }} className="ig-promo-banner-cta">
          See the Offer
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
        </div>
      </a>

      <style>{`
        .ig-promo-banner:hover .ig-promo-banner-cta {
          background: rgba(255,255,255,0.18);
          border-color: rgba(255,255,255,0.32);
        }
        @media (max-width: 700px) {
          .ig-promo-banner { flex-direction: column !important; align-items: flex-start !important; gap: 14px !important; padding: 20px !important; }
        }
      `}</style>
    </section>
  );
}
