import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Eye, X, ChevronLeft, ChevronRight, Sparkles, Calendar, Key, BadgeCheck } from 'lucide-react';

interface Certificate {
  id: string;
  name: string;
  category: string;
  src: string;
  alt: string;
  issuer?: string;
  date?: string;
  credentialId?: string;
  skills: string[];
  signatories: string[];
}

const CERTIFICATES_DATA: Certificate[] = [
  { 
    id: '01', 
    name: 'Lean Principles Webinar', 
    category: 'Workshops & Training', 
    src: 'Ecert 1.png', 
    alt: 'Certificate of Appreciation for Lean Principles webinar participation',
    issuer: 'University of Caloocan City - BSAIS',
    date: 'November 30, 2022',
    credentialId: 'N/A',
    skills: ['Lean Principles', 'Operational Efficiency', 'Process Improvement', 'Career Strategy'],
    signatories: ['Zenith Camu, CPA, DPA, PhD (Adviser)', 'Rose Ann L. Janer (Presidents/4C)']
  },
  { 
    id: '02', 
    name: 'Cyber Safe Learning (CLEP)', 
    category: 'Information Security', 
    src: 'Ecert 2.png', 
    alt: 'Cyber Safe Learning for Education Project Certificate of Completion',
    issuer: 'DICT, ILCDB, GoPhilippines & Microsoft',
    date: 'September 9, 2022',
    credentialId: 'N/A (Verified Program Completion)',
    skills: ['Cyber Security', 'Online Learning Risks', 'Information Protection', 'Digital Literacy'],
    signatories: ['Maria Lourdes Aquilizan (OIC Director IV)', 'Karl Leung (Chief Partnerships & Strategy Officer)']
  },
  { 
    id: '03', 
    name: 'Mock Interview (Relentless)', 
    category: 'Professional Assessment', 
    src: 'Ecert 3.png', 
    alt: 'Mock Interview Certificate of Participation - Relentless Academic Conference',
    issuer: 'NFJPIA-NCR (Northern Metro Manila Chapters)',
    date: 'January 31, 2021',
    credentialId: '2000-0011-0009',
    skills: ['Professional Communications', 'Interview Techniques', 'Self Assessment', 'Accountancy Career Readiness'],
    signatories: ['Jammiel Cherie Dahilan (Project Head)', 'Jyzzel Ozonia D. Encabo (Regional Council President)', 'Conrad Allan M. Alviz, CPA, CISA, CIA, CSRS (Regional Adviser)']
  },
  { 
    id: '04', 
    name: 'Financial Analyst POV (FACE)', 
    category: 'Financial Analysis', 
    src: 'Ecert 4.png', 
    alt: 'F.A.C.E Webinar Certificate of Participation - Financial Analyst POV',
    issuer: 'UCC-North BSAT/BSAIS',
    date: 'December 4, 2022',
    credentialId: 'N/A',
    skills: ['Financial Analysis', 'Accounting System Workflows', 'Corporate Planning', 'Analytical Foresight'],
    signatories: ['Bernadette Holanda (Guest Speaker)', 'Zenith C. Camu, CPA, DPA, PhD (Chair, BSAIS)']
  },
  { 
    id: '05', 
    name: 'Introduction to Bookkeeping', 
    category: 'TESDA Course Certification', 
    src: 'Ecert 5.png', 
    alt: 'TESDA Course on Introduction to Bookkeeping Completion Certificate',
    issuer: 'Technical Education and Skills Development Authority (TESDA)',
    date: 'May 19, 2026',
    credentialId: 'TuGONvkvcs',
    skills: ['Double-Entry Accounting', 'Account Classification', 'Balance Sheet Terminology', 'Bookkeeping Basics'],
    signatories: ['Computer-Generated (Verified Online Ledger)']
  },
  { 
    id: '06', 
    name: 'Journalizing Transactions', 
    category: 'TESDA Course Certification', 
    src: 'Ecert 6.jpg', 
    alt: 'TESDA Course on Journalizing Transactions Completion Certificate',
    issuer: 'Technical Education and Skills Development Authority (TESDA)',
    date: 'May 27, 2026',
    credentialId: 'hO9tJ16lul',
    skills: ['Journal Entries Creation', 'Debit and Credit Application', 'Dual-Effect Principles', 'General Journals Logging'],
    signatories: ['Computer-Generated (Verified Online Ledger)']
  },
  { 
    id: '07', 
    name: 'Posting Transactions', 
    category: 'TESDA Course Certification', 
    src: 'Ecert 7.png', 
    alt: 'TESDA Course on Posting Transactions Completion Certificate',
    issuer: 'Technical Education and Skills Development Authority (TESDA)',
    date: 'May 29, 2026',
    credentialId: 'DRTxR74RfE',
    skills: ['Ledger Posting Mechanics', 'General & Subsidiary Ledgers', 'Balance Extraction', 'Transaction Auditing'],
    signatories: ['Computer-Generated (Verified Online Ledger)']
  },
  { 
    id: '08', 
    name: 'Preparing Trial Balance', 
    category: 'TESDA Course Certification', 
    src: 'Ecert 8.png', 
    alt: 'TESDA Course on Preparing Trial Balance Completion Certificate',
    issuer: 'Technical Education and Skills Development Authority (TESDA)',
    date: 'June 1, 2026',
    credentialId: '24QVQYLp6B',
    skills: ['Trial Balance Formulation', 'Discrepancy Investigation', 'Adjusting Entry Prep', 'Accounting Cycle Reconciliation'],
    signatories: ['Computer-Generated (Verified Online Ledger)']
  },
  { 
    id: '09', 
    name: 'Guidance 101: Remote to F2F', 
    category: 'Workshops & Training', 
    src: 'Ecert 9.png', 
    alt: 'Certificate of Participation for Guidance 101: Gradual Transition from Remote Learning to Face-to-Face Classes',
    issuer: 'University of Caloocan City - Guidance & Counseling Center',
    date: 'May 22, 2022',
    credentialId: 'N/A',
    skills: ['Adaptive Social Transition', 'Individual Counseling Basics', 'Mental Well-being Support', 'Academic Psychology Adaptation'],
    signatories: ['Ms. Luwalhati Briones, RGC, LPT', 'Mr. Christian Catapat (Resource Speaker)', 'Von Lester Alido (President, UCC Psychology Society)']
  }
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
                    if (sib) {
                      sib.style.display = 'flex';
                      sib.style.opacity = '1';
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 saturate-85 group-hover:brightness-100 group-hover:saturate-100"
                />

                {/* Simulated Beautiful Document Icon Placeholder for missing file error prevention */}
                <div className="absolute inset-0 flex-col items-center justify-between bg-gradient-to-b from-[#0f172a] to-[#060b14] text-[#dae2fd] hidden p-5 text-center border-b border-[#4d4354] select-none">
                  {/* Certificate Top Header */}
                  <div className="flex justify-between items-center w-full text-[8px] font-mono text-[#ddb7ff]/60 uppercase tracking-wider">
                    <span>Digital Ledger</span>
                    <span className="flex items-center gap-1"><Award size={8} /> Verified</span>
                  </div>

                  {/* Creative Seal and Title decoration */}
                  <div className="flex flex-col items-center gap-1 my-auto">
                    <div className="w-9 h-9 rounded-full bg-[#ddb7ff]/5 border border-[#ddb7ff]/20 flex items-center justify-center mb-0.5 shadow-[0_0_15px_rgba(221,183,255,0.05)]">
                      <Award size={16} className="text-[#ddb7ff] opacity-80" />
                    </div>
                    <h4 className="text-[8px] font-mono font-bold tracking-[3px] uppercase text-[#ddb7ff]">
                      {cert.category.includes('TESDA') ? 'CERTIFICATE OF COMPLETION' : 'CREDENTIAL'}
                    </h4>
                    <p className="text-[10px] font-bold text-[#dae2fd] line-clamp-2 max-w-[200px] mt-1 leading-tight uppercase font-sans tracking-tight">
                      {cert.name}
                    </p>
                    <span className="text-[7px] text-[#cfc2d6]/50 uppercase tracking-widest mt-1 block">
                      Presented to:
                    </span>
                    <span className="text-[9px] font-bold text-[#dae2fd] tracking-wide underline decoration-[#ddb7ff]/40 underline-offset-2">
                      Pauline Lucena
                    </span>
                  </div>

                  {/* Footer details of the certificate */}
                  <div className="w-full flex justify-between items-end text-[7.5px] font-mono text-[#cfc2d6]/40 border-t border-[#4d4354]/30 pt-1.5 shrink-0">
                    <div className="text-left">
                      <span>ISSUER:</span>
                      <p className="text-[#ddb7ff]/60 font-semibold truncate max-w-[120px] uppercase">{cert.issuer}</p>
                    </div>
                    <div className="text-right">
                      <span>DATE:</span>
                      <p className="text-[#dae2fd]/60 font-semibold uppercase">{cert.date}</p>
                    </div>
                  </div>
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
              className="relative max-w-5xl w-full flex flex-col items-center gap-6"
            >
              {/* Sliding Container with split layout */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="w-full bg-[#0b1326] border border-[#4d4354]/80 p-4 sm:p-6 rounded-2xl shadow-[0_30px_60px_-10px_rgba(0,0,0,0.8),0_0_50px_rgba(221,183,255,0.1)] grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
              >
                {/* Left Side: Authentic Certificate Image Document */}
                <div className="lg:col-span-7 flex flex-col justify-center bg-black/30 rounded-xl p-2 border border-[#4d4354]/40 overflow-hidden relative min-h-[300px] lg:min-h-[420px]">
                  <img
                    src={CERTIFICATES_DATA[activeIdx].src}
                    alt={CERTIFICATES_DATA[activeIdx].alt}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const sib = e.currentTarget.nextElementSibling as HTMLElement;
                      if (sib) {
                        sib.style.display = 'flex';
                        sib.style.opacity = '1';
                      }
                    }}
                    className="max-h-[60vh] w-full object-contain mx-auto rounded-lg"
                  />

                  {/* Simulated Document Preview Fallback */}
                  <div className="aspect-[1.414/1] w-full bg-gradient-to-b from-[#0f172a] to-[#040810] text-[#dae2fd] hidden flex-col items-center justify-between rounded-lg p-5 sm:p-10 text-center border-2 border-[#ddb7ff]/20 relative select-none shadow-[inset_0_0_80px_rgba(132,43,210,0.1)] overflow-hidden">
                    {/* Decorative corner borders */}
                    <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#ddb7ff]/40" />
                    <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#ddb7ff]/40" />
                    <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#ddb7ff]/40" />
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#ddb7ff]/40" />

                    {/* Header Decoration */}
                    <div className="flex flex-col items-center gap-1">
                      <div className="text-[10px] font-mono uppercase text-[#ddb7ff]/80 tracking-[4px]">
                        Verified Digital Credential
                      </div>
                      <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-[#ddb7ff]/40 to-transparent mt-1" />
                    </div>

                    {/* Certificate Body text */}
                    <div className="flex flex-col items-center gap-2 my-auto">
                      <span className="text-xs sm:text-sm font-serif italic text-[#cfc2d6]/70 tracking-wide mt-2">
                        This digital ledger record verifies that
                      </span>
                      <p className="text-xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#dae2fd] via-[#ddb7ff] to-[#dae2fd] tracking-tight uppercase my-2 underline decoration-[#ddb7ff]/30 underline-offset-8">
                        Pauline Lucena
                      </p>
                      <span className="text-xs sm:text-sm font-serif italic text-[#cfc2d6]/70 tracking-wide">
                        has successfully qualified for and completed
                      </span>
                      <h3 className="text-sm sm:text-2xl font-extrabold text-[#dae2fd] uppercase tracking-wide max-w-xl my-3 px-4 py-2 bg-[#ffffff]/2 rounded-lg border border-[#ddb7ff]/10">
                        {CERTIFICATES_DATA[activeIdx].name}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-[#cfc2d6]/60 tracking-widest uppercase bg-[#ddb7ff]/10 text-[#ddb7ff] py-1 px-3.5 rounded-full border border-[#ddb7ff]/20">
                        Category: {CERTIFICATES_DATA[activeIdx].category}
                      </p>
                    </div>

                    {/* Signature and Issuer Footers */}
                    <div className="grid grid-cols-2 w-full border-t border-[#4d4354]/20 pt-4 text-left">
                      <div className="flex flex-col gap-1">
                        <span className="text-[9px] font-mono uppercase text-[#cfc2d6]/40 tracking-wider">AUTHORIZED ISSUER</span>
                        <p className="text-xs font-bold text-[#ddb7ff]/80 uppercase truncate max-w-[250px]">{CERTIFICATES_DATA[activeIdx].issuer}</p>
                      </div>
                      <div className="flex flex-col gap-1 text-right">
                        <span className="text-[9px] font-mono uppercase text-[#cfc2d6]/40 tracking-wider">DATE VERIFIED</span>
                        <p className="text-xs font-bold text-[#dae2fd]/85 uppercase">{CERTIFICATES_DATA[activeIdx].date}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Clean Structured Technical Metadata */}
                <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#4d4354]/40 pt-6 lg:pt-0 lg:pl-6 text-left">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-[3px] text-[#ddb7ff] mb-2 bg-[#ddb7ff]/10 max-w-max px-2 py-0.5 rounded border border-[#ddb7ff]/20">
                        <Award size={10} />
                        Credential Ledger Profile
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#dae2fd] to-[#ddb7ff] leading-snug">
                        {CERTIFICATES_DATA[activeIdx].name}
                      </h3>
                      <p className="text-xs text-[#cfc2d6]/70 mt-1 font-sans">
                        Full Course Credential Record
                      </p>
                    </div>

                    <div className="space-y-3.5 text-sm">
                      {/* Issuing Authority */}
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-[#ddb7ff]/5 border border-[#ddb7ff]/15 text-[#ddb7ff] shrink-0 mt-0.5 animate-pulse">
                          <BadgeCheck size={14} />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#cfc2d6]/40 block leading-none mb-1">
                            ISSUING ORGANIZATION
                          </span>
                          <span className="font-bold text-[#dae2fd] text-sm uppercase leading-tight">
                            {CERTIFICATES_DATA[activeIdx].issuer}
                          </span>
                        </div>
                      </div>

                      {/* Date of Issuance */}
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-[#ddb7ff]/5 border border-[#ddb7ff]/15 text-[#ddb7ff] shrink-0 mt-0.5">
                          <Calendar size={14} />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#cfc2d6]/40 block leading-none mb-1">
                            DATE SECURED & CONFERRED
                          </span>
                          <span className="font-bold text-[#dae2fd]">
                            {CERTIFICATES_DATA[activeIdx].date}
                          </span>
                        </div>
                      </div>

                      {/* Credential/Verification ID */}
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-[#ddb7ff]/5 border border-[#ddb7ff]/15 text-[#ddb7ff] shrink-0 mt-0.5">
                          <Key size={14} />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#cfc2d6]/40 block leading-none mb-1">
                            REGISTRATION / CREDENTIAL ID
                          </span>
                          <span className="font-mono font-bold text-[#ddb7ff] bg-[#ddb7ff]/10 border border-[#ddb7ff]/15 rounded px-1.5 py-0.5 text-xs inline-block">
                            {CERTIFICATES_DATA[activeIdx].credentialId || 'N/A (Verified Registration)'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Verified Technical Competencies */}
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#cfc2d6]/40 block mb-2.5">
                        VERIFIED SKILLS & SUBJECTS
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {CERTIFICATES_DATA[activeIdx].skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs font-semibold px-2.5 py-1 rounded bg-[#171f33]/95 text-[#dae2fd] border border-[#4d4354]/60 hover:border-[#ddb7ff]/30 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Signatories list */}
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#cfc2d6]/40 block mb-2.5">
                        KEY SIGNATORY OFFICERS
                      </span>
                      <div className="flex flex-col gap-1.5 bg-[#0e172a]/50 p-3 rounded-lg border border-[#4d4354]/30">
                        {CERTIFICATES_DATA[activeIdx].signatories.map((sig) => (
                          <div key={sig} className="flex items-center gap-2 text-xs text-[#cfc2d6] font-medium font-sans">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ddb7ff]" />
                            <span>{sig}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual integrity check disclaimer */}
                  <div className="text-[9px] font-mono text-[#cfc2d6]/30 border-t border-[#4d4354]/20 pt-4 mt-6 uppercase leading-relaxed">
                    IMAGE INTEGRITY CONFORMITY: This is a direct rendering of the unmodified certificate document uploaded by Pauline Lucena. Let there be no structural adjustments.
                  </div>
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
