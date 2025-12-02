"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ContactSection: React.FC = () => {
  const MAILTO = "mailto:dannovaisv@gmail.com"; // 🔁 TROCAR PELO SEU

  return (
    <section
      id="contact"
      className="bg-[var(--color-surface-main)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-start"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              contato
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[#111111] sm:text-3xl">
              Bora conversar sobre o próximo projeto?
            </h2>
            <p className="mt-4 max-w-xl text-sm text-slate-700">
              Se você está planejando uma nova campanha, lançando um produto ou
              revisitando o posicionamento da sua marca, posso ajudar a traduzir
              objetivos de negócio em soluções visuais e experiências coerentes.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href={MAILTO}>
                <a className="inline-flex items-center rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white shadow-md">
                  enviar um e-mail
                </a>
              </Link>
              <p className="text-xs text-slate-600">
                Me conta um pouco do contexto, prazos e objetivos. Eu respondo
                com sugestões de caminhos possíveis.
              </p>
            </div>
          </div>

          <div className="space-y-4 rounded-3xl bg-white p-6 shadow-sm shadow-slate-200 text-sm text-slate-700">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              infos rápidas
            </p>
            <div className="space-y-2 text-sm">
              <div>
                <p className="text-xs font-semibold text-slate-500">
                  Disponível para
                </p>
                <p>freelance, consultoria criativa e collabs com equipes.</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500">Formato</p>
                <p>
                  projetos pontuais, ongoing ou apoio em sprints específicos.
                </p>
              </div>
            </div>
            <div className="pt-2 text-xs text-slate-500">
              * Podemos começar com uma conversa rápida para alinhar contexto,
              expectativas e fit.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
