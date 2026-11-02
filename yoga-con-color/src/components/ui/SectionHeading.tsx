import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  id?: string;
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  id,
  tone = "dark",
  className = "",
}: Props) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  const light = tone === "light";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment} ${className}`} data-reveal>
      {eyebrow && (
        <p
          className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] ${
            light ? "bg-white/20 text-white" : "bg-white text-coral-strong shadow-soft"
          }`}
        >
          <span aria-hidden="true" className="size-2 rounded-full bg-current" />
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`text-3xl font-semibold leading-[1.12] sm:text-4xl lg:text-[2.85rem] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <div className={`text-lg leading-relaxed ${light ? "text-white/90" : "text-ink-soft"}`}>{intro}</div>
      )}
    </div>
  );
}
