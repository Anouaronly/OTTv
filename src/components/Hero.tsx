import Link from "next/link";

function StarRow() {
  return (
    <span aria-label="4.8 out of 5 stars" className="tp-stars text-base">
      ★★★★★
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative border-b border-[#2b3139]">
      <div className="relative max-w-4xl mx-auto px-5 lg:px-8 pt-16 md:pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1e2329] border border-[#2b3139] text-xs text-[#eaecef] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0ecb81]" />
          Trusted by 50,000+ IPTV subscribers worldwide
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] text-white">
          The Best IPTV Service.{" "}
          <span className="text-[#fcd535]">24,000+ Channels</span>,{" "}
          <span className="whitespace-nowrap">from $7.50/mo.</span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-[#929aa5] leading-relaxed">
          OTTv is a premium IPTV subscription with 24,000+ live channels and
          120,000+ movies &amp; series in HD &amp; 4K, streamed from 50+
          countries. Activated in under 5 minutes — no contract, cancel
          anytime, 7-day money-back guarantee.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#pricing" className="cta-pill">
            Get IPTV subscription
          </a>
          <Link href="/iptv-free-trial" className="cta-outline">
            Start risk-free trial
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm text-[#929aa5]">
          <div className="flex items-center gap-2">
            <StarRow />
            <span className="text-white font-num font-semibold">4.8</span>
            <span>· 12,400 reviews</span>
          </div>
          <span className="hidden sm:inline w-px h-4 bg-[#2b3139]" />
          <span>7-day money-back</span>
          <span className="hidden sm:inline w-px h-4 bg-[#2b3139]" />
          <span>Instant activation</span>
        </div>

        <a
          href="#what-is-iptv"
          className="mt-14 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#707a8a] hover:text-[#eaecef] transition-colors"
          aria-label="Scroll to: What is IPTV"
        >
          New to IPTV? Start here
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
