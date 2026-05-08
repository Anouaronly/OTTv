import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ottv.org"),
  title: "Best IPTV Service 2026 | OTTv — 24,000+ Channels from $7.50/mo",
  description:
    "Premium IPTV with 24,000+ live channels & 120,000+ movies in HD/4K. Activated in 5 min. 7-day money-back. 50,000+ subscribers across 50+ countries.",
  openGraph: {
    type: "website",
    url: "https://www.ottv.org/",
    siteName: "OTTv",
    title: "Best IPTV Service 2026 — OTTv | 24,000+ Channels, 4K Streaming",
    description:
      "Premium IPTV subscription with 24,000+ live channels, 120,000+ movies & series, HD & 4K streaming. Activated in 5 minutes. 7-day money-back guarantee.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best IPTV Service 2026 — OTTv",
    description:
      "Premium IPTV subscription with 24,000+ channels in HD & 4K. From $7.50/mo. Activated in 5 minutes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-dvh flex flex-col bg-[#0b0e11] text-[#eaecef]">
        {children}
        <Script id="crisp-chat" strategy="lazyOnload">
          {`window.$crisp=[];window.CRISP_WEBSITE_ID="0f099c00-cb57-40da-95f8-7a4d16ed8848";window.$crisp.push(["config","position:reverse",[true]]);(function(){var d=document;var s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`}
        </Script>
      </body>
    </html>
  );
}
