import puppeteer from "@cloudflare/puppeteer";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { requireApiKey } from "@/lib/api-auth";

export const dynamic = "force-dynamic";

// Browser Rendering is a paid Workers feature billed per browser-second.
// Production: gate this behind authentication (e.g. an order-id signed
// by your order system) so it can't be hammered to inflate billing.
const PRIVATE_HOST_RX = /^(localhost|127\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[0-1])\.)/i;

function bad(msg: string, status = 400) {
  return new Response(msg, { status });
}

export async function GET(req: Request) {
  const { env } = await getCloudflareContext({ async: true });
  const unauthorized = requireApiKey(req, env.WORKER_API_KEY);
  if (unauthorized) return unauthorized;

  const { searchParams } = new URL(req.url);
  const target = searchParams.get("url");
  const format = (searchParams.get("format") ?? "A4") as
    | "A4" | "Letter" | "Legal" | "A3" | "A5";

  if (!target) return bad("Missing ?url=https://example.com");

  let parsed: URL;
  try {
    parsed = new URL(target);
  } catch {
    return bad("Invalid URL");
  }
  if (parsed.protocol !== "https:") return bad("HTTPS only");
  if (PRIVATE_HOST_RX.test(parsed.hostname)) return bad("Private hosts blocked");

  const browser = await puppeteer.launch(env.MYBROWSER);

  try {
    const page = await browser.newPage();
    await page.goto(target, { waitUntil: "networkidle0", timeout: 30000 });
    const pdf = await page.pdf({ format, printBackground: true });
    return new Response(pdf as ArrayBuffer, {
      headers: {
        "content-type": "application/pdf",
        "content-disposition": 'inline; filename="document.pdf"',
        "cache-control": "private, max-age=0, must-revalidate",
      },
    });
  } finally {
    await browser.close();
  }
}
