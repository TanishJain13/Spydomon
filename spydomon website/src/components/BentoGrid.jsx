import React from 'react';
import { Layers, Volume2, Clock, MonitorPlay, Bell, Shield, Sliders } from 'lucide-react';

export default function BentoGrid() {
  return (
    <section id="features" className="py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header without cheap meta label */}
        <div className="max-w-2xl mb-16 text-left">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            Engineered for zero distraction until the exact second you need it.
          </h2>
          <p className="text-slate-400 text-base mt-4 leading-relaxed">
            Most desktop reminders hide behind active games or steal your typing focus. Spydomon uses a dual-window transparent overlay architecture that hovers without grabbing focus.
          </p>
        </div>

        {/* Gapless Bento Grid with dense flow */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 grid-flow-dense">
          {/* Card 1: Large Span (col-span-8) */}
          <div className="md:col-span-8 rounded-2xl bg-[#0F1420]/80 border border-white/10 p-8 flex flex-col justify-between group hover:border-[#C62B29]/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#C62B29]/15 border border-[#C62B29]/30 flex items-center justify-center text-[#C62B29] mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                Transparent Screen-Saver Priority Layer
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                The overlay window operates in an independent hardware-accelerated viewport positioned on top of DirectX games, virtual desktops, and multi-monitor displays. When not firing, clicks pass straight through to your apps.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Click-Through Enabled
              </span>
              <span>Screen-Saver Level Z-Index</span>
              <span>Multi-Workspace Visible</span>
            </div>
          </div>

          {/* Card 2: Small Span (col-span-4) */}
          <div className="md:col-span-4 rounded-2xl bg-[#0F1420]/80 border border-white/10 p-8 flex flex-col justify-between group hover:border-[#00D2FF]/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#00D2FF]/15 border border-[#00D2FF]/30 flex items-center justify-center text-[#00D2FF] mb-6">
                <Volume2 className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                Web Audio Synthesis
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Zero audio file dependencies. Web-slinging and dismissal sounds are generated mathematically in real time via oscillator frequencies.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-xs font-mono text-slate-400">
              Square Wave Oscillators 800Hz - 2600Hz
            </div>
          </div>

          {/* Card 3: Small Span (col-span-4) */}
          <div className="md:col-span-4 rounded-2xl bg-[#0F1420]/80 border border-white/10 p-8 flex flex-col justify-between group hover:border-[#00D2FF]/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#00D2FF]/15 border border-[#00D2FF]/30 flex items-center justify-center text-[#00D2FF] mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                Quick Preset Engine
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                One-click presets for hydration, posture alignment, eye rest, and task audits, plus decimal minute precision for custom intervals.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex gap-2">
              <span className="px-2.5 py-1 rounded bg-white/5 text-[11px] font-mono text-slate-300">5s Test</span>
              <span className="px-2.5 py-1 rounded bg-white/5 text-[11px] font-mono text-slate-300">15m Break</span>
              <span className="px-2.5 py-1 rounded bg-white/5 text-[11px] font-mono text-slate-300">1h Water</span>
            </div>
          </div>

          {/* Card 4: Large Span (col-span-8) */}
          <div className="md:col-span-8 rounded-2xl bg-[#0F1420]/80 border border-white/10 p-8 flex flex-col justify-between group hover:border-[#C62B29]/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#C62B29]/15 border border-[#C62B29]/30 flex items-center justify-center text-[#C62B29] mb-6">
                <Bell className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                System Tray Daemon & Persistence
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                Closing the control window docks Spydomon in your Windows notification tray. Active timers persist across system restarts using lightweight offline disk serialization.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
              <span>Automatic Background Ticking</span>
              <span>Local Storage No Cloud Dependency</span>
              <span>Zero Account Required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

