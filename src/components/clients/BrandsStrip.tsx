'use client';

import React, { useId } from 'react';
import { motion } from 'framer-motion';

const BRANDS = [
  'Fintech X',
  'Startup Y',
  'Marca Global Z',
  'Educação',
  'Cultura',
  'SaaS & Tech',
];

const BrandsStrip: React.FC = () => {
  const sectionId = useId();
  
  return (
    <section id={sectionId} className="bg-[#0057FF] py-10 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              marcas & segmentos
            </p>
            <h2 className="mt-2 text-lg font-semibold sm:text-xl">
              Projetos realizados com marcas de diferentes tamanhos e setores.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm sm:flex sm:flex-wrap sm:gap-4">
            {BRANDS.map((brand) => (
              <span
                key={brand}
                className="rounded-full bg-white/10 px-4 py-1.5 text-center text-xs font-medium tracking-wide text-white/90 backdrop-blur"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsStrip;