import { Wallet, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Competency } from '../types';

const competenciesData: Competency[] = [
  {
    id: 'comp-1',
    title: 'Accounting Support',
    iconName: 'wallet',
    items: [
      'Accounts Payable & Receivable',
      'Bank Reconciliation',
      'Receipt Management',
      'Invoice Creation & Delivery',
      'Payment Tracking & Follow-ups',
      'Bill Logging & Scheduling',
      'Expense Report Compilation',
      'Generating Basic Reports',
      'Data Entry & Clean-up',
    ],
  },
  {
    id: 'comp-2',
    title: 'Client Communication',
    iconName: 'communication',
    items: [
      'Stakeholder Liaison',
      'Collection & Payment Follow-up Emails',
      'Email Management',
      'Professional Correspondence',
      'Basic Email Support',
    ],
  },
  {
    id: 'comp-3',
    title: 'General Admin Support',
    iconName: 'admin',
    items: [
      'Data Entry',
      'Document Organization',
      'Workflow Optimization',
      'Email Management'
    ],
  },
];

export default function Competencies() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'wallet':
        return <Wallet className="w-6 h-6 text-[#ddb7ff]" />;
      case 'communication':
        return <MessageCircle className="w-6 h-6 text-[#ddb7ff]" />;
      case 'admin':
      default:
        return <Clock className="w-6 h-6 text-[#ddb7ff]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#060e20] border-y border-[#171f33]">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4.5xl font-extrabold uppercase tracking-tight text-[#dae2fd] mb-4"
          >
            Core Competencies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm md:text-base text-[#cfc2d6] leading-relaxed"
          >
            Tailored financial and administrative solutions designed to scale with your business needs.
          </motion.p>
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {competenciesData.map((comp, idx) => (
            <motion.div
              key={comp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card p-8 rounded-2xl border border-[#4d4354]/60 hover:border-[#ddb7ff]/60 transition-colors duration-200 group relative overflow-hidden"
            >
              {/* Card visual accent glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ddb7ff]/5 rounded-bl-full pointer-events-none group-hover:bg-[#ddb7ff]/10 transition-colors duration-300" />

              {/* Icon Container */}
              <div className="w-12 h-12 bg-[#ddb7ff]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ddb7ff] group-hover:text-[#490080] group-hover:shadow-[0_0_15px_rgba(221,183,255,0.4)] transition-all duration-300">
                {getIcon(comp.iconName)}
              </div>

              {/* Competency Title */}
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[#dae2fd] mb-6">
                {comp.title}
              </h3>

              {/* Bullet List */}
              <ul className="space-y-4 text-sm sm:text-base text-[#cfc2d6] font-normal">
                {comp.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-center gap-3 hover:text-[#fff] transition-colors duration-150"
                  >
                    <CheckCircle2 size={16} className="text-[#ddb7ff] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
