import { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';

interface HeaderProps {
  onAdminToggle?: () => void;
  showAdminBtn?: boolean;
  onSecretUnlock?: () => void;
}

export default function Header({ onAdminToggle, showAdminBtn, onSecretUnlock }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="top-navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'h-16 bg-[#0b1326]/90 backdrop-blur-md border-[#4d4354]'
          : 'h-20 bg-[#0b1326]/40 backdrop-blur-sm border-transparent'
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 max-w-7xl mx-auto h-full">
        {/* Logo and Branding with secret double-click toggle */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          onDoubleClick={onSecretUnlock}
          className="flex items-center gap-3 group cursor-pointer select-none"
          title="Pauline Lucena"
        >
          <svg 
            viewBox="0 0 100 100" 
            className="h-10 w-10 transition-transform duration-300 group-hover:scale-105"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Accent Circle */}
            <circle cx="50" cy="50" r="44" fill="rgba(168, 85, 247, 0.04)" />
            {/* Precise vector path for the stylized P */}
            <path 
              d="M 30 76 L 30 26 C 30 18, 38 12, 48 12 L 58 12 C 72 12, 80 20, 80 32 C 80 44, 72 52, 58 52 L 30 52" 
              stroke="#c084fc" 
              strokeWidth="11" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            {/* Precise vector path for the stylized L */}
            <path 
              d="M 54 52 L 54 70 C 54 76, 60 81, 68 81 L 80 81" 
              stroke="#c084fc" 
              strokeWidth="11" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-bold text-xl md:text-2xl text-[#dae2fd] tracking-tight group-hover:text-[#ddb7ff] transition-colors">
            Pauline Lucena
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-sm font-medium text-[#cfc2d6] hover:text-[#ddb7ff] transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#services"
            className="text-sm font-medium text-[#cfc2d6] hover:text-[#ddb7ff] transition-colors duration-200"
          >
            Services
          </a>
          <a
            href="#toolkit"
            className="text-sm font-medium text-[#cfc2d6] hover:text-[#ddb7ff] transition-colors duration-200"
          >
            Tools
          </a>
          <a
            href="certificates.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#cfc2d6] hover:text-[#ddb7ff] transition-colors duration-200"
          >
            Certificates
          </a>

          {showAdminBtn && (
            <button
              onClick={onAdminToggle}
              className="text-sm font-medium text-[#cfc2d6] hover:text-[#ddb7ff] transition-colors duration-200 mr-2"
              id="admin-dashboard-btn"
            >
              Inquiries Portal
            </button>
          )}

          <a
            href="#contact"
            id="lets-chat-desktop-btn"
            className="bg-[#ddb7ff] text-[#490080] px-6 py-2.5 rounded-lg font-bold hover:brightness-110 active:scale-95 transition-all text-sm flex items-center gap-1.5 shadow-[0_0_20px_rgba(221,183,255,0.15)]"
          >
            <MessageSquare size={16} />
            Let's Chat
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#dae2fd] p-2 hover:bg-[#171f33]/60 rounded-lg transition-colors"
          id="mobile-menu-toggle-btn"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          id="mobile-dropdown-menu"
          className="absolute top-full left-0 right-0 bg-[#0b1326] border-b border-[#4d4354] px-6 py-8 flex flex-col gap-6 md:hidden animate-in fade-in slide-in-from-top-5 duration-200"
        >
          <a
            href="#about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-[#cfc2d6] hover:text-[#ddb7ff] pb-2 border-b border-[#171f33]"
          >
            About
          </a>
          <a
            href="#services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-[#cfc2d6] hover:text-[#ddb7ff] pb-2 border-b border-[#171f33]"
          >
            Services
          </a>
          <a
            href="#toolkit"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-[#cfc2d6] hover:text-[#ddb7ff] pb-2 border-b border-[#171f33]"
          >
            Tools
          </a>
          <a
            href="certificates.html"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-[#cfc2d6] hover:text-[#ddb7ff] pb-2 border-b border-[#171f33]"
          >
            Certificates
          </a>

          {showAdminBtn && (
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onAdminToggle?.();
              }}
              className="text-left text-lg font-medium text-[#cfc2d6] hover:text-[#ddb7ff] pb-2 border-b border-[#171f33]"
            >
              Inquiries Portal
            </button>
          )}

          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-[#ddb7ff] text-[#490080] py-3.5 rounded-lg font-bold text-center hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare size={18} />
            Let's Chat
          </a>
        </div>
      )}
    </nav>
  );
}
