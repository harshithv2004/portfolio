import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  Search, 
  ChevronRight,
  FolderGit2,
  Radio
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'AI & Machine Learning',
    'Full Stack & Analytics',
    'Security & Full Stack',
    'AI & Automation',
    'Algorithms & Web'
  ];

  const filteredProjects = projectsData.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-3"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Open Source &amp; Live Systems</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white"
          >
            Featured Projects &amp; Live Deployments
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400"
          >
            Real projects spanning machine learning prediction models, advanced SQL analytics engines, and steganographic security platforms.
          </motion.p>
        </div>

        {/* Filter Controls: Search & Category Pills */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tech or project..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-sm bg-slate-900/90 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            />
          </div>

        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                key={project.id}
                className="flex flex-col justify-between rounded-2xl bg-[#0F172A]/80 border border-slate-800 hover:border-indigo-500/50 transition-all group hover:shadow-2xl hover:shadow-indigo-500/10 backdrop-blur-md overflow-hidden"
              >
                
                {/* Top card section */}
                <div className="p-6">
                  
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-indigo-300">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                        project.demoUrl 
                          ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                          : 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20'
                      }`}>
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-sm text-slate-400 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights preview */}
                  {project.highlights && project.highlights[0] && (
                    <div className="mt-4 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{project.highlights[0]}</span>
                    </div>
                  )}

                  {/* Tech stack tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] text-slate-400 border border-white/[0.05]"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[11px] font-mono px-1.5 py-0.5 text-slate-500">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom card footer */}
                <div className="px-6 py-4 bg-[#0B1120]/70 border-t border-slate-800 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <span>Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {/* Live Demo button if present */}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-700/60 transition-all hover:scale-105"
                        title="Open Live App on Render"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {/* GitHub Repo button */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub repo for ${project.title}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white transition-all"
                    >
                      <Github className="w-3.5 h-3.5 text-slate-400" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-[#0F172A]/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">
              No projects found matching "{searchQuery}" in category "{selectedCategory}".
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-3 px-4 py-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
