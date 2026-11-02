import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Variant = "primary" | "whatsapp" | "secondary" | "sun" | "light";
type Size = "md" | "lg" | "xl";

const base =
  "group relative inline-flex items-center justify-center gap-2.5 rounded-full font-sans font-extrabold uppercase tracking-wide text-center sm:whitespace-nowrap transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-offset-4 motion-reduce:hover:translate-y-0";

const variants: Record<Variant, string> = {
  primary:
    "bg-coral-strong text-white shadow-glow-coral hover:bg-coral-deep hover:shadow-lift",
  whatsapp:
    "bg-whatsapp text-white shadow-glow-green hover:bg-whatsapp-dark hover:shadow-lift",
  secondary:
    "bg-white text-ink ring-2 ring-ink/10 shadow-soft hover:ring-ink/25 hover:shadow-lift",
  sun: "bg-sun text-ink shadow-soft hover:bg-[#ffbf1f] hover:shadow-lift",
  light: "bg-white text-ink shadow-lift hover:bg-cream",
};

const sizes: Record<Size, string> = {
  md: "min-h-12 px-6 py-3 text-sm",
  lg: "min-h-14 px-7 py-4 text-[0.95rem] sm:px-8",
  xl: "min-h-16 px-5 py-5 text-[0.95rem] sm:px-10 sm:text-lg",
};

type ButtonLinkProps = Omit<ComponentPropsWithoutRef<"a">, "className"> & {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: "arrow" | "whatsapp" | "none";
  children: ReactNode;
};

/**
 * Botón-enlace accesible. Todos los botones de la página son enlaces
 * reales (anclas internas o WhatsApp), nunca botones decorativos.
 */
export function ButtonLink({
  href,
  variant = "primary",
  size = "lg",
  className = "",
  icon = "arrow",
  children,
  ...rest
}: ButtonLinkProps) {
  const isExternal = /^https?:\/\//.test(href);
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {icon === "whatsapp" && <WhatsAppIcon className="size-6 shrink-0" />}
      <span>{children}</span>
      {icon === "arrow" && (
        <ArrowRight
          aria-hidden="true"
          className="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
      {isExternal && <span className="sr-only"> (se abre en una nueva pestaña)</span>}
    </>
  );

  // Rutas internas: navegación del lado del cliente con next/link.
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {content}
    </a>
  );
}
