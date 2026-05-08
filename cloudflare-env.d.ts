// Generated/extended via `wrangler types` — re-run `npm run cf-typegen` after editing wrangler.jsonc.
// This file makes `getCloudflareContext().env` strongly typed.

interface CloudflareEnv {
  ASSETS: Fetcher;
  IMAGES: ImagesBinding;
  MYBROWSER: Fetcher;
  // Set via: `npx wrangler secret put WORKER_API_KEY`
  WORKER_API_KEY?: string;
}
