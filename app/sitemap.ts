import type { MetadataRoute } from "next";
import { SITE_URL, services } from "@/lib/site";

// Update this date whenever page content changes: search engines use lastModified to schedule recrawls.
const CONTENT_UPDATED = "2026-11-26";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: CONTENT_UPDATED, changeFrequency: "monthly", priority: 1 },
    ...services.map((s) => ({
      url: `${SITE_URL}${s.href}`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "monthly" as const,
      priority: s.slug === "ai-automation" ? 0.9 : 0.8,
    })),
    { url: `${SITE_URL}/whatsapp-chatbot`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/school-management-system`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${SITE_URL}/exchange-rates`,
      lastModified: new Date().toISOString().slice(0, 10),
      changeFrequency: "daily",
      priority: 0.7,
    },
    { url: `${SITE_URL}/privacy`, lastModified: CONTENT_UPDATED, changeFrequency: "yearly", priority: 0.3 },
  ];
}
