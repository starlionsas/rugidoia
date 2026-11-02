import { ImageResponse } from "next/og";

export const alt = "Yoga con Color · Más que yoga, momentos que conectan para toda la vida";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const arcs = [
    { r: 300, c: "#ff8a6b" },
    { r: 262, c: "#ffc93c" },
    { r: 224, c: "#8ee1c2" },
    { r: 186, c: "#7cc8f8" },
    { r: 148, c: "#c3a8f0" },
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "linear-gradient(135deg, #fff9f1 0%, #fff1c7 55%, #ffe8ee 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <svg width="700" height="380" viewBox="0 0 700 380" style={{ position: "absolute", right: -60, bottom: -10 }}>
          {arcs.map(({ r, c }) => (
            <path key={r} d={`M${350 - r} 380A${r} ${r} 0 0 1 ${350 + r} 380`} stroke={c} strokeWidth="32" fill="none" strokeLinecap="round" />
          ))}
          <circle cx="600" cy="60" r="44" fill="#ffc93c" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", padding: "80px 80px", maxWidth: 760 }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 800,
              letterSpacing: 4,
              color: "#167a73",
              textTransform: "uppercase",
            }}
          >
            Yoga para niños y familias
          </div>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 800, color: "#2b2550", marginTop: 24, lineHeight: 1 }}>
            Yoga con Color
          </div>
          <div style={{ display: "flex", fontSize: 40, color: "#5e5a80", marginTop: 28, lineHeight: 1.25 }}>
            Más que yoga, momentos que conectan para toda la vida.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              fontSize: 30,
              fontWeight: 700,
              color: "#c9432f",
            }}
          >
            Pequeños movimientos, grandes conexiones.
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 14,
            display: "flex",
            background: "linear-gradient(90deg, #ff8a6b, #ffc93c, #8ee1c2, #2ec4b6, #7cc8f8, #c3a8f0, #ffb8cb)",
          }}
        />
      </div>
    ),
    size,
  );
}
