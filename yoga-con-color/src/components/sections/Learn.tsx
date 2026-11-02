import Link from "next/link";
import { ArrowRight, BookOpen, CalendarHeart, Clock, HeartHandshake, MonitorOff, PersonStanding, Rainbow, Sprout, Wind } from "lucide-react";
import { IconBlob, toneStyles } from "@/components/ui/IconBlob";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { revealDelay } from "@/components/ui/reveal";
import { articles, type ArticleIcon } from "@/content/articles";

export const articleIcons: Record<ArticleIcon, typeof Sprout> = {
  sprout: Sprout,
  rainbow: Rainbow,
  monitorOff: MonitorOff,
  heartHandshake: HeartHandshake,
  personStanding: PersonStanding,
  calendarHeart: CalendarHeart,
  wind: Wind,
};

export function Learn() {
  return (
    <section id="aprende" aria-labelledby="aprende-title" className="relative bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="aprende-title"
          eyebrow="Contenido para padres"
          title="Aprende en familia"
          intro={
            <p>
              Lecturas breves, prácticas y responsables para acompañar a tus hijos en su bienestar y disfrutar más
              del tiempo juntos.
            </p>
          }
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => {
            const t = toneStyles[a.tone];
            const featured = i === 0;
            return (
              <li
                key={a.slug}
                data-reveal
                style={revealDelay(i % 3)}
                className={featured ? "sm:col-span-2 lg:col-span-3" : ""}
              >
                <Link
                  href={`/aprende/${a.slug}`}
                  className={`group flex h-full flex-col overflow-hidden ${featured ? "sm:flex-row" : ""} rounded-[2rem] bg-white shadow-soft ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift`}
                >
                  <div className={`relative flex items-center gap-4 ${t.soft} px-6 ${featured ? "flex-col justify-center py-8 sm:w-2/5 sm:shrink-0 sm:py-10" : "py-4 sm:py-6"}`}>
                    <IconBlob icon={articleIcons[a.icon]} tone={a.tone} shape={i} size={featured ? "lg" : "md"} />
                    {featured && (
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-ink">
                        Para empezar
                      </span>
                    )}
                  </div>
                  <div className={`flex flex-1 flex-col p-6 ${featured ? "sm:p-10" : ""}`}>
                    <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-ink-soft">
                      <Clock className="size-4" aria-hidden="true" />
                      {a.readingMinutes} min de lectura
                    </p>
                    <h3 className={`mt-3 font-semibold leading-snug text-ink ${featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>
                      {a.title}
                    </h3>
                    <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{a.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-2 font-extrabold text-coral-strong">
                      <BookOpen className="size-5" aria-hidden="true" />
                      Leer artículo
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
