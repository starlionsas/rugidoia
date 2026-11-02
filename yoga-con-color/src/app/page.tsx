import { StructuredData } from "@/components/StructuredData";
import { Ages } from "@/components/sections/Ages";
import { Benefits } from "@/components/sections/Benefits";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { GuideInside } from "@/components/sections/GuideInside";
import { Moments } from "@/components/sections/Moments";
import { Hero } from "@/components/sections/Hero";
import { Invitation } from "@/components/sections/Invitation";
import { Learn } from "@/components/sections/Learn";
import { Facilitator, Offer, Testimonials } from "@/components/sections/Prepared";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { Session } from "@/components/sections/Session";
import { Together } from "@/components/sections/Together";
import { WhatIs } from "@/components/sections/WhatIs";
import { productOffer, siteConfig } from "@/config/site";
import { guide } from "@/content/guide";
import { faqs } from "@/content/faqs";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        slogan: siteConfig.tagline,
        logo: `${siteConfig.url}/icon.svg`,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: "+57 301 473 1830",
          availableLanguage: ["Spanish"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: "es",
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      ...(productOffer
        ? [
            {
              "@type": "Product",
              name: guide.title,
              description:
                "Guía digital ilustrada de yoga para niños de 3 a 10 años: cuento, 10 posturas, 10 juegos de atención plena, aventura guiada, relajación, fichas imprimibles y páginas para colorear.",
              image: `${siteConfig.url}${guide.cover}`,
              brand: { "@id": `${siteConfig.url}/#organization` },
              offers: {
                "@type": "Offer",
                price: productOffer.price,
                priceCurrency: "COP",
                availability: "https://schema.org/InStock",
                url: `${siteConfig.url}/#oferta`,
              },
            },
          ]
        : []),
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <Hero />
      <Benefits />
      <Together />
      <QuoteBand />
      <WhatIs />
      <GuideInside />
      <Moments />
      <Offer />
      <Ages />
      <Session />
      <Testimonials />
      <Facilitator />
      <Learn />
      <Invitation />
      <Faq />
      <Contact />
    </>
  );
}
