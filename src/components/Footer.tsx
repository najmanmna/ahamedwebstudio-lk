"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year] = useState(new Date().getFullYear());
  const [time, setTime] = useState("");

  // Live Colombo time
  useEffect(() => {
    const tick = () => {
      setTime(new Date().toLocaleTimeString("en-LK", {
        timeZone: "Asia/Colombo",
        hour: "2-digit", minute: "2-digit", hour12: true,
      }));
    };
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, []);

  const waLink = "https://wa.me/94717411188?text=Hi%20Najman%2C%20I%27m%20interested%20in%20getting%20a%20website%20built.";

  return (
    <footer style={{
      background: "#111827",
      paddingBlock: "clamp(3rem,6vw,5rem)",
      paddingInline: "clamp(1.25rem,6vw,4rem)",
      borderTop: "1px solid rgba(255,255,255,0.06)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* ── Top row ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr",
          gap: "clamp(2rem,5vw,4rem)",
          paddingBottom: "clamp(2rem,4vw,3rem)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          marginBottom: "clamp(1.5rem,3vw,2.5rem)",
        }} className="footer-grid">

          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <img
                src="/logo.png"
                alt="Ahamed Web Studio"
                style={{ height: 28, width: "auto", filter: "brightness(0) invert(1)", opacity: 0.9 }}
                onError={e => { e.currentTarget.style.display = "none"; }}
              />
              <div>
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 14, fontWeight: 700,
                  color: "#fff", display: "block", lineHeight: 1.1,
                }}>Ahamed Web Studio</span>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 7, letterSpacing: "0.2em",
                  color: "rgba(255,255,255,0.3)", textTransform: "uppercase",
                }}>Colombo, Sri Lanka</span>
              </div>
            </div>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: 13, fontWeight: 300,
              color: "rgba(255,255,255,0.4)",
              lineHeight: 1.75, maxWidth: 280,
              marginBottom: 20,
            }}>
              International-grade websites for Sri Lankan businesses. Fast, beautiful, and built to last.
            </p>
            {/* Live time */}
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "#25D366",
                boxShadow: "0 0 0 3px rgba(37,211,102,0.15)",
              }} />
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: 8, letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.3)",
              }}>Colombo · {time}</span>
            </div>
          </div>

          {/* Nav column */}
          <div>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: 8, letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.25)",
              textTransform: "uppercase", marginBottom: 16,
            }}>Navigate</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "Our Work",  href: "#work" },
                { label: "Process",   href: "#process" },
                { label: "Packages",  href: "#packages" },
                { label: "About",     href: "#about" },
                { label: "Contact",   href: "#contact" },
              ].map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={e => {
                    e.preventDefault();
                    document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13, fontWeight: 300,
                    color: "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    width: "fit-content",
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.85)"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <div>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: 8, letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.25)",
              textTransform: "uppercase", marginBottom: 16,
            }}>Get in touch</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: 9,
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                <div style={{
                  width: 28, height: 28, borderRadius: 6,
                  background: "#25D366",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#fff">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.1em", color: "rgba(255,255,255,0.25)", marginBottom: 1 }}>WhatsApp</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.6)", fontWeight: 300 }}>+94 71 741 1188</p>
                </div>
              </a>

              <a
                href="mailto:hello@ahamedwebstudio.com"
                style={{
                  display: "flex", alignItems: "center", gap: 9,
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                <div style={{
                  width: 28, height: 28, borderRadius: 6,
                  background: "rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.1em", color: "rgba(255,255,255,0.25)", marginBottom: 1 }}>Email</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.6)", fontWeight: 300 }}>hello@ahamedwebstudio.com</p>
                </div>
              </a>
            </div>

            {/* .com link */}
            <a
              href="https://ahamedwebstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "7px 12px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 6,
                fontFamily: "var(--font-mono)",
                fontSize: 8, letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.35)",
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                e.currentTarget.style.color = "rgba(255,255,255,0.65)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.color = "rgba(255,255,255,0.35)";
              }}
            >
              ahamedwebstudio.com
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M7 7h10v10"/>
              </svg>
            </a>
          </div>
        </div>

        {/* ── Bottom row ── */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap", gap: 12,
        }}>
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: 8, letterSpacing: "0.14em",
            color: "rgba(255,255,255,0.2)",
          }}>
            © {year} Ahamed Web Studio · All rights reserved
          </p>
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: 8, letterSpacing: "0.14em",
            color: "rgba(255,255,255,0.2)",
          }}>
            Built by Ahamed Web Studio · Colombo 🇱🇰
          </p>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* ── Floating WhatsApp button ── */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        aria-label="Chat on WhatsApp"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </footer>
  );
}