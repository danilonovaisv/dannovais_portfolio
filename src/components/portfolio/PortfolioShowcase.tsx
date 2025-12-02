'use client';

import React, { useId } from 'react';
import { motion } from 'framer-motion';

const HIGHLIGHT_VIDEO =
  'https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/project-videos/VIDEO-APRESENTACAO-PORTFOLIO.mp4';

const PortfolioShowcase: React.FC = () => {
  const sectionId = useId();
  
  return (
    <section
      id={sectionId}
      className="bg-[var(--color-surface-main)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* header */}
        <motion.div
          className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              portfólio
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#111111] sm:text-3xl">
              Projetos que conectam marcas, pessoas e experiências.
            </h2>
          </div>

          <p className="max-w-sm text-sm text-slate-600">
            Uma seleção de campanhas, filmes, produtos digitais e experiências
            interativas construídas para marcas de diferentes segmentos.
          </p>
        </motion.div>

        {/* layout principal */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          {/* cartão grande com vídeo */}
          <motion.article
            className="relative overflow-hidden rounded-[32px] bg-black shadow-[0_24px_80px_rgba(15,23,42,0.35)]"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <video
              className="h-full w-full object-cover"
              src={HIGHLIGHT_VIDEO}
              autoPlay
              muted
              loop
              playsInline
            />

            {/* overlay info */}
            <div className="pointer-events-none absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 sm:p-8">
              <div className="space-y-2">
                <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/80">
                  highlight reel
                </span>
                <h3 className="max-w-md text-xl font-semibold text-white sm:text-2xl">
                  Uma visão geral dos projetos que marcaram minha jornada.
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-[11px] font-medium text-white/80">
                <span className="rounded-full bg-white/10 px-3 py-1">
                  brand & campaigns
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1">
                  videos & motions
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1">
                  web & tech
                </span>
              </div>
            </div>
          </motion.article>

          {/* coluna texto / stats / categorias */}
          <motion.aside
            className="flex flex-col justify-between gap-8"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-4 text-sm text-slate-700">
              <p>
                Cada projeto parte de uma pergunta clara:{' '}
                <span className="font-medium">
                  qual é a história que essa marca precisa contar agora?
                </span>{' '}
                A partir disso, conecto estratégia, narrativa visual e
                experiência para construir peças coerentes em múltiplos pontos
                de contato.
              </p>
              <p>
                O resultado é um portfólio que atravessa campanhas 360º, filmes,
                motion design e experiências digitais, sempre com foco em
                <span className="font-medium"> consistência de marca</span> e
                <span className="font-medium"> clareza de mensagem.</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  frentes
                </p>
                <p className="mt-2 font-medium text-[#111111]">
                  Brand, Motion e Digital
                </p>
                <p className="mt-1 text-slate-600">
                  Um portfólio que navega entre campanhas, filmes e produtos
                  digitais.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  abordagem
                </p>
                <p className="mt-2 font-medium text-[#111111]">
                  estratégia antes da estética
                </p>
                <p className="mt-1 text-slate-600">
                  Design como ferramenta de posicionamento e narrativa, não só
                  decoração.
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;