"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavLink = { label: string; href: string };

export default function MobileMenu({ navLinks }: { navLinks: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll + Escape-to-close while open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-[#eaecef] hover:text-white"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        )}
      </button>

      <div
        id="mobile-nav"
        className={`md:hidden fixed inset-x-0 top-16 z-40 border-t border-[#2b3139] bg-[#0b0e11] overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <nav
          className="px-5 py-4 flex flex-col gap-1"
          aria-label="Mobile primary"
        >
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="px-3 py-3 text-base text-[#eaecef] hover:text-white hover:bg-[#1e2329] rounded-md"
            >
              {l.label}
            </Link>
          ))}
          <div className="my-2 h-px bg-[#2b3139]" />
          <Link
            href="/contact"
            className="px-3 py-3 text-base text-[#eaecef] hover:text-white hover:bg-[#1e2329] rounded-md"
          >
            Help
          </Link>
          <Link
            href="/sign-in"
            className="px-3 py-3 text-base text-[#eaecef] hover:text-white hover:bg-[#1e2329] rounded-md"
          >
            Log in
          </Link>
          <Link href="/#pricing" className="cta-primary mt-3">
            Sign Up
          </Link>
        </nav>
      </div>
    </>
  );
}
