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
          dark: '#080B11',
          surface: '#0F1420',
          elevated: '#171D2C',
          border: 'rgba(230, 36, 41, 0.25)',
          borderSubtle: 'rgba(255, 255, 255, 0.08)',
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'Outfit', 'sans-serif'],
        sans: ['Satoshi', 'Outfit', 'sans-serif'],
      },
      animation: {
        'web-swing': 'webSwing 5s ease-in-out infinite alternate',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        webSwing: {
          '0%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '100%': { transform: 'rotate(-6deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}

