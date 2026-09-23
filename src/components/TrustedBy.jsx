import { motion } from "framer-motion";
import mbrace from "../assets/clients/trimmed/Artboard 1 copy.png";
import dentalRoots from "../assets/clients/trimmed/Dental Roots High Res-03.png";
import eledent from "../assets/clients/trimmed/Eledent logo copy.png";
import kamineniFertility from "../assets/clients/trimmed/Fertility.png";
import ivia from "../assets/clients/trimmed/Ivia Dental logo.png";
import kamineniHospitals from "../assets/clients/trimmed/Logo.png";
import ndc from "../assets/clients/trimmed/NDC.png";
import oracarePrime from "../assets/clients/trimmed/ORACAREPRIME_Logo.png";
import partha from "../assets/clients/trimmed/PARTHA NEW LOGO PNG.png";
import radiant from "../assets/clients/trimmed/PNG LOGO copy.png";
import psri from "../assets/clients/trimmed/PSRI-logo.png";
import credence from "../assets/clients/trimmed/credence-dental-logo.png";
import kenia from "../assets/clients/trimmed/kenia logo_Actual PNG.png";
import Reveal from "./motion/Reveal";
import { EASE } from "./motion/easing";

const CLIENTS = [
  { name: "PSRI Hospital", logo: psri },
  { name: "Kamineni Hospitals", logo: kamineniHospitals },
  { name: "Kamineni Fertility", logo: kamineniFertility },
  { name: "M'Brace by Kamineni Hospitals", logo: mbrace },
  { name: "Kenia Eye & Dental", logo: kenia },
  { name: "The Dental Roots", logo: dentalRoots },
  { name: "Partha Dental", logo: partha },
  { name: "Radiant Dental Care", logo: radiant },
  { name: "National Dental Care", logo: ndc },
  { name: "Credence Dental", logo: credence },
  { name: "Eledent International", logo: eledent },
  { name: "IVIA Dental", logo: ivia },
  { name: "Oracare Prime", logo: oracarePrime },
];

function MarqueePanel({ clients, direction, from }) {
  const fade =
    direction === "left"
      ? "[mask-image:linear-gradient(to_right,transparent,black_18%,black)]"
      : "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]";

  return (
    <motion.div
      initial={{ opacity: 0, x: from }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: EASE }}
      className="group relative min-w-0 flex-1 overflow-hidden py-2 sm:py-3"
    >
      <div className={`overflow-hidden ${fade}`}>
        <ul
          className={`flex w-max animate-marquee items-center group-hover:[animation-play-state:paused] ${
            direction === "right" ? "[animation-direction:reverse]" : ""
          }`}
          style={{ animationDuration: `${clients.length * 4}s` }}
        >
          {[...clients, ...clients].map(({ name, logo }, i) => (
            <li
              key={`${name}-${i}`}
              aria-hidden={i >= clients.length}
              className="flex h-10 w-36 shrink-0 items-center justify-center px-5 sm:h-12 sm:w-44 sm:px-6"
            >
              <img
                src={logo}
                alt={i < clients.length ? name : ""}
                decoding="async"
                draggable="false"
                className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function TrustedBy() {
  return (
    <section className="overflow-x-clip bg-cream py-6 sm:py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 sm:px-8 md:flex-row md:items-stretch md:gap-0">
        <Reveal
          as="p"
          className="flex items-center justify-center text-balance text-center text-lg font-semibold leading-snug tracking-tight text-ink sm:text-xl md:w-64 md:shrink-0 md:justify-start md:pr-6 md:text-left lg:w-80 lg:text-2xl"
        >
          Trusted by dental, fertility, eye care &amp; hospital groups
        </Reveal>

        <motion.div
          aria-hidden="true"
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="hidden w-7 shrink-0 items-stretch justify-center gap-1 md:flex"
        >
          <span className="w-2.5 rounded-r-2xl border-r-4 border-lime" />
          <span className="w-2.5 rounded-l-2xl border-l-4 border-lime" />
        </motion.div>

        <MarqueePanel clients={CLIENTS} direction="right" from={40} />
      </div>
    </section>
  );
}
