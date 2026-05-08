import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import Guarantee from "@/components/Guarantee";

export const metadata: Metadata = {
  title: "IPTV Subscription Plans 2026 — OTTv | From $7.50/mo",
  description:
    "Compare OTTv IPTV subscription plans. 24,000+ live channels, 120,000+ movies in HD/4K, activated in 5 min. From $7.50/mo, 7-day money-back.",
  alternates: { canonical: "/iptv-subscription" },
  openGraph: {
    type: "website",
    url: "https://www.ottv.org/iptv-subscription",
    siteName: "OTTv",
    title: "IPTV Subscription Plans — OTTv | From $7.50/mo",
    description:
      "4 plan lengths, same 24,000-channel library, 7-day money-back guarantee.",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "OTTv — IPTV subscription plans from $7.50/mo, 24,000+ channels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OTTv IPTV Subscription — Plans from $7.50/mo",
    description:
      "Same 24,000-channel library on every plan. 7-day money-back guarantee.",
    images: ["/opengraph-image"],
  },
};

const PRODUCT_LD = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "OTTv IPTV Subscription",
  description:
    "Premium IPTV subscription with 24,000+ live channels and 120,000+ movies & series in HD & 4K. Activated in under 5 minutes. 7-day money-back guarantee.",
  brand: { "@type": "Brand", name: "OTTv" },
  image: "https://www.ottv.org/opengraph-image",
  url: "https://www.ottv.org/iptv-subscription",
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
    offerCount: "4",
    offers: [
      {
        "@type": "Offer",
        name: "1 Month IPTV Subscription",
        price: "16.00",
        priceCurrency: "USD",
        url: "https://www.ottv.org/iptv-subscription#pricing",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
      {
        "@type": "Offer",
        name: "3 Months IPTV Subscription",
        price: "39.00",
        priceCurrency: "USD",
        url: "https://www.ottv.org/iptv-subscription#pricing",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
      {
        "@type": "Offer",
        name: "6 Months IPTV Subscription",
        price: "60.00",
        priceCurrency: "USD",
        url: "https://www.ottv.org/iptv-subscription#pricing",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
      {
        "@type": "Offer",
        name: "12 Months IPTV Subscription",
        price: "90.00",
        priceCurrency: "USD",
        url: "https://www.ottv.org/iptv-subscription#pricing",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
    ],
  },
};

const ORG_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OTTv",
  url: "https://www.ottv.org/",
  logo: "https://www.ottv.org/logo.svg",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["English"],
    telephone: "+44-7848-197761",
    email: "Help@ottv.org",
  },
};

const compare = [
  {
    plan: "1 Month",
    monthly: "$16.00",
    total: "$16",
    save: "—",
    fit: "Try before you commit, gift card, short trip.",
  },
  {
    plan: "3 Months",
    monthly: "$13.00",
    total: "$39",
    save: "Save 19%",
    fit: "Quarterly subscribers, season-only sports fans.",
  },
  {
    plan: "6 Months",
    monthly: "$10.00",
    total: "$60",
    save: "Save 38%",
    fit: "Most popular — half a year of full library.",
  },
  {
    plan: "12 Months",
    monthly: "$7.50",
    total: "$90",
    save: "Save 38% + Priority Support",
    fit: "Best value — locks in $7.50/mo for a full year.",
  },
];

const benefits = [
  {
    title: "24,000+ live IPTV channels",
    body: "Every region, every major sport, every news network — included on every subscription term, with no upgrade tiers.",
  },
  {
    title: "120,000+ movies & series",
    body: "Full on-demand library with frequent fresh additions. New episodes drop the same week they air in their home country.",
  },
  {
    title: "HD & 4K streaming",
    body: "Adaptive bitrate from SD up to true 4K where the source supports it — your subscription always picks the highest quality your line can carry.",
  },
  {
    title: "Multi-device IPTV",
    body: "2 simultaneous streams included, unlimited installs. Living room TV, kids' tablet, phone on holiday — one subscription, every screen.",
  },
  {
    title: "99.9% server uptime",
    body: "Distributed CDN across multiple regions. EPG checked automatically; dead streams are replaced before subscribers notice.",
  },
  {
    title: "Real human support",
    body: "Every subscription includes 24/7 WhatsApp support — average reply under 4 minutes. The 12-month plan adds Priority Support.",
  },
];

export default function IPTVSubscriptionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_LD) }}
      />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative border-b border-[#2b3139]">
          <div className="max-w-4xl mx-auto px-5 lg:px-8 pt-16 md:pt-24 pb-20 text-center">
            <p className="eyebrow mb-4">IPTV subscription</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] text-white">
              IPTV Subscription Plans <br className="hidden md:block" />
              from <span className="text-[#fcd535]">$7.50/mo</span>.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-[#929aa5] leading-relaxed">
              Compare OTTv&rsquo;s four IPTV subscription plans. Every plan
              includes the full 24,000-channel library and 120,000+ movies
              &amp; series in HD &amp; 4K. Activated in under 5 minutes,
              7-day money-back guarantee, no contract, no auto-renewal.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="#plans" className="cta-pill">
                Compare IPTV plans
              </a>
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
              <span>
                <span className="text-white font-num font-semibold">4.8</span>
                {" "}· 12,400 reviews
              </span>
              <span className="hidden sm:inline w-px h-4 bg-[#2b3139]" />
              <span>50,000+ active subscribers</span>
              <span className="hidden sm:inline w-px h-4 bg-[#2b3139]" />
              <span>Pay with card, PayPal, or crypto</span>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="border-b border-[#2b3139]">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="eyebrow mb-3">Plan comparison</p>
              <h2 className="text-3xl md:text-4xl text-white">
                Pick the IPTV subscription term <br className="hidden md:block" />
                that suits how you watch.
              </h2>
              <p className="mt-4 text-[#929aa5]">
                Same 24,000-channel library on every plan. The only thing that
                changes is how long you subscribe — and how much you save.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-[#2b3139]">
              <table className="w-full text-sm">
                <thead className="bg-[#1e2329] text-left">
                  <tr>
                    <th className="px-5 py-4 text-white font-semibold">Plan</th>
                    <th className="px-5 py-4 text-white font-semibold">
                      Monthly cost
                    </th>
                    <th className="px-5 py-4 text-white font-semibold">
                      Total billed
                    </th>
                    <th className="px-5 py-4 text-white font-semibold">
                      You save
                    </th>
                    <th className="px-5 py-4 text-white font-semibold hidden md:table-cell">
                      Best for
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {compare.map((row, i) => (
                    <tr
                      key={row.plan}
                      className={`border-t border-[#2b3139] ${
                        i === 3 ? "bg-[#1e2329]/50" : ""
                      }`}
                    >
                      <td className="px-5 py-4 text-white font-semibold">
                        {row.plan}
                        {i === 3 && (
                          <span className="ml-2 inline-block px-2 py-0.5 rounded-md bg-[#fcd535] text-[#181a20] text-[10px] font-bold tracking-wider align-middle">
                            BEST VALUE
                          </span>
                        )}
                        {i === 2 && (
                          <span className="ml-2 inline-block px-2 py-0.5 rounded-md bg-[#2b3139] text-[#fcd535] border border-[#fcd535]/40 text-[10px] font-bold tracking-wider align-middle">
                            POPULAR
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-4 text-[#eaecef] font-num">
                        {row.monthly}
                      </td>
                      <td className="px-5 py-4 text-[#eaecef] font-num">
                        {row.total}
                      </td>
                      <td className="px-5 py-4 text-[#0ecb81] font-semibold">
                        {row.save}
                      </td>
                      <td className="px-5 py-4 text-[#929aa5] hidden md:table-cell">
                        {row.fit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Plan cards (reuse Pricing component) */}
        <div id="plans" />
        <Pricing />

        {/* What's included */}
        <section className="border-b border-[#2b3139]">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="eyebrow mb-3">What every subscription includes</p>
              <h2 className="text-3xl md:text-4xl text-white">
                One library. Every plan. <br className="hidden md:block" />
                Zero upsells.
              </h2>
              <p className="mt-4 text-[#929aa5]">
                Most IPTV providers lock the good channels behind &ldquo;premium&rdquo;
                tiers. OTTv ships every channel and every VOD title to every
                subscriber, on every plan length.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((b) => (
                <article
                  key={b.title}
                  className="bg-[#1e2329] border border-[#2b3139] rounded-xl p-6"
                >
                  <h3 className="text-base font-semibold text-white mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-[#929aa5] leading-relaxed">
                    {b.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Long-form SEO body */}
        <section className="border-b border-[#2b3139]">
          <div className="max-w-3xl mx-auto px-5 lg:px-8 py-20">
            <p className="eyebrow mb-4">Buying guide</p>
            <h2 className="text-3xl md:text-4xl text-white mb-8">
              How to pick the right IPTV subscription in 2026.
            </h2>

            <div className="space-y-6 text-[#eaecef] leading-relaxed">
              <p>
                The IPTV subscription market is crowded with resellers,
                short-lived storefronts and bait-and-switch &ldquo;basic&rdquo;
                tiers that hide the channels you actually came for. Picking
                the right service is mostly about checking three things
                before you pay: who&rsquo;s behind the service, what&rsquo;s
                actually included on the plan you&rsquo;re looking at, and
                what happens if it doesn&rsquo;t work on your device.
              </p>

              <h3 className="text-xl text-white font-semibold pt-2">
                1. Look at total channel count, not tier names
              </h3>
              <p>
                A &ldquo;basic&rdquo; IPTV subscription with 4,000 channels is
                often a relabelled feed of public streams. OTTv ships{" "}
                <strong className="text-white">24,000+ live channels</strong>{" "}
                and 120,000+ movies and series on every plan from $7.50/mo —
                no upgrade unlocks anything more.
              </p>

              <h3 className="text-xl text-white font-semibold pt-2">
                2. Check the term length math
              </h3>
              <p>
                Monthly IPTV subscriptions are convenient but expensive — you
                pay roughly twice the per-month rate of a 12-month plan in
                exchange for low commitment. The OTTv 12-month plan locks in{" "}
                <strong className="text-white">$7.50/mo</strong> (vs. $16/mo
                month-to-month), saving 38% over a full year.
              </p>

              <h3 className="text-xl text-white font-semibold pt-2">
                3. Demand a real refund window
              </h3>
              <p>
                IPTV is a digital service — refunds are entirely the
                provider&rsquo;s discretion. OTTv&rsquo;s{" "}
                <strong className="text-white">
                  7-day money-back guarantee
                </strong>{" "}
                works as a free IPTV subscription trial in everything but
                name: subscribe, use the full library, and if it&rsquo;s not
                what you wanted, message support for a full refund. No
                survey, no &ldquo;why are you leaving&rdquo; barrier.
              </p>

              <h3 className="text-xl text-white font-semibold pt-2">
                4. Test support before you commit a year
              </h3>
              <p>
                Send a question on WhatsApp <em>before</em>{" "}you buy. If a
                provider takes 24 hours to reply pre-sale, expect 48 hours
                post-sale when something breaks. OTTv&rsquo;s average reply
                time is{" "}
                <strong className="text-white">under 4 minutes, 24/7</strong>{" "}
                — that&rsquo;s the bar.
              </p>

              <p className="pt-2">
                Once those four boxes are checked, the choice between
                providers comes down to price and convenience.{" "}
                <Link
                  href="#plans"
                  className="text-[#fcd535] hover:underline"
                >
                  Compare OTTv plans above
                </Link>{" "}
                or{" "}
                <a
                  href="https://api.whatsapp.com/send/?phone=447848197761&text=Hi%21+I%27d+like+to+know+more+about+OTTv+IPTV&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fcd535] hover:underline"
                >
                  message us on WhatsApp
                </a>{" "}
                if you want a recommendation for your specific use case.
              </p>
            </div>
          </div>
        </section>

        <Guarantee />
      </main>
      <Footer />
    </>
  );
}
