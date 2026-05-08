import Image from "next/image";

export default function PromoBanner() {
  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
      <div className="bg-[#131826] border border-white/5 rounded-3xl overflow-hidden grid md:grid-cols-2 gap-0">
        <div className="p-10 md:p-14">
          <p className="eyebrow mb-3">2 Years Deal</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            2 Years <span className="highlight-underline">+ 3 Months FREE</span>{" "}
            IPTV Subscription
          </h2>

          <p className="mt-5 text-[#ff417a] font-semibold">
            This Offer Is For A Limited Time Only!
            <br />
            <span className="text-white/80 font-medium">
              Grab It Before It Is Gone Forever.
            </span>
          </p>

          <p className="mt-5 text-sm text-white/60">
            Grab our hottest-selling 24 months plan at
          </p>

          <div className="mt-3 flex items-baseline gap-3">
            <span className="text-4xl font-extrabold brand-gradient-text">
              $129.00
            </span>
            <span className="text-xl text-white/40 line-through">$179.0</span>
          </div>

          <a href="/checkout-2y" className="cta-primary mt-7">
            Get The Deal Now!
          </a>
        </div>

        <div className="relative min-h-[280px] md:min-h-[420px] bg-gradient-to-br from-[#ff417a]/20 to-[#ffad31]/10">
          <Image
            src="https://helixiptv.com/wp-content/uploads/2022/09/Watching-Tv.webp"
            alt="Couple watching IPTV on TV"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
