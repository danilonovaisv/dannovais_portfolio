import React from 'react';
import { CLIENT_LOGOS } from '@/constants';

const BrandsStrip: React.FC = () => (
  <section className="py-16 bg-[#0f172a] text-white">
    <div className="container mx-auto px-6 md:px-12 flex flex-col gap-6">
      <div className="flex flex-col gap-2 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">trusted by</p>
        <h3 className="text-2xl md:text-3xl font-semibold">brands and studios worldwide</h3>
      </div>

      <div className="flex items-center justify-between gap-6 overflow-x-auto py-4 px-2 md:px-6">
        {CLIENT_LOGOS.map((logo, index) => (
          <div
            key={logo + index}
            className="flex-shrink-0 w-[140px] h-[80px] rounded-2xl bg-white/10 px-4 py-4 flex items-center justify-center shadow-lg shadow-black/30"
          >
            <img
              src={logo}
              alt={`Client logo ${index + 1}`}
              className="max-h-full max-w-full object-contain filter brightness-150"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BrandsStrip;
