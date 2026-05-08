"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";

export default function SignInForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error: err } = await signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (err) {
      setError(err.message ?? "Invalid email or password.");
      setLoading(false);
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <label
          htmlFor="email"
          className="block text-xs uppercase tracking-wider text-[#929aa5] font-semibold mb-2"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
          className="w-full bg-[#0b0e11] border border-[#2b3139] focus:border-[#fcd535] focus:outline-none rounded-md px-4 py-3 text-white placeholder:text-[#707a8a] transition-colors"
        />
      </div>

      <div>
        <div className="flex items-baseline justify-between mb-2">
          <label
            htmlFor="password"
            className="block text-xs uppercase tracking-wider text-[#929aa5] font-semibold"
          >
            Password
          </label>
          <a
            href="/contact"
            className="text-xs text-[#929aa5] hover:text-[#fcd535]"
          >
            Forgot?
          </a>
        </div>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
          className="w-full bg-[#0b0e11] border border-[#2b3139] focus:border-[#fcd535] focus:outline-none rounded-md px-4 py-3 text-white placeholder:text-[#707a8a] transition-colors"
        />
      </div>

      {error && (
        <p
          role="alert"
          className="text-sm text-[#f6465d] bg-[#f6465d]/10 border border-[#f6465d]/30 rounded-md px-3 py-2"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="cta-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
