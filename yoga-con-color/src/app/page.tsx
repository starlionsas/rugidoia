import { StructuredData } from "@/components/StructuredData";
import { Ages } from "@/components/sections/Ages";
import { Benefits } from "@/components/sections/Benefits";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Invitation } from "@/components/sections/Invitation";
import { Learn } from "@/components/sections/Learn";
import { Facilitator, Offer, Testimonials } from "@/components/sections/Prepared";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { Session } from "@/components/sections/Session";
import { Together } from "@/components/sections/Together";
import { WhatIs } from "@/components/sections/WhatIs";
import { siteConfig } from "@/config/site";
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
