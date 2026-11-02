import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Header } from "@/components/layout/Header";
import { RevealObserver } from "@/components/layout/RevealObserver";
import { siteConfig } from "@/config/site";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const title = "Yoga con Color · Yoga para niños y familias";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: "%s · Yoga con Color",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "yoga para niños",
    "yoga infantil",
    "yoga para padres e hijos",
    "yoga en familia",
    "beneficios del yoga infantil",
    "actividades para hacer con niños",
    "bienestar emocional infantil",
    "actividades de conexión familiar",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  category: "education",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: "Yoga con Color · Más que yoga, momentos que conectan",
    description:
      "Movimiento, respiración, juego y colores para compartir tiempo de calidad entre padres e hijos. Pequeños movimientos, grandes conexiones.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga con Color · Más que yoga, momentos que conectan",
    description: "Yoga para niños y familias: pequeños movimientos, grandes conexiones.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#fff9f1",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${fredoka.variable} ${nunito.variable}`} suppressHydrationWarning>
      <head>
        {/* Marca que JS está disponible para activar animaciones sin ocultar contenido si no lo está. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-dvh overflow-x-clip">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:font-bold focus:text-white"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <RevealObserver />
      </body>
    </html>
  );
}
