/**
 * ABOGADA LEAL - DESIGN SYSTEM
 * Sistema de diseño premium para marca boutique legal
 */

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎨 COLOR TOKENS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const colors = {
  // Primary Palette
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

  // Neutral Palette
  white: '#FFFFFF',
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
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📐 SPACING SCALE (8px base)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const spacing = {
  xs: '0.5rem',    // 8px
  sm: '0.75rem',   // 12px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
  '4xl': '6rem',   // 96px
  '5xl': '8rem',   // 128px
  '6xl': '12rem',  // 192px
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🔤 TYPOGRAPHY SCALE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const typography = {
  // Font Families
  fonts: {
    heading: 'var(--font-century)',
    body: 'var(--font-montserrat)',
    accent: 'var(--font-manrope)',
  },

  // Font Sizes - Fluid Responsive
  sizes: {
    xs: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',      // 12-14px
    sm: 'clamp(0.875rem, 0.825rem + 0.25vw, 1rem)',       // 14-16px
    base: 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',      // 16-18px
    lg: 'clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem)',    // 18-20px
    xl: 'clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)',        // 20-24px
    '2xl': 'clamp(1.5rem, 1.35rem + 0.75vw, 1.875rem)',   // 24-30px
    '3xl': 'clamp(1.875rem, 1.65rem + 1.125vw, 2.25rem)', // 30-36px
    '4xl': 'clamp(2.25rem, 1.95rem + 1.5vw, 3rem)',       // 36-48px
    '5xl': 'clamp(3rem, 2.55rem + 2.25vw, 4rem)',         // 48-64px
    '6xl': 'clamp(3.75rem, 3.15rem + 3vw, 5rem)',         // 60-80px
  },

  // Font Weights
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  // Line Heights
  lineHeights: {
    tight: 1.2,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },

  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🌈 SHADOWS - Premium Elevations
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(10, 25, 47, 0.05)',
  DEFAULT: '0 4px 6px -1px rgba(10, 25, 47, 0.1), 0 2px 4px -1px rgba(10, 25, 47, 0.06)',
  md: '0 10px 15px -3px rgba(10, 25, 47, 0.1), 0 4px 6px -2px rgba(10, 25, 47, 0.05)',
  lg: '0 20px 25px -5px rgba(10, 25, 47, 0.1), 0 10px 10px -5px rgba(10, 25, 47, 0.04)',
  xl: '0 25px 50px -12px rgba(10, 25, 47, 0.25)',
  '2xl': '0 35px 60px -15px rgba(10, 25, 47, 0.3)',
  inner: 'inset 0 2px 4px 0 rgba(10, 25, 47, 0.06)',

  // Gold Glow Shadows
  goldSm: '0 4px 6px -1px rgba(198, 166, 100, 0.15)',
  gold: '0 10px 15px -3px rgba(198, 166, 100, 0.2), 0 4px 6px -2px rgba(198, 166, 100, 0.1)',
  goldLg: '0 20px 25px -5px rgba(198, 166, 100, 0.25), 0 10px 10px -5px rgba(198, 166, 100, 0.15)',
  goldXl: '0 25px 50px -12px rgba(198, 166, 100, 0.35)',
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📏 BORDER RADIUS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const radius = {
  none: '0',
  sm: '0.375rem',   // 6px
  DEFAULT: '0.5rem', // 8px
  md: '0.75rem',    // 12px
  lg: '1rem',       // 16px
  xl: '1.5rem',     // 24px
  '2xl': '2rem',    // 32px
  '3xl': '3rem',    // 48px
  full: '9999px',
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ⚡ TRANSITIONS - Premium Timing
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const transitions = {
  duration: {
    instant: '100ms',
    fast: '200ms',
    normal: '300ms',
    slow: '400ms',
    slower: '600ms',
  },

  easing: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Premium easings
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    elegant: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎬 ANIMATION PRESETS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },

  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },

  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },

  slideInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
  },

  slideInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  },

  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },

  staggerChildren: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📱 BREAKPOINTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎨 GRADIENT PRESETS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const gradients = {
  midnight: 'linear-gradient(135deg, #0A192F 0%, #162744 100%)',
  gold: 'linear-gradient(135deg, #C6A664 0%, #D4B876 100%)',
  goldSubtle: 'linear-gradient(135deg, rgba(198, 166, 100, 0.1) 0%, rgba(212, 184, 118, 0.05) 100%)',
  glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🛠️ UTILITY FUNCTIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const utils = {
  // Generar sombra con color personalizado
  customShadow: (color: string, opacity: number = 0.2) =>
    `0 10px 15px -3px ${color}${Math.round(opacity * 255).toString(16)}, 0 4px 6px -2px ${color}${Math.round(opacity * 0.5 * 255).toString(16)}`,

  // Backdrop blur premium
  backdropBlur: {
    sm: 'blur(4px)',
    DEFAULT: 'blur(8px)',
    md: 'blur(12px)',
    lg: 'blur(16px)',
    xl: 'blur(24px)',
  },

  // Glass effect
  glass: (opacity: number = 0.1) => ({
    background: `rgba(255, 255, 255, ${opacity})`,
    backdropFilter: 'blur(12px)',
    border: `1px solid rgba(255, 255, 255, ${opacity * 2})`,
  }),
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📦 EXPORT ALL
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const designSystem = {
  colors,
  spacing,
  typography,
  shadows,
  radius,
  transitions,
  animations,
  breakpoints,
  gradients,
  utils,
} as const;

export type DesignSystem = typeof designSystem;
