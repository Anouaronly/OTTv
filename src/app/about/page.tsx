import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About OTTv | Maurisio Torres, Founder of the Best IPTV Service",
  description:
    "Maurisio Torres is the founder of OTTv, a premium IPTV service used by 50,000+ subscribers in 50+ countries. Read why he built OTTv and the principles behind the best IPTV subscription on the market.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    url: "https://www.ottv.org/about",
    siteName: "OTTv",
    title: "About OTTv — Founder Maurisio Torres",
    description:
      "Why Maurisio Torres built OTTv: a premium IPTV service with 24,000+ channels, honest pricing, and real human support.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About OTTv — Founder Maurisio Torres",
    description:
      "The story behind OTTv, the IPTV service trusted by 50,000+ subscribers worldwide.",
  },
};

// JSON-LD: Person + AboutPage. These give Google, AI Overviews, Perplexity
// and ChatGPT a clean entity record they can cite. Person is linked to
// Organization (OTTv) so brand searches surface the founder.
const PERSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Maurisio Torres",
  jobTitle: "Founder & CEO",
  worksFor: {
    "@type": "Organization",
    name: "OTTv",
    url: "https://www.ottv.org/",
  },
  url: "https://www.ottv.org/about",
  description:
    "Maurisio Torres is the founder and CEO of OTTv, a premium IPTV service serving 50,000+ subscribers in 50+ countries.",
  knowsAbout: [
    "IPTV",
    "IPTV streaming",
    "OTT video delivery",
    "Subscription video on demand",
    "Customer experience",
  ],
};

const ABOUT_LD = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: "https://www.ottv.org/about",
  name: "About OTTv — Maurisio Torres",
  about: {
    "@type": "Organization",
    name: "OTTv",
    url: "https://www.ottv.org/",
    founder: {
      "@type": "Person",
      name: "Maurisio Torres",
    },
  },
};

const principles = [
  {
    title: "Honest pricing, always",
    body: "No hidden fees, no auto-renewals, no “premium channel” upsells once you’re inside. Every OTTv subscriber gets the full 24,000-channel library — the only choice is how long you want to keep it.",
  },
  {
    title: "Real humans on support",
    body: "Every WhatsApp message is answered by a person on our team — never a chatbot, never an outsourced ticket queue. Average reply under 4 minutes, 24/7.",
  },
  {
    title: "Privacy by default",
    body: "We never sell, share, or rent subscriber data. Card details never touch our servers — checkout is handled by PCI-compliant processors. Pay with crypto if you want zero PII at all.",
  },
  {
    title: "Show up every day",
    body: "New channels and fresh on-demand titles ship weekly. EPGs are checked, dead streams are replaced before subscribers notice. Reliability is the product.",
  },
];

const founderStats = [
  { value: "8+", label: "Years in streaming" },
  { value: "50,000+", label: "Subscribers served" },
  { value: "50+", label: "Countries" },
  { value: "<4 min", label: "Avg. support reply" },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ABOUT_LD) }}
      />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative border-b border-[#2b3139]">
          <div className="max-w-4xl mx-auto px-5 lg:px-8 pt-16 md:pt-24 pb-20 text-center">
            <p className="eyebrow mb-4">About OTTv</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] text-white">
              Hi, I&rsquo;m{" "}
              <span className="text-[#fcd535]">Maurisio Torres</span>.{" "}
              <br className="hidden md:block" />
              I built OTTv.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-[#929aa5] leading-relaxed">
              OTTv is the IPTV service I wished existed when I was paying
              £80/month for a cable package full of channels I never watched.
              Today it serves 50,000+ subscribers in 50+ countries, and every
              decision still goes through one filter: would I recommend this
              to my own family?
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto pt-10 border-t border-[#2b3139]">
              {founderStats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl md:text-3xl font-bold text-[#fcd535] font-num leading-none">
                    {s.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-[#929aa5] font-semibold">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="border-b border-[#2b3139]">
          <div className="max-w-3xl mx-auto px-5 lg:px-8 py-20">
            <p className="eyebrow mb-4">The story</p>
            <h2 className="text-3xl md:text-4xl text-white mb-8">
              Why I started the best IPTV service I could.
            </h2>

            <div className="space-y-5 text-[#eaecef] leading-relaxed">
              <p>
                I&rsquo;ve worked in streaming and broadband for over eight
                years — long enough to see exactly how much margin gets
                squeezed out of regular cable subscribers, and exactly how
                little of that margin reaches the people building or
                supporting the product.
              </p>
              <p>
                The IPTV industry was supposed to fix that. Cheaper streams,
                more choice, no contract. Instead I watched it fill up with
                resellers who took payments and disappeared, providers who
                buried the real channel list behind three upgrade tiers, and
                support queues that took 48 hours to answer a one-line
                question.
              </p>
              <p>
                <span className="text-white font-semibold">
                  OTTv is my answer to that.
                </span>{" "}
                One subscription, 24,000+ live channels, 120,000+ movies and
                series, true 4K where it&rsquo;s available, and a real human
                on WhatsApp inside four minutes if anything breaks. The
                7-day money-back guarantee isn&rsquo;t marketing — it&rsquo;s
                the bar I hold the team to.
              </p>
              <p>
                If you try OTTv and it&rsquo;s not the best IPTV service
                you&rsquo;ve used, I personally want to know about it. My
                inbox is{" "}
                <a
                  href="mailto:Help@ottv.org"
                  className="text-[#fcd535] hover:underline"
                >
                  Help@ottv.org
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="border-b border-[#2b3139]">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="eyebrow mb-3">What we stand for</p>
              <h2 className="text-3xl md:text-4xl text-white">
                Four principles, <br className="hidden md:block" />
                no exceptions.
              </h2>
              <p className="mt-4 text-[#929aa5]">
                These aren&rsquo;t marketing values — they&rsquo;re the rules
                we hire, build and apologise by.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {principles.map((p, i) => (
                <article
                  key={p.title}
                  className="bg-[#1e2329] border border-[#2b3139] rounded-xl p-7"
                >
                  <p className="text-xs font-bold text-[#fcd535] font-num tracking-wider mb-3">
                    0{i + 1}
                  </p>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#929aa5] leading-relaxed">
                    {p.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pull quote */}
        <section className="border-b border-[#2b3139]">
          <div className="max-w-3xl mx-auto px-5 lg:px-8 py-20 text-center">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fcd535"
              strokeWidth="1.5"
              className="mx-auto mb-6 opacity-80"
              aria-hidden
            >
              <path d="M3 21c3 0 7-1 7-8V5H3v8h4c0 4-2 5-4 5v3zm14 0c3 0 7-1 7-8V5h-7v8h4c0 4-2 5-4 5v3z" />
            </svg>
            <blockquote className="text-2xl md:text-3xl text-white leading-snug">
              &ldquo;I refuse to sell anyone an IPTV subscription I
              wouldn&rsquo;t put on my own TV. That&rsquo;s the whole
              business.&rdquo;
            </blockquote>
            <p className="mt-6 text-sm text-[#929aa5]">
              <span className="text-white font-semibold">Maurisio Torres</span>
              {" · "}Founder &amp; CEO, OTTv
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="border-b border-[#2b3139]">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
            <div className="bg-[#1e2329] border border-[#2b3139] rounded-2xl p-10 md:p-14 text-center">
              <h2 className="text-3xl md:text-4xl text-white max-w-2xl mx-auto">
                Ready to see if OTTv lives up <br className="hidden md:block" />
                to the promise?
              </h2>
              <p className="mt-5 max-w-xl mx-auto text-[#929aa5]">
                Try the full 24,000-channel IPTV library risk-free for 7
                days. If it&rsquo;s not the best IPTV service you&rsquo;ve
                used, you get every cent back.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/#pricing" className="cta-pill">
                  See IPTV plans
                </Link>
                <a
                  href="https://api.whatsapp.com/send/?phone=447848197761&text=Hi%21+I%27d+like+to+know+more+about+OTTv+IPTV&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-outline"
                >
                  Message Maurisio on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
