import { motion } from 'motion/react';
import { Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface PricingTier {
  id: string;
  eyebrow: string;
  name: string;
  description: string;
  subEyebrow: string;
  price: string;
  priceSuffix?: string;
  priceSubtext: string;
  features: string[];
  ctaText: string;
  highlighted?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    eyebrow: 'STARTER',
    name: 'Essentials',
    description: 'For freelancers or small businesses that need clean books without the overhead.',
    subEyebrow: 'STARTING FROM',
    price: '$7',
    priceSuffix: '/hr',
    priceSubtext: 'or from $1000 / month · billed monthly',
    features: [
      'Bank reconciliation (up to 1 account)',
      'Invoice creation & delivery',
      'Basic expense categorization',
      'Monthly summary report',
      'Email support within 1 business day'
    ],
    ctaText: 'Book a Call →'
  },
  {
    id: 'growth',
    eyebrow: 'GROWTH',
    name: 'Full Support',
    description: 'For growing businesses that need a reliable ongoing finance & admin partner.',
    subEyebrow: 'STARTING FROM',
    price: '$10',
    priceSuffix: '/hr',
    priceSubtext: 'or from $2000 / month · billed monthly',
    features: [
      'Everything in Essentials',
      'Multi-account reconciliation',
      'AR/AP tracking & follow-ups',
      'P&L and cash flow reports',
      'Calendar & email management',
      'Weekly check-in call (30 min)'
    ],
    ctaText: 'Book a Call →',
    highlighted: true
  },
  {
    id: 'custom',
    eyebrow: 'CUSTOM',
    name: 'Done-For-You',
    description: 'For businesses with complex needs — catch-up projects, or full VA scope.',
    subEyebrow: 'PRICED PER SCOPE',
    price: "Let's talk",
    priceSubtext: 'one-time or retainer · fully customized',
    features: [
      'Everything in Full Support',
      'Backlog catch-up & clean-up',
      'SOP documentation',
      'Custom reporting & dashboards',
      'Priority turnaround'
    ],
    ctaText: 'Book a Call →'
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#060d1d] border-t border-[#171f33] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#ddb7ff]/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#490080]/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#171f33_1px,transparent_1px),linear-gradient(to_bottom,#171f33_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.12] pointer-events-none" />

      <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        {/* Eyebrow */}
        <div className="flex justify-center mb-5">
          <span className="text-[10px] uppercase font-black tracking-[0.25em] px-3.5 py-1.5 rounded-full border border-[#ddb7ff]/20 text-[#ddb7ff] bg-[#ddb7ff]/5">
            Pricing & Engagement
          </span>
        </div>

        {/* Header Block */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Service Packages
          </h2>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            Transparent starting metrics, custom scaled to your exact transactional volume and business complexity.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20 justify-center">
          {pricingTiers.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-2xl p-8 md:p-10 relative flex flex-col justify-between transition-all duration-300 h-full mx-auto w-full max-w-md lg:max-w-none ${
                tier.highlighted
                  ? 'bg-[#0a1122] border-2 border-[#ddb7ff] shadow-[0_0_35px_rgba(221,183,255,0.12)] lg:-translate-y-2'
                  : 'bg-[#090e1a] border border-gray-800 hover:border-[#ddb7ff]/40'
              }`}
            >
              {/* Highlight Ribbon - MOST POPULAR */}
              {tier.highlighted && (
                <div className="absolute -top-3.5 right-6">
                  <span className="bg-[#ddb7ff] text-[#490080] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-sm shadow-[0_4px_12px_rgba(221,183,255,0.25)]">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div>
                {/* Header Category Tag */}
                <div className="mb-4">
                  <span className="text-[10px] font-extrabold tracking-widest text-[#ddb7ff] uppercase">
                    {tier.eyebrow}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                  {tier.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-8 h-12">
                  {tier.description}
                </p>

                {/* Divider */}
                <div className="w-full h-[1px] bg-gray-800/60 mb-8" />

                {/* Price Sub-Eyebrow */}
                <div className="mb-2">
                  <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                    {tier.subEyebrow}
                  </span>
                </div>

                {/* Large Price Block */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-[#ddb7ff] tracking-tight">
                      {tier.price}
                    </span>
                    {tier.priceSuffix && (
                      <span className="text-2xl font-black text-[#ddb7ff]">
                        {tier.priceSuffix}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400/80 mt-1 font-mono">
                    {tier.priceSubtext}
                  </p>
                </div>

                {/* Features List */}
                <div className="mb-10">
                  <ul className="space-y-4">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-300">
                        <Check size={16} className="text-[#ddb7ff] shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action CTA */}
              <div className="mt-auto">
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    const serviceSelect = document.getElementById('form-service-select') as HTMLSelectElement | null;
                    if (serviceSelect) {
                      if (tier.id === 'starter') {
                        serviceSelect.value = 'Accounting / Bookkeeping Support';
                      } else if (tier.id === 'growth') {
                        serviceSelect.value = 'Invoicing & AR';
                      } else {
                        serviceSelect.value = 'Catch-up / Clean-up';
                      }
                      const event = new Event('change', { bubbles: true });
                      serviceSelect.dispatchEvent(event);
                    }
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`w-full py-4 rounded-lg font-black text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    tier.highlighted
                      ? 'bg-[#ddb7ff] hover:brightness-110 text-[#490080] shadow-[0_4px_20px_rgba(221,183,255,0.2)] active:scale-98'
                      : 'border border-[#ddb7ff]/20 hover:border-[#ddb7ff] text-[#ddb7ff] hover:bg-[#ddb7ff]/5 active:scale-98'
                  }`}
                >
                  {tier.ctaText}
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing disclaimer / note */}
        <div className="p-6 sm:p-8 rounded-2xl border border-[#ddb7ff]/20 bg-[#ddb7ff]/5 max-w-3xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
          <div className="p-2.5 bg-[#ddb7ff]/10 rounded-xl text-[#ddb7ff] shrink-0 border border-[#ddb7ff]/20">
            <ShieldCheck size={22} />
          </div>
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-1.5">
              Custom Scaled Engagement Metrics
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Every business represents a unique transactional volume and ledger density. All hourly rates and monthly estimations are <strong>flexible, adjustable baselines</strong> tailored perfectly to your custom operational needs. We configure exact details during our initial discovery call.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
