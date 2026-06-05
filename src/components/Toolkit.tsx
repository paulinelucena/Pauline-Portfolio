import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Info, X } from 'lucide-react';
import { ProfessionalTool } from '../types';

const toolsData: ProfessionalTool[] = [
  {
    name: 'NetSuite',
    category: 'ERP & Accounting',
    description: 'Enterprise cloud ERP used for meticulous ledger maintenance, real-time billing logs, and global operational metrics.',
  },
  {
    name: 'SAP',
    category: 'ERP & Accounting',
    description: 'Global corporate industry standard for secure transaction logs, treasury controls, and financial reports.',
  },
  {
    name: 'Floqast',
    category: 'ERP & Accounting',
    description: 'Modern close management software that seamlessly coordinates month-end reconciliations, checklists, and sign-offs.',
  },
  {
    name: 'QuickBooks',
    category: 'ERP & Accounting',
    description: 'The standard bookkeeping accounting wrapper for accounts payable/receivable, bank flows, and custom client reports.',
  },
  {
    name: 'Microsoft Excel',
    category: 'Productivity',
    description: 'Power-user formulas, dynamic tables, index-matches, and pivot models with 100% calculation compliance.',
  },
  {
    name: 'Google Workspace',
    category: 'Productivity',
    description: 'Secure corporate cloud spreadsheets, centralized virtual folders, and live collaborative administrative files.',
  },
  {
    name: 'Slack',
    category: 'Collaboration',
    description: 'Encrypted virtual workspace for real-time stakeholder liaison and transparent task correspondences.',
  },
  {
    name: 'Microsoft Teams',
    category: 'Collaboration',
    description: 'Secure enterprise video, client status meetings, and instant communication rails for immediate review.',
  },
  {
    name: 'Asana',
    category: 'Project Management',
    description: 'Board layouts, milestone planning, and calendar schedules to enforce prompt delivery and meet every deadline.',
  },
];

const categories = ['All', 'ERP & Accounting', 'Productivity', 'Collaboration', 'Project Management'];

export default function Toolkit() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedTool, setSelectedTool] = useState<ProfessionalTool | null>(null);

  const filteredTools = toolsData.filter((tool) => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="toolkit" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4.5xl font-extrabold uppercase tracking-tight text-[#dae2fd] text-center mb-12">
          The Professional Stack
        </h2>

        {/* Search & Filter bar layout */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10 w-full">
          {/* Search Input wrapper */}
          <div className="relative w-full md:max-w-xs group">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#cfc2d6]/60 group-focus-within:text-[#ddb7ff] transition-colors" />
            <input
              type="text"
              id="tool-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools or features..."
              className="w-full bg-[#131b2e]/60 border border-[#4d4354] rounded-full pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#ddb7ff] focus:ring-1 focus:ring-[#ddb7ff] transition-all text-[#dae2fd] placeholder-[#cfc2d6]/40"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#cfc2d6]/60 hover:text-[#dae2fd]"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Categories select wrapper */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all border ${
                  activeCategory === cat
                    ? 'bg-[#ddb7ff] text-[#490080] border-[#ddb7ff] shadow-[0_2px_10px_rgba(221,183,255,0.2)]'
                    : 'bg-[#131b2e]/45 text-[#cfc2d6] border-[#4d4354] hover:border-[#ddb7ff]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Chips layout */}
        <div className="flex flex-wrap justify-center gap-3.5 relative min-h-[120px]">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool) => (
              <motion.button
                key={tool.name}
                layoutId={`tool-${tool.name}`}
                onClick={() => setSelectedTool(tool)}
                className="px-6 py-3 border border-[#4d4354] rounded-full bg-[#131b2e]/55 flex items-center gap-3.5 hover:border-[#ddb7ff] hover:bg-[#171f33] transition-all cursor-pointer select-none active:scale-95 group text-left"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#ddb7ff] group-hover:scale-125 transition-transform" />
                <span className="font-medium text-sm md:text-base text-[#dae2fd]">{tool.name}</span>
                <Info size={14} className="text-[#cfc2d6]/40 group-hover:text-[#ddb7ff] transition-colors" />
              </motion.button>
            ))
          ) : (
            <div className="text-center py-8 text-[#cfc2d6] text-sm">
              No professional stack tools match your filter or search query.
            </div>
          )}
        </div>

        {/* Dynamic Tool Detail Dialog (Modal/Panel) */}
        {selectedTool && (
          <div className="fixed inset-0 bg-[#060e20]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              layoutId={`tool-${selectedTool.name}`}
              className="glass-card border border-[#ddb7ff]/50 p-6 sm:p-8 rounded-2xl max-w-md w-full relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedTool(null)}
                id="close-tool-modal-btn"
                className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-[#171f33] text-[#cfc2d6] hover:text-[#fff] transition-colors"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#ddb7ff]/10 text-[#ddb7ff]">
                  {selectedTool.category}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#dae2fd] uppercase tracking-tight mb-4">
                {selectedTool.name}
              </h3>

              <p className="text-sm sm:text-base text-[#cfc2d6] leading-relaxed mb-6 font-normal">
                {selectedTool.description}
              </p>

              <div className="flex justify-end">
                <button
                  onClick={() => {
                    setSelectedTool(null);
                    // Scroll to contact form
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
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
