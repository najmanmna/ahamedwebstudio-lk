"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    number: "01",
    title: "Browse Easily",
    body: "Customers view your entire catalog, categorized and beautifully presented in a fast-loading Next.js storefront.",
    color: "#1A2848",
    bg: "#EEF0F8",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Tap to Buy",
    body: "They find their exact item and click “Order on WhatsApp.” No complex checkout or abandoned carts.",
    color: "#F25C43",
    bg: "#FEF0ED",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Instant Notification",
    body: "You receive a pre-filled message with the exact product details, ready to confirm delivery and payment.",
    color: "#25D366",
    bg: "#EDF9F0",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
];

export default function IgHowItWorks() {
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
      ref={ref}
      style={{
        background: "var(--color-cream)",
        paddingBlock: "clamp(5rem,10vw,8rem)",
        paddingInline: "clamp(1.25rem,6vw,4rem)",
        borderTop: "1px solid #E5E3DD",
      }}
    >
      <div style={{ maxWidth: 920, margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          textAlign: "center", marginBottom: "clamp(3rem,6vw,4.5rem)",
          opacity: entered ? 1 : 0,
          transform: entered ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <div className="section-label" style={{ justifyContent: "center", marginBottom: 16 }}>
            <span>How It Works</span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem,4vw,3rem)",
            fontWeight: 700, color: "#1C1C1A", lineHeight: 1.15,
          }}>
            From browse to{" "}
            <span style={{ color: "#25D366" }}>WhatsApp order.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="ig-timeline" style={{ position: "relative" }}>
          {/* Connecting line */}
          <div className="ig-timeline-line" style={{
            position: "absolute", top: 0, bottom: 0, left: "50%",
            width: 2, background: "#E5E3DD",
            transform: "translateX(-1px)",
          }} />

          {STEPS.map((step, i) => {
            const isRight = i % 2 === 1;
            return (
              <div
                key={step.number}
                className="ig-timeline-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto 1fr",
                  alignItems: "center",
                  gap: 24,
                  marginBottom: i < STEPS.length - 1 ? 36 : 0,
                  opacity: entered ? 1 : 0,
                  transform: entered ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.6s ease ${0.1 + i * 0.15}s, transform 0.6s ease ${0.1 + i * 0.15}s`,
                }}
              >
                {/* Left slot */}
                <div style={{ textAlign: isRight ? "right" : "left" }} className={isRight ? "ig-timeline-spacer" : ""}>
                  {!isRight && <StepCard step={step} align="right" />}
                </div>

                {/* Center number */}
                <div style={{
                  width: 56, height: 56, borderRadius: "50%",
                  background: step.bg, color: step.color,
                  border: `2px solid ${step.color}33`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, position: "relative", zIndex: 1,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                }}>
                  {step.icon}
                </div>

                {/* Right slot */}
                <div className={!isRight ? "ig-timeline-spacer" : ""}>
                  {isRight && <StepCard step={step} align="left" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .ig-timeline-line { left: 27px !important; }
          .ig-timeline-row {
            grid-template-columns: 56px 1fr !important;
            text-align: left !important;
          }
          .ig-timeline-row > div:nth-child(2) { grid-column: 1; grid-row: 1; }
          .ig-timeline-row > div:first-child,
          .ig-timeline-row > div:last-child {
            grid-column: 2;
            grid-row: 1;
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
}

// ─── STEP CARD ────────────────────────────────────────────────────────────────
function StepCard({ step, align }: { step: typeof STEPS[number]; align: "left" | "right" }) {
  return (
    <div style={{
      display: "inline-block", textAlign: align === "right" ? "right" : "left",
      maxWidth: 360,
    }}>
      <p style={{
        fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.16em",
        color: step.color, textTransform: "uppercase", marginBottom: 6,
      }}>Step {step.number}</p>
      <h3 style={{
        fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem,2.2vw,1.5rem)",
        fontWeight: 700, color: "#1C1C1A", marginBottom: 8, lineHeight: 1.25,
      }}>{step.title}</h3>
      <p style={{
        fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 400,
        color: "#4E4E4B", lineHeight: 1.75,
      }}>{step.body}</p>
    </div>
  );
}
