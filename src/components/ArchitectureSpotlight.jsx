import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, FileCode, CheckCircle2, Copy, Sparkles, Terminal, Code2 } from 'lucide-react';
import { sqlSpotlight } from '../data/portfolioData';

export default function ArchitectureSpotlight() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const tabs = [
    {
      title: "SQL Window Functions (LAG & CTE)",
      subtitle: "Calculating Month-over-Month Revenue Growth dynamically in MySQL",
      code: sqlSpotlight.highlights[0].codeSnippet,
      points: [
        "Eliminates slow recursive subqueries using Common Table Expressions (CTE)",
        "Applies window function LAG(revenue, 1) partitioned by chronological order",
        "Safeguards against division-by-zero using NULLIF()",
        "Deterministic, real-time metrics without hardcoding"
      ]
    },
    {
      title: "Customer Lifetime Value & HAVING",
      subtitle: "High-value repeat customer identification with multi-table joins",
      code: sqlSpotlight.highlights[1].codeSnippet,
      points: [
        "Joins Customers, Orders, and OrderItems across foreign keys",
        "Filters post-aggregation using HAVING COUNT(DISTINCT o.order_id) > 1",
        "Index-optimized on order_date, status, and customer_id",
        "Powers executive customer retention reports directly in Flask"
      ]
    },
    {
      title: "Insurance Agent: FNOL Pipeline",
      subtitle: "Parsing unstructured First Notice of Loss and ACORD 2 PDFs",
      code: `def process_fnol_batch(document_paths: list[str]) -> BatchResult:
    """
    Ingests plain-text & fillable ACORD 2 PDF claim files,
    extracts key entities, validates policy boundaries,
    and returns routing recommendations.
    """
    results = []
    for path in document_paths:
        raw_text, form_fields = extract_document_payload(path)
        
        # Normalize and validate critical fields
        claim = ClaimRecord(
            policy_number=extract_policy_num(raw_text, form_fields),
            loss_date=parse_incident_date(raw_text),
            estimated_damage=extract_currency_amount(raw_text),
            coverage_type=classify_loss_type(raw_text)
        )
        
        # Apply enterprise business routing rules
        route = evaluate_claim_routing(claim)
        results.append({"claim": claim.to_dict(), "route": route})
        
    return export_structured_summary(results, format="json_and_csv")`,
      points: [
        "Processes dual modalities: unformatted text and standardized ACORD 2 PDFs",
        "Normalizes policy numbers, loss timestamps, and monetary damages",
        "Applies business triage logic for automatic priority assignment",
        "Outputs machine-readable JSON for downstream ERPs + CSV batch audit"
      ]
    }
  ];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(tabs[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="architecture" className="py-24 relative bg-slate-950/60 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-3"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Architecture Deep Dive</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white"
          >
            Behind the Systems
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400"
          >
            A closer look at the actual SQL queries, algorithms, and pipelines powering Harshit's open-source projects.
          </motion.p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/25'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Spotlight Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Architecture Context & Bullet Points */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0F172A]/80 border border-slate-800 backdrop-blur-md">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
              System Context
            </span>
            <h3 className="text-xl font-bold text-white mt-1">
              {tabs[activeTab].title}
            </h3>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              {tabs[activeTab].subtitle}
            </p>

            <div className="mt-6 pt-6 border-t border-slate-800 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Design Decisions
              </h4>
              {tabs[activeTab].points.map((pt, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Production Tested &amp; Validated</span>
              <a
                href="https://github.com/harshithv2004/Insightboard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 font-medium"
              >
                Inspect Code &rarr;
              </a>
            </div>
          </div>

          {/* Right Column: Code Editor View */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0B1120] border border-slate-800 shadow-2xl overflow-hidden">
            
            {/* Code Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#080D18] border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono text-slate-400 ml-2">
                  {activeTab === 2 ? 'fnol_pipeline.py' : 'queries.sql'}
                </span>
              </div>

              <button
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700 transition-colors"
              >
                <Copy className="w-3 h-3" />
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Code Viewport */}
            <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-200 overflow-x-auto bg-[#080D18]/90 max-h-[460px]">
              <pre>
                <code>{tabs[activeTab].code}</code>
              </pre>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
