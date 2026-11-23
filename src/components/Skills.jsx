import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  FileCode, 
  Cpu, 
  Layout, 
  Bot, 
  Brain, 
  Binary, 
  Table, 
  Workflow, 
  FileCheck, 
  Server, 
  Atom, 
  Palette, 
  BarChart3, 
  Network, 
  Shield, 
  GitBranch, 
  CheckCircle2, 
  Cloud, 
  Terminal, 
  BookOpen,
  Sparkles,
  Zap
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Icon mapping helper
const iconMap = {
  Code,
  Database,
  FileCode,
  Cpu,
  Layout,
  Bot,
  Brain,
  Binary,
  Table,
  Workflow,
  FileCheck,
  Server,
  Atom,
  Palette,
  BarChart3,
  Network,
  Shield,
  GitBranch,
  CheckCircle2,
  Cloud,
  Terminal,
  BookOpen
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', ...Object.keys(skillsData)];

  const getFilteredSkills = () => {
    if (activeTab === 'All') {
      const all = [];
      Object.entries(skillsData).forEach(([cat, list]) => {
        list.forEach(skill => all.push({ ...skill, category: cat }));
      });
      return all;
    }
    return skillsData[activeTab]?.map(s => ({ ...s, category: activeTab })) || [];
  };

  return (
    <section id="skills" className="py-24 relative bg-slate-950/40 border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white"
          >
            Skills &amp; Tech Stack
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400"
          >
            A cohesive suite of modern languages, machine learning frameworks, databases, and engineering tools.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4"
        >
          {getFilteredSkills().map((skill, idx) => {
            const IconComponent = iconMap[skill.icon] || Code;
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: idx * 0.02 }}
                key={`${skill.category}-${skill.name}`}
                className="p-4 rounded-xl bg-[#0F172A]/80 border border-slate-800/80 hover:border-indigo-500/40 hover:bg-[#131D36] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:text-cyan-300 group-hover:scale-110 transition-all mb-3">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-slate-200 text-sm group-hover:text-white transition-colors">
                    {skill.name}
                  </h4>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    {skill.level}
                  </span>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    skill.level === 'Advanced' ? 'bg-cyan-400' :
                    skill.level === 'Proficient' ? 'bg-indigo-400' : 'bg-purple-400'
                  }`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stack Highlight Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-cyan-950/40 border border-indigo-500/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-300">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-base">
                Exploring Small Language Models &amp; Agentic Workflows
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Continuously fine-tuning lightweight models and engineering autonomous multi-step pipelines.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/harshithv2004/SLM"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-cyan-300 bg-cyan-950/50 hover:bg-cyan-900/50 border border-cyan-700/50 transition-colors"
          >
            View SLM Repo &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
