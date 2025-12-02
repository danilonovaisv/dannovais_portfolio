import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CLIENT_LOGOS } from '../constants';

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-16"
        >
            marcas com as quais já trabalhei.
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 items-center justify-items-center">
            {CLIENT_LOGOS.map((logo, index) => (
                <motion.div
                    key={logo}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="w-full max-w-[140px] opacity-70 hover:opacity-100 transition-opacity duration-300"
                >
                    <ClientLogo logo={logo} index={index} />
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

interface ClientLogoProps {
  logo: string;
  index: number;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ logo, index }) => {
  const [loadFailed, setLoadFailed] = useState(false);

  if (loadFailed) {
    return (
      <div className="flex items-center justify-center w-full h-full text-white font-bold tracking-[0.3em] text-xs opacity-60">
        CLIENT {index + 1}
      </div>
    );
  }

  return (
    <Image
      src={logo}
      alt={`Client ${index + 1}`}
      width={140}
      height={70}
      className="w-full h-full object-contain transition-opacity duration-300 brightness-0 invert"
      sizes="(max-width: 1024px) 25vw, 140px"
      onError={() => setLoadFailed(true)}
    />
  );
};
