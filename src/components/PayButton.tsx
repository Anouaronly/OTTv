"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

type PayButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

// Opens an in-page checkout modal (iframe). FlujiPay payment links may set
// X-Frame-Options/CSP frame-ancestors that prevent embedding, so the modal
// header always exposes a prominent "Open in new tab" fallback. We also
// surface a stronger nudge if the iframe hasn't reported a load event after
// 6 s, which is the symptom we'd see on a blocked embed.
export default function PayButton({ href, children, className }: PayButtonProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [slow, setSlow] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    setLoaded(false);
    setSlow(false);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);

    timerRef.current = window.setTimeout(() => setSlow(true), 6000);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
        aria-haspopup="dialog"
      >
        {children}
      </button>

      {mounted && open
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="pay-modal-title"
            >
              <div
                onClick={close}
                aria-hidden
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              />

              <div className="relative w-full max-w-3xl h-[85vh] bg-[#1e2329] border border-[#2b3139] rounded-xl flex flex-col overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 border-b border-[#2b3139] bg-[#181a20]">
                  <div className="flex items-center gap-2 min-w-0">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0ecb81"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                      className="flex-shrink-0"
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span
                      id="pay-modal-title"
                      className="text-sm font-semibold text-white truncate"
                    >
                      Secure checkout
                    </span>
                    <span className="hidden sm:inline text-xs text-[#707a8a] truncate">
                      · flujipay.com
                    </span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#929aa5] hover:text-[#fcd535] px-2.5 py-1.5 rounded-md hover:bg-[#2b3139] transition-colors"
                    >
                      Open in new tab
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <path d="M15 3h6v6" />
                        <path d="M10 14L21 3" />
                      </svg>
                    </a>
                    <button
                      type="button"
                      onClick={close}
                      aria-label="Close checkout"
                      className="w-8 h-8 rounded-md text-[#929aa5] hover:text-white hover:bg-[#2b3139] inline-flex items-center justify-center transition-colors"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="relative flex-1 bg-[#0b0e11]">
                  {!loaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
                      <div
                        aria-hidden
                        className="w-8 h-8 rounded-full border-2 border-[#2b3139] border-t-[#fcd535] animate-spin"
                      />
                      <p className="text-sm text-[#929aa5]">
                        Loading secure checkout…
                      </p>
                      {slow && (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-primary mt-3"
                        >
                          Open checkout in new tab
                        </a>
                      )}
                    </div>
                  )}
                  <iframe
                    src={href}
                    title="FlujiPay secure checkout"
                    onLoad={() => setLoaded(true)}
                    allow="payment *; clipboard-read; clipboard-write"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>

                <div className="sm:hidden px-4 py-2 border-t border-[#2b3139] bg-[#181a20] text-center">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#929aa5] hover:text-[#fcd535]"
                  >
                    Trouble loading? Open in new tab
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <path d="M15 3h6v6" />
                      <path d="M10 14L21 3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
