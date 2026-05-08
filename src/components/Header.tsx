import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Pricing", href: "/iptv-subscription" },
  { label: "Devices", href: "/#coverage" },
  { label: "Free trial", href: "/iptv-free-trial" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0b0e11]/95 backdrop-blur-sm border-b border-[#2b3139]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center" aria-label="OTTv home">
            <Image
              src="/logo.svg"
              alt="OTTv"
              width={211}
              height={91}
              priority
              className="h-9 w-auto"
            />
          </Link>

          <nav
            className="hidden md:flex items-center gap-7 text-sm text-[#eaecef]"
            aria-label="Primary"
          >
            {navLinks.map((l) => (
              <Link key={l.label} href={l.href} className="hover:text-white">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline text-sm text-[#eaecef] hover:text-white"
          >
            Help
          </Link>
          <Link
            href="/sign-in"
            className="hidden sm:inline text-sm text-[#eaecef] hover:text-white"
          >
            Log in
          </Link>
          <Link href="/#pricing" className="cta-primary hidden sm:inline-flex">
            Sign Up
          </Link>

          <MobileMenu navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
}
