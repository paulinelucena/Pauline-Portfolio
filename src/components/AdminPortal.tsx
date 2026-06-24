import { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, CheckCircle2, Archive, Trash2, X, Filter, BarChart3, AlertCircle, Sparkles, Lightbulb, Check, Compass, BookOpen, UserCheck, ShieldCheck } from 'lucide-react';
import { Inquiry } from '../types';

interface AdminPortalProps {
  inquiries: Inquiry[];
  onUpdateStatus: (id: string, status: Inquiry['status']) => void;
  onDeleteInquiry: (id: string) => void;
  onClose: () => void;
  currentHeadline: string;
  onUpdateHeadline: (headline: string) => void;
}

export default function AdminPortal({ 
  inquiries, 
  onUpdateStatus, 
  onDeleteInquiry, 
  onClose,
  currentHeadline,
  onUpdateHeadline
}: AdminPortalProps) {
  const [activeTab, setActiveTab] = useState<'inquiries' | 'blueprint'>('inquiries');
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

  // Stats Counters
  const totalInq = inquiries.length;
  const pendingInq = inquiries.filter((i) => i.status === 'Received').length;
  const reviewedInq = inquiries.filter((i) => i.status === 'Reviewed').length;
  const closedInq = inquiries.filter((i) => i.status === 'Closed').length;

  const filteredInquiries = inquiries.filter((inq) => {
    if (filterStatus === 'All') return true;
    return inq.status === filterStatus;
  });

  const headlineVariations = [
    {
      id: 'var-1',
      label: 'Focus: Systems & Ledger Integrity (Primary/Default)',
      text: 'Accounting Information Systems graduate and Certified QuickBooks ProAdvisor offering structured administrative support, ledger maintenance, and data organization.'
    },
    {
      id: 'var-2',
      label: 'Focus: Operations & Workflow Coordination',
      text: 'Detail-driven Virtual Assistant with TESDA Bookkeeping certification, trained to manage operational workflows, inbox management, and account reconciliation with absolute accuracy.'
    },
    {
      id: 'var-3',
      label: 'Focus: Foundational Executive Support',
      text: 'Technical Virtual Assistant specializing in digital office operations, spreadsheet design, and client liaison, backed by academic and professional credentials.'
    }
  ];

  return (
    <div className="fixed inset-0 bg-[#060e20]/95 backdrop-blur-md z-50 overflow-y-auto py-16 px-4">
      <div className="max-w-6xl mx-auto bg-[#0b1326] border border-[#ddb7ff]/20 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
        {/* Header toolbar */}
        <div className="flex justify-between items-center pb-6 border-b border-[#4d4354] mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#dae2fd] uppercase tracking-tight flex items-center gap-2">
              Virtual Office Cockpit
            </h2>
            <p className="text-xs sm:text-sm text-[#cfc2d6] mt-1">
              Secure administrative dashboard to monitor incoming requests and manage portfolio strategy.
            </p>
          </div>
          <button
            onClick={onClose}
            id="close-admin-portal-btn"
            className="p-2 bg-[#131b2e] border border-[#4d4354] hover:border-[#ddb7ff] text-[#cfc2d6] hover:text-[#fff] rounded-xl transition-all active:scale-90 cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-[#4d4354]/40 mb-8 gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`pb-4 text-sm font-black uppercase tracking-widest border-b-2 transition-all cursor-pointer ${
              activeTab === 'inquiries'
                ? 'border-[#ddb7ff] text-[#ddb7ff]'
                : 'border-transparent text-[#cfc2d6]/40 hover:text-[#cfc2d6]/80'
            }`}
          >
            Inquiries Inbox ({totalInq})
          </button>
          <button
            onClick={() => setActiveTab('blueprint')}
            className={`pb-4 text-sm font-black uppercase tracking-widest border-b-2 transition-all cursor-pointer ${
              activeTab === 'blueprint'
                ? 'border-[#ddb7ff] text-[#ddb7ff] flex items-center gap-2'
                : 'border-transparent text-[#cfc2d6]/40 hover:text-[#cfc2d6]/80 flex items-center gap-2'
            }`}
          >
            <Sparkles size={14} />
            Career &amp; Portfolio Strategy Blueprint
          </button>
        </div>

        {activeTab === 'inquiries' ? (
          <>
            {/* Dashboard KPIs Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
              <div className="p-4 rounded-xl border border-[#4d4354]/40 bg-[#131b2e]/30">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#cfc2d6]/50 block">Total Received</span>
                <span className="text-2xl font-extrabold text-[#dae2fd] mt-1 block">{totalInq}</span>
              </div>

              <div className="p-4 rounded-xl border border-amber-500/25 bg-amber-500/5">
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300/60 block">Pending Review</span>
                <span className="text-2xl font-extrabold text-[#fabc4e] mt-1 block">{pendingInq}</span>
              </div>

              <div className="p-4 rounded-xl border border-[#ddb7ff]/25 bg-[#ddb7ff]/5">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#ddb7ff]/60 block">Reviewed &amp; Pending</span>
                <span className="text-2xl font-extrabold text-[#ddb7ff] mt-1 block">{reviewedInq}</span>
              </div>

              <div className="p-4 rounded-xl border border-green-500/25 bg-green-500/5">
                <span className="text-[10px] uppercase font-bold tracking-wider text-green-300/60 block">Closed / Onboarded</span>
                <span className="text-2xl font-extrabold text-green-400 mt-1 block">{closedInq}</span>
              </div>
            </div>

            {/* Filters control toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Filter size={15} className="text-[#cfc2d6]/60" />
                <select
                  value={filterStatus}
                  id="admin-filter-select"
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="bg-[#0b1326] border border-[#4d4354] rounded-xl px-3 py-1.5 text-xs text-[#dae2fd] focus:outline-none focus:border-[#ddb7ff] cursor-pointer"
                >
                  <option value="All">All Inquiries</option>
                  <option value="Received">Received Only</option>
                  <option value="Reviewed">Reviewed Only</option>
                  <option value="Closed">Closed Only</option>
                </select>
              </div>

              <div className="text-xs text-[#cfc2d6]/60 font-medium">
                Showing {filteredInquiries.length} of {totalInq} inquiries
              </div>
            </div>

            {/* Main Records Table block */}
            <div className="overflow-x-auto border border-[#4d4354]/40 rounded-xl bg-[#131b2e]/20">
              {filteredInquiries.length > 0 ? (
                <table className="w-full text-left border-collapse" id="admin-inquiries-table">
                  <thead>
                    <tr className="border-b border-[#4d4354]/80 text-[#cfc2d6]/60 uppercase text-[10px] sm:text-[11px] font-bold tracking-wider bg-[#131b2e]/40">
                      <th className="p-4 pl-6">ID / Timestamp</th>
                      <th className="p-4">Client Detail</th>
                      <th className="p-4">Service Required</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right pr-6">Management Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#4d4354]/40 text-xs sm:text-sm font-medium text-[#dae2fd]">
                    {filteredInquiries.map((inq) => (
                      <tr key={inq.id} className="hover:bg-[#131b2e]/30 transition-all">
                        <td className="p-4 pl-6">
                          <span className="font-mono font-extrabold text-[#ddb7ff] block">
                            {inq.id}
                          </span>
                          <span className="text-[10px] text-[#cfc2d6]/50 block mt-0.5">
                            {inq.timestamp}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className="font-bold text-[#dae2fd] block">{inq.name}</span>
                          <span className="text-[11px] text-[#cfc2d6]/60 block">{inq.email}</span>
                        </td>
                        <td className="p-4">
                          <span className="text-xs px-2.5 py-1 rounded bg-[#ddb7ff]/5 text-[#ddb7ff] border border-[#ddb7ff]/10">
                            {inq.serviceInterest}
                          </span>
                        </td>
                        <td className="p-4">
                          <span
                            className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border ${
                              inq.status === 'Closed'
                                ? 'bg-green-500/10 text-green-300 border-green-500/20'
                                : inq.status === 'Reviewed'
                                ? 'bg-[#ddb7ff]/10 text-[#ddb7ff] border-[#ddb7ff]/20'
                                : 'bg-amber-500/10 text-[#fabc4e] border-amber-500/20'
                            }`}
                          >
                            {inq.status}
                          </span>
                        </td>
                        <td className="p-4 text-right pr-6 space-x-2">
                          <button
                            onClick={() => setSelectedInquiry(inq)}
                            id="view-details-btn"
                            className="p-1 px-2 hover:bg-[#171f33] border border-[#4d4354]/40 hover:border-[#ddb7ff] rounded text-xs transition-all text-[#cfc2d6] hover:text-[#fff] cursor-pointer"
                            title="View Full Message"
                          >
                            View
                          </button>

                          {inq.status === 'Received' && (
                            <button
                              onClick={() => onUpdateStatus(inq.id, 'Reviewed')}
                              id="mark-reviewed-btn"
                              className="p-1 px-2 bg-[#ddb7ff]/10 hover:bg-[#ddb7ff] text-[#ddb7ff] hover:text-[#490080] border border-[#ddb7ff]/20 hover:border-[#ddb7ff] rounded text-xs transition-all font-bold cursor-pointer"
                              title="Mark Reviewed"
                            >
                              Review
                            </button>
                          )}

                          {inq.status !== 'Closed' && (
                            <button
                              onClick={() => onUpdateStatus(inq.id, 'Closed')}
                              id="close-inq-btn"
                              className="p-1 px-2 bg-green-500/10 hover:bg-green-500 text-green-300 hover:text-[#0b1326] border border-green-500/20 hover:border-green-500 rounded text-xs transition-all font-bold cursor-pointer"
                              title="Close/Resolve"
                            >
                              Close
                            </button>
                          )}

                          <button
                            onClick={() => onDeleteInquiry(inq.id)}
                            id="delete-inquiry-btn"
                            className="p-1 px-2 hover:bg-rose-500/10 text-rose-400 hover:text-rose-300 border border-transparent hover:border-rose-500/30 rounded text-xs transition-all cursor-pointer"
                            title="Delete record"
                          >
                            <Trash2 size={13} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="text-center py-12 text-[#cfc2d6]/50 text-sm flex flex-col items-center justify-center gap-3">
                  <AlertCircle size={32} className="text-[#cfc2d6]/30" />
                  <span>No inquiries matching status: "{filterStatus}" found.</span>
                </div>
              )}
            </div>
          </>
        ) : (
          /* Portfolio Strategic Blueprint Panel */
          <div className="space-y-8 animate-fadeIn text-sm">
            {/* Introductory Overview */}
            <div className="p-6 rounded-2xl border border-[#ddb7ff]/20 bg-[#ddb7ff]/5 flex items-start gap-4">
              <div className="p-2.5 bg-[#ddb7ff]/10 rounded-xl text-[#ddb7ff] shrink-0 border border-[#ddb7ff]/20">
                <Compass size={22} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white uppercase tracking-wider mb-2">
                  High-Potential Virtual Assistant Positioning
                </h3>
                <p className="text-xs sm:text-sm text-[#cfc2d6] leading-relaxed">
                  As an aspiring Virtual Assistant with a solid background in <strong>Accounting Information Systems (BSAIS)</strong>, 
                  your key advantage is representing <strong>absolute accuracy, structured training, and process discipline</strong>. 
                  This blueprint outlines the exact visual and textual strategy implemented on your portfolio to appeal to prospective 
                  founders and clients—without overstating experience or using empty clichés.
                </p>
              </div>
            </div>

            {/* Part 1: Headline Switcher */}
            <div className="border border-[#4d4354]/40 rounded-xl p-6 sm:p-8 bg-[#131b2e]/10">
              <div className="flex items-center gap-2.5 mb-5 border-b border-[#4d4354]/30 pb-3">
                <Sparkles size={18} className="text-[#ddb7ff]" />
                <h3 className="text-base font-bold text-white uppercase tracking-wider">
                  Requirement 1: Confident, Minimalist Headlines
                </h3>
              </div>
              <p className="text-xs text-[#cfc2d6] leading-relaxed mb-6">
                Below are 3 high-quality variations crafted specifically to project competency and accuracy without buzzwords. 
                You can toggle and select any of these—the chosen headline will <strong>instantly update</strong> on your live Hero section!
              </p>

              <div className="space-y-4">
                {headlineVariations.map((variation) => {
                  const isActive = currentHeadline === variation.text;
                  return (
                    <div 
                      key={variation.id}
                      className={`p-5 rounded-xl border transition-all relative ${
                        isActive 
                          ? 'border-[#ddb7ff] bg-[#ddb7ff]/5 shadow-[0_0_15px_rgba(221,183,255,0.05)]' 
                          : 'border-[#4d4354]/40 bg-[#0b1326]/30 hover:border-[#cfc2d6]/30'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1.5">
                          <span className="text-[10px] font-black uppercase tracking-wider text-[#ddb7ff] block">
                            {variation.label}
                          </span>
                          <p className="text-xs sm:text-sm text-[#dae2fd] font-medium leading-relaxed italic">
                            "{variation.text}"
                          </p>
                        </div>

                        {isActive ? (
                          <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 whitespace-nowrap">
                            <Check size={12} />
                            Active Live
                          </span>
                        ) : (
                          <button
                            onClick={() => onUpdateHeadline(variation.text)}
                            className="text-xs font-bold text-[#ddb7ff] hover:text-white bg-[#ddb7ff]/15 hover:bg-[#ddb7ff] hover:text-[#490080] px-4 py-2 rounded-lg border border-[#ddb7ff]/20 transition-all cursor-pointer whitespace-nowrap"
                          >
                            Set Live
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Part 2: Core Competencies and PAR Framework Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Core Competencies Strategy */}
              <div className="border border-[#4d4354]/40 rounded-xl p-6 bg-[#131b2e]/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-4 border-b border-[#4d4354]/30 pb-3">
                    <UserCheck size={18} className="text-[#ddb7ff]" />
                    <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                      Requirement 2: Structured Competencies
                    </h4>
                  </div>
                  <p className="text-xs text-[#cfc2d6] leading-relaxed mb-4">
                    Your Core Competencies layout highlights technical operational support categorized logically under three client needs:
                  </p>
                  <ul className="space-y-3.5 text-xs text-[#cfc2d6]/85">
                    <li className="flex gap-2">
                      <span className="font-extrabold text-[#ddb7ff]">1. Technical Bookkeeping:</span> 
                      Focuses on matching rules, secure link setup, and transaction classifications (QuickBooks Online and TESDA alignments).
                    </li>
                    <li className="flex gap-2">
                      <span className="font-extrabold text-[#ddb7ff]">2. Client &amp; Inbox Operations:</span> 
                      Highlights inbox triage, email filters, scheduling templates, and professional customer care workflows.
                    </li>
                    <li className="flex gap-2">
                      <span className="font-extrabold text-[#ddb7ff]">3. Administrative Systems:</span> 
                      Establishes your mastery of document structures, custom Google Sheets, data validation, and standard SOP layouts.
                    </li>
                  </ul>
                </div>
                <div className="mt-6 p-3 rounded bg-[#ddb7ff]/5 border border-[#ddb7ff]/10 text-[11px] text-[#cfc2d6]/70 leading-relaxed italic">
                  *This structure positions you as an organized operational asset rather than just a generalist VA.
                </div>
              </div>

              {/* PAR Project Framework Strategy */}
              <div className="border border-[#4d4354]/40 rounded-xl p-6 bg-[#131b2e]/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-4 border-b border-[#4d4354]/30 pb-3">
                    <BookOpen size={18} className="text-[#ddb7ff]" />
                    <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                      Requirement 3: Project PAR Structure
                    </h4>
                  </div>
                  <p className="text-xs text-[#cfc2d6] leading-relaxed mb-4">
                    Your Project Showcase outlines actual academic or case exercises using the rigorous <strong>Problem-Action-Result (PAR)</strong> flow:
                  </p>
                  <ul className="space-y-3.5 text-xs text-[#cfc2d6]/85">
                    <li className="flex gap-2">
                      <span className="font-extrabold text-[#ddb7ff]">[P] Problem Statement:</span> 
                      Frames an objective operational frustration (e.g., disorganized feeds, massive raw email lists, manual progress sheets).
                    </li>
                    <li className="flex gap-2">
                      <span className="font-extrabold text-[#ddb7ff]">[A] Action Taken:</span> 
                      Highlights your methodical administrative tasks (e.g., hierarchy creation, validation drop-downs, automated conditional matching).
                    </li>
                    <li className="flex gap-2">
                      <span className="font-extrabold text-[#ddb7ff]">[R] Result Delivered:</span> 
                      Delivers quantitative, clear outcomes (e.g., 65% delay reduction, standard SOP documentation, 100% matched bank statements).
                    </li>
                  </ul>
                </div>
                <div className="mt-6 p-3 rounded bg-[#ddb7ff]/5 border border-[#ddb7ff]/10 text-[11px] text-[#cfc2d6]/70 leading-relaxed italic">
                  *By spelling out precise micro-skills, you prove your capacity and readiness without claiming false background.
                </div>
              </div>
            </div>

            {/* Part 3: Professional Presentation Tips */}
            <div className="border border-[#4d4354]/40 rounded-xl p-6 sm:p-8 bg-[#131b2e]/10">
              <div className="flex items-center gap-2.5 mb-5 border-b border-[#4d4354]/30 pb-3">
                <Lightbulb size={18} className="text-[#ddb7ff]" />
                <h3 className="text-base font-bold text-white uppercase tracking-wider">
                  Requirement 4: Professional Presentation Tips
                </h3>
              </div>
              <p className="text-xs text-[#cfc2d6] leading-relaxed mb-6">
                Keep these core rules in mind when reviewing your layout, styling, and communications to maximize prospective client conversion:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-lg bg-[#0b1326]/30 border border-[#4d4354]/20">
                  <h5 className="text-xs font-extrabold text-white uppercase tracking-wider mb-1.5 text-[#ddb7ff]">
                    1. Layout &amp; Spacing
                  </h5>
                  <p className="text-[11px] text-[#cfc2d6] leading-relaxed">
                    Prioritize generous negative space around blocks. Do not crowd card boundaries. Spacing is the visual difference between premium engineering and standard designs.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#0b1326]/30 border border-[#4d4354]/20">
                  <h5 className="text-xs font-extrabold text-white uppercase tracking-wider mb-1.5 text-[#ddb7ff]">
                    2. Authoritative Tone
                  </h5>
                  <p className="text-[11px] text-[#cfc2d6] leading-relaxed">
                    Avoid buzzwords (such as "passionate," "driven," "motivated"). Present your assets objectively (e.g., "100% Reconciled", "SOP Created"). This builds client trust.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#0b1326]/30 border border-[#4d4354]/20">
                  <h5 className="text-xs font-extrabold text-white uppercase tracking-wider mb-1.5 text-[#ddb7ff]">
                    3. Visual Hierarchy
                  </h5>
                  <p className="text-[11px] text-[#cfc2d6] leading-relaxed">
                    Ensure titles have strong display weight while body and status markers utilize monospace styling (e.g., "JetBrains Mono"). This creates clean information pathways.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#0b1326]/30 border border-[#4d4354]/20">
                  <h5 className="text-xs font-extrabold text-white uppercase tracking-wider mb-1.5 text-[#ddb7ff]">
                    4. Stand Proud
                  </h5>
                  <p className="text-[11px] text-[#cfc2d6] leading-relaxed">
                    Do not apologize or sound desperate for being a starter. Frame your academic excellence (BSAIS) and credentials (QuickBooks, TESDA) as pristine, focused blank-slates ready to absorb client habits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View Details modal */}
        {selectedInquiry && (
          <div className="fixed inset-0 bg-[#060e20]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
            <div className="glass-card border border-[#ddb7ff]/40 p-6 sm:p-8 rounded-2xl max-w-lg w-full relative shadow-2xl bg-[#0b1326]">
              <button
                onClick={() => setSelectedInquiry(null)}
                id="close-details-btn"
                className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-[#171f33] text-[#cfc2d6] hover:text-[#fff] transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              <h3 className="text-lg font-bold text-[#dae2fd] mb-1">Inquiry Details</h3>
              <p className="text-xs font-mono text-[#cfc2d6]/50 mb-6">{selectedInquiry.id} — Received at {selectedInquiry.timestamp}</p>

              <div className="space-y-4 text-sm font-medium mb-8">
                <div className="grid grid-cols-2 gap-4 border-b border-[#4d4354]/45 pb-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#cfc2d6]/40 block">From</span>
                    <span className="text-[#dae2fd] text-base mt-0.5 block font-bold">{selectedInquiry.name}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#cfc2d6]/40 block">Email</span>
                    <span className="text-[#dae2fd] text-sm mt-0.5 block underline">{selectedInquiry.email}</span>
                  </div>
                </div>

                <div className="border-b border-[#4d4354]/45 pb-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#cfc2d6]/40 block">Service Interest</span>
                  <span className="text-[#dae2fd] mt-0.5 block">{selectedInquiry.serviceInterest}</span>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#cfc2d6]/40 block">Message Content</span>
                  <p className="text-[#cfc2d6] mt-2 block bg-[#0b1326] border border-[#4d4354]/40 rounded-xl p-4 text-justify font-normal leading-relaxed text-sm">
                    {selectedInquiry.message}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 justify-end">
                {selectedInquiry.status === 'Received' && (
                  <button
                    onClick={() => {
                      onUpdateStatus(selectedInquiry.id, 'Reviewed');
                      setSelectedInquiry(null);
                    }}
                    className="px-4 py-2 bg-[#ddb7ff] text-[#490080] font-bold rounded-lg text-xs hover:brightness-110 cursor-pointer"
                  >
                    Mark Reviewed
                  </button>
                )}
                {selectedInquiry.status !== 'Closed' && (
                  <button
                    onClick={() => {
                      onUpdateStatus(selectedInquiry.id, 'Closed');
                      setSelectedInquiry(null);
                    }}
                    className="px-4 py-2 bg-green-500 text-[#0b1326] font-bold rounded-lg text-xs hover:brightness-110 cursor-pointer"
                  >
                    Close / Archive
                  </button>
                )}
                <button
                  onClick={() => setSelectedInquiry(null)}
                  className="px-4 py-2 border border-[#4d4354] rounded-lg text-[#dae2fd] text-xs hover:bg-[#131b2e] font-semibold cursor-pointer"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
