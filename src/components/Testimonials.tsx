const reviews = [
  {
    name: "Daniel R.",
    location: "Manchester, UK",
    when: "2 weeks ago",
    body: "Switched from a traditional cable package that was costing me £80/mo. Got the 12-month plan, every weekend football match in 4K, no buffering. Setup on my streaming stick took 6 minutes.",
    rating: 5,
  },
  {
    name: "Marco T.",
    location: "Milan, Italy",
    when: "1 month ago",
    body: "Watching domestic football and European cup nights both midweek now. The EPG is accurate which my last provider couldn't get right. Support replied in under 5 mins when I had a question.",
    rating: 5,
  },
  {
    name: "Aisha K.",
    location: "Toronto, Canada",
    when: "3 weeks ago",
    body: "Family plan covers UK, South-Asian, and Arabic-language channels — that's 3 separate subscriptions we cancelled. Works on the Smart TV, kids' tablets, my phone. Worth every dollar.",
    rating: 5,
  },
  {
    name: "Tomás P.",
    location: "Lisbon, Portugal",
    when: "1 week ago",
    body: "Was skeptical because I've been burned by IPTV resellers before. Tested 6-month plan — 4K is real 4K, sports streams are stable, VOD library is genuinely massive. Renewed for a year.",
    rating: 5,
  },
];

function Stars({ n }: { n: number }) {
  return (
    <span aria-label={`${n} out of 5 stars`} className="text-[#0ecb81]">
      {"★".repeat(n)}
      <span className="text-[#2b3139]">{"★".repeat(5 - n)}</span>
    </span>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="border-b border-[#2b3139] bg-[#0b0e11]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <div className="mb-10">
          <p className="eyebrow mb-3">06 — IPTV reviews</p>
          <h2 className="text-3xl md:text-4xl text-white">
            <span className="font-num text-[#fcd535]">4.8</span> out of 5,
            from{" "}
            <span className="font-num text-white">12,400</span> OTTv IPTV
            subscribers.
          </h2>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            <Stars n={5} />
            <span className="text-[#929aa5]">
              Based on verified subscriber reviews ·{" "}
              <span className="text-white">50,000+</span> active subscribers
              worldwide
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="card-hover bg-[#1e2329] border border-[#2b3139] rounded-xl p-6 flex flex-col"
            >
              <Stars n={r.rating} />
              <p className="mt-4 text-sm text-[#eaecef] leading-relaxed flex-1">
                &ldquo;{r.body}&rdquo;
              </p>
              <div className="mt-5 pt-4 border-t border-[#2b3139]">
                <p className="text-sm font-semibold text-white">{r.name}</p>
                <p className="text-xs text-[#929aa5] mt-0.5">
                  {r.location} · {r.when}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
