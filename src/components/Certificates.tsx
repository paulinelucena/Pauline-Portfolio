import React, { useEffect, useRef } from 'react';
import { ExternalLink, ShieldCheck, BadgeCheck } from 'lucide-react';

export default function Certificates() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let W = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let H = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (canvas && canvas.parentElement) {
        W = canvas.width = canvas.parentElement.clientWidth;
        H = canvas.height = canvas.parentElement.clientHeight;
      }
    };
    window.addEventListener('resize', handleResize);

    const symbols = [
      '$', '₱', 'Σ', '%', '+', '-', '＝', 'DR', 'CR', 
      '0.00', '1040', 'Balance', 'Tax', 'ROI', 'Ledger', 
      'Audit', 'Equity', 'Assets', 'Profit', 'Debit', 'Credit'
    ];

    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      text: symbols[Math.floor(Math.random() * symbols.length)],
      size: Math.random() * 11 + 9, // Font sizes from 9px to 20px
      speed: Math.random() * 0.35 + 0.1, // Floating speed upwards
      opacity: Math.random() * 0.10 + 0.03, // Soft subtle opacity
      rotation: (Math.random() - 0.5) * 0.3,
      rotSpeed: (Math.random() - 0.5) * 0.004
    }));

    const render = () => {
      ctx.clearRect(0, 0, W, H);

      // Faint bookkeeping ledger lines in the background
      ctx.strokeStyle = 'rgba(192, 132, 252, 0.015)'; // Subtle purple vertical ledger dividers
      ctx.lineWidth = 1;
      for (let x = 80; x < W; x += 220) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 60; y < H; y += 110) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }

      // Draw floating accounting/bookkeeping elements
      particles.forEach(p => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.font = `600 ${p.size}px 'JetBrains Mono', monospace`;
        ctx.fillStyle = `rgba(192, 132, 252, ${p.opacity})`;
        ctx.fillText(p.text, -ctx.measureText(p.text).width / 2, p.size / 2);
        ctx.restore();

        // Float upwards
        p.y -= p.speed;
        p.rotation += p.rotSpeed;
        if (p.y < -30) {
          p.y = H + 30;
          p.x = Math.random() * W;
          p.opacity = Math.random() * 0.10 + 0.03;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleLaunchVault = () => {
    window.open('certificates.html', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-[#0a0715]">
      {/* Absolute ambient lights */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#ddb7ff]/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-[#842bd2]/5 rounded-full filter blur-[100px] pointer-events-none" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ddb7ff]/20 bg-[#ddb7ff]/5 text-xs font-semibold text-[#ddb7ff] uppercase tracking-[3px] mb-6">
            <ShieldCheck size={14} className="text-[#ddb7ff] animate-pulse" />
            <span>Secure Vault Entry</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#dae2fd] uppercase tracking-tight mb-4">
            Certificates & <br />Some Achievements
          </h2>
          
          <p className="text-[#cfc2d6] text-sm md:text-base max-w-xl leading-relaxed">
            Access 10 verified professional credentials including Intuit QuickBooks ProAdvisor and TESDA Bookkeeping Modules managed inside our standalone secure digital vault.
          </p>
        </div>

        {/* Central Entrance Gateway Card */}
        <div 
          onClick={handleLaunchVault}
          className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#4d4354] bg-[#110729]/60 p-8 md:p-12 transition-all duration-300 hover:border-[#ddb7ff]/40 hover:bg-[#190c3a]/70 hover:shadow-[0_20px_50px_-10px_rgba(168,85,247,0.25)]"
        >
          {/* Top Line accent */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#ddb7ff] to-[#9333ea]" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between text-left">
            <div className="space-y-4 max-w-lg">
              <div className="flex items-center gap-2 text-xs font-mono text-[#ddb7ff]/80">
                <BadgeCheck size={16} className="text-[#ddb7ff]" />
                <span>10 AUTHENTICATED CREDENTIALS ONLINE</span>
              </div>
              <h3 className="text-2xl font-bold font-sans text-[#dae2fd] group-hover:text-white transition-colors">
                Launch Credentials Vault
              </h3>
              <p className="text-xs text-[#cfc2d6]/70 leading-relaxed font-sans">
                Browse our beautifully structured directory of verified accomplishments. It will launch in a secure new browser tab where you can click on each individual module certificate to inspect core competencies, learning outcomes, and verification hashes.
              </p>
            </div>
            
            <div className="shrink-0">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#ddb7ff]/5 text-[#ddb7ff] border border-[#ddb7ff]/20 shadow-[0_0_20px_rgba(221,183,255,0.1)] group-hover:scale-105 group-hover:bg-[#ddb7ff] group-hover:text-[#490080] transition-all duration-300">
                <ExternalLink size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom micro security indicator */}
        <div className="mt-8 flex items-center justify-center gap-1.5 text-[10px] font-mono text-[#cfc2d6]/40 uppercase tracking-[2px]">
          <span>STATUS: SHA-256 DIGITAL LEDGER ONLINE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        </div>
      </div>
    </section>
  );
}
