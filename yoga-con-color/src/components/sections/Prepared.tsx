/**
 * Secciones preparadas para información futura. Solo se muestran cuando
 * los datos correspondientes se completan en src/config/site.ts.
 * Así evitamos publicar testimonios, precios o credenciales inventadas.
 */
import Image from "next/image";
import { Check, Quote } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { revealDelay } from "@/components/ui/reveal";
import { facilitator, productOffer, siteConfig, testimonials } from "@/config/site";

export function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section id="testimonios" aria-labelledby="testimonios-title" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="testimonios-title" eyebrow="Familias" title="Lo que viven las familias" />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={t.name + i} data-reveal style={revealDelay(i)}>
              <figure className="h-full rounded-[2rem] bg-cream p-7 shadow-soft">
                <Quote className="size-8 text-coral" aria-hidden="true" />
                <blockquote className="mt-4 leading-relaxed text-ink">{t.quote}</blockquote>
                <figcaption className="mt-5">
                  <span className="block font-display text-lg font-semibold text-ink">{t.name}</span>
                  <span className="text-sm text-ink-soft">{t.relation}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Offer() {
  if (!productOffer) return null;
  return (
    <section id="oferta" aria-labelledby="oferta-title" className="bg-cream pb-20 sm:pb-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div data-reveal className="rounded-[2.5rem] bg-white p-8 text-center shadow-lift ring-4 ring-sun sm:p-12">
          <h2 id="oferta-title" className="text-3xl font-semibold text-ink sm:text-4xl">
            {productOffer.title}
          </h2>
          <p className="mt-4 font-display text-4xl font-semibold text-coral-strong">{productOffer.price}</p>
          <ul className="mx-auto mt-8 grid max-w-md gap-3 text-left">
            {productOffer.includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink-soft">
                <Check className="mt-0.5 size-5 shrink-0 text-turquoise-strong" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          {productOffer.note && <p className="mt-6 text-sm text-ink-soft">{productOffer.note}</p>}
          <div className="mt-8 flex justify-center">
            <ButtonLink href={siteConfig.whatsapp.link} variant="whatsapp" icon="whatsapp">
              Quiero empezar
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Facilitator() {
  if (!facilitator) return null;
  return (
    <section id="quien-acompana" aria-labelledby="facilitador-title" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[auto_1fr] lg:px-8">
        {facilitator.photo && (
          <Image
            src={facilitator.photo}
            alt={`Foto de ${facilitator.name}`}
            width={320}
            height={320}
            className="mx-auto size-64 rounded-full object-cover shadow-lift ring-8 ring-lilac-soft"
          />
        )}
        <div data-reveal>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-coral-strong">Quién te acompaña</p>
          <h2 id="facilitador-title" className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
            {facilitator.name}
          </h2>
          <p className="mt-1 font-bold text-ink-soft">{facilitator.role}</p>
          <p className="mt-4 leading-relaxed text-ink-soft">{facilitator.bio}</p>
          {facilitator.credentials.length > 0 && (
            <ul className="mt-5 grid gap-2">
              {facilitator.credentials.map((c) => (
                <li key={c} className="flex items-start gap-3 text-ink-soft">
                  <Check className="mt-0.5 size-5 shrink-0 text-turquoise-strong" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
