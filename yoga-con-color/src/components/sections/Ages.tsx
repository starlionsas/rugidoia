import { Info } from "lucide-react";
import { AgeAvatar } from "@/components/illustrations/AgeAvatar";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { revealDelay } from "@/components/ui/reveal";
import { whatsappLink, whatsappMessages } from "@/config/site";

const groups = [
  {
    variant: "explorers" as const,
    name: "Pequeños exploradores",
    range: "3 a 6 años",
    text: "Descubren el mundo a través del juego y la imitación. En esta etapa suelen funcionar los cuentos en movimiento, las posturas de animales y sesiones muy cortas, siempre con un adulto al lado.",
    ideas: ["Cuentos en movimiento", "Animales y naturaleza", "Respiraciones con juguetes"],
    card: "bg-sun-soft",
    chip: "bg-white text-sun-strong",
  },
  {
    variant: "discoverers" as const,
    name: "Grandes descubridores",
    range: "7 a 12 años",
    text: "Disfrutan los retos, la cooperación y entender el porqué de las cosas. Pueden explorar secuencias más largas, posturas en pareja y juegos para reconocer emociones.",
    ideas: ["Retos de equilibrio", "Posturas en pareja", "Juegos de emociones"],
    card: "bg-turquoise-soft",
    chip: "bg-white text-turquoise-strong",
  },
  {
    variant: "teens" as const,
    name: "Jóvenes conscientes",
    range: "13 a 17 años",
    text: "Valoran su espacio y su autonomía. El yoga puede ser un momento para bajar el ritmo, practicar la respiración consciente y compartir con la familia desde el respeto.",
    ideas: ["Respiración consciente", "Pausas de calma", "Espacios de diálogo"],
    card: "bg-lilac-soft",
    chip: "bg-white text-lilac-strong",
  },
];

export function Ages() {
  return (
    <section id="edades" aria-labelledby="edades-title" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="edades-title"
          eyebrow="¿Para qué edades?"
          title="Un camino de color para cada etapa"
          intro={
            <p>
              Yoga con Color acompaña a familias con niños y adolescentes de 3 a 17 años. Cada etapa tiene sus
              propias necesidades, por eso las actividades se adaptan a la madurez, las capacidades y los intereses
              de cada participante.
            </p>
          }
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {groups.map((g, i) => (
            <li
              key={g.name}
              data-reveal
              style={revealDelay(i, 120)}
              className={`group flex flex-col items-center rounded-[2.25rem] ${g.card} p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift sm:p-8`}
            >
              <AgeAvatar variant={g.variant} className="size-32 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105" />
              <p className="mt-5 rounded-full bg-ink px-4 py-1.5 text-sm font-extrabold text-white">{g.range}</p>
              <h3 className="mt-4 text-2xl font-semibold text-ink">{g.name}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{g.text}</p>
              <ul className="mt-5 flex flex-wrap justify-center gap-2" aria-label={`Ideas para ${g.name.toLowerCase()}`}>
                {g.ideas.map((idea) => (
                  <li key={idea} className={`rounded-full px-3 py-1.5 text-xs font-extrabold ${g.chip}`}>
                    {idea}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div
          data-reveal
          className="mx-auto mt-10 flex max-w-4xl flex-col items-center gap-5 rounded-3xl bg-cream p-6 text-center sm:flex-row sm:text-left"
        >
          <Info className="size-8 shrink-0 text-lilac-strong" aria-hidden="true" />
          <p className="leading-relaxed text-ink-soft">
            <strong className="text-ink">Cada niño es único.</strong> No todos los grupos realizan los mismos
            ejercicios ni al mismo ritmo. El acompañamiento del adulto es clave para adaptar cada actividad y
            respetar siempre los límites del cuerpo.
          </p>
          <ButtonLink href={whatsappLink(whatsappMessages.ages)} variant="whatsapp" icon="whatsapp" size="md" className="shrink-0">
            Pregunta por su edad
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
