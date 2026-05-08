// Generated/extended via `wrangler types` — re-run `npm run cf-typegen` after editing wrangler.jsonc.
// This file makes `getCloudflareContext().env` strongly typed.

interface CloudflareEnv {
  ASSETS: Fetcher;
  WORKER_SELF_REFERENCE: Service;
  NEXT_INC_CACHE_R2_BUCKET: R2Bucket;
  IMAGES: ImagesBinding;
}
