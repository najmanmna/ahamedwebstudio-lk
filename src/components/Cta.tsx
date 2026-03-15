"use client";

import { useEffect, useRef, useState } from "react";

const WaIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const [entered, setEntered] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setEntered(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const waLink = "https://wa.me/94717411188?text=Hi%20Najman%2C%20I%20saw%20your%20website%20and%20I%27m%20interested%20in%20getting%20a%20website%20built.";

  return (
    <>
      <style>{`
        @keyframes waPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
          60%      { box-shadow: 0 0 0 16px rgba(37,211,102,0); }
        }
        @keyframes floatUp {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-6px); }
        }
        @keyframes drift {
          0%   { transform: translate(0,0) rotate(0deg); }
          33%  { transform: translate(8px,-12px) rotate(1deg); }
          66%  { transform: translate(-6px,8px) rotate(-1deg); }
          100% { transform: translate(0,0) rotate(0deg); }
        }
      `}</style>

      <section
        id="contact"
        ref={ref}
        style={{
          background: "#1A2848",
          paddingBlock: "clamp(5rem,10vw,8rem)",
          paddingInline: "clamp(1.25rem,6vw,4rem)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ── Background decorations ── */}
        <div style={{
          position: "absolute", top: "-30%", right: "-10%",
          width: 500, height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(242,92,67,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          animation: "drift 12s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", bottom: "-20%", left: "-5%",
          width: 400, height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,169,110,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          animation: "drift 16s ease-in-out 2s infinite",
        }} />
        {/* Dot grid */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />

        <div style={{
          maxWidth: 800,
          margin: "0 auto",
          textAlign: "center",
          position: "relative", zIndex: 1,
        }}>

          {/* Label */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 14px",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 999,
            marginBottom: 28,
            opacity: entered ? 1 : 0,
            transform: entered ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
          }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#25D366" }} />
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12, letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.75)", textTransform: "uppercase",
            }}>Ready to start your project</span>
          </div>

          {/* Headline */}
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem,5vw,4rem)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.08,
            marginBottom: 20,
            opacity: entered ? 1 : 0,
            transform: entered ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
          }}>
            Let's build something<br />
            <em style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, #F25C43 0%, #C8A96E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>you're proud of.</em>
          </h2>

          {/* Subtext */}
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1rem,1.8vw,1.125rem)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.8,
            maxWidth: 480,
            margin: "0 auto 40px",
            opacity: entered ? 1 : 0,
            transform: entered ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
          }}>
            Send us a WhatsApp message — we'll reply with questions, a clear timeline, and an honest quote. No commitment required.
          </p>

          {/* Main CTA button */}
          <div style={{
            opacity: entered ? 1 : 0,
            transform: entered ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s",
            marginBottom: 48,
            animation: entered ? "floatUp 4s ease-in-out infinite" : "none",
          }}>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "18px 36px",
                color: "#fff",
                borderRadius: 8,
                fontFamily: "var(--font-mono)",
                fontSize: 13, letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontWeight: 500,
                animation: "waPulse 2.5s ease infinite",
                transform: hovered ? "scale(1.03)" : "scale(1)",
                transition: "transform 0.2s ease, background 0.2s",
                background: hovered ? "#20BA5A" : "#25D366",
              }}
            >
              <WaIcon size={18} />
              Message us on WhatsApp
            </a>
          </div>

          {/* Reassurance row */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 24,
            opacity: entered ? 1 : 0,
            transition: "opacity 0.6s ease 0.55s",
          }}>
            {[
              { icon: "⚡", text: "Reply within a few hours" },
              { icon: "💬", text: "No forms — just WhatsApp" },
              { icon: "🔒", text: "No commitment to enquire" },
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 7,
              }}>
                <span style={{ fontSize: 14 }}>{item.icon}</span>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12, letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.6)",
                  textTransform: "uppercase",
                }}>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{
            width: 1, height: 40,
            background: "rgba(255,255,255,0.1)",
            margin: "40px auto",
            opacity: entered ? 1 : 0,
            transition: "opacity 0.6s ease 0.6s",
          }} />

          {/* Direct contact */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: 32,
            flexWrap: "wrap",
            opacity: entered ? 1 : 0,
            transition: "opacity 0.6s ease 0.65s",
          }}>
            <a
              href="https://wa.me/94717411188"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 8,
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l.36-.36a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12, letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.65)",
              }}>+94 71 741 1188</span>
            </a>
            <a
              href="mailto:hello@ahamedwebstudio.com"
              style={{
                display: "flex", alignItems: "center", gap: 8,
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12, letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.65)",
              }}>hello@ahamedwebstudio.com</span>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}``