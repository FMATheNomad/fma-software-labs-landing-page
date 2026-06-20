import { Hero } from "@/components/sections/Hero";
import { GitHubContributions } from "@/components/social/GitHubContributions";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { TerminalSection } from "@/components/sections/TerminalSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ClientProjectsSection } from "@/components/sections/ClientProjects";
import { OpenSourceSection } from "@/components/sections/OpenSourceSection";
import { PhilosophySection } from "@/components/sections/Philosophy";
import { NewsletterSection } from "@/components/sections/Newsletter";
import { ContactSection } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <GitHubContributions />
      <TechStackSection />
      <ProductsSection />
      <ServicesSection />
      <ClientProjectsSection />
      <OpenSourceSection />
      <TerminalSection />
      <PhilosophySection />
      <NewsletterSection />
      <ContactSection />
    </>
  );
}
