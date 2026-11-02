import { Footprints, Gamepad2, Ear, HeartHandshake, MessageCircle, MonitorOff, Sparkles, Quote, type LucideIcon } from "lucide-react";
import { ConnectionIllustration } from "@/components/illustrations/ConnectionIllustration";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { revealDelay } from "@/components/ui/reveal";

type Value = { title: string; text: string; icon: LucideIcon; color: string };

const values: Value[] = [
  { title: "Tiempo de calidad sin pantallas", text: "Un espacio para mirarse, reír y estar presentes.", icon: MonitorOff, color: "bg-sun" },
  { title: "Recuerdos positivos", text: "Momentos sencillos que se quedan en el corazón.", icon: Sparkles, color: "bg-coral" },
  { title: "Aprender juntos", text: "Los adultos también descubren, se equivocan y ríen.", icon: Footprints, color: "bg-mint" },
  { title: "Juegos y movimientos compartidos", text: "Posturas en pareja que invitan a cooperar.", icon: Gamepad2, color: "bg-sky" },
  { title: "Escucharse mutuamente", text: "Atender lo que el otro siente y necesita.", icon: Ear, color: "bg-lilac" },
  { title: "Pequeños rituales familiares", text: "Un momento propio que todos esperan con gusto.", icon: HeartHandshake, color: "bg-pink" },
  { title: "Comunicación y confianza", text: "Un ambiente seguro para hablar de lo que sentimos.", icon: MessageCircle, color: "bg-turquoise" },
];

export function Together() {
  return (
    <section id="padres-e-hijos" aria-labelledby="padres-title" className="relative overflow-hidden">
      <WaveDivider fill="#efe7fc" className="bg-white" />
      <div className="relative bg-gradient-to-b from-lilac-soft via-pink-soft/70 to-cream py-16 sm:py-24">
        <div aria-hidden="true" className="bg-dots pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8">
          <div className="relative order-2 lg:order-1" data-reveal>
            <ConnectionIllustration className="mx-auto h-auto w-full max-w-lg drop-shadow-[0_30px_40px_rgba(107,79,191,0.18)]" />
            <figure className="relative -mt-10 mx-auto max-w-md rounded-[2rem] bg-white p-6 shadow-lift sm:-mt-14 sm:p-8">
              <Quote className="absolute -top-5 left-6 size-10 rounded-full bg-coral p-2 text-white" aria-hidden="true" />
              <blockquote className="font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
                “Tu hijo quizás no recuerde todos los juguetes que tuvo, pero recordará cómo se sentía cuando
                compartías tiempo con él.”
              </blockquote>
            </figure>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              id="padres-title"
              align="left"
              eyebrow="El poder de practicar juntos"
              title="Cuando mamá, papá e hijos respiran juntos, también aprenden a conectarse."
              intro={
                <p>
                  Yoga con Color no se trata solo de enseñar yoga a los niños. Se trata de crear momentos especiales
                  entre padres e hijos, donde ambos puedan jugar, respirar, moverse, aprender y crecer juntos.
                </p>
              }
            />

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {values.map((v, i) => (
                <li
                  key={v.title}
                  data-reveal
                  style={revealDelay(i, 70)}
                  className={`flex items-start gap-4 rounded-2xl bg-white/80 p-4 shadow-soft ring-1 ring-white backdrop-blur transition hover:bg-white ${
                    i === values.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <span className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${v.color}`}>
                    <v.icon className="size-5 text-ink" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-display text-lg font-semibold leading-tight text-ink">{v.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink-soft">{v.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
