import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Eye, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface Certificate {
  id: string;
  name: string;
  category: string;
  src: string;
  alt: string;
}

const CERTIFICATES_DATA: Certificate[] = [
  { id: '01', name: 'Certificate 1', category: 'Achievement & Recognition', src: 'Ecert 1.png', alt: 'Certificate 1' },
  { id: '02', name: 'Certificate 2', category: 'Achievement & Recognition', src: 'Ecert 2.png', alt: 'Certificate 2' },
  { id: '03', name: 'Certificate 3', category: 'Achievement & Recognition', src: 'Ecert 3.png', alt: 'Certificate 3' },
  { id: '04', name: 'Certificate 4', category: 'Achievement & Recognition', src: 'Ecert 4.png', alt: 'Certificate 4' },
  { id: '05', name: 'Certificate 5', category: 'Achievement & Recognition', src: 'Ecert 5.png', alt: 'Certificate 5' },
  { id: '06', name: 'Certificate 6', category: 'Achievement & Recognition', src: 'Ecert 6.jpg', alt: 'Certificate 6' },
  { id: '07', name: 'Certificate 7', category: 'Achievement & Recognition', src: 'Ecert 7.png', alt: 'Certificate 7' },
  { id: '08', name: 'Certificate 8', category: 'Achievement & Recognition', src: 'Ecert 8.png', alt: 'Certificate 8' },
  { id: '09', name: 'Certificate 9', category: 'Achievement & Recognition', src: 'Ecert 9.JPG', alt: 'Certificate 9' },
];

export default function Certificates() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setActiveIdx(index);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseLightbox = () => {
    setActiveIdx(null);
    document.body.style.overflow = '';
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx((prev) => (prev === null ? null : (prev - 1 + CERTIFICATES_DATA.length) % CERTIFICATES_DATA.length));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx((prev) => (prev === null ? null : (prev + 1) % CERTIFICATES_DATA.length));
    }
  };

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      {/* Absolute ambient lights */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#ddb7ff]/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-[#842bd2]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-bold text-[#ddb7ff] uppercase tracking-[4px] mb-3">
            <Award size={14} />
            <span>Certifying Excellence</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-gradient uppercase tracking-tight mb-4">
            Certificates & <br />Some Achievements
          </h2>
          
          <p className="text-[#cfc2d6] text-sm md:text-base max-w-xl leading-relaxed">
            A verified record of professional qualifications and milestones earned through rigorous continuous learning. Click on any credential to view in high detail.
          </p>
        </div>

        {/* Section Divider */}
        <div className="flex items-center gap-6 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-[#4d4354] to-transparent" />
          <span className="text-[10px] tracking-[4px] uppercase font-bold text-[#cfc2d6]/40 whitespace-nowrap">
            Verified Record
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-[#4d4354] to-transparent" />
        </div>

        {/* Grid and interactive cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES_DATA.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onClick={() => handleOpenLightbox(index)}
              className="group rounded-xl border border-[#4d4354] bg-[#0b1326]/60 overflow-hidden hover:bg-[#131b2e] hover:border-[#ddb7ff]/40 hover:shadow-[0_20px_40px_-15px_rgba(221,183,255,0.15)] transition-all duration-300 cursor-pointer relative"
            >
              {/* Top Accent Strip */}
              <div className="h-[3px] bg-gradient-to-r from-[#ddb7ff] to-[#842bd2] w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Number Badge overlay */}
              <div className="absolute top-4 left-4 z-20 px-2.5 py-1 text-[10px] font-mono font-bold text-[#ddb7ff] bg-[#171f33]/80 rounded border border-[#4d4354] backdrop-blur-sm">
                {cert.id}
              </div>

              {/* Thumbnail Container */}
              <div className="relative aspect-[4/3] bg-black/40 overflow-hidden">
                <img
                  src={cert.src}
                  alt={cert.alt}
                  onError={(e) => {
                    // Fallback visual indicator in case of local server missing asset issues
                    e.currentTarget.style.display = 'none';
                    const sib = e.currentTarget.nextElementSibling as HTMLElement;
                    if (sib) sib.style.opacity = '1';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 saturate-85 group-hover:brightness-100 group-hover:saturate-100"
                />

                {/* Simulated Beautiful Document Icon Placeholder for missing file error prevention */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#070d18] text-[#cfc2d6]/30 hidden p-6 text-center border-b border-[#4d4354]">
                  <Award size={48} className="text-[#ddb7ff]/20 mb-2" />
                  <span className="text-xs font-semibold uppercase tracking-wider">{cert.name}</span>
                  <span className="text-[10px] mt-1 text-[#cfc2d6]/40">{cert.category}</span>
                </div>

                {/* View Overlay */}
                <div className="absolute inset-0 bg-[#070d18]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="px-4 py-2 border border-[#ddb7ff]/40 bg-[#ddb7ff]/10 rounded font-bold text-xs text-[#ddb7ff] uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_15px_rgba(221,183,255,0.15)] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye size={14} />
                    View Credential
                  </div>
                </div>
              </div>

              {/* Content Description Footer */}
              <div className="p-5 flex items-center justify-between border-t border-[#4d4354]/40">
                <div>
                  <h3 className="text-[#dae2fd] text-sm font-bold uppercase tracking-wide group-hover:text-[#ddb7ff] transition-colors duration-200">
                    {cert.name}
                  </h3>
                  <span className="text-[10px] text-[#cfc2d6]/50 uppercase tracking-wider block mt-1">
                    {cert.category}
                  </span>
                </div>

                <div className="w-8 h-8 rounded border border-[#4d4354] group-hover:border-[#ddb7ff]/40 flex items-center justify-center text-[#cfc2d6]/40 group-hover:text-[#ddb7ff] bg-transparent group-hover:bg-[#ddb7ff]/5 transition-all">
                  <Sparkles size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Portal component */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleCloseLightbox}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={handleCloseLightbox}
              className="absolute top-6 right-6 w-10 h-10 border border-[#4d4354] hover:border-red-400 bg-[#171f33]/60 hover:bg-red-400/10 text-[#cfc2d6] hover:text-red-400 rounded-lg flex items-center justify-center transition-all cursor-pointer select-none active:scale-95"
            >
              <X size={20} />
            </button>

            {/* Main Lightbox Content Container */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full flex flex-col items-center gap-6"
            >
              {/* Sliding Container */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="w-full bg-[#0b1326] border border-[#4d4354]/80 p-2 sm:p-3 rounded-2xl shadow-[0_30px_60px_-10px_rgba(0,0,0,0.8),0_0_50px_rgba(221,183,255,0.1)] relative"
              >
                <img
                  src={CERTIFICATES_DATA[activeIdx].src}
                  alt={CERTIFICATES_DATA[activeIdx].alt}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const sib = e.currentTarget.nextElementSibling as HTMLElement;
                    if (sib) sib.style.opacity = '1';
                  }}
                  className="max-h-[72vh] w-full object-contain mx-auto rounded-lg"
                />

                {/* Simulated Document Preview Fallback */}
                <div className="aspect-[4/3] max-h-[72vh] w-full bg-[#070d18] text-[#cfc2d6]/50 hidden flex-col items-center justify-center rounded-lg p-12 text-center">
                  <Award size={80} className="text-[#ddb7ff] opacity-40 mb-4 animate-pulse" />
                  <h4 className="text-lg font-bold text-[#dae2fd] uppercase tracking-wider mb-2">
                    {CERTIFICATES_DATA[activeIdx].name}
                  </h4>
                  <p className="text-sm font-mono text-[#cfc2d6]/60 uppercase tracking-widest">
                    {CERTIFICATES_DATA[activeIdx].category}
                  </p>
                  <p className="text-xs text-[#cfc2d6]/40 mt-8 max-w-sm">
                    Verified Credential No. {CERTIFICATES_DATA[activeIdx].id} - Interactive verification layer fully enabled.
                  </p>
                </div>
              </motion.div>

              {/* Navigation and Details Panel */}
              <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-xl gap-4 bg-[#171f33]/60 px-6 py-4 rounded-xl border border-[#4d4354] backdrop-blur-md">
                <div className="text-center sm:text-left">
                  <span className="text-[9px] font-mono uppercase bg-[#ddb7ff]/10 text-[#ddb7ff] px-2 py-0.5 rounded border border-[#ddb7ff]/20">
                    Credential {CERTIFICATES_DATA[activeIdx].id}
                  </span>
                  <p className="text-sm font-bold text-[#dae2fd] uppercase tracking-wide mt-1.5">
                    {CERTIFICATES_DATA[activeIdx].name}
                  </p>
                </div>

                {/* Lightbox control buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 border border-[#4d4354] hover:border-[#ddb7ff]/85 bg-[#0b1326] text-[#cfc2d6] hover:text-[#ddb7ff] hover:shadow-[0_0_15px_rgba(221,183,255,0.15)] rounded-lg flex items-center justify-center transition-all cursor-pointer active:scale-95"
                    aria-label="Previous Certificate"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <span className="text-xs font-semibold font-mono text-[#cfc2d6]/60 min-w-[50px] text-center">
                    {activeIdx + 1} / {CERTIFICATES_DATA.length}
                  </span>

                  <button
                    onClick={handleNext}
                    className="w-10 h-10 border border-[#4d4354] hover:border-[#ddb7ff]/85 bg-[#0b1326] text-[#cfc2d6] hover:text-[#ddb7ff] hover:shadow-[0_0_15px_rgba(221,183,255,0.15)] rounded-lg flex items-center justify-center transition-all cursor-pointer active:scale-95"
                    aria-label="Next Certificate"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
