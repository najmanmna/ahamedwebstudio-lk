"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// ─── TYPES ────────────────────────────────────────────────────────────────────
type Step = {
  number: string;
  day: string;
  title: string;
  body: string;
  detail: string;
  icon: ReactNode;
  color: string;
  bg: string;
};

// ─── STEPS DATA ───────────────────────────────────────────────────────────────
const STEPS = [
  {
    number: "01",
    day: "Day 1",
    title: "You message us on WhatsApp",
    body: "Tell us what you need — a new store, a portfolio, a business site. No forms, no calls, no waiting. Just send us a message and we'll reply within a few hours with questions and a clear quote.",
    detail: "We'll ask about your business, your target customers, any sites you like the look of, and your timeline. That's it.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    color: "#25D366",
    bg: "#EDF9F0",
  },
  {
    number: "02",
    day: "Day 1–2",
    title: "We agree on a plan and you pay the advance",
    body: "Once we're aligned on scope, design direction, and price — we send a simple invoice. 50% advance to start, 50% on delivery. No surprises.",
    detail: "Bank transfer, direct — straightforward. We start building the same day your advance lands.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"/>
        <path d="M2 10h20"/>
      </svg>
    ),
    color: "#C8A96E",
    bg: "#FBF5EE",
  },
  {
    number: "03",
    day: "Day 3–5 / Day 5–10",
    title: "We build and send you a live preview",
    body: "We design and develop your site — real code, real design, built specifically for your brand. You get a live preview link (not a screenshot) so you can click through the actual site on your phone.",
    detail: "Portfolio & info sites: preview by Day 5. E-commerce stores: preview by Day 10 — product setup, payment gateway, and mobile checkout all need proper time. This is where most clients say 'wow'.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    color: "#1A2848",
    bg: "#EEF0F8",
  },
  {
    number: "04",
    day: "Day 6–7 / Day 11–14",
    title: "You review, we refine, we launch",
    body: "One round of revisions included — tell us anything you want changed. Once you're happy, we connect your domain and go live. We stay available for 7 days after launch for any small tweaks.",
    detail: "Portfolio & info sites go live by Day 7. E-commerce stores by Day 14 — we won't rush a store and risk it breaking on your first customer.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    color: "#F25C43",
    bg: "#FEF0ED",
  },
];

// ─── STEP CARD ────────────────────────────────────────────────────────────────
function StepCard({ step, index, active, onClick, entered }: { step: Step; index: number; active: number; onClick: (i: number) => void; entered: boolean }) {
  const isActive = active === index;

  return (
    <div
      onClick={() => onClick(index)}
      style={{
        background: isActive ? "#fff" : "transparent",
        border: `1px solid ${isActive ? step.color + "33" : "#E5E3DD"}`,
        borderRadius: 8,
        padding: "22px 24px",
        cursor: "pointer",
        transition: entered
          ? "background 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.35s ease, transform 0.35s ease"
          : `background 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.35s ease ${index * 0.08}s, transform 0.35s ease ${index * 0.08}s`,
        boxShadow: isActive ? `0 8px 32px ${step.color}14` : "none",
        opacity: entered ? 1 : 0,
        transform: entered ? "translateX(0)" : "translateX(-20px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Active left bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, bottom: 0,
        width: 3,
        background: step.color,
        transform: isActive ? "scaleY(1)" : "scaleY(0)",
        transformOrigin: "top",
        transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
        borderRadius: "3px 0 0 3px",
      }} />

      <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
        {/* Icon circle */}
        <div style={{
          width: 44, height: 44,
          borderRadius: "50%",
          background: isActive ? step.bg : "#F5F4F0",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: isActive ? step.color : "#6B6B68",
          flexShrink: 0,
          transition: "background 0.3s, color 0.3s",
        }}>
          {step.icon}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Day + number */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: 8, letterSpacing: "0.2em",
              color: isActive ? step.color : "#6B6B68",
              textTransform: "uppercase",
              transition: "color 0.3s",
            }}>{step.day}</span>
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: 8, color: "#E5E3DD",
            }}>·</span>
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: 8, letterSpacing: "0.15em",
              color: "#C5C3BD",
            }}>STEP {step.number}</span>
          </div>

          {/* Title */}
          <h3 style={{
            fontFamily: "var(--font-display)",
            fontSize: 16, fontWeight: 700,
            color: isActive ? "#1C1C1A" : "#6B6B68",
            lineHeight: 1.3,
            transition: "color 0.3s",
          }}>{step.title}</h3>
        </div>
      </div>
    </div>
  );
}

// ─── DETAIL PANEL ─────────────────────────────────────────────────────────────
function DetailPanel({ step }: { step: Step }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, [step.number]);

  return (
    <div style={{
      background: "#fff",
      border: `1px solid ${step.color}22`,
      borderRadius: 12,
      overflow: "hidden",
      boxShadow: `0 16px 48px ${step.color}10`,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(12px)",
      transition: "opacity 0.4s ease, transform 0.4s ease",
      height: "100%",
    }}>
      {/* Colored top band */}
      <div style={{
        height: 6,
        background: `linear-gradient(to right, ${step.color}, ${step.color}55)`,
      }} />

      <div style={{ padding: "32px 32px 36px" }}>
        {/* Step number + day */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div style={{
            width: 52, height: 52,
            borderRadius: "50%",
            background: step.bg,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: step.color,
          }}>
            {step.icon}
          </div>
          <div>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: 9, letterSpacing: "0.2em",
              color: step.color, textTransform: "uppercase", marginBottom: 3,
            }}>{step.day} · Step {step.number}</p>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              {[0,1,2,3].map(i => (
                <div key={i} style={{
                  width: i < parseInt(step.number) ? 20 : 8,
                  height: 3,
                  borderRadius: 2,
                  background: i < parseInt(step.number) ? step.color : "#E5E3DD",
                  transition: "all 0.4s ease",
                }} />
              ))}
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
          fontWeight: 700,
          color: "#1C1C1A",
          lineHeight: 1.2,
          marginBottom: 16,
        }}>{step.title}</h3>

        {/* Body */}
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: 15, fontWeight: 300,
          color: "#6B6B68", lineHeight: 1.8,
          marginBottom: 20,
        }}>{step.body}</p>

        {/* Detail callout */}
        <div style={{
          padding: "14px 16px",
          background: step.bg,
          border: `1px solid ${step.color}22`,
          borderRadius: 6,
          display: "flex", gap: 10, alignItems: "flex-start",
        }}>
          <div style={{
            width: 18, height: 18,
            borderRadius: "50%",
            background: step.color,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, marginTop: 1,
          }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 8v4m0 4h.01"/>
            </svg>
          </div>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13, fontWeight: 300,
            color: "#1C1C1A", lineHeight: 1.65,
            fontStyle: "italic",
          }}>{step.detail}</p>
        </div>

        {/* CTA on last step */}
        {step.number === "04" && (
          <a
            href="https://wa.me/94717411188?text=Hi%20Najman%2C%20I%27d%20like%20to%20get%20started%20on%20a%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-wa"
            style={{ marginTop: 24, display: "inline-flex", padding: "12px 22px", fontSize: 10, letterSpacing: "0.14em" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Start My Website
          </a>
        )}
      </div>
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function HowItWorks() {
  const ref = useRef(null);
  const [entered, setEntered] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setEntered(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // Auto-advance through steps
  useEffect(() => {
    if (!entered) return;
    const iv = setInterval(() => {
      setActive(prev => (prev + 1) % STEPS.length);
    }, 4000);
    return () => clearInterval(iv);
  }, [entered]);

  return (
    <section
      id="process"
      ref={ref}
      style={{
        background: "var(--color-cream)",
        paddingBlock: "clamp(5rem,10vw,8rem)",
        paddingInline: "clamp(1.25rem,6vw,4rem)",
        borderTop: "1px solid #E5E3DD",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          marginBottom: 56,
          opacity: entered ? 1 : 0,
          transform: entered ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <div className="section-label" style={{ marginBottom: 12 }}>
            <span>How It Works</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 700, color: "#1C1C1A", lineHeight: 1.1,
            }}>
              From WhatsApp message<br />
              <span style={{ color: "#1A2848" }}>to live website — fast.</span>
            </h2>
            <div>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14, fontWeight: 300,
                color: "#6B6B68", lineHeight: 1.75, maxWidth: 300,
                marginBottom: 14,
              }}>
                No confusing process. No weeks of back and forth. Honest timelines for every project type.
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  padding: "6px 13px",
                  background: "#fff",
                  border: "1px solid #E5E3DD",
                  borderRadius: 999,
                }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#1A2848", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.15em", color: "#1A2848", textTransform: "uppercase" }}>
                    Portfolio &amp; Info — 7 days
                  </span>
                </div>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  padding: "6px 13px",
                  background: "#fff",
                  border: "1px solid #E5E3DD",
                  borderRadius: 999,
                }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#F25C43", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.15em", color: "#F25C43", textTransform: "uppercase" }}>
                    E-Commerce — 14 days
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          alignItems: "start",
        }} className="process-grid">

          {/* Left — step list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {STEPS.map((step, i) => (
              <StepCard
                key={step.number}
                step={step}
                index={i}
                active={active}
                onClick={setActive}
                entered={entered}
              />
            ))}

            {/* Bottom reassurance strip */}
            <div style={{
              marginTop: 8,
              padding: "14px 18px",
              background: "#fff",
              border: "1px solid #E5E3DD",
              borderRadius: 8,
              display: "flex", alignItems: "center", gap: 10,
              opacity: entered ? 1 : 0,
              transition: "opacity 0.6s ease 0.5s",
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A2848" strokeWidth="2" strokeLinecap="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <p style={{
                fontFamily: "var(--font-mono)",
                fontSize: 8, letterSpacing: "0.12em",
                color: "#6B6B68", textTransform: "uppercase",
              }}>
                50% advance · 50% on delivery · No hidden fees
              </p>
            </div>
          </div>

          {/* Right — detail panel */}
          <div style={{
            position: "sticky", top: 100,
            opacity: entered ? 1 : 0,
            transform: entered ? "translateX(0)" : "translateX(20px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}>
            <DetailPanel step={STEPS[active]} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          from { background-position: -200% center; }
          to   { background-position:  200% center; }
        }
        @media (max-width: 768px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
          .process-grid > div:last-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}