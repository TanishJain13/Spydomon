import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';
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
  const [hasLanded, setHasLanded] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const handleTrigger = () => {
    if (soundEnabled) {
      playWebShootSound();
    }
    setIsDropping(true);
    setHasLanded(false);

    setTimeout(() => {
      setHasLanded(true);
    }, 600);
  };

  const handleDismiss = () => {
    if (soundEnabled) {
      playDismissSound();
    }
    setIsDropping(false);
    setHasLanded(false);
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
    <section id="simulator" className="py-24 md:py-36 bg-[#06080E] relative border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-2xl mb-12 text-left">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Interactive Overlay Simulator
          </h2>
          <p className="text-slate-400 text-base mt-3 leading-relaxed">
            Test the drop physics and audio sequence right in your browser. This demonstrates the exact animation that drops onto your Windows desktop.
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
                        ? 'bg-[#C62B29]/20 border-[#C62B29] text-white'
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
              className="w-full mt-2 py-3.5 rounded-xl bg-[#C62B29] hover:bg-[#D93836] disabled:opacity-50 text-white font-semibold text-sm shadow-lg shadow-[#C62B29]/30 flex items-center justify-center gap-2 transition-all"
            >
              <Play className="w-4 h-4 fill-white" />
              Trigger Drop Animation
            </button>
          </div>

          {/* Virtual Desktop Display Stage */}
          <div className="lg:col-span-8 rounded-2xl bg-[#0B0F17] border border-white/10 p-4 sm:p-6 relative min-h-[440px] flex flex-col justify-between overflow-hidden shadow-2xl">
            {/* Virtual Screen Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="text-xs font-mono text-slate-400 ml-2">Active Workspace Simulation</span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                {isDropping ? 'OVERLAY FIRING' : 'OVERLAY STANDBY'}
              </span>
            </div>

            {/* Virtual background content to show click-through */}
            <div className="p-8 text-left opacity-30 select-none pointer-events-none">
              <p className="font-mono text-xs text-[#00D2FF] mb-2">$ spydomon --background-daemon active</p>
              <p className="font-display font-bold text-2xl text-slate-400">Your Regular Coding or Gaming Workspace</p>
              <p className="text-xs text-slate-500 mt-2 max-w-md">
                Spydomon rests transparently above all applications without interfering with keyboard input or game frames.
              </p>
            </div>

            {/* The Dropping Spider-Man Mascot Overlay */}
            {isDropping && (
              <div
                onClick={handleDismiss}
                className="absolute inset-0 cursor-pointer flex flex-col items-center z-30 transition-all duration-500 ease-out"
                style={{
                  top: hasLanded ? '0px' : '-450px',
                  opacity: hasLanded ? 1 : 0.8,
                }}
              >
                {/* Web thread connected to monitor top */}
                <div className="w-[3px] h-20 bg-gradient-to-b from-white/40 to-white shadow-[0_0_10px_#FFF]" />

                {/* Tobey Maguire Character */}
                <img
                  src="/Tobey-Maguire-Spider-Man-Classic-Pose-PNG.png"
                  alt="Dropping Spydomon"
                  className="w-40 sm:w-48 drop-shadow-[0_20px_30px_rgba(0,0,0,0.95)]"
                />

                {/* Floating Speech Bubble */}
                <div className="mt-3 w-80 rounded-xl bg-[#0F1420]/95 border-2 border-[#C62B29] p-4 shadow-2xl backdrop-blur-md">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
                    <span className="font-display font-bold text-xs tracking-wider text-[#C62B29]">
                      SPYDOMON REMINDER
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">DUE NOW</span>
                  </div>
                  <p className="text-sm font-bold text-white leading-snug">
                    {message}
                  </p>
                  <p className="text-[10px] text-slate-400 italic mt-3">
                    Click anywhere or press ESC to retract
                  </p>
                </div>
              </div>
            )}

            {/* Footer Status in Stage */}
            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Position: Primary Display (Top Bezel Anchor)</span>
              {isDropping ? (
                <button
                  onClick={handleDismiss}
                  className="text-[#C62B29] font-bold hover:underline"
                >
                  Click to Dismiss
                </button>
              ) : (
                <span>Status: Waiting for Trigger</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

