/**
 * Preguntas frecuentes.
 * [PERSONALIZAR] Las respuestas marcadas como provisionales deben
 * actualizarse cuando se confirmen formato, duración, precio y forma de
 * acceso del infoproducto. No incluir datos no confirmados.
 */
import { formatCOP, productOffer } from "@/config/site";

export type Faq = { question: string; answer: string };

const priceText = !productOffer
  ? ""
  : productOffer.originalPrice
    ? `Por pocos días tiene un precio especial de ${formatCOP(productOffer.price)} (antes ${formatCOP(productOffer.originalPrice)}). `
    : `Tiene un precio de ${formatCOP(productOffer.price)}. `;

export const faqs: Faq[] = [
  {
    question: "¿Qué es Yoga con Color?",
    answer:
      "Es una propuesta educativa y recreativa para descubrir el yoga de una manera divertida, creativa y adaptada a los niños. A través de colores, movimientos, juegos y ejercicios de respiración, los pequeños exploran su cuerpo y sus emociones mientras comparten momentos especiales con sus padres.",
  },
  {
    question: "¿Para qué edades está diseñado?",
    answer:
      "Está pensado para familias con niños y adolescentes entre los 3 y los 17 años. Las actividades se adaptan a la madurez, las capacidades y los intereses de cada etapa: pequeños exploradores (3 a 6 años), grandes descubridores (7 a 12 años) y jóvenes conscientes (13 a 17 años).",
  },
  {
    question: "¿Necesito tener experiencia practicando yoga?",
    answer:
      "No. La idea es que padres e hijos aprendan juntos, desde cero y a su propio ritmo. Lo más importante es la disposición para jugar, moverse con calma y disfrutar del tiempo compartido.",
  },
  {
    question: "¿Puedo practicarlo con mi hijo?",
    answer:
      "¡Sí! Esa es la esencia de Yoga con Color: crear momentos de conexión entre adultos y niños. Practicar juntos convierte cada movimiento en una oportunidad para jugar, escucharse y construir recuerdos. Siempre recomendamos la supervisión de un adulto.",
  },
  {
    question: "¿Necesitamos materiales especiales?",
    answer:
      "Para empezar basta con un espacio despejado, ropa cómoda y, si lo tienen, un tapete o una manta antideslizante. Si en algún momento se sugiere algún material adicional, te lo informaremos con claridad antes de que adquieras el programa.",
  },
  {
    question: "¿Cuánto tiempo debemos dedicarle?",
    answer:
      "Recomendamos empezar con encuentros cortos, de 10 a 20 minutos, que puedan sostener en el tiempo. La duración ideal depende de la edad y la energía de cada niño. Escríbenos y te contamos cómo está organizada la experiencia.",
  },
  {
    question: "¿Cómo puedo adquirir el infoproducto?",
    answer: `${priceText}Escríbenos por WhatsApp y con gusto te compartiremos la información sobre el formato, el acceso y las condiciones para comenzar.`,
  },
  {
    question: "¿Cómo puedo recibir más información?",
    answer:
      "Puedes escribirnos por WhatsApp al 301 473 1830 usando cualquiera de los botones de esta página. Te responderemos para resolver tus dudas y acompañarte en el inicio de esta experiencia en familia.",
  },
];
