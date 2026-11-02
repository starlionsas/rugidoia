import { MessageCircleHeart, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { Cloud, Flower, Heart as HeartShape, SmilingSun, Sparkle } from "@/components/illustrations/decor";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const reasons = [
  { icon: MessageCircleHeart, text: "Atención directa y cercana" },
  { icon: Sparkles, text: "Te contamos cómo empezar" },
  { icon: ShieldCheck, text: "Sin compromiso de compra" },
];

export function Contact() {
  return (
    <section id="contacto" aria-labelledby="contacto-title" className="relative overflow-hidden bg-gradient-to-b from-sun-soft via-coral-soft/70 to-pink-soft py-20 sm:py-28">
      {/* Escena decorativa */}
      <svg aria-hidden="true" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" className="pointer-events-none absolute inset-0 size-full">
        <g fill="none" strokeLinecap="round" strokeWidth="26" opacity="0.35">
          <path d="M-40 640a420 420 0 0 1 840 0" stroke="#ff8a6b" />
          <path d="M0 640a380 380 0 0 1 760 0" stroke="#ffc93c" />
          <path d="M40 640a340 340 0 0 1 680 0" stroke="#8ee1c2" />
          <path d="M80 640a300 300 0 0 1 600 0" stroke="#7cc8f8" />
        </g>
        <Cloud x={1220} y={130} scale={0.9} className="animate-float-slow" />
        <Cloud x={260} y={90} scale={0.6} />
        <SmilingSun x={1320} y={470} scale={0.8} id="contact-sun" />
        <Flower x={110} y={540} scale={1.2} />
        <Flower x={1150} y={545} scale={1} petal="#c3a8f0" />
        <Sparkle x={1000} y={120} scale={1.2} color="#ffffff" />
        <Sparkle x={420} y={200} scale={0.9} color="#c3a8f0" />
        <HeartShape x={980} y={480} scale={1.1} color="#f0517a" />
      </svg>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div data-reveal className="rounded-[2.5rem] bg-white/85 px-5 py-12 shadow-lift backdrop-blur sm:px-14 sm:py-16">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full bg-whatsapp/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-whatsapp">
            <Phone className="size-4" aria-hidden="true" />
            Contacto
          </p>
          <h2 id="contacto-title" className="mx-auto mt-6 max-w-2xl text-3xl font-semibold leading-tight text-ink sm:text-5xl">
            Tu próxima aventura en familia <span className="text-gradient-rainbow">comienza aquí.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            ¿Quieres conocer más sobre Yoga con Color? Escríbenos y descubre cómo comenzar esta experiencia con tus
            hijos.
          </p>

          <div className="mt-10 flex justify-center">
            <ButtonLink href={siteConfig.whatsapp.link} variant="whatsapp" size="xl" icon="whatsapp" className="w-full sm:w-auto">
              Hablar por WhatsApp
            </ButtonLink>
          </div>

          <p className="mt-5 text-ink-soft">
            o escríbenos al{" "}
            <a
              href={siteConfig.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold text-ink underline decoration-whatsapp decoration-2 underline-offset-4 hover:text-whatsapp"
            >
              {siteConfig.whatsapp.display}
              <span className="sr-only"> en WhatsApp (se abre en una nueva pestaña)</span>
            </a>
          </p>

          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {reasons.map((r) => (
              <li key={r.text} className="flex items-center justify-center gap-2 rounded-2xl bg-cream px-4 py-3 text-sm font-bold text-ink">
                <r.icon className="size-5 shrink-0 text-whatsapp" aria-hidden="true" />
                {r.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
