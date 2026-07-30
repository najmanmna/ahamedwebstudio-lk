"use client";

import { useEffect, useRef, useState } from "react";

const FAQS = [
  {
    q: "Can I upgrade later?",
    a: "Yes. Businesses can start with Starter and upgrade to Growth or Pro anytime.",
  },
  {
    q: "Do I need a payment gateway?",
    a: "No. Only the Pro Store requires one — Starter and Growth work through WhatsApp and manual confirmation.",
  },
  {
    q: "Can I update products myself?",
    a: "Yes. Every package includes Sanity CMS, so you can add and edit products anytime.",
  },
  {
    q: "How long does it take?",
    a: "Starter: 5 days. Growth: 7 days. Pro: 21 days.",
  },
];

export default function OsFaq() {
  const ref = useRef<HTMLElement>(null);
  const [entered, setEntered] = useState(false);
  // Open the first FAQ by default to show interactivity
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="os-faq-section">
      <div className="os-faq-container">
        
        <h2 className={`os-faq-title ${entered ? "is-visible" : ""}`}>
          Frequently asked questions
        </h2>

        <div className="os-faq-list">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            
            return (
              <div 
                key={faq.q} 
                className={`os-faq-item ${isOpen ? "is-open" : ""} ${entered ? "is-visible" : ""}`}
                style={{ "--stagger-index": i } as React.CSSProperties}
              >
                <h3>
                  <button
                    className="os-faq-trigger"
                    onClick={() => toggleFaq(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    <span className="os-faq-question">{faq.q}</span>
                    <span className="os-faq-icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19" className="os-icon-vertical" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>
                </h3>
                
                <div 
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className="os-faq-answer-wrapper"
                >
                  <div className="os-faq-answer-inner">
                    <p className="os-faq-answer-text">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .os-faq-section {
          background: #FAF9F6;
          padding-block: clamp(5rem, 10vw, 8rem);
          padding-inline: clamp(1.25rem, 6vw, 4rem);
          border-top: 1px solid #EAE8E1;
        }

        .os-faq-container {
          max-width: 720px;
          margin: 0 auto;
        }

        .os-faq-title {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3.5vw, 2.6rem);
          font-weight: 700;
          color: #1C1C1A;
          text-align: center;
          margin-bottom: 56px;
          letter-spacing: -0.02em;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .os-faq-title.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* --- Accordion List --- */
        .os-faq-list {
          display: flex;
          flex-direction: column;
          border-top: 1px solid #EAE8E1;
        }

        .os-faq-item {
          border-bottom: 1px solid #EAE8E1;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
          transition-delay: calc(var(--stagger-index) * 0.08s);
        }

        .os-faq-item.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* --- Trigger Button --- */
        .os-faq-item h3 {
          margin: 0;
        }

        .os-faq-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 28px 0;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          outline: none;
          transition: color 0.3s ease;
        }

        .os-faq-question {
          font-family: var(--font-display);
          font-size: 19px;
          font-weight: 600;
          color: #1C1C1A;
          transition: color 0.2s ease;
          padding-right: 24px; /* Keep text away from icon */
        }

        .os-faq-trigger:hover .os-faq-question,
        .os-faq-trigger:focus-visible .os-faq-question {
          color: #F25C43;
        }

        .os-faq-trigger:focus-visible {
          box-shadow: inset 0 0 0 2px #1A2848;
          border-radius: 4px;
        }

        /* --- Icon Animation --- */
        .os-faq-icon {
          flex-shrink: 0;
          color: #8A8783;
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), color 0.3s ease;
        }

        .os-faq-trigger:hover .os-faq-icon {
          color: #F25C43;
        }

        .os-icon-vertical {
          transform-origin: center;
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .os-faq-item.is-open .os-faq-icon {
          transform: rotate(90deg);
          color: #F25C43;
        }

        .os-faq-item.is-open .os-icon-vertical {
          transform: rotate(90deg);
        }

        /* --- Answer Animation (CSS Grid Hack) --- */
        .os-faq-answer-wrapper {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .os-faq-item.is-open .os-faq-answer-wrapper {
          grid-template-rows: 1fr;
        }

        .os-faq-answer-inner {
          overflow: hidden;
        }

        .os-faq-answer-text {
          font-family: var(--font-sans);
          font-size: 15.5px;
          font-weight: 400;
          color: #6B6B68;
          line-height: 1.7;
          margin: 0;
          padding-bottom: 32px;
          padding-right: 40px; /* Aligns visually with the question */
          opacity: 0;
          transform: translateY(-8px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .os-faq-item.is-open .os-faq-answer-text {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.1s; /* Slight delay to let the height expand first */
        }
      `}</style>
    </section>
  );
}