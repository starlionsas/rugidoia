import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Lightbulb } from "lucide-react";
import { StructuredData } from "@/components/StructuredData";
import { articleIcons } from "@/components/sections/Learn";
import { ButtonLink } from "@/components/ui/Button";
import { IconBlob, toneStyles } from "@/components/ui/IconBlob";
import { siteConfig, whatsappLink, whatsappMessages } from "@/config/site";
import { articles, getArticle, type ArticleBlock } from "@/content/articles";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const url = `/aprende/${article.slug}`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: article.title,
      description: article.description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
    },
    twitter: { card: "summary_large_image", title: article.title, description: article.description },
  };
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;
    case "h2":
      return <h2>{block.text}</h2>;
    case "ul":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol className="!gap-4">
          {block.items.map((item) => (
            <li key={item.title} className="!pl-0">
              <div className="rounded-3xl bg-cream p-5 sm:p-6">
                <strong className="block font-display text-xl !font-semibold">{item.title}</strong>
                <span className="mt-2 block">{item.text}</span>
              </div>
            </li>
          ))}
        </ol>
      );
    case "tip":
      return (
        <aside className="mt-8 flex gap-4 rounded-3xl bg-sun-soft p-5 sm:p-6">
          <Lightbulb className="mt-1 size-6 shrink-0 text-sun-strong" aria-hidden="true" />
          <div>
            <p className="!mt-0 font-display text-lg !font-semibold !text-ink">{block.title}</p>
            <p className="!mt-1">{block.text}</p>
          </div>
        </aside>
      );
  }
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const t = toneStyles[article.tone];
  const index = articles.findIndex((a) => a.slug === article.slug);
  const next = articles[(index + 1) % articles.length];
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    inLanguage: "es",
    mainEntityOfPage: `${siteConfig.url}/aprende/${article.slug}`,
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  };

  return (
    <article className="bg-white">
      <StructuredData data={structuredData} />

      <header className={`relative overflow-hidden ${t.soft} pb-16 pt-32 sm:pb-20 sm:pt-40`}>
        <div aria-hidden="true" className="bg-dots pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
          <nav aria-label="Ruta de navegación" className="text-sm font-bold text-ink-soft">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-ink">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/#aprende" className="hover:text-ink">
                  Aprende en familia
                </Link>
              </li>
            </ol>
          </nav>
          <div className="mt-8">
            <IconBlob icon={articleIcons[article.icon]} tone={article.tone} size="lg" shape={index} />
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-ink sm:text-5xl">{article.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft sm:text-xl">{article.excerpt}</p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-ink shadow-soft">
            <Clock className="size-4" aria-hidden="true" />
            {article.readingMinutes} min de lectura
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="article-body">
          {article.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        <p className="mt-12 rounded-2xl border border-ink/10 p-5 text-sm leading-relaxed text-ink-soft">
          Este contenido es informativo y educativo. No reemplaza la orientación de profesionales de la salud.
          Practica siempre con supervisión de un adulto y respeta los límites de cada niño.
        </p>

        <div className="relative mt-12 overflow-hidden rounded-[2.5rem] bg-ink p-8 text-center sm:p-12">
          <div aria-hidden="true" className="rainbow-bar absolute inset-x-0 top-0 h-2" />
          <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
            ¿Quieres vivir esto en familia con Yoga con Color?
          </p>
          <p className="mx-auto mt-3 max-w-lg text-white/85">
            Escríbenos y descubre cómo comenzar esta experiencia con tus hijos.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href={whatsappLink(whatsappMessages.article)} variant="whatsapp" icon="whatsapp" className="w-full sm:w-auto">
              Hablar por WhatsApp
            </ButtonLink>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 sm:flex-row">
          <Link href="/#aprende" className="inline-flex items-center gap-2 font-extrabold text-ink-soft hover:text-ink">
            <ArrowLeft className="size-5" aria-hidden="true" /> Todos los artículos
          </Link>
          <Link href={`/aprende/${next.slug}`} className="inline-flex items-center gap-2 font-extrabold text-coral-strong hover:text-coral-deep">
            Siguiente: {next.shortTitle} <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <aside aria-labelledby="relacionados" className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="relacionados" className="text-center text-3xl font-semibold text-ink">
            Sigue aprendiendo
          </h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/aprende/${a.slug}`}
                  className="group flex h-full flex-col gap-4 rounded-[2rem] bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
                >
                  <IconBlob icon={articleIcons[a.icon]} tone={a.tone} />
                  <span className="font-display text-xl font-semibold leading-snug text-ink">{a.title}</span>
                  <span className="mt-auto inline-flex items-center gap-2 font-extrabold text-coral-strong">
                    Leer <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </article>
  );
}
