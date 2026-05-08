"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("ok");
    setEmail("");
    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <>
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit}
        aria-label="Newsletter signup"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white border border-[#eaecef] rounded-md px-3 py-2 text-sm text-[#181a20] placeholder:text-[#929aa5] focus:outline-none focus:border-[#fcd535]"
        />
        <button type="submit" className="cta-primary">
          Subscribe
        </button>
      </form>
      {status === "ok" && (
        <p className="mt-2 text-xs text-[#0ecb81]" role="status">
          Thanks — we&apos;ll be in touch.
        </p>
      )}
    </>
  );
}
