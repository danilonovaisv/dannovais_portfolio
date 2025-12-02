// app/page.tsx

import BrandsStrip from "@/components/clients/BrandsStrip";
import ContactSection from "@/components/Contact/ContactSection";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/hero/Hero";
import Manifesto from "@/components/hero/Manifesto";
import PortfolioShowcase from "@/components/portfolio/PortfolioShowcase";
import ProjectsGrid from "@/components/portfolio/ProjectsGrid";
import WorkCategories from "@/components/portfolio/WorkCategories";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface-main)]">
      <Hero />
      <Manifesto />
      <PortfolioShowcase />
      <WorkCategories />
      <ProjectsGrid />
      <BrandsStrip />
      <ContactSection />
      <Footer />
    </main>
  );
}