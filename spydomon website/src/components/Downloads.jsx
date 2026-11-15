import React from 'react';
import { Download, Monitor, Archive, Terminal, CheckCircle2 } from 'lucide-react';

export default function Downloads() {
  return (
    <section id="downloads" className="py-24 md:py-36 bg-[#06080E] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-2xl mb-16 text-left">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Download Spydomon for Windows
          </h2>
          <p className="text-slate-400 text-base mt-3 leading-relaxed">
            Free, open-source, and 100% offline. Built natively for Windows 10 and Windows 11.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Windows Installer Card */}
          <div className="rounded-2xl bg-[#0F1420] border-2 border-[#C62B29]/60 p-8 flex flex-col justify-between text-left relative shadow-xl shadow-[#C62B29]/10">
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded bg-[#C62B29]/20 border border-[#C62B29]/40 text-[10px] font-mono font-bold text-[#C62B29] uppercase tracking-wider">
              Recommended
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-[#C62B29]/15 border border-[#C62B29]/30 flex items-center justify-center text-[#C62B29] mb-6">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Windows Setup (.exe)
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Full NSIS Windows installer with Start Menu shortcuts, system tray autostart support, and background persistence.
              </p>

              <ul className="space-y-2.5 text-xs text-slate-300 mb-8 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
                  Supports Windows 10 and Windows 11 (x64)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
                  Transparent overlay with hardware acceleration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
                  System tray minimization and auto-launch
                </li>
              </ul>
            </div>

            <a
              href="https://github.com/TanishJain13/Spydomon/releases/download/v1.0.0/Spydomon-Setup.exe"
              download
              className="w-full py-3.5 rounded-xl bg-[#C62B29] hover:bg-[#D93836] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#C62B29]/25 transition-all"
            >
              <Download className="w-4 h-4" />
              Download Windows Installer (79 MB)
            </a>
          </div>

          {/* Windows Portable Card */}
          <div className="rounded-2xl bg-[#0F1420] border border-white/10 p-8 flex flex-col justify-between text-left relative hover:border-[#00D2FF]/40 transition-colors">
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
              Standalone
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-[#00D2FF]/15 border border-[#00D2FF]/30 flex items-center justify-center text-[#00D2FF] mb-6">
                <Archive className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Windows Portable (.zip)
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Zero-installation standalone package. Extract to any directory or run directly from a USB drive without admin privileges.
              </p>

              <ul className="space-y-2.5 text-xs text-slate-300 mb-8 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
                  No administrator privileges required
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
                  Self-contained local JSON profile storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
                  Clean removal — just delete the folder
                </li>
              </ul>
            </div>

            <a
              href="https://github.com/TanishJain13/Spydomon/releases/download/v1.0.0/Spydomon-Portable.zip"
              download
              className="w-full py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all"
            >
              <Download className="w-4 h-4" />
              Download Portable ZIP (81 MB)
            </a>
          </div>
        </div>

        {/* Developer CLI box */}
        <div className="mt-12 max-w-4xl mx-auto rounded-xl bg-black/50 border border-white/5 p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-slate-400" />
            <span>Developer build from source:</span>
            <code className="text-[#00D2FF]">git clone https://github.com/TanishJain13/Spydomon.git && npm install && npm start</code>
          </div>
          <span className="text-[11px] text-slate-400 font-sans">Node.js 18+ required (Windows)</span>
        </div>
      </div>
    </section>
  );
}
