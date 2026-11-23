import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle2, Award } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#0F172A] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-800 flex items-start justify-between bg-[#0B1120]/70">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  {project.category}
                </span>
                {project.demoUrl && (
                  <span className="inline-block px-2 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                    Live on Render
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Content */}
          <div className="p-6 space-y-6 overflow-y-auto">
            {/* Description */}
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {project.longDescription || project.description}
            </p>

            {/* Metrics pills */}
            {project.metrics && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                  Key Capabilities &amp; Metrics
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-200">
                      <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Highlights */}
            {project.highlights && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                  Engineering &amp; Implementation Details
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Tags */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-indigo-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-6 border-t border-slate-800 bg-[#0B1120]/80 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-mono text-slate-400">
              Verified Open Source Repository
            </span>

            <div className="flex items-center gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900/70 border border-emerald-700/60 transition-all hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live App</span>
                </a>
              )}

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/25 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
