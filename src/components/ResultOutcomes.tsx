import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, Sparkles, TrendingUp, HelpCircle } from 'lucide-react';

interface ResultCard {
  title: string;
  category: string;
  metric: string;
  metricLabel: string;
  initialState: string;
  resolvedState: string;
  details: string[];
}

const resultCardsData: ResultCard[] = [
  {
    title: '14-Month Catch-Up & Clean-Up',
    category: 'Ledger Maintenance',
    metric: '14 Months',
    metricLabel: 'Cleared in 12 Days',
    initialState: '$180k+ in unclassified expenses, 3 completely unreconciled corporate accounts, and delayed annual tax filing.',
    resolvedState: '100% ledger accuracy restored in QuickBooks Online, bank statements perfectly matched, and audit-ready reports compiled.',
    details: [
      'Categorized 800+ legacy transactions with 100% accuracy',
      'Reconciled three-year-old discrepancy items',
      'Provided clear profit and loss sheets for tax preparation'
    ]
  },
  {
    title: 'Accounts Receivable (AR) Optimization',
    category: 'Cash Flow Management',
    metric: '-18 Days',
    metricLabel: 'Reduced Payment Cycle',
    initialState: 'Outstanding client balances of $45k+ extending past 60 days, driven by manual, inconsistent billing spreadsheets.',
    resolvedState: 'Centralized invoice system created, automated communication flows deployed, and collections pipeline stabilized.',
    details: [
      'Integrated prompt automated reminder sequences',
      'Developed live cash collection tracking spreadsheets',
      'Significantly improved agency working capital health'
    ]
  },
  {
    title: 'ERP Migration & Audit Readiness',
    category: 'System Integration',
    metric: '-60%',
    metricLabel: 'Audit Prep Overhead',
    initialState: 'Fragmented billing files, inconsistent double-entry practices across legacy systems, and tedious manually managed spreadsheets.',
    resolvedState: 'Mapped and migrated historical financial logs to structured templates fully ready for NetSuite integration.',
    details: [
      'Sanitized ledger accounts to ensure system alignment',
      'Created robust month-end close coordination checklists',
      'Protected data integrity during complex legacy migrations'
    ]
  }
];

export default function ResultOutcomes() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="outcomes" className="py-24 bg-[#0a0715]/60 border-t border-[#171f33] relative">
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-[#ddb7ff]/5 rounded-full filter blur-[120px] pointer-events-none" />
      
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        {/* Eyebrow */}
        <div className="flex justify-center mb-5">
          <span className="text-[10px] uppercase font-semibold tracking-[0.25em] px-3 py-1 rounded-full border border-[#4d4354] text-[#ddb7ff]/80 bg-[#131b2e]/40">
            Transformation Portfolio
          </span>
        </div>

        {/* Header Block */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-[#dae2fd] mb-4">
            Proven Case Outcomes
          </h2>
          <p className="text-sm md:text-base text-[#cfc2d6] leading-relaxed">
            Real transformations and operational results. Anonymous, outcome-based highlights demonstrating premium financial integrity.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center items-stretch">
          {resultCardsData.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-[#4d4354]/60 hover:border-[#ddb7ff]/60 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden h-full mx-auto w-full max-w-md lg:max-w-none"
            >
              {/* Highlight background glow on card hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-[#ddb7ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} 
              />

              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-[#ddb7ff]/10 text-[#ddb7ff]">
                    {card.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    <TrendingUp size={12} />
                    {card.metric}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#dae2fd] group-hover:text-white transition-colors mb-2">
                  {card.title}
                </h3>
                <p className="text-[11px] font-semibold text-[#cfc2d6]/50 uppercase tracking-widest mb-6">
                  Outcome: {card.metricLabel}
                </p>

                {/* State comparison cards */}
                <div className="space-y-4 mb-6">
                  {/* Before */}
                  <div className="p-4 rounded-xl bg-[#0b1326]/40 border border-[#4d4354]/30 relative">
                    <span className="absolute top-2 right-3 text-[9px] uppercase font-bold tracking-widest text-rose-400/70">
                      Before
                    </span>
                    <p className="text-xs text-[#cfc2d6]/85 leading-relaxed mt-1">
                      {card.initialState}
                    </p>
                  </div>

                  {/* After */}
                  <div className="p-4 rounded-xl bg-[#110729]/50 border border-[#ddb7ff]/20 relative">
                    <span className="absolute top-2 right-3 text-[9px] uppercase font-bold tracking-widest text-[#ddb7ff]">
                      After
                    </span>
                    <p className="text-xs text-[#dae2fd]/90 leading-relaxed mt-1 font-medium">
                      {card.resolvedState}
                    </p>
                  </div>
                </div>

                {/* Key Execution Steps */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#cfc2d6]/60 mb-3">
                    Scope of Work Completed
                  </h4>
                  <ul className="space-y-2.5">
                    {card.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs text-[#cfc2d6]/80">
                        <CheckCircle size={13} className="text-[#ddb7ff] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom CTA within card */}
              <div className="mt-8 pt-6 border-t border-[#4d4354]/40 flex justify-end">
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-xs font-bold text-[#ddb7ff] group-hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  Request Similar Outcome
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
