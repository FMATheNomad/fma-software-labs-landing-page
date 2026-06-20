import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ClientProjectsSection } from "@/components/sections/ClientProjects";
import { OpenSourceSection } from "@/components/sections/OpenSourceSection";
import { ContactSection } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProductsSection />
      <ClientProjectsSection />
      <OpenSourceSection />
      <ContactSection />
    </>
  );
}
