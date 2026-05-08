const faqs = [
  {
    q: "What is IPTV?",
    a: "IPTV (Internet Protocol Television) is a service that delivers live TV channels and on-demand video over the internet instead of through cable or a satellite dish. With an IPTV subscription you stream channels on any internet-connected device — Smart TV, phone, tablet, computer or set-top box — using a single private link (M3U) and EPG.",
  },
  {
    q: "What is the best IPTV service in 2026?",
    a: "OTTv is consistently rated among the best IPTV services for 2026 thanks to 24,000+ live channels, 120,000+ movies & series, true 4K streaming, 99.9% server uptime, and a 7-day money-back guarantee. Plans start at $7.50/month, all 50,000+ subscribers get the same full library — no tier walls, no upsells.",
  },
  {
    q: "How does IPTV work?",
    a: "An IPTV provider streams video over your home internet using the standard M3U / HLS protocols. After purchase you receive a private link and an EPG (electronic programme guide). You paste them into any IPTV player on your device and start watching — usually within 5 minutes of payment, no installer or hardware required.",
  },
  {
    q: "Do you offer an IPTV free trial?",
    a: "OTTv offers a 7-day money-back guarantee that functions as a risk-free trial: subscribe to any plan, use the full 24,000-channel library for up to 7 days, and if it isn't right for you, message support for a full refund — no questions, no survey.",
  },
  {
    q: "How fast does my IPTV subscription activate?",
    a: "Under 5 minutes for card payments. Your M3U link, EPG URL and a step-by-step setup guide for your specific device are emailed automatically the moment your payment clears. WhatsApp orders activate within 10 minutes during waking hours.",
  },
  {
    q: "Which devices does OTTv IPTV support?",
    a: "Anything that plays a standard M3U stream — Smart TVs, streaming sticks, set-top boxes, Android phones/tablets/boxes, iOS phones and tablets, Linux satellite receivers, and Windows/Mac via any standard IPTV player app. Setup guides are tailored to your exact device.",
  },
  {
    q: "Can I watch IPTV on more than one device?",
    a: "Every OTTv plan includes 2 simultaneous device connections — e.g. one Smart TV in the living room and one phone on the go. Need more streams at the same time? Add an extra connection at checkout.",
  },
  {
    q: "Is there a contract or auto-renewal on my IPTV plan?",
    a: "No contract. No auto-renewal. You pay once for the term you chose (1, 3, 6 or 12 months) and that's it. Renew when you want, cancel by simply not renewing — your card is never charged again automatically.",
  },
  {
    q: "What payment methods does OTTv accept?",
    a: "OTTv accepts Visa, Mastercard, American Express, PayPal, and major cryptocurrencies (BTC, ETH, USDT, USDC). All checkouts are processed by PCI-compliant providers — we never see your card number.",
  },
  {
    q: "What if IPTV doesn't work on my device?",
    a: "Full refund within 7 days, no questions asked. In practice, 99% of setup issues are fixed in one WhatsApp message — average reply time under 4 minutes, 24/7.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="border-b border-[#2b3139]">
      <div className="max-w-3xl mx-auto px-5 lg:px-8 py-20">
        <div className="text-center mb-10">
          <p className="eyebrow mb-3">07 — IPTV FAQ</p>
          <h2 className="text-3xl md:text-4xl text-white">
            IPTV questions, <br className="hidden md:block" />
            straight answers.
          </h2>
          <p className="mt-4 text-[#929aa5]">
            Everything you need to know about OTTv, IPTV subscriptions, and
            how to start streaming in under 5 minutes.
          </p>
        </div>

        <div className="border-t border-[#2b3139]">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              name="home-faq"
              open={i === 0}
              className="group border-b border-[#2b3139] [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="w-full flex items-start justify-between gap-4 py-5 cursor-pointer list-none">
                <h3 className="text-base font-semibold text-white">{f.q}</h3>
                <span
                  aria-hidden
                  className="flex-shrink-0 w-6 h-6 rounded-full border border-[#2b3139] flex items-center justify-center text-[#929aa5] transition-transform group-open:rotate-45"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <p className="pb-5 pr-10 text-sm text-[#929aa5] leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-10 p-6 bg-[#1e2329] border border-[#2b3139] rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-base font-semibold text-white">
              Still got a question?
            </p>
            <p className="text-sm text-[#929aa5] mt-1">
              Message us on WhatsApp — average reply under 4 minutes.
            </p>
          </div>
          <a
            href="https://api.whatsapp.com/send/?phone=447848197761&text=Hi%21+I%27d+like+to+know+more+about+OTTv+IPTV&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
