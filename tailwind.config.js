/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: '#030712',
        surface: '#0d1117',
        'surface-2': '#161b22',
        border: 'rgba(255,255,255,0.08)',
        accent: {
          // Violet replaces cyan as the primary accent
          cyan: '#8b5cf6',   // violet-500
          blue: '#ec4899',   // pink-500 (replaces blue)
          purple: '#f43f5e', // rose-500 (replaces purple)
          pink: '#fb923c',   // orange-400 (replaces pink)
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // Hero glow: violet tones instead of blue-purple
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139,92,246,0.25), transparent)',
        // Primary glow: violet instead of cyan
        'cyan-glow': 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(139,92,246,0.12), transparent)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient-x': 'gradient-x 5s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      boxShadow: {
        // All glow shadows now use violet tones
        'glow-cyan': '0 0 30px rgba(139,92,246,0.35)',
        'glow-blue': '0 0 30px rgba(236,72,153,0.3)',
        'glow-purple': '0 0 30px rgba(244,63,94,0.3)',
        'card': '0 0 0 1px rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 0 0 1px rgba(139,92,246,0.3), 0 8px 40px rgba(0,0,0,0.5), 0 0 40px rgba(139,92,246,0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
