import React from 'react';
import { Download, Play, ShieldCheck, ArrowRight, Laptop } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C62B29]/15 blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-[#00D2FF]/10 blur-[130px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Editorial Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00D2FF] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-pulse" />
              Windows 10 & 11 Native Desktop Overlay System
            </div>

            {/* Iron Rule: 2-3 line maximum, wide container */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.12] mb-6 max-w-2xl">
              Screen overlay reminders that drop from above.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-10">
              Spydomon swings down over full-screen games, code editors, and video calls the moment your timer expires. Click-through and invisible when idle.
            </p>

            {/* High-Contrast CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#downloads"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#C62B29] hover:bg-[#D93836] text-white font-semibold text-sm shadow-xl shadow-[#C62B29]/25 transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                Download Windows Setup
              </a>

              <a
                href="#simulator"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold text-sm transition-all duration-200"
              >
                <Play className="w-4 h-4 fill-white" />
                Experience Live Drop
              </a>
            </div>

            {/* Trust Points */}
            <div className="grid grid-cols-3 gap-6 pt-12 mt-8 border-t border-white/10 w-full max-w-lg">
              <div>
                <p className="font-display font-bold text-2xl text-white">0%</p>
                <p className="text-xs text-slate-400 mt-0.5">CPU overhead when idle</p>
              </div>
              <div>
                <p className="font-display font-bold text-2xl text-white">Always</p>
                <p className="text-xs text-slate-400 mt-0.5">On top of all windows</p>
              </div>
              <div>
                <p className="font-display font-bold text-2xl text-white">100%</p>
                <p className="text-xs text-slate-400 mt-0.5">Offline and private</p>
              </div>
            </div>
          </div>

          {/* Right Mascot & Interactive Card Presentation */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            {/* Hanging Spider-Man Art */}
            <div className="relative w-full max-w-sm flex flex-col items-center animate-web-swing origin-top">
              {/* Web line */}
              <div className="w-[2px] h-20 bg-gradient-to-b from-white/30 to-white shadow-[0_0_8px_#FFF]" />

              {/* Tobey Maguire Character */}
              <img
                src="/Tobey-Maguire-Spider-Man-Classic-Pose-PNG.png"
                alt="Spydomon Overlay Mascot"
                className="w-48 sm:w-56 drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)] select-none pointer-events-none"
              />

              {/* Attached Speech Bubble */}
              <div className="mt-2 w-72 rounded-xl bg-[#0F1420]/95 border border-[#C62B29]/60 p-4 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
                  <span className="font-display font-bold text-xs tracking-wider text-[#C62B29]">
                    SPYDOMON REMINDER
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">DUE NOW</span>
                </div>
                <p className="text-sm font-semibold text-white">
                  Time to drink water and check your posture.
                </p>
                <span className="block text-[10px] text-slate-400 italic mt-2">
                  Click anywhere or press ESC to retract
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

