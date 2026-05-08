// Simple bearer-token gate for paid-feature API routes.
// Accepts the key via either:
//   - Authorization: Bearer <key>
//   - ?key=<key>
// Returns null on success, or a Response (401/500) on failure.

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

export function requireApiKey(req: Request, expected: string | undefined): Response | null {
  if (!expected) {
    // Misconfiguration: route is reachable without a key set. Fail closed.
    return new Response("Server misconfigured (WORKER_API_KEY unset)", {
      status: 500,
    });
  }

  const auth = req.headers.get("authorization") ?? "";
  const fromHeader = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  const fromQuery = new URL(req.url).searchParams.get("key") ?? "";
  const presented = fromHeader || fromQuery;

  if (!presented || !timingSafeEqual(presented, expected)) {
    return new Response("Unauthorized", { status: 401 });
  }

  return null;
}
