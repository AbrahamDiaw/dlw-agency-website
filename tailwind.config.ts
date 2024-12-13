import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
      '3xl': ['1.75rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['2.5rem', { lineHeight: '3rem' }],
      '6xl': ['3rem', { lineHeight: '3.5rem' }],
      '7xl': ['4rem', { lineHeight: '4.5rem' }],
    },
    extend: {
      colors: {
        // Base
        background: "var(--background)",
        foreground: "var(--foreground)",
        
        // Brand
        primary: {
          DEFAULT: 'var(--brand-primary)',
          light: 'var(--brand-primary-light)',
          dark: 'var(--brand-primary-dark)',
        },
        
        // Text
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
      },
      animation: {
        'slow-spin': 'spin 20s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(to right, var(--accent-gradient-from), var(--accent-gradient-to))',
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      fontFamily: {
        serif: ['Instrument Serif', 'serif'],
        sans: ['Mona Sans', ...defaultTheme.fontFamily.sans],
        display: [
          ['Mona Sans', ...defaultTheme.fontFamily.sans],
          { fontVariationSettings: '"wdth" 125' },
        ],
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.bg-glass': {
          'backdrop-filter': 'blur(12px)',
          'background-color': 'rgba(255, 255, 255, 0.1)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        },
      });
    }),
  ],
} satisfies Config;