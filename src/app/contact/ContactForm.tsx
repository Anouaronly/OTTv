"use client";

import { useState } from "react";
import Link from "next/link";

const topicLabels: Record<string, string> = {
  general: "General question",
  presale: "Pre-purchase question",
  refund: "7-day refund request",
  channel: "Channel / stream issue",
  billing: "Billing / receipt",
  press: "Press / rights enquiry",
};

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "general",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.email || !form.message) return;

    const subject = `[OTTv ${topicLabels[form.topic] ?? form.topic}] ${
      form.name || form.email
    }`;
    const body = [
      `Name: ${form.name || "(not provided)"}`,
      `Email: ${form.email}`,
      `Topic: ${topicLabels[form.topic] ?? form.topic}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    const mailto = `mailto:Help@ottv.org?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 8000);
  }

  return (
    <form
      className="space-y-5"
      onSubmit={handleSubmit}
      aria-label="Contact OTTv"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs uppercase tracking-wider text-[#929aa5] mb-2 font-semibold"
          >
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-[#1e2329] border border-[#2b3139] rounded-md px-4 py-3 text-sm text-white placeholder:text-[#929aa5] focus:outline-none focus:border-[#fcd535]"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs uppercase tracking-wider text-[#929aa5] mb-2 font-semibold"
          >
            Email <span className="text-[#fcd535]">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-[#1e2329] border border-[#2b3139] rounded-md px-4 py-3 text-sm text-white placeholder:text-[#929aa5] focus:outline-none focus:border-[#fcd535]"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-topic"
          className="block text-xs uppercase tracking-wider text-[#929aa5] mb-2 font-semibold"
        >
          Topic
        </label>
        <select
          id="contact-topic"
          value={form.topic}
          onChange={(e) => setForm({ ...form, topic: e.target.value })}
          className="w-full bg-[#1e2329] border border-[#2b3139] rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-[#fcd535]"
        >
          <option value="general">General question</option>
          <option value="presale">Pre-purchase question</option>
          <option value="refund">7-day refund request</option>
          <option value="channel">Channel / stream issue</option>
          <option value="billing">Billing / receipt</option>
          <option value="press">Press / rights enquiry</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs uppercase tracking-wider text-[#929aa5] mb-2 font-semibold"
        >
          Message <span className="text-[#fcd535]">*</span>
        </label>
        <textarea
          id="contact-message"
          required
          rows={6}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full bg-[#1e2329] border border-[#2b3139] rounded-md px-4 py-3 text-sm text-white placeholder:text-[#929aa5] focus:outline-none focus:border-[#fcd535] resize-y"
          placeholder="Tell us what you need — the more detail, the faster we can help."
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
        <button type="submit" className="cta-primary">
          Send message
        </button>
        <p className="text-xs text-[#929aa5]">
          Opens your mail app with the message pre-filled. By sending, you
          agree to our{" "}
          <Link href="/privacy" className="text-[#fcd535] hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>

      {status === "sent" && (
        <p
          className="text-sm text-[#0ecb81] flex items-center gap-2"
          role="status"
        >
          <span aria-hidden>✓</span> Your mail app should have opened — hit
          send to deliver to Help@ottv.org.
        </p>
      )}
    </form>
  );
}
