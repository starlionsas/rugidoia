import { Gift } from "lucide-react";

/** Franja con la frase protagonista de la marca. */
export function QuoteBand() {
  return (
    <section aria-label="Frase de Yoga con Color" className="relative bg-cream px-4 py-6 sm:px-6 lg:px-8">
      <div
        data-reveal
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-ink px-6 py-12 text-center shadow-lift sm:px-12 sm:py-16"
      >
        <div aria-hidden="true" className="rainbow-bar absolute inset-x-0 top-0 h-2" />
        <div aria-hidden="true" className="absolute -left-10 -top-10 size-40 rounded-full bg-coral/20 blur-2xl" />
        <div aria-hidden="true" className="absolute -bottom-12 -right-10 size-48 rounded-full bg-turquoise/20 blur-2xl" />
        <Gift className="relative mx-auto size-10 text-sun" aria-hidden="true" />
        <p className="relative mx-auto mt-5 max-w-3xl font-display text-2xl font-medium leading-snug text-white sm:text-4xl">
          “El mejor regalo que puedes darle a tu hijo es{" "}
          <span className="text-sun">tiempo de calidad contigo</span>.”
        </p>
      </div>
    </section>
  );
}
