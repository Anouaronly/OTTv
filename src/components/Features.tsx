const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 6h18M3 12h18M3 18h12"
          stroke="#fcd535"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Every major sport, live",
    desc: "Domestic and international football, basketball, motorsport, combat sports and the European cup nights — all in HD and 4K.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="4"
          width="20"
          height="14"
          rx="2"
          stroke="#fcd535"
          strokeWidth="2"
        />
        <path
          d="M8 22h8M12 18v4"
          stroke="#fcd535"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Watch on any device",
    desc: "Smart TVs, streaming sticks, mobiles, tablets, set-top boxes and computers — anything that plays a standard M3U stream. We provide the link and EPG.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
          stroke="#fcd535"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Activated in 5 minutes",
    desc: "Pay, get your credentials by email, paste them into your IPTV app. Up and running the same evening.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
          stroke="#fcd535"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Real humans on WhatsApp",
    desc: "Stuck on setup? Message us — average reply under 4 minutes, 24/7. Most issues fixed on the first message.",
  },
];

export default function Features() {
  return (
    <section id="why-ottv" className="border-b border-[#2b3139] bg-[#0b0e11]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
          <div className="lg:sticky lg:top-24">
            <p className="eyebrow mb-3">02 — Why OTTv</p>
            <h2 className="text-3xl md:text-4xl text-white">
              Why OTTv is the best <br className="hidden md:block" />
              IPTV service in 2026.
            </h2>
            <p className="mt-5 text-[#929aa5]">
              Most IPTV providers nickel-and-dime you with channel packs,
              freeze mid-match, or vanish after payment. OTTv ships every
              channel, every match and the full VOD library on every plan —
              no upsells, no buffering, real humans on support.
            </p>
            <a href="#pricing" className="cta-primary mt-7">
              See IPTV plans
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="card-hover bg-[#1e2329] border border-[#2b3139] rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-[#2b3139] flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="text-base font-semibold mb-2 text-white">
                  {f.title}
                </h3>
                <p className="text-sm text-[#929aa5] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
