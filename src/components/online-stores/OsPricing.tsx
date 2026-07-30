"use client";

import { useEffect, useRef, useState } from "react";
import { TIERS, waLink } from "./data";

const Check = ({ isDark = false }: { isDark?: boolean }) => (
  <svg 
    width="14" 
    height="14" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={isDark ? "#FFFFFF" : "#1A2848"}
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    aria-hidden="true" 
    style={{ flexShrink: 0, marginTop: 3 }}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function OsPricing() {
  const ref = useRef<HTMLElement>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { 
        setEntered(true); 
        observer.disconnect(); 
      }
    }, { threshold: 0.08, rootMargin: "0px 0px -50px 0px" });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="packages" ref={ref} className="os-pricing-section">
      <div className="os-pricing-container">
        
        <div className="os-pricing-header">
          <h2 className="os-pricing-title">
            Which store fits your business?
          </h2>
          <p className="os-pricing-subtitle">
            Every package gets the same premium design and craft. The difference is how orders come in, and how customers pay.
          </p>
        </div>

        <div className="os-pricing-grid">
          {TIERS.map((tier, i) => {
            const cta = waLink(`Hi Najman, I'm interested in the ${tier.name} package.`);
            const isHighlight = tier.highlight;
            
            return (
              <div
                key={tier.id}
                className={`os-pricing-card ${isHighlight ? "is-highlighted" : ""} ${entered ? "is-visible" : ""}`}
                style={{ "--stagger": i } as React.CSSProperties}
              >
                <div className="os-card-inner">
                  {/* Badge */}
                  <div className="os-badge-wrapper">
                    {isHighlight && (
                      <span className="os-tier-badge">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <h3 className="os-tier-name">{tier.name}</h3>

                  <div className="os-tier-price-wrap">
                    {tier.priceNote && (
                      <span className="os-tier-price-note">{tier.priceNote}</span>
                    )}
                    <span className="os-tier-currency">LKR</span>
                    <span className="os-tier-price">{tier.price}</span>
                  </div>

                  <p className="os-tier-tagline">{tier.tagline}</p>

                  <ul className="os-tier-features">
                    {tier.features.map(f => (
                      <li key={f}>
                        <Check isDark={isHighlight} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="os-tier-delivery">
                    <span>Delivery</span>
                    <span className="os-delivery-value">{tier.delivery}</span>
                  </div>

                  <a
                    href={cta}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`os-tier-btn ${isHighlight ? "os-btn-inverted" : "os-btn-secondary"}`}
                    aria-label={`Get started with the ${tier.name} package`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .os-pricing-section {
          background: #FAFAFA; /* Slightly off-white to make the white cards pop */
          padding-block: clamp(6rem, 12vw, 9rem);
          padding-inline: clamp(1.25rem, 6vw, 4rem);
        }

        .os-pricing-container {
          max-width: 1160px;
          margin: 0 auto;
        }

        /* --- Header --- */
        .os-pricing-header {
          text-align: center;
          margin-bottom: 72px;
        }

        .os-pricing-title {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 4.5vw, 3.2rem);
          font-weight: 700;
          color: #1C1C1A;
          line-height: 1.1;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .os-pricing-subtitle {
          font-family: var(--font-sans);
          font-size: clamp(1rem, 1.5vw, 1.125rem);
          font-weight: 400;
          color: #6B6B68;
          line-height: 1.6;
          max-width: 540px;
          margin: 0 auto;
        }

        /* --- Grid & Card Animation --- */
        .os-pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: center; /* Centers the cards so the highlighted one can be slightly taller if needed */
        }

        .os-pricing-card {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
          transition-delay: calc(var(--stagger) * 0.12s);
        }

        .os-pricing-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* --- Card Inner (Handles Hover & Theming) --- */
        .os-card-inner {
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 40px 32px;
          border-radius: 20px;
          background: #FFFFFF;
          border: 1px solid #EAE8E1;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.02);
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease, border-color 0.4s ease;
        }

        /* Dark Theme Inversion for Highlighted Tier — brand navy, matching the
           highlighted card treatment on the main Packages section */
        .os-pricing-card.is-highlighted .os-card-inner {
          background: #1A2848;
          border-color: #1A2848;
          box-shadow: 0 20px 40px rgba(26, 40, 72, 0.18);
          transform: scale(1.02); /* Slight pop out of the grid */
        }

        .os-pricing-card:hover .os-card-inner {
          transform: translateY(-8px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.06);
          border-color: #D8D5CE;
        }

        .os-pricing-card.is-highlighted:hover .os-card-inner {
          transform: scale(1.02) translateY(-8px);
          border-color: #243660;
        }

        /* --- Typography --- */
        .os-badge-wrapper {
          height: 24px;
          margin-bottom: 20px;
        }

        .os-tier-badge {
          display: inline-flex;
          align-items: center;
          padding: 4px 12px;
          border-radius: 999px;
          background: rgba(242, 92, 67, 0.15);
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          color: #F25C43;
          text-transform: uppercase;
          font-weight: 600;
        }

        .os-tier-name {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 700;
          color: #1C1C1A;
          margin-bottom: 12px;
          transition: color 0.3s ease;
        }

        .os-pricing-card.is-highlighted .os-tier-name {
          color: #FFFFFF;
        }

        .os-tier-price-wrap {
          display: flex;
          align-items: baseline;
          gap: 6px;
          margin-bottom: 16px;
        }

        .os-tier-price-note {
          font-family: var(--font-mono);
          font-size: 13px;
          color: #8A8783;
        }

        .os-tier-currency {
          font-family: var(--font-mono);
          font-size: 16px;
          color: #6B6B68;
          font-weight: 500;
        }

        .os-tier-price {
          font-family: var(--font-display);
          font-size: 40px;
          font-weight: 700;
          color: #1C1C1A;
          letter-spacing: -0.03em;
        }

        .os-pricing-card.is-highlighted .os-tier-price {
          color: #FFFFFF;
        }

        .os-tier-tagline {
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 400;
          color: #6B6B68;
          line-height: 1.6;
          margin-bottom: 32px;
          padding-bottom: 24px;
          border-bottom: 1px solid #F0EEE9;
        }

        .os-pricing-card.is-highlighted .os-tier-tagline {
          color: #A9B4CC;
          border-bottom-color: rgba(255, 255, 255, 0.14);
        }

        /* --- Features List --- */
        .os-tier-features {
          list-style: none;
          padding: 0;
          margin: 0 0 40px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex: 1;
        }

        .os-tier-features li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .os-tier-features span {
          font-family: var(--font-sans);
          font-size: 15px;
          color: #3A3A37;
          line-height: 1.5;
        }

        .os-pricing-card.is-highlighted .os-tier-features span {
          color: #EBEBEA;
        }

        /* --- Meta & CTA --- */
        .os-tier-delivery {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 0;
          margin-bottom: 24px;
          border-top: 1px solid #F0EEE9;
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.08em;
          color: #8A8783;
          text-transform: uppercase;
        }

        .os-pricing-card.is-highlighted .os-tier-delivery {
          border-top-color: rgba(255, 255, 255, 0.14);
          color: #A9B4CC;
        }

        .os-delivery-value {
          color: #1C1C1A;
          font-weight: 600;
        }

        .os-pricing-card.is-highlighted .os-delivery-value {
          color: #FFFFFF;
        }

        .os-tier-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 20px;
          border-radius: 10px;
          font-family: var(--font-mono);
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          outline: 2px solid transparent;
          outline-offset: 2px;
        }

        /* Light button for the dark highlighted card */
        .os-btn-inverted {
          background: #FFFFFF;
          color: #1A2848;
          border: 1px solid #FFFFFF;
        }

        .os-btn-inverted:hover, .os-btn-inverted:focus-visible {
          background: #F0F0F0;
          transform: translateY(-2px);
        }

        /* Standard button for light cards */
        .os-btn-secondary {
          background: #F7F7F5;
          border: 1px solid #EAE8E1;
          color: #1A2848;
        }

        .os-btn-secondary:hover, .os-btn-secondary:focus-visible {
          border-color: #1A2848;
          background: #FFFFFF;
          transform: translateY(-2px);
        }

        .os-tier-btn:focus-visible {
          outline-color: #1A2848;
        }
        
        .os-pricing-card.is-highlighted .os-tier-btn:focus-visible {
          outline-color: #FFFFFF;
        }

        /* --- Responsive --- */
        @media (max-width: 960px) {
          .os-pricing-grid { 
            grid-template-columns: 1fr;
            max-width: 500px;
            margin: 0 auto;
          }
          .os-pricing-card.is-highlighted .os-card-inner {
            transform: scale(1);
          }
          .os-pricing-card.is-highlighted:hover .os-card-inner {
            transform: translateY(-8px);
          }
          .os-card-inner {
            padding: 32px 24px;
          }
        }
      `}</style>
    </section>
  );
}