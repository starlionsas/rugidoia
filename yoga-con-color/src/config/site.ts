/**
 * ==================================================================
 *  CONFIGURACIÓN CENTRAL DE YOGA CON COLOR
 * ==================================================================
 *  Todo lo que la marca necesita personalizar está en este archivo.
 *  Busca la etiqueta  [PERSONALIZAR]  para encontrar los datos que
 *  aún no han sido confirmados por el equipo de Yoga con Color.
 *
 *  Regla de oro: no publicar testimonios, precios, certificaciones,
 *  bonificaciones ni resultados que no sean reales y verificables.
 *  Mientras un campo esté vacío (null o []), la sección asociada
 *  simplemente NO se muestra en la página.
 * ==================================================================
 */

const WHATSAPP_NUMBER = "573014731830";
const WHATSAPP_DEFAULT_MESSAGE = "Hola, quiero conocer más sobre Yoga con Color.";

/** Construye un enlace de WhatsApp con un mensaje prellenado. */
export function whatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const siteConfig = {
  name: "Yoga con Color",
  tagline: "Pequeños movimientos, grandes conexiones.",
  heroPhrase: "El mejor regalo que puedes darle a tu hijo es tiempo de calidad contigo.",
  description:
    "Yoga para niños y familias: movimiento, respiración, juego y emociones para compartir tiempo de calidad entre padres e hijos de 3 a 17 años.",

  /**
   * [PERSONALIZAR] URL pública definitiva (dominio propio). Defínela con la
   * variable de entorno NEXT_PUBLIC_SITE_URL en Vercel. Si no existe, se
   * usa automáticamente el dominio de producción que asigna Vercel.
   */
  url: resolveSiteUrl(),

  locale: "es_CO",
  language: "es",

  whatsapp: {
    number: WHATSAPP_NUMBER,
    display: "301 473 1830",
    /** Enlace oficial solicitado por la marca. */
    link: "https://wa.me/573014731830?text=Hola%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20Yoga%20con%20Color.",
  },

  /**
   * [PERSONALIZAR] Redes sociales y correo. Si se dejan vacíos no se
   * muestran (así evitamos enlaces rotos).
   */
  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
    youtube: "",
    email: "",
  },
} as const;

/** Navegación principal (anclas de la landing). */
export const mainNav = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Beneficios", href: "/#beneficios" },
  { label: "Padres e hijos", href: "/#padres-e-hijos" },
  { label: "Yoga con Color", href: "/#yoga-con-color" },
  { label: "Contacto", href: "/#contacto" },
] as const;

/**
 * Mensajes de WhatsApp por punto de contacto. Permiten saber desde qué
 * botón llegó cada conversación sin usar herramientas de rastreo.
 */
export const whatsappMessages = {
  default: WHATSAPP_DEFAULT_MESSAGE,
  ages: "Hola, quiero conocer más sobre Yoga con Color y saber cómo se adapta a la edad de mi hijo.",
  product: "Hola, quiero conocer más sobre Yoga con Color y cómo empezar en familia.",
  article: "Hola, leí uno de sus artículos y quiero conocer más sobre Yoga con Color.",
} as const;

/* ==================================================================
 *  ESPACIOS PREPARADOS PARA INFORMACIÓN FUTURA
 *  Completa estos datos cuando estén confirmados. Las secciones se
 *  activan automáticamente al tener contenido.
 * ================================================================== */

export type Testimonial = {
  /** Nombre o iniciales, con autorización expresa de la familia. */
  name: string;
  /** Ej.: "Mamá de Sofía, 6 años" */
  relation: string;
  quote: string;
};

/** [PERSONALIZAR] Testimonios reales y autorizados. Vacío = sección oculta. */
export const testimonials: Testimonial[] = [];

export type ProductOffer = {
  title: string;
  /** Precio actual, en pesos colombianos (solo números). */
  price: number;
  /** Precio normal antes del descuento (opcional). */
  originalPrice?: number;
  /** Mensaje de la promoción, p. ej. "Precio especial por pocos días". */
  badge?: string;
  /** Texto del botón de compra. */
  cta: string;
  /** Mensaje prellenado de WhatsApp para el botón de compra. */
  whatsappMessage: string;
  /** Qué incluye el infoproducto (confirmado con la guía PDF). Vacío = no se muestra. */
  includes: string[];
  /** Nota opcional: formato, acceso, garantía, etc. */
  note?: string;
};

/** Formatea un valor en pesos colombianos: 24000 -> "$24.000". */
export function formatCOP(value: number): string {
  return `$${value.toLocaleString("es-CO", { maximumFractionDigits: 0 })}`.replace(/,/g, ".");
}

/**
 * Oferta del infoproducto (confirmada por la marca).
 * [PERSONALIZAR] Cuando termine la promoción, actualiza el precio o elimina
 * originalPrice y badge. null = sección oculta.
 */
export const productOffer: ProductOffer | null = {
  title: "Yoga con Color",
  price: 24000,
  originalPrice: 47000,
  badge: "Precio especial por pocos días",
  cta: "Llévatelo ahora",
  whatsappMessage: "Hola, quiero llevarme la guía Yoga con Color con el precio especial de $24.000.",
  includes: [
    "Guía digital ilustrada en PDF (22 páginas)",
    "Cuento “El Secreto de los Animales y el Sabio de la Montaña”",
    "10 posturas de yoga explicadas paso a paso",
    "10 juegos de atención plena para bajar la energía",
    "Aventura guiada “En busca del Cristal de la Calma”",
    "Relajación final: el Ritual del Color Interior",
    "Fichas para imprimir: “Soy Único” y “La Receta de la Paz”",
    "Páginas para colorear",
  ],
  note: "Ideal para niños y niñas de 3 a 10 años. También es un gran apoyo para docentes y cuidadores que trabajan con grupos.",
};

export type Facilitator = {
  name: string;
  role: string;
  bio: string;
  /** Ruta a la foto dentro de /public, p. ej. "/equipo/facilitadora.webp" */
  photo?: string;
  /** Solo formación y certificaciones verificables. */
  credentials: string[];
};

/** [PERSONALIZAR] Persona o equipo detrás de Yoga con Color. null = sección oculta. */
export const facilitator: Facilitator | null = null;
