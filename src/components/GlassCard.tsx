import { cn } from '../lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    glow?: boolean;
}

export function GlassCard({ children, className, glow = false, ...props }: GlassCardProps) {
    return (
        <motion.div
            className={cn(
                "relative overflow-hidden transition-all duration-300",
                "bg-[rgba(15,23,42,0.85)] backdrop-blur-[20px] border border-[rgba(0,212,255,0.15)] rounded-2xl",
                glow && "hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]",
                className
            )}
            {...props}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
}
