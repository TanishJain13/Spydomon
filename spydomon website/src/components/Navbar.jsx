import React, { useState } from 'react';
import { Download, Github, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 py-3.5 backdrop-blur-md bg-[#05070B]/85 border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Spydomon Icon"
            className="w-8 h-8 rounded-md border border-white/10 shadow-sm transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col text-left">
            <span className="font-display font-bold text-sm tracking-widest text-white">
              SPYDOMON
            </span>
            <span className="text-[9px] tracking-widest text-slate-400 font-mono -mt-0.5">
              by tanishjain13
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">
            Architecture
          </a>
          <a href="#simulator" className="hover:text-white transition-colors">
            3D Simulator
          </a>
          <a href="#downloads" className="hover:text-white transition-colors">
            Releases
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/TanishJain13/Spydomon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-md bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 border border-white/10 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
          <a
            href="#downloads"
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono font-semibold rounded-md bg-[#E62429] hover:bg-[#C62B29] text-white shadow-sm transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            Get Windows App
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-slate-300 hover:text-white p-1.5"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden mt-3 pb-4 border-t border-white/10 flex flex-col gap-2 px-2 pt-3 text-left font-mono text-xs">
          <a
            href="#features"
            onClick={() => setMobileOpen(false)}
            className="px-3 py-2 text-slate-200 hover:bg-white/5 rounded"
          >
            Architecture
          </a>
          <a
            href="#simulator"
            onClick={() => setMobileOpen(false)}
            className="px-3 py-2 text-slate-200 hover:bg-white/5 rounded"
          >
            3D Simulator
          </a>
          <a
            href="#downloads"
            onClick={() => setMobileOpen(false)}
            className="px-3 py-2 text-slate-200 hover:bg-white/5 rounded"
          >
            Releases
          </a>
          <div className="flex gap-2 pt-2 border-t border-white/5 mt-1">
            <a
              href="https://github.com/TanishJain13/Spydomon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 text-center rounded bg-white/5 border border-white/10 text-slate-200"
            >
              GitHub
            </a>
            <a
              href="#downloads"
              onClick={() => setMobileOpen(false)}
              className="flex-1 py-2 text-center rounded bg-[#E62429] text-white font-semibold"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
