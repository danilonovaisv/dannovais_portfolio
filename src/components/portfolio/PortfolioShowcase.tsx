'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CATEGORIES } from '../../constants';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const PortfolioShowcase: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio-showcase" className="py-24 bg-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative">
        
        {/* Header Area */}
        <div className="relative mb-16 text-center">
          {/* Microtext absolute left on desktop to match reference layout */}
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-xs tracking-wide lowercase"
          >
            [what we love working on]
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold tracking-tight lowercase inline-block"
          >
            <span className="text-primary">portfólio</span> <span className="text-dark">showcase</span>
          </motion.h2>
        </div>

        {/* Stripes List - Lo & Behold Style */}
        <div className="flex flex-col space-y-4">
          {CATEGORIES.map((category, index) => {
            // Logic for Alignment based on Screenshot reference:
            // Index 0 (Brand): Right aligned
            // Index 1 (Video): Center aligned
            // Index 2 (Web): Left aligned
            let justifyClass = 'justify-center'; // default
            if (index === 0) justifyClass = 'justify-end text-right';
            if (index === 1) justifyClass = 'justify-center text-center';
            if (index === 2) justifyClass = 'justify-start text-left';

            // Animation direction: Stripe 1 (Left), Stripe 2 (Right), Stripe 3 (Left)
            const initialX = index % 2 === 0 ? -60 : 60;

            return (
              <motion.a
                key={category.id}
                href={`/portfolio?category=${category.id}`}
                initial={{ opacity: 0, x: initialX }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1], // Custom bezier for smooth "lo & behold" feel
                  delay: index * 0.15 
                }}
                className="group relative flex items-center w-full min-h-[140px] md:min-h-[180px] bg-[#F4F5F7] hover:bg-gray-100 px-6 md:px-12 py-6 overflow-hidden transition-colors duration-500 rounded-sm"
              >
                {/* Text Container - Flex Grow to control alignment */}
                <div className={`flex-grow flex ${justifyClass} px-4 md:px-12 z-10`}>
                   <span className="text-2xl md:text-4xl lg:text-5xl font-normal text-dark group-hover:tracking-tight transition-all duration-500 ease-out">
                    {category.label}
                  </span>
                </div>

                {/* Blue Dot / Icon - Always on Right */}
                <div className="flex-shrink-0 z-10 ml-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30 transition-shadow duration-300"
                  >
                     <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </motion.div>
                </div>

                {/* Subtle Hover Reveal Effect (Optional background shift) */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-soft-light" />
              </motion.a>
            );
          })}
        </div>

        {/* Footer CTA - Blue Pill Centered */}
        <div className="mt-20 flex justify-center">
          <motion.a 
            href="/portfolio"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full text-sm md:text-base font-semibold shadow-lg hover:shadow-primary/40 transition-all duration-300"
          >
            let’s build something great
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

      </div>
    </section>
  );
};

export default PortfolioShowcase;
