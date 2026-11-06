"use client";

import { useEffect } from "react";

/**
 * Fades in elements marked `data-reveal` as they scroll into view.
 * Elements stay fully visible until this runs, so the page reads fine
 * without JavaScript, and nothing animates under prefers-reduced-motion.
 */
export default function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const fold = window.innerHeight;
    const pending = els.filter((el) => el.getBoundingClientRect().top > fold * 0.92);
    pending.forEach((el) => el.setAttribute("data-reveal", "pending"));

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.setAttribute("data-reveal", "in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    pending.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
