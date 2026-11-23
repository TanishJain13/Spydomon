import React from 'react';
import { Download, Monitor, Archive, Terminal, CheckCircle2 } from 'lucide-react';

export default function Downloads() {
  return (
    <section id="downloads" className="py-24 md:py-36 bg-[#05070B] border-t border-white/[0.07] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-2xl mb-16 text-left">
          <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight">
            Download Spydomon for Windows
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Free, open-source, and 100% offline. Built natively for Windows 10 and Windows 11 (64-bit).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
          {/* Windows Installer Card */}
          <div className="rounded-lg bg-[#0A0E17] border border-[#E62429]/60 p-8 flex flex-col justify-between relative shadow-lg shadow-[#E62429]/5">
            <div className="absolute top-4 right-4 px-2 py-0.5 rounded bg-[#E62429]/20 border border-[#E62429]/40 text-[10px] font-mono font-bold text-[#E62429] uppercase tracking-wider">
              Recommended
            </div>

            <div>
              <div className="w-10 h-10 rounded-md bg-[#E62429]/15 border border-[#E62429]/30 flex items-center justify-center text-[#E62429] mb-5">
                <Monitor className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Windows Setup (.exe)
              </h3>
              <p className="font-sans text-xs text-slate-300 leading-relaxed mb-6">
                Full NSIS Windows installer with Start Menu shortcuts, system tray autostart support, and background persistence.
              </p>

              <ul className="space-y-2 text-xs font-mono text-slate-300 mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
                  Windows 10 & 11 (x64) compatible
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
                  Always-on-top transparent overlay
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
                  System tray minimization & auto-launch
                </li>
              </ul>
            </div>

            <a
              href="https://github.com/TanishJain13/Spydomon/releases/download/v1.0.0/Spydomon-Setup.exe"
              download
              className="w-full py-3 rounded-md bg-[#E62429] hover:bg-[#C62B29] text-white font-mono font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              Download Installer (79 MB)
            </a>
          </div>

          {/* Windows Portable Card */}
          <div className="rounded-lg bg-[#0A0E17] border border-white/[0.08] p-8 flex flex-col justify-between relative hover:border-white/[0.16] transition-colors">
            <div className="absolute top-4 right-4 px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
              Standalone
            </div>

            <div>
              <div className="w-10 h-10 rounded-md bg-[#00D2FF]/15 border border-[#00D2FF]/30 flex items-center justify-center text-[#00D2FF] mb-5">
                <Archive className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Windows Portable (.zip)
              </h3>
              <p className="font-sans text-xs text-slate-300 leading-relaxed mb-6">
                Zero-installation standalone package. Extract to any directory or run directly from a USB drive without administrator privileges.
              </p>

              <ul className="space-y-2 text-xs font-mono text-slate-300 mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  No administrator privileges required
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  Self-contained local profile storage
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  Clean removal — simply delete folder
                </li>
              </ul>
            </div>

            <a
              href="https://github.com/TanishJain13/Spydomon/releases/download/v1.0.0/Spydomon-Portable.zip"
              download
              className="w-full py-3 rounded-md bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-mono font-semibold text-xs flex items-center justify-center gap-2 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              Download Portable ZIP (81 MB)
            </a>
          </div>
        </div>

        {/* Developer CLI box */}
        <div className="mt-10 max-w-4xl mx-auto rounded-md bg-[#020408] border border-white/[0.06] p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 text-left">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>Developer build:</span>
            <code className="text-[#00D2FF]">git clone https://github.com/TanishJain13/Spydomon.git && npm install && npm start</code>
          </div>
          <span className="text-[10px] text-slate-500 font-mono">Node.js 18+ on Windows</span>
        </div>
      </div>
    </section>
  );
}
