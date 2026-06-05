import { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, CheckCircle2, Archive, Trash2, X, Filter, BarChart3, AlertCircle } from 'lucide-react';
import { Inquiry } from '../types';

interface AdminPortalProps {
  inquiries: Inquiry[];
  onUpdateStatus: (id: string, status: Inquiry['status']) => void;
  onDeleteInquiry: (id: string) => void;
  onClose: () => void;
}

export default function AdminPortal({ inquiries, onUpdateStatus, onDeleteInquiry, onClose }: AdminPortalProps) {
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

  return (
    <div className="fixed inset-0 bg-[#060e20]/95 backdrop-blur-md z-50 overflow-y-auto py-16 px-4">
      <div className="max-w-6xl mx-auto bg-[#0b1326] border border-[#ddb7ff]/20 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
        {/* Header toolbar */}
        <div className="flex justify-between items-center pb-6 border-b border-[#4d4354] mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#dae2fd] uppercase tracking-tight flex items-center gap-2">
              Inquiries Administration Portal
            </h2>
            <p className="text-xs sm:text-sm text-[#cfc2d6] mt-1">
              Secure client interface to monitor corporate requests and schedule workloads.
            </p>
          </div>
          <button
            onClick={onClose}
            id="close-admin-portal-btn"
            className="p-2 bg-[#131b2e] border border-[#4d4354] hover:border-[#ddb7ff] text-[#cfc2d6] hover:text-[#fff] rounded-xl transition-all active:scale-90"
          >
            <X size={20} />
          </button>
        </div>

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
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#ddb7ff]/60 block">Reviewed &amp; Pending Work</span>
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
                        className="p-1 px-2 hover:bg-[#171f33] border border-[#4d4354]/40 hover:border-[#ddb7ff] rounded text-xs transition-all text-[#cfc2d6] hover:text-[#fff]"
                        title="View Full Message"
                      >
                        View
                      </button>

                      {inq.status === 'Received' && (
                        <button
                          onClick={() => onUpdateStatus(inq.id, 'Reviewed')}
                          id="mark-reviewed-btn"
                          className="p-1 px-2 bg-[#ddb7ff]/10 hover:bg-[#ddb7ff] text-[#ddb7ff] hover:text-[#490080] border border-[#ddb7ff]/20 hover:border-[#ddb7ff] rounded text-xs transition-all font-bold"
                          title="Mark Reviewed"
                        >
                          Review
                        </button>
                      )}

                      {inq.status !== 'Closed' && (
                        <button
                          onClick={() => onUpdateStatus(inq.id, 'Closed')}
                          id="close-inq-btn"
                          className="p-1 px-2 bg-green-500/10 hover:bg-green-500 text-green-300 hover:text-[#0b1326] border border-green-500/20 hover:border-green-500 rounded text-xs transition-all font-bold"
                          title="Close/Resolve"
                        >
                          Close
                        </button>
                      )}

                      <button
                        onClick={() => onDeleteInquiry(inq.id)}
                        id="delete-inquiry-btn"
                        className="p-1 px-2 hover:bg-rose-500/10 text-rose-400 hover:text-rose-300 border border-transparent hover:border-rose-500/30 rounded text-xs transition-all"
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

        {/* View Details modal */}
        {selectedInquiry && (
          <div className="fixed inset-0 bg-[#060e20]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="glass-card border border-[#ddb7ff]/40 p-6 sm:p-8 rounded-2xl max-w-lg w-full relative shadow-2xl">
              <button
                onClick={() => setSelectedInquiry(null)}
                id="close-details-btn"
                className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-[#171f33] text-[#cfc2d6] hover:text-[#fff] transition-colors"
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
                    className="px-4 py-2 bg-[#ddb7ff] text-[#490080] font-bold rounded-lg text-xs hover:brightness-110"
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
                    className="px-4 py-2 bg-green-500 text-[#0b1326] font-bold rounded-lg text-xs hover:brightness-110"
                  >
                    Close / Archive
                  </button>
                )}
                <button
                  onClick={() => setSelectedInquiry(null)}
                  className="px-4 py-2 border border-[#4d4354] rounded-lg text-[#dae2fd] text-xs hover:bg-[#131b2e] font-semibold"
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
