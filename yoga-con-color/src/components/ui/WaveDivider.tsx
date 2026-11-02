/** Separador ondulado entre secciones. `fill` es el color de la sección siguiente. */
export function WaveDivider({
  fill,
  flip = false,
  className = "",
}: {
  fill: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div aria-hidden="true" className={`pointer-events-none leading-[0] ${flip ? "rotate-180" : ""} ${className}`}>
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="block h-12 w-full sm:h-20">
        <path
          d="M0 54c120-30 240-42 360-28s240 46 360 42 240-40 360-46 240 16 360 34v34H0Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
