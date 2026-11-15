import React from 'react';
import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#080B11] text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Spydomon" className="w-6 h-6 rounded" />
          <span className="font-display font-semibold text-sm text-white">SPYDOMON</span>
          <span className="text-slate-400">by TanishJain13</span>
        </div>

        <p className="text-center sm:text-left">
          Free and open source. Built for productivity and focus.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/TanishJain13/Spydomon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub Repository
          </a>
        </div>
      </div>
    </footer>
  );
}

