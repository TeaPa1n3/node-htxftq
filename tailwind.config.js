/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00f3ff',
          red: '#ff0033',
        },
        cyber: {
          dark: '#0a0a1f',
          darker: '#050510',
          light: '#1a1a3f',
          rust: '#8B4513',
          steel: '#1B1B3A',
          warning: '#FFD700',
        }
      },
      fontFamily: {
        cyber: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'warning-flash': 'warning 2s ease-in-out infinite',
      },
      keyframes: {
        warning: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        }
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(0, 243, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 243, 255, 0.1) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}