"use client";

import { useEffect, useRef, useState } from "react";

const LIVE_URL = "https://northcollectivestore.com/";

const ArrowUpRight = () => (
  <svg 
    width="11" 
    height="11" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5"
    aria-hidden="true"
  >
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

export default function OsRecentWork() {
  const ref = useRef<HTMLElement>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { 
        setEntered(true); 
        observer.disconnect(); 
      }
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="os-work-section">
      <div className="os-work-container">
        
        <div className={`os-work-header ${entered ? "is-visible" : ""}`}>
          <p className="os-work-eyebrow">Recent Work</p>
          <h2 className="os-work-title">
            A store built the Growth Store way
          </h2>
        </div>

        <div className="os-work-grid">
          
          {/* Desktop screenshot */}
          <div 
            className={`os-work-desktop ${entered ? "is-visible" : ""}`}
            style={{ "--stagger-delay": "0.1s" } as React.CSSProperties}
          >
            <img
              src="/work/north-collective-desktop.webp"
              alt="North Collective store — desktop view"
              className="os-work-img"
              loading="lazy"
            />
          </div>

          {/* Copy + mobile shot */}
          <div className="os-work-content">
            <div 
              className={`os-work-mobile ${entered ? "is-visible" : ""}`}
              style={{ "--stagger-delay": "0.2s" } as React.CSSProperties}
            >
              <img
                src="/work/north-collective-mobile.webp"
                alt="North Collective store — mobile view"
                className="os-work-img"
                loading="lazy"
              />
            </div>

            <div 
              className={`os-work-text-block ${entered ? "is-visible" : ""}`}
              style={{ "--stagger-delay": "0.3s" } as React.CSSProperties}
            >
              <h3 className="os-work-project-name">North Collective</h3>

              <p className="os-work-project-desc">
                A modern catalogue store where customers browse products, add multiple items to their cart, and submit an order request. The business owner receives the order and confirms it manually.
              </p>

              <a
                href={LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="os-work-btn"
                aria-label="Visit North Collective Live Site"
              >
                Visit Live Site
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .os-work-section {
          background: #FAF9F6;
          padding-block: clamp(5rem, 10vw, 8rem);
          padding-inline: clamp(1.25rem, 6vw, 4rem);
          border-top: 1px solid #EDEBE5;
          overflow: hidden;
        }

        .os-work-container {
          max-width: 1160px;
          margin: 0 auto;
        }

        /* --- Header --- */
        .os-work-header {
          text-align: center;
          margin-bottom: 64px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .os-work-header.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .os-work-eyebrow {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.14em;
          color: #8A8783;
          text-transform: uppercase;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .os-work-title {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3.5vw, 2.6rem);
          font-weight: 700;
          color: #1C1C1A;
          letter-spacing: -0.02em;
        }

        /* --- Grid --- */
        .os-work-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: clamp(3rem, 5vw, 4rem);
          align-items: center;
        }

        /* --- Imagery --- */
        .os-work-desktop {
          border-radius: 14px;
          border: 1px solid #E5E3DD;
          overflow: hidden;
          background: #FFFFFF;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.02);
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
          transition-delay: var(--stagger-delay);
        }

        .os-work-desktop.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .os-work-mobile {
          width: 140px;
          border-radius: 16px;
          border: 4px solid #FFFFFF; /* Mimics a device bezel */
          overflow: hidden;
          background: #FFFFFF;
          margin-bottom: 32px;
          box-shadow: 0 12px 32px rgba(28, 28, 26, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
          transition-delay: var(--stagger-delay);
        }

        .os-work-mobile.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .os-work-img {
          width: 100%;
          height: auto;
          display: block;
        }

        /* --- Typography & Copy --- */
        .os-work-text-block {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
          transition-delay: var(--stagger-delay);
        }

        .os-work-text-block.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .os-work-project-name {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 700;
          color: #1C1C1A;
          margin-bottom: 16px;
        }

        .os-work-project-desc {
          font-family: var(--font-sans);
          font-size: 15.5px;
          font-weight: 400;
          color: #6B6B68;
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 420px;
        }

        /* --- Button --- */
        .os-work-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 24px;
          background: #1A2848;
          color: #FFFFFF;
          border-radius: 8px;
          font-family: var(--font-mono);
          font-size: 12.5px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.2s ease;
          outline: 2px solid transparent;
          outline-offset: 2px;
        }

        .os-work-btn:hover, .os-work-btn:focus-visible {
          background: #243660;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(26,40,72,0.18);
        }

        .os-work-btn:focus-visible {
          outline-color: #1A2848;
        }

        /* --- Responsive --- */
        @media (max-width: 900px) {
          .os-work-grid { 
            grid-template-columns: 1fr; 
            gap: 48px;
          }
          
          /* Change visual hierarchy on mobile */
          .os-work-desktop {
            order: 2;
          }
          
          .os-work-content {
            order: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .os-work-mobile {
            width: 180px; /* Slightly larger on mobile since it's the hero image for this block */
          }
        }
      `}</style>
    </section>
  );
}