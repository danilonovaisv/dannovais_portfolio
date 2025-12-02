import React from 'react';
import { CATEGORIES } from '@/constants';

const WorkCategories: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6 md:px-12 max-w-6xl space-y-10">
      <div className="text-center space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">selected disciplines</p>
        <h3 className="text-3xl md:text-4xl font-semibold">Where craftsmanship meets strategy</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CATEGORIES.map((category) => (
          <article
            key={category.id}
            className="flex flex-col rounded-3xl border border-gray-100 bg-gray-50 shadow-sm overflow-hidden"
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={category.thumbnailUrl}
                alt={category.label}
                className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
              />
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between gap-4">
              <p className="text-sm uppercase tracking-[0.35em] text-[#1557ff]">categoria</p>
              <h4 className="text-2xl font-bold text-gray-900">{category.label}</h4>
              <a
                href={`/portfolio?category=${category.id}`}
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-600 hover:text-[#1557ff]"
              >
                ver projetos
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WorkCategories;
