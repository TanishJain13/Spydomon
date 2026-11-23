import React, { useState } from 'react';
import { Download, Play, Terminal, ArrowRight, ShieldCheck } from 'lucide-react';
import Scene3D from './Scene3D';
import { playWebShootSound, playDismissSound } from '../utils/audio';

export default function Hero() {
  const [droppingIn3D, setDroppingIn3D] = useState(false);

  const handle3DDrop = () => {
    playWebShootSound();
    setDroppingIn3D(true);
  };

  const handle3DDismiss = () => {
    playDismissSound();
    setDroppingIn3D(false);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-28 overflow-hidden bg-[#05070B]">
      {/* Subtle Ambient Radial Light (warm depth, opacity < 0.04) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E62429]/10 blur-[140px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[250px] bg-[#00D2FF]/5 blur-[150px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Editorial Left Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* System Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#00D2FF] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-pulse" />
              Windows 10 / 11 Native Overlay System
            </div>

            {/* Editorial Serif & Sans Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] mb-6 max-w-xl">
              Screen overlay reminders that <span className="italic font-normal text-[#E62429]">descend</span> from above.
            </h1>

            <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg mb-8">
              Spydomon operates an always-on-top, click-through desktop overlay for Windows. When your timer strikes, Spider-Man drops down in his classic upside-down pose over full-screen games, editors, and video calls.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-10">
              <a
                href="#downloads"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#E62429] hover:bg-[#C62B29] text-white font-mono font-semibold text-xs transition-all shadow-sm active:scale-[0.98]"
              >
                <Download className="w-3.5 h-3.5" />
                Download Windows Setup (.exe)
              </a>

              <button
                onClick={droppingIn3D ? handle3DDismiss : handle3DDrop}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 font-mono text-xs transition-colors cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                {droppingIn3D ? 'Reset 3D Stage' : 'Trigger 3D Drop'}
              </button>
            </div>

            {/* Minimalist Micro-Specs Bar with <kbd> */}
            <div className="pt-6 border-t border-white/[0.07] w-full max-w-lg flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-200 font-semibold">0% CPU</span>
                <span>idle daemon</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>Dismiss:</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/10 text-[10px] text-slate-200">
                  ESC
                </kbd>
                <span>or click</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-slate-200">100% Offline</span>
              </div>
            </div>
          </div>

          {/* Interactive 3D WebGL Viewport Right Column */}
          <div className="lg:col-span-6 relative rounded-xl border border-white/[0.08] bg-[#070A10] shadow-2xl overflow-hidden group">
            {/* 3D WebGL Canvas */}
            <Scene3D
              isDropping={droppingIn3D}
              onDropComplete={() => setDroppingIn3D(true)}
              onDismiss={handle3DDismiss}
            />

            {/* Quick interactive overlay message bubble when dropped in 3D */}
            {droppingIn3D && (
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-[#0F1420]/95 border border-[#E62429] shadow-xl backdrop-blur-md text-left z-30 animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                  <span className="font-display font-bold text-xs text-[#E62429] tracking-wider">
                    SPYDOMON OVERLAY ACTIVE
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-1.5 py-0.5 rounded">
                    3D VIEWPORT
                  </span>
                </div>
                <p className="text-sm font-semibold text-white">
                  Time to drink water and check your posture.
                </p>
                <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Click stage or button above to retract</span>
                  <button
                    onClick={handle3DDismiss}
                    className="text-[#E62429] hover:underline"
                  >
                    Dismiss ✕
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
