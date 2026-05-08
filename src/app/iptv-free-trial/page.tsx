import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "IPTV Free Trial 2026 — OTTv | 7-Day Risk-Free, 24,000+ Channels",
  description:
    "OTTv replaces the typical IPTV free trial with a 7-day money-back guarantee. Full 24,000-channel library, full refund if it isn't right.",
  alternates: { canonical: "/iptv-free-trial" },
  openGraph: {
    type: "website",
    url: "https://www.ottv.org/iptv-free-trial",
    siteName: "OTTv",
    title: "IPTV Free Trial — 7 Days Risk-Free, Full Library",
    description:
      "Pay for 1 month, use the full 24,000-channel library on every device, refund 100% inside 7 days.",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "OTTv — 7-day risk-free IPTV trial, 24,000+ channels in HD & 4K",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OTTv IPTV Trial — 7 Days, 24,000+ Channels",
    description:
      "Subscribe, stream the full library, refund inside 7 days if it isn't right.",
    images: ["/opengraph-image"],
  },
};

const SERVICE_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "IPTV subscription",
  name: "OTTv 7-Day Risk-Free IPTV Trial (Money-Back Guarantee)",
  provider: {
    "@type": "Organization",
    name: "OTTv",
    url: "https://www.ottv.org/",
  },
  areaServed: "Worldwide",
  description:
    "OTTv replaces the traditional IPTV free trial with a 7-day money-back guarantee on every paid plan. Full access to 24,000+ live channels and 120,000+ movies & series, refunded in full if the service isn't right.",
  url: "https://www.ottv.org/iptv-free-trial",
  offers: {
    "@type": "Offer",
    name: "7-Day Risk-Free IPTV Trial",
    price: "16.00",
    priceCurrency: "USD",
    url: "https://www.ottv.org/iptv-subscription#pricing",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
    eligibleDuration: {
      "@type": "QuantitativeValue",
      value: "7",
      unitCode: "DAY",
    },
  },
};

const PRODUCT_LD = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "OTTv IPTV Subscription — 7-Day Risk-Free Trial",
  description:
    "Premium IPTV subscription with 24,000+ live channels and 120,000+ movies & series in HD & 4K. Backed by a 7-day money-back guarantee on every paid plan.",
  brand: { "@type": "Brand", name: "OTTv" },
  image: "https://www.ottv.org/opengraph-image",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "12400",
    bestRating: "5",
    worstRating: "1",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "7.50",
    highPrice: "16.00",
    offerCount: 4,
    availability: "https://schema.org/InStock",
    url: "https://www.ottv.org/iptv-subscription",
  },
};

const steps = [
  {
    n: "01",
    title: "Pick the 1-month plan",
    body: "The shortest term ($16) is the trial price floor — minimum spend if you decide it isn't for you. Longer plans are also covered by the same 7-day guarantee.",
  },
  {
    n: "02",
    title: "Activate &amp; install",
    body: "M3U link, EPG and a setup guide for your exact device hit your inbox in under 5 minutes. Paste them into any IPTV player on your Smart TV, phone, tablet or set-top box.",
  },
  {
    n: "03",
    title: "Use everything for 7 days",
    body: "Stream the full 24,000-channel library, every match, every movie. Test 4K. Test multi-device. If it underdelivers, message support inside 7 days for a full refund.",
  },
];

const compareRows = [
  {
    feature: "Channel access",
    others: "Limited “demo” feed",
    ottv: "Full 24,000+ channel library",
  },
  {
    feature: "Stream quality",
    others: "Heavily throttled",
    ottv: "True HD & 4K, identical to paid",
  },
  {
    feature: "Trial length",
    others: "24 hours",
    ottv: "7 full days",
  },
  {
    feature: "Refund if you cancel",
    others: "N/A — no payment taken",
    ottv: "100% refund inside 7 days",
  },
  {
    feature: "Device support",
    others: "Often app-only",
    ottv: "Every device the paid plan supports",
  },
  {
    feature: "Real human support",
    others: "Auto-replies",
    ottv: "WhatsApp · <4 min average",
  },
];

export default function IPTVFreeTrialPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_LD) }}
      />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative border-b border-[#2b3139]">
          <div className="max-w-4xl mx-auto px-5 lg:px-8 pt-16 md:pt-24 pb-20 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0ecb81]/10 border border-[#0ecb81]/20 text-xs text-[#0ecb81] font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0ecb81]" />
              7-DAY MONEY-BACK GUARANTEE
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] text-white">
              IPTV Free Trial,{" "}
              <span className="text-[#fcd535]">done right.</span>{" "}
              <br className="hidden md:block" />
              7 days risk-free, full library.
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-[#929aa5] leading-relaxed">
              OTTv replaces the typical 24-hour IPTV free trial with a 7-day
              money-back guarantee on every paid plan. You get the entire
              24,000-channel library — no demo feed, no throttle, no missing
              channels — and a full refund if the service isn&rsquo;t right.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/#pricing" className="cta-pill">
                Start 7-day risk-free trial
              </Link>
              <a
                href="https://api.whatsapp.com/send/?phone=447848197761&text=Hi%21+I%27d+like+to+know+more+about+OTTv+IPTV&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-outline"
              >
                Ask before you buy
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm text-[#929aa5]">
              <span>No auto-renewal</span>
              <span className="hidden sm:inline w-px h-4 bg-[#2b3139]" />
              <span>Cancel inside 7 days for full refund</span>
              <span className="hidden sm:inline w-px h-4 bg-[#2b3139]" />
              <span>4.8 ★ · 12,400 reviews</span>
            </div>
          </div>
        </section>

        {/* How the trial works */}
        <section className="border-b border-[#2b3139]">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="eyebrow mb-3">How the trial works</p>
              <h2 className="text-3xl md:text-4xl text-white">
                3 steps to a 7-day risk-free <br className="hidden md:block" />
                IPTV trial.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((s) => (
                <div
                  key={s.n}
                  className="bg-[#1e2329] border border-[#2b3139] rounded-xl p-7"
                >
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-3xl font-bold text-[#fcd535] font-num leading-none">
                      {s.n}
                    </span>
                    <span className="h-px flex-1 bg-[#2b3139]" />
                  </div>
                  <h3
                    className="text-lg font-semibold text-white mb-2"
                    dangerouslySetInnerHTML={{ __html: s.title }}
                  />
                  <p
                    className="text-sm text-[#929aa5] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: s.body }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="border-b border-[#2b3139]">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="eyebrow mb-3">Comparison</p>
              <h2 className="text-3xl md:text-4xl text-white">
                Why OTTv beats the typical <br className="hidden md:block" />
                24-hour IPTV free trial.
              </h2>
              <p className="mt-4 text-[#929aa5]">
                Most &ldquo;free IPTV trials&rdquo; are demo feeds throttled to
                a fraction of the real service. Here&rsquo;s the difference.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-[#2b3139]">
              <table className="w-full text-sm">
                <thead className="bg-[#1e2329] text-left">
                  <tr>
                    <th className="px-5 py-4 text-white font-semibold">
                      What you actually get
                    </th>
                    <th className="px-5 py-4 text-[#929aa5] font-semibold">
                      Typical 24-hour IPTV free trial
                    </th>
                    <th className="px-5 py-4 text-[#fcd535] font-semibold">
                      OTTv 7-day risk-free trial
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row) => (
                    <tr
                      key={row.feature}
                      className="border-t border-[#2b3139]"
                    >
                      <td className="px-5 py-4 text-white font-semibold">
                        {row.feature}
                      </td>
                      <td className="px-5 py-4 text-[#929aa5]">
                        {row.others}
                      </td>
                      <td
                        className="px-5 py-4 text-[#eaecef]"
                        dangerouslySetInnerHTML={{ __html: row.ottv }}
                      />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Long-form trust block */}
        <section className="border-b border-[#2b3139]">
          <div className="max-w-3xl mx-auto px-5 lg:px-8 py-20">
            <p className="eyebrow mb-4">Why the policy</p>
            <h2 className="text-3xl md:text-4xl text-white mb-8">
              An honest take on the &ldquo;free IPTV trial&rdquo; promise.
            </h2>

            <div className="space-y-5 text-[#eaecef] leading-relaxed">
              <p>
                If you&rsquo;ve searched for an{" "}
                <strong className="text-white">IPTV free trial</strong>, you
                already know the pattern: a landing page promises 24 hours of
                free streaming, you hand over an email, the credentials work
                for two channels, and the “real” experience requires a paid
                upgrade. The trial isn&rsquo;t the product — it&rsquo;s the
                upsell funnel.
              </p>
              <p>
                OTTv runs the inverse model.{" "}
                <strong className="text-white">
                  You pay for one month upfront ($16) and get a real,
                  unrestricted 7-day window
                </strong>{" "}
                on the full service. If anything underdelivers — channel
                missing, stream quality off, device incompatible, EPG wrong
                — message support inside that window and we refund every
                cent. No survey, no negotiation.
              </p>
              <p>
                It works because we don&rsquo;t need to manufacture lock-in.
                50,000+ subscribers stay because the streams hold up, not
                because they&rsquo;re trapped by a contract.{" "}
                <Link
                  href="/iptv-subscription"
                  className="text-[#fcd535] hover:underline"
                >
                  See the IPTV subscription plans
                </Link>{" "}
                or{" "}
                <a
                  href="https://api.whatsapp.com/send/?phone=447848197761&text=Hi%21+I%27d+like+to+know+more+about+OTTv+IPTV&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fcd535] hover:underline"
                >
                  ask a question on WhatsApp
                </a>{" "}
                before you start.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-b border-[#2b3139]">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
            <div className="bg-[#1e2329] border border-[#2b3139] rounded-2xl p-10 md:p-14 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0ecb81]/10 border border-[#0ecb81]/20 text-xs text-[#0ecb81] font-semibold mb-6">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path
                    d="M5 12l5 5L20 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                7 DAYS · FULL REFUND IF NOT RIGHT
              </div>

              <h2 className="text-3xl md:text-4xl text-white max-w-2xl mx-auto">
                Start your IPTV trial in <br className="hidden md:block" />
                under <span className="text-[#fcd535]">5 minutes</span>.
              </h2>

              <p className="mt-5 max-w-xl mx-auto text-[#929aa5]">
                Pay for 1 month, use the full 24,000-channel library for 7
                days. If it&rsquo;s not the best IPTV service you&rsquo;ve
                used, get every cent back.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/#pricing" className="cta-pill">
                  Start 7-day risk-free trial
                </Link>
                <a
                  href="https://api.whatsapp.com/send/?phone=447848197761&text=Hi%21+I%27d+like+to+know+more+about+OTTv+IPTV&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-outline"
                >
                  Message support first
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl mx-auto pt-8 border-t border-[#2b3139]">
                <div>
                  <p className="text-xl font-bold text-white font-num">
                    7 days
                  </p>
                  <p className="text-xs text-[#929aa5] mt-1">Trial window</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-white font-num">100%</p>
                  <p className="text-xs text-[#929aa5] mt-1">Refund if you cancel</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-white font-num">
                    24,000+
                  </p>
                  <p className="text-xs text-[#929aa5] mt-1">Channels included</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
