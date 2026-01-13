import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      // 🎨 COLORS - Premium Palette
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      colors: {
        midnight: {
          DEFAULT: '#0A192F',
          50: '#E6E9ED',
          100: '#CDD3DB',
          200: '#9BA7B7',
          300: '#697B93',
          400: '#374F6F',
          500: '#0A192F',
          600: '#081426',
          700: '#060F1C',
          800: '#040A13',
          900: '#020509',
        },
        gold: {
          DEFAULT: '#C6A664',
          50: '#FAF7F1',
          100: '#F5EFE3',
          200: '#EBDFC7',
          300: '#E1CFAB',
          400: '#D7BF8F',
          500: '#C6A664',
          600: '#B5944D',
          700: '#8F7439',
          800: '#6A562B',
          900: '#45391C',
        },
        graphite: {
          DEFAULT: '#1E1E1E',
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#BABABA',
          400: '#A3A3A3',
          500: '#8C8C8C',
          600: '#757575',
          700: '#5E5E5E',
          800: '#474747',
          900: '#1E1E1E',
        },
      },

      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      // 🔤 TYPOGRAPHY
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      fontFamily: {
        century: ['var(--font-century)', 'Century Gothic', 'sans-serif'],
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'Playfair Display', 'serif'],
        cormorant: ['var(--font-cormorant)', 'Cormorant Garamond', 'serif'],
        'space-grotesk': ['var(--font-cormorant)', 'Cormorant Garamond', 'serif'], // Alias para compatibilidad
        montserrat: ['var(--font-inter)', 'Inter', 'sans-serif'], // Mantener compatibilidad
      },

      fontSize: {
        xs: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        sm: 'clamp(0.875rem, 0.825rem + 0.25vw, 1rem)',
        base: 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',
        lg: 'clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem)',
        xl: 'clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)',
        '2xl': 'clamp(1.5rem, 1.35rem + 0.75vw, 1.875rem)',
        '3xl': 'clamp(1.875rem, 1.65rem + 1.125vw, 2.25rem)',
        '4xl': 'clamp(2.25rem, 1.95rem + 1.5vw, 3rem)',
        '5xl': 'clamp(3rem, 2.55rem + 2.25vw, 4rem)',
        '6xl': 'clamp(3.75rem, 3.15rem + 3vw, 5rem)',
      },

      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      // 🌈 SHADOWS - Premium Elevations
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(10, 25, 47, 0.05)',
        'DEFAULT': '0 4px 6px -1px rgba(10, 25, 47, 0.1), 0 2px 4px -1px rgba(10, 25, 47, 0.06)',
        'md': '0 10px 15px -3px rgba(10, 25, 47, 0.1), 0 4px 6px -2px rgba(10, 25, 47, 0.05)',
        'lg': '0 20px 25px -5px rgba(10, 25, 47, 0.1), 0 10px 10px -5px rgba(10, 25, 47, 0.04)',
        'xl': '0 25px 50px -12px rgba(10, 25, 47, 0.25)',
        '2xl': '0 35px 60px -15px rgba(10, 25, 47, 0.3)',
        'inner': 'inset 0 2px 4px 0 rgba(10, 25, 47, 0.06)',
        'gold-sm': '0 4px 6px -1px rgba(198, 166, 100, 0.15)',
        'gold': '0 10px 15px -3px rgba(198, 166, 100, 0.2), 0 4px 6px -2px rgba(198, 166, 100, 0.1)',
        'gold-lg': '0 20px 25px -5px rgba(198, 166, 100, 0.25), 0 10px 10px -5px rgba(198, 166, 100, 0.15)',
        'gold-xl': '0 25px 50px -12px rgba(198, 166, 100, 0.35)',
        'none': 'none',
      },

      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      // ⚡ ANIMATIONS
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-down': 'slideDown 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-left': 'slideLeft 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-right': 'slideRight 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'shimmer': 'shimmer 2s infinite linear',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        pulseGlow: {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 20px rgba(198, 166, 100, 0.3)',
          },
          '50%': {
            opacity: '0.8',
            boxShadow: '0 0 40px rgba(198, 166, 100, 0.5)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },

      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      // 🎬 TRANSITIONS
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      transitionDuration: {
        '0': '0ms',
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '1000': '1000ms',
      },

      transitionTimingFunction: {
        'elegant': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },

      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      // 📐 SPACING & SIZING
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      borderRadius: {
        'none': '0',
        'sm': '0.375rem',
        'DEFAULT': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
        'full': '9999px',
      },

      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '64px',
      },

      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      // 🎨 BACKGROUND IMAGES - Gradients
      // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-midnight': 'linear-gradient(135deg, #0A192F 0%, #162744 100%)',
        'gradient-gold': 'linear-gradient(135deg, #C6A664 0%, #D4B876 100%)',
        'gradient-gold-subtle': 'linear-gradient(135deg, rgba(198, 166, 100, 0.1) 0%, rgba(212, 184, 118, 0.05) 100%)',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
