"use client";

import { useEffect, useRef, useState } from "react";

const PROBLEMS = [
  {
    title: "Lost in the Feed",
    body: "Your best products get buried under weeks of old posts.",
    color: "#1A2848",
    bg: "#EEF0F8",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/>
        <line x1="9" y1="3" x2="9" y2="21"/>
      </svg>
    ),
  },
  {
    title: "Repetitive Questions",
    body: "Wasting hours answering “Price please?” and “Is this available?”",
    color: "#C8A96E",
    bg: "#FBF5EE",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        <path d="M12 8v4m0 3h.01" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "Friction Kills Sales",
    body: "Losing impulse buyers because they don’t want to wait for a reply.",
    color: "#F25C43",
    bg: "#FEF0ED",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
];

export default function IgProblem() {
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
        background: "#F5F4F0",
        paddingBlock: "clamp(4.5rem,9vw,7rem)",
        paddingInline: "clamp(1.25rem,6vw,4rem)",
        borderTop: "1px solid #E5E3DD",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Heading */}
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.8rem,3.6vw,2.8rem)",
          fontWeight: 700, color: "#1C1C1A", lineHeight: 1.2,
          textAlign: "center", maxWidth: 720, margin: "0 auto clamp(3rem,6vw,4.5rem)",
          opacity: entered ? 1 : 0,
          transform: entered ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          Running a business on Instagram shouldn&apos;t mean answering DMs all day.
        </h2>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
        }} className="ig-problem-grid">
          {PROBLEMS.map((p, i) => (
            <div
              key={p.title}
              style={{
                background: "#fff",
                border: "1px solid #E5E3DD",
                borderRadius: 12,
                padding: "32px 28px",
                opacity: entered ? 1 : 0,
                transform: entered ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 10,
                background: p.bg, color: p.color,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20,
              }}>
                {p.icon}
              </div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 700,
                color: "#1C1C1A", marginBottom: 10, lineHeight: 1.25,
              }}>{p.title}</h3>
              <p style={{
                fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 400,
                color: "#4E4E4B", lineHeight: 1.7,
              }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ig-problem-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .ig-problem-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}
