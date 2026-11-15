// Web Audio API sound synthesis for interactive drop effects
let sharedCtx = null;

function getAudioContext() {
  if (!sharedCtx && typeof window !== 'undefined') {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      sharedCtx = new AudioCtx();
    }
  }
  return sharedCtx;
}

function beep(freq, durationMs, startAt) {
  const ctx = getAudioContext();
  if (!ctx) return;
  if (ctx.state === 'suspended') {
    ctx.resume();
  }
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'square';
  osc.frequency.value = freq;
  gain.gain.value = 0.04;
  osc.connect(gain);
  gain.connect(ctx.destination);
  const start = ctx.currentTime + startAt;
  const dur = durationMs / 1000;
  gain.gain.setValueAtTime(0.05, start);
  gain.gain.exponentialRampToValueAtTime(0.001, start + dur);
  osc.start(start);
  osc.stop(start + dur + 0.01);
}

export function playWebShootSound() {
  try {
    let t = 0;
    for (let freq = 800; freq < 2400; freq += 200) {
      beep(freq, 15, t);
      t += 0.017;
    }
    beep(1800, 80, t);
    t += 0.09;
    beep(2600, 120, t);
  } catch (e) {
    // Non-critical sound effect failure
  }
}

export function playDismissSound() {
  try {
    let t = 0;
    for (let freq = 2000; freq > 600; freq -= 250) {
      beep(freq, 15, t);
      t += 0.017;
    }
  } catch (e) {
    // Non-critical sound effect failure
  }
}

