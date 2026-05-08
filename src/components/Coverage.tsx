const regions = [
  "🇬🇧 UK",
  "🇺🇸 USA",
  "🇨🇦 Canada",
  "🇩🇪 Germany",
  "🇫🇷 France",
  "🇮🇹 Italy",
  "🇪🇸 Spain",
  "🇵🇹 Portugal",
  "🇮🇪 Ireland",
  "🇳🇱 Netherlands",
  "🇸🇪 Sweden",
  "🇧🇷 Brazil",
  "🇲🇽 Mexico",
  "🇦🇱 Albania",
  "🇬🇷 Greece",
  "🇷🇴 Romania",
];

export default function Coverage() {
  return (
    <section id="coverage" className="border-b border-[#2b3139]">
      <div className="max-w-5xl mx-auto px-5 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="eyebrow mb-3">03 — IPTV coverage</p>
          <h2 className="text-3xl md:text-4xl text-white">
            Channels from{" "}
            <span className="text-[#fcd535] font-num">50+</span> countries.
          </h2>
          <p className="mt-5 text-[#929aa5]">
            Local sports leagues, regional news, kids&rsquo; entertainment, and
            the full cinema library — wherever you are. One IPTV subscription,
            every market.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
          {regions.map((r) => (
            <span
              key={r}
              className="px-3 py-1.5 text-sm bg-[#1e2329] border border-[#2b3139] rounded-md text-[#eaecef]"
            >
              {r}
            </span>
          ))}
          <span className="px-3 py-1.5 text-sm text-[#929aa5]">+ 34 more</span>
        </div>

        <div className="mt-10 max-w-2xl mx-auto p-5 bg-[#1e2329] border border-[#2b3139] rounded-xl">
          <div className="flex items-start gap-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fcd535"
              strokeWidth="2"
              className="flex-shrink-0 mt-0.5"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" strokeLinecap="round" />
            </svg>
            <div>
              <p className="text-sm font-semibold text-white mb-1">
                Updated weekly
              </p>
              <p className="text-sm text-[#929aa5]">
                New channels and fresh on-demand titles added every week. EPG
                stays accurate — no &ldquo;guess what&rsquo;s on&rdquo; moments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
