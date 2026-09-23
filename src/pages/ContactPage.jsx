import { Mail, Phone, Clock, ArrowUpRight, MapPin } from "lucide-react";
import SubPageHero from "../components/SubPageHero";
import InnerPage from "../components/fx/InnerPage";
import Eyebrow from "../components/fx/Eyebrow";
import SplitReveal from "../components/fx/SplitReveal";
import Magnetic from "../components/fx/Magnetic";
import ChatVisual from "../components/fx/ChatVisual";
import DealCards from "../components/fx/DealCards";
import PathSteps from "../components/fx/PathSteps";

const CITIES = [
  "Jaipur", "Hyderabad", "Delhi", "Noida", "Mumbai", "Calicut",
  "Kochi", "Chennai", "Gurgaon", "Bangalore", "Thiruvananthapuram", "Vijaywada",
];

const STEPS = [
  { tag: "Day 1", title: "Tell us about your clinic", body: "Share your current channels, locations and where enquiries seem to be getting lost." },
  { tag: "Week 1", title: "We map the gaps", body: "We review your funnel — from first click to walk-in — and show you exactly where the system is leaking." },
  { tag: "Week 2", title: "We propose a plan", body: "A scoped plan across the channels, CRM and call centre work that will move the needle fastest." },
];

export default function ContactPage() {
  return (
    <InnerPage>
      <SubPageHero
        variant="contact"
        trail={[{ label: "Contact Us" }]}
        eyebrow="Let's talk"
        title="Contact Us"
        accent="let's map your patient acquisition system."
        description="Tell us about your clinics, your current channels and where enquiries seem to go quiet. We'll come back with a clear view of where the gaps are — no generic pitch deck."
        ctaLabel="Email us directly"
        ctaHref="mailto:hello@reinventdigital.com"
        visual={<ChatVisual />}
      />

      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <DealCards className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            <div
              data-deal
              className="relative flex min-h-64 flex-col overflow-hidden rounded-3xl bg-ink p-6 text-cream sm:col-span-2 sm:p-8 lg:row-span-2"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 animate-spin-slow rounded-full border border-dashed border-lime/30"
              />
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime text-ink">
                <Mail className="h-5 w-5" />
              </span>
              <span className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-lime">Write to us</span>
              <a
                href="mailto:hello@reinventdigital.com"
                className="mt-3 break-all text-[clamp(1.4rem,1rem+1.8vw,2.4rem)] font-extrabold leading-tight tracking-tight transition-colors hover:text-lime"
              >
                hello@reinventdigital.com
              </a>
              <div className="mt-auto pt-10">
                <Magnetic strength={0.5}>
                  <a
                    href="mailto:hello@reinventdigital.com"
                    className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-lime text-center text-sm font-bold leading-tight text-ink transition-transform hover:scale-105 sm:h-28 sm:w-28"
                  >
                    Start the
                    <br />
                    conversation
                  </a>
                </Magnetic>
              </div>
            </div>

            <a
              data-deal
              href="tel:+919876543210"
              className="group flex min-h-48 flex-col justify-between rounded-3xl bg-lime p-6 text-ink sm:p-8"
            >
              <Phone className="h-6 w-6 transition-transform duration-500 group-hover:-rotate-12" />
              <span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Call</span>
                <span className="mt-1 flex items-center gap-2 text-xl font-extrabold">
                  +91 98765 43210
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                </span>
              </span>
            </a>

            <div data-deal className="flex min-h-48 flex-col justify-between rounded-3xl border border-ink/10 bg-white p-6 text-ink sm:p-8">
              <div className="flex items-center justify-between">
                <Clock className="h-6 w-6" />
                <span className="flex items-center gap-2 text-xs font-semibold">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-80" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime" />
                  </span>
                  Online
                </span>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">Response time</span>
                <p className="mt-1 text-xl font-extrabold">Within 1 business day</p>
              </div>
            </div>

            <div data-deal className="overflow-hidden rounded-3xl border border-ink/10 bg-white text-ink sm:col-span-2">
              <div className="flex items-center gap-2 px-6 pt-6 text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft sm:px-8 sm:pt-8">
                <MapPin className="h-4 w-4 text-ink" />
                Clinics we serve across India
              </div>
              <div className="group/cities relative mt-5 overflow-hidden pb-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] sm:pb-8">
                <ul className="flex w-max animate-marquee gap-2 group-hover/cities:[animation-play-state:paused]">
                  {[...CITIES, ...CITIES].map((city, i) => (
                    <li
                      key={`${city}-${i}`}
                      aria-hidden={i >= CITIES.length}
                      className={`rounded-full px-4 py-2 text-sm font-semibold ${i % 3 === 0 ? "bg-lime" : "border border-ink/10 bg-cream"}`}
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DealCards>
        </div>
      </section>

      <section className="section-y bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-12 max-w-2xl sm:mb-16 lg:mx-auto lg:text-center">
            <Eyebrow tone="dark">What happens next</Eyebrow>
            <SplitReveal
              as="h2"
              type="wave"
              className="mt-4 text-balance text-[clamp(1.875rem,1.4rem+2.2vw,2.85rem)] font-extrabold leading-[1.1] tracking-tight"
            >
              Three steps from first email to a scoped plan.
            </SplitReveal>
          </div>
          <PathSteps steps={STEPS} />
        </div>
      </section>
    </InnerPage>
  );
}
