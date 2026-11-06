"use client";

import { useState } from "react";
import s from "./prayerstop.module.css";
import { FAQS } from "./data";

export default function PsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={s.faqList}>
      {FAQS.map((f, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={f.q} className={`${s.faqItem} ${isOpen ? s.faqOpen : ""}`}>
            <h3 className={s.faqQ}>
              <button
                type="button"
                id={`ps-faq-q-${i}`}
                aria-expanded={isOpen}
                aria-controls={`ps-faq-a-${i}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span>{f.q}</span>
                <svg className={s.faqIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M6 9.5l6 6 6-6" />
                </svg>
              </button>
            </h3>
            <div id={`ps-faq-a-${i}`} role="region" aria-labelledby={`ps-faq-q-${i}`} className={s.faqA}>
              <div>
                <p>{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
