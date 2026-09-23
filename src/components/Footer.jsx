import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logo from "../assets/rd-logo.png";
import { SERVICES } from "../data/services";
import { INDUSTRIES } from "../data/industries";
import { ABOUT_PAGES } from "../data/about";
import { RESOURCE_PAGES } from "../data/resources";

const DIGITAL_MARKETING = SERVICES.filter((s) => s.category === "Digital Marketing").slice(0, 6);

const COLUMNS = [
  {
    title: "What We Do",
    links: DIGITAL_MARKETING.map((s) => ({ label: s.title, to: `/what-we-do/${s.slug}` })),
  },
  {
    title: "Industries",
    links: [
      ...INDUSTRIES.map((i) => ({ label: i.title, to: `/industries/${i.slug}` })),
      ...RESOURCE_PAGES.map((r) => ({ label: r.title, to: `/resources/${r.slug}` })),
    ],
  },
  {
    title: "Company",
    links: ABOUT_PAGES.map((a) => ({ label: a.title, to: `/about/${a.slug}` })),
  },
];

// lucide dropped its brand glyphs, so the social marks are inline.
const SOCIALS = [
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
    label: "X",
    href: "https://x.com/",
    path: "M17.2 3h3.3l-7.2 8.24L21.8 21h-6.6l-4.4-5.7L5.8 21H2.5l7.7-8.8L2.4 3H9l4 5.24L17.2 3Zm-1.15 16h1.83L7.9 4.9H5.94L16.05 19Z",
  },
];

// A sparse, fixed starfield — no animation, so it costs nothing to scroll past.
const STARS = [
  [4, 22], [7, 62], [11, 15], [13, 78], [17, 40], [19, 8], [22, 88], [26, 33],
  [29, 70], [33, 12], [36, 55], [41, 92], [45, 25], [49, 66], [53, 6],
  [58, 44], [62, 81], [67, 19], [71, 58], [76, 35], [81, 73], [85, 11],
  [89, 49], [93, 86], [96, 28],
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-ink text-cream">
      {/* Lime light spilling in from the two top corners */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[24rem] bg-[radial-gradient(38%_88%_at_-2%_0%,rgba(167,207,59,0.28),transparent_68%),radial-gradient(38%_88%_at_102%_0%,rgba(167,207,59,0.28),transparent_68%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {STARS.map(([top, left]) => (
          <span
            key={`${top}-${left}`}
            className="absolute h-px w-px rounded-full bg-lime/70 shadow-[0_0_4px_1px_rgba(167,207,59,0.45)]"
            style={{ top: `${top}%`, left: `${left}%` }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-8 sm:pt-16">
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_0.8fr]">
          <div>
            <Link to="/" className="inline-block">
              <img src={logo} alt="Reinvent Digital" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-cream/55">
              Patient acquisition systems for healthcare groups — marketing, CRM and call centre on
              one measurable path to booked patients.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="mailto:hello@reinventdigital.com"
                className="flex items-center gap-3 text-[15px] text-cream/80 transition-colors hover:text-lime"
              >
                <Mail className="h-4 w-4 text-cream/45" />
                hello@reinventdigital.com
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-[15px] text-cream/80 transition-colors hover:text-lime"
              >
                <Phone className="h-4 w-4 text-cream/45" />
                +91 98765 43210
              </a>
            </div>

            <p className="mt-8 flex items-center gap-3 text-[1.35rem] font-extrabold tracking-tight text-cream">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime/70" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-lime" />
              </span>
              Taking new clinic partners
            </p>
          </div>

          {COLUMNS.map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-lg font-bold text-cream">{title}</h4>
              <ul className="mt-5 space-y-3">
                {links.map(({ label, to }) => (
                  <li key={to}>
                    <Link to={to} className="text-[15px] text-cream/55 transition-colors hover:text-lime">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-lg font-bold text-cream">Social Media</h4>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {SOCIALS.map(({ label, href, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/[0.07] text-cream transition-colors duration-300 hover:bg-lime hover:text-ink"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-cream/10 pt-7 text-[13px] text-cream/45 sm:flex-row">
          <span>© All rights reserved {new Date().getFullYear()} · Reinvent Digital</span>

          <span className="rounded-full border border-cream/12 px-4 py-2 text-cream/70">
            Built for healthcare teams in India
          </span>

          <div className="flex gap-6">
            <Link to="/" className="transition-colors hover:text-lime">
              Privacy Policy
            </Link>
            <Link to="/" className="transition-colors hover:text-lime">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
