import React from 'react';
import Image from 'next/image';
import { FEATURED_PROJECTS } from '@/constants';

const ProjectsGrid: React.FC = () => (
  <section className="py-20 bg-[#F4F5F7]">
    <div className="container mx-auto px-6 md:px-12 max-w-7xl space-y-10">
      <div className="space-y-2 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">selected work</p>
        <h3 className="text-3xl md:text-4xl font-semibold">Featured projects</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {FEATURED_PROJECTS.map((project) => (
          <article
            key={project.slug}
            className="group flex flex-col rounded-3xl bg-white shadow-xl overflow-hidden border border-transparent transition-all hover:-translate-y-1 hover:border-gray-200"
          >
            <div className="aspect-[4/3] w-full overflow-hidden relative">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex-1 p-6 flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between text-xs uppercase tracking-[0.3em] text-gray-400">
                <span>{project.displayCategory}</span>
                <span>{project.year}</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900">{project.title}</h4>
              <p className="text-sm text-gray-600 font-medium">{project.client}</p>
              <a
                href={`/portfolio/${project.slug}`}
                className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#1557ff]"
              >
                ver estudo
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsGrid;
