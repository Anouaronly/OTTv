"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/auth-client";

export default function SignUpForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error: err } = await signUp.email({
      name,
      email,
      password,
      callbackURL: "/",
    });

    if (err) {
      setError(err.message ?? "Sign up failed. Please try again.");
      setLoading(false);
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <Field
        id="name"
        label="Full name"
        type="text"
        autoComplete="name"
        value={name}
        onChange={setName}
        required
      />
      <Field
        id="email"
        label="Email"
        type="email"
        autoComplete="email"
        value={email}
        onChange={setEmail}
        required
      />
      <Field
        id="password"
        label="Password"
        type="password"
        autoComplete="new-password"
        value={password}
        onChange={setPassword}
        required
        minLength={8}
        hint="At least 8 characters."
      />

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
        {loading ? "Creating account…" : "Create account"}
      </button>

      <p className="text-xs text-[#707a8a] text-center leading-relaxed">
        By creating an account you agree to our{" "}
        <a href="/terms" className="text-[#929aa5] hover:text-white underline">
          Terms
        </a>{" "}
        and{" "}
        <a href="/privacy" className="text-[#929aa5] hover:text-white underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  autoComplete?: string;
  required?: boolean;
  minLength?: number;
  hint?: string;
};

function Field({
  id,
  label,
  type,
  value,
  onChange,
  autoComplete,
  required,
  minLength,
  hint,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs uppercase tracking-wider text-[#929aa5] font-semibold mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        required={required}
        minLength={minLength}
        className="w-full bg-[#0b0e11] border border-[#2b3139] focus:border-[#fcd535] focus:outline-none rounded-md px-4 py-3 text-white placeholder:text-[#707a8a] transition-colors"
      />
      {hint && <p className="mt-1.5 text-xs text-[#707a8a]">{hint}</p>}
    </div>
  );
}
