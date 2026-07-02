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
    title: 'Month-End AP/AR Cleanup & Close',
    category: 'AP/AR Case Study',
    metric: '100% Reconciled',
    metricLabel: 'Zero Open Items at Close',
    problem: 'A month-end ledger had 14 unclassified transactions and 6 bills with no matching PO or receipt, leaving the close checklist at 40% complete two days before deadline.',
    action: 'Mapped every entry to the correct GL account, matched outstanding bills to POs and receipts, and cleared unapplied customer payments.',
    result: 'Closed with zero unclassified entries and zero unmatched bills, taking the close checklist from 12/30 to 30/30 tasks a full day early.',
    methodology: [
      'Mapped entries to a standardized chart of accounts',
      'Matched bills against POs, receipts, and vendor records',
      'Cleared unapplied payments and resolved overpayments'
    ]
  },
  {
    title: 'PTO Accrual Formula Audit & Correction',
    category: 'Payroll Case Study',
    metric: '0 Formula Errors',
    metricLabel: 'Corrected Balances, Full Team',
    problem: "A PTO tracker returned #REF! and #VALUE! errors, plus negative and overstated balances, for every employee whose salary period changed mid-cycle.",
    action: "Traced the error to a proration formula that didn't adjust for mid-period transitions, rebuilt the calculation logic, and cross-checked balances against policy.",
    result: 'Corrected balances for all 5 affected employees and verified accuracy across the full 22-person team, with an audit note logged for future changes.',
    methodology: [
      'Traced formula errors to a proration logic gap',
      'Rebuilt accrual formulas with mid-period proration',
      'Verified all balances against written PTO policy'
    ]
  },
  {
    title: 'Bank & Credit Card Reconciliation',
    category: 'Reconciliation Case Study',
    metric: '$0.00 Variance',
    metricLabel: 'Full Variance Resolution',
    problem: 'A $4,318.62 gap between the bank statement and book balance was blocking month-end close, with 5 transactions unrecorded, mismatched, or duplicated.',
    action: 'Traced each discrepancy to source documentation, recorded a missing wire and bank fee, corrected a mismatched CC settlement, and removed a duplicate entry.',
    result: 'Reconciled bank and book balances to the penny, closing the month with a $0.00 variance and a clean file ready for audit.',
    methodology: [
      'Traced every unmatched line to source documentation',
      'Corrected mismatched CC settlement postings',
      'Verified final tie-out to $0.00 variance'
    ]
  },
  {
    title: 'Client Credit File & Database Cleanup',
    category: 'Credit & Data Case Study',
    metric: '100% Synced',
    metricLabel: 'One Source of Truth',
    problem: 'Client credit records were split across the internal system, a G-Sheet database, and paper CAR forms, leaving 4 clients with incomplete trade reference checks and 7 approvals stalled.',
    action: 'Completed the outstanding trade reference calls, filed missing CAR forms, resolved a duplicate credit file, and reconciled every record between the system and database.',
    result: 'Brought system-to-database accuracy from 62% to 100% and cleared all pending approvals, giving credit staff one reliable source per client.',
    methodology: [
      'Completed all outstanding trade reference checks',
      'Reconciled records across system and G-Sheet database',
      'Resolved duplicate and incomplete CAR forms'
    ]
  },
  {
    title: 'Revenue & Gross Profit Dashboard',
    category: 'Reporting Case Study',
    metric: '+101% of Goal',
    metricLabel: 'Automated MTD/YTD Reporting',
    problem: 'Stakeholders received only a raw daily data export with no MTD/YTD rollup or goal comparison, requiring a manual scan of the numbers every week.',
    action: 'Built an automated MTD/YTD summary with goal-vs-actual tracking, trailing averages, and a daily trend chart on top of the existing raw feed.',
    result: 'Delivered a dashboard that closed December 1% ahead of the gross profit goal and cut weekly reporting prep to a 5-second read.',
    methodology: [
      'Built automated MTD/YTD rollup formulas',
      'Added goal-vs-actual and trailing average tracking',
      'Designed a stakeholder-ready daily trend view'
    ]
  },
  {
    title: 'Past-Due Collections & Follow-Up System',
    category: 'Collections Case Study',
    metric: '12 Accounts Cleared',
    metricLabel: 'Streamlined Weekly Collections',
    problem: 'Past-due accounts were tracked inconsistently across sales reps, with follow-up emails sent ad hoc and no unified view of overpayments or unapplied credits tied to open balances.',
    action: 'Built a standardized weekly collections report segmented by sales rep, established a consistent past-due follow-up email cadence, and cross-referenced unapplied payments against open balances.',
    result: 'Cleared 12 aging past-due accounts in the first cycle and gave every sales rep a reliable, accurate weekly view of their outstanding balances.',
    methodology: [
      'Segmented past-due report by sales rep, updated weekly',
      'Standardized the collections follow-up email cadence',
      'Cross-checked unapplied payments against open balances'
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
            Real-world accounting and finance support case studies structured with a rigorous Problem-Action-Result (PAR) methodology.
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
