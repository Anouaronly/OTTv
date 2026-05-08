import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact OTTv | IPTV Support — WhatsApp +44 7848 197761",
  description:
    "Contact OTTv IPTV support: WhatsApp +44 7848 197761 (average reply under 4 minutes) or email Help@ottv.org. Real human support, 24/7, for IPTV subscribers worldwide.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: "https://www.ottv.org/contact",
    title: "Contact OTTv — Real-human IPTV Support 24/7",
    description:
      "WhatsApp +44 7848 197761 (under 4 min reply) · Help@ottv.org (12h reply). No bots, no outsourced ticket queue.",
  },
};

const PAGE_LD = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: "https://www.ottv.org/contact",
  name: "Contact OTTv — IPTV Support",
  description:
    "Contact OTTv IPTV support: WhatsApp +44 7848 197761 (avg reply <4 minutes), email Help@ottv.org. 24/7 support, real humans, no bots.",
  isPartOf: {
    "@type": "WebSite",
    name: "OTTv",
    url: "https://www.ottv.org/",
  },
  about: {
    "@type": "Organization",
    name: "OTTv",
    url: "https://www.ottv.org/",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: ["English"],
        telephone: "+44-7848-197761",
        email: "Help@ottv.org",
        areaServed: "Worldwide",
        hoursAvailable: "Mo-Su 00:00-23:59",
      },
      {
        "@type": "ContactPoint",
        contactType: "billing support",
        email: "Help@ottv.org",
        areaServed: "Worldwide",
      },
      {
        "@type": "ContactPoint",
        contactType: "technical support",
        telephone: "+44-7848-197761",
        email: "Help@ottv.org",
        availableLanguage: ["English"],
      },
    ],
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
      name: "Contact",
      item: "https://www.ottv.org/contact",
    },
  ],
};

const channels = [
  {
    title: "WhatsApp (fastest)",
    detail: "+44 7848 197761",
    href: "https://api.whatsapp.com/send/?phone=447848197761&text=Hi%21+I%27d+like+to+know+more+about+OTTv+IPTV&type=phone_number&app_absent=0",
    cta: "Open WhatsApp chat",
    note: "Avg reply under 4 minutes during waking hours · 24/7 cover overnight",
    badge: "FASTEST",
    badgeClass: "bg-[#0ecb81]/15 text-[#0ecb81] border-[#0ecb81]/30",
  },
  {
    title: "Email",
    detail: "Help@ottv.org",
    href: "mailto:Help@ottv.org",
    cta: "Send an email",
    note: "Best for refund requests, billing receipts and longer questions · response within 12 hours",
    badge: "12H REPLY",
    badgeClass: "bg-[#fcd535]/15 text-[#fcd535] border-[#fcd535]/30",
  },
];

const reasonRoutes = [
  {
    head: "I want a refund inside the 7-day window",
    body: "Email Help@ottv.org from the address on your subscription with the words “7-day refund” in the subject line. We refund to the original payment method, usually the same day.",
  },
  {
    head: "A specific channel isn’t working",
    body: "Message WhatsApp with the channel name and country. We’ll route you to a backup feed within minutes — no support ticket queue.",
  },
  {
    head: "I lost my M3U link or activation email",
    body: "Email Help@ottv.org with the address you used at checkout. We’ll re-send the activation email and re-issue the M3U link if needed.",
  },
  {
    head: "Pre-purchase question (channels, devices, country)",
    body: "WhatsApp is fastest. Tell us your country, device and the channels that matter to you and we’ll confirm before you pay.",
  },
  {
    head: "Press, partnership or rights-holder enquiry",
    body: "Email Help@ottv.org with “Press” or “Rights notice” in the subject line. We respond to verified rights notices within 24 hours.",
  },
];

export default function ContactPage() {
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
          <div className="max-w-4xl mx-auto px-5 lg:px-8 pt-16 md:pt-20 pb-14">
            <nav
              aria-label="Breadcrumb"
              className="text-xs text-[#929aa5] mb-6"
            >
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Contact</span>
            </nav>

            <p className="eyebrow mb-4">Contact OTTv</p>
            <h1 className="text-4xl sm:text-5xl text-white">
              Talk to a real human in <span className="text-[#fcd535]">under 4 minutes</span>.
            </h1>
            <p className="mt-6 text-base md:text-lg text-[#eaecef] leading-relaxed max-w-2xl">
              <span className="text-white font-semibold">
                OTTv support is human, fast and 24/7.
              </span>{" "}
              WhatsApp{" "}
              <a
                href="https://api.whatsapp.com/send/?phone=447848197761&text=Hi%21+I%27d+like+to+know+more+about+OTTv+IPTV&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#fcd535] hover:underline"
              >
                +44 7848 197761
              </a>{" "}
              for the fastest reply, or email{" "}
              <a
                href="mailto:Help@ottv.org"
                className="text-[#fcd535] hover:underline"
              >
                Help@ottv.org
              </a>{" "}
              for refunds, receipts and longer questions. No bots, no
              outsourced ticket queue.
            </p>
          </div>
        </section>

        {/* Two-card direct contact */}
        <section className="border-b border-[#2b3139]">
          <div className="max-w-4xl mx-auto px-5 lg:px-8 py-14">
            <div className="grid md:grid-cols-2 gap-4">
              {channels.map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group bg-[#1e2329] border border-[#2b3139] rounded-xl p-7 hover:border-[#fcd535] transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-white">
                      {c.title}
                    </h2>
                    <span
                      className={`text-[10px] tracking-wider font-bold px-2 py-1 rounded border ${c.badgeClass}`}
                    >
                      {c.badge}
                    </span>
                  </div>
                  <p className="text-2xl text-[#fcd535] font-num font-semibold mb-3">
                    {c.detail}
                  </p>
                  <p className="text-sm text-[#929aa5] leading-relaxed mb-5">
                    {c.note}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-white group-hover:text-[#fcd535]">
                    {c.cta}
                    <span aria-hidden>→</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-6 grid sm:grid-cols-3 gap-3 text-xs text-[#929aa5]">
              <div className="bg-[#1e2329] border border-[#2b3139] rounded-lg px-4 py-3 flex items-center gap-2">
                <span className="text-[#0ecb81]">●</span> 24/7 cover, every day
                of the year
              </div>
              <div className="bg-[#1e2329] border border-[#2b3139] rounded-lg px-4 py-3 flex items-center gap-2">
                <span className="text-[#0ecb81]">●</span> Real humans — never a
                chatbot
              </div>
              <div className="bg-[#1e2329] border border-[#2b3139] rounded-lg px-4 py-3 flex items-center gap-2">
                <span className="text-[#0ecb81]">●</span> 50,000+ subscribers
                across 50+ countries
              </div>
            </div>
          </div>
        </section>

        {/* Pick the right channel — AEO friendly */}
        <section className="border-b border-[#2b3139] bg-[#1e2329]">
          <div className="max-w-4xl mx-auto px-5 lg:px-8 py-16">
            <p className="eyebrow mb-3">Pick the right route</p>
            <h2 className="text-2xl md:text-3xl text-white mb-2">
              What&rsquo;s the fastest way to get my issue solved?
            </h2>
            <p className="text-[#929aa5] mb-8 max-w-2xl">
              Pick the row that matches your reason for getting in touch — we
              answer faster when the route is right.
            </p>

            <div className="divide-y divide-[#2b3139] border border-[#2b3139] rounded-xl bg-[#0b0e11]">
              {reasonRoutes.map((r) => (
                <div
                  key={r.head}
                  className="p-5 sm:flex sm:gap-6 sm:items-start"
                >
                  <h3 className="text-[15px] font-semibold text-white sm:w-1/3 mb-1 sm:mb-0 flex-shrink-0">
                    {r.head}
                  </h3>
                  <p className="text-sm text-[#eaecef] leading-relaxed sm:flex-1">
                    {r.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact form */}
        <section className="border-b border-[#2b3139]">
          <div className="max-w-2xl mx-auto px-5 lg:px-8 py-16">
            <p className="eyebrow mb-3">Or write to us here</p>
            <h2 className="text-2xl md:text-3xl text-white mb-2">
              Send a quick message.
            </h2>
            <p className="text-[#929aa5] mb-8">
              Goes straight to{" "}
              <a
                href="mailto:Help@ottv.org"
                className="text-[#fcd535] hover:underline"
              >
                Help@ottv.org
              </a>
              . For anything time-sensitive, WhatsApp is faster.
            </p>

            <ContactForm />
          </div>
        </section>

        {/* FAQ shortcut + final CTA */}
        <section className="border-b border-[#2b3139]">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
            <div className="bg-[#1e2329] border border-[#2b3139] rounded-2xl p-10 md:p-14 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl text-white mb-3">
                  Question that probably has a fast answer?
                </h2>
                <p className="text-[#929aa5] leading-relaxed">
                  29 of the most common IPTV and OTTv questions — from{" "}
                  <em>what is IPTV</em> to{" "}
                  <em>which devices are supported</em> — are answered on the
                  FAQ page.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:justify-end gap-3">
                <Link href="/faq" className="cta-pill">
                  Browse the IPTV FAQ
                </Link>
                <Link href="/iptv-subscription" className="cta-outline">
                  See IPTV plans
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
