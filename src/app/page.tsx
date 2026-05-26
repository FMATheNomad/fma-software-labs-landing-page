import { Hero } from "@/components/sections/Hero";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { TerminalSection } from "@/components/sections/TerminalSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { PhilosophySection } from "@/components/sections/Philosophy";
import { NewsletterSection } from "@/components/sections/Newsletter";
import { ContactSection } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStackSection />
      <ProductsSection />
      <TerminalSection />
      <PhilosophySection />
      <NewsletterSection />
      <ContactSection />
    </>
  );
}
