"use client";

import { useState } from "react";
import { Heart, Leaf, Moon, PersonStanding, Sun, Wind, type LucideIcon } from "lucide-react";
import { LogoMark } from "@/components/layout/Logo";

/**
 * [PERSONALIZAR] Asociación conceptual de colores del universo Yoga con
 * Color. Es una propuesta visual basada en la descripción de la marca
 * (colores, movimiento, juego, respiración y emociones); ajústala al
 * contenido real del infoproducto cuando esté definido.
 */
const colors: {
  name: string;
  theme: string;
  text: string;
  hex: string;
  soft: string;
  icon: LucideIcon;
}[] = [
  {
    name: "Amarillo sol",
    theme: "Alegría y juego",
    text: "Movimientos que invitan a reír, explorar y despertar la curiosidad.",
    hex: "#ffc93c",
    soft: "#fff1c7",
    icon: Sun,
  },
  {
    name: "Coral",
    theme: "Energía y movimiento",
    text: "Posturas activas para sentir la fuerza del cuerpo y liberar energía.",
    hex: "#ff8a6b",
    soft: "#ffe1d7",
    icon: PersonStanding,
  },
  {
    name: "Rosa",
    theme: "Amor y conexión",
    text: "Momentos para abrazarse, agradecer y compartir en familia.",
    hex: "#ffb8cb",
    soft: "#ffe8ee",
    icon: Heart,
  },
  {
    name: "Lila",
    theme: "Imaginación y descanso",
    text: "Historias y viajes imaginarios para relajar el cuerpo y la mente.",
    hex: "#c3a8f0",
    soft: "#efe7fc",
    icon: Moon,
  },
  {
    name: "Turquesa",
    theme: "Respiración y calma",
    text: "Juegos de respiración para hacer una pausa y volver a la calma.",
    hex: "#2ec4b6",
    soft: "#d3f4f0",
    icon: Wind,
  },
  {
    name: "Verde menta",
    theme: "Naturaleza y equilibrio",
    text: "Posturas inspiradas en árboles, flores y animales para encontrar el equilibrio.",
    hex: "#8ee1c2",
    soft: "#e2f8ef",
    icon: Leaf,
  },
];

export function ColorUniverse() {
  const [active, setActive] = useState(0);
  const current = colors[active];
  const CurrentIcon = current.icon;

  return (
    <div className="mx-auto w-full max-w-lg">
      <div className="relative mx-auto aspect-square w-full max-w-[26rem]">
        {/* Órbitas */}
        <div aria-hidden="true" className="absolute inset-[9%] rounded-full border-2 border-dashed border-ink/10 animate-spin-slow" />
        <div aria-hidden="true" className="absolute inset-[24%] rounded-full border-2 border-ink/5" />

        {/* Centro */}
        <div
          className="absolute inset-[27%] flex flex-col items-center justify-center rounded-full text-center shadow-lift transition-colors duration-500"
          style={{ backgroundColor: current.soft }}
        >
          <LogoMark className="size-12 sm:size-14" />
          <p className="mt-1.5 px-2 font-display text-sm font-semibold leading-tight text-ink sm:text-base">
            El universo
            <br />
            Yoga con Color
          </p>
        </div>

        {/* Colores */}
        <div role="group" aria-label="Elige un color para descubrir su significado">
          {colors.map((c, i) => {
            const angle = (i / colors.length) * Math.PI * 2 - Math.PI / 2;
            const radius = 41; // % del contenedor
            const left = 50 + radius * Math.cos(angle);
            const top = 50 + radius * Math.sin(angle);
            const Icon = c.icon;
            const selected = i === active;
            return (
              <button
                key={c.name}
                type="button"
                aria-pressed={selected}
                aria-label={`${c.name}: ${c.theme}`}
                onClick={() => setActive(i)}
                className={`absolute flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-soft ring-4 transition-all duration-300 hover:scale-110 sm:size-[4.5rem] ${
                  selected ? "scale-110 ring-white shadow-lift" : "ring-white/60"
                }`}
                style={{ left: `${left}%`, top: `${top}%`, backgroundColor: c.hex }}
              >
                <Icon className="size-6 text-ink sm:size-7" aria-hidden="true" />
                {selected && (
                  <span aria-hidden="true" className="absolute inset-0 rounded-full animate-ping-soft" style={{ backgroundColor: c.hex }} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div
        aria-live="polite"
        className="mt-6 flex items-start gap-4 rounded-3xl bg-white p-5 shadow-soft ring-1 ring-ink/5 transition-colors sm:p-6"
      >
        <span
          className="flex size-12 shrink-0 items-center justify-center rounded-2xl"
          style={{ backgroundColor: current.hex }}
        >
          <CurrentIcon className="size-6 text-ink" aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-ink-soft">{current.name}</p>
          <p className="font-display text-xl font-semibold text-ink">{current.theme}</p>
          <p className="mt-1 leading-relaxed text-ink-soft">{current.text}</p>
        </div>
      </div>
      <p className="mt-3 text-center text-sm text-ink-soft">Toca cada color para descubrirlo.</p>
    </div>
  );
}
