import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award, 
  Download, 
  FileText,
  Sparkles 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { experiencesData, educationData, certificationsData, personalInfo } from '../data/portfolioData';

export default function Experience() {
  const triggerDownload = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="experience" className="py-24 relative bg-slate-950/50 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-3"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career &amp; Academic Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white"
          >
            Experience &amp; Education
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400"
          >
            Industry internships in AI/ML, formal degree training in Computer Science &amp; Business Systems (CGPA 8.5/10), and corporate simulations.
          </motion.p>

          {/* Quick Resume Download Action */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex items-center justify-center gap-4"
          >
            <a
              href={personalInfo.resumeUrl}
              download="Harshith_Veerapur_Resume.pdf"
              onClick={triggerDownload}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-lg shadow-indigo-600/25 hover:scale-105 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Resume (PDF)</span>
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 bg-slate-900 border border-slate-800 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>Preview In Browser</span>
            </a>
          </motion.div>
        </div>

        {/* 2-Column Grid: Work Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Column 1: Internships */}
          <div>
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Industry Internships
                </h3>
                <p className="text-xs text-slate-400">
                  Practical engineering &amp; model deployment
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {experiencesData.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-[#0F172A]/80 border border-slate-800 hover:border-indigo-500/40 transition-all group backdrop-blur-md"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {exp.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {exp.period}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {exp.role} <span className="text-slate-400 font-normal">@</span> {exp.company}
                  </h4>

                  <div className="flex items-center gap-1 text-xs text-slate-400 mt-1 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>

                  {exp.highlights && (
                    <ul className="mt-3 space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                    {exp.skills.map((s) => (
                      <span key={s} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-400">
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Education & Certifications */}
          <div className="space-y-10">
            
            {/* Education Sub-section */}
            <div>
              <div className="flex items-center gap-2.5 mb-8">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Formal Education
                  </h3>
                  <p className="text-xs text-slate-400">
                    Academic foundation &amp; core coursework
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {educationData.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-5 rounded-2xl bg-[#0F172A]/80 border border-slate-800 hover:border-cyan-500/40 transition-all backdrop-blur-md"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {edu.score}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {edu.period}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-indigo-300 mt-0.5">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-slate-400 mt-2">
                      {edu.highlights}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications Sub-section */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    Industry Certifications &amp; Simulations
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {certificationsData.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#0F172A]/60 border border-slate-800/80 flex items-start justify-between gap-3"
                  >
                    <div>
                      <h5 className="text-xs sm:text-sm font-semibold text-slate-200">
                        {cert.title}
                      </h5>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Issued by: <strong className="text-indigo-300 font-medium">{cert.issuer}</strong>
                      </p>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 whitespace-nowrap">
                      {cert.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
