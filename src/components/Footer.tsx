import { Heart } from 'lucide-react';

interface FooterProps {
  onSecretUnlock?: () => void;
}

export default function Footer({ onSecretUnlock }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060e20] border-t border-[#4d4354]/60 w-full py-12 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 max-w-7xl mx-auto gap-8 text-center md:text-left">
        {/* Branding & Logo with secret double-click toggle */}
        <div 
          onDoubleClick={onSecretUnlock}
          className="flex items-center gap-3 select-none cursor-pointer group"
          title="Pauline Lucena"
        >
          <svg 
            viewBox="0 0 100 100" 
            className="h-8 w-8 transition-transform duration-200 group-hover:scale-105"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="44" fill="rgba(168, 85, 247, 0.04)" />
            <path 
              d="M 30 76 L 30 26 C 30 18, 38 12, 48 12 L 58 12 C 72 12, 80 20, 80 32 C 80 44, 72 52, 58 52 L 30 52" 
              stroke="#c084fc" 
              strokeWidth="11" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M 54 52 L 54 70 C 54 76, 60 81, 68 81 L 80 81" 
              stroke="#c084fc" 
              strokeWidth="11" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-bold text-lg text-[#dae2fd] tracking-tight group-hover:text-[#ddb7ff] transition-colors">
            Pauline Lucena
          </span>
        </div>

        {/* Rights Detail */}
        <div className="flex flex-col gap-1 items-center md:items-start text-xs sm:text-sm text-[#cfc2d6]/60 font-normal">
          <p>© {currentYear} Pauline Lucena. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Precision virtual finance &amp; executive assistant services.
          </p>
        </div>

        {/* Action Quicklinks */}
        <div className="flex items-center gap-6 text-sm text-[#cfc2d6] font-medium">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#ddb7ff] underline underline-offset-4 decoration-[#4d4354] hover:decoration-[#ddb7ff] transition-all"
          >
            LinkedIn
          </a>
          <a
            href="https://wa.me/qr/NZFGQQNZY3GNC1"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#ddb7ff] underline underline-offset-4 decoration-[#4d4354] hover:decoration-[#ddb7ff] transition-all"
          >
            WhatsApp
          </a>
          <a
            href="mailto:paulinelucena27@gmail.com"
            className="hover:text-[#ddb7ff] underline underline-offset-4 decoration-[#4d4354] hover:decoration-[#ddb7ff] transition-all"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
