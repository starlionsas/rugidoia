"use client";

import { useEffect, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";

const PHASE_SECONDS = 4;
const TOTAL_CYCLES = 5;

type Phase = "idle" | "inhale" | "exhale" | "done";

/**
 * Ejercicio guiado de "respiración del globo". Interactivo, accesible y
 * sin dependencias: inhalar 4 s, exhalar 4 s, durante 5 ciclos.
 */
type State = { phase: Phase; seconds: number; cycle: number };

const initial: State = { phase: "idle", seconds: PHASE_SECONDS, cycle: 1 };

/** Avanza un segundo el ejercicio. Función pura (segura en modo estricto). */
function tick(s: State): State {
  if (s.phase !== "inhale" && s.phase !== "exhale") return s;
  if (s.seconds > 1) return { ...s, seconds: s.seconds - 1 };
  if (s.phase === "inhale") return { ...s, phase: "exhale", seconds: PHASE_SECONDS };
  if (s.cycle >= TOTAL_CYCLES) return { ...s, phase: "done", seconds: PHASE_SECONDS };
  return { phase: "inhale", seconds: PHASE_SECONDS, cycle: s.cycle + 1 };
}

export function BreathingExercise() {
  const [state, setState] = useState<State>(initial);
  const [running, setRunning] = useState(false);
  const { phase, seconds, cycle } = state;
  const isActive = running && (phase === "inhale" || phase === "exhale");

  useEffect(() => {
    if (!isActive) return;
    const id = setInterval(() => setState(tick), 1000);
    return () => clearInterval(id);
  }, [isActive]);

  const start = () => {
    if (phase === "idle" || phase === "done") {
      setState({ phase: "inhale", seconds: PHASE_SECONDS, cycle: 1 });
    }
    setRunning(true);
  };

  const reset = () => {
    setRunning(false);
    setState(initial);
  };

  const label =
    phase === "inhale"
      ? "Inhala por la nariz… el globo se infla"
      : phase === "exhale"
        ? "Exhala despacio… el globo se desinfla"
        : phase === "done"
          ? "¡Muy bien! Noten cómo se siente su cuerpo ahora."
          : "Siéntense cómodos, con las manos en la barriga.";

  const expanded = phase === "inhale";
  const showCount = phase === "inhale" || phase === "exhale";

  return (
    <div className="grid items-center gap-8 rounded-[2.5rem] bg-white p-6 shadow-lift ring-1 ring-ink/5 sm:p-10 md:grid-cols-[1fr_1.1fr]">
      <div className="relative mx-auto flex aspect-square w-full max-w-[17rem] items-center justify-center">
        <div aria-hidden="true" className="absolute inset-0 rounded-full bg-sky-soft" />
        <div aria-hidden="true" className="absolute inset-[12%] rounded-full border-2 border-dashed border-sky" />
        <div
          aria-hidden="true"
          className="relative flex items-center justify-center rounded-full shadow-lift"
          style={{
            width: expanded ? "78%" : "42%",
            height: expanded ? "78%" : "42%",
            transition: `width ${PHASE_SECONDS}s ease-in-out, height ${PHASE_SECONDS}s ease-in-out`,
            background: "radial-gradient(circle at 35% 30%, #ffd6e0 0%, #ff8a6b 55%, #f0517a 100%)",
          }}
        >
          <span className="absolute left-[24%] top-[20%] size-[16%] rounded-full bg-white/50" />
          <span
            className={`font-display font-semibold text-white drop-shadow ${showCount ? "text-4xl sm:text-5xl" : "text-lg sm:text-xl"}`}
          >
            {showCount ? seconds : phase === "done" ? "¡Bien!" : "¿Listos?"}
          </span>
        </div>
        <span aria-hidden="true" className="absolute -bottom-2 left-1/2 h-10 w-0.5 -translate-x-1/2 bg-ink/20" />
      </div>

      <div className="text-center md:text-left">
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-turquoise-strong">Pruébenlo ahora en familia</p>
        <h3 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">La respiración del globo</h3>
        <p className="mt-3 leading-relaxed text-ink-soft">
          Imaginen un globo de su color favorito. Al inhalar se infla y al exhalar se desinfla. Son {TOTAL_CYCLES}{" "}
          respiraciones tranquilas, sin forzar.
        </p>

        <p
          aria-live="polite"
          className="mt-5 min-h-14 rounded-2xl bg-cream px-4 py-3 font-display text-lg font-medium text-ink"
        >
          {label}
          {showCount && (
            <span className="block text-sm font-sans font-bold text-ink-soft">
              Respiración {cycle} de {TOTAL_CYCLES}
            </span>
          )}
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
          {isActive ? (
            <button
              type="button"
              onClick={() => setRunning(false)}
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              <Pause className="size-5" aria-hidden="true" /> Pausar
            </button>
          ) : (
            <button
              type="button"
              onClick={start}
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-turquoise-strong px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              <Play className="size-5" aria-hidden="true" />
              {phase === "idle" ? "Empezar" : phase === "done" ? "Repetir" : "Continuar"}
            </button>
          )}
          {phase !== "idle" && (
            <button
              type="button"
              onClick={reset}
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-ink ring-2 ring-ink/10 transition hover:ring-ink/25"
            >
              <RotateCcw className="size-5" aria-hidden="true" /> Reiniciar
            </button>
          )}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-ink-soft">
          Si aparece mareo o incomodidad, vuelvan a respirar con normalidad. Nunca se retiene ni se fuerza la
          respiración.
        </p>
      </div>
    </div>
  );
}
