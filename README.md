# Spydomon — Windows Desktop App (Electron)

**Spydomon** is a sleek, lightweight Spider-Man style desktop overlay reminder application created by **[TanishJain13](https://github.com/TanishJain13)**. It drops reminders right on top of any active window on your screen using an always-on-top, click-through overlay.

What you get:

- A control panel window with dark cyber-theme, presets (drink water, posture, break), quick timers, and custom delays
- A transparent, always-on-top, click-through-when-hidden overlay window that plays the drop animation with Spider-Man swinging down in his classic upside-down pose
- A system tray icon (closing the control panel minimizes it to the tray — reminders keep running in the background)
- Reminders persist across restarts (saved to a local JSON file)
- Web-shoot / dismiss sound effects created with the Web Audio API

## Requirements

- [Node.js](https://nodejs.org) 18+ (includes npm) installed on the Windows machine

## Run it in development mode

```bash
npm install
npm start
```

Or double-click `start_dev.bat` on Windows.

## Build a Windows installer / .exe

```bash
npm install
npm run dist
```

This uses `electron-builder` and produces:

- `dist\Spydomon Setup <version>.exe` — a full installer (adds Start Menu + Desktop shortcuts)

(`npm run pack` builds an unpacked folder instead, useful for quick testing.)

## Project layout

```
main.js                     Electron main process: windows, tray, reminder scheduling
preload.js                  Safe IPC bridge exposed to the renderer as window.spydomon
src/
  control-panel.html/css/js The main control panel UI
  overlay.html/css/js       The fullscreen transparent drop overlay
  audio.js                  Web Audio recreation of web-slinging sound effects
assets/
  logo.png                  App / tray icon (1024x1024, classic spider emblem)
  spiderman.png  Character art used in drop animation
docs/
  index.html                Landing page and interactive web demo
  assets/                   Website assets (showcase mockup, logo, character art)
```

## Author

- **TanishJain13** — [GitHub Profile](https://github.com/TanishJain13)
