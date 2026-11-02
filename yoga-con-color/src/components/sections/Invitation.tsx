import { Heart, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

export function Invitation() {
  return (
    <section id="invitacion" aria-labelledby="invitacion-title" className="relative bg-cream px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div
        data-reveal
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-coral-strong via-pink-strong to-lilac-strong px-6 py-16 text-center shadow-lift sm:rounded-[3rem] sm:px-12 sm:py-20"
      >
        {/* Decoración */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <svg viewBox="0 0 400 200" className="absolute -bottom-6 left-1/2 w-[140%] max-w-none -translate-x-1/2 opacity-25 sm:w-full" preserveAspectRatio="xMidYMax meet">
            <g fill="none" strokeWidth="14" strokeLinecap="round">
              <path d="M40 200a160 160 0 0 1 320 0" stroke="#ffc93c" />
              <path d="M70 200a130 130 0 0 1 260 0" stroke="#8ee1c2" />
              <path d="M100 200a100 100 0 0 1 200 0" stroke="#7cc8f8" />
            </g>
          </svg>
          <div className="absolute -left-16 -top-16 size-56 rounded-full bg-sun/30 blur-3xl" />
          <div className="absolute -right-10 top-10 size-40 rounded-full bg-turquoise/30 blur-3xl" />
          <Heart className="absolute left-[8%] top-[18%] hidden size-8 animate-float sm:block fill-white/40 text-white/40" />
          <Sparkles className="absolute right-[10%] top-[14%] hidden size-9 animate-float sm:block text-sun" style={{ animationDelay: "-2s" }} />
          <Heart className="absolute bottom-[22%] right-[14%] hidden size-6 animate-float fill-sun/70 text-sun/70 sm:block" style={{ animationDelay: "-4s" }} />
        </div>

        <div className="relative">
          <p className="mx-auto inline-flex rounded-full bg-white/15 px-4 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.14em] text-white sm:text-xs sm:tracking-[0.18em]">
            Una invitación para las familias
          </p>
          <h2 id="invitacion-title" className="mx-auto mt-6 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Regálale a tu hijo algo que no se compra: <span className="text-sun">tiempo contigo.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/95 sm:text-xl">
            Empiecen juntos una experiencia donde cada movimiento sea una oportunidad para aprender, jugar y
            conectar.
          </p>
          <div className="mt-10 flex justify-center">
            <ButtonLink href="#oferta" variant="light" size="xl" className="w-full sm:w-auto [&_svg]:text-coral-strong">
              Quiero conocer Yoga con Color
            </ButtonLink>
          </div>
          <p className="mt-5 text-sm font-bold text-white/90">Precio especial por pocos días · Recíbela por WhatsApp</p>
        </div>
      </div>
    </section>
  );
}
