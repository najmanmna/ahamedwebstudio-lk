import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ahamedwebstudio.lk";
  const lastModified = new Date();

  return [
    {
      url: base,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/instagram-store`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
