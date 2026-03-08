import { cn } from '../lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline';
    children: React.ReactNode;
    className?: string;
}

export function Button({ variant = 'primary', children, className, ...props }: ButtonProps) {
    const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 font-semibold tracking-wide rounded-full overflow-hidden transition-all duration-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-primary text-black hover:bg-[#50faff] shadow-[0_0_15px_var(--color-glow)] hover:shadow-[0_0_25px_var(--color-primary)]",
        secondary: "bg-secondary text-white hover:bg-[#9d74f7] shadow-[0_0_15px_rgba(139,92,246,0.4)] hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]",
        outline: "border border-primary text-primary hover:bg-primary/10 shadow-[inset_0_0_10px_rgba(0,245,255,0.2)] hover:shadow-[0_0_15px_rgba(0,245,255,0.4),inset_0_0_15px_rgba(0,245,255,0.3)] text-glow"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
            {variant !== 'outline' && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            )}
        </motion.button>
    );
}
