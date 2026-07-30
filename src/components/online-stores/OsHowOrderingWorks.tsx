"use client";

import { useEffect, useRef, useState } from "react";

// Same navy/coral/gold system as the tier data (data.ts) and the main Packages section.
const FLOWS = [
  { name: "Starter", color: "#1A2848", steps: ["Browse", "WhatsApp", "Order confirmed"] },
  { name: "Growth", color: "#F25C43", steps: ["Browse", "Cart", "Submit order request", "Business receives email", "Customer confirmation"] },
  { name: "Pro", color: "#C8A96E", steps: ["Browse", "Cart", "Secure payment", "Order confirmed"] },
];

export default function OsHowOrderingWorks() {
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
    <section ref={ref} className="os-flows-section">
      <div className="os-flows-container">
        <h2 className={`os-flows-title ${entered ? "is-visible" : ""}`}>
          How ordering works
        </h2>

        <div className="os-flows-grid">
          {FLOWS.map((flow, colIndex) => (
            <div 
              key={flow.name} 
              className={`os-flow-column ${entered ? "is-visible" : ""}`}
              style={{ "--col-index": colIndex } as React.CSSProperties}
            >
              <h3 
                className="os-flow-name" 
                style={{ color: flow.color }}
              >
                {flow.name}
              </h3>

              <ol className="os-flow-timeline" aria-label={`${flow.name} ordering process`}>
                {flow.steps.map((step, stepIndex) => (
                  <li 
                    key={step} 
                    className="os-flow-step"
                    style={{ "--step-index": stepIndex } as React.CSSProperties}
                  >
                    {/* The Circle */}
                    <div 
                      className="os-step-node"
                      style={{ 
                        borderColor: flow.color, 
                        color: flow.color 
                      }}
                      aria-hidden="true"
                    >
                      {stepIndex + 1}
                    </div>
                    
                    {/* The Connecting Line (hidden on the last item via CSS) */}
                    <div className="os-step-line" aria-hidden="true" />
                    
                    {/* The Text */}
                    <p className="os-step-text">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .os-flows-section {
          background: #FFFFFF;
          padding-block: clamp(5rem, 10vw, 7rem);
          padding-inline: clamp(1.25rem, 6vw, 4rem);
          border-top: 1px solid #EAE8E1;
        }

        .os-flows-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .os-flows-title {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3.5vw, 2.4rem);
          font-weight: 700;
          color: #1C1C1A;
          text-align: center;
          margin-bottom: 64px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
          letter-spacing: -0.02em;
        }

        .os-flows-title.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* --- Grid Layout --- */
        .os-flows-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .os-flow-column {
          padding: 32px;
          border-radius: 16px;
          background: #FAFAFA;
          border: 1px solid #F0EEE9;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          opacity: 0;
          /* Base stagger for the column frame */
          animation: ${entered ? "fadeColumnIn 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards" : "none"};
          animation-delay: calc(var(--col-index) * 0.15s);
        }

        .os-flow-column:hover {
          background: #FFFFFF;
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.03);
          transform: translateY(-4px);
        }

        .os-flow-name {
          font-family: var(--font-mono);
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 600;
          margin-bottom: 32px;
          padding-bottom: 16px;
          border-bottom: 1px solid #EAE8E1;
        }

        /* --- Timeline (Ordered List) --- */
        .os-flow-timeline {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .os-flow-step {
          position: relative;
          padding-left: 44px;
          padding-bottom: 32px;
          opacity: 0;
          /* Stagger the inner steps cascading down */
          animation: ${entered ? "fadeStepIn 0.5s ease forwards" : "none"};
          animation-delay: calc((var(--col-index) * 0.15s) + (var(--step-index) * 0.12s) + 0.3s);
        }

        /* Remove bottom padding from the last item so the line doesn't overhang */
        .os-flow-step:last-child {
          padding-bottom: 0;
        }

        /* The circle with the number */
        .os-step-node {
          position: absolute;
          left: 0;
          top: -2px; /* Slight optical adjustment to align with text */
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border-width: 1.5px;
          border-style: solid;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          background: #FAFAFA;
          z-index: 2;
          transition: background 0.3s ease;
        }

        .os-flow-column:hover .os-step-node {
          background: #FFFFFF;
        }

        /* The vertical connecting line */
        .os-step-line {
          position: absolute;
          left: 12.5px; /* Center of the 26px circle (26/2 - line width/2) */
          top: 24px;
          bottom: 0;
          width: 1px;
          background: #EAE8E1;
          z-index: 1;
        }

        /* Hide the line on the very last step */
        .os-flow-step:last-child .os-step-line {
          display: none;
        }

        .os-step-text {
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 400;
          color: #3A3A37;
          line-height: 1.5;
          margin: 0;
        }

        /* --- Animations --- */
        @keyframes fadeColumnIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeStepIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* --- Responsive --- */
        @media (max-width: 900px) {
          .os-flows-grid { 
            grid-template-columns: 1fr; 
            gap: 24px; 
            max-width: 480px;
            margin: 0 auto;
          }
          .os-flow-column {
            padding: 24px;
          }
          .os-flow-step {
            padding-bottom: 28px;
          }
        }
      `}</style>
    </section>
  );
}