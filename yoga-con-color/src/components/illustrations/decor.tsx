/**
 * Piezas decorativas SVG reutilizables (nubes, flores, estrellas,
 * mariposas). Son ilustraciones originales creadas para Yoga con Color,
 * por lo que no requieren licencias de terceros.
 */

type PieceProps = {
  x?: number;
  y?: number;
  scale?: number;
  className?: string;
};

export function Cloud({ x = 0, y = 0, scale = 1, className }: PieceProps) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} className={className}>
      <path
        d="M-62 30c-14 0-22-9-22-20s9-20 22-20c2-19 18-32 37-30 9-15 26-22 43-17 15 4 25 16 27 31 17-1 31 11 31 27 0 17-13 29-30 29Z"
        fill="#ffffff"
      />
    </g>
  );
}

export function Flower({
  x = 0,
  y = 0,
  scale = 1,
  petal = "#ffb8cb",
  center = "#ffc93c",
  className,
}: PieceProps & { petal?: string; center?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} className={className}>
      <path d="M0 0v42" stroke="#3aa98a" strokeWidth="4" strokeLinecap="round" />
      <path d="M0 30c-10-2-16-9-17-17 9 0 16 6 17 17Z" fill="#3aa98a" />
      {[0, 72, 144, 216, 288].map((r) => (
        <ellipse key={r} cx="0" cy="-11" rx="7.5" ry="11" fill={petal} transform={`rotate(${r})`} />
      ))}
      <circle r="7" fill={center} />
    </g>
  );
}

export function Sparkle({
  x = 0,
  y = 0,
  scale = 1,
  color = "#ffc93c",
  className,
}: PieceProps & { color?: string }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${scale})`}
      className={className}
      d="M0-14C1.6-5 5-1.6 14 0 5 1.6 1.6 5 0 14-1.6 5-5 1.6-14 0-5-1.6-1.6-5 0-14Z"
      fill={color}
    />
  );
}

export function Butterfly({ x = 0, y = 0, scale = 1, className }: PieceProps) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} className={className}>
      <ellipse cx="-9" cy="-6" rx="10" ry="12" fill="#c3a8f0" transform="rotate(-25 -9 -6)" />
      <ellipse cx="9" cy="-6" rx="10" ry="12" fill="#c3a8f0" transform="rotate(25 9 -6)" />
      <ellipse cx="-7" cy="9" rx="7" ry="8" fill="#ffb8cb" transform="rotate(20 -7 9)" />
      <ellipse cx="7" cy="9" rx="7" ry="8" fill="#ffb8cb" transform="rotate(-20 7 9)" />
      <rect x="-2" y="-12" width="4" height="26" rx="2" fill="#2b2550" />
      <path d="M-1-12q-4-8-8-9M1-12q4-8 8-9" stroke="#2b2550" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </g>
  );
}

export function Heart({
  x = 0,
  y = 0,
  scale = 1,
  color = "#ff8a6b",
  className,
}: PieceProps & { color?: string }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${scale})`}
      className={className}
      d="M0 14C-5 10-18 2-18-8c0-6 5-10 10-10 4 0 7 2 8 5 1-3 4-5 8-5 5 0 10 4 10 10 0 10-13 18-18 22Z"
      fill={color}
    />
  );
}

/** Sol con cara amable. */
export function SmilingSun({
  x = 0,
  y = 0,
  scale = 1,
  className,
  id = "sun",
}: PieceProps & { id?: string }) {
  const gradientId = `${id}-shine`;
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} className={className}>
      <defs>
        <radialGradient id={gradientId} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#fff6cf" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#ffc93c" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g className="origin-center animate-spin-slow" style={{ transformBox: "fill-box" }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <rect
            key={i}
            x="-4"
            y="-66"
            width="8"
            height="16"
            rx="4"
            fill="#ffc93c"
            transform={`rotate(${i * 30})`}
          />
        ))}
      </g>
      <circle r="42" fill="#ffc93c" />
      <circle r="42" fill={`url(#${gradientId})`} />
      <path d="M-17-4q5 5 10 0M7-4q5 5 10 0" stroke="#2b2550" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M-10 10q10 9 20 0" stroke="#2b2550" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="-22" cy="8" r="5" fill="#ff8a6b" opacity="0.55" />
      <circle cx="22" cy="8" r="5" fill="#ff8a6b" opacity="0.55" />
    </g>
  );
}
