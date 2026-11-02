"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Gift, Menu, X } from "lucide-react";
import { mainNav, siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú móvil con la tecla Escape y bloquea el scroll del fondo.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-cream/90 shadow-soft backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/#inicio" className="rounded-xl" aria-label="Yoga con Color, ir al inicio" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-4 py-2 text-[0.95rem] font-bold text-ink-soft transition-colors hover:bg-white hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#oferta"
            className="hidden items-center gap-2 rounded-full bg-coral-strong px-5 py-2.5 text-sm font-extrabold text-white shadow-glow-coral transition hover:-translate-y-0.5 hover:bg-coral-deep sm:inline-flex"
          >
            <Gift className="size-5" aria-hidden="true" />
            Llévatelo ahora
          </Link>
          <button
            type="button"
            className="inline-flex size-12 items-center justify-center rounded-full bg-white text-ink shadow-soft transition hover:shadow-lift lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? "block" : "hidden"} h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-ink/5 bg-cream`}
      >
        <nav aria-label="Navegación móvil" className="mx-auto max-w-7xl px-4 pb-10 pt-4 sm:px-6">
          <ul className="grid gap-2">
            {mainNav.map((item, i) => {
              const dots = ["bg-coral", "bg-sun", "bg-turquoise", "bg-lilac", "bg-pink"];
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 font-display text-xl font-semibold text-ink shadow-soft"
                  >
                    <span aria-hidden="true" className={`size-3 rounded-full ${dots[i % dots.length]}`} />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/#oferta"
            onClick={() => setOpen(false)}
            className="mt-6 flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-coral-strong px-6 py-4 font-extrabold uppercase tracking-wide text-white shadow-glow-coral"
          >
            <Gift className="size-6" aria-hidden="true" />
            Llévatelo ahora
          </Link>
          <a
            href={siteConfig.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-whatsapp px-6 py-4 font-extrabold uppercase tracking-wide text-white shadow-glow-green"
          >
            <WhatsAppIcon className="size-6" />
            Hablar por WhatsApp
            <span className="sr-only"> (se abre en una nueva pestaña)</span>
          </a>
          <p className="mt-6 text-center font-display text-lg text-ink-soft">{siteConfig.tagline}</p>
        </nav>
      </div>
    </header>
  );
}
