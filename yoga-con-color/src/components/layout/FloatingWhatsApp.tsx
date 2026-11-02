import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

/** Botón flotante de WhatsApp, visible durante toda la navegación. */
export function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.whatsapp.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar por WhatsApp con Yoga con Color (se abre en una nueva pestaña)"
      className="group fixed bottom-4 right-4 z-40 flex items-center gap-3 sm:bottom-6 sm:right-6"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-ink opacity-0 shadow-lift transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 md:block">
        ¿Hablamos?
      </span>
      <span className="relative flex size-16 items-center justify-center rounded-full bg-whatsapp text-white shadow-glow-green ring-4 ring-white transition-transform duration-300 group-hover:scale-105">
        <span aria-hidden="true" className="absolute inset-0 rounded-full bg-whatsapp animate-ping-soft" />
        <WhatsAppIcon className="relative size-8" />
      </span>
    </a>
  );
}
