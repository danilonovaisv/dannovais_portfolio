"use client";

import { motion } from "framer-motion";
import React from "react";

type Category = {
  id: string;
  label: string;
  title: string;
  description: string;
  bullets: string[];
};

const CATEGORIES: Category[] = [
  {
    id: "brand",
    label: "[ brand & campaigns ]",
    title: "Construção e consistência de marca.",
    description:
      "Campanhas, key visuals e sistemas visuais pensados para reforçar posicionamento e diferenciação.",
    bullets: [
      "Campanhas 360º e desdobramentos",
      "Key visual e sistemas de identidade",
      "Guides de uso e manuais visuais",
    ],
  },
  {
    id: "motion",
    label: "[ videos & motions ]",
    title: "Narrativas em movimento.",
    description:
      "Filmes, explainer videos e motion design para traduzir mensagens complexas em histórias simples.",
    bullets: [
      "Filmes institucionais e de campanha",
      "Explainers animados",
      "Motion design para social e produto",
    ],
  },
  {
    id: "digital",
    label: "[ web campaigns, websites & tech ]",
    title: "Experiências digitais que fazem sentido.",
    description:
      "Landing pages, hotsites e experiências interativas alinhadas à jornada da marca.",
    bullets: [
      "Web campaigns e landing pages",
      "Portais institucionais",
      "Experiências interativas / 3D",
    ],
  },
];

const WorkCategories: React.FC = () => {
  return (
    <section
      id="categories"
      className="bg-[var(--color-surface-main)] pb-16 pt-8 sm:pb-20 sm:pt-10"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.header
          className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              como eu atuo
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#111111] sm:text-3xl">
              Três frentes, uma mesma visão de design.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate-600">
            Cada projeto entra em uma dessas frentes — muitas vezes, em mais de
            uma — mas sempre com o mesmo ponto de partida: clareza sobre o
            problema de negócio.
          </p>
        </motion.header>

        <div className="grid gap-6 md:grid-cols-3">
          {CATEGORIES.map((category, index) => (
            <motion.article
              key={category.id}
              className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm shadow-slate-200"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0057FF]">
                {category.label}
              </p>
              <h3 className="mt-3 text-base font-semibold text-[#111111]">
                {category.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {category.description}
              </p>
              <ul className="mt-4 space-y-1.5 text-[13px] text-slate-700">
                {category.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-[3px] w-[12px] flex-shrink-0 rounded-full bg-[#0057FF]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkCategories;
