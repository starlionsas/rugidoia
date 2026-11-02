/**
 * Preguntas frecuentes.
 * Respuestas basadas en el contenido real de la guía PDF y en el precio
 * confirmado. Pago por Nequi y entrega del PDF por WhatsApp (confirmado).
 */
import { formatCOP, productOffer } from "@/config/site";

export type Faq = { question: string; answer: string };

const priceText = !productOffer
  ? ""
  : productOffer.originalPrice
    ? `Por pocos días tiene un precio especial de ${formatCOP(productOffer.price)} (antes ${formatCOP(productOffer.originalPrice)}). `
    : `Tiene un precio de ${formatCOP(productOffer.price)}. `;

const purchaseText = productOffer
  ? `Es muy fácil: 1) escríbenos por WhatsApp con el botón “Llévatelo ahora”, 2) realiza el pago por ${productOffer.payment.method} al ${productOffer.payment.number} y 3) al confirmar tu pago te enviamos la guía en PDF por el mismo WhatsApp.`
  : "Escríbenos por WhatsApp y te indicamos cómo recibir tu guía.";

export const faqs: Faq[] = [
  {
    question: "¿Qué es Yoga con Color?",
    answer:
      "Es una guía digital ilustrada (PDF de 22 páginas) para descubrir el yoga de una manera divertida y creativa. Incluye un cuento, 10 posturas explicadas paso a paso, 10 juegos de atención plena, una aventura guiada, una relajación final, fichas para imprimir y páginas para colorear, para que niños y adultos jueguen, respiren y conecten juntos.",
  },
  {
    question: "¿Para qué edades está diseñado?",
    answer:
      "La guía está pensada especialmente para niños y niñas de 3 a 10 años. Muchas de sus actividades de respiración y relajación también pueden adaptarse para compartirlas con hermanos mayores y adolescentes, siempre respetando la edad y las capacidades de cada uno.",
  },
  {
    question: "¿Necesito tener experiencia practicando yoga?",
    answer:
      "No. Cada postura viene explicada paso a paso, con su significado y sus beneficios, y las actividades están contadas como juegos e historias. Padres e hijos pueden aprender juntos, desde cero y a su propio ritmo.",
  },
  {
    question: "¿Puedo practicarlo con mi hijo?",
    answer:
      "¡Sí! Esa es la esencia de Yoga con Color: crear momentos de conexión entre adultos y niños. Practicar juntos convierte cada movimiento en una oportunidad para jugar, escucharse y construir recuerdos. Siempre recomendamos la supervisión de un adulto.",
  },
  {
    question: "¿Sirve también para docentes o para trabajar con grupos?",
    answer:
      "Sí. Además de las posturas, la guía incluye juegos pensados para grupos (como Pasar la Energía o Adivina el Animal) y un guion de clase completo, “En busca del Cristal de la Calma”, en el que quien guía se convierte en cuentacuentos.",
  },
  {
    question: "¿Necesitamos materiales especiales?",
    answer:
      "No. Basta con un espacio despejado, ropa cómoda y, si lo tienen, un tapete. Para algunas actividades opcionales sirven una campana o un sonido del celular, colores para pintar y una impresora para las fichas.",
  },
  {
    question: "¿Cuánto tiempo debemos dedicarle?",
    answer:
      "El que tengan. Cada postura o juego toma pocos minutos, así que pueden practicar ratos cortos en cualquier momento del día. Cuando quieran una experiencia más completa, la aventura guiada “En busca del Cristal de la Calma” dura entre 30 y 40 minutos.",
  },
  {
    question: "¿Cómo puedo adquirir el infoproducto?",
    answer: `${priceText}${purchaseText}`,
  },
  {
    question: "¿Cómo recibo la guía?",
    answer:
      "Te la enviamos directamente por WhatsApp, en formato PDF, en cuanto se confirme tu pago. Puedes verla en el celular, la tablet o el computador, e imprimir las fichas cuando quieras.",
  },
  {
    question: "¿Cómo puedo recibir más información?",
    answer:
      "Puedes escribirnos por WhatsApp al 301 473 1830 usando cualquiera de los botones de esta página. Te responderemos para resolver tus dudas y acompañarte en el inicio de esta experiencia en familia.",
  },
];
