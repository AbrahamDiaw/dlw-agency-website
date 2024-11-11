import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
      fontFamily: {
        serif: ['Instrument Serif', 'serif'],
        sans: ['Satoshi', 'sans-serif'],
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