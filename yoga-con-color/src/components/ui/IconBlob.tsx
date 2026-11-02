import type { LucideIcon } from "lucide-react";

export type Tone = "sun" | "coral" | "turquoise" | "mint" | "sky" | "lilac" | "pink";

export const toneStyles: Record<Tone, { blob: string; icon: string; soft: string; ring: string }> = {
  sun: { blob: "#ffc93c", icon: "text-ink", soft: "bg-sun-soft", ring: "ring-sun/40" },
  coral: { blob: "#ff8a6b", icon: "text-ink", soft: "bg-coral-soft", ring: "ring-coral/40" },
  turquoise: { blob: "#2ec4b6", icon: "text-ink", soft: "bg-turquoise-soft", ring: "ring-turquoise/40" },
  mint: { blob: "#8ee1c2", icon: "text-ink", soft: "bg-mint-soft", ring: "ring-mint/50" },
  sky: { blob: "#7cc8f8", icon: "text-ink", soft: "bg-sky-soft", ring: "ring-sky/50" },
  lilac: { blob: "#c3a8f0", icon: "text-ink", soft: "bg-lilac-soft", ring: "ring-lilac/50" },
  pink: { blob: "#ffb8cb", icon: "text-ink", soft: "bg-pink-soft", ring: "ring-pink/50" },
};

const shapes = [
  "M50 4c20 0 38 10 43 30 6 22-4 46-24 56-19 9-46 8-58-10C-1 62 1 34 15 18 24 8 36 4 50 4Z",
  "M54 3c19 2 37 16 41 36 4 22-8 44-28 52-22 9-48 3-58-17C-1 54 4 28 20 14 30 6 42 2 54 3Z",
  "M47 5c22-3 43 9 48 31 5 21-5 44-25 53-21 10-47 6-60-12C-2 59 2 33 16 18 25 10 36 6 47 5Z",
];

/** Ícono dentro de una forma orgánica de color. */
export function IconBlob({
  icon: Icon,
  tone,
  shape = 0,
  size = "md",
}: {
  icon: LucideIcon;
  tone: Tone;
  shape?: number;
  size?: "md" | "lg";
}) {
  const t = toneStyles[tone];
  const dims = size === "lg" ? "size-24" : "size-16";
  const iconSize = size === "lg" ? "size-10" : "size-7";

  return (
    <span className={`relative inline-flex ${dims} shrink-0 items-center justify-center`} aria-hidden="true">
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full drop-shadow-sm">
        <path d={shapes[shape % shapes.length]} fill={t.blob} />
        <circle cx="30" cy="28" r="7" fill="#ffffff" opacity="0.45" />
      </svg>
      <Icon className={`relative ${iconSize} ${t.icon}`} strokeWidth={2.2} />
    </span>
  );
}
