"use client";

import { useEffect, useRef, useState } from "react";

// ─── PROJECT DATA ─────────────────────────────────────────────────────────────
const PROJECTS = [
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
    palette: { bg: "#EEF4FB", accent: "#2D6A9F", light: "#D6E8F7" },
    url: "https://elvynstore.com",
    metric: { label: "PageSpeed", value: "100" },
    wide: true,
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
    palette: { bg: "#FBF5EE", accent: "#C4915A", light: "#F5E6D3" },
    url: "https://hedone-skincare.vercel.app",
    metric: { label: "Reaction", value: "😮" },
    wide: false,
  },
  {
    id: "03",
    name: "Noorul Hudha Institute",
    category: "Institute Website",
    location: "Pakistan",
    story: "A Quran education institute needed a professional platform for class schedules, registration, and announcements. Clean, accessible, and fast on low-end mobile devices.",
    result: "Complex requirements handled with patience and precision.",
    quote: "The technical execution was perfect. Ahamed handled complex suggestions with extreme patience.",
    quoteName: "Aalima Bint Nazeer",
    tags: ["Institute", "Registration", "Accessible"],
    palette: { bg: "#EEF5EF", accent: "#4A7C4E", light: "#D6EDD8" },
    url: "https://noorulhudhainstitute.com",
    metric: { label: "Delivered", value: "5 days" },
    wide: false,
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
    palette: { bg: "#F5F0F8", accent: "#7B5EA7", light: "#E8DFF5" },
    url: null,
    urls: [
      { label: "elda.lk", href: "https://elda.lk" },
      { label: "ambrinsfabrics.lk", href: "https://ambrinsfabrics.lk" },
      { label: "thebalancedpantry.lk", href: "https://thebalancedpantry.lk" },
    ],
    metric: { label: "Stores", value: "3×" },
    wide: true,
  },
];

// ─── TYPES ────────────────────────────────────────────────────────────────────
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
  palette: { bg: string; accent: string; light: string };
  url: string | null;
  urls?: { label: string; href: string }[];
  metric: { label: string; value: string };
  wide: boolean;
};

// ─── TAG CHIP ─────────────────────────────────────────────────────────────────
function Tag({ label, accent }: { label: string; accent: string }) {
  return (
    <span style={{
      padding: "3px 10px",
      border: `1px solid ${accent}44`,
      borderRadius: 999,
      fontFamily: "var(--font-mono)",
      fontSize: 8, letterSpacing: "0.15em",
      color: accent,
      textTransform: "uppercase",
      background: `${accent}0D`,
    }}>{label}</span>
  );
}

// ─── PROJECT VISUAL ───────────────────────────────────────────────────────────
// Uses Microlink API to auto-screenshot live URLs. Falls back to branded
// placeholder for projects without a public URL.
function ProjectVisual({ project }: { project: Project }) {
  const { palette, name, id } = project;
  const [hovered, setHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Pick the URL to screenshot — for multi-url projects use the first one
  const screenshotUrl = project.url || (project.urls?.[0]?.href ?? null);
  const microlinkSrc = screenshotUrl
    ? `https://api.microlink.io?url=${encodeURIComponent(screenshotUrl)}&screenshot=true&meta=false&embed=screenshot.url`
    : null;

  const showImage = microlinkSrc && !imgError;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: palette.bg,
        borderBottom: `1px solid ${palette.light}`,
        height: 220,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.4s",
      }}
    >
      {/* ── Screenshot image ── */}
      {showImage && (
        <>
          {/* Skeleton shimmer shown until image loads */}
          {!imgLoaded && (
            <div style={{
              position: "absolute", inset: 0,
              background: `linear-gradient(90deg, ${palette.bg} 25%, ${palette.light} 50%, ${palette.bg} 75%)`,
              backgroundSize: "200% 100%",
              animation: "shimmer 1.6s ease infinite",
            }} />
          )}
          <img
            src={microlinkSrc}
            alt={`${name} website screenshot`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
              opacity: imgLoaded ? 1 : 0,
              transform: hovered ? "scale(1.04)" : "scale(1)",
              transition: "opacity 0.5s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)",
            }}
          />
          {/* Gradient overlay so badges stay readable */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 40%, rgba(0,0,0,0.25) 100%)",
            pointerEvents: "none",
          }} />
        </>
      )}

      {/* ── Fallback placeholder (no URL or image error) ── */}
      {!showImage && (
        <>
          <div style={{
            width: 80, height: 80,
            border: `2px solid ${palette.accent}33`,
            borderRadius: 8,
            display: "flex", alignItems: "center", justifyContent: "center",
            transform: hovered ? "rotate(6deg) scale(1.1)" : "rotate(0deg) scale(1)",
            transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",
            position: "relative", zIndex: 2,
          }}>
            <span style={{
              fontFamily: "var(--font-display)",
              fontSize: 36, fontWeight: 700,
              color: palette.accent, opacity: 0.9,
            }}>{name[0]}</span>
          </div>
          <div style={{
            position: "absolute", width: 160, height: 160,
            border: `1px solid ${palette.accent}18`, borderRadius: "50%",
            transform: hovered ? "scale(1.15)" : "scale(1)",
            transition: "transform 0.6s ease",
          }} />
          <div style={{
            position: "absolute", width: 220, height: 220,
            border: `1px solid ${palette.accent}0C`, borderRadius: "50%",
            transform: hovered ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.7s ease",
          }} />
        </>
      )}

      {/* ID badge top-left */}
      <div style={{
        position: "absolute", top: 14, left: 16,
        fontFamily: "var(--font-mono)",
        fontSize: 8, letterSpacing: "0.2em",
        color: palette.accent, opacity: 0.6,
      }}>{id} ·</div>

      {/* Metric badge top-right */}
      <div style={{
        position: "absolute", top: 12, right: 14,
        background: "#fff",
        border: `1px solid ${palette.light}`,
        borderRadius: 6,
        padding: "4px 10px",
        display: "flex", flexDirection: "column", alignItems: "center",
      }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: palette.accent, lineHeight: 1 }}>
          {project.metric.value}
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 7, letterSpacing: "0.12em", color: "#6B6B68", marginTop: 2 }}>
          {project.metric.label}
        </span>
      </div>

      {/* Category bottom */}
      <div style={{
        position: "absolute", bottom: 14, left: "50%",
        transform: "translateX(-50%)",
        fontFamily: "var(--font-mono)",
        fontSize: 8, letterSpacing: "0.2em",
        color: palette.accent, opacity: 0.5,
        textTransform: "uppercase", whiteSpace: "nowrap",
      }}>{project.category}</div>

      {/* Single visit link */}
      {project.url && !project.urls && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          style={{
            position: "absolute", bottom: 14, right: 14,
            display: "flex", alignItems: "center", gap: 5,
            padding: "5px 10px",
            background: palette.accent,
            borderRadius: 4,
            fontFamily: "var(--font-mono)",
            fontSize: 8, letterSpacing: "0.12em",
            color: "#fff", textDecoration: "none",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          View Live
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M7 7h10v10"/>
          </svg>
        </a>
      )}

      {/* Multi-URL links (e.g. Ambrins 3 stores) */}
      {project.urls && (
        <div style={{
          position: "absolute", bottom: 14, right: 14,
          display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "flex-end",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}>
          {project.urls.map(u => (
            <a
              key={u.href}
              href={u.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              style={{
                display: "flex", alignItems: "center", gap: 4,
                padding: "5px 9px",
                background: palette.accent,
                borderRadius: 4,
                fontFamily: "var(--font-mono)",
                fontSize: 8, letterSpacing: "0.1em",
                color: "#fff", textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              {u.label}
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M7 7h10v10"/>
              </svg>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────
function ProjectCard({ project, index, entered }: { project: Project; index: number; entered: boolean }) {
  return (
    <div
      className="card"
      style={{
        gridColumn: project.wide ? "span 2" : "span 1",
        overflow: "hidden",
        opacity: entered ? 1 : 0,
        transform: entered ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
      }}
    >
      {/* Visual */}
      <ProjectVisual project={project} />

      {/* Content */}
      <div style={{ padding: "24px 26px 28px" }}>
        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
          {project.tags.map(t => (
            <Tag key={t} label={t} accent={project.palette.accent} />
          ))}
        </div>

        {/* Name + location */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
          <h3 style={{
            fontFamily: "var(--font-display)",
            fontSize: 22, fontWeight: 700,
            color: "#1C1C1A", lineHeight: 1.15,
          }}>{project.name}</h3>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: 8, letterSpacing: "0.15em",
            color: "#6B6B68", textTransform: "uppercase",
            marginTop: 4, flexShrink: 0, marginLeft: 12,
          }}>{project.location}</span>
        </div>

        {/* Story */}
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: 14, fontWeight: 300,
          color: "#6B6B68", lineHeight: 1.75,
          marginBottom: 16,
        }}>{project.story}</p>

        {/* Result line */}
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          padding: "10px 14px",
          background: `${project.palette.accent}08`,
          border: `1px solid ${project.palette.accent}20`,
          borderRadius: 4,
          marginBottom: 16,
        }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: project.palette.accent, flexShrink: 0 }} />
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: 9, letterSpacing: "0.12em",
            color: project.palette.accent, textTransform: "uppercase",
          }}>{project.result}</span>
        </div>

        {/* Quote */}
        <div style={{
          borderLeft: `2px solid ${project.palette.light}`,
          paddingLeft: 14,
        }}>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13, fontWeight: 300,
            color: "#6B6B68", lineHeight: 1.65,
            fontStyle: "italic", marginBottom: 6,
          }}>
            "{project.quote}"
          </p>
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: 8, letterSpacing: "0.12em",
            color: "#1A2848",
          }}>— {project.quoteName}</p>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function Work() {
  const ref = useRef(null);
  const [entered, setEntered] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setEntered(true);
        setHeaderVisible(true);
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

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
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: 56,
          flexWrap: "wrap", gap: 24,
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <div>
            <div className="section-label" style={{ marginBottom: 12 }}>
              <span>Our Work</span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 700,
              color: "#1C1C1A",
              lineHeight: 1.1,
            }}>
              Real projects.<br />
              <span style={{ color: "#1A2848" }}>Real Sri Lankan businesses.</span>
            </h2>
          </div>

          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 14, fontWeight: 300,
            color: "#6B6B68", lineHeight: 1.75,
            maxWidth: 320,
          }}>
            Every project on this list was built for a real local business owner who needed something they could be proud of. No templates. No shortcuts.
          </p>
        </div>

        {/* Project grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 16,
        }} className="work-grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              entered={entered}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          flexWrap: "wrap",
          opacity: entered ? 1 : 0,
          transition: "opacity 0.6s ease 0.5s",
        }}>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 15, fontWeight: 300,
            color: "#6B6B68",
          }}>
            Your business could be next.
          </p>
          <a
            href="https://wa.me/94717411188?text=Hi%20Najman%2C%20I%20saw%20your%20work%20and%20I%27d%20like%20to%20discuss%20a%20website."
            target="_blank"
            rel="noopener noreferrer"
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
        @media (max-width: 720px) {
          .work-grid {
            grid-template-columns: 1fr !important;
          }
          .work-grid > * {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}