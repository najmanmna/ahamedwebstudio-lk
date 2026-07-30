import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OsHero from "@/components/online-stores/OsHero";
import OsPricing from "@/components/online-stores/OsPricing";
import OsComparison from "@/components/online-stores/OsComparison";
import OsHowOrderingWorks from "@/components/online-stores/OsHowOrderingWorks";
import OsRecentWork from "@/components/online-stores/OsRecentWork";
import OsWhyChooseUs from "@/components/online-stores/OsWhyChooseUs";
import OsFaq from "@/components/online-stores/OsFaq";
import OsFinalCta from "@/components/online-stores/OsFinalCta";

export const metadata: Metadata = {
  title: "Online Store Packages | Ahamed Web Studio",
  description:
    "Custom online store packages for Sri Lankan businesses, from LKR 29,900. WhatsApp ordering, shopping carts, or full payment gateway checkout — pick the stage that fits.",
  alternates: {
    canonical: "https://ahamedwebstudio.lk/online-stores",
  },
  openGraph: {
    type: "website",
    url: "https://ahamedwebstudio.lk/online-stores",
    title: "Start Selling Online from LKR 29,900",
    description:
      "Custom online store packages for Sri Lankan businesses. Fully custom design, Sanity CMS, and a delivery timeline built for your stage.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ahamed Web Studio: Professional Websites for Sri Lankan Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Start Selling Online from LKR 29,900",
    description:
      "Custom online store packages for Sri Lankan businesses. Fully custom design, Sanity CMS, and a delivery timeline built for your stage.",
    images: ["/og-image.jpg"],
  },
};

export default function OnlineStoresPage() {
  return (
    <div>
      <Navbar />
      <OsHero />
      <OsPricing />
      <OsComparison />
      <OsHowOrderingWorks />
      <OsRecentWork />
      <OsWhyChooseUs />
      <OsFaq />
      <OsFinalCta />
      <Footer />
    </div>
  );
}
