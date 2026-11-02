import { Heart, Sparkles, Wind } from "lucide-react";
import { HeroIllustration } from "@/components/illustrations/HeroIllustration";
import { ButtonLink } from "@/components/ui/Button";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden bg-cream pt-28 sm:pt-32">
      {/* Fondos decorativos */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 size-96 rounded-full bg-sun-soft blur-3xl" />
        <div className="absolute -right-24 top-1/3 size-[28rem] rounded-full bg-lilac-soft blur-3xl" />
        <div className="absolute bottom-0 left-1/3 size-80 rounded-full bg-turquoise-soft blur-3xl" />
        <div className="bg-dots absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-10 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:px-8 lg:pb-16">
        <div className="text-center lg:text-left">
          <p
            className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-turquoise-strong shadow-soft sm:text-sm"
          >
            <Sparkles className="size-4 text-sun-strong" aria-hidden="true" />
            Yoga para niños y familias
          </p>

          <h1
            id="hero-title"
            style={{ animationDelay: "80ms" }}
            className="animate-fade-up mt-6 text-[2.5rem] font-semibold leading-[1.05] text-ink sm:text-6xl lg:text-[4.1rem]"
          >
            Más que yoga, <span className="text-gradient-rainbow">momentos que conectan</span> para toda la vida.
          </h1>

          <p
            style={{ animationDelay: "160ms" }}
            className="animate-fade-up mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl lg:mx-0"
          >
            Descubre cómo el movimiento, la respiración y el juego pueden convertirse en momentos mágicos entre
            tú y tus hijos.
          </p>

          <div
            style={{ animationDelay: "240ms" }}
            className="animate-fade-up mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start"
          >
            <ButtonLink href="#yoga-con-color" variant="primary">
              Descubre Yoga con Color
            </ButtonLink>
            <ButtonLink href="#padres-e-hijos" variant="secondary" icon="none">
              <span className="inline-flex items-center gap-2">
                <Heart className="size-5 fill-coral text-coral-strong" aria-hidden="true" />
                Quiero conectar con mi hijo
              </span>
            </ButtonLink>
          </div>

          <ul
            style={{ animationDelay: "320ms" }}
            className="animate-fade-up mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-bold text-ink-soft lg:justify-start"
          >
            {[
              { dot: "bg-sun", label: "Niños de 3 a 17 años" },
              { dot: "bg-turquoise", label: "Para compartir en familia" },
              { dot: "bg-coral", label: "Juego, respiración y color" },
            ].map((item) => (
              <li key={item.label} className="inline-flex items-center gap-2">
                <span aria-hidden="true" className={`size-2.5 rounded-full ${item.dot}`} />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up relative mx-auto w-full max-w-[34rem]" style={{ animationDelay: "150ms" }}>
          <HeroIllustration className="h-auto w-full drop-shadow-[0_30px_40px_rgba(43,37,80,0.12)]" />

          <div className="absolute -left-3 bottom-[16%] hidden animate-float items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lift backdrop-blur sm:flex">
            <span className="flex size-10 items-center justify-center rounded-xl bg-coral-soft">
              <Heart className="size-5 fill-coral text-coral-strong" aria-hidden="true" />
            </span>
            <span className="text-left">
              <span className="block font-display text-base font-semibold leading-tight text-ink">Tiempo de calidad</span>
              <span className="block text-xs font-bold text-ink-soft">sin pantallas</span>
            </span>
          </div>

          <div
            className="absolute -right-3 top-[46%] hidden animate-float items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lift backdrop-blur sm:flex"
            style={{ animationDelay: "-3.5s" }}
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-turquoise-soft">
              <Wind className="size-5 text-turquoise-strong" aria-hidden="true" />
            </span>
            <span className="text-left">
              <span className="block font-display text-base font-semibold leading-tight text-ink">Respiramos</span>
              <span className="block text-xs font-bold text-ink-soft">juntos</span>
            </span>
          </div>
        </div>
      </div>

      <p className="relative mx-auto max-w-7xl px-4 pb-6 text-center font-display text-xl font-medium text-lilac-strong sm:text-2xl">
        {siteConfig.tagline}
      </p>

      <WaveDivider fill="#ffffff" />
    </section>
  );
}
