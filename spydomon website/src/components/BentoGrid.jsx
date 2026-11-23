import React from 'react';
import { Layers, Volume2, HardDrive, Cpu, Terminal, ArrowUpRight } from 'lucide-react';

export default function BentoGrid() {
  return (
    <section id="features" className="py-24 md:py-36 relative bg-[#05070B] border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header without cheap AI labels */}
        <div className="max-w-2xl mb-16 text-left">
          <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            Engineered for zero distraction until the exact second you need it.
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Most desktop reminders hide behind active games or steal your typing focus. Spydomon uses a dual-window transparent overlay architecture that hovers without grabbing keyboard focus.
          </p>
        </div>

        {/* Bento Grid with 1px Crisp Borders */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 text-left">
          {/* Card 1: Dual-Window IPC Architecture (col-span-7) */}
          <div className="md:col-span-7 rounded-lg bg-[#0A0E17] border border-white/[0.08] p-7 sm:p-9 flex flex-col justify-between hover:border-white/[0.16] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#00D2FF] tracking-wider uppercase">
                  Architecture 01 • IPC Pipeline
                </span>
                <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[10px] font-mono text-slate-400">
                  Electron 31
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                Dual-Window Isolated Process Model
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                A lightweight control process handles timer scheduling and system tray docking, while a dedicated fullscreen transparent viewport handles the Spider-Man descent animation. ContextBridge ensures zero DOM leakage.
              </p>

              {/* Technical Pipeline Diagram */}
              <div className="rounded border border-white/[0.08] bg-[#05070B] p-4 font-mono text-xs space-y-2 text-slate-400">
                <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/5">
                  <span className="text-slate-200">control-panel.js</span>
                  <span className="text-emerald-400">IPC Bridge</span>
                  <span className="text-slate-200">overlay.js</span>
                </div>
                <div className="text-[11px] text-slate-500">
                  <code>ipcRenderer.send('trigger-drop') &rarr; BrowserWindow.setIgnoreMouseEvents(true)</code>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Click-Through Layering
              </span>
              <span>Hardware Accelerated</span>
            </div>
          </div>

          {/* Card 2: Web Audio Synthesis (col-span-5) */}
          <div className="md:col-span-5 rounded-lg bg-[#0A0E17] border border-white/[0.08] p-7 sm:p-9 flex flex-col justify-between hover:border-white/[0.16] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#E62429] tracking-wider uppercase">
                  Audio Engine 02
                </span>
                <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[10px] font-mono text-slate-400">
                  Zero MP3s
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                Procedural Web Audio Synthesis
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Web-shoot and dismissal acoustics are mathematically generated in real time using square-wave oscillators and exponential frequency decay.
              </p>

              {/* Synthesizer Spec */}
              <div className="rounded border border-white/[0.08] bg-[#05070B] p-4 font-mono text-xs text-slate-300 space-y-1.5">
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-400">Shoot Frequency:</span>
                  <span className="text-[#00D2FF]">800 Hz &rarr; 2400 Hz</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-400">Retract Wave:</span>
                  <span className="text-[#E62429]">Exponential Gain Ramp</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/[0.06] text-xs font-mono text-slate-400">
              0 KB external sound assets loaded
            </div>
          </div>

          {/* Card 3: Offline Persistence & Tray (col-span-5) */}
          <div className="md:col-span-5 rounded-lg bg-[#0A0E17] border border-white/[0.08] p-7 sm:p-9 flex flex-col justify-between hover:border-white/[0.16] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-slate-400 tracking-wider uppercase">
                  Storage & Daemon
                </span>
                <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[10px] font-mono text-slate-400">
                  Local JSON
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                Zero Cloud, Full Privacy
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Reminders and interval configurations are stored directly in your local Windows app data directory. No accounts, no analytics, no external servers.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-white/[0.06] text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>%APPDATA%/Spydomon</span>
              <span className="text-slate-200">100% Private</span>
            </div>
          </div>

          {/* Card 4: Keyboard & Screen-Saver Priority (col-span-7) */}
          <div className="md:col-span-7 rounded-lg bg-[#0A0E17] border border-white/[0.08] p-7 sm:p-9 flex flex-col justify-between hover:border-white/[0.16] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#00D2FF] tracking-wider uppercase">
                  Window Controls
                </span>
                <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[10px] font-mono text-slate-400">
                  Global Shortcuts
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                Instant Retraction with Physical Keystrokes
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Dismiss reminders instantly by tapping <kbd className="px-2 py-0.5 rounded bg-white/[0.08] border border-white/10 text-white font-mono text-xs">ESC</kbd> or clicking anywhere on the screen. The overlay retracts and restores mouse events immediately.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3 rounded bg-[#05070B] border border-white/[0.06]">
                  <p className="text-[10px] text-slate-400">Quick Test</p>
                  <p className="text-slate-200 font-semibold mt-1">5s Timer</p>
                </div>
                <div className="p-3 rounded bg-[#05070B] border border-white/[0.06]">
                  <p className="text-[10px] text-slate-400">Hydration</p>
                  <p className="text-slate-200 font-semibold mt-1">45m Preset</p>
                </div>
                <div className="p-3 rounded bg-[#05070B] border border-white/[0.06] col-span-2 sm:col-span-1">
                  <p className="text-[10px] text-slate-400">Posture Check</p>
                  <p className="text-slate-200 font-semibold mt-1">30m Interval</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/[0.06] text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>Tray Autostart Supported</span>
              <span className="text-[#00D2FF]">Windows 10/11 x64</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
