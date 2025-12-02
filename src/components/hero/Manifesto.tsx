"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

const MANIFESTO_VIDEO_URL =
  "https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/project-videos/VIDEO-APRESENTACAO-PORTFOLIO.mp4";

const Manifesto: React.FC = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section>
      id="manifesto"
      className="relative bg-black text-white"
      aria-label="Manifesto em vídeo"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        {/* Título opcional / microtexto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.16em] text-white/60"
        >
          manifesto em vídeo
        </motion.div>

        {/* Container do vídeo */}
        <motion.div
          className="relative overflow-hidden rounded-[32px] bg-zinc-900"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={
            reduceMotion
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 1, y: 0, scale: 1 }
          }
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 0.84, 0.44, 1] }}
        >
          <video
            className="block h-full w-full object-cover"
            src={MANIFESTO_VIDEO_URL}
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Overlay inferior com gradiente e texto */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-6 pb-6 pt-16">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/70">
                [ manifesto ]
              </p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-white/90">
                Um resumo em vídeo sobre como enxergo design, estratégia e
                experiência — e como isso se conecta aos projetos do portfólio.
              </p>
            </div>
            <div className="hidden text-xs font-medium text-white/70 sm:block">
              clique no vídeo para pausar
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Manifesto;
