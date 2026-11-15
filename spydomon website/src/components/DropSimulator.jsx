import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Volume2, Sparkles, CheckCircle2, Shield, BellRing, MousePointerClick } from 'lucide-react';
import { playWebShootSound, playDismissSound } from '../utils/audio';

const PRESETS = [
  'Time to drink water and hydrate.',
  'Posture check! Sit straight and roll shoulders.',
  'Take a 5-minute break and rest your eyes.',
  'Review active task list before switching context.'
];

export default function DropSimulator() {
  const [message, setMessage] = useState(PRESETS[0]);
  const [isDropping, setIsDropping] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const handleTrigger = () => {
    if (soundEnabled) {
      playWebShootSound();
    }
    setIsDropping(true);
  };

  const handleDismiss = () => {
    if (soundEnabled) {
      playDismissSound();
    }
    setIsDropping(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isDropping) {
        handleDismiss();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDropping]);

  return (
    <section id="simulator" className="py-20 md:py-32 bg-[#06080E] relative border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-2xl mb-12 text-left">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Interactive Overlay Simulator
          </h2>
          <p className="text-slate-400 text-base mt-3 leading-relaxed">
            Test the drop physics, character art, and audio sequence right in your browser. This demonstrates the exact overlay that drops onto your Windows desktop.
          </p>
        </div>

        {/* Simulator Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-4 rounded-2xl bg-[#0F1420] border border-white/10 p-6 flex flex-col gap-5 text-left">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">
                Select Reminder Preset
              </label>
              <div className="flex flex-col gap-2">
                {PRESETS.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMessage(preset)}
                    className={`text-left px-3.5 py-2.5 rounded-lg text-xs font-medium border transition-colors ${
                      message === preset
                        ? 'bg-[#C62B29]/20 border-[#C62B29] text-white font-semibold'
                        : 'bg-white/[0.02] border-white/5 text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">
                Custom Message Input
              </label>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-[#C62B29]"
                placeholder="Type your reminder message..."
              />
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <span className="text-xs text-slate-400 flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-[#00D2FF]" />
                Web Audio Sound Effects
              </span>
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`px-3 py-1 rounded text-xs font-mono font-semibold transition-colors ${
                  soundEnabled ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-white/5 text-slate-400'
                }`}
              >
                {soundEnabled ? 'ENABLED' : 'MUTED'}
              </button>
            </div>

            <button
              onClick={handleTrigger}
              disabled={isDropping}
              className="w-full mt-2 py-3.5 rounded-xl bg-[#C62B29] hover:bg-[#D93836] disabled:opacity-50 text-white font-semibold text-sm shadow-lg shadow-[#C62B29]/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              Trigger Drop Animation
            </button>
          </div>

          {/* Virtual Desktop Display Stage */}
          <div className="lg:col-span-8 rounded-2xl bg-[#090D15] border border-white/10 p-4 sm:p-6 relative min-h-[580px] sm:min-h-[620px] flex flex-col justify-between overflow-hidden shadow-2xl">
            {/* Virtual Screen Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 z-10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="text-xs font-mono text-slate-400 ml-2">Windows 10/11 Active Desktop Simulation</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isDropping ? 'bg-[#C62B29] animate-ping' : 'bg-emerald-400'
                  }`}
                />
                <span
                  className={`text-xs font-mono font-bold tracking-wider ${
                    isDropping ? 'text-[#C62B29]' : 'text-slate-400'
                  }`}
                >
                  {isDropping ? 'OVERLAY ACTIVE — FIRING' : 'OVERLAY STANDBY'}
                </span>
              </div>
            </div>

            {/* Standby Desktop Watermark Viewport */}
            <div className={`p-6 sm:p-10 text-left transition-opacity duration-300 ${isDropping ? 'opacity-15 pointer-events-none' : 'opacity-100'}`}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-[#00D2FF] mb-4">
                <BellRing className="w-3 h-3" />
                spydomon.exe — daemon listening on background thread
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Your Working Desktop or Game Screen
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-lg leading-relaxed">
                Spydomon operates completely transparently and clicks-through while in standby. When your timer expires, the overlay descends from the top bezel with full hardware acceleration.
              </p>

              {!isDropping && (
                <div className="mt-8 flex items-center gap-3">
                  <button
                    onClick={handleTrigger}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#C62B29]/20 hover:bg-[#C62B29]/30 border border-[#C62B29]/50 text-white text-xs font-semibold transition-all cursor-pointer"
                  >
                    <MousePointerClick className="w-4 h-4 text-[#C62B29]" />
                    Click to Drop Mascot
                  </button>
                  <span className="text-[11px] font-mono text-slate-500">
                    or use "Trigger Drop Animation" button on the left
                  </span>
                </div>
              )}
            </div>

            {/* The Dropping Spider-Man Mascot Overlay */}
            <div
              onClick={handleDismiss}
              className={`absolute inset-x-0 top-12 bottom-12 flex flex-col items-center justify-start z-30 transition-all duration-700 ease-out cursor-pointer ${
                isDropping
                  ? 'translate-y-0 opacity-100 pointer-events-auto'
                  : '-translate-y-[120%] opacity-0 pointer-events-none'
              }`}
            >
              {/* Web thread connected to monitor top bezel */}
              <div className="w-[2.5px] h-8 sm:h-12 bg-gradient-to-b from-white/20 via-white to-white shadow-[0_0_8px_#FFF] shrink-0" />

              {/* Tobey Maguire Character */}
              <img
                src="/Tobey-Maguire-Spider-Man-Classic-Pose-PNG.png"
                alt="Dropping Spydomon"
                className="w-32 sm:w-36 drop-shadow-[0_20px_35px_rgba(0,0,0,0.98)] select-none pointer-events-none shrink-0"
              />

              {/* Attached Speech Bubble */}
              <div className="mt-2 w-full max-w-[340px] sm:max-w-[400px] rounded-xl bg-[#0F1420]/95 border-2 border-[#C62B29] p-4 shadow-2xl backdrop-blur-md text-left shrink-0">
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
                  <span className="font-display font-bold text-xs tracking-wider text-[#C62B29] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C62B29] inline-block" />
                    SPYDOMON REMINDER
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono bg-white/5 px-2 py-0.5 rounded border border-white/10">
                    DUE NOW
                  </span>
                </div>
                <p className="text-sm sm:text-base font-bold text-white leading-snug">
                  {message || 'Time to drink water and hydrate.'}
                </p>
                <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/5 text-[10px] text-slate-400">
                  <span className="italic">Click anywhere or press ESC to retract</span>
                  <span className="font-mono text-[#00D2FF]">Dismiss ✕</span>
                </div>
              </div>
            </div>

            {/* Footer Status in Stage */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400 z-10">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
                Anchor: Primary Display (Top Center Bezel)
              </span>
              {isDropping ? (
                <button
                  onClick={handleDismiss}
                  className="text-[#C62B29] font-bold hover:underline cursor-pointer flex items-center gap-1"
                >
                  Click to Retract Mascot
                </button>
              ) : (
                <span className="text-slate-500">Status: Waiting for Trigger</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
