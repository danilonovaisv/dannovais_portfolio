'use client';

import React from 'react';
import { NAV_LINKS, SOCIALS } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-6 text-xs text-slate-500">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 sm:flex-row sm:items-center">
        
        <p>© {new Date().getFullYear()} Danilo Novais. Todos os direitos reservados.</p>

        <nav>
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href}
                  className="text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors lowercase"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col items-start sm:items-end gap-1">
          <div className="flex gap-4">
            {SOCIALS.map((social) => (
                <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-slate-700 transition-colors"
                    aria-label={social.platform}
                >
                    {social.icon}
                </a>
            ))}
          </div>
          <p className="text-[11px] text-slate-500">
            Design, estratégia & experiência — construindo marcas com intenção.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
