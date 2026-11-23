/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          crimson: '#C62B29',
          red: '#E62429',
          cyan: '#00D2FF',
          dark: '#05070B',
          surface: '#0B0F17',
          surfaceHover: '#101622',
          elevated: '#141B28',
          border: 'rgba(255, 255, 255, 0.08)',
          borderActive: 'rgba(230, 36, 41, 0.4)',
        }
      },
      fontFamily: {
        serif: ['Instrument Serif', 'Newsreader', 'serif'],
        display: ['Space Grotesk', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Geist Mono', 'SF Mono', 'monospace'],
      },
      animation: {
        'web-swing': 'webSwing 6s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
      },
      keyframes: {
        webSwing: {
          '0%': { transform: 'rotate(-5deg) translateY(-2px)' },
          '100%': { transform: 'rotate(5deg) translateY(2px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
