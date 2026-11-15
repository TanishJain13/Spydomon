import React, { useState } from 'react';
import { Download, Github, Menu, X, ShieldAlert } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 py-4 backdrop-blur-md bg-[#080B11]/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Spydomon"
            className="w-10 h-10 rounded-lg shadow-lg shadow-[#C62B29]/20 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg tracking-wider text-white flex items-center gap-1.5">
              SPYDOMON
            </span>
            <span className="text-[10px] tracking-widest text-[#00D2FF] font-mono -mt-1">
              BY TanishJain13
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#simulator" className="hover:text-white transition-colors">Live Simulator</a>
          <a href="#showcase" className="hover:text-white transition-colors">Showcase</a>
          <a href="#downloads" className="hover:text-white transition-colors">Downloads</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/TanishJain13/Spydomon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="#downloads"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-[#C62B29] hover:bg-[#D93836] text-white shadow-md shadow-[#C62B29]/30 transition-all duration-200"
          >
            <Download className="w-4 h-4" />
            Download
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-white/10 flex flex-col gap-3 px-2 pt-3">
          <a
            href="#features"
            onClick={() => setMobileOpen(false)}
            className="px-3 py-2 text-sm text-slate-200 hover:bg-white/5 rounded-md"
          >
            Features
          </a>
          <a
            href="#simulator"
            onClick={() => setMobileOpen(false)}
            className="px-3 py-2 text-sm text-slate-200 hover:bg-white/5 rounded-md"
          >
            Live Simulator
          </a>
          <a
            href="#showcase"
            onClick={() => setMobileOpen(false)}
            className="px-3 py-2 text-sm text-slate-200 hover:bg-white/5 rounded-md"
          >
            Showcase
          </a>
          <a
            href="#downloads"
            onClick={() => setMobileOpen(false)}
            className="px-3 py-2 text-sm text-slate-200 hover:bg-white/5 rounded-md"
          >
            Downloads
          </a>
          <div className="flex gap-2 pt-2">
            <a
              href="https://github.com/TanishJain13/Spydomon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-lg bg-white/5 text-white border border-white/10"
            >
              <Github className="w-4 h-4" />
              Source
            </a>
            <a
              href="#downloads"
              onClick={() => setMobileOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-lg bg-[#C62B29] text-white"
            >
              <Download className="w-4 h-4" />
              Install
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

