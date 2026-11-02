import { Palette, PersonStanding, Smile, Wind } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whatsappLink, whatsappMessages } from "@/config/site";
import { ColorUniverse } from "./ColorUniverse";

const pillars = [
  { label: "Colores", icon: Palette, bg: "bg-sun-soft" },
  { label: "Movimiento", icon: PersonStanding, bg: "bg-coral-soft" },
  { label: "Juego", icon: Smile, bg: "bg-pink-soft" },
  { label: "Respiración", icon: Wind, bg: "bg-turquoise-soft" },
];

export function WhatIs() {
  return (
    <section id="yoga-con-color" aria-labelledby="que-es-title" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-20 size-[30rem] rounded-full bg-sun-soft blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading
            id="que-es-title"
            align="left"
            eyebrow="¿Qué es Yoga con Color?"
            title={
              <>
                Una invitación a descubrir el yoga <span className="text-gradient-rainbow">jugando en familia.</span>
              </>
            }
            intro={
              <p>
                Yoga con Color es una invitación a descubrir el yoga de una manera divertida, creativa y adaptada a
                los niños. A través de colores, movimientos, juegos y ejercicios de respiración, los pequeños pueden
                explorar su cuerpo y sus emociones mientras comparten experiencias especiales con sus padres.
              </p>
            }
          />

          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4" data-reveal>
            {pillars.map((p) => (
              <li key={p.label} className={`flex flex-col items-center gap-2 rounded-2xl ${p.bg} px-3 py-4 text-center`}>
                <p.icon className="size-7 text-ink" aria-hidden="true" />
                <span className="text-sm font-extrabold text-ink">{p.label}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 rounded-2xl border-2 border-dashed border-lilac bg-white/70 p-5 leading-relaxed text-ink-soft" data-reveal>
            Una experiencia educativa y recreativa pensada para que la familia viva el yoga como un juego: sin
            exigencias, sin comparaciones y con mucho color.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap" data-reveal>
            <ButtonLink href={whatsappLink(whatsappMessages.product)} variant="whatsapp" icon="whatsapp">
              Quiero conocer Yoga con Color
            </ButtonLink>
            <ButtonLink href="#experiencia" variant="secondary">
              Ver cómo es una sesión
            </ButtonLink>
          </div>
        </div>

        <div data-reveal>
          <ColorUniverse />
        </div>
      </div>
    </section>
  );
}
