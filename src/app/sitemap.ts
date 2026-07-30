import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.ahamedwebstudio.lk";
  const lastModified = new Date();

  return [
    {
      url: base,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/online-stores`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
