"use client";

import { useEffect, useRef, useState } from "react";

const ICONS: Record<string, React.ReactNode> = {
  design: <path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />,
  fast: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
  manage: <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />,
  ux: <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8L6 21l1.6-7-5.4-4.7 7.1-.6L12 2z" />,
  mobile: <path d="M7 2h10a1 1 0 011 1v18a1 1 0 01-1 1H7a1 1 0 01-1-1V3a1 1 0 011-1zM11 18h2" />,
  code: <path d="M9 18l-6-6 6-6M15 6l6 6-6 6" />,
  cms: <path d="M4 5c0-1.1 3.6-2 8-2s8 .9 8 2-3.6 2-8 2-8-.9-8-2zM4 5v14c0 1.1 3.6 2 8 2s8-.9 8-2V5M4 12c0 1.1 3.6 2 8 2s8-.9 8-2" />,
  fees: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />,
  support: <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0zM12 13a3 3 0 100-6 3 3 0 000 6z" />,
};

function Icon({ name }: { name: string }) {
  return (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.7" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

const ITEMS = [
  { icon: "design", title: "Fully Custom Design" },
  { icon: "fast", title: "Lightning Fast" },
  { icon: "manage", title: "Easy Product Management" },
  { icon: "ux", title: "Premium User Experience" },
  { icon: "mobile", title: "Mobile First" },
  { icon: "code", title: "Built With Next.js" },
  { icon: "cms", title: "Sanity CMS" },
  { icon: "fees", title: "No Monthly Maintenance Fees" },
  { icon: "support", title: "Sri Lankan Support" },
];

export default function OsWhyChooseUs() {
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
    <section ref={ref} className="os-why-section">
      <div className="os-why-container">
        <h2 className={`os-why-title ${entered ? "is-visible" : ""}`}>
          Why businesses choose us
        </h2>

        <div className="os-why-grid">
          {ITEMS.map((item, i) => (
            <div 
              key={item.title} 
              className={`os-why-item ${entered ? "is-visible" : ""}`}
              style={{ "--stagger-index": i } as React.CSSProperties}
            >
              <div className="os-why-icon-box">
                <Icon name={item.icon} />
              </div>
              <p className="os-why-item-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .os-why-section {
          background: #FFFFFF;
          padding-block: clamp(5rem, 10vw, 8rem);
          padding-inline: clamp(1.25rem, 6vw, 4rem);
          border-top: 1px solid #EAE8E1;
        }

        .os-why-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .os-why-title {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3.5vw, 2.6rem);
          font-weight: 700;
          color: #1C1C1A;
          text-align: center;
          margin-bottom: 64px;
          letter-spacing: -0.02em;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .os-why-title.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* --- Grid --- */
        .os-why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px 32px;
        }

        /* --- Grid Items --- */
        .os-why-item {
          display: flex;
          align-items: center;
          gap: 16px;
          opacity: 0;
          transform: translateY(16px);
          /* Uses the custom property for staggered animation */
          transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
          transition-delay: calc((var(--stagger-index) * 0.08s) + 0.1s);
        }

        .os-why-item.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .os-why-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #FAFAFA;
          border: 1px solid #EAE8E1;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #1A2848;
          transition: all 0.3s ease;
        }

        .os-why-item-title {
          font-family: var(--font-sans);
          font-size: 15.5px;
          font-weight: 500;
          color: #1C1C1A;
          margin: 0;
          transition: color 0.3s ease;
        }

        /* --- Hover Interactions --- */
        .os-why-item:hover .os-why-icon-box {
          background: #FFFFFF;
          border-color: #1A2848;
          box-shadow: 0 4px 12px rgba(26, 40, 72, 0.08);
          transform: scale(1.05);
        }

        .os-why-item:hover .os-why-item-title {
          color: #F25C43; /* Subtle brand color hint on hover */
        }

        /* --- Responsive --- */
        @media (max-width: 1080px) {
          .os-why-grid { 
            grid-template-columns: repeat(2, 1fr); 
            gap: 32px;
          }
        }
        
        @media (max-width: 640px) {
          .os-why-grid { 
            grid-template-columns: 1fr; 
            max-width: 320px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}