import Image from "next/image";
import {
  BookOpen,
  ChefHat,
  FileText,
  Fingerprint,
  Gamepad2,
  Map,
  Palette,
  PawPrint,
  Printer,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { revealDelay } from "@/components/ui/reveal";
import { guide, guideContents, guidePreviews, type GuideItemIcon } from "@/content/guide";

const icons: Record<GuideItemIcon, LucideIcon> = {
  book: BookOpen,
  paw: PawPrint,
  gamepad: Gamepad2,
  map: Map,
  sparkles: Sparkles,
  fingerprint: Fingerprint,
  chef: ChefHat,
  palette: Palette,
};

/** Portada de la guía presentada como un libro. */
export function GuideCover({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <div className={`relative ${className}`}>
      <div aria-hidden="true" className="absolute inset-x-6 -bottom-4 h-8 rounded-full bg-ink/20 blur-xl" />
      <div className="relative overflow-hidden rounded-r-2xl rounded-l-md shadow-lift ring-1 ring-ink/10">
        <Image
          src={guide.cover}
          alt={`Portada de la guía ${guide.title}: niños haciendo posturas de yoga rodeados de colores, animales y flores.`}
          width={760}
          height={1019}
          priority={priority}
          sizes="(min-width: 1024px) 360px, 70vw"
          className="h-auto w-full"
        />
        {/* Lomo del libro */}
        <span aria-hidden="true" className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-ink/25 to-transparent" />
      </div>
    </div>
  );
}

export function GuideInside() {
  return (
    <section id="guia" aria-labelledby="guia-title" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div aria-hidden="true" className="bg-dots pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="guia-title"
          eyebrow="La guía por dentro"
          title={
            <>
              Todo lo que necesitas para <span className="text-gradient-rainbow">empezar hoy mismo</span>
            </>
          }
          intro={
            <p>
              <strong className="text-ink">{guide.title}</strong> es una guía ilustrada, pensada para niños y niñas de{" "}
              {guide.ages}, que convierte el yoga en cuentos, juegos y aventuras. No necesitas experiencia: solo
              abrirla y jugar.
            </p>
          }
        />

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="mx-auto w-full max-w-sm lg:sticky lg:top-28" data-reveal>
            <div className="mx-auto max-w-[15rem] sm:max-w-sm">
            <GuideCover className="-rotate-2 transition-transform duration-500 hover:rotate-0" />
            </div>
            <ul className="mt-10 flex flex-wrap justify-center gap-2 text-sm font-extrabold text-ink">
              <li className="inline-flex items-center gap-1.5 rounded-full bg-cream px-3 py-1.5 ring-1 ring-ink/10">
                <FileText className="size-4 text-coral-strong" aria-hidden="true" />
                {guide.format} · {guide.pages} páginas
              </li>
              <li className="inline-flex items-center gap-1.5 rounded-full bg-cream px-3 py-1.5 ring-1 ring-ink/10">
                <Printer className="size-4 text-turquoise-strong" aria-hidden="true" />
                Fichas para imprimir
              </li>
              <li className="inline-flex items-center gap-1.5 rounded-full bg-cream px-3 py-1.5 ring-1 ring-ink/10">
                <Sparkles className="size-4 text-lilac-strong" aria-hidden="true" />
                Niños de {guide.ages}
              </li>
            </ul>
          </div>

          <ol className="grid gap-4 sm:grid-cols-2">
            {guideContents.map((item, i) => {
              const Icon = icons[item.icon];
              return (
                <li
                  key={item.title}
                  data-reveal
                  style={revealDelay(i % 2, 90)}
                  className="flex gap-4 rounded-3xl bg-white p-5 shadow-soft ring-1 ring-ink/5 transition hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${item.tone}`}>
                    <Icon className="size-6 text-ink" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold leading-snug text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.detail}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Vista previa de páginas reales */}
        <div className="mt-20" data-reveal>
          <h3 className="text-center text-2xl font-semibold text-ink sm:text-3xl">Un vistazo a sus páginas</h3>
          <ul className="mx-auto mt-8 grid max-w-5xl grid-cols-3 items-end gap-3 sm:gap-6">
            {guidePreviews.map((p, i) => (
              <li key={p.src} className={i === 1 ? "sm:-translate-y-4" : ""}>
                <figure>
                  <div className="overflow-hidden rounded-2xl bg-cream shadow-lift ring-1 ring-ink/10 transition-transform duration-300 hover:-translate-y-1.5">
                    <Image
                      src={p.src}
                      alt={`Página de la guía: ${p.caption}`}
                      width={p.width}
                      height={p.height}
                      sizes="(min-width: 1024px) 300px, 30vw"
                      className="aspect-[3/4] h-auto w-full object-cover object-top"
                    />
                  </div>
                  <figcaption className="mt-3 text-center text-xs font-bold text-ink-soft sm:text-sm">{p.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
