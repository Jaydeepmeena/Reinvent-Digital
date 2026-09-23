import { Link } from "react-router-dom";
import logo from "../assets/rd-logo.png";
import { SERVICES } from "../data/services";
import { INDUSTRIES } from "../data/industries";
import { ABOUT_PAGES } from "../data/about";
import { RESOURCE_PAGES } from "../data/resources";

const DIGITAL_MARKETING = SERVICES.filter((s) => s.category === "Digital Marketing").slice(0, 6);

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-10 sm:px-8 sm:pt-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/">
              <img src={logo} alt="Reinvent Digital" className="h-11 w-auto" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              Patient acquisition systems for healthcare groups — connecting
              marketing, CRM and call centre into one measurable path to booked patients.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-ink">What We Do</h4>
            <ul className="mt-4 space-y-2.5">
              {DIGITAL_MARKETING.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/what-we-do/${s.slug}`}
                    className="text-sm text-ink-soft transition-colors hover:text-green-deep"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-ink">Industries</h4>
            <ul className="mt-4 space-y-2.5">
              {INDUSTRIES.map((i) => (
                <li key={i.slug}>
                  <Link
                    to={`/industries/${i.slug}`}
                    className="text-sm text-ink-soft transition-colors hover:text-green-deep"
                  >
                    {i.title}
                  </Link>
                </li>
              ))}
              {RESOURCE_PAGES.map((r) => (
                <li key={r.slug}>
                  <Link
                    to={`/resources/${r.slug}`}
                    className="text-sm text-ink-soft transition-colors hover:text-green-deep"
                  >
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-ink">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {ABOUT_PAGES.map((a) => (
                <li key={a.slug}>
                  <Link
                    to={`/about/${a.slug}`}
                    className="text-sm text-ink-soft transition-colors hover:text-green-deep"
                  >
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-ink">Get in touch</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="mailto:hello@reinventdigital.com"
                  className="break-all text-sm text-ink-soft transition-colors hover:text-green-deep"
                >
                  hello@reinventdigital.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="text-sm text-ink-soft transition-colors hover:text-green-deep"
                >
                  +91 98765 43210
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm font-semibold text-green-deep transition-colors hover:text-ink"
                >
                  Contact page →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-8 text-center text-xs text-ink-soft sm:flex-row sm:text-left">
          <span>© {new Date().getFullYear()} Reinvent Digital. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-ink">Privacy Policy</Link>
            <Link to="/" className="hover:text-ink">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
