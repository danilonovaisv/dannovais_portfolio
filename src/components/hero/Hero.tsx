"use client";

import React, { useId } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Scene3D from "./Scene3D";
import type { Variants } from "framer-motion";

const heroLines = ["Design,", "não é só", "estética."];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 0.84, 0.44, 1],
      staggerChildren: 0.04,
    },
  },
};

const lineVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    rotateX: -40,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.2 + index * 0.07,
      duration: 0.6,
      ease: [0.16, 0.84, 0.44, 1],
    },
  }),
};

const rightColumnVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.3,
      duration: 0.7,
      ease: [0.16, 0.84, 0.44, 1],
    },
  },
};

const Hero: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const sectionId = useId();

  const handleScrollToManifesto = () => {
    const el = document.getElementById("manifesto");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id={sectionId}
      className="relative overflow-hidden bg-[#F4F5F7] pb-24 pt-28 sm:pt-32"
    >
      <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col gap-12 px-6 lg:min-h-[90vh] lg:flex-row lg:items-center lg:gap-16">
        {/* Coluna esquerda - texto */}
        <motion.div
          className="flex-1"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Tag */}
          <motion.div
            className="mb-4 inline-flex items-center rounded-full bg-white/70 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-[#0057FF] shadow-sm shadow-slate-200 backdrop-blur"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            [ BRAND AWARENESS ]
          </motion.div>

          {/* Título em 3 linhas */}
          <div className="space-y-1">
            {heroLines.map((line, index) => (
              <motion.h1
                key={line}
                custom={index}
                variants={lineVariants}
                className="text-4xl font-extrabold leading-tight text-[#111111] sm:text-5xl lg:text-6xl"
              >
                {line}
              </motion.h1>
            ))}
          </div>

          {/* Subtítulo */}
          <motion.div
            className="mt-6 inline-flex rounded-2xl bg-white/80 px-5 py-3 text-sm font-medium text-[#111111] shadow-md backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            [É intenção, é estratégia, é experiência.]
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link href="/sobre">
              <motion.div
                whileHover={
                  reduceMotion
                    ? {}
                    : { scale: 1.02, y: -1, transition: { duration: 0.18 } }
                }
                whileTap={reduceMotion ? {} : { scale: 0.97, y: 0 }}
                className="group inline-flex items-center gap-2 rounded-full bg-[#0057FF] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/30 cursor-pointer"
              >
                get to know me better
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Coluna direita - Card 3D + thumb do manifesto */}
        <motion.div
          className="relative flex-1"
          initial="hidden"
          animate="visible"
          variants={rightColumnVariants}
        >
          <div className="relative mx-auto h-[320px] w-full max-w-[360px] sm:h-[360px] lg:h-[420px]">
            {/* Card 3D */}
            <div className="absolute inset-0 rounded-[34px] bg-white/40 shadow-[0_24px_80px_rgba(15,23,42,0.32)] backdrop-blur-xl overflow-hidden">
              <Scene3D />
            </div>

            {/* Tag em cima do card */}
            <motion.div
              className="pointer-events-none absolute -top-6 left-6 inline-flex items-center rounded-full bg-white/95 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-800 shadow-md"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.45 }}
            >
              design, estratégia & experiência
            </motion.div>

            {/* Thumb manifesto */}
            <motion.button
              type="button"
              onClick={handleScrollToManifesto}
              className="group absolute -bottom-12 right-0 flex w-[230px] items-center gap-3 rounded-2xl bg-white/95 px-3 py-3 text-left text-[11px] font-medium text-slate-900 shadow-xl shadow-slate-900/25 backdrop-blur"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1, duration: 0.45 }}
              whileHover={
                reduceMotion
                  ? {}
                  : { y: -2, scale: 1.01, transition: { duration: 0.2 } }
              }
              aria-label="Ir para manifesto em vídeo"
            >
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-black/80">
                <video
                  className="h-full w-full object-cover opacity-90"
                  src="https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/project-videos/VIDEO-APRESENTACAO-PORTFOLIO.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                  ▶
                </span>
              </div>
              <span className="flex-1 leading-snug">
                Vídeo manifesto —
                <br />
                conheça minha visão de design
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;