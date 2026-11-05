import type { MetadataRoute } from "next";

// Update these dates whenever the page content changes — search engines use
// lastModified to schedule recrawls.
const lastUpdated = {
  home: "2026-07-23",
  start: "2026-07-23",
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.driftmark.co.tz",
      lastModified: lastUpdated.home,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.driftmark.co.tz/start",
      lastModified: lastUpdated.start,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.driftmark.co.tz/exchange-rates",
      lastModified: new Date().toISOString().slice(0, 10),
      changeFrequency: "daily",
      priority: 0.7,
    },
  ];
}
