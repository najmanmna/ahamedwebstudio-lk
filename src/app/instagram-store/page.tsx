import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IgHero from "@/components/instagram-store/IgHero";
import IgProblem from "@/components/instagram-store/IgProblem";
import IgHowItWorks from "@/components/instagram-store/IgHowItWorks";
import IgPricing from "@/components/instagram-store/IgPricing";
import IgScale from "@/components/instagram-store/IgScale";
import IgFinalCta from "@/components/instagram-store/IgFinalCta";

export const metadata: Metadata = {
  title: "Instagram Store Offer | Ahamed Web Studio",
  description:
    "Turn your Instagram page into a fast-loading storefront with WhatsApp checkout. Custom Next.js store, zero monthly hosting, delivered in 7 days. LKR 59,900.",
  alternates: {
    canonical: "https://ahamedwebstudio.lk/instagram-store",
  },
  openGraph: {
    type: "website",
    url: "https://ahamedwebstudio.lk/instagram-store",
    title: "Stop Losing Sales in Your Instagram DMs",
    description:
      "Turn your Instagram page into a fast-loading storefront with WhatsApp checkout. Delivered in 7 days for LKR 59,900.",
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
    title: "Stop Losing Sales in Your Instagram DMs",
    description:
      "Turn your Instagram page into a fast-loading storefront with WhatsApp checkout. Delivered in 7 days for LKR 59,900.",
    images: ["/og-image.jpg"],
  },
};

export default function InstagramStorePage() {
  return (
    <div>
      <Navbar />
      <IgHero />
      <IgProblem />
      <IgHowItWorks />
      <IgPricing />
      <IgScale />
      <IgFinalCta />
      <Footer />
    </div>
  );
}
