import Link from "next/link";
import { Heart } from "lucide-react";
import { mainNav, siteConfig } from "@/config/site";
import { articles } from "@/content/articles";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  const socials = Object.entries(siteConfig.social).filter(([key, url]) => key !== "email" && url);
  const socialLabels: Record<string, string> = {
    instagram: "Instagram",
    facebook: "Facebook",
    tiktok: "TikTok",
    youtube: "YouTube",
  };

  return (
    <footer className="relative overflow-hidden bg-ink pb-28 pt-16 text-white/80 sm:pb-16">
      <div aria-hidden="true" className="rainbow-bar absolute inset-x-0 top-0 h-2" />
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-12 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr] lg:px-8">
        <div className="col-span-2 max-w-sm lg:col-span-1">
          <Logo tone="light" />
          <p className="mt-5 font-display text-xl text-white">{siteConfig.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Un espacio para que niños, niñas, adolescentes y sus familias descubran el yoga a través del
            movimiento, los colores y el juego.
          </p>
        </div>

        <nav aria-label="Secciones">
          <h2 className="font-display text-lg font-semibold text-white">Explora</h2>
          <ul className="mt-4 grid gap-2.5 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-sun">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/#aprende" className="transition-colors hover:text-sun">
                Aprende en familia
              </Link>
            </li>
            <li>
              <Link href="/#preguntas" className="transition-colors hover:text-sun">
                Preguntas frecuentes
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Artículos para padres">
          <h2 className="font-display text-lg font-semibold text-white">Para padres</h2>
          <ul className="mt-4 grid gap-2.5 text-sm">
            {articles.slice(0, 5).map((a) => (
              <li key={a.slug}>
                <Link href={`/aprende/${a.slug}`} className="transition-colors hover:text-sun">
                  {a.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-span-2 lg:col-span-1">
          <h2 className="font-display text-lg font-semibold text-white">Hablemos</h2>
          <a
            href={siteConfig.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-extrabold text-white transition hover:bg-whatsapp-dark"
          >
            <WhatsAppIcon className="size-5" />
            {siteConfig.whatsapp.display}
            <span className="sr-only"> en WhatsApp (se abre en una nueva pestaña)</span>
          </a>
          {siteConfig.social.email && (
            <p className="mt-4 text-sm">
              <a href={`mailto:${siteConfig.social.email}`} className="hover:text-sun">
                {siteConfig.social.email}
              </a>
            </p>
          )}
          {socials.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-3 text-sm">
              {socials.map(([key, url]) => (
                <li key={key}>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-sun">
                    {socialLabels[key] ?? key}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="rounded-2xl bg-white/5 p-5 text-xs leading-relaxed text-white/70">
          <strong className="text-white">Nota importante:</strong> Yoga con Color es una propuesta educativa y
          recreativa para compartir en familia. No reemplaza la orientación médica, psicológica ni terapéutica.
          Las actividades deben realizarse siempre con la supervisión de un adulto, respetando la edad, las
          capacidades y los límites de cada niño. Si tu hijo tiene alguna condición de salud, consulta primero
          con su profesional de confianza.
        </p>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p className="inline-flex items-center gap-1.5">
            Hecho con <Heart className="size-3.5 fill-coral text-coral" aria-label="amor" /> para las familias
          </p>
        </div>
      </div>
    </footer>
  );
}
