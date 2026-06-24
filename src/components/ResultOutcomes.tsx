import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';

interface ResultCard {
  title: string;
  category: string;
  metric: string;
  metricLabel: string;
  problem: string;
  action: string;
  result: string;
  methodology: string[];
}

const resultCardsData: ResultCard[] = [
  {
    title: 'Ledger Reconciliation & Catch-Up',
    category: 'Bookkeeping Case Study',
    metric: '100% Reconciled',
    metricLabel: 'Restored Ledger Integrity',
    problem: 'A small business had 14 months of unclassified bank transactions, missing receipts, and completely unreconciled accounts, leading to severe tax filing delays.',
    action: 'Established a standardized chart of accounts in QuickBooks Online, linked secure bank feeds, matched historic transaction trails, and contacted vendors to retrieve legacy invoices.',
    result: 'Successfully classified over 800 legacy transactions, matched all bank statement balances with zero discrepancies, and delivered clean, accountant-ready Profit & Loss statements.',
    methodology: [
      'Configured automated bank feed matching rules',
      'Categorized expense items according to IRS guidelines',
      'Designed a clear missing-receipt audit checklist'
    ]
  },
  {
    title: 'Inbox Triage & Client Operations',
    category: 'Administrative Case Study',
    metric: '-65% Delay',
    metricLabel: 'Optimized Email Turnaround',
    problem: 'A busy founder was overwhelmed by 100+ daily inbound client inquiry emails, leading to delayed quotes and missed commercial leads.',
    action: 'Analyzed historic email patterns, established a nested folder organization hierarchy, drafted 12 personalized response templates, and deployed automation rules.',
    result: 'Reduced average email turnaround delay by 65%, automated spam filtering, and ensured high-value client leads were flagged and answered within 2 hours.',
    methodology: [
      'Designed logical folder systems & automated filters',
      'Developed objective canned response templates',
      'Formulated an inbox management standard SOP'
    ]
  },
  {
    title: 'Operations & Tracking Pipeline',
    category: 'Systems Case Study',
    metric: '-60% Effort',
    metricLabel: 'Automated Status Pipeline',
    problem: 'A team was utilizing fragmented, manually updated text files to track weekly task progress, leading to duplicate entries and slow report compilations.',
    action: 'Centralized all tracking logs into a secure, dynamic Google Sheets dashboard, configured strict validation lists, and wrote self-summarizing formulas.',
    result: 'Created a centralized dashboard that reduced weekly progress compilation time from 5 hours to 2 hours, eliminating duplicate entry risks entirely.',
    methodology: [
      'Constructed robust dropdown data validation lists',
      'Created automated visual progress summary charts',
      'Engineered clean, self-recalculating formulas'
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
            Methodology & Outcomes
          </span>
        </div>

        {/* Header Block */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-[#dae2fd] mb-4">
            Project Showcases
          </h2>
          <p className="text-sm md:text-base text-[#cfc2d6] leading-relaxed">
            Real-world academic and training case studies structured with a rigorous Problem-Action-Result (PAR) methodology.
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

                {/* PAR comparison blocks */}
                <div className="space-y-4 mb-6">
                  {/* Problem */}
                  <div className="p-4 rounded-xl bg-[#0b1326]/40 border border-[#4d4354]/30 relative">
                    <span className="absolute top-2 right-3 text-[9px] uppercase font-black tracking-widest text-rose-400">
                      [P] Problem
                    </span>
                    <p className="text-xs text-[#cfc2d6]/85 leading-relaxed mt-2.5">
                      {card.problem}
                    </p>
                  </div>

                  {/* Action */}
                  <div className="p-4 rounded-xl bg-[#0b1326]/40 border border-[#4d4354]/30 relative">
                    <span className="absolute top-2 right-3 text-[9px] uppercase font-black tracking-widest text-amber-400">
                      [A] Action Taken
                    </span>
                    <p className="text-xs text-[#cfc2d6]/85 leading-relaxed mt-2.5">
                      {card.action}
                    </p>
                  </div>

                  {/* Result */}
                  <div className="p-4 rounded-xl bg-[#110729]/50 border border-[#ddb7ff]/20 relative">
                    <span className="absolute top-2 right-3 text-[9px] uppercase font-black tracking-widest text-[#ddb7ff]">
                      [R] Result Delivered
                    </span>
                    <p className="text-xs text-[#dae2fd]/90 leading-relaxed mt-2.5 font-medium">
                      {card.result}
                    </p>
                  </div>
                </div>

                {/* Precise Methodology */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#cfc2d6]/60 mb-3">
                    Precise Methodology
                  </h4>
                  <ul className="space-y-2.5">
                    {card.methodology.map((step, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2.5 text-xs text-[#cfc2d6]/80">
                        <CheckCircle size={13} className="text-[#ddb7ff] shrink-0 mt-0.5" />
                        <span>{step}</span>
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
                  Request Similar Service
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
