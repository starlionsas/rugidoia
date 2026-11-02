import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fff1c7",
        }}
      >
        <svg width="150" height="150" viewBox="0 0 48 48">
          <g fill="none" strokeLinecap="round" strokeWidth="4.6">
            <path d="M7 33a17 17 0 0 1 34 0" stroke="#ff8a6b" />
            <path d="M13 33a11 11 0 0 1 22 0" stroke="#2ec4b6" />
            <path d="M19 33a5 5 0 0 1 10 0" stroke="#c3a8f0" />
          </g>
          <circle cx="37" cy="12" r="4" fill="#ffc93c" />
        </svg>
      </div>
    ),
    size,
  );
}
