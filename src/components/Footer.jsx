import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Briefcase, MapPin } from "lucide-react";
import logo from "../assets/rd-logo.png";
import { SERVICES } from "../data/services";
import { INDUSTRIES } from "../data/industries";
import { ABOUT_PAGES } from "../data/about";
import { RESOURCE_PAGES } from "../data/resources";
import { usePageCollection } from "../lib/pageContent";

// lucide dropped its brand glyphs, so the social marks are inline.
const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/reinvent-digital/home/",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C21.6 8.75 23 11 23 14.6V21h-4v-5.7c0-1.36-.02-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.8h-4V9Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/reinvent.digital/",
    path: "M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 3.05a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5Zm0 2a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5Zm6.95-2.4a1.55 1.55 0 1 1-3.1 0 1.55 1.55 0 0 1 3.1 0Z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/reinventdigital/",
    path: "M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6A22 22 0 0 0 14.3 3.5c-2.4 0-4 1.45-4 4.1v2.3H7.6V13h2.7v8h3.2Z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@reinventdigital8575",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z",
  },
  {
    label: "X",
    href: "https://x.com/reinventdigital",
    path: "M17.2 3h3.3l-7.2 8.24L21.8 21h-6.6l-4.4-5.7L5.8 21H2.5l7.7-8.8L2.4 3H9l4 5.24L17.2 3Zm-1.15 16h1.83L7.9 4.9H5.94L16.05 19Z",
  },
];

const OFFICES = [
  {
    city: "Delhi",
    lines: ["Khasra No. 355/1/2 and 355/2,", "100 Feet Rd, Ghitorni, New Delhi,", "Delhi 110030"],
  },
  {
    city: "Jaipur",
    lines: ["B-6, 2nd Floor, Mahalaxmi Nagar,", "Malviya Nagar, Jaipur – 302017", "Landmark: Behind World Trade Park"],
  },
  {
    city: "Hyderabad",
    lines: ["9th Floor, Kapil Kavuri Hub,", "144, Survey 37, Financial District,", "Nanakramguda, Telangana 500032"],
  },
];

export default function Footer() {
  // Same lists the navbar reads, so the footer cannot fall out of step with a
  // slug the CMS has changed.
  const { navEntries: services } = usePageCollection("services", SERVICES);
  const { navEntries: industries } = usePageCollection("industries", INDUSTRIES);
  const { navEntries: resources } = usePageCollection("resources", RESOURCE_PAGES);
  const { navEntries: about } = usePageCollection("about", ABOUT_PAGES);

  const columns = useMemo(
    () => [
      {
        title: "What We Do",
        links: services
          .filter((s) => s.category === "Digital Marketing")
          .slice(0, 6)
          .map((s) => ({ label: s.title, to: s.path })),
      },
      {
        title: "Industries",
        links: [
          ...industries.map((i) => ({ label: i.title, to: i.path })),
          ...resources.map((r) => ({ label: r.title, to: r.path })),
        ],
      },
      {
        title: "Company",
        links: about.map((a) => ({ label: a.title, to: a.path })),
      },
    ],
    [services, industries, resources, about]
  );

  return (
    <footer className="relative isolate overflow-hidden bg-ink text-cream">
      {/* Lime light spilling in from the two top corners */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[24rem] bg-[radial-gradient(38%_88%_at_-2%_0%,rgba(167,207,59,0.28),transparent_68%),radial-gradient(38%_88%_at_102%_0%,rgba(167,207,59,0.28),transparent_68%)]"
      />
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-8 sm:pt-16">
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_0.8fr]">
          <div>
            <Link to="/" className="inline-block">
              <img src={logo} alt="Reinvent Digital logo" title="Reinvent Digital" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-cream/55">
              Patient acquisition systems for healthcare groups: marketing, CRM and call centre on
              one measurable path to booked patients.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="mailto:sales@reinventdigital.com"
                className="flex items-center gap-3 text-[15px] text-cream/80 transition-colors hover:text-lime"
              >
                <Mail className="h-4 w-4 text-cream/45" />
                sales@reinventdigital.com
              </a>
              <a
                href="mailto:career@reinventdigital.com"
                className="flex items-center gap-3 text-[15px] text-cream/80 transition-colors hover:text-lime"
              >
                <Briefcase className="h-4 w-4 text-cream/45" />
                career@reinventdigital.com
              </a>
              <a
                href="tel:+919950508668"
                className="flex items-center gap-3 text-[15px] text-cream/80 transition-colors hover:text-lime"
              >
                <Phone className="h-4 w-4 text-cream/45" />
                +91 9950508668
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

          {columns.map(({ title, links }) => (
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

        <div className="mt-12 grid gap-8 border-t border-cream/10 pt-10 sm:grid-cols-3">
          {OFFICES.map(({ city, lines }) => (
            <div key={city}>
              <h4 className="flex items-center gap-2 text-[15px] font-bold text-cream">
                <MapPin className="h-4 w-4 shrink-0 text-lime" />
                {city}
              </h4>
              <address className="mt-3 text-[14px] not-italic leading-relaxed text-cream/55">
                {lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-cream/10 pt-7 text-[13px] text-cream/45 sm:flex-row">
          <span>© All rights reserved {new Date().getFullYear()} · Reinvent Digital</span>

          <span className="rounded-full border border-cream/12 px-4 py-2 text-cream/70">
            Built for healthcare teams in India
          </span>

          <div className="flex gap-6">
            <Link to="/privacy-policy" className="transition-colors hover:text-lime">
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
