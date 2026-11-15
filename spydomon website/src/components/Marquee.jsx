import React from 'react';
import { ShieldCheck, Cpu, Volume2, Layers, HardDrive, Zap, Monitor, BellRing } from 'lucide-react';

const badges = [
  { icon: Monitor, label: 'Windows Always-On-Top' },
  { icon: BellRing, label: 'System Tray Daemon' },
  { icon: Volume2, label: 'Native Web Audio Engine' },
  { icon: Layers, label: 'Click-Through When Idle' },
  { icon: HardDrive, label: 'Zero Telemetry Storage' },
  { icon: Cpu, label: 'Electron 31 Architecture' },
  { icon: ShieldCheck, label: 'Permission Isolated IPC' },
  { icon: Zap, label: 'Instant Retraction Logic' },
];

export default function Marquee() {
  return (
    <div className="py-6 border-y border-white/5 bg-[#0A0E17]/60 overflow-hidden relative">
      <div className="flex gap-8 whitespace-nowrap animate-marquee">
        {[...badges, ...badges].map((badge, idx) => {
          const Icon = badge.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/5 text-xs font-mono text-slate-300"
            >
              <Icon className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>{badge.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

