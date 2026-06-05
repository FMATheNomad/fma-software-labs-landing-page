import { Hero } from "@/components/sections/Hero";
import { GitHubContributions } from "@/components/social/GitHubContributions";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { TerminalSection } from "@/components/sections/TerminalSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ClientProjectsSection } from "@/components/sections/ClientProjects";
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
      <ClientProjectsSection />
      <TerminalSection />
      <PhilosophySection />
      <NewsletterSection />
      <ContactSection />
    </>
  );
}
