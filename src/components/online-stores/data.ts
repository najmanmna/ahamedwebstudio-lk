export const WA_NUMBER = "94717411188";

export function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export type Tier = {
  id: "starter" | "growth" | "pro";
  name: string;
  price: string;
  priceNote?: string;
  tagline: string;
  features: string[];
  delivery: string;
  ordering: string;
  payments: string;
  cart: boolean;
  seo: string;
  highlight?: boolean;
  /** Brand color for this tier — same navy/gold/coral system as the main Packages section. */
  color: string;
};

export const TIERS: Tier[] = [
  {
    id: "starter",
    name: "Starter Store",
    price: "29,900",
    color: "#1A2848",
    tagline: "Perfect for businesses currently selling through Instagram or WhatsApp.",
    features: [
      "Browse products",
      "WhatsApp ordering",
      "Product management",
      "Sanity CMS",
      "Fully custom design",
      "Responsive",
      "Basic SEO",
    ],
    delivery: "5 days",
    ordering: "WhatsApp",
    payments: "Not included",
    cart: false,
    seo: "Basic",
  },
  {
    id: "growth",
    name: "Growth Store",
    price: "49,900",
    color: "#F25C43",
    tagline: "Perfect for businesses receiving multiple orders every day.",
    features: [
      "Everything in Starter",
      "Shopping cart",
      "Multiple products per order",
      "Customer details form",
      "Order request sent via email",
      "Manual confirmation workflow",
      "Sanity CMS",
    ],
    delivery: "7 days",
    ordering: "Cart + email request",
    payments: "Not included",
    cart: true,
    seo: "Included",
    highlight: true,
  },
  {
    id: "pro",
    name: "Pro Store",
    price: "95,000",
    priceNote: "Starting from",
    color: "#C8A96E",
    tagline: "Perfect for established businesses ready for full ecommerce.",
    features: [
      "Everything in Growth",
      "Secure online payments",
      "Payment gateway integration",
      "Automatic checkout",
      "Order confirmation",
      "Complete ecommerce workflow",
    ],
    delivery: "21 days",
    ordering: "Automatic checkout",
    payments: "Payment gateway",
    cart: true,
    seo: "Included",
  },
];
