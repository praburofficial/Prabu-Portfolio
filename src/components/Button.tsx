import { useRef } from 'react';
import { cn } from '../lib/utils';
import { motion, useMotionValue, useSpring, type HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<'button'> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    className?: string;
    /** Cursor-following magnetic pull. Disabled automatically on touch. */
    magnetic?: boolean;
}

const variants = {
    primary:
        'text-white bg-gradient-to-b from-primary-soft to-primary shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_10px_28px_-10px_rgba(37,99,235,0.65)] hover:shadow-[0_1px_0_rgba(255,255,255,0.35)_inset,0_18px_40px_-12px_rgba(37,99,235,0.75)]',
    secondary:
        'text-white bg-gradient-to-b from-secondary-soft to-secondary shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_10px_28px_-10px_rgba(79,70,229,0.65)] hover:shadow-[0_1px_0_rgba(255,255,255,0.35)_inset,0_18px_40px_-12px_rgba(79,70,229,0.75)]',
    outline:
        'text-ink surface hover:border-border-strong hover:bg-surface shadow-e1 hover:shadow-e2',
    ghost:
        'text-muted hover:text-ink hover:bg-surface-2 border border-transparent',
} as const;

const sizes = {
    sm: 'h-10 px-4 text-sm gap-2',
    md: 'h-12 px-6 text-[0.9375rem] gap-2',
    lg: 'h-13 px-6 text-[0.9375rem] gap-2.5 sm:h-14 sm:px-8 sm:text-base',
} as const;

export function Button({
    variant = 'primary',
    size = 'md',
    children,
    className,
    magnetic = true,
    ...props
}: ButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
    const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });

    const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!magnetic || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set(((e.clientX - rect.left) / rect.width - 0.5) * 14);
        y.set(((e.clientY - rect.top) / rect.height - 0.5) * 10);
    };

    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            ref={ref}
            style={{ x: springX, y: springY }}
            onMouseMove={handleMove}
            onMouseLeave={reset}
            whileTap={{ scale: 0.97 }}
            className={cn(
                'group/btn relative inline-flex items-center justify-center overflow-hidden rounded-btn',
                'font-semibold tracking-[-0.01em] whitespace-nowrap',
                'transition-[box-shadow,background-color,border-color,color] duration-300',
                'disabled:pointer-events-none disabled:opacity-50',
                sizes[size],
                variants[variant],
                className
            )}
            {...props}
        >
            {/* Light sweep on hover */}
            <span
                className="pointer-events-none absolute inset-0 -translate-x-[130%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-[130%]"
            />
            <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        </motion.button>
    );
}
