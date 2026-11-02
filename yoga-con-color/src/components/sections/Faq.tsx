import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/content/faqs";

const dots = ["bg-coral", "bg-sun", "bg-turquoise", "bg-mint", "bg-sky", "bg-lilac", "bg-pink", "bg-coral"];

export function Faq() {
  return (
    <section id="preguntas" aria-labelledby="preguntas-title" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="preguntas-title"
          eyebrow="Preguntas frecuentes"
          title="Resolvemos tus dudas"
          intro={<p>Si no encuentras lo que buscas, escríbenos por WhatsApp. Con gusto te ayudamos.</p>}
        />

        <div className="mt-12 grid gap-3">
          {faqs.map((faq, i) => (
            <details
              key={faq.question}
              data-reveal
              className="group rounded-3xl bg-cream ring-1 ring-ink/5 transition-colors open:bg-white open:shadow-soft"
              {...(i === 0 ? { open: true } : {})}
            >
              <summary className="flex cursor-pointer items-center gap-4 rounded-3xl px-5 py-5 text-left sm:px-7">
                <span aria-hidden="true" className={`size-3 shrink-0 rounded-full ${dots[i % dots.length]}`} />
                <span className="flex-1 font-display text-lg font-semibold leading-snug text-ink sm:text-xl">
                  {faq.question}
                </span>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white shadow-soft transition-transform duration-300 group-open:rotate-180">
                  <ChevronDown className="size-5 text-ink" aria-hidden="true" />
                </span>
              </summary>
              <div className="px-5 pb-6 pl-12 sm:px-7 sm:pl-14">
                <p className="leading-relaxed text-ink-soft">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
