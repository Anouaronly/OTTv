import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "IPTV FAQ 2026 | OTTv — What Is IPTV, Best IPTV Service, Free Trial & More",
  description:
    "Every answer about IPTV in one place: what IPTV is, how it works, the best IPTV service in 2026, IPTV free trials, IPTV subscription pricing, devices, payment, refunds and setup. Updated for OTTv subscribers.",
  alternates: { canonical: "/faq" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.ottv.org/faq",
    siteName: "OTTv",
    title: "IPTV FAQ — Every Answer About OTTv & IPTV in 2026",
    description:
      "What is IPTV? Is OTTv the best IPTV service in 2026? IPTV free trial, devices, pricing, refunds — answered for IPTV subscribers worldwide.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV FAQ — OTTv",
    description:
      "What is IPTV? Best IPTV service 2026? Free trial? Devices? Pricing? Every answer in one place.",
  },
};

// FAQ entries grouped by topic. Questions are phrased as users
// type them into search to maximize AI Overviews / Perplexity / ChatGPT
// passage matches against the rendered HTML.
const faqGroups = [
  {
    id: "basics",
    h: "IPTV basics",
    sub: "Plain-English answers for new IPTV viewers.",
    items: [
      {
        q: "What is IPTV?",
        a: "IPTV (Internet Protocol Television) is a service that delivers live TV channels and on-demand video over the public internet instead of through cable wires or a satellite dish. With an IPTV subscription you stream channels on any internet-connected device using a single private link (M3U) and an EPG (electronic program guide).",
      },
      {
        q: "How does IPTV work?",
        a: "An IPTV provider streams video using the standard M3U / HLS protocols over your home internet connection. After purchase you receive a private M3U link and EPG URL — paste them into any IPTV player on your Smart TV, phone, tablet or set-top box and start watching, usually within 5 minutes of payment.",
      },
      {
        q: "What is the difference between IPTV and cable or satellite?",
        a: "Cable and satellite send a single broadcast signal to a fixed box in your home. IPTV delivers each stream over the internet to any device, on demand, anywhere. That removes the box, the contract, the regional channel restriction and most of the cost — a typical IPTV subscription is 70–90% cheaper than cable for a far larger channel library.",
      },
      {
        q: "Is IPTV legal?",
        a: "Receiving content you have the legal right to view is legal in most countries. Local copyright, broadcasting and circumvention laws vary, so subscribers are responsible for ensuring they are entitled to access the channels and titles they choose to stream. See the OTTv Disclaimer for full details on user responsibility and jurisdiction.",
      },
      {
        q: "What do I need to start watching IPTV?",
        a: "Three things: (1) any internet-connected device — Smart TV, streaming stick, set-top box, phone, tablet or computer; (2) a stable broadband connection — 15 Mbps for HD, 25 Mbps for 4K; (3) an IPTV subscription that gives you an M3U link and EPG. OTTv emails all three the moment payment clears.",
      },
    ],
  },
  {
    id: "ottv",
    h: "About OTTv",
    sub: "Why OTTv is the best IPTV service in 2026.",
    items: [
      {
        q: "What is OTTv?",
        a: "OTTv is a premium IPTV service used by 50,000+ subscribers in 50+ countries. It delivers 24,000+ live channels and 120,000+ movies & series in HD and 4K through a single subscription, with a 7-day money-back guarantee on every plan.",
      },
      {
        q: "Is OTTv the best IPTV service in 2026?",
        a: "OTTv is consistently rated among the best IPTV services for 2026 thanks to 24,000+ live channels, 120,000+ movies & series, true 4K streaming where the upstream supports it, 99.9% server uptime and a 7-day money-back guarantee. Plans start at $7.50/month on the 12-month plan.",
      },
      {
        q: "How many IPTV channels does OTTv have?",
        a: "OTTv subscribers get access to 24,000+ live IPTV channels covering news, sports, entertainment, kids, lifestyle, music and movies, plus 120,000+ on-demand titles updated weekly.",
      },
      {
        q: "Which countries does OTTv cover?",
        a: "OTTv aggregates feeds from 50+ countries — including the United Kingdom, United States, Canada, Germany, France, Spain, Italy, Portugal, Netherlands, Brazil, Mexico, Sweden, Greece, Romania, Albania and many more — so subscribers can watch local-language content from wherever they live.",
      },
      {
        q: "Does OTTv work outside my country?",
        a: "Yes. OTTv is sold to subscribers in 50+ countries and the M3U link works on any device with a stable internet connection. Upstream provider availability for some specific channels can vary by region — message support before purchase if a specific channel is non-negotiable for you.",
      },
    ],
  },
  {
    id: "trial",
    h: "Free trial & money-back guarantee",
    sub: "How the OTTv risk-free 7-day window works.",
    items: [
      {
        q: "Do you offer an IPTV free trial?",
        a: "OTTv offers a 7-day money-back guarantee on every paid plan that functions as a risk-free trial: subscribe to any plan, use the full 24,000-channel library on every device you own, and if it isn't right for you, request a full refund within 7 days — no questions asked.",
      },
      {
        q: "Why isn't there a 24-hour free IPTV trial without payment?",
        a: "24-hour 'free' IPTV trials are usually demo feeds — a handful of channels at low bitrate to upsell you. OTTv flips the model: you pay for a real month upfront ($16), get the full 24,000-channel library at full quality for 7 days, and refund 100% if it underdelivers. You evaluate the actual service, not a teaser.",
      },
      {
        q: "How do I claim the IPTV free trial refund?",
        a: "Email Help@ottv.org from the address on your subscription within 7 days of activation, or message support on WhatsApp. State that you want to refund under the 7-day guarantee. We refund to the original payment method — usually the same day for cards and PayPal.",
      },
      {
        q: "Can I claim a refund after 7 days?",
        a: "After the 7-day window the subscription is non-refundable. You're welcome to not renew at the end of your term — there's no auto-renewal, so the subscription simply expires.",
      },
    ],
  },
  {
    id: "pricing",
    h: "Pricing & plans",
    sub: "How OTTv subscriptions are priced.",
    items: [
      {
        q: "How much does an OTTv IPTV subscription cost?",
        a: "OTTv plans are: 1 month at $16, 3 months at $39 ($13/mo), 6 months at $60 ($10/mo), and 12 months at $90 ($7.50/mo). Every plan unlocks the full 24,000-channel library and the full 120,000-title on-demand catalogue — there are no upsells inside.",
      },
      {
        q: "Why is the 12-month IPTV plan cheaper?",
        a: "Longer terms reduce processing, fraud and support overhead per subscriber, and we pass the saving back. The 12-month plan at $90 ($7.50/mo) is OTTv's best-value IPTV subscription — most subscribers choose it after the first 3-month renewal.",
      },
      {
        q: "Is there a contract or auto-renewal on my IPTV plan?",
        a: "No contract, no auto-renewal. You pay once for the term you choose (1, 3, 6 or 12 months). Renew when you want, cancel by simply not renewing — your card is never charged automatically.",
      },
      {
        q: "What payment methods does OTTv accept?",
        a: "OTTv accepts Visa, Mastercard, American Express, PayPal and major cryptocurrencies (BTC, ETH, USDT, USDC). All card and PayPal checkouts are PCI-compliant — your full card number never touches OTTv servers.",
      },
    ],
  },
  {
    id: "setup",
    h: "Activation & setup",
    sub: "From checkout to first 4K stream in under 5 minutes.",
    items: [
      {
        q: "How fast does my IPTV subscription activate?",
        a: "Under 5 minutes for card and PayPal payments. Your M3U link, EPG URL and a setup guide for your specific device are emailed automatically the moment payment clears. WhatsApp and crypto orders activate within 10 minutes during waking hours.",
      },
      {
        q: "How do I install IPTV on my Smart TV?",
        a: "Install any standard IPTV player from your TV's app store, paste the M3U link and EPG URL into its settings, save, and your full channel list and program guide load automatically. The setup email contains a step-by-step guide for your exact TV brand.",
      },
      {
        q: "Can I use OTTv on more than one device?",
        a: "One OTTv subscription is licensed for one household. The M3U link can be loaded on any number of devices in that household but typically only one stream at a time runs reliably; subscribers who want simultaneous streams can add an extra connection at checkout.",
      },
      {
        q: "Do I need a VPN to watch IPTV?",
        a: "Most subscribers don't. OTTv works on a standard home connection without a VPN. Some subscribers use a VPN for general privacy or when their ISP throttles streaming — that's a personal choice, not a service requirement.",
      },
    ],
  },
  {
    id: "devices",
    h: "Devices & compatibility",
    sub: "Watch OTTv on every screen you already own.",
    items: [
      {
        q: "Which devices does OTTv IPTV support?",
        a: "Anything that plays a standard M3U stream — Smart TVs (most modern models from 2018+), streaming sticks, set-top boxes, Android phones/tablets/boxes, iOS phones and tablets, Linux satellite receivers, and Windows/Mac via any standard IPTV player app.",
      },
      {
        q: "Does OTTv work on Smart TVs without an extra box?",
        a: "Yes — most Smart TVs from 2018 onwards have an app store with a free IPTV player. Install it once, paste the M3U link, done. No HDMI box, no extra remote.",
      },
      {
        q: "What internet speed do I need for IPTV?",
        a: "Approximate guidance: 10–15 Mbps for HD, 25 Mbps for 4K, 5 Mbps for SD or mobile. A wired Ethernet connection beats Wi-Fi for stability when streaming live sports.",
      },
      {
        q: "Why is my IPTV stream buffering?",
        a: "Buffering is almost always one of: insufficient internet speed, congested Wi-Fi, an old or overloaded router, or an upstream incident on a specific channel. Run a speed test, switch to wired Ethernet if possible, and if a specific channel still buffers contact OTTv support — we may have an alternative feed.",
      },
    ],
  },
  {
    id: "support",
    h: "Support & reliability",
    sub: "Real humans, fast answers.",
    items: [
      {
        q: "How do I contact OTTv support?",
        a: "WhatsApp on +44 7848 197761 or email Help@ottv.org. WhatsApp is fastest — average reply under 4 minutes during waking hours, 24/7 cover overnight.",
      },
      {
        q: "What if a channel stops working?",
        a: "Message support with the channel name and country and we'll route you to a backup feed or replace the dead URL within minutes. Channel issues that affect more than one subscriber are usually fixed at the upstream layer the same day.",
      },
      {
        q: "What is OTTv's uptime?",
        a: "OTTv targets and historically achieves 99.9% server uptime. The IPTV service runs across multiple redundant servers so a regional issue with one route automatically fails over.",
      },
    ],
  },
];

const PAGE_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://www.ottv.org/faq",
  name: "OTTv IPTV FAQ",
  description:
    "Every answer about IPTV: what it is, how it works, OTTv pricing, free trial, devices, payment and refunds.",
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
      name: "FAQ",
      item: "https://www.ottv.org/faq",
    },
  ],
};

export default function FaqPage() {
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
              <span className="text-white">FAQ</span>
            </nav>

            <p className="eyebrow mb-4">IPTV FAQ — 2026</p>
            <h1 className="text-4xl sm:text-5xl text-white">
              IPTV, answered.
            </h1>
            <p className="mt-6 text-base md:text-lg text-[#eaecef] leading-relaxed">
              <span className="text-white font-semibold">
                Every common question about IPTV and the OTTv IPTV service in
                one place
              </span>{" "}
              — what IPTV is, how it works, the best IPTV plan for you, free
              trial mechanics, devices, setup, payment and refunds.
            </p>
            <p className="mt-4 text-sm text-[#929aa5]">
              Last updated: 2 May 2026 ·{" "}
              <a
                href="https://api.whatsapp.com/send/?phone=447848197761&text=Hi%21+I%27d+like+to+know+more+about+OTTv+IPTV&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#fcd535] hover:underline"
              >
                Don&rsquo;t see your question? Ask on WhatsApp
              </a>
            </p>
          </div>
        </section>

        {/* Quick links — TOC by category */}
        <section className="border-b border-[#2b3139] bg-[#1e2329]">
          <div className="max-w-3xl mx-auto px-5 lg:px-8 py-10">
            <h2 className="text-sm font-semibold text-[#fcd535] tracking-wider uppercase mb-4">
              Jump to a topic
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              {faqGroups.map((g, i) => (
                <a
                  key={g.id}
                  href={`#${g.id}`}
                  className="flex items-baseline gap-3 text-[#eaecef] hover:text-[#fcd535] transition-colors"
                >
                  <span className="text-[#fcd535] font-num font-bold">
                    0{i + 1}
                  </span>
                  <span>
                    <span className="font-semibold text-white">{g.h}</span>
                    <span className="block text-xs text-[#929aa5] mt-0.5">
                      {g.sub}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Grouped FAQ */}
        <section className="border-b border-[#2b3139]">
          <div className="max-w-3xl mx-auto px-5 lg:px-8 py-16 space-y-16">
            {faqGroups.map((g, gi) => (
              <div key={g.id} id={g.id} className="scroll-mt-24">
                <p className="text-xs font-bold text-[#fcd535] font-num tracking-wider mb-2">
                  0{gi + 1}
                </p>
                <h2 className="text-2xl md:text-3xl text-white mb-2 font-semibold">
                  {g.h}
                </h2>
                <p className="text-[#929aa5] mb-6">{g.sub}</p>

                <div className="divide-y divide-[#2b3139] border border-[#2b3139] rounded-xl bg-[#1e2329]/50">
                  {g.items.map((it) => (
                    <details
                      key={it.q}
                      className="group p-5 [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                        <h3 className="text-[15px] md:text-base font-semibold text-white leading-snug">
                          {it.q}
                        </h3>
                        <span
                          aria-hidden
                          className="text-[#fcd535] text-xl leading-none mt-0.5 transition-transform group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-[15px] text-[#eaecef] leading-relaxed">
                        {it.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Conversion CTA */}
        <section className="border-b border-[#2b3139]">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
            <div className="bg-[#1e2329] border border-[#2b3139] rounded-2xl p-10 md:p-14 text-center">
              <h2 className="text-3xl md:text-4xl text-white max-w-2xl mx-auto">
                Got the answer you needed? <br className="hidden md:block" />
                Start your 7-day risk-free IPTV trial.
              </h2>
              <p className="mt-5 max-w-xl mx-auto text-[#929aa5]">
                Full 24,000-channel library, every device, every market — and
                a 100% refund inside 7 days if it isn&rsquo;t the best IPTV
                service you&rsquo;ve used.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/iptv-subscription" className="cta-pill">
                  See IPTV plans
                </Link>
                <Link href="/iptv-free-trial" className="cta-outline">
                  How the trial works
                </Link>
              </div>
              <p className="mt-6 text-xs text-[#929aa5]">
                Still unsure? Message us on{" "}
                <a
                  href="https://api.whatsapp.com/send/?phone=447848197761&text=Hi%21+I%27d+like+to+know+more+about+OTTv+IPTV&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fcd535] hover:underline"
                >
                  WhatsApp
                </a>{" "}
                — average reply under 4 minutes.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
