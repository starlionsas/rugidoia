/** Ícono de chat estilo WhatsApp (dibujo propio, sin logotipos de terceros). */
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" fill="none">
      <path
        d="M12 2.75a9.25 9.25 0 0 0-7.98 13.93L2.75 21.25l4.7-1.23A9.25 9.25 0 1 0 12 2.75Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M8.6 7.6c.25-.4.6-.45.9-.45h.55c.2 0 .45.05.6.45l.75 1.85c.1.25.05.5-.1.7l-.6.75c-.15.2-.15.4 0 .65.45.8 1.05 1.5 1.8 2.05.55.4 1.05.65 1.4.8.25.1.45.05.6-.1l.75-.9c.2-.25.45-.3.7-.2l1.8.85c.3.15.45.35.4.6-.05.6-.3 1.3-.9 1.7-.55.4-1.35.55-2.25.3-1.45-.4-2.95-1.25-4.2-2.5-1.3-1.3-2.15-2.75-2.5-4-.25-.95-.05-1.85.5-2.55Z"
        fill="currentColor"
      />
    </svg>
  );
}
