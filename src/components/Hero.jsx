import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Github, 
  Linkedin,
  Terminal, 
  Sparkles, 
  Download, 
  Mail, 
  CheckCircle2, 
  Copy,
  Layers,
  Database,
  Bot,
  MapPin,
  Phone,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % personalInfo.taglines.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    triggerConfetti();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status & Location Pill */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2 mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Open for SDE &amp; AI Roles</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs font-mono">
                <MapPin className="w-3 h-3 text-indigo-400" />
                <span>Koppal / Bengaluru, India</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]"
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
                Harshith Veerapur
              </span>
            </motion.h1>

            {/* Animated Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-14 sm:h-12 mt-3 flex items-center"
            >
              <span className="text-xl sm:text-2xl font-mono text-cyan-300 font-medium">
                &gt; {personalInfo.taglines[taglineIndex]}
                <span className="animate-pulse text-indigo-400 ml-1">_</span>
              </span>
            </motion.div>

            {/* Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed"
            >
              Computer Science &amp; Business Systems graduate (<strong className="text-white font-semibold">CGPA: 8.5/10</strong>). 
              Currently an <strong className="text-white font-semibold">AI Intern at Infosys</strong>, and formerly 
              <strong className="text-white font-semibold"> AI/ML Engineer Intern at Inventeron Technologies</strong>. 
              Experienced in building live machine learning web apps (like the EV Range Predictor on Render), 
              relational MySQL reporting architectures (InsightBoard), and secure full-stack platforms.
            </motion.p>

            {/* Quick Pill Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-5 flex flex-wrap gap-2"
            >
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300">
                <Bot className="w-3.5 h-3.5" />
                <span>Infosys AI Intern</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300">
                <Database className="w-3.5 h-3.5" />
                <span>MySQL &amp; Window Functions</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300">
                <Layers className="w-3.5 h-3.5" />
                <span>Flask, Python, Scikit-Learn</span>
              </div>
            </motion.div>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              {/* Download Resume Action */}
              <a
                href={personalInfo.resumeUrl}
                download="Harshith_Veerapur_Resume.pdf"
                onClick={triggerConfetti}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              {/* Projects Button */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-indigo-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* LinkedIn Link */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-[#0A66C2]/60 transition-all hover:scale-105"
                title="View LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-[#0A66C2]" />
              </a>

              {/* GitHub Link */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 transition-all hover:scale-105"
                title="View GitHub Profile"
              >
                <Github className="w-5 h-5 text-slate-200" />
              </a>

              {/* Copy Email Button */}
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl font-mono text-xs text-slate-300 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] transition-all"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </motion.div>
          </div>

          {/* Right Column: Interactive Code Terminal Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              {/* Glowing aura */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-cyan-500/30 blur-xl opacity-75 animate-pulse-slow" />

              {/* Terminal Frame */}
              <div className="relative rounded-2xl bg-[#0F172A]/90 border border-slate-700/80 shadow-2xl overflow-hidden backdrop-blur-xl">
                
                {/* Terminal Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0B1120] border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    <span>harshith_engineer.py</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">Python 3.11</span>
                </div>

                {/* Terminal Body */}
                <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-slate-300">
                  <p className="text-slate-500"># Profile &amp; Experience Overview</p>
                  <p>
                    <span className="text-indigo-400">class</span> <span className="text-cyan-300 font-bold">HarshithVeerapur</span>:
                  </p>
                  <p className="pl-4">
                    education: <span className="text-emerald-300">str</span> = <span className="text-amber-200">"B.Tech CSBS (CGPA: 8.5/10)"</span>
                  </p>
                  <p className="pl-4">
                    current_role: <span className="text-emerald-300">str</span> = <span className="text-amber-200">"AI Intern @ Infosys"</span>
                  </p>
                  <p className="pl-4">
                    past_internship: <span className="text-emerald-300">str</span> = <span className="text-amber-200">"AI/ML Engineer @ Inventeron"</span>
                  </p>
                  <p className="pl-4">
                    flagship_apps: <span className="text-emerald-300">dict</span> = {'{'}
                  </p>
                  <p className="pl-8 text-amber-200">"ev_predictor": "Live on Render",</p>
                  <p className="pl-8 text-amber-200">"insightboard": "MySQL CTEs + 30+ Pytest",</p>
                  <p className="pl-8 text-amber-200">"stego_chat": "Covert LSB + Flask &amp; MySQL"</p>
                  <p className="pl-4">{'}'}</p>
                  <p className="pl-4">
                    contact: <span className="text-emerald-300">str</span> = <span className="text-amber-200">"harshitveerapur4@gmail.com"</span>
                  </p>
                  <br />
                  <p className="text-slate-500"># Run automated health check</p>
                  <p>
                    dev = <span className="text-cyan-300">HarshithVeerapur</span>()
                  </p>
                  <p>
                    <span className="text-indigo-400">assert</span> dev.education.<span className="text-cyan-300">startswith</span>(<span className="text-amber-200">"B.Tech"</span>)
                  </p>
                  <p className="text-emerald-400 mt-2 font-semibold">
                    &gt;&gt;&gt; Ready to deploy: All tests passed (30/30) ⚡
                  </p>
                </div>

                {/* Footer status bar in terminal */}
                <div className="px-4 py-2 bg-[#0B1120]/70 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Infosys AI Training • Active</span>
                  </span>
                  <span>UTF-8</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
