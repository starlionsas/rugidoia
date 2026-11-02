/**
 * Secciones preparadas para información futura. Solo se muestran cuando
 * los datos correspondientes se completan en src/config/site.ts.
 * Así evitamos publicar testimonios, precios o credenciales inventadas.
 * La oferta (precio) ya está confirmada por la marca.
 */
import Image from "next/image";
import { Check, Clock, Quote, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { GuideCover } from "./GuideInside";
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
    <section id="oferta" aria-labelledby="oferta-title" className="relative overflow-hidden bg-gradient-to-b from-cream to-white py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-10 size-[40rem] -translate-x-1/2 rounded-full bg-coral-soft blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          data-reveal
          className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-lift ring-4 ring-sun"
        >
          <div aria-hidden="true" className="rainbow-bar absolute inset-x-0 top-0 z-10 h-2" />

          <div className="grid md:grid-cols-[0.85fr_1.15fr]">
            {/* Portada + lo que incluye */}
            <div className="bg-gradient-to-b from-sun-soft to-pink-soft px-6 pb-8 pt-12 sm:px-10">
              <GuideCover className="mx-auto max-w-[15rem] -rotate-3" />
              {includes.length > 0 && (
                <>
                  <h3 className="mt-10 text-lg font-semibold text-ink">Esto es lo que te llevas:</h3>
                  <ul className="mt-4 grid gap-2.5">
                    {includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm font-semibold leading-snug text-ink">
                        <Check className="mt-0.5 size-4 shrink-0 rounded-full bg-turquoise-strong p-0.5 text-white" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Precio y compra */}
            <div className="flex flex-col items-center justify-center px-6 py-12 text-center sm:px-10">
              {badge && (
                <p className="inline-flex items-center gap-2 rounded-full bg-coral-strong px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-white shadow-glow-coral sm:text-sm">
                  <Clock className="size-4" aria-hidden="true" />
                  {badge}
                </p>
              )}

              <h2 id="oferta-title" className="mt-6 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                Llévate <span className="text-gradient-rainbow">{title}</span> hoy
              </h2>
              <p className="mx-auto mt-3 max-w-md text-lg leading-relaxed text-ink-soft">
                Cuesta menos que un juguete… y te deja algo que no se olvida: momentos juntos.
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

              <div className="mt-9 flex w-full justify-center">
                <ButtonLink href={whatsappLink(whatsappMessage)} variant="whatsapp" size="xl" icon="whatsapp" className="w-full sm:w-auto">
                  {cta}
                </ButtonLink>
              </div>
              <p className="mt-4 text-sm text-ink-soft">Te atendemos por WhatsApp para completar tu compra.</p>
              {note && <p className="mt-6 max-w-md rounded-2xl bg-cream px-4 py-3 text-sm leading-relaxed text-ink">{note}</p>}
            </div>
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
