// Social channels riding a lime ring, with a dot orbiting the outer track.
const CHANNELS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/919876543210",
    path: "M12 2a10 10 0 0 0-8.6 15.05L2 22l5.1-1.33A10 10 0 1 0 12 2Zm5.6 14.2c-.24.67-1.4 1.28-1.94 1.32-.5.04-1.13.06-1.82-.11a15 15 0 0 1-1.65-.61c-2.9-1.25-4.8-4.17-4.94-4.37-.15-.2-1.19-1.58-1.19-3.02 0-1.44.75-2.15 1.02-2.44.27-.3.59-.37.78-.37h.56c.18 0 .42-.7.66.5.24.58.82 2 .89 2.15.7.14.12.31.02.5-.1.2-.15.32-.3.5l-.44.51c-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.03 1.12 1 2.06 1.3 2.36 1.45.3.15.47.13.64-.8.17-.2.74-.86.94-1.16.2-.3.4-.25.66-.15.27.1 1.68.79 1.97.93.29.15.48.22.55.34.07.12.07.7-.17 1.37Z",
  },
  {
    label: "X",
    href: "https://x.com/",
    path: "M17.2 3h3.3l-7.2 8.24L21.8 21h-6.6l-4.4-5.7L5.8 21H2.5l7.7-8.8L2.4 3H9l4 5.24L17.2 3Zm-1.15 16h1.83L7.9 4.9H5.94L16.05 19Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C21.6 8.75 23 11 23 14.6V21h-4v-5.7c0-1.36-.02-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.8h-4V9Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    path: "M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 3.05a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5Zm0 2a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5Zm6.95-2.4a1.55 1.55 0 1 1-3.1 0 1.55 1.55 0 0 1 3.1 0Z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    path: "M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6A22 22 0 0 0 14.3 3.5c-2.4 0-4 1.45-4 4.1v2.3H7.6V13h2.7v8h3.2Z",
  },
];

export default function SocialRing() {
  return (
    <div className="pointer-events-none relative h-44 w-44 sm:h-56 sm:w-56 lg:h-[19rem] lg:w-[19rem]">
      {/* Outer track with a single dot running round it */}
      <div aria-hidden="true" className="animate-spin-slow absolute inset-0 rounded-full border border-ink/20">
        <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-lime shadow-[0_0_10px_3px_rgba(167,207,59,0.6)]" />
      </div>

      {/* The lime band itself */}
      <div
        aria-hidden="true"
        className="absolute inset-4 rounded-full border-[1.75rem] border-lime sm:inset-5 sm:border-[2.1rem] lg:inset-6 lg:border-[2.5rem]"
      />

      {/* Icons ride the middle of the band, turning the other way */}
      <div className="animate-spin-slow absolute inset-[1.875rem] [animation-direction:reverse] sm:inset-[2.3rem] lg:inset-[2.75rem]">
        {CHANNELS.map(({ label, href, path }, i) => {
          const angle = (i / CHANNELS.length) * (Math.PI * 2);
          return (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="pointer-events-auto absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-ink transition-opacity hover:opacity-60 sm:h-6 sm:w-6 lg:h-7 lg:w-7"
              style={{
                left: `${50 + Math.sin(angle) * 50}%`,
                top: `${50 - Math.cos(angle) * 50}%`,
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-full w-full">
                <path d={path} />
              </svg>
            </a>
          );
        })}
      </div>
    </div>
  );
}
