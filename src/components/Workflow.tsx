import { motion } from 'motion/react';
import { Calendar, ArrowRight, Shield, CheckCircle2 } from 'lucide-react';

interface WorkflowStep {
  num: string;
  title: string;
  description: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    num: '01',
    title: 'Discovery Session',
    description: 'We map your existing daily admin workflows, highlight spreadsheet friction, and isolate financial/reconciliation task lists. We find the high-impact bottlenecks we can solve immediately.'
  },
  {
    num: '02',
    title: 'Operational Diagnostic',
    description: 'I outline a custom task assignment, defining accurate communication cadence, system login requirements, delivery timelines, and monthly allocated hours so you have complete visibility.'
  },
  {
    num: '03',
    title: 'Secure System Onboarding',
    description: 'We configure encrypted system delegations and sandbox environment linkages. Utilizing strict protocols, we maintain absolute file confidentiality and protect client ledger security.'
  },
  {
    num: '04',
    title: 'Seamless Execution',
    description: 'I assume absolute daily ownership of matching statements, generating billing packets, chasing open payments, and executing administrative items so you stay completely clear.'
  },
  {
    num: '05',
    title: 'Continuous Optimization',
    description: 'We review progress periodically to introduce speed improvements, create automated dashboard alerts, compile operating manuals, and save you more structural hours week-on-week.'
  }
];

export default function Workflow() {
  return (
    <section id="process" className="py-24 bg-[#080516] border-t border-[#171f33] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ddb7ff]/3 rounded-full filter blur-[150px] pointer-events-none" />
      
      <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        {/* Header Block */}
        <div className="mb-16 text-left max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#dae2fd] mb-4"
          >
            A Simple, Reliable Process.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm md:text-base text-[#cfc2d6]/80 leading-relaxed max-w-2xl"
          >
            Taking the pain out of managing operations through asynchronous coordination, absolute transaction security, and clear checkpoints.
          </motion.p>
        </div>

        {/* Steps Horizontal/Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16 justify-center items-stretch">
          {workflowSteps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-[#4d4354]/40 hover:border-[#ddb7ff]/40 transition-all duration-300 flex flex-col justify-between group relative w-full h-full mx-auto max-w-md lg:max-w-none"
            >
              {/* Card top border glow line effect */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#ddb7ff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Step number label */}
                <div className="text-[10px] font-bold tracking-widest text-[#ddb7ff] mb-4 flex items-center gap-1.5 uppercase">
                  <span>{step.num}</span>
                  <span className="text-[#cfc2d6]/35">//</span>
                  <span className="text-[#cfc2d6]/70">Step</span>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-[#dae2fd] group-hover:text-white transition-colors mb-4">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-[#cfc2d6]/75 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic call to action button */}
        <div className="flex justify-center">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileActive={{ scale: 0.98 }}
            href="https://calendly.com/paulinelucena27/30min"
            target="_blank"
            rel="noreferrer"
            className="bg-[#ddb7ff] text-[#490080] hover:brightness-110 px-8 py-4 rounded-xl font-bold text-xs sm:text-sm tracking-widest uppercase flex items-center gap-2.5 shadow-[0_4px_24px_rgba(221,183,255,0.25)] cursor-pointer text-center inline-flex"
          >
            BOOK FREE DISCOVERY CALL
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
