import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  // Required by @opennextjs/cloudflare when invoked with --skipNextBuild.
  // Produces .next/standalone/ that OpenNext bundles into the worker.
  output: "standalone",

  // Cut filesystem-derived leakage from production HTML/JS.
  poweredByHeader: false,
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "helixiptv.com" },
      { protocol: "https", hostname: "privadovpn.com" },
    ],
  },

  // Long-lived caching + minimal information leakage on static assets.
  async headers() {
    return [
      {
        source: "/:path*\\.(svg|png|jpg|jpeg|gif|webp|avif|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
        ],
      },
    ];
  },

  // Canonical hostname: https://www.ottv.org
  // - ottv.org       → www.ottv.org (handled here, 308 permanent)
  // - http://...     → https://...  (handled by edge/host: Vercel auto, Cloudflare "Always Use HTTPS")
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "ottv.org" }],
        destination: "https://www.ottv.org/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
