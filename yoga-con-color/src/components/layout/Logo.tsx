/** Isotipo de Yoga con Color: un arcoíris que abraza a un pequeño sol. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <circle cx="24" cy="24" r="24" fill="#fff1c7" />
      <g fill="none" strokeLinecap="round" strokeWidth="4.6">
        <path d="M7 33a17 17 0 0 1 34 0" stroke="#ff8a6b" />
        <path d="M13 33a11 11 0 0 1 22 0" stroke="#2ec4b6" />
        <path d="M19 33a5 5 0 0 1 10 0" stroke="#c3a8f0" />
      </g>
      <circle cx="37" cy="12" r="4" fill="#ffc93c" />
    </svg>
  );
}

export function Logo({ className = "", tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="size-10 shrink-0 drop-shadow-sm" />
      <span
        className={`font-display text-[1.35rem] font-semibold leading-none tracking-tight ${
          tone === "light" ? "text-white" : "text-ink"
        }`}
      >
        Yoga <span className={tone === "light" ? "text-sun" : "text-gradient-rainbow"}>con Color</span>
      </span>
    </span>
  );
}
