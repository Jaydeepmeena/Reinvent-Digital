import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Reveal from "./motion/Reveal";
import { EASE } from "./motion/easing";
import contactImg from "../assets/cards/industry-hospital.jpg";

const CHANNELS = [
  { label: "WhatsApp", href: "https://wa.me/919876543210", icon: MessageCircle },
  { label: "Call us", href: "tel:+919876543210", icon: Phone },
  { label: "Email", href: "mailto:hello@reinventdigital.com", icon: Mail },
];

const DETAILS = [
  {
    icon: MapPin,
    title: "Where we work",
    lines: ["Clinics and hospital groups", "across India"],
  },
  {
    icon: Phone,
    title: "Talk to us",
    lines: [
      { label: "Call", value: "+91 98765 43210", href: "tel:+919876543210" },
      {
        label: "Mail",
        value: "hello@reinventdigital.com",
        href: "mailto:hello@reinventdigital.com",
      },
    ],
  },
  {
    icon: Clock,
    title: "Response time",
    lines: [
      "Mon–Sat · 9:30 AM – 7:00 PM",
      "Enquiries answered within the hour",
    ],
  },
];

export default function CTASection({
  id = "contact",
  eyebrow = "Contact us",
  heading = "Want to work with us? Let's connect.",
  body = "Talk to us about the gaps between your channels, CRM, call centre and clinic data — and what it would take to connect them.",
  ctaLabel = "Discuss your growth plan",
  ctaHref = "mailto:hello@reinventdigital.com",
  footnote = "Google Ads · Meta Ads · SEO · AEO & GEO · CRM · Call Centre",
  monochrome = false,
}) {
  return (
    <section id={id} className="section-y-tight bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal
          y={40}
          className="relative isolate overflow-hidden rounded-[1.75rem] bg-ink sm:rounded-[2rem]"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-dark [mask-image:radial-gradient(ellipse_60%_70%_at_50%_0%,black,transparent)]" />

          {/* The soft sphere that hangs in the corner */}
          <motion.div
            aria-hidden="true"
            className={`pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full blur-2xl ${
              monochrome
                ? "bg-[radial-gradient(circle_at_35%_30%,rgba(246,245,239,0.45),rgba(246,245,239,0.06)_60%,transparent)]"
                : "bg-[radial-gradient(circle_at_35%_30%,rgba(167,207,59,0.5),rgba(167,207,59,0.08)_60%,transparent)]"
            }`}
            animate={{ scale: [1, 1.07, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* Photo column — fades into the panel rather than ending on a hard edge */}
            <div className="relative hidden min-h-[22rem] lg:block">
              <img
                src={contactImg}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-ink/70 to-ink" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />
            </div>

            <div className="px-6 py-14 sm:px-10 sm:py-16 lg:py-20 lg:pl-4 lg:pr-14">
              <span className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-lime">
                <span className="h-2 w-2 rounded-full bg-lime" />
                {eyebrow}
                <span className="h-px flex-1 bg-cream/15" />
              </span>

              <h2 className="mt-5 max-w-xl text-balance text-[clamp(1.9rem,1.3rem+2.8vw,3.25rem)] font-extrabold leading-[1.08] tracking-tight text-cream">
                {heading}
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-cream/60 sm:text-base">
                {body}
              </p>

              {/* Channel pills, each with its own icon tile */}
              <div className="mt-8 flex flex-wrap gap-3">
                <motion.a
                  href={ctaHref}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="group inline-flex items-center gap-3 rounded-full bg-lime py-2 pl-5 pr-2 text-[14px] font-bold text-ink shadow-lg shadow-lime/20"
                >
                  {ctaLabel}
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-lime transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </motion.a>

                {CHANNELS.map(({ label, href, icon: Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className="group inline-flex items-center gap-3 rounded-full border border-cream/15 py-2 pl-5 pr-2 text-[14px] font-semibold text-cream transition-colors hover:border-lime/50"
                  >
                    {label}
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/[0.08] text-cream transition-colors duration-300 group-hover:bg-lime group-hover:text-ink">
                      <Icon className="h-4 w-4" />
                    </span>
                  </motion.a>
                ))}
              </div>

              <div className="mt-10 grid gap-8 border-t border-cream/10 pt-8 sm:grid-cols-3 sm:gap-6">
                {DETAILS.map(({ icon: Icon, title, lines }) => (
                  <div key={title}>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/[0.06] text-lime">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="mt-4 text-[15px] font-bold text-cream">
                      {title}
                    </h3>
                    <div className="mt-2 space-y-1 text-[13px] leading-relaxed text-cream/55">
                      {lines.map((line) =>
                        typeof line === "string" ? (
                          <p key={line}>{line}</p>
                        ) : (
                          <p key={line.label}>
                            <span className="font-semibold text-cream/80">
                              {line.label}
                            </span>{" "}
                            <a
                              href={line.href}
                              className="break-all transition-colors hover:text-lime"
                            >
                              {line.value}
                            </a>
                          </p>
                        ),
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {footnote && (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8, ease: EASE }}
                  className="mt-10 text-[11px] uppercase tracking-wider text-cream/35 sm:text-xs"
                >
                  {footnote}
                </motion.p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
