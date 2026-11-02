import { Cloud, Heart, Sparkle } from "./decor";

const DAD_SKIN = "#8d5a3b";
const DAD_HAIR = "#2a1d1a";
const KID_SKIN = "#d99a6c";
const KID_HAIR = "#4b2d1f";
const INK = "#2b2550";

/**
 * Un papá y su hijo sentados juntos, con los ojos cerrados, respirando
 * en calma. Ilustración vectorial original.
 */
export function ConnectionIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 520 520" className={className} role="img" aria-labelledby="connection-title">
      <title id="connection-title">
        Ilustración de un papá abrazando a su hijo mientras ambos respiran en calma, sentados sobre un
        tapete de yoga.
      </title>
      <defs>
        <linearGradient id="connection-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#efe7fc" />
          <stop offset="100%" stopColor="#ffe8ee" />
        </linearGradient>
        <clipPath id="connection-clip">
          <path d="M260 14c120 0 236 70 244 196 8 132-80 290-244 296C96 512 8 380 14 240 20 104 140 14 260 14Z" />
        </clipPath>
      </defs>

      <g clipPath="url(#connection-clip)">
        <rect width="520" height="520" fill="url(#connection-bg)" />

        {/* Luna y estrellas: el momento de calma */}
        <circle cx="408" cy="118" r="34" fill="#fff1c7" />
        <circle cx="424" cy="106" r="30" fill="#efe7fc" />
        <Sparkle x={110} y={110} scale={0.8} color="#c3a8f0" className="animate-pulse" />
        <Sparkle x={350} y={70} scale={0.55} color="#ffc93c" />
        <Sparkle x={460} y={220} scale={0.6} color="#ff8a6b" className="animate-pulse" />
        <g className="animate-float-slow">
          <Cloud x={120} y={190} scale={0.55} />
        </g>

        {/* Plantas */}
        <path d="M58 430c-6-40 6-80 34-104-2 40-12 76-34 104Z" fill="#8ee1c2" />
        <path d="M70 438c10-36 34-60 70-70-14 34-38 58-70 70Z" fill="#3aa98a" />
        <path d="M466 432c4-40-10-76-36-96 0 38 12 72 36 96Z" fill="#8ee1c2" />
        <path d="M452 440c-12-30-34-50-64-58 12 30 34 50 64 58Z" fill="#3aa98a" />

        {/* Suelo y tapete */}
        <rect x="0" y="440" width="520" height="90" fill="#fdf0df" />
        <rect x="96" y="420" width="330" height="22" rx="11" fill="#c3a8f0" />
        <rect x="96" y="420" width="330" height="8" rx="4" fill="#d9c8f6" />

        {/* ---------- Papá ---------- */}
        <path
          d="M118 412Q118 384 160 386L240 386Q282 384 282 412Q282 432 240 430L160 430Q118 432 118 412Z"
          fill="#4a4570"
        />
        <ellipse cx="176" cy="424" rx="13" ry="6.5" fill={DAD_SKIN} />
        <ellipse cx="224" cy="424" rx="13" ry="6.5" fill={DAD_SKIN} />
        <path d="M158 286Q200 266 242 286L238 380Q238 400 200 400Q162 400 162 380Z" fill="#ff8a6b" />
        <path d="M186 276l14 16 14-16" fill="none" stroke="#e86f52" strokeWidth="4" strokeLinecap="round" />
        {/* Brazo sobre la rodilla */}
        <path
          d="M165 294L144 352L152 398"
          stroke={DAD_SKIN}
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <rect x="192" y="252" width="16" height="26" rx="6" fill={DAD_SKIN} />
        <circle cx="200" cy="236" r="30" fill={DAD_SKIN} />
        <path d="M170 236c-2-24 12-36 30-36s32 12 30 34c-4-8-10-14-18-16-6 6-24 8-42 18Z" fill={DAD_HAIR} />
        {/* Barba */}
        <path d="M172 240c2 20 14 30 28 30s26-10 28-30c-4 8-8 12-12 12h-32c-4 0-8-4-12-12Z" fill={DAD_HAIR} />
        <path
          d="M186 238q5 5 10 0M204 238q5 5 10 0"
          stroke={INK}
          strokeWidth="2.8"
          fill="none"
          strokeLinecap="round"
        />
        <path d="M192 254q8 5 16 0" stroke="#f3d3c0" strokeWidth="2.6" fill="none" strokeLinecap="round" />

        {/* ---------- Hijo ---------- */}
        <path
          d="M262 414Q262 392 290 394L334 394Q362 392 362 414Q362 432 334 430L290 430Q262 432 262 414Z"
          fill="#5fb4ec"
        />
        <ellipse cx="296" cy="425" rx="10" ry="5" fill={KID_SKIN} />
        <ellipse cx="328" cy="425" rx="10" ry="5" fill={KID_SKIN} />
        <path d="M286 334Q310 322 334 334L332 386Q332 402 310 402Q288 402 288 386Z" fill="#ffc93c" />
        <path d="M292 356h36" stroke="#ff8a6b" strokeWidth="6" strokeLinecap="round" />
        <path d="M292 370h36" stroke="#8ee1c2" strokeWidth="6" strokeLinecap="round" />
        <path
          d="M290 340L282 372L286 400"
          stroke={KID_SKIN}
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M331 340L344 372L338 400"
          stroke={KID_SKIN}
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <g transform="rotate(-12 302 296)">
          <rect x="296" y="304" width="12" height="22" rx="5" fill={KID_SKIN} />
          <circle cx="302" cy="294" r="23" fill={KID_SKIN} />
          <path d="M278 294c-2-18 8-28 24-28s27 10 24 28c-6-6-12-9-18-9-4 4-14 6-30 9Z" fill={KID_HAIR} />
          <path
            d="M291 297q4 4 8 0M305 297q4 4 8 0"
            stroke={INK}
            strokeWidth="2.4"
            fill="none"
            strokeLinecap="round"
          />
          <path d="M296 306q6 5 12 0" stroke={INK} strokeWidth="2.4" fill="none" strokeLinecap="round" />
          <circle cx="287" cy="304" r="4" fill="#ff8a6b" opacity="0.5" />
          <circle cx="317" cy="304" r="4" fill="#ff8a6b" opacity="0.5" />
        </g>

        {/* Abrazo del papá sobre los hombros del hijo */}
        <path
          d="M236 294Q282 300 330 330"
          stroke={DAD_SKIN}
          strokeWidth="15"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="332" cy="331" r="8.5" fill={DAD_SKIN} />

        {/* Respiración compartida */}
        <g fill="none" stroke="#7cc8f8" strokeWidth="4" strokeLinecap="round" opacity="0.9">
          <path d="M120 250c-14-4-22-16-14-26s22-2 18 8" className="animate-pulse" />
          <path d="M376 290c14-6 20-18 10-26s-22 2-16 10" className="animate-pulse" />
        </g>

        <g className="animate-float" style={{ animationDelay: "-2s" }}>
          <Heart x={258} y={176} scale={1.4} color="#f0517a" />
        </g>
        <Heart x={222} y={146} scale={0.6} color="#ffb8cb" />
        <Heart x={298} y={140} scale={0.5} color="#ffc93c" />
      </g>
    </svg>
  );
}
