"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import HeroGlassTorus from './HeroGlassTorus';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  
  // Animation variants for text reveal
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
        y: 0, 
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section id="hero" className="relative min-h-screen bg-light flex items-center pt-20 md:pt-0 overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center gap-12 md:gap-0">
          
          {/* Left Column: Text Content */}
          <motion.div 
            className="flex flex-col justify-center items-start z-20 order-2 md:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Tag */}
            <motion.div variants={itemVariants} className="mb-6">
               <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase">
                 [ Brand Awareness ]
               </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 text-dark">
              <motion.span variants={itemVariants} className="block text-primary">Design,</motion.span>
              <motion.span variants={itemVariants} className="block">não é só</motion.span>
              <motion.span variants={itemVariants} className="block">estética.</motion.span>
            </h1>
            
            {/* Subheadline */}
            <motion.p variants={itemVariants} className="text-primary text-lg md:text-xl font-medium mb-10">
              [É intenção, é estratégia, é experiência.]
            </motion.p>

            {/* CTA */}
            <motion.a 
              href="/sobre" 
              variants={itemVariants}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-primary text-white rounded-full px-8 py-4 flex items-center gap-3 font-semibold text-base md:text-lg transition-all shadow-lg hover:shadow-primary/40 hover:bg-blue-600"
            >
              get to know me better
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right Column: 3D Scene */}
          <div className="relative h-[50vh] md:h-screen w-full flex items-center justify-center order-1 md:order-2">
            <div className="absolute inset-0 md:inset-[-10%] z-10">
               <HeroGlassTorus />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
