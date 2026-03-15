"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type Project = {
  id: string;
  name: string;
  category: string;
  location: string;
  story: string;
  result: string;
  quote: string;
  quoteName: string;
  tags: string[];
  palette: { bg: string; accent: string; light: string; dark: string };
  url: string;
  urls?: { label: string; href: string }[];
  metric: { label: string; value: string };
};

const PROJECTS: Project[] = [
  {
    id: "01",
    name: "Elvyn Store",
    category: "E-Commerce",
    location: "Colombo, LK",
    story: "Sajid needed a proper online store — not just an Instagram page. We built a full Next.js storefront with product catalogue, cart, and mobile-first checkout. Delivered in 7 days.",
    result: "100/100 PageSpeed. Client left a 5-star review.",
    quote: "Ahamed is fully committed to delivering high-performance assets on time without compromising quality.",
    quoteName: "Sajid Ifham",
    tags: ["Online Store", "Mobile-First", "Fast Delivery"],
    palette: { bg: "#EEF4FB", accent: "#2D6A9F", light: "#D6E8F7", dark: "#1A3F6F" },
    url: "https://elvynstore.com",
    metric: { label: "PageSpeed", value: "100" },
  },
  {
    id: "02",
    name: "HEDONE Skincare",
    category: "Brand Website",
    location: "Sri Lanka",
    story: "Uthpala had been designing her own packaging because no one locally had the taste to match her brand. We built a website that matched the elegance of her products — clean, warm, editorial.",
    result: "Client's jaw dropped on first preview.",
    quote: "For the first time someone nailed it and that's you!!!",
    quoteName: "Uthpala Pathirana",
    tags: ["Brand Design", "Skincare", "Editorial"],
    palette: { bg: "#FBF5EE", accent: "#C4915A", light: "#F5E6D3", dark: "#8B5E35" },
    url: "https://hedone-skincare.vercel.app",
    metric: { label: "Reaction", value: "😮" },
  },
  {
    id: "03",
    name: "Noorul Hudha",
    category: "Institute Website",
    location: "Sri Lanka",
    story: "A Quran education institute needed a professional platform for class schedules, registration, and announcements. Clean, accessible, and fast on low-end mobile devices.",
    result: "Complex requirements handled with patience and precision.",
    quote: "The technical execution was perfect. Ahamed handled complex suggestions with extreme patience.",
    quoteName: "Aalima Bint Nazeer",
    tags: ["Institute", "Registration", "Accessible"],
    palette: { bg: "#EEF5EF", accent: "#4A7C4E", light: "#D6EDD8", dark: "#2D5230" },
    url: "https://noorulhudhainstitute.com",
    metric: { label: "Delivered", value: "5 days" },
  },
  {
    id: "04",
    name: "Ambrins — 3 Stores",
    category: "E-Commerce Suite",
    location: "Colombo, LK",
    story: "One client, three separate product lines, three distinct brand identities — all launched within a single month. Each store had its own look, its own inventory logic, and its own customer experience.",
    result: "Three live stores. One month. Zero compromises.",
    quote: "The transition to our new digital engine was seamless.",
    quoteName: "Ambrins Client",
    tags: ["Multi-Store", "Fashion", "Rapid Launch"],
    palette: { bg: "#F5F0F8", accent: "#7B5EA7", light: "#E8DFF5", dark: "#4E3A6E" },
    url: "https://elda.lk",
    urls: [
      { label: "elda.lk", href: "https://elda.lk" },
      { label: "ambrinsfabrics.lk", href: "https://ambrinsfabrics.lk" },
      { label: "thebalancedpantry.lk", href: "https://thebalancedpantry.lk" },
    ],
    metric: { label: "Stores", value: "3x" },
  },
];

// ─── IPHONE SCREEN ────────────────────────────────────────────────────────────
const STATUS_H = 38;

function IPhoneScreen({ project }: { project: Project }) {
  const { palette } = project;
  const siteUrl = project.url || project.urls?.[0]?.href || null;
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setFailed(false);
    if (!siteUrl) { setFailed(true); return; }
    const t = setTimeout(() => setFailed(true), 7000);
    return () => clearTimeout(t);
  }, [siteUrl]);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: palette.bg }}>

      {/* iOS status bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: STATUS_H,
        background: palette.bg, zIndex: 10,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        paddingInline: "14px 10px",
      }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 600, color: palette.dark, letterSpacing: "0.02em" }}>9:41</span>
        {/* Signal + WiFi + Battery */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {/* Cellular bars */}
          <svg width="13" height="9" viewBox="0 0 13 9" fill={palette.dark}>
            <rect x="0" y="5" width="2.4" height="4" rx="0.6" opacity="1"/>
            <rect x="3.4" y="3" width="2.4" height="6" rx="0.6" opacity="1"/>
            <rect x="6.8" y="1" width="2.4" height="8" rx="0.6" opacity="1"/>
            <rect x="10.2" y="0" width="2.4" height="9" rx="0.6" opacity="0.3"/>
          </svg>
          {/* WiFi */}
          <svg width="11" height="9" viewBox="0 0 11 9" fill="none" stroke={palette.dark} strokeWidth="1.2" strokeLinecap="round">
            <path d="M5.5 7.5a.5.5 0 100 1 .5.5 0 000-1z" fill={palette.dark} stroke="none"/>
            <path d="M3.2 5.8a3.2 3.2 0 014.6 0"/>
            <path d="M1 3.5a6.4 6.4 0 019 0"/>
          </svg>
          {/* Battery */}
          <svg width="18" height="9" viewBox="0 0 18 9" fill="none">
            <rect x="0.5" y="0.5" width="14" height="8" rx="2" stroke={palette.dark} strokeWidth="1"/>
            <rect x="14.5" y="2.5" width="2.5" height="4" rx="1" fill={palette.dark} opacity="0.5"/>
            <rect x="1.5" y="1.5" width="10" height="6" rx="1.2" fill={palette.accent} opacity="0.8"/>
          </svg>
        </div>
      </div>

      {/* Live iframe — starts below status bar */}
      {siteUrl && !failed && (
        <iframe
          src={siteUrl}
          title={project.name}
          onLoad={() => setLoaded(true)}
          style={{
            position: "absolute", top: STATUS_H, left: 0,
            width: 390, height: 844,
            transform: "scale(0.472)",
            transformOrigin: "top left",
            border: "none", pointerEvents: "none",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        />
      )}

      {/* Loading shimmer — below status bar */}
      {!loaded && !failed && (
        <div style={{
          position: "absolute", top: STATUS_H, left: 0, right: 0, bottom: 0,
          background: `linear-gradient(135deg, ${palette.bg} 0%, ${palette.light} 50%, ${palette.bg} 100%)`,
          backgroundSize: "200% 200%",
          animation: "shimmer 2s ease infinite",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            background: palette.accent + "22",
            border: `1.5px solid ${palette.accent}33`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: palette.accent }}>
              {project.name[0]}
            </span>
          </div>
        </div>
      )}

      {/* Fallback — below status bar */}
      {failed && (
        <div style={{
          position: "absolute", top: STATUS_H, left: 0, right: 0, bottom: 0,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 8,
          background: `linear-gradient(160deg, ${palette.bg}, ${palette.light})`,
        }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 700, color: palette.accent, opacity: 0.35 }}>
            {project.name[0]}
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.15em", color: palette.accent, opacity: 0.35, textTransform: "uppercase" }}>
            {project.name}
          </span>
        </div>
      )}
    </div>
  );
}

// ─── IPHONE FRAME ─────────────────────────────────────────────────────────────
function IPhone({ project }: { project: Project }) {
  const { palette } = project;
  const btn = (side: "left" | "right", top: number, h: number): React.CSSProperties => ({
    position: "absolute",
    [side]: -3, top, width: 3, height: h,
    background: "linear-gradient(to bottom, #8A8A8A, #666)",
    borderRadius: side === "left" ? "2px 0 0 2px" : "0 2px 2px 0",
    zIndex: 1,
  });

  return (
    <div style={{ position: "relative", width: 184, height: 378 }}>
      <div style={btn("left", 58, 14)} />
      <div style={btn("left", 80, 28)} />
      <div style={btn("left", 116, 28)} />
      <div style={btn("right", 98, 44)} />

      <div style={{
        position: "relative", width: 184, height: 378,
        borderRadius: 48,
        background: "linear-gradient(160deg, #3C3C3C 0%, #1C1C1E 55%, #2C2C2C 100%)",
        boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 10px 30px rgba(0,0,0,0.3), 0 0 0 1.5px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.12)",
        overflow: "hidden",
      }}>
        {/* Titanium sheen */}
        <div style={{
          position: "absolute", inset: 0, borderRadius: 48,
          background: "linear-gradient(135deg, rgba(255,255,255,0.09) 0%, transparent 45%)",
          zIndex: 20, pointerEvents: "none",
        }} />

        {/* Screen */}
        <div style={{
          position: "absolute",
          top: 5, left: 5, right: 5, bottom: 5,
          borderRadius: 43, overflow: "hidden",
        }}>
          <IPhoneScreen project={project} />

          {/* Dynamic Island */}
          <div style={{
            position: "absolute", top: 13, left: "50%",
            transform: "translateX(-50%)",
            width: 62, height: 16, borderRadius: 999,
            background: "#060606", zIndex: 30,
          }} />

          {/* Glare */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(125deg, rgba(255,255,255,0.1) 0%, transparent 42%)",
            pointerEvents: "none", zIndex: 25,
          }} />
        </div>
      </div>
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function Work() {
  const ref = useRef<HTMLElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [entered, setEntered] = useState(false);
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setEntered(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const goTo = useCallback((idx: number) => {
    if (idx === active || animating) return;
    clearTimeout(timerRef.current);
    setAnimating(true);
    setTimeout(() => { setActive(idx); setAnimating(false); }, 280);
  }, [active, animating]);

  useEffect(() => {
    if (!entered) return;
    timerRef.current = setTimeout(() => goTo((active + 1) % PROJECTS.length), 5000);
    return () => clearTimeout(timerRef.current);
  }, [entered, active, goTo]);

  const project = PROJECTS[active];

  return (
    <section
      id="work"
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
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", marginBottom: 48,
          flexWrap: "wrap", gap: 20,
          opacity: entered ? 1 : 0,
          transform: entered ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <div>
            <div className="section-label" style={{ marginBottom: 12 }}>
              <span>Our Work</span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 700, color: "#1C1C1A", lineHeight: 1.1,
            }}>
              Real projects.<br />
              <span style={{ color: "#1A2848" }}>Real Sri Lankan businesses.</span>
            </h2>
          </div>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 14, fontWeight: 300,
            color: "#6B6B68", lineHeight: 1.75, maxWidth: 300,
          }}>
            No templates. No shortcuts. Every site built from scratch for a real local business owner.
          </p>
        </div>

        {/* ── MAIN PANEL ── */}
        <div
          className="work-panel"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            background: "#fff",
            border: "1px solid #E5E3DD",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 8px 40px rgba(26,40,72,0.07)",
            opacity: entered ? 1 : 0,
            transform: entered ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}
        >

          {/* ── LEFT: iPhone ── */}
          <div style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "48px 32px",
            borderRight: "1px solid #E5E3DD",
            overflow: "hidden",
            minHeight: 520,
            background: `linear-gradient(150deg, ${project.palette.bg} 0%, ${project.palette.light}66 100%)`,
            transition: "background 0.6s ease",
          }}>
            {/* Ambient glow */}
            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              background: `radial-gradient(ellipse 70% 70% at 50% 55%, ${project.palette.light}AA 0%, transparent 70%)`,
              transition: "background 0.6s ease",
            }} />
            {/* Dot grid */}
            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              backgroundImage: `radial-gradient(circle, ${project.palette.accent}18 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
              maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)",
            }} />

            {/* Phone */}
            <div
              className="work-phone-wrap"
              style={{
                position: "relative", zIndex: 2,
                opacity: animating ? 0 : 1,
                transform: animating ? "scale(0.96) translateY(10px)" : "scale(1) translateY(0)",
                transition: "opacity 0.28s ease, transform 0.28s ease",
                animation: !animating ? "phoneFloat 6s ease-in-out infinite" : "none",
              }}
            >
              <IPhone project={project} />
            </div>

            {/* Top-left counter */}
            <div style={{
              position: "absolute", top: 18, left: 20,
              fontFamily: "var(--font-mono)",
              fontSize: 9, letterSpacing: "0.2em",
              color: project.palette.accent, opacity: 0.5,
              transition: "color 0.4s",
            }}>
              {project.id} / 0{PROJECTS.length}
            </div>

            {/* Category pill bottom-left */}
            <div style={{
              position: "absolute", bottom: 18, left: 20,
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "5px 12px",
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(8px)",
              border: `1px solid ${project.palette.light}`,
              borderRadius: 999,
              opacity: animating ? 0 : 1,
              transition: "opacity 0.3s ease, border-color 0.4s",
            }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: project.palette.accent, transition: "background 0.4s" }} />
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: 8, letterSpacing: "0.16em",
                color: project.palette.dark, textTransform: "uppercase",
                transition: "color 0.4s",
              }}>{project.category}</span>
            </div>

            {/* Metric badge bottom-right */}
            <div style={{
              position: "absolute", bottom: 18, right: 20,
              background: "#fff",
              border: `1px solid ${project.palette.light}`,
              borderRadius: 8, padding: "7px 13px",
              display: "flex", flexDirection: "column", alignItems: "center",
              boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
              opacity: animating ? 0 : 1,
              transition: "opacity 0.3s ease",
            }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: project.palette.accent, lineHeight: 1 }}>
                {project.metric.value}
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.1em", color: "#6B6B68", marginTop: 2 }}>
                {project.metric.label}
              </span>
            </div>
          </div>

          {/* ── RIGHT: Details ── */}
          <div style={{
            padding: "40px 40px 36px",
            display: "flex", flexDirection: "column",
          }}>
            {/* Content — animates on change */}
            <div style={{
              flex: 1,
              opacity: animating ? 0 : 1,
              transform: animating ? "translateX(10px)" : "translateX(0)",
              transition: "opacity 0.28s ease, transform 0.28s ease",
            }}>
              <p style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9, letterSpacing: "0.2em",
                color: "#6B6B68", textTransform: "uppercase",
                marginBottom: 8,
              }}>{project.location}</p>

              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.6rem,3vw,2.2rem)",
                fontWeight: 700, color: "#1C1C1A",
                lineHeight: 1.1, marginBottom: 14,
              }}>{project.name}</h3>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                {project.tags.map(t => (
                  <span key={t} style={{
                    padding: "3px 10px",
                    border: `1px solid ${project.palette.accent}44`,
                    borderRadius: 999,
                    fontFamily: "var(--font-mono)",
                    fontSize: 8, letterSpacing: "0.14em",
                    color: project.palette.accent,
                    textTransform: "uppercase",
                    background: `${project.palette.accent}0D`,
                  }}>{t}</span>
                ))}
              </div>

              {/* Story */}
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14, fontWeight: 300,
                color: "#6B6B68", lineHeight: 1.8,
                marginBottom: 16,
              }}>{project.story}</p>

              {/* Result */}
              <div style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "9px 13px",
                background: `${project.palette.accent}08`,
                border: `1px solid ${project.palette.accent}22`,
                borderRadius: 6, marginBottom: 18,
              }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: project.palette.accent, flexShrink: 0 }} />
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9, letterSpacing: "0.1em",
                  color: project.palette.accent, textTransform: "uppercase",
                }}>{project.result}</span>
              </div>

              {/* Quote */}
              <div style={{ borderLeft: `2px solid ${project.palette.light}`, paddingLeft: 14 }}>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 13, fontWeight: 300,
                  color: "#6B6B68", lineHeight: 1.7,
                  fontStyle: "italic", marginBottom: 6,
                }}>"{project.quote}"</p>
                <p style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9, letterSpacing: "0.12em",
                  color: "#1A2848",
                }}>— {project.quoteName}</p>
              </div>
            </div>

            {/* Bottom nav */}
            <div style={{ marginTop: 28 }}>
              <div style={{ height: 1, background: "#F0EEE9", marginBottom: 20 }} />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>

                {/* Project selector tabs */}
                <div style={{ display: "flex", gap: 6 }}>
                  {PROJECTS.map((p, i) => (
                    <button
                      key={p.id}
                      onClick={() => goTo(i)}
                      style={{
                        all: "unset", cursor: "pointer",
                        padding: "5px 10px",
                        borderRadius: 4,
                        fontFamily: "var(--font-mono)",
                        fontSize: 8, letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        background: i === active ? p.palette.accent : "transparent",
                        color: i === active ? "#fff" : "#6B6B68",
                        border: `1px solid ${i === active ? p.palette.accent : "#E5E3DD"}`,
                        transition: "all 0.25s ease",
                      }}
                    >
                      {p.id}
                    </button>
                  ))}
                </div>

                {/* Live links */}
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {project.urls ? (
                    project.urls.map(u => (
                      <a key={u.href} href={u.href} target="_blank" rel="noopener noreferrer"
                        style={{
                          display: "inline-flex", alignItems: "center", gap: 4,
                          padding: "5px 10px",
                          background: project.palette.accent,
                          borderRadius: 4,
                          fontFamily: "var(--font-mono)",
                          fontSize: 8, letterSpacing: "0.1em",
                          color: "#fff", textDecoration: "none",
                          transition: "opacity 0.2s",
                        }}
                        onMouseEnter={e => e.currentTarget.style.opacity = "0.8"}
                        onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                      >
                        {u.label}
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
                      </a>
                    ))
                  ) : project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 5,
                        padding: "6px 14px",
                        background: project.palette.accent,
                        borderRadius: 4,
                        fontFamily: "var(--font-mono)",
                        fontSize: 9, letterSpacing: "0.12em",
                        color: "#fff", textDecoration: "none",
                        transition: "opacity 0.2s",
                      }}
                      onMouseEnter={e => e.currentTarget.style.opacity = "0.8"}
                      onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                    >
                      View Live
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
                    </a>
                  ) : (
                    <span style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 8, letterSpacing: "0.12em",
                      color: "#C5C3BD",
                    }}>Private project</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop: 40,
          display: "flex", alignItems: "center",
          justifyContent: "center", gap: 16, flexWrap: "wrap",
          opacity: entered ? 1 : 0,
          transition: "opacity 0.6s ease 0.6s",
        }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 300, color: "#6B6B68" }}>
            Your business could be next.
          </p>
          <a
            href="https://wa.me/94717411188?text=Hi%20Najman%2C%20I%20saw%20your%20work%20and%20I%27d%20like%20to%20discuss%20a%20website."
            target="_blank" rel="noopener noreferrer"
            className="btn-primary btn-wa"
            style={{ padding: "11px 22px", fontSize: 10, letterSpacing: "0.12em" }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Let's Talk
          </a>
        </div>
      </div>

      <style>{`
        @keyframes shimmer { from { background-position: -200% center; } to { background-position: 200% center; } }
        @keyframes phoneFloat { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @media (max-width: 768px) {
          .work-panel { grid-template-columns: 1fr !important; }
          .work-panel > div:first-child {
            min-height: 460px !important;
            padding: 32px 20px !important;
            border-right: none !important;
            border-bottom: 1px solid #E5E3DD;
          }
          .work-panel > div:last-child {
            padding: 28px 20px 24px !important;
            min-height: 580px !important;
          }
          .work-phone-wrap { animation: none !important; }
        }
      `}</style>
    </section>
  );
}