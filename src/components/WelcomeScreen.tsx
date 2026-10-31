import { motion } from 'framer-motion';

export function WelcomeScreen() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden bg-[#01040a]"
            style={{
                backgroundColor: '#01040a',
                backgroundImage: `
                    radial-gradient(ellipse 70% 60% at 50% 45%, rgba(0, 180, 255, 0.18) 0%, rgba(2, 132, 199, 0.1) 35%, transparent 70%),
                    linear-gradient(115deg, #01040a 0%, #020817 40%, #03183d 75%, #06326e 100%)
                `,
            }}
            data-lenis-prevent="true"
        >
            {/* Ambient background glows */}
            <div
                className="pointer-events-none absolute h-[32rem] w-[32rem] rounded-full blur-[120px] opacity-60"
                style={{ background: 'radial-gradient(circle, rgba(0, 185, 255, 0.45), transparent 70%)' }}
            />

            <div className="relative z-10 flex flex-col items-center text-center px-4">
                {/* ─── Profile Avatar with Animated Glow Ring ─── */}
                <motion.div
                    initial={{ scale: 0.75, opacity: 0, y: 16 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="relative mb-6"
                >
                    {/* Pulsing outer aura */}
                    <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-r from-sky-400 via-primary to-sky-300 opacity-40 blur-xl animate-pulse" />

                    {/* Outer gradient border */}
                    <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-[26px] p-[2.5px] bg-gradient-to-br from-sky-400 via-primary to-sky-500 shadow-[0_0_35px_rgba(14,165,233,0.5)]">
                        <div className="h-full w-full overflow-hidden rounded-[24px] bg-[#020817]">
                            <img
                                src="/profile.jpg"
                                alt="Prabu R"
                                width={128}
                                height={128}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Status dot */}
                    <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#01040a] ring-2 ring-sky-400/50">
                        <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)] animate-ping" />
                        <span className="absolute h-3 w-3 rounded-full bg-emerald-400" />
                    </span>
                </motion.div>

                {/* ─── Welcome Title ─── */}
                <motion.h1
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.025em] text-white"
                >
                    Welcome
                </motion.h1>

                {/* ─── Subtitle ─── */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-2.5 font-mono text-xs sm:text-sm font-semibold tracking-[0.25em] text-sky-400 uppercase"
                >
                    Prabu R · Portfolio
                </motion.p>

                {/* ─── Elegant Progress Bar ─── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-7 flex flex-col items-center gap-2"
                >
                    <div className="h-1.5 w-44 sm:w-56 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/10 p-[1px]">
                        <motion.div
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                            className="h-full rounded-full bg-gradient-to-r from-sky-400 via-primary to-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.85)]"
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

