// app/page.tsx

import BrandsStrip from "./BrandsStrip";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import Hero from "./Hero";
import Manifesto from "./Manifesto";
import PortfolioShowcase from "./PortfolioShowcase";
import ProjectsGrid from "./ProjectsGrid";
import WorkCategories from "./WorkCategories";

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
