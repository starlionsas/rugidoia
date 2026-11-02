import { HeartHandshake, Moon, Palette, PersonStanding, Smile, Wind, type LucideIcon } from "lucide-react";
import { IconBlob, type Tone } from "@/components/ui/IconBlob";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { revealDelay } from "@/components/ui/reveal";
import { BreathingExercise } from "./BreathingExercise";

const steps: { title: string; text: string; icon: LucideIcon; tone: Tone }[] = [
  {
    title: "Nos encontramos y sonreímos",
    text: "Extendemos el tapete, nos miramos a los ojos y nos saludamos con una sonrisa.",
    icon: Smile,
    tone: "sun",
  },
  {
    title: "Respiramos y nos preparamos",
    text: "Unas respiraciones tranquilas para llegar al momento presente, juntos.",
    icon: Wind,
    tone: "sky",
  },
  {
    title: "Descubrimos posturas divertidas",
    text: "Nos convertimos en árboles, gatos, mariposas y montañas mientras jugamos.",
    icon: PersonStanding,
    tone: "coral",
  },
  {
    title: "Jugamos con los colores y las emociones",
    text: "Elegimos un color para cómo nos sentimos y lo convertimos en movimiento.",
    icon: Palette,
    tone: "pink",
  },
  {
    title: "Compartimos un momento de tranquilidad",
    text: "Descansamos, cerramos los ojos y escuchamos cómo se siente el cuerpo.",
    icon: Moon,
    tone: "lilac",
  },
  {
    title: "Terminamos con un abrazo y una sonrisa",
    text: "Agradecemos el tiempo compartido y nos llevamos un recuerdo bonito.",
    icon: HeartHandshake,
    tone: "mint",
  },
];

export function Session() {
  return (
    <section id="experiencia" aria-labelledby="experiencia-title" className="relative overflow-hidden">
      <WaveDivider fill="#e0f2fe" className="bg-white" />
      <div className="relative bg-gradient-to-b from-sky-soft via-mint-soft/60 to-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="experiencia-title"
            eyebrow="Una experiencia llena de color"
            title="Así podría ser un momento de Yoga con Color"
            intro={<p>Imagina un encuentro en familia, paso a paso, donde cada movimiento es una oportunidad para jugar y conectar.</p>}
          />

          <ol className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => (
              <li
                key={step.title}
                data-reveal
                style={revealDelay(i % 3, 110)}
                className="relative flex gap-5 rounded-[2rem] bg-white/90 p-6 shadow-soft ring-1 ring-white backdrop-blur transition hover:-translate-y-1 hover:shadow-lift sm:flex-col sm:gap-4 sm:p-7"
              >
                <div className="relative shrink-0">
                  <IconBlob icon={step.icon} tone={step.tone} shape={i + 1} size="lg" />
                  <span className="absolute -right-1 -top-1 flex size-8 items-center justify-center rounded-full bg-ink font-display text-sm font-semibold text-white ring-4 ring-white">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold leading-snug text-ink">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-16" data-reveal>
            <BreathingExercise />
          </div>
        </div>
      </div>
    </section>
  );
}
