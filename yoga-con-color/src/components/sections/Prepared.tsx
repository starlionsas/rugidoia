/**
 * Secciones preparadas para información futura. Solo se muestran cuando
 * los datos correspondientes se completan en src/config/site.ts.
 * Así evitamos publicar testimonios, precios o credenciales inventadas.
 * La oferta (precio) ya está confirmada por la marca.
 */
import Image from "next/image";
import { Check, Clock, Quote, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { revealDelay } from "@/components/ui/reveal";
import { facilitator, formatCOP, productOffer, testimonials, whatsappLink } from "@/config/site";

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
  const { title, price, originalPrice, badge, cta, whatsappMessage, includes, note } = productOffer;
  const savings = originalPrice && originalPrice > price ? originalPrice - price : 0;

  return (
    <section id="oferta" aria-labelledby="oferta-title" className="relative overflow-hidden bg-cream pb-20 sm:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-10 size-[36rem] -translate-x-1/2 rounded-full bg-coral-soft blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div
          data-reveal
          className="relative overflow-hidden rounded-[2.5rem] bg-white px-6 pb-10 pt-12 text-center shadow-lift ring-4 ring-sun sm:px-12 sm:pb-12 sm:pt-14"
        >
          <div aria-hidden="true" className="rainbow-bar absolute inset-x-0 top-0 h-2" />

          {badge && (
            <p className="mx-auto inline-flex items-center gap-2 rounded-full bg-coral-strong px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-white shadow-glow-coral sm:text-sm">
              <Clock className="size-4" aria-hidden="true" />
              {badge}
            </p>
          )}

          <h2 id="oferta-title" className="mt-6 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Empieza hoy con <span className="text-gradient-rainbow">{title}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-lg leading-relaxed text-ink-soft">
            Una experiencia para jugar, respirar y conectar en familia.
          </p>

          <div className="mt-8 flex flex-col items-center gap-1">
            {originalPrice && originalPrice > price && (
              <p className="text-lg font-bold text-ink-soft">
                Antes <span className="line-through decoration-coral-strong decoration-2">{formatCOP(originalPrice)}</span>
              </p>
            )}
            <p className="flex items-end justify-center gap-2 font-display font-semibold leading-none text-ink">
              <span className="text-6xl sm:text-7xl">{formatCOP(price)}</span>
              <span className="pb-2 text-lg text-ink-soft">COP</span>
            </p>
            {savings > 0 && (
              <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-mint-soft px-4 py-1.5 text-sm font-extrabold text-turquoise-strong">
                <Sparkles className="size-4" aria-hidden="true" />
                Ahorras {formatCOP(savings)}
              </p>
            )}
          </div>

          {includes.length > 0 && (
            <ul className="mx-auto mt-8 grid max-w-md gap-3 text-left">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-soft">
                  <Check className="mt-0.5 size-5 shrink-0 text-turquoise-strong" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-9 flex justify-center">
            <ButtonLink href={whatsappLink(whatsappMessage)} variant="whatsapp" size="xl" icon="whatsapp" className="w-full sm:w-auto">
              {cta}
            </ButtonLink>
          </div>
          <p className="mt-4 text-sm text-ink-soft">
            Te atendemos por WhatsApp para completar tu compra.
            {note && <span className="mt-1 block">{note}</span>}
          </p>
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
