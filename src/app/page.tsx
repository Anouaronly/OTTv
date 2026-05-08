import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PlatformStrip from "@/components/PlatformStrip";
import StatsBand from "@/components/StatsBand";
import WhatIsIPTV from "@/components/WhatIsIPTV";
import Features from "@/components/Features";
import Coverage from "@/components/Coverage";
import Steps from "@/components/Steps";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Guarantee from "@/components/Guarantee";
import Footer from "@/components/Footer";

const ORG_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OTTv",
  url: "https://www.ottv.org/",
  logo: "https://www.ottv.org/logo.svg",
  description:
    "OTTv is a premium IPTV service offering 24,000+ live channels and 120,000+ movies & series in HD & 4K from $7.50/mo.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["English"],
    telephone: "+44-7848-197761",
    email: "Help@ottv.org",
  },
};

const PRODUCT_LD = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "OTTv IPTV Subscription",
  description:
    "Premium IPTV subscription with 24,000+ live channels, 120,000+ movies & series, HD & 4K streaming, activated in under 5 minutes.",
  brand: { "@type": "Brand", "name": "OTTv" },
  image: "https://www.ottv.org/opengraph-image",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "12400",
    bestRating: "5",
    worstRating: "1",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "7.50",
    highPrice: "16.00",
    offerCount: 4,
    availability: "https://schema.org/InStock",
    url: "https://www.ottv.org/iptv-subscription",
  },
};

const WEBSITE_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "OTTv",
  url: "https://www.ottv.org/",
  publisher: { "@type": "Organization", name: "OTTv" },
};

export default function Home() {
  return (
    <>
      <link rel="canonical" href="https://www.ottv.org/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_LD) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <PlatformStrip />
        <StatsBand />
        <WhatIsIPTV />
        <Features />
        <Coverage />
        <Steps />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Guarantee />
      </main>
      <Footer />
    </>
  );
}
