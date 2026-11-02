import type { CSSProperties } from "react";

/** Retraso escalonado para la animación de aparición (data-reveal). */
export function revealDelay(index: number, step = 90): CSSProperties {
  return { ["--reveal-delay" as string]: `${index * step}ms` } as CSSProperties;
}
