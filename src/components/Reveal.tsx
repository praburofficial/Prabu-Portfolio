import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface RevealProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    direction?: Direction;
    distance?: number;
    className?: string;
    /** Adds a subtle blur-in, which makes the entrance feel more expensive. */
    blur?: boolean;
}

const offset = (direction: Direction, distance: number) => {
    switch (direction) {
        case 'up':
            return { y: distance };
        case 'down':
            return { y: -distance };
        case 'left':
            return { x: distance };
        case 'right':
            return { x: -distance };
        default:
            return {};
    }
};

/** Scroll-triggered entrance used across every section for a consistent cadence. */
export function Reveal({
    children,
    delay = 0,
    duration = 0.75,
    direction = 'up',
    distance = 28,
    className,
    blur = true,
}: RevealProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, ...offset(direction, distance), ...(blur ? { filter: 'blur(8px)' } : {}) }}
            whileInView={{ opacity: 1, x: 0, y: 0, ...(blur ? { filter: 'blur(0px)' } : {}) }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ delay, duration, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.div>
    );
}
