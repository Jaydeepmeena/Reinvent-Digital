import { useEffect, useState } from "react";

// Limited-time demo access.
//
// This preview of the site is shared for a trial period. After the date below,
// every page shows an "expired" screen instead of its content, so the demo
// stops being usable once the trial ends. Set EXPIRES_ON to the end of that
// trial — ISO format, the visitor's local time.
//
// This is a courtesy gate, not security: the content is still in the page, so
// someone who disables JavaScript or reads the source can get past it. For
// access that genuinely cannot be bypassed, gate the deployment behind a
// password in the host instead (e.g. Vercel password protection).
//
// It is mounted once in Layout, so it covers the whole site. To turn the demo
// back on, move the date forward or remove <DemoExpiry /> from Layout.
const EXPIRES_ON = new Date("2027-02-01T00:00:00");

const CONTACT_EMAIL = "sales@reinventdigital.com";

export default function DemoExpiry() {
  const [expired, setExpired] = useState(() => new Date() >= EXPIRES_ON);

  useEffect(() => {
    if (expired) return;
    const check = () => {
      if (new Date() >= EXPIRES_ON) setExpired(true);
    };
    // Check once a minute while the tab is open, and again whenever the visitor
    // returns to it, so a tab left open across the deadline still updates.
    const timer = setInterval(check, 60 * 1000);
    const onVisible = () => {
      if (!document.hidden) check();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [expired]);

  if (!expired) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-ink px-6 text-center text-cream">
      <div className="max-w-lg">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-lime">Reinvent Digital</span>
        <h1 className="mt-5 text-[clamp(1.9rem,1.4rem+2.4vw,3rem)] font-extrabold leading-tight tracking-tight">
          This demo has expired
        </h1>
        <p className="mx-auto mt-5 max-w-md text-[16px] leading-relaxed text-cream/70">
          This preview of the site was shared for a limited time, and that period has now ended. Get in touch and we
          will take it live for you.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-lime px-7 py-3.5 text-sm font-bold text-ink transition-transform duration-300 hover:scale-105"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </div>
  );
}
