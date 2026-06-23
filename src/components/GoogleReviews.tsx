"use client";

import { useEffect, useRef, useState } from "react";

const GOOGLE_REVIEWS_LINK = "https://www.google.com/search?q=Ahamed+Web+Studio+Reviews";

const REVIEWS = [
  {
    name: "Sajid Ifham",
    role: "Founder, ElvynLK",
    text: "I recently got my e-commerce website done by Ahamed Web Studio, and I’m truly impressed! Ahamed did an excellent job crafting the website exactly to our expectations. He’s very responsive, detail-oriented, and fully committed to delivering on time without compromising quality. Highly recommended for anyone looking for a professional and reliable web developer!",
    href: "https://share.google/EY5naJ5pHr2WvKpVj",
  },
  {
    name: "Ambrin Uwais",
    role: "Founder, Ambrins Fabrics & Elda",
    text: "Working with Ahmed was such a smooth and pleasant experience. He created three websites for my brands and really took the time to understand what I wanted. I loved how he did his own research and came up with something so visually attractive and well thought out. He was always helpful, patient, and easy to communicate with. Definitely someone I’d recommend.",
    href: "https://share.google/O4xhga8JViIzru6C6",
  },
  {
    name: "Hanisha Hayath",
    role: "Founder, Noorul Hudha Institute",
    text: "I had a wonderful experience working with you on my website. You did an excellent job, and the whole process was smooth and convenient from start to finish. I truly appreciate your professionalism, creativity, and attention to detail. Highly recommended!",
    href: "https://share.google/Mhahj9wAgm1BVuSUS",
  },
  {
    name: "Uthpala Pathirana",
    role: "Founder, Hedone Skincare",
    text: "When I reached Ahamed, he quickly attended to my work discussing my requirements and expectations — I was impressed with how service oriented he was. Within a very few days he delivered the work, my jaw was literally dropped! He had done the website up to international level. Worth every penny and you won’t regret it!!!",
    href: "https://share.google/DFX35MlVTZiboSNFu",
  },
];

const GoogleG = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 18 18">
    <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9A8.7 8.7 0 0 0 17.64 9.2z"/>
    <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.55-1.84.87-3.06.87-2.36 0-4.36-1.6-5.08-3.75H.9v2.33A9 9 0 0 0 9 18z"/>
    <path fill="#FBBC05" d="M3.92 10.68A5.4 5.4 0 0 1 3.64 9c0-.58.1-1.15.28-1.68V4.99H.9A9 9 0 0 0 0 9c0 1.45.35 2.83.9 4.01l3.02-2.33z"/>
    <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A8.97 8.97 0 0 0 9 0 9 9 0 0 0 .9 4.99l3.02 2.33C4.64 5.18 6.64 3.58 9 3.58z"/>
  </svg>
);

const Star = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#F5A623">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

function ReviewCard({ review, index, entered }: { review: typeof REVIEWS[number]; index: number; entered: boolean }) {
  return (
    <a
      href={review.href}
      target="_blank"
      rel="noopener noreferrer"
      className="g-review-card"
      style={{
        display: "block",
        background: "#fff",
        border: "1px solid #E5E3DD",
        borderRadius: 12,
        padding: "24px 24px 22px",
        textDecoration: "none",
        opacity: entered ? 1 : 0,
        transform: entered ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s, border-color 0.25s, box-shadow 0.25s`,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "#1A284833";
        e.currentTarget.style.boxShadow = "0 12px 32px rgba(26,40,72,0.08)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "#E5E3DD";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Top row — stars + Google badge */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <div style={{ display: "flex", gap: 2 }}>
          {Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}
        </div>
        <GoogleG size={15} />
      </div>

      {/* Review text */}
      <p style={{
        fontFamily: "var(--font-sans)", fontSize: 14.5, fontWeight: 400,
        color: "#3A3A37", lineHeight: 1.7,
        marginBottom: 18,
        display: "-webkit-box",
        WebkitLineClamp: 5,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }}>
        “{review.text}”
      </p>

      {/* Reviewer */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 34, height: 34, borderRadius: "50%",
          background: "#1A2848",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "#fff" }}>
            {review.name[0]}
          </span>
        </div>
        <div style={{ minWidth: 0 }}>
          <p style={{
            fontFamily: "var(--font-sans)", fontSize: 13.5, fontWeight: 600,
            color: "#1C1C1A", lineHeight: 1.3,
          }}>{review.name}</p>
          <p style={{
            fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.04em",
            color: "#6B6B68",
          }}>{review.role}</p>
        </div>
      </div>
    </a>
  );
}

export default function GoogleReviews() {
  const ref = useRef<HTMLElement>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setEntered(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: "var(--color-cream)",
        paddingBlock: "clamp(5rem,10vw,8rem)",
        paddingInline: "clamp(1.25rem,6vw,4rem)",
        borderTop: "1px solid #E5E3DD",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          textAlign: "center", marginBottom: "clamp(2.5rem,5vw,3.5rem)",
          opacity: entered ? 1 : 0,
          transform: entered ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <div className="section-label" style={{ justifyContent: "center", marginBottom: 16 }}>
            <span>Client Reviews</span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem,4vw,3rem)",
            fontWeight: 700, color: "#1C1C1A", lineHeight: 1.15,
            marginBottom: 20,
          }}>
            Don&apos;t just take<br />
            <span style={{ color: "#1A2848" }}>our word for it.</span>
          </h2>

          {/* Aggregate rating badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "9px 18px",
            background: "#fff",
            border: "1px solid #E5E3DD",
            borderRadius: 999,
          }}>
            <GoogleG size={17} />
            <span style={{
              fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
              color: "#1C1C1A",
            }}>5.0</span>
            <div style={{ display: "flex", gap: 1 }}>
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={12} />)}
            </div>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em",
              color: "#6B6B68",
            }}>on Google</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
          marginBottom: 36,
        }} className="g-reviews-grid">
          {REVIEWS.map((r, i) => (
            <ReviewCard key={r.name} review={r} index={i} entered={entered} />
          ))}
        </div>

        {/* CTA */}
        <div style={{
          textAlign: "center",
          opacity: entered ? 1 : 0,
          transition: "opacity 0.6s ease 0.5s",
        }}>
          <a
            href={GOOGLE_REVIEWS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.1em",
              color: "#1A2848", textDecoration: "none",
              textTransform: "uppercase", fontWeight: 500,
              borderBottom: "1px solid #1A284844",
              paddingBottom: 3,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.6"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            See our reviews on Google
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .g-reviews-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .g-reviews-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
