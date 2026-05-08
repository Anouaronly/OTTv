import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Terms of Service | OTTv — IPTV Subscription Terms & 7-Day Guarantee",
  description:
    "Read the OTTv Terms of Service: IPTV subscription terms, billing, the 7-day money-back guarantee, acceptable use, third-party content, and account rules. Plain-English terms for the OTTv IPTV service at ottv.org.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.ottv.org/terms",
    siteName: "OTTv",
    title: "OTTv Terms of Service — IPTV Subscription Terms",
    description:
      "Plain-English Terms of Service for the OTTv IPTV subscription: billing, refunds, acceptable use, third-party content and account rules.",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "OTTv Terms of Service",
    description:
      "Plain-English Terms of Service for the OTTv IPTV subscription.",
  },
};

// JSON-LD: WebPage + BreadcrumbList. The description mirrors the on-page
// declarative answer used for AEO/AIO so AI Overviews, ChatGPT, Perplexity
// and Bing Copilot have one canonical citation surface.
const PAGE_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://www.ottv.org/terms",
  name: "OTTv Terms of Service",
  description:
    "Terms of Service for the OTTv IPTV subscription: billing, the 7-day money-back guarantee, acceptable use, third-party content and account rules.",
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
      name: "Terms",
      item: "https://www.ottv.org/terms",
    },
  ],
};

const sections = [
  {
    id: "acceptance",
    h: "1. Acceptance of these terms",
    body: [
      "These Terms of Service (the “Terms”) form a binding agreement between you (the “subscriber” or “you”) and OTTv (operated at ottv.org). By purchasing, activating or using an OTTv IPTV subscription, you confirm that you have read, understood and agreed to these Terms in full.",
      "If you do not agree with any part of these Terms, do not subscribe and do not use the service.",
    ],
  },
  {
    id: "eligibility",
    h: "2. Eligibility & legal age",
    body: [
      "OTTv is sold to subscribers who are at least 18 years old (or the legal age of majority in their jurisdiction, whichever is higher) and who have the legal capacity to enter into a binding contract.",
      "You must purchase OTTv only in countries and jurisdictions where receiving the service is legal. See our Disclaimer for details on user responsibility and jurisdiction.",
    ],
  },
  {
    id: "service",
    h: "3. What the OTTv subscription includes",
    body: [
      "An OTTv IPTV subscription is a paid licence to access a private link (M3U) and EPG that route to feeds operated by independent third-party providers. The advertised library — 24,000+ live channels and 120,000+ movies & series — represents the historical aggregate of upstream feeds and is provided in good faith. Channel availability, language, bitrate and resolution depend on the upstream provider and may change without notice.",
      "OTTv does not host or stream any copyrighted content. OTTv is a routing and customer-experience layer; it is not the originator of the underlying streams.",
    ],
  },
  {
    id: "billing",
    h: "4. Pricing, billing & no auto-renewal",
    body: [
      "Plans are sold as fixed terms — 1, 3, 6 or 12 months — at the price shown at checkout. Prices are quoted in USD unless otherwise stated and exclude any local taxes that may apply at the point of payment.",
      "OTTv does not auto-renew. Your payment method is charged once for the term you selected and is not stored for future charges. To continue beyond the end of your term you must purchase a new subscription manually.",
      "Accepted payment methods include Visa, Mastercard, American Express, PayPal and major cryptocurrencies (BTC, ETH, USDT, USDC). All card and PayPal checkouts are PCI-compliant; OTTv never sees or stores your full card number.",
    ],
  },
  {
    id: "guarantee",
    h: "5. 7-day money-back guarantee",
    body: [
      "Every paid OTTv plan comes with a 7-day money-back guarantee. If, within 7 days of the date your subscription is activated, the service does not meet your expectations, contact Help@ottv.org and we will refund the subscription in full to your original payment method.",
      "The guarantee is intended as a quality safety net, not as a way to consume a paid term and then claim a refund. We reserve the right to decline refund requests where there is clear evidence of bulk credential sharing, resale of the M3U link or use of the subscription beyond the household it was purchased for.",
    ],
  },
  {
    id: "acceptable-use",
    h: "6. Acceptable use",
    body: [
      "You agree to use OTTv for personal, household viewing only. You will not: (a) resell, redistribute, sublicense, rent or commercially exploit the M3U link, EPG or any stream; (b) use the service to operate a public viewing space, hospitality venue, gym, bar or commercial property without a separately negotiated commercial licence; (c) attempt to scrape, mirror or rebroadcast any feed; (d) share your subscription credentials with people outside your household; (e) use the service to circumvent any law in your jurisdiction.",
      "Violation of acceptable use may result in immediate suspension of the subscription with no refund, and may be reported to the relevant payment processor or upstream provider.",
    ],
  },
  {
    id: "third-party",
    h: "7. Third-party content & changes",
    body: [
      "All content delivered through OTTv is operated by independent third-party providers. OTTv has no editorial control over those streams and does not guarantee that any specific channel, sporting event, league, broadcaster, film or series will be available at a given moment, in a given language, or at a given resolution.",
      "Channel line-ups, EPGs and on-demand catalogues may change at any time as upstream providers add, remove or re-license content. OTTv will use reasonable efforts to keep the service stable and to replace dead streams promptly.",
    ],
  },
  {
    id: "ip",
    h: "8. Intellectual property",
    body: [
      "The OTTv name, logo, website design, marketing copy, support knowledge base and customer-facing software are the property of OTTv and are protected by copyright and trademark law. You may not copy, reproduce, publish or distribute these materials without prior written permission.",
      "All channel names, broadcaster names, league names, club names, film titles, programme titles, logos and device names referenced anywhere on ottv.org are the property of their respective owners. References are descriptive only and do not imply endorsement, partnership or licence.",
    ],
  },
  {
    id: "warranty",
    h: "9. Service availability & no warranty",
    body: [
      "OTTv targets 99.9% server uptime and provides a target experience based on the historical performance of its upstream providers. Streaming over the public internet inherently depends on factors outside OTTv’s control — your ISP, your router, your device, regional peering, upstream provider stability — and we cannot warrant uninterrupted service.",
      "The service is provided on an “as is” and “as available” basis. To the maximum extent permitted by applicable law, OTTv disclaims all implied warranties of merchantability, fitness for a particular purpose and non-infringement.",
    ],
  },
  {
    id: "liability",
    h: "10. Limitation of liability",
    body: [
      "To the maximum extent permitted by applicable law, OTTv’s total cumulative liability to any subscriber arising out of or in connection with these Terms or the IPTV service is capped at the amount the subscriber actually paid OTTv for the subscription term in question.",
      "OTTv is not liable for indirect, incidental, special, consequential or punitive damages — including lost profits, lost data or loss of enjoyment — even if OTTv has been advised of the possibility of such damages.",
    ],
  },
  {
    id: "indemnity",
    h: "11. Indemnification",
    body: [
      "You agree to indemnify and hold harmless OTTv, its operators, contractors and upstream providers from any claim, demand, loss or expense (including reasonable legal fees) arising from: (a) your breach of these Terms; (b) your misuse of the service; (c) your access to or viewing of content that you were not legally entitled to access in your jurisdiction.",
    ],
  },
  {
    id: "termination",
    h: "12. Suspension & termination",
    body: [
      "OTTv may suspend or terminate your subscription, with or without notice, if you breach these Terms, if your payment is reversed or charged back, or if continued provision of the service would expose OTTv or its providers to legal or commercial risk.",
      "On termination for breach, no refund is owed. You may cancel your own subscription at any time by simply not renewing — there is nothing to “cancel” because no auto-renewal exists.",
    ],
  },
  {
    id: "law",
    h: "13. Governing law & disputes",
    body: [
      "These Terms are governed by the laws of England & Wales, without regard to conflict-of-law principles. Any dispute that cannot be resolved through good-faith discussion within 30 days will be submitted to the exclusive jurisdiction of the courts of England & Wales, except where mandatory consumer-protection law in your country of residence requires otherwise.",
    ],
  },
  {
    id: "changes",
    h: "14. Changes to these Terms",
    body: [
      "OTTv may update these Terms from time to time to reflect changes in upstream provider terms, applicable law or the service offering. The current version is always published at ottv.org/terms. Continued use of an OTTv subscription after a change is published constitutes acceptance of the updated Terms.",
    ],
  },
  {
    id: "contact",
    h: "15. Contact",
    body: [
      "Questions about these Terms, billing, refunds or the service should be sent to Help@ottv.org. For urgent issues, message support on WhatsApp — average reply under 4 minutes during waking hours.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_LD) }}
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
              <span className="text-white">Terms</span>
            </nav>

            <p className="eyebrow mb-4">Legal</p>
            <h1 className="text-4xl sm:text-5xl text-white">
              OTTv Terms of Service
            </h1>
            <p className="mt-6 text-base md:text-lg text-[#eaecef] leading-relaxed">
              <span className="text-white font-semibold">
                These Terms govern every OTTv IPTV subscription.
              </span>{" "}
              They cover billing, the 7-day money-back guarantee, acceptable
              use, third-party content and account rules — written in
              plain English so you know exactly what you&rsquo;re agreeing to.
            </p>
            <p className="mt-4 text-sm text-[#929aa5]">
              Last updated: 2 May 2026
            </p>
          </div>
        </section>

        {/* Quick summary band — boosts AEO/AIO extraction */}
        <section className="border-b border-[#2b3139] bg-[#1e2329]">
          <div className="max-w-3xl mx-auto px-5 lg:px-8 py-10">
            <h2 className="text-sm font-semibold text-[#fcd535] tracking-wider uppercase mb-4">
              The short version
            </h2>
            <ul className="space-y-3 text-[15px] text-[#eaecef] leading-relaxed">
              <li className="flex gap-3">
                <span className="text-[#0ecb81] font-bold flex-shrink-0">✓</span>
                <span>
                  You buy a fixed term (1, 3, 6 or 12 months). Nothing
                  auto-renews. Your card is charged once.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ecb81] font-bold flex-shrink-0">✓</span>
                <span>
                  Every plan is covered by a 7-day money-back guarantee on the
                  full library — not a demo feed.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ecb81] font-bold flex-shrink-0">✓</span>
                <span>
                  OTTv routes streams from independent third-party providers.
                  We do not host or stream copyrighted content.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ecb81] font-bold flex-shrink-0">✓</span>
                <span>
                  Personal household use only — no resale of the M3U link, no
                  commercial venues without a separate licence.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ecb81] font-bold flex-shrink-0">✓</span>
                <span>
                  You confirm you&rsquo;re legally entitled to view the
                  content you choose to access in your jurisdiction.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Table of contents */}
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

        {/* Numbered sections */}
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

        {/* Contact strip */}
        <section className="border-b border-[#2b3139]">
          <div className="max-w-3xl mx-auto px-5 lg:px-8 py-14">
            <div className="bg-[#1e2329] border border-[#2b3139] rounded-xl p-7">
              <h2 className="text-lg font-semibold text-white mb-2">
                Anything unclear in these Terms?
              </h2>
              <p className="text-sm text-[#929aa5] leading-relaxed">
                Email{" "}
                <a
                  href="mailto:Help@ottv.org"
                  className="text-[#fcd535] hover:underline"
                >
                  Help@ottv.org
                </a>{" "}
                or message us on{" "}
                <a
                  href="https://api.whatsapp.com/send/?phone=447848197761&text=Hi%21+I%27d+like+to+know+more+about+OTTv+IPTV&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fcd535] hover:underline"
                >
                  WhatsApp
                </a>{" "}
                — we&rsquo;ll explain anything and won&rsquo;t hide behind
                small print. See also our{" "}
                <Link
                  href="/disclaimer"
                  className="text-[#fcd535] hover:underline"
                >
                  Disclaimer
                </Link>{" "}
                on third-party content and jurisdiction.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
