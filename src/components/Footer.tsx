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
          <img
            alt="Pauline Lucena Logo"
            className="h-8 w-8 grayscale contrast-125 brightness-150 group-hover:scale-105 transition-transform duration-200"
            src="https://lh3.googleusercontent.com/aida/AP1WRLtp21sku3BF3pu9-wyo6oN2oRnshH6MztvC8HyuLrHVXIl650UsgoyVVOQKDB2x_Tg2Gb1Yx_khLgILx20j0Cwci2roVYeeIhxumWTfkfDrO9C3LZ0jTIljxSnjD7AiLsgel217dRjLGub7gaw60G-JwYeXuxHpbZqPTkGDl49LLKhD-NGRbKLUoBAeYJQqtLERMgtjincACPpbmp_cdw-xoNDuOzqiWl-X4WhXmhvBj4aOggkAI7BJ-1A"
          />
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
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#ddb7ff] underline underline-offset-4 decoration-[#4d4354] hover:decoration-[#ddb7ff] transition-all"
          >
            Instagram
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
