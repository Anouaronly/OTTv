import puppeteer from "@cloudflare/puppeteer";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export const dynamic = "force-dynamic";

// Browser Rendering is a paid Workers feature billed per browser-second.
// Guard against abuse: HTTPS-only, no private/loopback hosts, optional
// API key. Add an allowlist of hostnames if this is for ottv.org-only
// SEO snapshots rather than a public utility.
const PRIVATE_HOST_RX = /^(localhost|127\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[0-1])\.)/i;

function bad(msg: string, status = 400) {
  return new Response(msg, { status });
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const target = searchParams.get("url");
  const fullPage = searchParams.get("fullPage") === "1";
  const width = parseInt(searchParams.get("w") ?? "1200", 10);
  const height = parseInt(searchParams.get("h") ?? "630", 10);

  if (!target) return bad("Missing ?url=https://example.com");

  let parsed: URL;
  try {
    parsed = new URL(target);
  } catch {
    return bad("Invalid URL");
  }
  if (parsed.protocol !== "https:") return bad("HTTPS only");
  if (PRIVATE_HOST_RX.test(parsed.hostname)) return bad("Private hosts blocked");

  const { env } = await getCloudflareContext({ async: true });
  const browser = await puppeteer.launch(env.MYBROWSER);

  try {
    const page = await browser.newPage();
    await page.setViewport({ width, height });
    await page.goto(target, { waitUntil: "networkidle0", timeout: 30000 });
    const img = await page.screenshot({ type: "png", fullPage });
    return new Response(img as ArrayBuffer, {
      headers: {
        "content-type": "image/png",
        "cache-control": "public, max-age=300",
      },
    });
  } finally {
    await browser.close();
  }
}
