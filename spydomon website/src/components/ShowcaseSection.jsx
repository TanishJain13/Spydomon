import React from 'react';
import { Monitor, Sparkles, Check, Shield } from 'lucide-react';

export default function ShowcaseSection() {
  return (
    <section id="showcase" className="py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-2xl mb-12 text-left">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Designed for Clean Battlestations and Dual Displays
          </h2>
          <p className="text-slate-400 text-base mt-3 leading-relaxed">
            Whether you use a curved ultrawide gaming display or a multi-monitor developer setup, Spydomon integrates without cluttering your desktop.
          </p>
        </div>

        {/* Showcase Image Frame */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B0F17] group">
          <img
            src="/showcase.jpg"
            alt="Spydomon Battlestation Showcase by TanishJain13"
            className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B11]/80 via-transparent to-transparent pointer-events-none" />

          {/* Overlay Pill Callout */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#080B11]/85 backdrop-blur-md border border-white/10">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-lg shadow-md" />
              <div>
                <p className="font-display font-bold text-sm text-white">Spydomon Desktop Production Build</p>
                <p className="text-xs text-slate-400">Created by TanishJain13 for Windows 10 & 11</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5 text-[#00D2FF]">
                <Check className="w-4 h-4" /> Ultrawide Ready
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Check className="w-4 h-4" /> Tray Docking
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

