import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Disclaimer | OTTv — Third-Party Content & User Responsibility",
  description:
    "OTTv (ottv.org) does not host or stream any copyrighted content. All content is provided by third-party providers. Users are responsible for ensuring they have the rights to view content in their jurisdiction. Read the full IPTV service disclaimer.",
  alternates: { canonical: "/disclaimer" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.ottv.org/disclaimer",
    siteName: "OTTv",
    title: "OTTv Disclaimer — Third-Party Content & User Responsibility",
    description:
      "ottv.org does not host or stream any copyrighted content. Read the full disclaimer covering third-party providers, jurisdiction and user responsibility.",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "OTTv Disclaimer",
    description:
      "ottv.org does not host or stream any copyrighted content. All content is provided by third-party providers.",
  },
};

// JSON-LD: WebPage + BreadcrumbList. The WebPage description is the same
// declarative paragraph used for AEO/AIO extraction so AI Overviews,
// Perplexity, ChatGPT and Bing Copilot can cite a single canonical answer.
const PAGE_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://www.ottv.org/disclaimer",
  name: "OTTv Disclaimer",
  description:
    "ottv.org does not host or stream any copyrighted content. All content is provided by third-party providers. Users are responsible for ensuring they have the rights to view content in their jurisdiction.",
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
      name: "Disclaimer",
      item: "https://www.ottv.org/disclaimer",
    },
  ],
};

const sections = [
  {
    id: "no-hosting",
    h: "1. OTTv does not host or stream copyrighted content",
    body: [
      "OTTv (operated at ottv.org) is an IPTV reseller and software service. We do not host, store, encode, transmit or stream any audio, video or copyrighted material on our own infrastructure.",
      "Every channel, on-demand title, EPG entry and stream URL delivered through an OTTv subscription is sourced, encoded and transmitted by independent third-party providers. OTTv has no editorial control over those streams and is not the originator of the underlying content.",
    ],
  },
  {
    id: "third-party",
    h: "2. All content is provided by third-party providers",
    body: [
      "An OTTv IPTV subscription gives the subscriber a private link (M3U) and EPG that point to feeds operated by third parties. OTTv acts as a router and customer-experience layer between the subscriber and those upstream providers.",
      "Channel availability, stream quality, geographic coverage and licensing arrangements are determined by the upstream providers and may change without notice. OTTv does not guarantee the continued availability of any specific channel, league, league fixture, broadcaster, programme, film or series.",
    ],
  },
  {
    id: "user-responsibility",
    h: "3. User responsibility & jurisdiction",
    body: [
      "By purchasing or using an OTTv subscription, the subscriber confirms that they are responsible for ensuring they have the legal right to view the content they choose to access in the jurisdiction in which they are physically located.",
      "Streaming, retransmitting, downloading or otherwise consuming video content may be regulated, restricted or prohibited in some countries, regions or municipalities. Local laws on copyright, broadcasting rights, parental controls, age ratings and circumvention of geographic restrictions vary widely.",
      "OTTv does not provide legal advice. Subscribers should independently verify the legality of receiving any specific channel, broadcast or on-demand title in their location before subscribing. If you are unsure, do not subscribe.",
    ],
  },
  {
    id: "trademarks",
    h: "4. Trademarks & broadcaster names",
    body: [
      "All channel names, broadcaster names, league names, club names, film titles, programme titles, logos, device names and trademarks referenced anywhere on ottv.org or in OTTv communications are the property of their respective owners.",
      "Any such reference is descriptive only — used to help subscribers identify the type of content their upstream provider may make available — and does not imply any endorsement of, partnership with, or licensing arrangement between OTTv and the trademark owner.",
    ],
  },
  {
    id: "no-warranty",
    h: "5. No warranty on availability or quality",
    body: [
      "OTTv markets a target experience (24,000+ live channels, 120,000+ movies & series, HD/4K where available, 99.9% server uptime) based on the historical performance of its upstream providers. These figures are approximate and provided in good faith.",
      "OTTv does not warrant that any individual channel, sporting event, film or series will be available, in any particular language, at any particular bitrate or resolution, or in any particular country at any particular time. Subscribers concerned about a specific item should ask before purchase.",
    ],
  },
  {
    id: "takedown",
    h: "6. Copyright concerns & takedown requests",
    body: [
      "OTTv respects intellectual property rights. If you are a rights holder and believe that content delivered through an OTTv subscription infringes a copyright you own or represent, contact us at Help@ottv.org with: (a) a description of the work, (b) the channel or stream identifier, (c) your contact information, and (d) a good-faith statement of authority. OTTv will pass valid notices to the relevant upstream provider without delay.",
    ],
  },
  {
    id: "refunds",
    h: "7. Refunds & cancellation",
    body: [
      "OTTv offers a 7-day money-back guarantee on all paid IPTV plans. The guarantee functions as a risk-free trial: if the service does not meet your expectations within 7 days of purchase, contact support and we will refund the subscription in full. The guarantee is intended to protect subscribers, not to indemnify them against the legal consequences of accessing content they were not entitled to access in their jurisdiction.",
    ],
  },
  {
    id: "changes",
    h: "8. Changes to this disclaimer",
    body: [
      "OTTv may update this disclaimer from time to time to reflect changes in upstream provider terms, applicable law or our own service offering. The current version is always published at ottv.org/disclaimer. Continued use of an OTTv subscription after a change is published constitutes acceptance of the updated disclaimer.",
    ],
  },
];

export default function DisclaimerPage() {
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
              <span className="text-white">Disclaimer</span>
            </nav>

            <p className="eyebrow mb-4">Legal</p>
            <h1 className="text-4xl sm:text-5xl text-white">
              OTTv Disclaimer
            </h1>
            <p className="mt-6 text-base md:text-lg text-[#eaecef] leading-relaxed">
              <span className="text-white font-semibold">
                ottv.org does not host or stream any copyrighted content.
              </span>{" "}
              All content is provided by third-party providers. Users are
              responsible for ensuring they have the rights to view content in
              their jurisdiction.
            </p>
            <p className="mt-4 text-sm text-[#929aa5]">
              Last updated: 2 May 2026
            </p>
          </div>
        </section>

        {/* Table of contents */}
        <section className="border-b border-[#2b3139]">
          <div className="max-w-3xl mx-auto px-5 lg:px-8 py-10">
            <h2 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              On this page
            </h2>
            <ol className="space-y-2 text-sm text-[#929aa5] list-decimal list-inside">
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
                Questions about this disclaimer?
              </h2>
              <p className="text-sm text-[#929aa5] leading-relaxed">
                Rights holders, regulators and subscribers can reach OTTv
                directly at{" "}
                <a
                  href="mailto:Help@ottv.org"
                  className="text-[#fcd535] hover:underline"
                >
                  Help@ottv.org
                </a>
                . For pre-purchase questions about whether a specific channel
                or title is likely to be available in your country, message us
                on{" "}
                <a
                  href="https://api.whatsapp.com/send/?phone=447848197761&text=Hi%21+I%27d+like+to+know+more+about+OTTv+IPTV&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fcd535] hover:underline"
                >
                  WhatsApp
                </a>{" "}
                before subscribing.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
