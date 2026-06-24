import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Trophy, CheckCircle, Lightbulb, FileText, Layout, Check, ToggleLeft } from 'lucide-react';

interface CareerCoachBlueprintProps {
  onHeadlineChange: (newHeadline: string) => void;
  activeHeadline: string;
}

export default function CareerCoachBlueprint({ onHeadlineChange, activeHeadline }: CareerCoachBlueprintProps) {
  const [activeTab, setActiveTab] = useState<'headlines' | 'competencies' | 'par' | 'tips'>('headlines');

  const headlines = [
    {
      id: 'h1',
      title: 'Systems & Bookkeeping Precision',
      text: 'Certified Bookkeeper and Virtual Assistant specializing in ledger integrity, multi-account reconciliation, and operational systems administration.',
      why: 'Highlights specific core services (ledger integrity, reconciliation, administration) and technical credentials right away, building instant authority for an aspiring bookkeeping VA.'
    },
    {
      id: 'h2',
      title: 'Analytical & Administrative Support',
      text: 'Detail-focused administrative specialist with comprehensive training in QuickBooks Online, transactional audit-readiness, and inbox/calendar synchronization.',
      why: 'Demonstrates deep readiness for multi-tasking and bookkeeping compliance, calling out industry-standard systems and day-to-day administrative excellence.'
    },
    {
      id: 'h3',
      title: 'Business Infrastructure & Scaling',
      text: 'Providing high-potential administrative coordination and clear financial reporting structure to help growing service-based agencies and small businesses scale.',
      why: 'Addresses the client\'s primary desire (scaling and peace of mind) by framing administrative and financial coordination as growth-enabling infrastructure.'
    }
  ];

  const parFramework = [
    {
      stage: 'P',
      name: 'Problem',
      focus: 'Define the Friction Point',
      description: 'Start by describing the messy reality of the ledger, backlog, or process bottleneck. Use concrete metrics like "14-Month backlog" or "$180k+ in unclassified expenses" to anchor the gravity of the challenge.'
    },
    {
      stage: 'A',
      name: 'Action',
      focus: 'Methodology & Exact Steps',
      description: 'Explain the technical steps, checklists, and software tools utilized to clean, organize, and resolve the backlog. Focus on precision, secure handling, and verification protocols (e.g. QuickBooks, Excel reconciliation models).'
    },
    {
      stage: 'R',
      name: 'Result',
      focus: 'Immaculate Outcome & Metrics',
      description: 'Present the positive, error-free outcome with clear contrast to the starting point. Detail how accuracy was restored, payments accelerated, or hours saved, leaving the books audit-ready and professional.'
    }
  ];

  return (
    <section id="coach-blueprint" className="py-24 bg-[#0a0715]/40 border-t border-[#171f33] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ddb7ff]/3 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        {/* Eyebrow */}
        <div className="flex justify-center mb-5">
          <span className="text-[10px] uppercase font-black tracking-[0.25em] px-3.5 py-1.5 rounded-full border border-[#ddb7ff]/20 text-[#ddb7ff] bg-[#ddb7ff]/5">
            Senior Career Strategy
          </span>
        </div>

        {/* Header Block */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#dae2fd] mb-4">
            Strategic Portfolio Blueprint
          </h2>
          <p className="text-sm md:text-base text-[#cfc2d6]/80 leading-relaxed">
            Curated by a senior portfolio designer and career coach. Discover the high-potential framework used to structure Pauline Lucena's portfolio for absolute bookkeeping and administrative authority.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'headlines', label: '1. Minimalist Headlines', icon: Sparkles },
            { id: 'competencies', label: '2. Core Competencies', icon: Trophy },
            { id: 'par', label: '3. PAR Showcase Framework', icon: FileText },
            { id: 'tips', label: '4. Presentation & Tone', icon: Layout }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#ddb7ff] text-[#490080] shadow-[0_4px_15px_rgba(221,183,255,0.25)]'
                    : 'bg-[#131b2e]/60 border border-[#4d4354]/40 text-[#cfc2d6] hover:border-[#ddb7ff]/35'
                }`}
              >
                <Icon size={14} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Interactive Workspace Container */}
        <div className="glass-card rounded-2xl border border-[#4d4354]/60 bg-[#131b2e]/30 p-6 md:p-10 min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'headlines' && (
              <motion.div
                key="headlines"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                    Confident, Minimalist Headlines
                  </h3>
                  <p className="text-xs md:text-sm text-[#cfc2d6]/80 leading-relaxed">
                    Designed to communicate absolute competence, structured learning, and readiness. We replace cliché, desperate phrases like <em>"seeking any opportunity"</em> with objective capability. Click <strong>Apply to Hero</strong> to see each statement update in the portfolio headline instantly!
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {headlines.map((headline) => {
                    const isActive = activeHeadline === headline.text;
                    return (
                      <div
                        key={headline.id}
                        className={`p-6 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                          isActive
                            ? 'bg-[#ddb7ff]/5 border-[#ddb7ff] shadow-[0_0_20px_rgba(221,183,255,0.1)]'
                            : 'bg-[#0d1527] border-[#4d4354]/30'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-[10px] font-black uppercase tracking-wider text-[#ddb7ff] bg-[#ddb7ff]/10 px-2.5 py-1 rounded">
                              {headline.title}
                            </span>
                            {isActive && (
                              <span className="text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1">
                                <Check size={10} className="stroke-[3]" /> Active Hero
                              </span>
                            )}
                          </div>
                          <p className="text-sm font-semibold text-[#dae2fd] mb-4 leading-relaxed">
                            "{headline.text}"
                          </p>
                          <div className="p-3 bg-[#131b2e]/60 rounded-lg border border-[#4d4354]/20 text-[11px] text-[#cfc2d6]/80 leading-relaxed mb-6">
                            <span className="font-bold text-[#ddb7ff] uppercase block mb-1">Coach Strategy:</span>
                            {headline.why}
                          </div>
                        </div>

                        <button
                          onClick={() => onHeadlineChange(headline.text)}
                          className={`w-full py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                            isActive
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                              : 'bg-[#ddb7ff] text-[#490080] hover:brightness-110'
                          }`}
                        >
                          <ToggleLeft size={14} />
                          {isActive ? 'Currently Active' : 'Apply to Hero'}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {activeTab === 'competencies' && (
              <motion.div
                key="competencies"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                    Core Competencies & Stack Structure
                  </h3>
                  <p className="text-xs md:text-sm text-[#cfc2d6]/80 leading-relaxed">
                    A junior portfolio is strongest when skills are classified into clear, distinct domains. This structures the recruiter\'s scanning journey, making your training look intentional and focused.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 rounded-xl border border-[#4d4354]/40 bg-[#0d1527] space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 text-xs font-bold uppercase tracking-wider">
                      TECH
                    </div>
                    <h4 className="text-base font-bold text-[#dae2fd]">Technical & Ledger</h4>
                    <p className="text-xs text-[#cfc2d6]/70 leading-relaxed">
                      Lists direct, measurable operations such as Bank Reconciliation, accounts receivable tracking, expense categorization, and invoicing. Highlights your practical training outcomes.
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#cfc2d6]/95">
                      <li className="flex items-center gap-2"><Check size={12} className="text-[#ddb7ff]" /> QuickBooks Ledger Entries</li>
                      <li className="flex items-center gap-2"><Check size={12} className="text-[#ddb7ff]" /> Receipt Auditing Models</li>
                      <li className="flex items-center gap-2"><Check size={12} className="text-[#ddb7ff]" /> AR Aging Reports</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl border border-[#4d4354]/40 bg-[#0d1527] space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-[#ddb7ff]/10 flex items-center justify-center text-[#ddb7ff] border border-[#ddb7ff]/20 text-xs font-bold uppercase tracking-wider">
                      SYS
                    </div>
                    <h4 className="text-base font-bold text-[#dae2fd]">Systems & Software</h4>
                    <p className="text-xs text-[#cfc2d6]/70 leading-relaxed">
                      Avoids vague mentions of "computer skills". Calls out specific platforms like QuickBooks Online, Microsoft Excel formulas, NetSuite readiness templates, and Close Management (Floqast).
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#cfc2d6]/95">
                      <li className="flex items-center gap-2"><Check size={12} className="text-[#ddb7ff]" /> QuickBooks ProAdvisor</li>
                      <li className="flex items-center gap-2"><Check size={12} className="text-[#ddb7ff]" /> Advanced Excel & Sheets</li>
                      <li className="flex items-center gap-2"><Check size={12} className="text-[#ddb7ff]" /> ERP/NetSuite Integration</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl border border-[#4d4354]/40 bg-[#0d1527] space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">
                      CERT
                    </div>
                    <h4 className="text-base font-bold text-[#dae2fd]">Verified Certifications</h4>
                    <p className="text-xs text-[#cfc2d6]/70 leading-relaxed">
                      Laying out certifications professionally bridges the lack of corporate years. Placing these in a "Credentials Vault" validates your claims under robust training models.
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#cfc2d6]/95">
                      <li className="flex items-center gap-2"><Check size={12} className="text-[#ddb7ff]" /> Intuit ProAdvisor Certified</li>
                      <li className="flex items-center gap-2"><Check size={12} className="text-[#ddb7ff]" /> DICT & GOPHILIPPINES</li>
                      <li className="flex items-center gap-2"><Check size={12} className="text-[#ddb7ff]" /> TESDA Bookkeeping NC III</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'par' && (
              <motion.div
                key="par"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                    Project Showcase: The PAR Structure
                  </h3>
                  <p className="text-xs md:text-sm text-[#cfc2d6]/80 leading-relaxed">
                    Recruiters value clear methodology over scale. The Problem-Action-Result structure details exactly how you identify, handle, and resolve business problems, creating massive trust in your capabilities.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                  {parFramework.map((stage, idx) => (
                    <div key={stage.stage} className="p-6 rounded-xl border border-[#4d4354]/40 bg-[#0d1527] relative overflow-hidden flex flex-col justify-between">
                      <div>
                        <div className="text-3xl font-black text-[#ddb7ff] mb-2">{stage.stage}</div>
                        <div className="text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-4">
                          STAGE {idx + 1} // {stage.name}
                        </div>
                        <h4 className="text-base font-bold text-[#dae2fd] mb-2">{stage.focus}</h4>
                        <p className="text-xs text-[#cfc2d6]/80 leading-relaxed">{stage.description}</p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-[#4d4354]/20 flex items-center gap-2 text-[10px] font-mono text-emerald-400">
                        <CheckCircle size={12} /> Active in Case Outcomes
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'tips' && (
              <motion.div
                key="tips"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                    Professional Presentation Tips
                  </h3>
                  <p className="text-xs md:text-sm text-[#cfc2d6]/80 leading-relaxed">
                    Achieving absolute premium feel through objective copywriting, visual balance, and clean typography layouts.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-6 rounded-xl border border-[#4d4354]/40 bg-[#0d1527] space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#ddb7ff] uppercase tracking-wider">
                      <Lightbulb size={16} /> Objective & Active Copywriting
                    </div>
                    <p className="text-xs text-[#cfc2d6]/80 leading-relaxed">
                      Avoid expressing personal desires or describing yourself as a "seeking, passionate learner". Instead, frame yourself as a <strong>resource</strong>. Use active verbs (e.g. <em>Reconciled, Categorized, Mapped, Cleared</em>) to highlight your results. Let the work and training prove your dedication.
                    </p>
                    <blockquote className="border-l-2 border-[#ddb7ff] pl-3 py-1 italic text-[11px] text-[#cfc2d6]/60">
                      "Instead of 'Seeking entry bookkeeping role to learn', use 'Certified QuickBooks specialist restoring operational clarity for growing agencies.'"
                    </blockquote>
                  </div>

                  <div className="p-6 rounded-xl border border-[#4d4354]/40 bg-[#0d1527] space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#ddb7ff] uppercase tracking-wider">
                      <Layout size={16} /> visual Hierarchy & Design Cohesion
                    </div>
                    <p className="text-xs text-[#cfc2d6]/80 leading-relaxed">
                      Premium layout stems from generous negative space and tight typography pairings. Keep backgrounds dark, use high-contrast text accents to direct the recruiter\'s eyes, and use consistent spacing. Centering cards on mobile ensures an immaculate, responsive presentation.
                    </p>
                    <ul className="space-y-1.5 text-[11px] text-gray-400">
                      <li className="flex items-center gap-1.5"><Check size={11} className="text-[#ddb7ff]" /> Dark Theme with high-contrast highlights</li>
                      <li className="flex items-center gap-1.5"><Check size={11} className="text-[#ddb7ff]" /> Inter & JetBrains Mono pairing</li>
                      <li className="flex items-center gap-1.5"><Check size={11} className="text-[#ddb7ff]" /> Symmetrical card grids with centered styling</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
