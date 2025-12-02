"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { CLIENTS_SECTION } from '@/constants';

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6 md:px-12 text-center space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold uppercase tracking-[0.4em]"
        >
          {CLIENTS_SECTION.title}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {CLIENTS_SECTION.logos.map((logo, index) => (
            <motion.div
              key={`${logo}-${index}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="w-full max-w-[160px] transform transition-all duration-300 hover:-translate-y-1 hover:opacity-100 opacity-70"
            >
              <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/20">
                <Image
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  width={120}
                  height={40}
                  sizes="(min-width: 1024px) 120px, 100px"
                  className="max-h-10 w-auto object-contain brightness-0 invert transition-all"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
