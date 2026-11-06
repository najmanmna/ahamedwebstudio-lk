"use client";

import { useEffect, useState } from "react";
import s from "./prayerstop.module.css";
import { NAV_LINKS } from "./data";
import { PsAppIcon } from "./PsLogo";
import { DownloadIcon } from "./icons";

export default function PsNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`${s.nav} ${scrolled || open ? s.navScrolled : ""}`}>
      <div className={`${s.container} ${s.navInner}`}>
        <a href="#top" className={s.brand} onClick={close} aria-label="PrayerStop, back to top">
          <PsAppIcon size={34} />
          <span className={s.brandName}>PrayerStop</span>
          <span className={s.betaTag}>Beta</span>
        </a>

        <nav className={s.navLinks} aria-label="Page sections">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className={s.navLink}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={s.navActions}>
          <a href="#download" className={`${s.btn} ${s.btnPrimary} ${s.btnSm}`} onClick={close}>
            <DownloadIcon size={16} />
            Download
          </a>
          <button
            type="button"
            className={s.menuBtn}
            aria-expanded={open}
            aria-controls="ps-mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <div id="ps-mobile-menu" className={`${s.mobileMenu} ${open ? s.mobileMenuOpen : ""}`} hidden={!open}>
        <nav className={s.container} aria-label="Page sections">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className={s.mobileLink} onClick={close}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
