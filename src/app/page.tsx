// app/page.tsx
import Hero from '../components/hero/Hero';
import Manifesto from '../components/hero/Manifesto';
// quando tiver as outras seções, importar aqui também

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Manifesto />
      {/* TODO: PortfolioShowcase, FeaturedProjects, Clients, Contact, Footer */}
    </main>
  );
}