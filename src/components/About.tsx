import { useState } from 'react';
import { motion } from 'motion/react';
import { BadgeCheck, Sparkles, Award } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

export default function About() {
  const [isColored, setIsColored] = useState(false);

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Side: Photo & Highlight Badge */}
        <div className="relative group flex justify-center">
          {/* Glowing underlying circle */}
          <div className="absolute inset-x-0 top-10 bottom-10 bg-[#ddb7ff]/20 rounded-full blur-3xl group-hover:bg-[#ddb7ff]/25 transition-colors duration-700 pointer-events-none" />

          {/* Picture frame */}
          <div className="relative w-full max-w-[420px] aspect-[0.73] overflow-hidden rounded-2xl border border-[#4d4354] p-2 bg-[#131b2e]/70 backdrop-blur-sm shadow-2xl">
            <img
              alt="Pauline Lucena Professional Headshot"
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover rounded-xl transition-all duration-700 select-none ${
                isColored ? 'grayscale-0 scale-102' : 'grayscale group-hover:grayscale-0'
              }`}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhjlvFdl4pIEh4Vimhyv0sd3rCVA1JX2b4KH0L8FOLw9QTJoNF_kFqWXIN-ohEvKLOqsl_HykR3nRbOiGJMNPl0QI8x-RTf30AJgYJNDUIg14YgOvUFNX3Ex_zvEc0j_B37BeJ2HK0YI2t3wls2XBzjFJK4GCUv0EUN1tOBmV9pnXuVaP44nChYF1eChATr03cKa_c1p5F7NSjjK6ZDXlZ5Bjjl5Z6_oOvIJa1zHRbsRcwDO1FPvU8OO5CLj1RKQsnHY24VG0HU5M2"
            />

            {/* Quick Filter control on image */}
            <button
              onClick={() => setIsColored(!isColored)}
              id="image-color-toggle-btn"
              className="absolute top-6 right-6 px-3 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-wider glass-card border border-[#4d4354] text-[#ddb7ff] hover:text-[#fff] hover:border-[#ddb7ff] transition-all flex items-center gap-1.5 cursor-pointer backdrop-blur-md active:scale-95"
            >
              <Sparkles size={11} />
              {isColored ? 'Classic Grayscale' : 'Full Color'}
            </button>
          </div>

          {/* Floating Experience Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.03, boxShadow: "0 15px 30px -5px rgba(221,183,255,0.15)" }}
            className="absolute -bottom-6 right-2 sm:right-6 md:right-10 glass-card border border-[#4d4354]/80 p-5 rounded-2xl shadow-xl hover:border-[#ddb7ff]/50 transition-all cursor-default"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#ddb7ff]/10 rounded-lg text-[#ddb7ff]">
                <Award size={20} />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-[#ddb7ff] leading-none">
                  <AnimatedCounter value={3} suffix="+" /> Years
                </p>
                <p className="text-[10px] uppercase font-semibold tracking-wider text-[#cfc2d6] mt-1">
                  Corporate Expertise
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Copywriting & Stats */}
        <div>
          <h2 className="text-3xl md:text-4.5xl font-extrabold uppercase tracking-tight leading-tight mb-6 text-[#dae2fd]">
            Detail-Driven.
            <br />
            <span className="text-gradient">Deadline-Focused.</span>
          </h2>

          <p className="text-[#cfc2d6] text-base md:text-lg leading-relaxed mb-8 font-normal">
            I specialize in bridging the gap between complex financial data and actionable business insights. My career is built on the foundation of 100% accuracy and the relentless pursuit of organizational excellence.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 mb-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
              className="relative pl-5 group cursor-default"
            >
              {/* Animated vertical bar */}
              <motion.div 
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#ddb7ff] origin-top"
              />
              <span className="text-3xl font-extrabold block text-[#dae2fd] tracking-tight group-hover:text-[#ddb7ff] transition-colors">
                <AnimatedCounter value={100} suffix="%" />
              </span>
              <span className="text-[11px] font-semibold text-[#cfc2d6] uppercase tracking-wider block mt-1">
                Accuracy Rate
              </span>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
              className="relative pl-5 group cursor-default"
            >
              {/* Animated vertical bar */}
              <motion.div 
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#ddb7ff] origin-top"
              />
              <span className="text-3xl font-extrabold block text-[#dae2fd] tracking-tight group-hover:text-[#ddb7ff] transition-colors">
                <AnimatedCounter value={8} suffix="+" />
              </span>
              <span className="text-[11px] font-semibold text-[#cfc2d6] uppercase tracking-wider block mt-1">
                ERP/Tools Mastered
              </span>
            </motion.div>
          </div>

          {/* Beautiful Blockquote */}
          <blockquote className="italic border-l-4 border-[#4d4354] pl-6 py-2.5 text-[#cfc2d6]/80 text-sm md:text-base leading-relaxed bg-[#131b2e]/35 rounded-r-lg">
            "Precision isn't just about the numbers; it's about the peace of mind that comes from knowing every decimal is in its place."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
