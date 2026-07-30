"use client";

import { useEffect, useState } from "react";
import { waLink } from "./data";

const WA_LINK = waLink("Hi Najman, I'm interested in starting an online store.");

const WaIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function PhoneMockup({ isVisible }: { isVisible: boolean }) {
  return (
    <div className={`os-phone-wrapper ${isVisible ? "is-visible" : ""}`}>
      <div className="os-phone-frame">
        <div className="os-phone-screen">
          <video
            autoPlay
            loop
            muted
            playsInline
            // poster="/screen-recording-poster.jpg" // Highly recommended to add this!
            className="os-phone-video"
            src="/screen-recording.MOV"
          />
          <div className="os-phone-notch" />
        </div>
      </div>
    </div>
  );
}

export default function OsHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // requestAnimationFrame ensures the browser is ready before triggering the animation class
    let frameId: number;
    frameId = requestAnimationFrame(() => {
      frameId = requestAnimationFrame(() => {
        setIsVisible(true);
      });
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#packages")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="os-hero-section">
      <div className="os-hero-grid">
        
        <div className="os-hero-content">
          <p className={`os-eyebrow ${isVisible ? "is-visible" : ""}`}>
            Online Store Packages
          </p>

          <h1 className={`os-title ${isVisible ? "is-visible" : ""}`}>
            Start selling online<br />
            from <span className="os-highlight">LKR 29,900.</span>
          </h1>

          <p className={`os-description ${isVisible ? "is-visible" : ""}`}>
            A premium online store for your business, whatever stage you&apos;re at. Whether you&apos;re just getting started or ready for full e-commerce, there&apos;s a package built for you.
          </p>

          <div className={`os-actions ${isVisible ? "is-visible" : ""}`}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="os-btn-primary"
            >
              <WaIcon />
              Chat on WhatsApp
            </a>
            <a
              href="#packages"
              onClick={scrollToPricing}
              className="os-btn-secondary"
            >
              View Packages
            </a>
          </div>
        </div>

        <div className="os-hero-visual">
          <PhoneMockup isVisible={isVisible} />
        </div>
      </div>

      {/* Extracted CSS for cleaner component logic and proper pseudo-classes */}
      <style>{`
        .os-hero-section {
          background: #FAF9F6;
          padding-top: clamp(6rem, 12vw, 8rem);
          padding-bottom: clamp(4rem, 8vw, 6rem);
          padding-inline: clamp(1.25rem, 6vw, 4rem);
          overflow: hidden;
        }

        .os-hero-grid {
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: clamp(2.5rem, 6vw, 5rem);
          align-items: center;
        }

        /* --- Typography & Content --- */
        .os-eyebrow {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.16em;
          color: #6B6B68;
          text-transform: uppercase;
          margin-bottom: 20px;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .os-title {
          font-family: var(--font-display);
          font-size: clamp(2.6rem, 5.5vw, 4rem);
          font-weight: 700;
          line-height: 1.1;
          color: #1C1C1A;
          margin-bottom: 24px;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s;
        }

        .os-highlight {
          color: #F25C43;
        }

        .os-description {
          font-family: var(--font-sans);
          font-size: clamp(1rem, 1.6vw, 1.15rem);
          font-weight: 400;
          color: #4E4E4B;
          line-height: 1.75;
          max-width: 480px;
          margin-bottom: 40px;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;
        }

        /* --- Buttons --- */
        .os-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s;
        }

        .os-btn-primary, .os-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 15px 28px;
          border-radius: 8px;
          font-family: var(--font-mono);
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.2s ease;
          outline: 2px solid transparent;
          outline-offset: 2px;
        }

        .os-btn-primary {
          background: #25D366;
          color: #fff;
        }

        .os-btn-primary:hover, .os-btn-primary:focus-visible {
          background: #20BA5A;
        }

        .os-btn-secondary {
          background: transparent;
          border: 1px solid #C7CADA;
          color: #1A2848;
        }

        .os-btn-secondary:hover, .os-btn-secondary:focus-visible {
          border-color: #1A2848;
          background: rgba(26, 40, 72, 0.04);
        }

        .os-btn-primary:focus-visible {
          outline-color: #25D366;
        }

        .os-btn-secondary:focus-visible {
          outline-color: #1A2848;
        }

        /* --- Phone Mockup --- */
        .os-hero-visual {
          display: flex;
          justify-content: center;
        }

        .os-phone-wrapper {
          position: relative;
          width: 250px;
          height: 514px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s;
        }

        .os-phone-frame {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 40px;
          background: #111110;
          border: 1px solid #E5E3DD;
          overflow: hidden;
        }

        .os-phone-screen {
          position: absolute;
          inset: 6px;
          border-radius: 32px;
          overflow: hidden;
          background: #0C0C0C;
        }

        .os-phone-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .os-phone-notch {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 58px;
          height: 16px;
          border-radius: 999px;
          background: #060606;
          z-index: 2;
        }

        /* --- Animation Triggers --- */
        .is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* --- Responsive --- */
        @media (max-width: 860px) {
          .os-hero-grid { 
            grid-template-columns: 1fr; 
            text-align: center;
          }
          .os-hero-grid > div:last-child { 
            order: -1; 
            margin-bottom: 16px; 
          }
          .os-description {
            margin-left: auto;
            margin-right: auto;
          }
          .os-actions {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}