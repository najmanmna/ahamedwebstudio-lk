"use client";

import { useEffect, useRef, useState } from "react";

export default function OnlineStorePromoBanner() {
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
        href="/online-stores"
        className="store-promo-banner"
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
          background: "linear-gradient(135deg, #F25C43 0%, #C8A96E 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative", zIndex: 1,
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <path d="M3 6h18"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
        </div>

        {/* Copy */}
        <div style={{ flex: 1, minWidth: 0, position: "relative", zIndex: 1 }} className="store-promo-banner-copy">
          <p style={{
            fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
            color: "#fff", marginBottom: 3,
          }}>
            Sell your products online, from LKR 29,900.
          </p>
          <p style={{
            fontFamily: "var(--font-sans)", fontSize: 13.5, fontWeight: 400,
            color: "rgba(255,255,255,0.7)", lineHeight: 1.55,
          }}>
            Custom online store packages — WhatsApp ordering, cart checkout, or full online payments.
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
        }} className="store-promo-banner-cta">
          View Packages
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
        </div>
      </a>

      <style>{`
        .store-promo-banner:hover .store-promo-banner-cta {
          background: rgba(255,255,255,0.18);
          border-color: rgba(255,255,255,0.32);
        }
        @media (max-width: 700px) {
          .store-promo-banner { flex-direction: column !important; align-items: flex-start !important; gap: 14px !important; padding: 20px !important; }
        }
      `}</style>
    </section>
  );
}
