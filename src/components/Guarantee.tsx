export default function Guarantee() {
  return (
    <section className="border-b border-[#2b3139] bg-[#0b0e11]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <div className="bg-[#1e2329] border border-[#2b3139] rounded-2xl p-10 md:p-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0ecb81]/10 border border-[#0ecb81]/20 text-xs text-[#0ecb81] font-semibold mb-6">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            7-DAY MONEY-BACK GUARANTEE
          </div>

          <h2 className="text-3xl md:text-4xl text-white max-w-2xl mx-auto">
            Try the best IPTV service <br />
            risk-free for 7 days.
          </h2>

          <p className="mt-5 max-w-xl mx-auto text-[#929aa5]">
            Subscribe to any OTTv IPTV plan and use the full 24,000-channel
            library for a week. If the streams don&rsquo;t hold up, the
            channel list isn&rsquo;t what you wanted, or your device
            won&rsquo;t play nice — message support and we refund every cent.
            No interrogation, no &ldquo;why are you leaving&rdquo; survey.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#pricing" className="cta-pill">
              Get IPTV subscription
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

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl mx-auto pt-8 border-t border-[#2b3139]">
            <div>
              <p className="text-xl font-bold text-white font-num">5 min</p>
              <p className="text-xs text-[#929aa5] mt-1">Avg. setup time</p>
            </div>
            <div>
              <p className="text-xl font-bold text-white font-num">{"<4 min"}</p>
              <p className="text-xs text-[#929aa5] mt-1">Avg. support reply</p>
            </div>
            <div>
              <p className="text-xl font-bold text-white font-num">99.9%</p>
              <p className="text-xs text-[#929aa5] mt-1">Server uptime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
