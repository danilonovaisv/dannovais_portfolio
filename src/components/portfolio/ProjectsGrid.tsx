'use client';

import React, { useId } from 'react';
import { motion } from 'framer-motion';

type Project = {
  id: string;
  title: string;
  client: string;
  category: string;
  year?: string;
  role?: string;
};

const PROJECTS: Project[] = [
  {
    id: 'brand-campaign-01',
    title: 'Nova plataforma de marca para fintech X.',
    client: 'Fintech X',
    category: 'Brand & Campaigns',
    year: '2024',
    role: 'Brand design, direção de arte',
  },
  {
    id: 'motion-01',
    title: 'Explainer animado para lançamento de produto SaaS.',
    client: 'Produto SaaS Y',
    category: 'Videos & Motions',
    year: '2023',
    role: 'Roteiro, storyboard, motion',
  },
  {
    id: 'web-01',
    title: 'Landing page interativa para campanha global.',
    client: 'Marca global Z',
    category: 'Web Campaigns & Tech',
    year: '2024',
    role: 'UX/UI, direção criativa',
  },
  {
    id: 'brand-02',
    title: 'Sistema visual para campanha always-on.',
    client: 'Marca de consumo',
    category: 'Brand & Campaigns',
    year: '2023',
    role: 'Direção de arte',
  },
  {
    id: 'motion-02',
    title: 'Série de vinhetas para social media.',
    client: 'Startup de educação',
    category: 'Videos & Motions',
    year: '2022',
    role: 'Motion design',
  },
  {
    id: 'web-02',
    title: 'Portal institucional com foco em conteúdo.',
    client: 'Organização cultural',
    category: 'Web Campaigns & Tech',
    year: '2022',
    role: 'UX/UI design',
  },
];

const ProjectsGrid: React.FC = () => {
  const sectionId = useId();
  
  return (
    <section
      id={sectionId}
      className="bg-[var(--color-surface-main)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.header
          className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              seleção de projetos
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#111111] sm:text-3xl">
              Alguns cases recentes.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate-600">
            Uma curadoria de projetos que representam bem a combinação entre
            estratégia, narrativa visual e execução.
          </p>
        </motion.header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              className="group flex h-full flex-col rounded-3xl bg-white p-5 shadow-sm shadow-slate-200 transition-transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {/* placeholder visual */}
              <div className="mb-4 h-32 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 opacity-90" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0057FF]">
                {project.category}
              </p>
              <h3 className="mt-2 text-sm font-semibold text-[#111111]">
                {project.title}
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                {project.client}
                {project.year && ` · ${project.year}`}
              </p>
              {project.role && (
                <p className="mt-2 text-xs text-slate-500">
                  <span className="font-semibold">papel: </span>
                  {project.role}
                </p>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;