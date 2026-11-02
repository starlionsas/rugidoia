import { Sparkle } from "./decor";

const INK = "#2b2550";

type Variant = "explorers" | "discoverers" | "teens";

const palette: Record<Variant, { bg: string; ring: string; shirt: string; skin: string; hair: string }> = {
  explorers: { bg: "#fff1c7", ring: "#ffc93c", shirt: "#ff8a6b", skin: "#f0c29e", hair: "#a0522d" },
  discoverers: { bg: "#d3f4f0", ring: "#2ec4b6", shirt: "#7cc8f8", skin: "#b97a56", hair: "#2a1d1a" },
  teens: { bg: "#efe7fc", ring: "#c3a8f0", shirt: "#ffb8cb", skin: "#e0a77f", hair: "#4b2d1f" },
};

/** Retratos ilustrados para cada grupo de edad. */
export function AgeAvatar({ variant, className }: { variant: Variant; className?: string }) {
  const c = palette[variant];
  const id = `avatar-${variant}`;

  return (
    <svg viewBox="0 0 160 160" className={className} aria-hidden="true" focusable="false">
      <defs>
        <clipPath id={`${id}-clip`}>
          <circle cx="80" cy="80" r="76" />
        </clipPath>
      </defs>
      <circle cx="80" cy="80" r="78" fill={c.ring} />
      <g clipPath={`url(#${id}-clip)`}>
        <circle cx="80" cy="80" r="76" fill={c.bg} />

        {variant === "explorers" && (
          <>
            <circle cx="40" cy="74" r="13" fill={c.hair} />
            <circle cx="120" cy="74" r="13" fill={c.hair} />
            <circle cx="40" cy="74" r="5" fill="#ffc93c" />
            <circle cx="120" cy="74" r="5" fill="#ffc93c" />
          </>
        )}
        {variant === "teens" && (
          <path d="M44 84c-6-40 10-58 36-58s44 16 36 58c4 22 0 46-8 60H52c-8-14-12-38-8-60Z" fill={c.hair} />
        )}

        {/* Hombros */}
        <path d="M24 170Q24 120 80 118Q136 120 136 170Z" fill={c.shirt} />
        {variant === "discoverers" && <path d="M58 122l22 18 22-18" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />}
        <rect x="71" y="100" width="18" height="24" rx="7" fill={c.skin} />

        {/* Rostro */}
        {variant === "teens" ? (
          <ellipse cx="80" cy="80" rx="27" ry="31" fill={c.skin} />
        ) : (
          <circle cx="80" cy="82" r={variant === "explorers" ? 32 : 30} fill={c.skin} />
        )}

        {variant === "explorers" && (
          <path d="M48 80c-2-24 12-36 32-36s34 12 32 36c-6-10-14-16-24-16-6 6-16 8-26 6-6 2-10 6-14 10Z" fill={c.hair} />
        )}
        {variant === "discoverers" && (
          <g fill={c.hair}>
            {[52, 62, 72, 82, 92, 102, 110].map((x, i) => (
              <circle key={x} cx={x} cy={i % 2 ? 54 : 58} r="11" />
            ))}
            <circle cx="50" cy="70" r="9" />
            <circle cx="110" cy="70" r="9" />
          </g>
        )}
        {variant === "teens" && (
          <>
            <path d="M52 76c0-26 12-38 30-38s28 14 26 32c-10-4-22-12-28-22-6 12-16 22-28 28Z" fill={c.hair} />
            {/* Audífonos al cuello */}
            <path d="M54 118q26 16 52 0" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
            <rect x="46" y="110" width="14" height="18" rx="6" fill="#2ec4b6" />
            <rect x="100" y="110" width="14" height="18" rx="6" fill="#2ec4b6" />
          </>
        )}

        {/* Ojos, sonrisa y mejillas */}
        <path
          d="M66 84q5 5 10 0M84 84q5 5 10 0"
          stroke={INK}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path d="M72 96q8 7 16 0" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="62" cy="94" r="5" fill="#ff8a6b" opacity="0.45" />
        <circle cx="98" cy="94" r="5" fill="#ff8a6b" opacity="0.45" />
      </g>

      <Sparkle x={134} y={30} scale={0.9} color={variant === "explorers" ? "#ff8a6b" : "#ffc93c"} />
      <Sparkle x={24} y={130} scale={0.6} color="#ffffff" />
    </svg>
  );
}
