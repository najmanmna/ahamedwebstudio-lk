"use client";

import { useEffect, useRef, useState } from "react";

const WA_LINK = "https://wa.me/94717411188?text=Hi%20Najman%2C%20I%27d%20like%20to%20get%20started%20on%20the%20Instagram%20Store%20package.";

const FEATURES = [
  "Custom, mobile-first Next.js storefront",
  "Zero monthly hosting fees",
  "WhatsApp direct ordering system",
  "Easy-to-use Sanity CMS to manage products yourself",
  "1 year domain included",
  "Delivered in just 7 days",
];

const WaIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F25C43" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function IgPricing() {
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
      id="pricing"
      ref={ref}
      style={{
        background: "#F5F4F0",
        paddingBlock: "clamp(5rem,10vw,8rem)",
        paddingInline: "clamp(1.25rem,6vw,4rem)",
        borderTop: "1px solid #E5E3DD",
      }}
    >
      <div style={{ maxWidth: 560, margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          textAlign: "center", marginBottom: 40,
          opacity: entered ? 1 : 0,
          transform: entered ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <div className="section-label" style={{ justifyContent: "center", marginBottom: 16 }}>
            <span>The Offer</span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem,4vw,2.8rem)",
            fontWeight: 700, color: "#1C1C1A", lineHeight: 1.15,
          }}>
            One price.<br />Everything you need.
          </h2>
        </div>

        {/* Invoice-style card */}
        <div style={{
          background: "#fff",
          border: "1px solid #E5E3DD",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 24px 64px rgba(26,40,72,0.1)",
          opacity: entered ? 1 : 0,
          transform: entered ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
        }}>
          {/* Top band */}
          <div style={{
            height: 5,
            background: "linear-gradient(to right, #1A2848, #F25C43, #C8A96E)",
          }} />

          <div style={{ padding: "40px 36px 36px" }}>
            {/* Label row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.16em",
                color: "#4E4E4B", textTransform: "uppercase",
              }}>Instagram Store Package</span>
              <span style={{
                padding: "4px 11px", borderRadius: 999,
                background: "#FEF0ED", border: "1px solid #F25C4333",
                fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em",
                color: "#F25C43", textTransform: "uppercase", fontWeight: 500,
              }}>One-time</span>
            </div>

            {/* Price */}
            <div style={{
              display: "flex", alignItems: "baseline", gap: 10,
              paddingBottom: 28, marginBottom: 28,
              borderBottom: "1px dashed #E5E3DD",
            }}>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 18, fontWeight: 500,
                color: "#4E4E4B", letterSpacing: "0.03em",
              }}>LKR</span>
              <span style={{
                fontFamily: "var(--font-display)", fontSize: "clamp(2.6rem,6vw,3.4rem)",
                fontWeight: 700, color: "#1A2848", lineHeight: 1,
              }}>59,900</span>
            </div>

            {/* Features */}
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 14 }}>
              {FEATURES.map(f => (
                <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 11 }}>
                  <Check />
                  <span style={{
                    fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 400,
                    color: "#1C1C1A", lineHeight: 1.55,
                  }}>{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 9,
                padding: "16px 20px",
                background: "#25D366",
                color: "#fff",
                borderRadius: 8,
                fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.1em",
                textTransform: "uppercase", textDecoration: "none", fontWeight: 500,
                boxShadow: "0 8px 28px rgba(37,211,102,0.3)",
                transition: "background 0.25s, transform 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#20BA5A"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#25D366"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <WaIcon size={14} />
              Get Started on WhatsApp
            </a>
          </div>
        </div>

        {/* Coverage note */}
        <p style={{
          textAlign: "center", marginTop: 24,
          fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.06em",
          color: "#8A8A86",
          opacity: entered ? 1 : 0,
          transition: "opacity 0.6s ease 0.3s",
        }}>
          🇱🇰 Sri Lanka • 🇦🇪 UAE • 🌍 International Projects Welcome
        </p>
      </div>
    </section>
  );
}
