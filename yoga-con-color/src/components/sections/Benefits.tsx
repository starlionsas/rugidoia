import { Brain, Focus, Footprints, Moon, PersonStanding, Rainbow, Sprout, Star, Wind, type LucideIcon } from "lucide-react";
import { IconBlob, type Tone } from "@/components/ui/IconBlob";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { revealDelay } from "@/components/ui/reveal";

type Benefit = { title: string; text: string; icon: LucideIcon; tone: Tone };

const benefits: Benefit[] = [
  {
    title: "Conciencia corporal",
    text: "Descubrir cómo se mueve y cómo se siente cada parte del cuerpo, jugando a imitar animales y elementos de la naturaleza.",
    icon: PersonStanding,
    tone: "coral",
  },
  {
    title: "Coordinación y equilibrio",
    text: "Posturas sencillas que invitan a mantenerse firmes como un árbol y a coordinar brazos, piernas y respiración.",
    icon: Footprints,
    tone: "sun",
  },
  {
    title: "Flexibilidad",
    text: "Estiramientos suaves y adaptados a cada edad, siempre sin forzar y respetando los límites del cuerpo.",
    icon: Sprout,
    tone: "mint",
  },
  {
    title: "Respiración consciente",
    text: "Juegos como inflar un globo imaginario o soplar una vela para aprender a hacer una pausa.",
    icon: Wind,
    tone: "sky",
  },
  {
    title: "Reconocimiento de emociones",
    text: "Darle un nombre y un color a lo que sentimos para poder hablar de ello en familia.",
    icon: Rainbow,
    tone: "pink",
  },
  {
    title: "Atención y concentración",
    text: "Enfocarse en un movimiento o en la respiración es una forma amable de entrenar la atención.",
    icon: Focus,
    tone: "turquoise",
  },
  {
    title: "Momentos de relajación",
    text: "Espacios de calma para descansar, escuchar el cuerpo y bajar el ritmo después de un día lleno de actividad.",
    icon: Moon,
    tone: "lilac",
  },
  {
    title: "Confianza y autoestima",
    text: "Celebrar cada pequeño logro ayuda a los niños a descubrir de lo que son capaces, a su propio ritmo.",
    icon: Star,
    tone: "sun",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" aria-labelledby="beneficios-title" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="beneficios-title"
          eyebrow="Una infancia con más bienestar"
          title={
            <>
              Crecer también es <span className="text-gradient-rainbow">aprender a sentirse bien.</span>
            </>
          }
          intro={
            <p>
              El yoga adaptado a la infancia es una forma de movimiento que invita a explorar el cuerpo, la
              respiración y las emociones a través del juego. La investigación sobre yoga infantil es un campo en
              crecimiento, y diversos trabajos sugieren que, practicado de forma regular y adaptada, puede
              favorecer aspectos como estos:
            </p>
          }
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <li
              key={b.title}
              data-reveal
              style={revealDelay(i % 4)}
              className="group relative flex flex-row items-start gap-4 overflow-hidden rounded-[2rem] bg-cream p-5 sm:flex-col sm:p-6 ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-lift"
            >
              <div className="shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3">
                <IconBlob icon={b.icon} tone={b.tone} shape={i} />
              </div>
              <div className="flex flex-col gap-2 sm:gap-4">
                <h3 className="text-xl font-semibold leading-snug text-ink">{b.title}</h3>
                <p className="leading-relaxed text-ink-soft">{b.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div
          data-reveal
          className="mx-auto mt-12 flex max-w-3xl items-start gap-4 rounded-3xl bg-sky-soft/70 p-5 text-sm leading-relaxed text-ink-soft sm:p-6"
        >
          <Brain className="mt-0.5 size-6 shrink-0 text-ink" aria-hidden="true" />
          <p>
            <strong className="text-ink">Con responsabilidad:</strong> cada niño vive el yoga a su manera. Estos
            son beneficios posibles, no resultados garantizados, y no sustituyen la atención médica, psicológica o
            terapéutica. Lo más valioso es disfrutar el proceso, sin presiones ni comparaciones.
          </p>
        </div>
      </div>
    </section>
  );
}
