import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center overflow-hidden px-6 md:px-12 max-w-7xl mx-auto py-16"
    >
      {/* Decorative Glow Elements */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-[#ddb7ff]/10 rounded-full blur-[100px] md:blur-[140px] pointer-events-none" />
      <div className="absolute left-1/4 -top-10 w-[200px] h-[200px] bg-[#842bd2]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ddb7ff] mb-4"
        >
          Executive Accounting Support
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[44px] sm:text-Display md:text-6xl font-extrabold uppercase tracking-tight text-gradient leading-[1.1] mb-6"
        >
          Your Books.
          <br />
          In Good Hands.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[#cfc2d6] text-base md:text-lg leading-relaxed max-w-xl mb-10 font-normal"
        >
          With a rigorous background in corporate accounting and executive administration, I bring precision, transparency, and high-level strategy to your financial operations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap gap-4 sm:gap-6"
        >
          <a
            href="#services"
            id="see-services-hero-btn"
            className="bg-[#ddb7ff] text-[#490080] px-8 py-4 rounded-xl font-bold text-sm md:text-base hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all flex items-center gap-2 shadow-[0_4px_24px_rgba(221,183,255,0.25)] group"
          >
            See My Services
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            id="lets-talk-hero-btn"
            className="border border-[#4d4354] hover:border-[#ddb7ff] text-[#dae2fd] px-8 py-4 rounded-xl font-bold text-sm md:text-base hover:bg-[#171f33]/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all"
          >
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
}
