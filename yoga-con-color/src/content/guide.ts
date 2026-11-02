/**
 * Contenido real de la guía "Yoga con Color: Guía para Niños" (PDF de 22
 * páginas suministrado por la marca). Todo lo que aparece aquí está en la
 * guía; no agregar elementos que no existan en ella.
 */

export const guide = {
  title: "Yoga con Color: Guía para Niños",
  format: "Guía digital en PDF",
  pages: 22,
  ages: "3 a 10 años",
  cover: "/guia/portada.webp",
};

export type GuideItemIcon = "book" | "paw" | "gamepad" | "map" | "sparkles" | "fingerprint" | "chef" | "palette";

/** Lo que incluye la guía, en el orden en que aparece. */
export const guideContents: { title: string; detail: string; icon: GuideItemIcon; tone: string }[] = [
  {
    title: "Un cuento para empezar",
    detail: "“El Secreto de los Animales y el Sabio de la Montaña”: Ravi descubre que el yoga es el idioma secreto de los animales.",
    icon: "book",
    tone: "bg-sun-soft",
  },
  {
    title: "10 posturas ilustradas, paso a paso",
    detail: "León, Árbol, Rana, Estrella, Cobra, Mariposa, Gato, Vaca, Respiración del Globo y Postura del Niño, con su significado y sus beneficios.",
    icon: "paw",
    tone: "bg-coral-soft",
  },
  {
    title: "10 juegos de atención plena",
    detail: "Técnicas lúdicas como la Campana Silenciosa o la Goma de Pegar Yóguica, pensadas para “bajar las revoluciones” cuando hay mucha energía.",
    icon: "gamepad",
    tone: "bg-turquoise-soft",
  },
  {
    title: "Una aventura guiada completa",
    detail: "El guion “En busca del Cristal de la Calma”: una sesión de 30 a 40 minutos contada como historia, que va de la energía al silencio.",
    icon: "map",
    tone: "bg-sky-soft",
  },
  {
    title: "El Ritual del Color Interior",
    detail: "Una relajación final, casi en susurro, para que el niño descubra “su color de la calma” y pueda volver a él cuando lo necesite.",
    icon: "sparkles",
    tone: "bg-lilac-soft",
  },
  {
    title: "Juego “Soy Único” + ficha imprimible",
    detail: "Con la metáfora de la huella digital, cada niño reconoce sus talentos, sus sueños y lo que lo hace especial.",
    icon: "fingerprint",
    tone: "bg-pink-soft",
  },
  {
    title: "“La Receta de la Paz” + ficha imprimible",
    detail: "Una dinámica para descubrir, como en una receta, los ingredientes del respeto y la buena convivencia.",
    icon: "chef",
    tone: "bg-mint-soft",
  },
  {
    title: "Páginas para colorear",
    detail: "Ilustraciones de las posturas (como la culebra y el león) para recordarlas mientras se pinta y se juega.",
    icon: "palette",
    tone: "bg-sun-soft",
  },
];

/** Vista previa de páginas reales de la guía. */
export const guidePreviews = [
  { src: "/guia/postura-leon.webp", width: 560, height: 751, caption: "Postura del León, paso a paso" },
  { src: "/guia/ficha-identidad-unica.webp", width: 560, height: 717, caption: "Ficha “Mi identidad única”" },
  { src: "/guia/colorear-leon.webp", width: 560, height: 980, caption: "Página para colorear" },
];

/**
 * Situaciones cotidianas que viven las familias y el recurso de la guía
 * que les ayuda. Tono empático: sin culpa ni miedo.
 */
export const everydayMoments: { moment: string; answer: string; tools: string; emoji: string; tone: string }[] = [
  {
    emoji: "🌪️",
    moment: "Cuando hay tanta energía que nadie logra concentrarse",
    answer: "Juegos que bajan las revoluciones sin gritos ni regaños.",
    tools: "La Goma de Pegar Yóguica · La Campana Silenciosa",
    tone: "bg-coral-soft",
  },
  {
    emoji: "🌋",
    moment: "Cuando las emociones explotan como un volcán",
    answer: "Respirar lento, como el viento, hasta que el volcán se enfría.",
    tools: "Respiración del Globo · Soplar la Vela · Postura del León",
    tone: "bg-sun-soft",
  },
  {
    emoji: "🌙",
    moment: "Cuando llega la noche y cuesta desconectarse",
    answer: "Un cierre suave, casi en susurro, para terminar el día en calma.",
    tools: "Ritual del Color Interior · Postura del Niño",
    tone: "bg-lilac-soft",
  },
  {
    emoji: "📱",
    moment: "Cuando las pantallas se quieren quedar con la tarde",
    answer: "Una aventura para vivir juntos, con historia, movimiento y misterio.",
    tools: "Cuento de Ravi · “En busca del Cristal de la Calma”",
    tone: "bg-sky-soft",
  },
  {
    emoji: "💛",
    moment: "Cuando quieres que crezca sabiendo lo valioso que es",
    answer: "Actividades para reconocer sus talentos y aprender a convivir.",
    tools: "Juego “Soy Único” · La Receta de la Paz",
    tone: "bg-pink-soft",
  },
  {
    emoji: "🦁",
    moment: "Cuando buscas un plan distinto para hacer en casa",
    answer: "Convertirse en leones, ranas, mariposas y estrellas… juntos.",
    tools: "10 posturas de animales y naturaleza",
    tone: "bg-mint-soft",
  },
];
