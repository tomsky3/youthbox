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
          cyan: '#00fff2',
          purple: '#b829ff',
          pink: '#ff2d7a',
          green: '#00ff88',
        },
        dark: {
          900: '#0a0a0f',
          800: '#111128',
          700: '#1a1a3e',
          600: '#252550',
          500: '#333366',
        },
        txt: {
          primary: '#E8E8F0',
          secondary: '#A0A0B8',
        },
      },
      textColor: {
        'txt-primary': '#E8E8F0',
        'txt-secondary': '#A0A0B8',
      },
      backgroundColor: {
        'txt-primary': '#E8E8F0',
        'txt-secondary': '#A0A0B8',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'gradient-flow': 'gradient-flow 3s ease infinite',
        'scanline': 'scanline 4s linear infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
      },
      keyframes: {
        'neon-pulse': {
          '0%': { boxShadow: '0 0 5px #00fff2, 0 0 10px #00fff2, 0 0 20px #00fff2' },
          '100%': { boxShadow: '0 0 10px #b829ff, 0 0 20px #b829ff, 0 0 40px #b829ff' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
