const steps = [
  {
    n: "01",
    title: "Pick an IPTV plan",
    desc: "Choose 1, 3, 6 or 12 months. Same 24,000-channel library on every plan — the longer the term, the lower the monthly.",
  },
  {
    n: "02",
    title: "Pay securely",
    desc: "Visa, Mastercard, AMEX, PayPal or crypto. PCI-compliant checkout — your card number never touches our servers.",
  },
  {
    n: "03",
    title: "Stream IPTV in 5 minutes",
    desc: "M3U link, EPG and a step-by-step setup guide for your exact device land in your inbox instantly. Paste, play, done.",
  },
];

import SectionNudge from "./SectionNudge";

export default function Steps() {
  return (
    <section id="how-it-works" className="border-b border-[#2b3139] bg-[#0b0e11]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-3">04 — How it works</p>
          <h2 className="text-3xl md:text-4xl text-white">
            How to get IPTV in <br className="hidden md:block" />
            under <span className="text-[#fcd535]">5 minutes</span>.
          </h2>
          <p className="mt-5 text-[#929aa5]">
            Three steps from checkout to your first 4K stream — no installer,
            no waiting list, no hardware to ship.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div
              key={s.n}
              className="bg-[#1e2329] border border-[#2b3139] rounded-xl p-7"
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-bold text-[#fcd535] font-num leading-none">
                  {s.n}
                </span>
                <span className="h-px flex-1 bg-[#2b3139]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-[#929aa5] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <SectionNudge href="#pricing" label="Next: pick your plan" />
      </div>
    </section>
  );
}
