"use client";

import { useEffect, useRef, useState } from "react";

// ─── TYPES ────────────────────────────────────────────────────────────────────
type CmsOption =
  | { available: true; price: string; included?: never }
  | { available: false; included: true; price?: never };

type Package = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  currency: string;
  timeline: string;
  timelineColor: string;
  highlight: boolean;
  color: string;
  bg: string;
  cms: CmsOption;
  features: { text: string; included: boolean }[];
  ideal: string;
  cta: string;
};

// ─── PACKAGES DATA ────────────────────────────────────────────────────────────
const PACKAGES: Package[] = [
  {
    id: "portfolio",
    name: "Portfolio & Info Site",
    tagline: "One page or up to five — a site that tells your story and builds trust.",
    price: "30,000",
    priceNote: "starting from",
    currency: "LKR",
    timeline: "5–7 days",
    timelineColor: "#1A2848",
    highlight: false,
    color: "#1A2848",
    bg: "#F5F4F0",
    cms: { available: true, price: "15,000" },
    features: [
      { text: "1–5 pages (scoped on WhatsApp before quoting)", included: true },
      { text: "Mobile-first, fully responsive", included: true },
      { text: "Custom design — no templates", included: true },
      { text: "Contact form with WhatsApp link", included: true },
      { text: "Google Maps integration", included: true },
      { text: "PageSpeed 90+ guaranteed", included: true },
      { text: "Domain connection", included: true },
      { text: "1 round of revisions", included: true },
      { text: "7 days post-launch support", included: true },
      { text: "Product catalogue / shopping cart", included: false },
      { text: "Payment gateway", included: false },
    ],
    ideal: "Skincare brands, gyms, institutes, salons, clinics, freelancers, restaurants",
    cta: "Get a Quote",
  },
  {
    id: "business",
    name: "Multi-Page Business Site",
    tagline: "A serious web presence for an established business.",
    price: "75,000",
    priceNote: "starting from",
    currency: "LKR",
    timeline: "14 days",
    timelineColor: "#1A2848",
    highlight: false,
    color: "#C8A96E",
    bg: "#FBF5EE",
    cms: { available: true, price: "20,000" },
    features: [
      { text: "Up to 10 pages", included: true },
      { text: "Mobile-first, fully responsive", included: true },
      { text: "Custom design — no templates", included: true },
      { text: "Blog / news section", included: true },
      { text: "Team & careers pages", included: true },
      { text: "Advanced contact & booking forms", included: true },
      { text: "SEO-optimised structure", included: true },
      { text: "PageSpeed 90+ guaranteed", included: true },
      { text: "Domain connection", included: true },
      { text: "2 rounds of revisions", included: true },
      { text: "30 days post-launch support", included: true },
      { text: "Product catalogue / shopping cart", included: false },
    ],
    ideal: "Agencies, law firms, hotels, schools, established brands",
    cta: "Get a Quote",
  },
  {
    id: "ecommerce",
    name: "Online Store",
    tagline: "A complete store where customers can browse and buy.",
    price: "120,000",
    priceNote: "starting from",
    currency: "LKR",
    timeline: "14 days",
    timelineColor: "#F25C43",
    highlight: true,
    color: "#F25C43",
    bg: "#FEF0ED",
    cms: { available: false, included: true },
    features: [
      { text: "Full product catalogue with categories", included: true },
      { text: "Mobile-first, fully responsive", included: true },
      { text: "Custom design — no templates", included: true },
      { text: "Shopping cart & checkout", included: true },
      { text: "Payment gateway integration", included: true },
      { text: "Product management dashboard — add & edit anytime", included: true },
      { text: "PageSpeed 90+ guaranteed", included: true },
      { text: "Domain connection", included: true },
      { text: "1 round of revisions", included: true },
      { text: "14 days post-launch support", included: true },
      { text: "Up to 50 products included", included: true },
    ],
    ideal: "Fashion, food, beauty, electronics, handmade goods",
    cta: "Get a Quote",
  },
];

// ─── WA ICON ──────────────────────────────────────────────────────────────────
const WaIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ─── CHECK / CROSS ICON ───────────────────────────────────────────────────────
const Check = ({ color }: { color: string }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const Cross = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D0CEC9" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 1 }}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// ─── PACKAGE CARD ─────────────────────────────────────────────────────────────
function PackageCard({ pkg, index, entered }: { pkg: Package; index: number; entered: boolean }) {
  const waMsg = encodeURIComponent(
    `Hi Najman, I'm interested in the ${pkg.name} package. Can you tell me more?`
  );

  return (
    <div
      style={{
        position: "relative",
        background: pkg.highlight ? "#1A2848" : "#fff",
        border: pkg.highlight ? "none" : "1px solid #E5E3DD",
        borderRadius: 12,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: pkg.highlight
          ? "0 24px 64px rgba(26,40,72,0.22)"
          : "0 2px 12px rgba(0,0,0,0.04)",
        transform: entered
          ? pkg.highlight ? "scale(1.03)" : "scale(1)"
          : "translateY(28px)",
        opacity: entered ? 1 : 0,
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
      }}
    >
      {/* Popular badge */}
      {pkg.highlight && (
        <div style={{
          position: "absolute", top: 20, right: 20,
          padding: "4px 12px",
          background: "#F25C43",
          borderRadius: 999,
          fontFamily: "var(--font-mono)",
          fontSize: 11, letterSpacing: "0.15em",
          color: "#fff", textTransform: "uppercase",
        }}>
          Most Popular
        </div>
      )}

      {/* Top color band */}
      <div style={{
        height: 4,
        background: pkg.highlight
          ? `linear-gradient(to right, #F25C43, #C8A96E)`
          : `linear-gradient(to right, ${pkg.color}, ${pkg.color}88)`,
      }} />

      <div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", flex: 1 }}>

        {/* Name + tagline */}
        <div style={{ marginBottom: 22 }}>
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11, letterSpacing: "0.16em",
            color: pkg.highlight ? "rgba(255,255,255,0.65)" : "#4E4E4B",
            textTransform: "uppercase", marginBottom: 6,
          }}>Package</p>
          <h3 style={{
            fontFamily: "var(--font-display)",
            fontSize: 20, fontWeight: 700,
            color: pkg.highlight ? "#fff" : "#1C1C1A",
            lineHeight: 1.2, marginBottom: 8,
          }}>{pkg.name}</h3>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 14, fontWeight: 400,
            color: pkg.highlight ? "rgba(255,255,255,0.75)" : "#4E4E4B",
            lineHeight: 1.6,
          }}>{pkg.tagline}</p>
        </div>

        {/* Price */}
        <div style={{
          padding: "18px 20px",
          background: pkg.highlight ? "rgba(255,255,255,0.07)" : pkg.bg,
          border: `1px solid ${pkg.highlight ? "rgba(255,255,255,0.1)" : pkg.color + "22"}`,
          borderRadius: 8,
          marginBottom: 22,
        }}>
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11, letterSpacing: "0.12em",
            color: pkg.highlight ? "rgba(255,255,255,0.6)" : "#4E4E4B",
            textTransform: "uppercase", marginBottom: 4,
          }}>{pkg.priceNote}</p>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13, fontWeight: 500,
              color: pkg.highlight ? "rgba(255,255,255,0.65)" : "#4E4E4B",
              letterSpacing: "0.05em",
            }}>LKR</span>
            <span style={{
              fontFamily: "var(--font-display)",
              fontSize: 36, fontWeight: 700,
              color: pkg.highlight ? "#fff" : pkg.color,
              lineHeight: 1,
            }}>{pkg.price}</span>
          </div>

          {/* Timeline pill */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            marginTop: 12,
            padding: "4px 10px",
            background: pkg.highlight ? "rgba(255,255,255,0.08)" : "#fff",
            border: `1px solid ${pkg.highlight ? "rgba(255,255,255,0.12)" : "#E5E3DD"}`,
            borderRadius: 999,
          }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={pkg.highlight ? "rgba(255,255,255,0.6)" : pkg.timelineColor} strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11, letterSpacing: "0.12em",
              color: pkg.highlight ? "rgba(255,255,255,0.75)" : pkg.timelineColor,
              textTransform: "uppercase",
            }}>{pkg.timeline} delivery</span>
          </div>
        </div>

        {/* Features */}
        <ul style={{
          listStyle: "none", padding: 0, margin: "0 0 22px",
          display: "flex", flexDirection: "column", gap: 9, flex: 1,
        }}>
          {pkg.features.map((f, i) => (
            <li key={i} style={{
              display: "flex", alignItems: "flex-start", gap: 10,
            }}>
              {f.included ? <Check color={pkg.highlight ? "#F25C43" : pkg.color} /> : <Cross />}
              <span style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14, fontWeight: 400,
                color: f.included
                  ? (pkg.highlight ? "rgba(255,255,255,0.9)" : "#1C1C1A")
                  : "#C5C3BD",
                lineHeight: 1.5,
                textDecoration: f.included ? "none" : "none",
              }}>{f.text}</span>
            </li>
          ))}
        </ul>

        {/* CMS add-on strip */}
        {pkg.cms && (
          <div style={{
            padding: "10px 14px",
            background: pkg.cms.included
              ? (pkg.highlight ? "rgba(242,92,67,0.12)" : "#FEF0ED")
              : (pkg.highlight ? "rgba(255,255,255,0.05)" : "#F5F4F0"),
            border: `1px solid ${pkg.cms.included ? "#F25C43" + "33" : (pkg.highlight ? "rgba(255,255,255,0.08)" : "#E5E3DD")}`,
            borderRadius: 6, marginBottom: 12,
            display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={pkg.cms.included ? "#F25C43" : (pkg.highlight ? "rgba(255,255,255,0.5)" : "#6B6B68")} strokeWidth="2" strokeLinecap="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/>
              </svg>
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11, letterSpacing: "0.1em",
                color: pkg.cms.included ? "#F25C43" : (pkg.highlight ? "rgba(255,255,255,0.7)" : "#4E4E4B"),
                textTransform: "uppercase",
              }}>
                Content editor (CMS)
              </span>
            </div>
            {pkg.cms.included ? (
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 11,
                color: "#F25C43", letterSpacing: "0.1em",
                textTransform: "uppercase", fontWeight: 500,
              }}>Included</span>
            ) : (
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 11,
                color: pkg.highlight ? "rgba(255,255,255,0.6)" : "#C8A96E",
                letterSpacing: "0.1em",
              }}>+ LKR {pkg.cms.price}</span>
            )}
          </div>
        )}

        {/* Ideal for */}
        <div style={{
          padding: "10px 14px",
          background: pkg.highlight ? "rgba(255,255,255,0.06)" : "#F5F4F0",
          borderRadius: 6, marginBottom: 20,
        }}>
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10, letterSpacing: "0.15em",
            color: pkg.highlight ? "rgba(255,255,255,0.5)" : "#4E4E4B",
            textTransform: "uppercase", marginBottom: 4,
          }}>Ideal for</p>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13, fontWeight: 400,
            color: pkg.highlight ? "rgba(255,255,255,0.75)" : "#4E4E4B",
            lineHeight: 1.5,
          }}>{pkg.ideal}</p>
        </div>

        {/* CTA */}
        <a
          href={`https://wa.me/94717411188?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            padding: "13px 20px",
            background: pkg.highlight ? "#25D366" : "#1A2848",
            color: "#fff",
            borderRadius: 6,
            fontFamily: "var(--font-mono)",
            fontSize: 12, letterSpacing: "0.12em",
            textTransform: "uppercase", textDecoration: "none",
            fontWeight: 500,
            transition: "background 0.25s, transform 0.2s",
            boxShadow: pkg.highlight ? "0 6px 24px rgba(37,211,102,0.3)" : "none",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = pkg.highlight ? "#20BA5A" : "#243660";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = pkg.highlight ? "#25D366" : "#1A2848";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <WaIcon size={13} />
          {pkg.cta} on WhatsApp
        </a>
      </div>
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function Packages() {
  const ref = useRef(null);
  const [entered, setEntered] = useState(false);
  const [mobileActive, setMobileActive] = useState(PACKAGES.findIndex(p => p.highlight));

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setEntered(true); obs.disconnect(); }
    }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="packages"
      ref={ref}
      style={{
        background: "#F5F4F0",
        paddingBlock: "clamp(5rem,10vw,8rem)",
        paddingInline: "clamp(1.25rem,6vw,4rem)",
        borderTop: "1px solid #E5E3DD",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          textAlign: "center",
          marginBottom: 56,
          opacity: entered ? 1 : 0,
          transform: entered ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            marginBottom: 16,
          }} className="section-label">
            <span>Packages & Pricing</span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem,4vw,3rem)",
            fontWeight: 700, color: "#1C1C1A", lineHeight: 1.1,
            marginBottom: 14,
          }}>
            Clear prices.<br />
            <span style={{ color: "#1A2848" }}>No surprises.</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 16, fontWeight: 400,
            color: "#4E4E4B", lineHeight: 1.75,
            maxWidth: 440, margin: "0 auto",
          }}>
            Every project is quoted individually — but these starting prices give you a clear idea of what to expect. No hidden fees, no scope creep.
          </p>
        </div>

        {/* Mobile tab switcher — hidden on desktop via CSS */}
        <div className="pkg-tabs" style={{
          display: "none",
          gap: 4,
          marginBottom: 20,
          background: "#fff",
          border: "1px solid #E5E3DD",
          borderRadius: 10,
          padding: 5,
        }}>
          {PACKAGES.map((pkg, i) => (
            <button
              key={pkg.id}
              onClick={() => setMobileActive(i)}
              style={{
                all: "unset",
                flex: 1,
                padding: "10px 8px",
                borderRadius: 7,
                fontFamily: "var(--font-mono)",
                fontSize: 9, letterSpacing: "0.1em",
                textTransform: "uppercase",
                textAlign: "center",
                cursor: "pointer",
                display: "flex", flexDirection: "column",
                alignItems: "center", gap: 3,
                background: mobileActive === i ? (pkg.color + "12") : "transparent",
                color: mobileActive === i ? pkg.color : "#6B6B68",
                boxShadow: mobileActive === i ? `0 1px 6px ${pkg.color}18` : "none",
                border: `1px solid ${mobileActive === i ? pkg.color + "33" : "transparent"}`,
                transition: "all 0.2s ease",
              }}
            >
              {["Portfolio", "Business", "Store"][i]}
              {pkg.highlight && (
                <span style={{
                  fontSize: 7, letterSpacing: "0.14em",
                  color: mobileActive === i ? pkg.color : "#C5C3BD",
                  textTransform: "uppercase",
                }}>Popular</span>
              )}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
          alignItems: "start",
        }} className="packages-grid">
          {PACKAGES.map((pkg, i) => (
            <div
              key={pkg.id}
              style={{ display: "contents" }}
              className={`pkg-card-wrap${mobileActive === i ? " pkg-active" : ""}`}
            >
              <PackageCard pkg={pkg} index={i} entered={entered} />
            </div>
          ))}
        </div>

        {/* Bottom notes */}
        <div style={{
          marginTop: 40,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 12,
          opacity: entered ? 1 : 0,
          transition: "opacity 0.6s ease 0.5s",
        }} className="notes-grid">
          {[
            { icon: "💳", text: "50% advance to start · 50% on delivery" },
            { icon: "🔄", text: "Revisions included — no extra charges for included rounds" },
            { icon: "📞", text: "Not sure which package? WhatsApp us and we'll advise honestly" },
          ].map((note, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "flex-start", gap: 10,
              padding: "14px 16px",
              background: "#fff",
              border: "1px solid #E5E3DD",
              borderRadius: 8,
            }}>
              <span style={{ fontSize: 16, flexShrink: 0 }}>{note.icon}</span>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14, fontWeight: 400,
                color: "#4E4E4B", lineHeight: 1.6,
              }}>{note.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .packages-grid { display: block !important; }
          .notes-grid { grid-template-columns: 1fr !important; }
          .pkg-tabs { display: flex !important; }
          .pkg-card-wrap { display: none !important; }
          .pkg-card-wrap.pkg-active { display: block !important; }
          .pkg-card-wrap.pkg-active > div { transform: none !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .packages-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}