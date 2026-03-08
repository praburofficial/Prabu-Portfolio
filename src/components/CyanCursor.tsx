import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CyanCursor() {
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springConfig = { damping: 20, stiffness: 400, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX - 8);
            mouseY.set(e.clientY - 8);
        };
        document.addEventListener('mousemove', moveCursor);
        return () => document.removeEventListener('mousemove', moveCursor);
    }, [mouseX, mouseY]);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 z-[9999] pointer-events-none w-4 h-4 rounded-full"
                style={{
                    x: cursorX,
                    y: cursorY,
                    background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)',
                    boxShadow: '0 0 15px #00d4ff, 0 0 30px rgba(0,212,255,0.4)',
                }}
            />
            <motion.div
                className="fixed top-0 left-0 z-[9998] pointer-events-none w-8 h-8 rounded-full border border-[#00d4ff]/30"
                style={{
                    x: useSpring(mouseX, { damping: 30, stiffness: 200, mass: 0.8 }),
                    y: useSpring(mouseY, { damping: 30, stiffness: 200, mass: 0.8 }),
                    marginLeft: -4,
                    marginTop: -4,
                }}
            />
        </>
    );
}
