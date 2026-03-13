"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";

const NAV_LINKS = [
  { label: "Work",     href: "#work" },
  { label: "Process",  href: "#process" },
  { label: "Packages", href: "#packages" },
  { label: "About",    href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [activeSection, setActive]    = useState("");

  // ── Scroll state ──────────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Active section detection ───────────────────────────────────────────────
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.slice(1));
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-40% 0px -55% 0px" });
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // ── Smooth scroll ─────────────────────────────────────────────────────────
  const scrollTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const waLink = "https://wa.me/94717411188?text=Hi%20Najman%2C%20I%27m%20interested%20in%20getting%20a%20website%20built.";

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #6B6B68;
          text-decoration: none;
          padding: 4px 0;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0;
          width: 0; height: 1px;
          background: #1A2848;
          transition: width 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .nav-link:hover,
        .nav-link.active {
          color: #1A2848;
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(100%); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      {/* ── Scroll progress bar ── */}
      <ScrollProgress />

      <header style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 200,
        background: scrolled
          ? "rgba(250,249,246,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #E5E3DD" : "1px solid transparent",
        transition: "background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease",
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 clamp(1.25rem,6vw,4rem)",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}>

          {/* ── Logo ── */}
          <a
            href="/"
            style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}
          >
            <img
              src="/logo.png"
              alt="Ahamed Web Studio"
              style={{ height: 32, width: "auto", display: "block" }}
              onError={e => { e.currentTarget.style.display = "none"; }}
            />
            {/* Fallback wordmark */}
            <div>
              <span style={{
                fontFamily: "var(--font-display)",
                fontSize: 15, fontWeight: 700,
                color: "#1C1C1A", letterSpacing: "-0.01em",
                display: "block", lineHeight: 1.1,
              }}>Ahamed</span>
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: 7, letterSpacing: "0.22em",
                color: "#6B6B68", textTransform: "uppercase",
                display: "block",
              }}>Web Studio</span>
            </div>
          </a>

          {/* ── Desktop nav ── */}
          <nav style={{
            display: "flex", alignItems: "center", gap: 32,
          }} className="desktop-nav">
            {NAV_LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={e => scrollTo(e, l.href)}
                className={`nav-link${activeSection === l.href.slice(1) ? " active" : ""}`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* ── Right side ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
            {/* WA CTA */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="desktop-nav"
              style={{
                display: "flex", alignItems: "center", gap: 7,
                padding: "8px 16px",
                background: "#25D366",
                borderRadius: 6,
                fontFamily: "var(--font-mono)",
                fontSize: 9, letterSpacing: "0.13em",
                color: "#fff", textDecoration: "none",
                textTransform: "uppercase",
                transition: "background 0.2s, transform 0.2s",
                boxShadow: "0 2px 12px rgba(37,211,102,0.25)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#20BA5A";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#25D366";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="mobile-menu-btn"
              style={{
                background: "none", border: "none",
                cursor: "pointer", padding: 6,
                display: "flex", flexDirection: "column",
                gap: 5, alignItems: "center", justifyContent: "center",
              }}
              aria-label="Toggle menu"
            >
              {[0,1,2].map(i => (
                <span key={i} style={{
                  display: "block",
                  width: menuOpen ? (i === 1 ? 0 : 20) : 22,
                  height: 1.5,
                  background: "#1C1C1A",
                  borderRadius: 1,
                  transform: menuOpen
                    ? i === 0 ? "rotate(45deg) translate(4px,4px)"
                    : i === 2 ? "rotate(-45deg) translate(4px,-4px)"
                    : "scaleX(0)"
                    : "none",
                  transition: "all 0.25s ease",
                  transformOrigin: "center",
                }} />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu overlay ── */}
      {menuOpen && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 190,
            background: "rgba(26,40,72,0.4)",
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ── Mobile menu panel ── */}
      <div style={{
        position: "fixed",
        top: 0, right: 0, bottom: 0,
        width: "min(320px, 85vw)",
        background: "#FAF9F6",
        zIndex: 195,
        transform: menuOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
        display: "flex", flexDirection: "column",
        borderLeft: "1px solid #E5E3DD",
        boxShadow: "-16px 0 48px rgba(26,40,72,0.12)",
      }}>
        {/* Panel header */}
        <div style={{
          height: 64, display: "flex",
          alignItems: "center", justifyContent: "space-between",
          padding: "0 24px",
          borderBottom: "1px solid #E5E3DD",
        }}>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: 9, letterSpacing: "0.2em",
            color: "#6B6B68", textTransform: "uppercase",
          }}>Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              background: "none", border: "none",
              cursor: "pointer", padding: 4,
              color: "#1C1C1A", fontSize: 20, lineHeight: 1,
            }}
          >×</button>
        </div>

        {/* Panel links */}
        <nav style={{ padding: "24px 24px", display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={e => scrollTo(e, l.href)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 24, fontWeight: 700,
                color: activeSection === l.href.slice(1) ? "#1A2848" : "#1C1C1A",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid #F0EEE9",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                animation: `slideIn 0.3s ease ${i * 0.05}s both`,
                transition: "color 0.2s",
              }}
            >
              {l.label}
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "#C5C3BD", letterSpacing: "0.15em" }}>
                0{i + 1}
              </span>
            </a>
          ))}
        </nav>

        {/* Panel WA button */}
        <div style={{ padding: "24px" }}>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              padding: "14px",
              background: "#25D366",
              borderRadius: 8,
              fontFamily: "var(--font-mono)",
              fontSize: 10, letterSpacing: "0.14em",
              color: "#fff", textDecoration: "none",
              textTransform: "uppercase",
              boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-menu-btn { display: none !important; }
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}

// ─── SCROLL PROGRESS ──────────────────────────────────────────────────────────
function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setPct(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0,
      height: 2, zIndex: 210, background: "transparent",
    }}>
      <div style={{
        height: "100%",
        width: `${pct}%`,
        background: "linear-gradient(to right, #1A2848, #F25C43)",
        transition: "width 0.1s linear",
      }} />
    </div>
  );
}