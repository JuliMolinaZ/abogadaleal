'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎨 CARD VARIANTS - Premium Design System
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const cardVariants = cva(
  // Base Styles
  [
    'rounded-2xl',
    'transition-all duration-500 ease-elegant',
    'animate-fade-in',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-white dark:bg-graphite',
          'border border-gray-100 dark:border-gray-800',
          'shadow-md',
        ],
        elevated: [
          'bg-white dark:bg-graphite',
          'shadow-gold-lg',
          'border border-gold/10',
        ],
        glass: [
          'bg-white/70 dark:bg-midnight/70',
          'backdrop-blur-xl',
          'border border-white/20 dark:border-white/10',
          'shadow-lg',
        ],
        outline: [
          'bg-transparent',
          'border-2 border-gold',
          'shadow-none',
        ],
        gradient: [
          'gradient-midnight',
          'text-white',
          'border border-gold/20',
          'shadow-gold',
        ],
        floating: [
          'bg-white dark:bg-graphite',
          'shadow-gold-lg',
          'border border-gold/20',
          'animate-float',
        ],
      },
      padding: {
        none: '',
        sm: 'p-4',
        md: 'p-5 lg:p-6',
        lg: 'p-6 lg:p-8',
        xl: 'p-8 lg:p-10',
      },
      hover: {
        true: 'hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/20 cursor-pointer',
        false: '',
        glow: 'hover:shadow-gold-lg hover:shadow-gold/40 hover:scale-[1.02] cursor-pointer',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
      hover: true,
    },
  }
);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📦 COMPONENT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant,
      padding,
      hover,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cardVariants({ variant, padding, hover, className })}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
