import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/hero/Hero';
import Manifesto from './components/hero/Manifesto';
import PortfolioShowcase from './components/portfolio/PortfolioShowcase';
import FeaturedProjects from './components/portfolio/FeaturedProjects';
import Clients from './components/clients/Clients';
import Contact from './components/Contact/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-light text-dark font-sans selection:bg-primary selection:text-white">
      <Header />
      
      <main>
        <Hero />
        <Manifesto />
        <PortfolioShowcase />
        <FeaturedProjects />
        <Clients />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
