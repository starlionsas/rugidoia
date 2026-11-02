import { Butterfly, Cloud, Flower, Heart, SmilingSun, Sparkle } from "./decor";

const ADULT_SKIN = "#b97a56";
const ADULT_HAIR = "#3b2622";
const CHILD_SKIN = "#f0c29e";
const CHILD_HAIR = "#6b3e26";
const INK = "#2b2550";

/**
 * Ilustración protagonista: una mamá y su hijo en postura del árbol,
 * tomados de la mano bajo un arcoíris. Ilustración vectorial original.
 */
export function HeroIllustration({ className }: { className?: string }) {
  const rainbow = [
    { r: 232, c: "#ff8a6b" },
    { r: 206, c: "#ffc93c" },
    { r: 180, c: "#8ee1c2" },
    { r: 154, c: "#7cc8f8" },
    { r: 128, c: "#c3a8f0" },
  ];

  return (
    <svg
      viewBox="0 0 600 600"
      className={className}
      role="img"
      aria-labelledby="hero-illustration-title"
    >
      <title id="hero-illustration-title">
        Ilustración de una mamá y su hijo practicando la postura del árbol tomados de la mano, bajo un
        arcoíris, junto a un sol sonriente, nubes y flores.
      </title>

      <defs>
        <radialGradient id="hero-bg" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#fff6dc" />
          <stop offset="100%" stopColor="#ffe9c2" />
        </radialGradient>
        <linearGradient id="hero-hill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9ee8cb" />
          <stop offset="100%" stopColor="#6fd3ad" />
        </linearGradient>
        <clipPath id="hero-clip">
          <circle cx="300" cy="300" r="290" />
        </clipPath>
      </defs>

      <g clipPath="url(#hero-clip)">
        <circle cx="300" cy="300" r="290" fill="url(#hero-bg)" />

        {/* Arcoíris */}
        <g strokeLinecap="round" fill="none" strokeWidth="24">
          {rainbow.map(({ r, c }) => (
            <path key={r} d={`M${300 - r} 470A${r} ${r} 0 0 1 ${300 + r} 470`} stroke={c} />
          ))}
        </g>

        {/* Nubes */}
        <g className="animate-float-slow">
          <Cloud x={118} y={150} scale={0.75} />
        </g>
        <g className="animate-float" style={{ animationDelay: "-3s" }}>
          <Cloud x={500} y={270} scale={0.55} />
        </g>

        {/* Colinas */}
        <path d="M-10 478C90 440 190 452 300 466s200 8 310-26V610H-10Z" fill="#c9f1df" />
        <path d="M-10 500C120 470 220 486 320 492s190-6 290-28V610H-10Z" fill="url(#hero-hill)" />

        {/* Flores */}
        <Flower x={92} y={500} scale={1.1} />
        <Flower x={128} y={520} scale={0.8} petal="#c3a8f0" />
        <Flower x={498} y={505} scale={1} petal="#ff8a6b" />
        <Flower x={530} y={522} scale={0.75} petal="#7cc8f8" />

        {/* Tapete de yoga */}
        <rect x="150" y="470" width="318" height="20" rx="10" fill="#ffb8cb" />
        <rect x="150" y="470" width="318" height="7" rx="3.5" fill="#ffd3df" />

        {/* ---------- Mamá ---------- */}
        <g>
          {/* Pierna de apoyo */}
          <path d="M241 352L240 468" stroke="#7e64c9" strokeWidth="23" strokeLinecap="round" />
          {/* Pierna doblada (árbol) */}
          <path
            d="M229 352L188 402L236 440"
            stroke="#7e64c9"
            strokeWidth="23"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <ellipse cx="249" cy="472" rx="15" ry="7" fill={ADULT_SKIN} />
          {/* Torso */}
          <path d="M211 258Q236 246 261 258L259 334Q259 362 236 362Q213 362 213 334Z" fill="#2ec4b6" />
          <path d="M213 330Q236 342 259 330L259 340Q236 352 213 340Z" fill="#1fa99c" />
          {/* Brazo hacia el cielo */}
          <path
            d="M216 266L195 216L226 172"
            stroke={ADULT_SKIN}
            strokeWidth="13"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Brazo que toma la mano del niño */}
          <path
            d="M256 268L287 292L311 306"
            stroke={ADULT_SKIN}
            strokeWidth="13"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Cuello y cabeza */}
          <rect x="230" y="232" width="13" height="24" rx="5" fill={ADULT_SKIN} />
          <path d="M256 214c16 6 22 24 14 40-4-12-10-20-18-24Z" fill={ADULT_HAIR} />
          <circle cx="236" cy="220" r="25" fill={ADULT_SKIN} />
          <path d="M210 222c-2-20 10-30 26-30s29 9 27 28c-6-10-16-15-27-15-12 0-21 7-26 17Z" fill={ADULT_HAIR} />
          <path
            d="M225 222q4 4 8 0M240 222q4 4 8 0"
            stroke={INK}
            strokeWidth="2.6"
            fill="none"
            strokeLinecap="round"
          />
          <path d="M229 232q7 6 14 0" stroke={INK} strokeWidth="2.6" fill="none" strokeLinecap="round" />
          <circle cx="221" cy="230" r="4.5" fill="#ff8a6b" opacity="0.5" />
          <circle cx="251" cy="230" r="4.5" fill="#ff8a6b" opacity="0.5" />
        </g>

        {/* ---------- Niño ---------- */}
        <g>
          <path d="M370 404L370 468" stroke="#ff8a6b" strokeWidth="17" strokeLinecap="round" />
          <path
            d="M379 404L408 432L373 454"
            stroke="#ff8a6b"
            strokeWidth="17"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <ellipse cx="364" cy="472" rx="11" ry="5.5" fill={CHILD_SKIN} />
          <path d="M356 350Q374 340 392 350L390 396Q390 412 374 412Q358 412 358 396Z" fill="#ffc93c" />
          <circle cx="374" cy="374" r="7" fill="#ffffff" opacity="0.65" />
          {/* Brazo hacia la mamá */}
          <path
            d="M359 356L338 334L316 307"
            stroke={CHILD_SKIN}
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Brazo hacia el cielo */}
          <path
            d="M389 356L408 320L384 286"
            stroke={CHILD_SKIN}
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect x="368" y="330" width="11" height="20" rx="4" fill={CHILD_SKIN} />
          <circle cx="352" cy="304" r="11" fill={CHILD_HAIR} />
          <circle cx="396" cy="304" r="11" fill={CHILD_HAIR} />
          <circle cx="374" cy="318" r="21" fill={CHILD_SKIN} />
          <path d="M353 316c0-16 9-24 21-24s22 8 21 24c-5-8-12-12-21-12s-16 4-21 12Z" fill={CHILD_HAIR} />
          <path
            d="M365 319q3.5 3.5 7 0M377 319q3.5 3.5 7 0"
            stroke={INK}
            strokeWidth="2.4"
            fill="none"
            strokeLinecap="round"
          />
          <path d="M368 328q6 5 12 0" stroke={INK} strokeWidth="2.4" fill="none" strokeLinecap="round" />
          <circle cx="361" cy="327" r="3.8" fill="#ff8a6b" opacity="0.5" />
          <circle cx="387" cy="327" r="3.8" fill="#ff8a6b" opacity="0.5" />
        </g>

        {/* Manos unidas */}
        <circle cx="313" cy="306" r="8" fill={CHILD_SKIN} />
        <circle cx="310" cy="304" r="6.5" fill={ADULT_SKIN} />

        {/* Corazón flotante */}
        <g className="animate-float" style={{ animationDelay: "-1.5s" }}>
          <Heart x={312} y={204} scale={1.1} color="#f0517a" />
        </g>

        {/* Destellos */}
        <Sparkle x={150} y={268} scale={0.9} color="#ffc93c" className="animate-pulse" />
        <Sparkle x={448} y={186} scale={0.7} color="#c3a8f0" />
        <Sparkle x={420} y={380} scale={0.55} color="#2ec4b6" className="animate-pulse" />
        <Sparkle x={120} y={392} scale={0.6} color="#ffb8cb" />

        <g className="animate-float" style={{ animationDelay: "-5s" }}>
          <Butterfly x={470} y={420} scale={1} />
        </g>
      </g>

      {/* El sol sobresale del círculo para dar profundidad */}
      <SmilingSun x={490} y={110} scale={1} id="hero-sun" />
    </svg>
  );
}
