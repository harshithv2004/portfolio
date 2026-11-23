import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Github, 
  Linkedin,
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Sparkles, 
  Clock, 
  Phone,
  Download,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Harshith,\n\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      window.location.href = mailtoUrl;

      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }, 800);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect &amp; Collaborate</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400"
          >
            Open for full-time Software Engineer, Application Developer, and AI/ML roles. 
            Reach out via email, phone, or LinkedIn.
          </motion.p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct info cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#0F172A]/80 border border-slate-800 backdrop-blur-md">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono text-slate-300 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Email Address
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="block text-base sm:text-lg font-semibold text-white hover:text-indigo-300 transition-colors mt-1 break-all"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-[#0F172A]/80 border border-slate-800 backdrop-blur-md">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={copyPhone}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono text-slate-300 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors"
                >
                  {copiedPhone ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Phone Number
              </span>
              <a
                href={`tel:${personalInfo.phone}`}
                className="block text-base sm:text-lg font-semibold text-white hover:text-cyan-300 transition-colors mt-1 font-mono"
              >
                {personalInfo.phone}
              </a>
            </div>

            {/* Socials & Resume Card */}
            <div className="p-6 rounded-2xl bg-[#0F172A]/80 border border-slate-800 backdrop-blur-md space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                Professional Profiles
              </span>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#0A66C2]/10 border border-[#0A66C2]/30 text-xs font-medium text-slate-200 hover:bg-[#0A66C2]/20 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-200 hover:bg-slate-800 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </a>
              </div>

              <a
                href={personalInfo.resumeUrl}
                download="Harshith_Veerapur_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold text-xs transition-all hover:scale-[1.02]"
              >
                <Download className="w-4 h-4" />
                <span>Download Attached Resume (PDF)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0F172A]/90 border border-slate-800 shadow-2xl backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              Inquiring about a role, project, or collaboration? Send a note directly to my inbox.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  Message Prepared!
                </h4>
                <p className="text-sm text-slate-300 mt-2">
                  Your message has been addressed to Harshith. If your email client didn't launch automatically, please email directly to{' '}
                  <strong className="text-emerald-300">{personalInfo.email}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-5 px-4 py-2 rounded-xl text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      name="name"
                      placeholder="e.g. Hiring Manager / Recruiter"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      placeholder="recruiter@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Subject / Opportunity
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Software Engineer / AI Role Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    placeholder="Hi Harshith, we would like to speak with you regarding..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-xl shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
