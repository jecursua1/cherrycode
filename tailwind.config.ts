import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        cherry: {
          50: '#fff1f3',
          100: '#ffe0e5',
          200: '#ffc6cf',
          300: '#ff9caa',
          400: '#ff6178',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        float: 'float 4s ease-in-out infinite',
        'float-delayed': 'float 4s ease-in-out 2s infinite',
        'bounce-arrow': 'bounceArrow 2s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
        'float-soft': 'floatSoft 4s ease-in-out infinite',
        'float-soft-slow': 'floatSoft 5.5s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounceArrow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(225,29,72,0.3), 0 0 16px rgba(244,63,94,0.1)' },
          '50%': { boxShadow: '0 0 18px rgba(225,29,72,0.55), 0 0 32px rgba(244,63,94,0.25)' },
        },
        floatSoft: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-7px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
