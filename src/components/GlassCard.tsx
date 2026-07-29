import { cn } from '../lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<'div'> {
    children: React.ReactNode;
    className?: string;
    /** Adds the animated gradient hairline border + lift shadow on hover. */
    glow?: boolean;
}

/**
 * The workhorse surface of the site: a crisp white pane on a soft neutral
 * ground, a 1px tinted top edge, an 18px radius and an optional gradient
 * border that fades in on hover.
 */
export function GlassCard({ children, className, glow = false, ...props }: GlassCardProps) {
    return (
        <motion.div
            className={cn(
                'group/card relative isolate overflow-hidden rounded-card surface-soft hairline',
                'transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
                glow && 'border-gradient hover:border-border-strong hover:shadow-e3',
                className
            )}
            {...props}
        >
            {/* Interior top-light so the pane reads as a physical surface */}
            <div
                className="pointer-events-none absolute inset-0 -z-10 opacity-70"
                style={{ background: 'radial-gradient(120% 80% at 50% -10%, rgba(37,99,235,0.05), transparent 62%)' }}
            />
            {children}
        </motion.div>
    );
}
