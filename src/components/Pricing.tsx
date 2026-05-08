import PayButton from "./PayButton";

const WA_PHONE = "447848197761";
function waUrl(text: string) {
  const encoded = encodeURIComponent(text)
    .replace(/%20/g, "+")
    .replace(/!/g, "%21")
    .replace(/'/g, "%27")
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29");
  return `https://api.whatsapp.com/send/?phone=${WA_PHONE}&text=${encoded}&type=phone_number&app_absent=0`;
}

type Plan = {
  label: string;
  price: string;
  oldPrice?: string;
  monthly: string;
  href: string;
  featured?: boolean;
  badge?: string;
  saveBadge?: string;
  extraFeature?: string;
};

const plans: Plan[] = [
  {
    label: "1 Month",
    price: "$16",
    monthly: "Billed monthly",
    href: "https://flujipay.com/payment-link/e1JWrpo7MBOGuaq0axpgtaxxIBTcFRoj",
  },
  {
    label: "3 Months",
    price: "$39",
    monthly: "$13.00/mo · billed quarterly",
    href: "https://flujipay.com/payment-link/npi8bNFKa60nGloEpZuBguh6tBFSueUN",
  },
  {
    label: "6 Months",
    price: "$60",
    monthly: "$10.00/mo · billed semi-annually",
    href: "https://flujipay.com/payment-link/DkNU7UJ2dliHkpGRF7HHhW3JJajmwi3m",
    badge: "MOST POPULAR",
  },
  {
    label: "12 Months",
    price: "$90",
    oldPrice: "$192",
    monthly: "$7.50/mo · billed yearly",
    href: "https://flujipay.com/payment-link/y59giDeQUiwnLBXIMYDo4ZRbLBpjeNmG",
    featured: true,
    badge: "BEST VALUE",
    saveBadge: "Save 53%",
    extraFeature: "Priority Support",
  },
];

const baseFeatures = [
  "24,000+ live channels",
  "120,000+ movies & series",
  "HD & 4K streaming quality",
  "Live sports — every major event",
  "99.9% server uptime",
  "2 device connections",
  "24/7 customer support",
  "Instant activation",
];


function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fcd535"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="flex-shrink-0 mt-1"
    >
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="border-b border-[#2b3139] max-w-7xl mx-auto px-5 lg:px-8 py-20 relative"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="eyebrow mb-3">05 — IPTV pricing</p>
        <h2 className="text-3xl md:text-4xl text-white">
          IPTV subscription plans <br className="hidden md:block" />
          from <span className="text-[#fcd535]">$7.50/mo</span>.
        </h2>
        <p className="mt-4 text-[#929aa5]">
          Every OTTv IPTV plan includes the full 24,000-channel library and
          120,000+ movies &amp; series. Longer term, lower monthly. No hidden
          fees, cancel anytime, 7-day money-back guarantee.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
        {plans.map((p) => {
          const planFeatures = p.extraFeature
            ? [...baseFeatures, p.extraFeature]
            : baseFeatures;

          return (
            <div
              key={p.label}
              className={`card-hover relative bg-[#1e2329] border rounded-xl p-6 flex flex-col ${
                p.featured ? "featured-aura" : "border-[#2b3139]"
              }`}
            >
              {p.badge && (
                <span
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-wider px-3 py-1 rounded-md whitespace-nowrap ${
                    p.featured
                      ? "bg-[#fcd535] text-[#181a20]"
                      : "bg-[#2b3139] text-[#fcd535] border border-[#fcd535]/40"
                  }`}
                >
                  {p.badge}
                </span>
              )}

              <p className="text-xs text-[#929aa5] font-semibold tracking-widest mb-4 text-center uppercase">
                {p.label}
              </p>

              <div className="text-center mb-1 flex items-baseline justify-center gap-2 min-h-[3rem]">
                <span className="text-4xl font-bold text-white font-num">
                  {p.price}
                </span>
                {p.oldPrice && (
                  <span className="text-lg text-[#707a8a] line-through font-num">
                    {p.oldPrice}
                  </span>
                )}
              </div>

              <p className="text-center text-xs text-[#929aa5] mb-2 min-h-[1.5em] px-1">
                {p.monthly}
              </p>

              {p.saveBadge ? (
                <p className="text-center mb-4">
                  <span className="inline-block px-2 py-0.5 rounded-md bg-[#0ecb81]/10 text-[#0ecb81] text-[11px] font-bold tracking-wide">
                    {p.saveBadge}
                  </span>
                </p>
              ) : (
                <p className="mb-4 min-h-[1.5em]" />
              )}

              <ul className="border-t border-[#2b3139] pt-5 space-y-2.5 mb-6 flex-1">
                {planFeatures.map((feat) => (
                  <li
                    key={feat}
                    className="text-sm text-[#eaecef] flex items-start gap-2"
                  >
                    <CheckIcon />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-2 mt-auto">
                <PayButton
                  href={p.href}
                  className={`${p.featured ? "cta-primary" : "cta-outline"} w-full`}
                >
                  Pay with card
                </PayButton>
                <a
                  href={waUrl(
                    `Hi! I'd like to subscribe to the ${p.label} plan (${p.price})`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-outline w-full"
                >
                  <WhatsAppIcon />
                  Order via WhatsApp
                </a>
                <p className="text-center text-[11px] text-[#707a8a] pt-1">
                  7-day money-back guarantee
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 flex flex-col items-center gap-4">
        <p className="text-xs uppercase tracking-wider text-[#707a8a] font-semibold">
          Secure checkout
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span
            className="px-2.5 py-1.5 rounded-md bg-white text-[#1a1f71] text-[10.5px] font-black tracking-tight shadow-sm"
            title="Visa"
          >
            VISA
          </span>
          <span
            className="px-2.5 py-1.5 rounded-md bg-white text-[#eb001b] text-[10.5px] font-black tracking-tight shadow-sm"
            title="Mastercard"
          >
            Master<span className="text-[#f79e1b]">card</span>
          </span>
          <span
            className="px-2.5 py-1.5 rounded-md bg-white text-[#006fcf] text-[10.5px] font-black tracking-tight shadow-sm"
            title="American Express"
          >
            AMEX
          </span>
          <span
            className="px-2.5 py-1.5 rounded-md bg-white text-[10.5px] font-black tracking-tight shadow-sm"
            title="PayPal"
          >
            <span className="text-[#003087]">Pay</span>
            <span className="text-[#009cde]">Pal</span>
          </span>
        </div>
      </div>

    </section>
  );
}
