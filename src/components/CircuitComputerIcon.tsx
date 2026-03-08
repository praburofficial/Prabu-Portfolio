import { motion } from 'framer-motion';

export function CircuitComputerIcon() {
    return (
        <div className="relative w-40 h-40 flex items-center justify-center">
            {/* The Computer Monitor core */}
            <motion.div
                className="absolute z-10 w-28 h-20 border-[2px] border-primary rounded-md bg-background flex flex-col justify-between p-1 shadow-[0_0_25px_rgba(0,245,255,0.4)] backdrop-blur-md"
            >
                {/* Screen content animation */}
                <div className="w-full h-[60px] bg-[#0A0A12] rounded border border-primary/30 relative overflow-hidden">
                    {/* Scanning line */}
                    <motion.div
                        animate={{ y: ['-100%', '300%'] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                        className="absolute top-0 left-0 w-full h-[2px] bg-primary shadow-[0_0_10px_var(--color-primary)]"
                    />
                    {/* Code blocks abstract */}
                    <div className="absolute top-2 left-2 flex flex-col gap-1.5 opacity-80">
                        <div className="w-12 h-1 bg-secondary rounded animate-pulse" />
                        <div className="w-20 h-1 bg-primary rounded animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <div className="w-10 h-1 bg-accent rounded animate-pulse" style={{ animationDelay: '0.4s' }} />
                        <div className="w-14 h-1 bg-secondary rounded animate-pulse" style={{ animationDelay: '0.6s' }} />
                    </div>
                </div>
                {/* Stand */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-4 bg-primary/30 rounded-t-sm border border-b-0 border-primary" />
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-primary rounded-full shadow-[0_0_15px_var(--color-primary)]" />
            </motion.div>

            {/* SVG Circuits moving outwards */}
            <svg className="absolute inset-0 w-[200%] h-[200%] -translate-x-1/4 -translate-y-1/4 pointer-events-none" viewBox="0 0 200 200">

                {/* Path 1 */}
                <motion.path
                    d="M 100 80 L 60 80 L 60 40 L 30 40"
                    fill="transparent"
                    stroke="var(--color-accent)"
                    strokeWidth="2"
                    strokeDasharray="70"
                    animate={{ strokeDashoffset: [70, -70] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
                <circle cx="30" cy="40" r="3.5" fill="var(--color-accent)" className="animate-pulse shadow-[0_0_10px_var(--color-accent)]" style={{ filter: 'drop-shadow(0 0 5px var(--color-accent))' }} />

                {/* Path 2 */}
                <motion.path
                    d="M 100 120 L 70 120 L 70 160 L 30 160"
                    fill="transparent"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    strokeDasharray="90"
                    animate={{ strokeDashoffset: [90, -90] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: 1 }}
                />
                <circle cx="30" cy="160" r="3.5" fill="var(--color-primary)" className="animate-pulse" style={{ filter: 'drop-shadow(0 0 5px var(--color-primary))' }} />

                {/* Path 3 */}
                <motion.path
                    d="M 120 100 L 150 100 L 150 50 L 180 50"
                    fill="transparent"
                    stroke="var(--color-secondary)"
                    strokeWidth="2"
                    strokeDasharray="80"
                    animate={{ strokeDashoffset: [80, -80] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'linear', delay: 0.5 }}
                />
                <circle cx="180" cy="50" r="3.5" fill="var(--color-secondary)" className="animate-pulse" style={{ filter: 'drop-shadow(0 0 5px var(--color-secondary))' }} />

                {/* Path 4 */}
                <motion.path
                    d="M 120 120 L 160 120 L 160 160 L 180 160"
                    fill="transparent"
                    stroke="var(--color-accent)"
                    strokeWidth="2"
                    strokeDasharray="90"
                    animate={{ strokeDashoffset: [90, -90] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'linear', delay: 1.5 }}
                />
                <circle cx="180" cy="160" r="3.5" fill="var(--color-accent)" className="animate-pulse" style={{ filter: 'drop-shadow(0 0 5px var(--color-accent))' }} />

                {/* Path 5 - Upwards */}
                <motion.path
                    d="M 110 80 L 110 50 L 130 50 L 130 20"
                    fill="transparent"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    strokeDasharray="60"
                    animate={{ strokeDashoffset: [60, -60] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'linear', delay: 0.8 }}
                />
                <circle cx="130" cy="20" r="3.5" fill="var(--color-primary)" className="animate-pulse" style={{ filter: 'drop-shadow(0 0 5px var(--color-primary))' }} />

                {/* Path 6 - Downwards */}
                <motion.path
                    d="M 90 120 L 90 160 L 120 160 L 120 190"
                    fill="transparent"
                    stroke="var(--color-secondary)"
                    strokeWidth="2"
                    strokeDasharray="70"
                    animate={{ strokeDashoffset: [70, -70] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: 'linear', delay: 2 }}
                />
                <circle cx="120" cy="190" r="3.5" fill="var(--color-secondary)" className="animate-pulse" style={{ filter: 'drop-shadow(0 0 5px var(--color-secondary))' }} />
            </svg>
        </div>
    );
}
