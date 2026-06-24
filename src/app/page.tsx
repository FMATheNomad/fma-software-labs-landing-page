import { Hero } from "@/components/sections/Hero";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { OpenSourceSection } from "@/components/sections/OpenSourceSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ClientProjectsSection } from "@/components/sections/ClientProjects";
import { ContactSection } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <OpenSourceSection />
      <ServicesSection />
      <ClientProjectsSection />
      <ContactSection />
    </>
  );
}
