const REVIEWS = [
  {
    author: "Sajid Ifham",
    text: "I recently got my e-commerce website done by Ahamed Web Studio, and I'm truly impressed! Ahamed did an excellent job crafting the website exactly to our expectations. He's very responsive, detail-oriented, and fully committed to delivering on time without compromising quality. Highly recommended for anyone looking for a professional and reliable web developer!",
  },
  {
    author: "Ambrin Uwais",
    text: "Working with Ahmed was such a smooth and pleasant experience. He created three websites for my brands and really took the time to understand what I wanted. I loved how he did his own research and came up with something so visually attractive and well thought out. He was always helpful, patient, and easy to communicate with. Definitely someone I'd recommend.",
  },
  {
    author: "Hanisha Hayath",
    text: "I had a wonderful experience working with you on my website. You did an excellent job, and the whole process was smooth and convenient from start to finish. I truly appreciate your professionalism, creativity, and attention to detail. Highly recommended!",
  },
  {
    author: "Uthpala Pathirana",
    text: "When I reached Ahamed, he quickly attended to my work discussing my requirements and expectations — I was impressed with how service oriented he was. Within a very few days he delivered the work, my jaw was literally dropped! He had done the website up to international level. Worth every penny and you won't regret it!!!",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://www.ahamedwebstudio.lk/#business",
  name: "Ahamed Web Studio",
  url: "https://www.ahamedwebstudio.lk",
  image: "https://www.ahamedwebstudio.lk/og-image.jpg",
  logo: "https://www.ahamedwebstudio.lk/logo.png",
  description:
    "Fast, professional websites for Sri Lankan businesses — e-commerce stores, portfolios, and business sites, built in Colombo.",
  telephone: "+94717411188",
  email: "hello@ahamedwebstudio.com",
  priceRange: "LKR 30,000–LKR 120,000",
  founder: {
    "@type": "Person",
    name: "Ahamed Najman",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressCountry: "LK",
  },
  areaServed: {
    "@type": "Country",
    name: "Sri Lanka",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: REVIEWS.length,
  },
  review: REVIEWS.map(r => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.author },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    reviewBody: r.text,
  })),
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
