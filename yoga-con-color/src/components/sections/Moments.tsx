import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { revealDelay } from "@/components/ui/reveal";
import { everydayMoments } from "@/content/guide";

/** Situaciones cotidianas de las familias y lo que la guía propone para cada una. */
export function Moments() {
  return (
    <section id="momentos" aria-labelledby="momentos-title" className="relative bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="momentos-title"
          eyebrow="¿Te suena familiar?"
          title={
            <>
              Para esos momentos que <span className="text-gradient-rainbow">conoces tan bien</span>
            </>
          }
          intro={
            <p>
              Todos los niños tienen días de mucha energía, de emociones grandes o de pantallas que no se apagan. La
              guía te da ideas concretas, convertidas en juego, para acompañarlos con calma.
            </p>
          }
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {everydayMoments.map((m, i) => (
            <li
              key={m.moment}
              data-reveal
              style={revealDelay(i % 3, 100)}
              className="group flex flex-col rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-ink/5 transition hover:-translate-y-1.5 hover:shadow-lift sm:p-7"
            >
              <span
                aria-hidden="true"
                className={`flex size-14 items-center justify-center rounded-2xl text-3xl ${m.tone} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
              >
                {m.emoji}
              </span>
              <h3 className="mt-5 text-xl font-semibold leading-snug text-ink">{m.moment}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-ink-soft">{m.answer}</p>
              <p className="mt-5 flex items-start gap-2 rounded-2xl bg-cream px-4 py-3 text-sm font-bold text-ink">
                <ArrowRight className="mt-0.5 size-4 shrink-0 text-coral-strong" aria-hidden="true" />
                <span>
                  <span className="block text-xs font-extrabold uppercase tracking-wider text-ink-soft">En la guía</span>
                  {m.tools}
                </span>
              </p>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-ink-soft" data-reveal>
          Son herramientas de juego y bienestar para compartir en familia; no reemplazan el acompañamiento de un
          profesional si tu hijo lo necesita.
        </p>
      </div>
    </section>
  );
}
