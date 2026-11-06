import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

// ── FONTS ────────────────────────────────────────────────────────────────────
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

// ── METADATA ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "Ahamed Web Studio | Professional Websites for Sri Lankan Businesses",
    template: "%s | Ahamed Web Studio",
  },
  description:
    "We build fast, modern, professional websites for Sri Lankan businesses: e-commerce stores, portfolios, and business sites. Based in Colombo. Talk to us on WhatsApp.",
  keywords: [
    "web design sri lanka",
    "website design colombo",
    "e-commerce sri lanka",
    "web developer sri lanka",
    "online store sri lanka",
    "website colombo",
    "ahamed web studio",
  ],
  authors: [{ name: "Ahamed Najman", url: "https://www.ahamedwebstudio.lk" }],
  creator: "Ahamed Web Studio",
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "48x48" },
      { url: "/icon.png?v=2", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon.png?v=2", sizes: "180x180" }],
  },
  metadataBase: new URL("https://www.ahamedwebstudio.lk"),
  alternates: {
    canonical: "https://www.ahamedwebstudio.lk",
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: "https://www.ahamedwebstudio.lk",
    siteName: "Ahamed Web Studio",
    title: "Ahamed Web Studio | Professional Websites for Sri Lankan Businesses",
    description:
      "Finally. A website you'll actually be proud of. International design quality at Sri Lankan prices. Talk to us on WhatsApp.",
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
    title: "Ahamed Web Studio | Professional Websites for Sri Lankan Businesses",
    description:
      "Finally. A website you'll actually be proud of. International design quality at Sri Lankan prices.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF9F6",
};

// ── LAYOUT ───────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}