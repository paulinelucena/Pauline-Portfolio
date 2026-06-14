import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, ShieldCheck, FileSpreadsheet, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden px-6 md:px-12 max-w-7xl mx-auto min-h-[calc(100vh-5rem)] py-12"
    >
      {/* Decorative Glow Elements */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-[#ddb7ff]/15 rounded-full blur-[120px] md:blur-[160px] pointer-events-none" />
      <div className="absolute left-1/4 -top-10 w-[260px] h-[260px] bg-[#842bd2]/15 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center w-full">
        {/* LEFT — Copy */}
        <div className="w-full">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#ddb7ff] mb-5 px-3 py-1.5 rounded-full border border-[#ddb7ff]/20 bg-[#ddb7ff]/5"
          >
            <Sparkles size={12} />
            Executive Accounting Support
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[44px] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-gradient leading-[1.05] mb-6"
          >
            Your Books.
            <br />
            In Good Hands.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#cfc2d6] text-base md:text-lg leading-relaxed max-w-xl mb-10"
          >
            With a rigorous background in corporate accounting and executive administration, I bring precision, transparency, and high-level strategy to your financial operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 sm:gap-5"
          >
            <a
              href="#services"
              id="see-services-hero-btn"
              className="bg-[#ddb7ff] text-[#490080] px-8 py-4 rounded-xl font-bold text-sm md:text-base hover:brightness-110 hover:-translate-y-0.5 transition-all flex items-center gap-2 shadow-[0_4px_24px_rgba(221,183,255,0.25)] group"
            >
              See My Services
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              id="lets-talk-hero-btn"
              className="border border-[#4d4354] hover:border-[#ddb7ff] text-[#dae2fd] px-8 py-4 rounded-xl font-bold text-sm md:text-base hover:bg-[#171f33]/40 hover:-translate-y-0.5 transition-all"
            >
              Let's Talk
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-[#7a6f86]"
          >
            <span>QuickBooks Certified</span>
            <span className="h-1 w-1 rounded-full bg-[#4d4354]" />
            <span>Xero Advisor</span>
            <span className="h-1 w-1 rounded-full bg-[#4d4354]" />
            <span>10+ Years Exp.</span>
          </motion.div>
        </div>

        {/* RIGHT — Visual: floating dashboard card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          className="relative block mb-6 lg:mb-0"
        >
          {/* Glow behind card */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#ddb7ff]/20 via-[#842bd2]/10 to-transparent rounded-3xl blur-2xl scale-110" />

          {/* Main card */}
          <div className="relative rounded-3xl border border-[#4d4354]/60 bg-gradient-to-br from-[#171f33]/80 to-[#0e0a1f]/90 backdrop-blur-xl p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(132,43,210,0.4)]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#7a6f86] mb-1.5">Monthly Overview</p>
                <p className="text-[#dae2fd] font-semibold text-lg">Cash Flow Summary</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-400/20">
                <TrendingUp size={13} />
                +24.8%
              </div>
            </div>

            {/* Big metric */}
            <div className="mb-8">
              <p className="text-4xl md:text-5xl font-extrabold text-gradient tracking-tight">$184,250</p>
              <p className="text-sm text-[#7a6f86] mt-2">Net revenue · Q3</p>
            </div>

            {/* Mini bar chart */}
            <div className="flex items-end gap-2 h-28 md:h-36 mb-8">
              {[40, 65, 50, 80, 55, 90, 70, 95, 60, 100, 75, 85].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.6, delay: 0.7 + i * 0.04 }}
                  className="flex-1 rounded-t bg-gradient-to-t from-[#842bd2]/40 to-[#ddb7ff] opacity-90"
                />
              ))}
            </div>

            {/* Row items */}
            <div className="space-y-4">
              {[
                { icon: FileSpreadsheet, label: 'Reconciliation', value: 'Complete' },
                { icon: ShieldCheck, label: 'Audit-ready', value: 'Verified' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center justify-between text-base py-3.5 px-4 rounded-xl bg-[#0e0a1f]/60 border border-[#4d4354]/40">
                  <div className="flex items-center gap-3 text-[#cfc2d6]">
                    <Icon size={17} className="text-[#ddb7ff]" />
                    {label}
                  </div>
                  <span className="text-sm font-semibold text-emerald-300">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute -bottom-5 left-2 md:-bottom-7 md:-left-8 rounded-2xl border border-[#ddb7ff]/30 bg-[#171f33]/90 backdrop-blur-lg px-4 py-3 md:px-5 md:py-4 shadow-xl flex items-center gap-4"
          >
            <div className="h-11 w-11 rounded-full bg-[#ddb7ff]/15 grid place-items-center">
              <ShieldCheck size={20} className="text-[#ddb7ff]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#7a6f86]">Books closed</p>
              <p className="text-base font-semibold text-[#dae2fd]">On time, every month</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
