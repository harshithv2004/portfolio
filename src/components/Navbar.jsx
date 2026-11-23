import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Download, 
  Menu, 
  X, 
  Sparkles,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Contact', href: '#contact' },
  ];

  const triggerDownloadConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.1 }
    });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-[#090D16]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
              <div className="w-full h-full bg-[#090D16] rounded-[11px] flex items-center justify-center">
                <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
                  HV
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                Harshith Veerapur
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                AI &amp; Software Dev
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 rounded-xl transition-all hover:scale-105"
            >
              <Linkedin className="w-4 h-4 text-[#0A66C2]" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 rounded-xl transition-all hover:scale-105"
            >
              <Github className="w-4 h-4 text-slate-200" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Harshith_Veerapur_Resume.pdf"
              onClick={triggerDownloadConfetti}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700/70 rounded-full transition-all hover:scale-105"
            >
              <Download className="w-3.5 h-3.5 text-indigo-400" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 rounded-full shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all hover:scale-105"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-200" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#090D16]/98 border-b border-white/10 backdrop-blur-2xl px-5 py-6"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                <a
                  href={personalInfo.resumeUrl}
                  download="Harshith_Veerapur_Resume.pdf"
                  onClick={() => { triggerDownloadConfetti(); setMobileMenuOpen(false); }}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-800 border border-slate-700 rounded-xl"
                >
                  <Download className="w-4 h-4 text-indigo-400" />
                  <span>Download Resume PDF</span>
                </a>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-slate-200 bg-slate-900 border border-slate-800 rounded-xl"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-slate-200 bg-slate-900 border border-slate-800 rounded-xl"
                  >
                    <Github className="w-3.5 h-3.5 text-slate-300" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
