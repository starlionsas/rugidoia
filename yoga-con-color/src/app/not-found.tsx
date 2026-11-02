import { ButtonLink } from "@/components/ui/Button";
import { Cloud, Sparkle } from "@/components/illustrations/decor";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80dvh] items-center justify-center overflow-hidden bg-sky-soft px-4 pb-20 pt-32 text-center">
      <svg aria-hidden="true" viewBox="0 0 600 300" className="pointer-events-none absolute inset-x-0 top-24 mx-auto w-full max-w-3xl opacity-80">
        <Cloud x={120} y={80} scale={0.8} className="animate-float-slow" />
        <Cloud x={470} y={140} scale={0.6} className="animate-float" />
        <Sparkle x={300} y={50} scale={1.2} color="#ffc93c" />
      </svg>
      <div className="relative max-w-xl">
        <p className="font-display text-7xl font-semibold text-sky sm:text-8xl">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">Esta página se fue a jugar entre las nubes</h1>
        <p className="mt-4 text-lg text-ink-soft">
          Respiremos profundo y volvamos juntos al inicio para seguir descubriendo Yoga con Color.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/">Volver al inicio</ButtonLink>
        </div>
      </div>
    </section>
  );
}
