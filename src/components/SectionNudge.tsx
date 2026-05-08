import Link from "next/link";

type SectionNudgeProps = {
  href: string;
  label: string;
  align?: "center" | "left";
};

// Reusable "next step" cue — mirrors the Hero's existing journey arrow.
// Keeps the page rhythm continuous between sections without introducing any
// new visual primitive (no new color, no new border, no atmospheric shape).
export default function SectionNudge({
  href,
  label,
  align = "center",
}: SectionNudgeProps) {
  const isHash = href.startsWith("#");
  const className =
    "inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#707a8a] hover:text-[#eaecef] transition-colors";
  const wrapperClass =
    align === "center" ? "mt-14 flex justify-center" : "mt-14";

  const content = (
    <>
      {label}
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
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </>
  );

  return (
    <div className={wrapperClass}>
      {isHash ? (
        <a href={href} className={className} aria-label={`Scroll to: ${label}`}>
          {content}
        </a>
      ) : (
        <Link href={href} className={className} aria-label={label}>
          {content}
        </Link>
      )}
    </div>
  );
}
