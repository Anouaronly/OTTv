import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Privacy Policy | OTTv — IPTV Subscription Privacy & GDPR Rights",
  description:
    "OTTv Privacy Policy: what data we collect when you buy an IPTV subscription, why, how long we keep it, and your GDPR / UK GDPR / CCPA rights. We never sell subscriber data and card details never touch our servers.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.ottv.org/privacy",
    siteName: "OTTv",
    title: "OTTv Privacy Policy — Your IPTV Subscription Data, Protected",
    description:
      "What data OTTv collects, why, how long, and your GDPR / UK GDPR / CCPA rights. Card details never touch our servers and we never sell subscriber data.",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "OTTv Privacy Policy",
    description:
      "What data OTTv collects, why, and your GDPR / UK GDPR / CCPA rights.",
  },
};

// JSON-LD: WebPage + BreadcrumbList. Description mirrors the on-page
// declarative answer used for AEO/AIO so Google AI Overviews, ChatGPT,
// Perplexity and Bing Copilot have a single canonical citation surface.
const PAGE_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://www.ottv.org/privacy",
  name: "OTTv Privacy Policy",
  description:
    "OTTv collects only the data needed to deliver an IPTV subscription. Card details never touch our servers, we never sell subscriber data, and subscribers can request access, correction or deletion at any time.",
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
      name: "Privacy",
      item: "https://www.ottv.org/privacy",
    },
  ],
};

const promises = [
  {
    head: "We never sell subscriber data",
    body: "OTTv has never sold, rented or licensed subscriber data and never will. Your data isn’t the product — your IPTV subscription is.",
  },
  {
    head: "Card details never touch our servers",
    body: "Visa, Mastercard, AMEX and PayPal payments are tokenised at PCI-DSS-compliant processors. We see a transaction reference; we never see your full card number.",
  },
  {
    head: "Crypto = zero PII checkout",
    body: "Pay with BTC, ETH, USDT or USDC and the only personal data we hold is the email we send the M3U link to.",
  },
  {
    head: "Minimal logs, short retention",
    body: "We log what we need to deliver, secure and refund the subscription — no behavioural profiling, no third-party ad pixels.",
  },
];

const dataTable = [
  {
    cat: "Account & order data",
    fields: "Email, plan length, order ID, transaction reference",
    why: "To deliver the M3U link, EPG, support and any refund.",
    keep: "Up to 24 months after your last subscription, then deleted.",
  },
  {
    cat: "Payment data",
    fields: "Tokenised reference only — never the full card number",
    why: "To process payment, prevent fraud and honour the 7-day refund.",
    keep: "Held by the PCI-DSS processor (Stripe / PayPal / processor of record).",
  },
  {
    cat: "Support conversations",
    fields: "WhatsApp / email message content, timestamps",
    why: "To resolve issues and improve the service.",
    keep: "12 months from the last message, then deleted.",
  },
  {
    cat: "Technical / server logs",
    fields: "IP address, device type, request timestamps (truncated)",
    why: "Security, abuse prevention, debugging stream issues.",
    keep: "Rotated within 30 days unless flagged for an active investigation.",
  },
  {
    cat: "Marketing (newsletter)",
    fields: "Email + opt-in timestamp",
    why: "Only if you subscribe to the newsletter. One unsubscribe link in every email.",
    keep: "Until you unsubscribe.",
  },
];

const sections = [
  {
    id: "scope",
    h: "1. Scope of this Privacy Policy",
    body: [
      "This Privacy Policy explains how OTTv (operated at ottv.org) collects, uses, shares and protects personal data of subscribers, prospective subscribers and visitors. It applies to the website, the checkout, the customer support channels (email, WhatsApp) and the IPTV subscription service.",
      "It does not apply to third-party websites you reach by clicking outbound links — those are governed by their own privacy policies.",
    ],
  },
  {
    id: "controller",
    h: "2. Data controller",
    body: [
      "OTTv is the data controller for personal data collected through ottv.org and the OTTv IPTV service. You can reach the data controller at Help@ottv.org for any privacy-related question, request or complaint.",
    ],
  },
  {
    id: "what-we-collect",
    h: "3. What data we collect (and why)",
    body: [
      "We collect only the categories of data shown in the table above. We do not collect special-category data (race, religion, biometrics, health). We do not collect data from children — OTTv is sold to adults only.",
      "We do not run third-party advertising pixels (no Meta Pixel, no TikTok Pixel, no LinkedIn Insight). The site uses lightweight first-party analytics to count page visits and identify broken pages — IPs are truncated and no cross-site tracking is performed.",
    ],
  },
  {
    id: "legal-bases",
    h: "4. Legal bases for processing (GDPR / UK GDPR)",
    body: [
      "Performance of contract — to provide the IPTV subscription you bought, send the M3U link and EPG, and honour the 7-day money-back guarantee.",
      "Legitimate interest — to secure our service against abuse and fraud, to keep technical logs short, and to improve support quality.",
      "Consent — for the newsletter and for any optional cookies; revocable at any time with no effect on the subscription itself.",
      "Legal obligation — to keep transactional records that tax and accounting law requires us to retain.",
    ],
  },
  {
    id: "sharing",
    h: "5. Who we share data with",
    body: [
      "We share the minimum data required, with vetted third parties acting as data processors on our instructions. Categories of recipients include: PCI-DSS-compliant payment processors, the email service that delivers the M3U link and receipts, the WhatsApp Business platform that handles support, and infrastructure providers (hosting, DNS, CDN).",
      "We do not share subscriber data with advertisers, data brokers, or upstream IPTV providers. Where a vendor is located outside the UK / EEA, we rely on Standard Contractual Clauses or equivalent safeguards.",
    ],
  },
  {
    id: "cookies",
    h: "6. Cookies & tracking",
    body: [
      "OTTv uses a small number of strictly-necessary cookies to keep the checkout secure and your session active. Optional first-party analytics cookies (anonymous) help us spot broken pages — you can decline these in the cookie banner without losing access to anything on the site.",
      "We do not use third-party advertising cookies and we do not allow advertisers to drop pixels on ottv.org.",
    ],
  },
  {
    id: "retention",
    h: "7. How long we keep your data",
    body: [
      "Retention periods are listed in the table above. As a general principle, OTTv keeps personal data only as long as it is needed for the purpose it was collected for, plus any minimum period required by law (typically 6–7 years for tax records on completed transactions).",
    ],
  },
  {
    id: "security",
    h: "8. How we secure your data",
    body: [
      "All traffic to ottv.org is served over TLS. Card data flows directly to PCI-DSS-compliant processors and never to our servers. Internal access to subscriber records is restricted to support and engineering staff under named accounts with audit logging. Backups are encrypted at rest and rotated.",
    ],
  },
  {
    id: "rights",
    h: "9. Your privacy rights",
    body: [
      "Depending on your jurisdiction, you have the right to: access the personal data we hold about you; correct inaccurate data; delete your data (the “right to be forgotten”); restrict or object to processing; receive your data in a portable format; withdraw consent for newsletter or analytics cookies; and lodge a complaint with your data protection authority.",
      "California residents have additional rights under the CCPA / CPRA: to know what categories of personal data we collect, to delete personal data, to opt out of any sale or share of personal data (we do neither), and to non-discrimination for exercising these rights.",
      "To exercise any right, email Help@ottv.org from the address on your subscription. We respond within 30 days.",
    ],
  },
  {
    id: "international",
    h: "10. International data transfers",
    body: [
      "OTTv operates globally. Personal data may be processed in the United Kingdom, the European Economic Area, the United States, or elsewhere subject to appropriate safeguards. Where data leaves the UK / EEA, we use Standard Contractual Clauses or rely on the recipient’s adequacy status.",
    ],
  },
  {
    id: "children",
    h: "11. Children",
    body: [
      "OTTv is intended for adults (18+). We do not knowingly collect personal data from children. If you believe a child has provided personal data to OTTv, contact Help@ottv.org and we will delete it promptly.",
    ],
  },
  {
    id: "changes",
    h: "12. Changes to this Privacy Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in the service, our processors, or applicable law. The current version is always published at ottv.org/privacy with a “Last updated” date. Material changes will be highlighted.",
    ],
  },
  {
    id: "contact",
    h: "13. Privacy contact",
    body: [
      "Privacy questions, data subject requests, complaints and breach notifications: Help@ottv.org. For urgent issues, message us on WhatsApp — average reply under 4 minutes during waking hours.",
    ],
  },
];

export default function PrivacyPage() {
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
              <span className="text-white">Privacy</span>
            </nav>

            <p className="eyebrow mb-4">Legal</p>
            <h1 className="text-4xl sm:text-5xl text-white">
              OTTv Privacy Policy
            </h1>
            <p className="mt-6 text-base md:text-lg text-[#eaecef] leading-relaxed">
              <span className="text-white font-semibold">
                OTTv collects only the data needed to deliver your IPTV
                subscription.
              </span>{" "}
              Card details never touch our servers, we never sell subscriber
              data, and you can request access, correction or deletion at any
              time under GDPR, UK GDPR and CCPA.
            </p>
            <p className="mt-4 text-sm text-[#929aa5]">
              Last updated: 2 May 2026
            </p>
          </div>
        </section>

        {/* Privacy promises — boosts AEO/AIO extraction */}
        <section className="border-b border-[#2b3139] bg-[#1e2329]">
          <div className="max-w-3xl mx-auto px-5 lg:px-8 py-12">
            <h2 className="text-sm font-semibold text-[#fcd535] tracking-wider uppercase mb-6">
              Our 4 privacy promises
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {promises.map((p, i) => (
                <div
                  key={p.head}
                  className="bg-[#0b0e11] border border-[#2b3139] rounded-lg p-5"
                >
                  <p className="text-xs font-bold text-[#fcd535] font-num tracking-wider mb-2">
                    0{i + 1}
                  </p>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {p.head}
                  </h3>
                  <p className="text-sm text-[#929aa5] leading-relaxed">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data we collect — table */}
        <section className="border-b border-[#2b3139]">
          <div className="max-w-3xl mx-auto px-5 lg:px-8 py-14">
            <p className="eyebrow mb-3">What & why</p>
            <h2 className="text-2xl md:text-3xl text-white mb-6">
              Exactly what data we collect.
            </h2>
            <div className="overflow-x-auto -mx-5 lg:mx-0 px-5 lg:px-0">
              <table className="w-full text-sm border border-[#2b3139] rounded-lg overflow-hidden min-w-[640px]">
                <thead className="bg-[#1e2329] text-white text-left">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Category</th>
                    <th className="px-4 py-3 font-semibold">Fields</th>
                    <th className="px-4 py-3 font-semibold">Why</th>
                    <th className="px-4 py-3 font-semibold">Retention</th>
                  </tr>
                </thead>
                <tbody className="text-[#eaecef]">
                  {dataTable.map((row, i) => (
                    <tr
                      key={row.cat}
                      className={
                        i % 2 === 0 ? "bg-[#0b0e11]" : "bg-[#11151b]"
                      }
                    >
                      <td className="px-4 py-3 font-semibold text-white align-top">
                        {row.cat}
                      </td>
                      <td className="px-4 py-3 align-top text-[#929aa5]">
                        {row.fields}
                      </td>
                      <td className="px-4 py-3 align-top">{row.why}</td>
                      <td className="px-4 py-3 align-top text-[#929aa5]">
                        {row.keep}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
                Want to access, correct or delete your data?
              </h2>
              <p className="text-sm text-[#929aa5] leading-relaxed">
                Email{" "}
                <a
                  href="mailto:Help@ottv.org"
                  className="text-[#fcd535] hover:underline"
                >
                  Help@ottv.org
                </a>{" "}
                from the address on your subscription and we&rsquo;ll respond
                within 30 days. See also our{" "}
                <Link href="/terms" className="text-[#fcd535] hover:underline">
                  Terms
                </Link>{" "}
                and{" "}
                <Link
                  href="/disclaimer"
                  className="text-[#fcd535] hover:underline"
                >
                  Disclaimer
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
