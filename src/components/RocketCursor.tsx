import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Rocket } from 'lucide-react';

export function RocketCursor() {
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX - 16);
            mouseY.set(e.clientY - 16);
        };
        document.addEventListener('mousemove', moveCursor);
        return () => {
            document.removeEventListener('mousemove', moveCursor);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center filter drop-shadow-[0_0_15px_var(--color-primary)] text-primary mix-blend-screen"
            style={{
                x: cursorX,
                y: cursorY,
            }}
        >
            <Rocket className="w-8 h-8 -rotate-45 block" />
        </motion.div>
    );
}
