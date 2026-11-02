import type { Tone } from "@/components/ui/IconBlob";

/**
 * Artículos educativos para padres.
 *
 * Criterio editorial: lenguaje sencillo, práctico y responsable.
 * - No se citan estudios específicos ni cifras que no estén verificadas.
 * - No se presentan beneficios como resultados garantizados ni como
 *   tratamientos médicos o psicológicos.
 * - Siempre se recomienda la supervisión de un adulto y respetar los
 *   límites de cada niño.
 */

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "tip"; title: string; text: string };

export type ArticleIcon = "sprout" | "rainbow" | "monitorOff" | "heartHandshake" | "personStanding" | "calendarHeart" | "wind";

export type Article = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  excerpt: string;
  tone: Tone;
  icon: ArticleIcon;
  readingMinutes: number;
  blocks: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "por-que-ensenar-yoga-a-los-ninos",
    title: "¿Por qué enseñar yoga a los niños desde pequeños?",
    shortTitle: "Yoga desde pequeños",
    description:
      "Descubre por qué el yoga infantil puede ser una forma divertida de que los niños conozcan su cuerpo, respiren con calma y compartan tiempo en familia.",
    excerpt:
      "El yoga infantil no busca posturas perfectas: es una invitación a moverse, jugar y conocerse. Te contamos por qué puede ser un buen hábito desde temprana edad.",
    tone: "sun",
    icon: "sprout",
    readingMinutes: 4,
    blocks: [
      {
        type: "p",
        text: "Cuando pensamos en yoga, muchas veces imaginamos silencio absoluto y posturas difíciles. El yoga para niños es otra cosa: es movimiento con imaginación, respiración convertida en juego y pequeños momentos de calma que se viven con alegría.",
      },
      { type: "h2", text: "Un juego que también enseña" },
      {
        type: "p",
        text: "Los niños aprenden a través del cuerpo y del juego. Imitar a un gato que se estira, a un árbol que se mantiene firme o a una mariposa que mueve sus alas es una forma natural de explorar el equilibrio, la coordinación y la flexibilidad sin que se sienta como una obligación.",
      },
      { type: "h2", text: "Lo que el yoga puede aportar en la infancia" },
      {
        type: "p",
        text: "La investigación sobre yoga infantil es un campo en crecimiento. Diversos trabajos sugieren que estas prácticas, adaptadas a la edad, pueden favorecer aspectos como:",
      },
      {
        type: "ul",
        items: [
          "La conciencia corporal: reconocer cómo se siente cada parte del cuerpo.",
          "El equilibrio y la coordinación a través de posturas sencillas.",
          "La respiración consciente como herramienta para hacer una pausa.",
          "La atención, al concentrarse en un movimiento o en la respiración.",
          "La confianza, al descubrir de lo que el propio cuerpo es capaz.",
        ],
      },
      {
        type: "p",
        text: "Cada niño es distinto y los resultados varían. El valor está en la experiencia, en la constancia amable y en el disfrute, no en alcanzar una meta.",
      },
      { type: "h2", text: "¿Por qué empezar temprano?" },
      {
        type: "p",
        text: "Los hábitos que se viven con cariño en la infancia tienden a sentirse naturales con el tiempo. Si un niño asocia la respiración tranquila o el estiramiento con momentos agradables junto a su familia, es más probable que quiera repetirlos.",
      },
      {
        type: "tip",
        title: "Para empezar",
        text: "Elige un momento del día sin prisas, busca un espacio despejado y propón solo dos o tres posturas en forma de juego. Diez minutos con alegría valen más que una sesión larga con presión.",
      },
    ],
  },
  {
    slug: "yoga-y-emociones-en-ninos",
    title: "¿Cómo puede ayudar el yoga a gestionar las emociones?",
    shortTitle: "Yoga y emociones",
    description:
      "Ideas prácticas para que los niños reconozcan y nombren sus emociones a través de la respiración, el movimiento y los colores.",
    excerpt:
      "Nombrar lo que sentimos es el primer paso para entenderlo. El yoga ofrece un lenguaje de cuerpo, respiración y colores para hablar de emociones en familia.",
    tone: "coral",
    icon: "rainbow",
    readingMinutes: 4,
    blocks: [
      {
        type: "p",
        text: "Las emociones no son buenas ni malas: todas nos dan información. Aprender a reconocerlas toma tiempo, tanto para los niños como para los adultos. El yoga puede convertirse en un espacio amable para practicar ese reconocimiento.",
      },
      { type: "h2", text: "El cuerpo también habla" },
      {
        type: "p",
        text: "Cuando estamos enojados, los hombros se tensan; cuando estamos alegres, el cuerpo quiere moverse. Las actividades de yoga invitan a los niños a notar esas señales: “¿Cómo está tu respiración ahora? ¿Dónde sientes la emoción?”.",
      },
      { type: "h2", text: "Un arcoíris de emociones" },
      {
        type: "p",
        text: "Asociar emociones con colores ayuda a los más pequeños a ponerles nombre. Pueden elegir un color para cómo se sienten hoy y, a partir de ahí, escoger un movimiento:",
      },
      {
        type: "ul",
        items: [
          "Si hay mucha energía, posturas activas como el guerrero o la estrella.",
          "Si hay nervios o enojo, respiraciones lentas como la del globo.",
          "Si hay cansancio o tristeza, posturas de descanso como la del niño, acompañadas de un abrazo.",
        ],
      },
      { type: "h2", text: "Acompañar, no corregir" },
      {
        type: "p",
        text: "El objetivo no es que el niño deje de sentir algo, sino que se sienta acompañado mientras lo siente. Validar con frases como “entiendo que estás molesto, respiremos juntos” suele abrir más puertas que pedir calma de inmediato.",
      },
      {
        type: "tip",
        title: "Importante",
        text: "El yoga es un complemento para la vida familiar, no un tratamiento. Si notas emociones muy intensas o persistentes en tu hijo, consulta con un profesional de la salud infantil.",
      },
    ],
  },
  {
    slug: "ninos-momentos-sin-pantallas",
    title: "¿Por qué los niños necesitan momentos sin pantallas?",
    shortTitle: "Momentos sin pantallas",
    description:
      "Por qué vale la pena crear espacios sin pantallas en familia y cómo el movimiento y el juego compartido pueden llenarlos de sentido.",
    excerpt:
      "No se trata de prohibir, sino de equilibrar. Los momentos sin pantallas abren espacio para moverse, imaginar y conversar en familia.",
    tone: "turquoise",
    icon: "monitorOff",
    readingMinutes: 3,
    blocks: [
      {
        type: "p",
        text: "Las pantallas hacen parte de la vida cotidiana y pueden ser útiles. Aun así, los niños también necesitan tiempos para moverse, aburrirse un poco, inventar juegos y conversar cara a cara con los adultos que quieren.",
      },
      { type: "h2", text: "Lo que dicen las recomendaciones" },
      {
        type: "p",
        text: "Organizaciones de salud infantil, como la Organización Mundial de la Salud, recomiendan limitar el tiempo sedentario frente a pantallas en los primeros años y priorizar el juego activo, el sueño suficiente y la interacción con adultos. Tu pediatra puede orientarte según la edad de tu hijo.",
      },
      { type: "h2", text: "Llenar el espacio, no solo vaciarlo" },
      {
        type: "p",
        text: "Apagar la pantalla funciona mejor cuando hay algo atractivo esperando. Una propuesta de movimiento, un juego de respiración o una postura divertida pueden convertirse en ese plan alternativo que los niños esperan con gusto.",
      },
      {
        type: "ul",
        items: [
          "Acuerden juntos un momento del día “desconectado”.",
          "Den el ejemplo: los adultos también guardan el celular.",
          "Preparen un rincón con un tapete o una manta para moverse.",
          "Terminen con una conversación: ¿qué fue lo que más te gustó?",
        ],
      },
      {
        type: "tip",
        title: "Pequeño reto",
        text: "Prueben esta semana tres encuentros de diez minutos sin pantallas. Al final, cada uno puede elegir el color que representa cómo se sintió.",
      },
    ],
  },
  {
    slug: "fortalecer-vinculo-padres-e-hijos",
    title: "¿Cómo fortalecer el vínculo entre padres e hijos?",
    shortTitle: "Fortalecer el vínculo",
    description:
      "Gestos sencillos y cotidianos para construir confianza y conexión con tus hijos, y cómo el yoga en familia puede convertirse en un ritual compartido.",
    excerpt:
      "El vínculo se construye en lo cotidiano: miradas, juegos, escucha y rituales pequeños. Ideas para cultivar la conexión con tus hijos.",
    tone: "pink",
    icon: "heartHandshake",
    readingMinutes: 4,
    blocks: [
      {
        type: "p",
        text: "No hace falta planear grandes actividades para conectar con los hijos. La conexión se construye, sobre todo, en momentos pequeños y repetidos donde el niño siente que tiene toda nuestra atención.",
      },
      { type: "h2", text: "Presencia antes que perfección" },
      {
        type: "p",
        text: "Diez minutos de atención plena —sin celular, sin prisa— pueden sentirse más significativos para un niño que una tarde entera de compañía distraída. Lo importante es que perciba: “ahora estoy contigo”.",
      },
      { type: "h2", text: "Ideas para el día a día" },
      {
        type: "ul",
        items: [
          "Juega a lo que tu hijo propone, siguiendo sus reglas por un rato.",
          "Escucha sin interrumpir y pregunta con curiosidad.",
          "Crea un saludo o un abrazo especial que solo ustedes conozcan.",
          "Comparte un ritual corto antes de dormir: respirar juntos, contar algo bonito del día.",
          "Celebra el esfuerzo, no solo el resultado.",
        ],
      },
      { type: "h2", text: "El yoga como ritual familiar" },
      {
        type: "p",
        text: "Practicar yoga juntos reúne varios ingredientes de la conexión: contacto físico respetuoso, risas, cooperación (como en las posturas en pareja) y un momento de calma compartida al final. Además, los niños ven a sus padres aprendiendo, equivocándose y riendo, lo cual también enseña.",
      },
      {
        type: "tip",
        title: "Recuerda",
        text: "Tu hijo quizás no recuerde todos los juguetes que tuvo, pero recordará cómo se sentía cuando compartías tiempo con él.",
      },
    ],
  },
  {
    slug: "ejercicios-de-yoga-en-familia",
    title: "Cinco ejercicios sencillos para hacer yoga en familia",
    shortTitle: "5 ejercicios en familia",
    description:
      "Cinco ejercicios de yoga sencillos y seguros para practicar con niños en casa: respiración, equilibrio, estiramiento y relajación.",
    excerpt:
      "Del globo que se infla al árbol que crece: cinco propuestas fáciles para empezar a practicar yoga en casa con tus hijos.",
    tone: "mint",
    icon: "personStanding",
    readingMinutes: 5,
    blocks: [
      {
        type: "p",
        text: "No necesitas experiencia ni materiales especiales: un espacio despejado, ropa cómoda y ganas de jugar. Estas cinco propuestas son una puerta de entrada. Adáptalas a la edad y al ritmo de cada niño.",
      },
      {
        type: "steps",
        items: [
          {
            title: "1. La respiración del globo",
            text: "Sentados cómodamente, ponemos las manos en la barriga. Al inhalar por la nariz imaginamos que inflamos un globo de nuestro color favorito; al exhalar despacio, el globo se desinfla. Repetimos de tres a cinco veces.",
          },
          {
            title: "2. El árbol que crece",
            text: "De pie, apoyamos la planta de un pie en el tobillo o la pantorrilla de la otra pierna (nunca sobre la rodilla). Unimos las manos frente al pecho y, si nos sentimos estables, las subimos como ramas. Pueden tomarse de la mano para ayudarse a mantener el equilibrio.",
          },
          {
            title: "3. El gato y la vaca",
            text: "En cuatro apoyos, al inhalar bajamos suavemente la barriga y miramos hacia adelante (la vaca hace “muuu”); al exhalar redondeamos la espalda como un gato que se estira (“miau”). Movimientos lentos y sin forzar.",
          },
          {
            title: "4. La mariposa",
            text: "Sentados, juntamos las plantas de los pies y dejamos que las rodillas caigan hacia los lados. Movemos suavemente las piernas como alas. Pueden contar una historia de mariposas mientras vuelan.",
          },
          {
            title: "5. La estrella que descansa",
            text: "Acostados boca arriba con brazos y piernas abiertos como una estrella, cerramos los ojos y respiramos tranquilos durante uno o dos minutos. El adulto puede narrar un viaje imaginario por un cielo de colores.",
          },
        ],
      },
      { type: "h2", text: "Recomendaciones de seguridad" },
      {
        type: "ul",
        items: [
          "Practiquen siempre con la supervisión de un adulto.",
          "Nada debe doler: si algo molesta, se detiene o se suaviza la postura.",
          "Eviten practicar justo después de comer.",
          "Usen una superficie antideslizante y un espacio sin objetos alrededor.",
          "Si tu hijo tiene alguna condición de salud, consulta antes con su profesional de confianza.",
        ],
      },
    ],
  },
  {
    slug: "rutina-de-bienestar-familiar",
    title: "¿Cómo crear una rutina de bienestar familiar?",
    shortTitle: "Rutina de bienestar",
    description:
      "Pasos prácticos para construir una rutina de bienestar en familia que sea realista, flexible y divertida para niños y adultos.",
    excerpt:
      "Una rutina de bienestar no tiene que ser perfecta ni larga. Te compartimos cómo crear un ritual familiar que todos disfruten.",
    tone: "lilac",
    icon: "calendarHeart",
    readingMinutes: 4,
    blocks: [
      {
        type: "p",
        text: "Las rutinas dan seguridad a los niños: saber qué viene después les ayuda a sentirse tranquilos. Una rutina de bienestar familiar es un espacio que se repite, que todos reconocen y que se espera con gusto.",
      },
      { type: "h2", text: "Cinco pasos para empezar" },
      {
        type: "steps",
        items: [
          {
            title: "1. Elijan el momento",
            text: "Puede ser al despertar, al llegar del colegio o antes de dormir. Lo importante es que sea realista para la familia.",
          },
          {
            title: "2. Empiecen pequeño",
            text: "Entre cinco y quince minutos es suficiente. Es mejor algo corto y constante que algo largo y ocasional.",
          },
          {
            title: "3. Creen una señal de inicio",
            text: "Una canción, encender una luz suave o extender el tapete marcan que el momento especial comenzó.",
          },
          {
            title: "4. Repartan protagonismo",
            text: "Turnen quién elige la postura, el color del día o el juego de respiración. Así los niños se sienten parte.",
          },
          {
            title: "5. Cierren con conexión",
            text: "Un abrazo, una palabra de agradecimiento o compartir algo bonito del día ayudan a cerrar con calidez.",
          },
        ],
      },
      { type: "h2", text: "Flexibilidad ante todo" },
      {
        type: "p",
        text: "Habrá días en que no se pueda o en que los niños no quieran. Está bien. Una rutina amable se retoma sin culpa; lo valioso es el camino que recorren juntos.",
      },
      {
        type: "tip",
        title: "Idea",
        text: "Hagan un calendario de colores: cada día que compartan su momento de bienestar, pinten un círculo con el color de cómo se sintieron.",
      },
    ],
  },
  {
    slug: "respiracion-consciente-para-ninos",
    title: "¿Cómo introducir la respiración consciente mediante el juego?",
    shortTitle: "Respirar jugando",
    description:
      "Juegos de respiración consciente para niños: formas divertidas de enseñar a respirar con calma usando la imaginación.",
    excerpt:
      "Soplar velas, oler flores o inflar globos imaginarios: juegos sencillos para que los niños descubran el poder de su respiración.",
    tone: "sky",
    icon: "wind",
    readingMinutes: 3,
    blocks: [
      {
        type: "p",
        text: "Pedirle a un niño que “respire profundo” puede resultar abstracto. En cambio, invitarlo a oler una flor o a soplar una vela imaginaria convierte la respiración en algo concreto y divertido.",
      },
      { type: "h2", text: "Juegos para respirar" },
      {
        type: "ul",
        items: [
          "Flor y vela: inhalamos por la nariz oliendo una flor y exhalamos por la boca soplando una vela despacito, sin apagarla.",
          "El globo de colores: las manos en la barriga suben y bajan mientras inflamos y desinflamos un globo imaginario.",
          "La serpiente: inhalamos por la nariz y exhalamos haciendo un largo “sssss”.",
          "El peluche que pasea: acostados, ponemos un peluche sobre la barriga y lo “paseamos” arriba y abajo con la respiración.",
          "Respiración del arcoíris: subimos los brazos al inhalar dibujando un arcoíris y los bajamos al exhalar.",
        ],
      },
      { type: "h2", text: "Claves para que funcione" },
      {
        type: "ul",
        items: [
          "Practiquen en momentos tranquilos para que, poco a poco, el juego esté disponible cuando haga falta.",
          "Respiren junto con el niño: el ejemplo es la mejor invitación.",
          "Pocas repeticiones (tres a cinco) son suficientes.",
          "Nunca se fuerza ni se retiene la respiración; si aparece mareo, se vuelve a respirar normal.",
        ],
      },
      {
        type: "tip",
        title: "Pruébalo ahora",
        text: "En la página principal encontrarás un pequeño ejercicio guiado de respiración del globo para hacer en familia.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
