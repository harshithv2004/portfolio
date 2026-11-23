import React from 'react';
import { ArrowUp, Github, Mail, Heart, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/[0.06] bg-[#070A12] relative z-10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-400 p-[1px]">
              <div className="w-full h-full bg-[#090D16] rounded-[7px] flex items-center justify-center font-mono font-bold text-xs text-indigo-400">
                HV
              </div>
            </div>
            <div>
              <span className="font-bold text-white text-sm">
                Harshit Veerapur
              </span>
              <p className="text-xs text-slate-500">
                AI &amp; Software Systems Engineer • Bangalore, India
              </p>
            </div>
          </div>

          {/* Socials & Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} Harshit Veerapur. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, Tailwind CSS &amp; Framer Motion • Ready for Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
