import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Site is fully prerendered (SSG) — no ISR / no revalidate / no `fetch` caching.
// Static pages are served by the ASSETS binding directly, so the R2 incremental
// cache adds latency + storage cost for zero hit rate. Re-introduce
// `r2IncrementalCache` (and the corresponding R2 bucket binding in
// wrangler.jsonc) when adding ISR or dynamic-with-cache routes.
export default defineCloudflareConfig({});
