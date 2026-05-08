const stats = [
  { value: "24,000+", label: "Live IPTV channels" },
  { value: "120,000+", label: "Movies & series" },
  { value: "99.9%", label: "IPTV server uptime" },
  { value: "50,000+", label: "Active subscribers" },
];

export default function StatsBand() {
  return (
    <section className="border-b border-[#2b3139] bg-[#0b0e11]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl md:text-4xl font-bold text-[#fcd535] font-num leading-none">
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
  );
}
