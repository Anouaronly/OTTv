import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Refund Policy | OTTv — 7-Day Money-Back Guarantee on Every IPTV Plan",
  description:
    "OTTv Refund Policy: every IPTV subscription is covered by a 7-day money-back guarantee. Read how to request a full refund, what is and isn't refundable, and how fast you'll be paid back.",
  alternates: { canonical: "/refund-policy" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.ottv.org/refund-policy",
    siteName: "OTTv",
    title: "OTTv Refund Policy — 7-Day Money-Back Guarantee",
    description:
      "Every OTTv IPTV plan is covered by a 7-day money-back guarantee. Read the full refund policy: eligibility, exclusions, how to request, processing times.",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "OTTv Refund Policy — 7-Day Money-Back Guarantee",
    description:
      "Every OTTv IPTV subscription is covered by a 7-day money-back guarantee. Full policy and request steps inside.",
  },
};

// JSON-LD: WebPage + MerchantReturnPolicy + BreadcrumbList.
// MerchantReturnPolicy lets Google show the refund window in shopping
// rich results.
const PAGE_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://www.ottv.org/refund-policy",
  name: "OTTv Refund Policy",
  description:
    "Every OTTv IPTV subscription is covered by a 7-day money-back guarantee. Email Help@ottv.org from the address on the order to claim a full refund inside the window.",
  isPartOf: {
    "@type": "WebSite",
    name: "OTTv",
    url: "https://www.ottv.org/",
  },
  publisher: {
    "@type": "Organization",
    name: "OTTv",
    url: "https://www.ottv.org/",
  },
  dateModified: "2026-05-02",
};

const RETURN_LD = {
  "@context": "https://schema.org",
  "@type": "MerchantReturnPolicy",
  name: "OTTv 7-Day Money-Back Guarantee",
  url: "https://www.ottv.org/refund-policy",
  returnPolicyCategory:
    "https://schema.org/MerchantReturnFiniteReturnWindow",
  merchantReturnDays: 7,
  returnFees: "https://schema.org/FreeReturn",
  refundType: "https://schema.org/FullRefund",
};

const BREADCRUMB_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.ottv.org/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Refund Policy",
      item: "https://www.ottv.org/refund-policy",
    },
  ],
};

const refundFaqs = [
  {
    q: "How do I get a refund on my IPTV subscription?",
    a: "Email Help@ottv.org from the address on your order with the words “7-day refund” in the subject line, or message support on WhatsApp. Refunds inside the 7-day window are full and processed to the original payment method, usually the same day for cards and PayPal.",
  },
  {
    q: "How long is the OTTv refund window?",
    a: "Seven (7) days from the moment your IPTV subscription is activated. The window applies to every paid plan — 1 month, 3 months, 6 months and 12 months — at the same length.",
  },
  {
    q: "Do I need a reason to claim the IPTV refund?",
    a: "No. The 7-day money-back guarantee is no-questions-asked. We may ask one or two diagnostic questions in case the issue is fixable on the spot, but a refund is never conditional on your answer.",
  },
  {
    q: "How fast does OTTv pay refunds?",
    a: "Visa, Mastercard, AMEX and PayPal refunds are issued the same business day in most cases. Crypto refunds are issued within 24 hours to a wallet address you provide. Allow 3–10 business days for the refund to appear on your card statement depending on your bank.",
  },
  {
    q: "Can I claim a refund after the 7-day window?",
    a: "After 7 days the subscription is non-refundable. If you simply don’t want to continue, just don’t renew — there is no auto-renewal so the subscription expires at the end of its term with no further charges.",
  },
];

const sections = [
  {
    id: "eligibility",
    h: "1. Who is eligible for a refund",
    body: [
      "Every paid OTTv IPTV plan — 1 month, 3 months, 6 months and 12 months — is covered by a 7-day money-back guarantee. The guarantee applies to first-time and returning subscribers, on any device, in any of the 50+ countries we sell to.",
      "Eligibility runs for 7 calendar days from the moment your subscription is activated, which is the moment OTTv emails the M3U link to the address used at checkout.",
    ],
  },
  {
    id: "what-is-refundable",
    h: "2. What is refundable",
    body: [
      "The full price you paid for the subscription term, refunded to the original payment method. There are no restocking fees, processing fees or partial-use deductions. A 12-month plan refunded on day 6 is refunded at 100%, identical to a 1-month plan refunded on day 6.",
      "Add-ons purchased at checkout (additional concurrent connections, premium adult catalogue, etc.) are refunded together with the base subscription — they are not separable.",
    ],
  },
  {
    id: "how-to-request",
    h: "3. How to request your refund",
    body: [
      "Pick whichever channel is convenient — both go to the same human team and both honour the 7-day clock from your activation timestamp, not from the moment we receive your message.",
      "Email: send a message to Help@ottv.org from the address on your order with the subject line “7-day refund”. Include your order ID if you have it (it is in your activation email).",
      "WhatsApp: message +44 7848 197761. Tell us the email used at checkout. Average response under 4 minutes during waking hours.",
    ],
  },
  {
    id: "processing-time",
    h: "4. Processing times",
    body: [
      "Visa, Mastercard, American Express and PayPal — refunds are typically issued the same business day. The funds appear on your statement within 3–10 business days depending on your card issuer; PayPal refunds are usually visible the same day.",
      "Cryptocurrency (BTC, ETH, USDT, USDC) — refunds are issued within 24 hours to a wallet address you provide. We refund in the same coin you paid with; market price movement between purchase and refund is not adjusted.",
    ],
  },
  {
    id: "exclusions",
    h: "5. What is not refundable",
    body: [
      "Requests received after the 7-day window has expired.",
      "Subscriptions that have been used in breach of acceptable use — for example, the M3U link was resold, redistributed, used in a commercial venue without a separate licence, or shared with users outside the household it was purchased for.",
      "Chargebacks initiated against OTTv before any contact with support: please reach out to Help@ottv.org first. We refund instantly. Chargebacks add 30+ days and processor fees and may result in suspension of any future subscription.",
    ],
  },
  {
    id: "renewals",
    h: "6. Renewals & cancellation",
    body: [
      "OTTv does not auto-renew. There is no recurring charge to cancel — your subscription simply expires at the end of the term you paid for. If you want to continue, you purchase a new term manually. This means you never need to “cancel” to avoid a charge.",
    ],
  },
  {
    id: "consumer-rights",
    h: "7. Statutory consumer rights",
    body: [
      "The 7-day money-back guarantee sits on top of any statutory rights you have under your local consumer-protection law and does not reduce them. Subscribers in the UK / EU may have additional rights under the Consumer Contracts Regulations / EU Consumer Rights Directive in respect of digital content; subscribers in California have rights under the CCPA. Email Help@ottv.org and we will work within the more generous of the two windows.",
    ],
  },
  {
    id: "changes",
    h: "8. Changes to this policy",
    body: [
      "OTTv may update this Refund Policy from time to time. The version that applies to your subscription is the version published on ottv.org/refund-policy at the moment your order was placed. Material changes will be highlighted with a new “Last updated” date.",
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(RETURN_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }}
      />
      <Header />
      <main className="flex-1">
        {/* Hero / declarative answer for AEO/AIO */}
        <section className="border-b border-[#2b3139]">
          <div className="max-w-3xl mx-auto px-5 lg:px-8 pt-16 md:pt-20 pb-14">
            <nav
              aria-label="Breadcrumb"
              className="text-xs text-[#929aa5] mb-6"
            >
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Refund Policy</span>
            </nav>

            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0ecb81]/15 border border-[#0ecb81]/30 text-[11px] font-bold tracking-wider uppercase text-[#0ecb81] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0ecb81]" />
              7-Day Money-Back Guarantee
            </span>
            <h1 className="text-4xl sm:text-5xl text-white">
              Don&rsquo;t love OTTv? <br className="hidden md:block" />
              <span className="text-[#fcd535]">Get every cent back</span> in 7 days.
            </h1>
            <p className="mt-6 text-base md:text-lg text-[#eaecef] leading-relaxed">
              <span className="text-white font-semibold">
                Every OTTv IPTV subscription is covered by a 7-day money-back
                guarantee.
              </span>{" "}
              No questions, no usage caps, no “handling fee”. Email{" "}
              <a
                href="mailto:Help@ottv.org"
                className="text-[#fcd535] hover:underline"
              >
                Help@ottv.org
              </a>{" "}
              inside the window and we refund the full amount to your
              original payment method — usually the same business day.
            </p>
            <p className="mt-4 text-sm text-[#929aa5]">
              Last updated: 2 May 2026
            </p>
          </div>
        </section>

        {/* Headline stats — AEO friendly */}
        <section className="border-b border-[#2b3139] bg-[#1e2329]">
          <div className="max-w-3xl mx-auto px-5 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#fcd535] font-num leading-none">
                  7 days
                </p>
                <p className="mt-2 text-xs uppercase tracking-wider text-[#929aa5] font-semibold">
                  Refund window
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#fcd535] font-num leading-none">
                  100%
                </p>
                <p className="mt-2 text-xs uppercase tracking-wider text-[#929aa5] font-semibold">
                  Of price returned
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#fcd535] font-num leading-none">
                  $0
                </p>
                <p className="mt-2 text-xs uppercase tracking-wider text-[#929aa5] font-semibold">
                  Processing fee
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#fcd535] font-num leading-none">
                  Same day
                </p>
                <p className="mt-2 text-xs uppercase tracking-wider text-[#929aa5] font-semibold">
                  Cards & PayPal
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The 3-step request flow */}
        <section className="border-b border-[#2b3139]">
          <div className="max-w-3xl mx-auto px-5 lg:px-8 py-16">
            <p className="eyebrow mb-3">How to claim</p>
            <h2 className="text-2xl md:text-3xl text-white mb-2">
              Three steps to a full IPTV refund.
            </h2>
            <p className="text-[#929aa5] mb-8">
              No forms, no support tickets, no “first level” gatekeepers.
            </p>

            <ol className="space-y-3">
              {[
                {
                  h: "Email Help@ottv.org or message WhatsApp",
                  b: "Send from the address used at checkout. Subject line: “7-day refund”. Include your order ID if you have it.",
                },
                {
                  h: "We confirm and issue the refund",
                  b: "A real human replies, confirms the order and issues the refund to your original payment method — usually within hours, always within the same business day for cards and PayPal.",
                },
                {
                  h: "Refund lands on your statement",
                  b: "Card statements show the refund within 3–10 business days depending on your bank. PayPal is usually instant. Crypto is sent to a wallet address you provide within 24 hours.",
                },
              ].map((s, i) => (
                <li
                  key={s.h}
                  className="flex gap-4 bg-[#1e2329] border border-[#2b3139] rounded-xl p-5"
                >
                  <span className="text-2xl font-bold text-[#fcd535] font-num leading-none flex-shrink-0">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">
                      {s.h}
                    </h3>
                    <p className="text-sm text-[#929aa5] leading-relaxed">
                      {s.b}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="mailto:Help@ottv.org?subject=7-day refund" className="cta-pill">
                Email Help@ottv.org
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=447848197761&text=Hi%21+I%27d+like+to+know+more+about+OTTv+IPTV&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-outline"
              >
                Message WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* TOC */}
        <section className="border-b border-[#2b3139]">
          <div className="max-w-3xl mx-auto px-5 lg:px-8 py-10">
            <h2 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              On this page
            </h2>
            <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-[#929aa5] list-decimal list-inside">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="hover:text-[#fcd535] transition-colors"
                  >
                    {s.h.replace(/^\d+\.\s/, "")}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Numbered policy sections */}
        <section className="border-b border-[#2b3139]">
          <div className="max-w-3xl mx-auto px-5 lg:px-8 py-16 space-y-12">
            {sections.map((s) => (
              <article key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="text-xl md:text-2xl text-white mb-4 font-semibold">
                  {s.h}
                </h2>
                <div className="space-y-4 text-[#eaecef] leading-relaxed text-[15px]">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Refund FAQ */}
        <section className="border-b border-[#2b3139]">
          <div className="max-w-3xl mx-auto px-5 lg:px-8 py-16">
            <p className="eyebrow mb-3">Refund FAQ</p>
            <h2 className="text-2xl md:text-3xl text-white mb-8">
              The 5 questions subscribers ask most.
            </h2>

            <div className="divide-y divide-[#2b3139] border border-[#2b3139] rounded-xl bg-[#1e2329]/50">
              {refundFaqs.map((f) => (
                <details
                  key={f.q}
                  className="group p-5 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                    <h3 className="text-[15px] md:text-base font-semibold text-white leading-snug">
                      {f.q}
                    </h3>
                    <span
                      aria-hidden
                      className="text-[#fcd535] text-xl leading-none mt-0.5 transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-[15px] text-[#eaecef] leading-relaxed">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-b border-[#2b3139]">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
            <div className="bg-[#1e2329] border border-[#2b3139] rounded-2xl p-10 md:p-14 text-center">
              <h2 className="text-3xl md:text-4xl text-white max-w-2xl mx-auto">
                A 7-day refund window means <br className="hidden md:block" />
                <span className="text-[#fcd535]">subscribing is risk-free.</span>
              </h2>
              <p className="mt-5 max-w-xl mx-auto text-[#929aa5]">
                Try the full 24,000-channel IPTV library on every device you
                own. If it isn&rsquo;t the best IPTV service you&rsquo;ve
                used, you get every cent back.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/iptv-subscription" className="cta-pill">
                  See IPTV plans
                </Link>
                <Link href="/iptv-free-trial" className="cta-outline">
                  How the trial works
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
