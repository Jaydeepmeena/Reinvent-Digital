import { motion } from "framer-motion";
import { EASE } from "./easing";

export default function Reveal({ as = "div", delay = 0, y = 24, duration = 0.7, className, children, ...rest }) {
  const Component = motion[as];
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
}
