import Hero from "../components/Hero";
import ConnectBand from "../components/ConnectBand";
import TrustedBy from "../components/TrustedBy";
import ProblemSection from "../components/ProblemSection";
import SystemSection from "../components/SystemSection";
import ProofSection from "../components/ProofSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ComparisonSection from "../components/ComparisonSection";
import IndustriesSection from "../components/IndustriesSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ConnectBand />
      <SystemSection />
      <ProblemSection />
      <ProofSection />
      <ServicesSection />
      <TestimonialsSection />
      <ComparisonSection />
      <IndustriesSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
