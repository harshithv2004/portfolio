import React from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  TerminalSquare, 
  CheckCircle, 
  ShieldCheck, 
  Database, 
  Cpu, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const cards = [
    {
      icon: <TerminalSquare className="w-6 h-6 text-indigo-400" />,
      title: "Full-Stack & Systems",
      desc: "Architecting backend services in Python (Flask/FastAPI) and responsive frontends in React and Chart.js with clean API contracts."
    },
    {
      icon: <Database className="w-6 h-6 text-cyan-400" />,
      title: "Advanced SQL & Relational DBs",
      desc: "Specialized in complex MySQL architectures, CTEs, window functions (LAG/LEAD), indexes, and deterministic business metrics."
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      title: "Applied AI & Small Language Models",
      desc: "Developing document intelligence pipelines (FNOL insurance parsing), NLP summarizers, and experimenting with compact SLMs."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Security & Test Discipline",
      desc: "Rigorous focus on input sanitization, test-driven reliability with 30+ pytest suites, and cryptographic steganography protocols."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Behind The Code</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white"
          >
            Engineering Driven by Precision &amp; Impact
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed"
          >
            I am a software engineer focused on building practical, robust systems at the intersection of 
            applied machine learning, relational databases, and modern web applications.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {personalInfo.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#0F172A]/80 border border-slate-800 hover:border-slate-700 backdrop-blur-md text-center transition-all group hover:scale-[1.02]"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 font-mono">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400 mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#131D36] to-[#0D1527] border border-white/[0.07] hover:border-indigo-500/40 transition-all group hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
