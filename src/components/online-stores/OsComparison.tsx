"use client";

import { useEffect, useRef, useState } from "react";
import { TIERS } from "./data";

const Check = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1A2848" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Dash = () => (
  <span className="os-comp-dash" aria-hidden="true">—</span>
);

const ROWS: { label: string; values: (tier: (typeof TIERS)[number]) => React.ReactNode }[] = [
  { label: "Ordering", values: t => t.ordering },
  { label: "Payments", values: t => (t.payments === "Not included" ? <Dash /> : t.payments) },
  { label: "Cart", values: t => (t.cart ? <Check /> : <Dash />) },
  { label: "CMS", values: () => <Check /> },
  { label: "Custom design", values: () => <Check /> },
  { label: "Mobile responsive", values: () => <Check /> },
  { label: "SEO", values: t => t.seo },
  { label: "Delivery", values: t => t.delivery },
];

export default function OsComparison() {
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
    <section ref={ref} className="os-comp-section">
      <div className={`os-comp-container ${entered ? "is-visible" : ""}`}>
        <h2 className="os-comp-title">Compare packages</h2>

        <div className="os-comp-table-wrap">
          <table className="os-comp-table">
            <thead>
              <tr>
                <th scope="col" className="os-comp-th-empty">
                  <span className="sr-only">Features</span>
                </th>
                {TIERS.map(t => (
                  <th
                    key={t.id}
                    scope="col"
                    className={`os-comp-th-header ${t.highlight ? "is-highlighted" : ""}`}
                    style={{ color: t.color, borderBottomColor: t.highlight ? t.color : undefined }}
                  >
                    {t.name.replace(" Store", "")}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr 
                  key={row.label} 
                  className={`os-comp-tr ${entered ? "is-visible" : ""}`}
                  style={{ "--row-index": i } as React.CSSProperties}
                >
                  <th scope="row" className="os-comp-th-row">
                    {row.label}
                  </th>
                  {TIERS.map(t => (
                    <td 
                      key={t.id} 
                      className={`os-comp-td ${t.highlight ? "is-highlighted-col" : ""}`}
                    >
                      <span className="os-comp-val-wrap">
                        {row.values(t)}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .os-comp-section {
          background: #FAFAFA;
          padding-block: clamp(5rem, 10vw, 7rem);
          padding-inline: clamp(1.25rem, 6vw, 4rem);
          border-top: 1px solid #EAE8E1;
        }

        .os-comp-container {
          max-width: 1000px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .os-comp-container.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .os-comp-title {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3.5vw, 2.4rem);
          font-weight: 700;
          color: #1C1C1A;
          text-align: center;
          margin-bottom: 56px;
          letter-spacing: -0.02em;
        }

        /* --- Table Layout --- */
        .os-comp-table-wrap {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          padding-bottom: 16px; /* Space for scrollbar */
          
          /* Subtle fade on edges for scrolling indication on mobile */
          mask-image: linear-gradient(to right, transparent, black 2%, black 98%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 2%, black 98%, transparent);
        }

        .os-comp-table {
          width: 100%;
          min-width: 600px;
          border-collapse: collapse;
          text-align: left;
        }

        /* --- Headers --- */
        .os-comp-th-empty {
          padding: 16px 20px;
          width: 28%; /* Locks the feature label column width */
        }

        .os-comp-th-header {
          padding: 16px 20px;
          text-align: center;
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 700;
          border-bottom: 2px solid #EAE8E1;
        }

        .os-comp-th-header.is-highlighted {
          border-bottom-width: 2px;
          border-bottom-style: solid;
        }

        /* --- Rows & Cells --- */
        .os-comp-tr {
          border-bottom: 1px solid #EAE8E1;
          transition: background-color 0.2s ease;
          opacity: 0;
          transform: translateY(10px);
        }

        .os-comp-tr.is-visible {
          animation: fadeRowIn 0.5s ease forwards;
          animation-delay: calc(var(--row-index) * 0.05s + 0.3s);
        }

        .os-comp-tr:hover {
          background-color: #FFFFFF; /* High-end subtle highlight */
        }

        .os-comp-tr:last-child {
          border-bottom: none;
        }

        .os-comp-th-row {
          padding: 20px 20px 20px 8px;
          font-family: var(--font-sans);
          font-size: 15px;
          color: #1C1C1A;
          font-weight: 500;
        }

        .os-comp-td {
          padding: 20px;
          text-align: center;
          font-family: var(--font-sans);
          font-size: 14.5px;
          color: #4E4E4B;
        }

        /* Slight coral tint to the highlighted (Growth) column */
        .os-comp-td.is-highlighted-col {
          background-color: rgba(242, 92, 67, 0.04);
          color: #1C1C1A;
          font-weight: 500;
        }

        /* Prevent text wrapping on specific features for cleaner look */
        .os-comp-val-wrap {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          white-space: nowrap; 
        }

        .os-comp-dash {
          color: #D8D5CE;
        }

        /* Accessibility utility */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }

        @keyframes fadeRowIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}