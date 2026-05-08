import type { MetadataRoute } from "next";

const BASE = "https://www.ottv.org";

// Static per-route last-modified dates. Update when a page changes.
// Avoids the "all URLs share the request timestamp" anti-pattern, which
// search engines discount as unreliable.
const lastmod: Record<string, string> = {
  "/": "2026-05-06",
  "/iptv-subscription": "2026-05-06",
  "/iptv-free-trial": "2026-05-06",
  "/faq": "2026-05-04",
  "/about": "2026-05-02",
  "/contact": "2026-04-28",
  "/refund-policy": "2026-04-15",
  "/terms": "2026-04-15",
  "/privacy": "2026-04-15",
  "/disclaimer": "2026-04-15",
};

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.entries(lastmod).map(([path, date]) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(date),
  }));
}
