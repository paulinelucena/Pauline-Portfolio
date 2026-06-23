import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Copy, Check, Send, Sparkles, Trash2, ShieldCheck, Linkedin, Instagram, Music, Facebook, Calendar, ArrowUpRight } from 'lucide-react';
import { Inquiry } from '../types';

interface ContactProps {
  onInquirySubmitted?: (inquiry: Inquiry) => void;
  inquiries?: Inquiry[];
  onDeleteInquiry?: (id: string) => void;
}

export default function Contact({ onInquirySubmitted, inquiries = [], onDeleteInquiry }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [serviceIntersection, setServiceIntersection] = useState('Accounting Support');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [lastSubmissionId, setLastSubmissionId] = useState('');
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const [lastInquiry, setLastInquiry] = useState<Inquiry | null>(null);
  const [copiedDigest, setCopiedDigest] = useState(false);
  const emailToCopy = 'paulinelucena27@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailToCopy).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    });
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const isFormValid = name.trim() !== '' && validateEmail(email) && message.trim() !== '';

  const getInquiryBody = (inq: Inquiry) => {
    return `Dear Pauline Lucena,

I am submitting a service inquiry regarding my business requirements. Please find the details of my request below:

--------------------------------------------------
[SERVICE REQUIREMENT]
${inq.serviceInterest}

[CLIENT CONTACT INFO]
Name: ${inq.name}
Email: ${inq.email}

[INQUIRY REFERENCE ID]
${inq.id}

[SUBMITTED TIMESTAMP]
${inq.timestamp}
--------------------------------------------------

[CLIENT MESSAGE CONTENT]
${inq.message}

--------------------------------------------------
Looking forward to scheduling an audit assessment.

Sincerely,
${inq.name}`;
  };

  const getGmailUrl = (inq: Inquiry) => {
    const to = 'paulinelucena27@gmail.com';
    const subject = `[Inquiry ${inq.id}] ${inq.serviceInterest} - ${inq.name}`;
    const body = getInquiryBody(inq);
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const getMailtoUrl = (inq: Inquiry) => {
    const to = 'paulinelucena27@gmail.com';
    const subject = `[Inquiry ${inq.id}] ${inq.serviceInterest} - ${inq.name}`;
    const body = getInquiryBody(inq);
    return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleCopyDigest = (inq: Inquiry) => {
    const body = getInquiryBody(inq);
    navigator.clipboard.writeText(body).then(() => {
      setCopiedDigest(true);
      setTimeout(() => setCopiedDigest(false), 2000);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) {
      setTouched({ name: true, email: true, message: true });
      return;
    }

    const uniqueId = 'INQ-' + Math.floor(100000 + Math.random() * 900000);
    const newInquiry: Inquiry = {
      id: uniqueId,
      name: name,
      email: email,
      serviceInterest: serviceIntersection,
      message: message,
      timestamp: new Date().toLocaleString(),
      status: 'Received',
    };

    onInquirySubmitted?.(newInquiry);
    setLastInquiry(newInquiry);
    setLastSubmissionId(uniqueId);
    setFormSuccess(true);

    // Reset Form
    setName('');
    setEmail('');
    setServiceIntersection('Accounting Support');
    setMessage('');
    setTouched({});
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171f33]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left column: copywriting / contact details */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-4.5xl font-extrabold uppercase tracking-tight text-[#dae2fd] mb-6">
              Ready to Elevate
              <br />
              Your Operations?
            </h2>

            <p className="text-[#cfc2d6] text-base md:text-lg leading-relaxed mb-10 font-normal">
              Currently accepting new corporate partners and executive clients. Let's discuss how I can streamline your financial workflows.
            </p>

            {/* Discovery Call CTA */}
            <a
              href="https://calendly.com/paulinelucena27/30min"
              target="_blank"
              rel="noreferrer"
              id="book-discovery-call-btn"
              className="group relative inline-flex items-center justify-between gap-4 w-full sm:w-auto mb-10 pl-5 pr-4 py-4 rounded-xl bg-[#ddb7ff] text-[#490080] font-bold text-sm sm:text-base shadow-[0_4px_24px_rgba(221,183,255,0.25)] hover:brightness-110 hover:shadow-[0_6px_28px_rgba(221,183,255,0.4)] active:scale-[0.98] transition-all cursor-pointer overflow-hidden"
            >
              <span className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#490080]/15 flex items-center justify-center">
                  <Calendar size={16} />
                </span>
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-[9px] uppercase font-extrabold tracking-[0.18em] opacity-70">
                    Free 30-min Session
                  </span>
                  <span>Book a Discovery Call</span>
                </span>
              </span>
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Micro Details info */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full bg-[#ddb7ff]/10 flex items-center justify-center text-[#ddb7ff] group-hover:bg-[#ddb7ff] group-hover:text-[#490080] group-hover:shadow-[0_0_15px_rgba(221,183,255,0.3)] transition-all">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#cfc2d6]/50">
                    Primary Email
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-base font-medium text-[#dae2fd]">
                      {emailToCopy}
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      id="copy-email-btn"
                      className="p-1.5 rounded bg-[#131b2e] hover:bg-[#171f33] border border-[#4d4354] hover:border-[#ddb7ff] text-[#cfc2d6] hover:text-[#fff] transition-all cursor-pointer active:scale-90 relative"
                      title="Copy Email"
                    >
                      {copiedEmail ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                      {copiedEmail && (
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#ddb7ff] text-[#490080] text-[10px] uppercase font-extrabold px-2 py-0.5 rounded shadow-lg whitespace-nowrap">
                          Copied!
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#ddb7ff]/10 flex items-center justify-center text-[#ddb7ff]">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#cfc2d6]/50">
                    Location Availability
                  </span>
                  <span className="text-sm sm:text-base font-medium text-[#dae2fd]">
                    Remote Global Support
                  </span>
                </div>
              </div>
            </div>

            {/* Social channels tags with hover label effects */}
            <div className="flex gap-4 flex-wrap">
              {[
                { icon: <Linkedin size={18} />, name: 'LinkedIn', url: 'https://linkedin.com/' },
                { icon: <Instagram size={18} />, name: 'Instagram', url: 'https://instagram.com/' },
                { icon: <Music size={18} />, name: 'TikTok', url: 'https://tiktok.com/' },
                { icon: <Facebook size={18} />, name: 'Facebook', url: 'https://facebook.com/' },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  ),
                  name: 'WhatsApp',
                  url: 'https://wa.me/qr/NZFGQQNZY3GNC1',
                },
              ].map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl border border-[#4d4354] flex items-center justify-center hover:bg-[#ddb7ff]/20 hover:border-[#ddb7ff] transition-all group relative cursor-pointer text-[#cfc2d6] hover:text-[#ddb7ff]"
                >
                  {soc.icon}
                  {/* Tooltip on hover */}
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#171f33] border border-[#4d4354] text-[10px] font-semibold text-[#dae2fd] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
                    {soc.name}
                  </span>
                </a>
              ))}
            </div>
          </div>


        </div>

        {/* Right column: form cards of inquiries */}
        <div className="glass-card p-8 sm:p-10 rounded-2xl border border-[#4d4354]/75 shadow-2xl relative overflow-hidden">
          {/* Form Background Accent gradient */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#ddb7ff]/5 rounded-full blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            {!formSuccess ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Name & Email Group */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-[#cfc2d6]/80 uppercase tracking-widest block">
                      Name
                    </label>
                    <input
                      type="text"
                      id="form-name-input"
                      value={name}
                      onBlur={() => handleBlur('name')}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className={`w-full bg-[#0b1326] border rounded-xl p-3.5 text-sm md:text-base text-[#dae2fd] placeholder-[#cfc2d6]/30 focus:outline-none focus:ring-1 focus:ring-[#ddb7ff] focus:border-[#ddb7ff] transition-all ${
                        touched.name && name.trim() === ''
                          ? 'border-rose-500/80 ring-1 ring-rose-500/40'
                          : 'border-[#4d4354] hover:border-[#cfc2d6]/40'
                      }`}
                    />
                    {touched.name && name.trim() === '' && (
                      <p id="error-name" className="text-rose-400/90 text-xs font-medium">Please specify your name</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-[#cfc2d6]/80 uppercase tracking-widest block">
                      Email
                    </label>
                    <input
                      type="email"
                      id="form-email-input"
                      value={email}
                      onBlur={() => handleBlur('email')}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className={`w-full bg-[#0b1326] border rounded-xl p-3.5 text-sm md:text-base text-[#dae2fd] placeholder-[#cfc2d6]/30 focus:outline-none focus:ring-1 focus:ring-[#ddb7ff] focus:border-[#ddb7ff] transition-all ${
                        touched.email && !validateEmail(email)
                          ? 'border-rose-500/80 ring-1 ring-rose-500/40'
                          : 'border-[#4d4354] hover:border-[#cfc2d6]/40'
                      }`}
                    />
                    {touched.email && !validateEmail(email) && (
                      <p id="error-email" className="text-rose-400/90 text-xs font-medium">Please specify a valid email address</p>
                    )}
                  </div>
                </div>

                {/* Service Select Type */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-[#cfc2d6]/80 uppercase tracking-widest block">
                    Service Interest
                  </label>
                  <select
                    id="form-service-select"
                    value={serviceIntersection}
                    onChange={(e) => setServiceIntersection(e.target.value)}
                    className="w-full bg-[#0b1326] border border-[#4d4354] hover:border-[#cfc2d6]/40 rounded-xl p-3.5 text-sm md:text-base text-[#dae2fd] focus:outline-none focus:border-[#ddb7ff] transition-all cursor-pointer"
                  >
                    <option value="Accounting Support">Accounting Support</option>
                    <option value="Executive Admin">Executive Admin</option>
                    <option value="Consultation">Consultation / Assessment</option>
                  </select>
                </div>

                {/* Message detail */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-[#cfc2d6]/80 uppercase tracking-widest block">
                    Message
                  </label>
                  <textarea
                    id="form-message-input"
                    value={message}
                    onBlur={() => handleBlur('message')}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can I help you today?"
                    rows={4}
                    className={`w-full bg-[#0b1326] border rounded-xl p-3.5 text-sm md:text-base text-[#dae2fd] placeholder-[#cfc2d6]/30 focus:outline-none focus:ring-1 focus:ring-[#ddb7ff] focus:border-[#ddb7ff] transition-all resize-none ${
                      touched.message && message.trim() === ''
                        ? 'border-rose-500/80 ring-1 ring-rose-500/40'
                        : 'border-[#4d4354] hover:border-[#cfc2d6]/40'
                    }`}
                  />
                  {touched.message && message.trim() === '' && (
                    <p id="error-message" className="text-rose-400/90 text-xs font-medium">Message is required</p>
                  )}
                </div>

                {/* Submit button wrapper */}
                <button
                  type="submit"
                  id="form-submit-btn"
                  disabled={!isFormValid && Object.keys(touched).length > 0}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg text-sm sm:text-base ${
                    isFormValid
                      ? 'bg-[#ddb7ff] text-[#490080] hover:brightness-110 active:scale-98 shadow-[0_4px_20px_rgba(221,183,255,0.2)]'
                      : 'bg-[#171f33]/60 text-[#cfc2d6]/40 border border-[#4d4354]/45 cursor-not-allowed'
                  }`}
                >
                  <Send size={16} />
                  Send Inquiry
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="form-success-alert"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-4 flex flex-col items-center justify-center h-full"
              >
                {/* Circular pulsing glowing icon container */}
                <div className="w-14 h-14 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mb-4 border border-green-500/20 relative">
                  <span className="absolute inset-0 rounded-full border border-green-400/40 animate-ping opacity-30" />
                  <Sparkles size={24} />
                </div>

                <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight text-[#dae2fd] mb-2">
                  Inquiry Captured!
                </h3>

                <p className="text-xs sm:text-sm text-[#cfc2d6]/90 leading-relaxed max-w-sm mb-5 px-1">
                  Thank you. Pauline's portfolio ledger has locked in your inquiry under <strong>{lastSubmissionId}</strong>.
                </p>

                {/* Gmail Integration Action Card */}
                {lastInquiry && (
                  <div className="w-full bg-[#0b1326]/80 rounded-xl p-5 border border-[#4d4354] mb-6 text-left">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#ddb7ff] mb-2 block">
                      Direct Gmail Ingress Delivery
                    </span>
                    <p className="text-[11px] sm:text-xs text-[#cfc2d6]/80 mb-4 leading-relaxed">
                      Connect directly with Pauline by delivering this professional audit digest using your preferred mail route:
                    </p>
                    
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => window.open(getGmailUrl(lastInquiry), '_blank')}
                        className="w-full py-2.5 px-3 rounded-lg bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer select-none active:scale-95 animate-pulse"
                      >
                        <Mail size={14} />
                        Deliver via Gmail
                      </button>
                    </div>

                    <div className="mt-3 border-t border-[#4d4354]/40 pt-3 flex items-center justify-between">
                      <span className="text-[9px] font-mono text-[#cfc2d6]/40 uppercase">
                        Payload ID: {lastInquiry.id}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopyDigest(lastInquiry)}
                        className="text-[10px] font-bold text-[#ddb7ff] hover:text-[#dae2fd] flex items-center gap-1 transition-colors bg-transparent border-0 cursor-pointer p-1"
                      >
                        {copiedDigest ? <Check size={10} className="text-green-400" /> : <Copy size={10} />}
                        {copiedDigest ? 'Digest Copied!' : 'Copy Audit Digest'}
                      </button>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setFormSuccess(false)}
                  id="success-dismiss-btn"
                  className="px-6 py-2 rounded-lg border border-[#4d4354] hover:border-[#ddb7ff] hover:bg-[#131b2e] text-[#dae2fd] font-bold text-xs select-none active:scale-95 transition-all cursor-pointer"
                >
                  Submit Another Request
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
