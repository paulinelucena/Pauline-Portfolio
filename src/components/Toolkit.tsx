import { useState } from 'react';
import { motion } from 'motion/react';
import { X, ArrowUpRight } from 'lucide-react';
import { ProfessionalTool } from '../types';

const toolsData: ProfessionalTool[] = [
  { name: 'NetSuite', category: 'ERP & Accounting', description: 'Enterprise cloud ERP used for meticulous ledger maintenance, real-time billing logs, and global operational metrics.' },
  { name: 'SAP', category: 'ERP & Accounting', description: 'Global corporate industry standard for secure transaction logs, treasury controls, and financial reports.' },
  { name: 'Floqast', category: 'ERP & Accounting', description: 'Modern close management software that seamlessly coordinates month-end reconciliations, checklists, and sign-offs.' },
  { name: 'QuickBooks', category: 'ERP & Accounting', description: 'The standard bookkeeping accounting wrapper for accounts payable/receivable, bank flows, and custom client reports.' },
  { name: 'Microsoft Excel', category: 'Productivity', description: 'Power-user formulas, dynamic tables, index-matches, and pivot models with 100% calculation compliance.' },
  { name: 'Google Workspace', category: 'Productivity', description: 'Secure corporate cloud spreadsheets, centralized virtual folders, and live collaborative administrative files.' },
  { name: 'Slack', category: 'Collaboration', description: 'Encrypted virtual workspace for real-time stakeholder liaison and transparent task correspondences.' },
  { name: 'Microsoft Teams', category: 'Collaboration', description: 'Secure enterprise video, client status meetings, and instant communication rails for immediate review.' },
  { name: 'Asana', category: 'Project Management', description: 'Board layouts, milestone planning, and calendar schedules to enforce prompt delivery and meet every deadline.' },
];

const categories = ['All', 'ERP & Accounting', 'Productivity', 'Collaboration', 'Project Management'];

export default function Toolkit() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedTool, setSelectedTool] = useState<ProfessionalTool | null>(null);

  const filteredTools = activeCategory === 'All'
    ? toolsData
    : toolsData.filter((t) => t.category === activeCategory);

  return (
    <section id="toolkit" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div className="flex justify-center mb-5">
          <span className="text-[10px] uppercase font-semibold tracking-[0.25em] px-3 py-1 rounded-full border border-[#4d4354] text-[#ddb7ff]/80 bg-[#131b2e]/40">
            Professional Stack
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-[#dae2fd] text-center mb-4">
          Tools I Work With
        </h2>
        <p className="text-center text-sm md:text-base text-[#cfc2d6]/80 max-w-xl mx-auto mb-12">
          A curated suite of industry-standard platforms powering accurate, secure, and timely delivery.
        </p>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all border ${
                activeCategory === cat
                  ? 'bg-[#ddb7ff] text-[#490080] border-[#ddb7ff] shadow-[0_4px_20px_rgba(221,183,255,0.25)]'
                  : 'bg-[#131b2e]/45 text-[#cfc2d6] border-[#4d4354] hover:border-[#ddb7ff]/60 hover:text-[#dae2fd]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {filteredTools.map((tool) => (
            <motion.button
              key={tool.name}
              layout
              layoutId={`tool-${tool.name}`}
              onClick={() => setSelectedTool(tool)}
              className="group relative overflow-hidden p-5 rounded-xl border border-[#4d4354] bg-gradient-to-br from-[#131b2e]/70 to-[#0c1325]/70 hover:border-[#ddb7ff]/60 hover:from-[#171f33] transition-all text-left"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ddb7ff] shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="font-semibold text-sm md:text-base text-[#dae2fd] truncate">
                    {tool.name}
                  </span>
                </div>
                <ArrowUpRight size={16} className="text-[#cfc2d6]/40 group-hover:text-[#ddb7ff] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
              </div>
              <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#cfc2d6]/50 font-medium">
                {tool.category}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Tool detail modal */}
        {selectedTool && (
          <div
            className="fixed inset-0 bg-[#060e20]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTool(null)}
          >
            <motion.div
              layoutId={`tool-${selectedTool.name}`}
              onClick={(e) => e.stopPropagation()}
              className="glass-card border border-[#ddb7ff]/50 p-6 sm:p-8 rounded-2xl max-w-md w-full relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedTool(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-[#171f33] text-[#cfc2d6] hover:text-white transition-colors"
              >
                <X size={18} />
              </button>

              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#ddb7ff]/10 text-[#ddb7ff]">
                {selectedTool.category}
              </span>

              <h3 className="text-2xl font-extrabold text-[#dae2fd] uppercase tracking-tight mt-3 mb-4">
                {selectedTool.name}
              </h3>

              <p className="text-sm sm:text-base text-[#cfc2d6] leading-relaxed mb-6">
                {selectedTool.description}
              </p>

              <div className="flex justify-end">
                <button
                  onClick={() => {
                    setSelectedTool(null);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#ddb7ff] text-[#490080] px-4 py-2 rounded-lg font-bold text-xs hover:brightness-110 active:scale-95 transition-all"
                >
                  Request implementation with {selectedTool.name}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
