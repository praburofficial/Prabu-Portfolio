import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

// Manually edit these years to match each image sequence from 1.webp to 23.webp
const years = [
    '2023', '2023', '2023', '2024', '2024',
    '2024', '2025', '2025', '2025', '2025',
    '2025', '2025', '2025', '2025', '2025',
    '2025', '2025', '2025', '2025', '2025',
    '2026', '2026', '2026'
];

const events = years.map((year, i) => ({
    year,
    title: `Memory ${i + 1}`,
    organization: 'Journey Captured',
    description: 'Reflecting on the continuous milestones and unforgettable moments gathered along my path.',
    image: `/${i + 1}.webp`,
    isActive: i === years.length - 1, // Add pulsing effect to the last image
}));

export function Journey() {
    const [lineRef] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="journey" className="relative py-24 z-10 w-full overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Outfit']">
                        <span className="text-white">My</span>{' '}
                        <span className="text-primary text-glow">Journey</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_var(--color-primary)]" />
                </motion.div>

                <div className="relative" ref={lineRef}>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
                        {events.map((event, index) => {
                            const isLastItem = index === events.length - 1;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        scale: 0,
                                        y: index % 2 === 0 ? -40 : 40,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        scale: 1,
                                        y: 0,
                                    }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        duration: 0.6,
                                        type: 'spring',
                                        stiffness: 150,
                                        damping: 15,
                                    }}
                                    className="flex flex-col items-center gap-4 lg:gap-6 relative group"
                                >
                                    {/* Desktop mapping lines */}
                                    {!isLastItem && (
                                        <>
                                            {/* MD line (hidden on LG so we can have different row breaks) */}
                                            {(index % 3 !== 2) && (
                                                <div className="hidden md:block lg:hidden absolute top-[6rem] left-[50%] w-[calc(100%+2rem)] h-[0.15rem] z-[-1]">
                                                    <motion.div className="w-full h-full bg-gradient-to-r from-primary to-primary/20 opacity-50 shadow-[0_0_10px_var(--color-primary)] rounded-full" />
                                                </div>
                                            )}
                                            {/* LG line */}
                                            {(index % 5 !== 4) && (
                                                <div className="hidden lg:block absolute top-[7rem] left-[50%] w-[calc(100%+2rem)] h-[0.15rem] z-[-1]">
                                                    <motion.div className="w-full h-full bg-gradient-to-r from-primary to-primary/20 opacity-50 shadow-[0_0_10px_var(--color-primary)] rounded-full" />
                                                </div>
                                            )}
                                        </>
                                    )}

                                    {/* Vertical Line for Mobile (col-1) */}
                                    {!isLastItem && (
                                        <div className="md:hidden absolute top-[4.5rem] left-[50%] -translate-x-[50%] w-[0.15rem] h-[calc(100%+2rem)] z-[-1]">
                                            <motion.div className="w-full h-full bg-gradient-to-b from-primary to-primary/20 opacity-50 shadow-[0_0_10px_var(--color-primary)] rounded-full" />
                                        </div>
                                    )}

                                    {/* Photo Node Container */}
                                    <div className="flex-shrink-0 flex items-center justify-center relative w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 z-10">
                                        {/* Active pulsing ring for 2025 */}
                                        {event.isActive && (
                                            <div className="absolute inset-[-6px] rounded-full border-2 border-primary/50 animate-ping opacity-30" />
                                        )}

                                        <div
                                            className="w-full h-full rounded-full z-10 overflow-hidden relative group"
                                            style={{
                                                boxShadow: event.isActive
                                                    ? '0 0 0 3px #00d4ff, 0 0 35px rgba(0,212,255,0.8)'
                                                    : '0 0 0 3px #00d4ff, 0 0 20px rgba(0,212,255,0.4)',
                                            }}
                                        >
                                            {/* Spinning conic gradient border */}
                                            <div
                                                className="absolute -inset-1 rounded-full"
                                                style={{
                                                    background: 'conic-gradient(from 0deg, #00d4ff, #7c3aed, #ff2d78, #00d4ff)',
                                                    animation: 'conic-spin 4s linear infinite',
                                                }}
                                            />
                                            <div className="absolute inset-[3px] rounded-full bg-[#050b18] z-[1]" />
                                            <div className="absolute inset-[4px] rounded-full overflow-hidden z-[2]">
                                                <img
                                                    src={event.image}
                                                    alt={event.year}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                                                    loading="lazy"
                                                />
                                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Year Label */}
                                    <div className="flex items-center gap-2 mt-2 bg-white/5 py-2 px-6 rounded-full border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                        <Calendar className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                                        <span className="text-primary font-bold font-['Outfit'] text-lg md:text-xl tracking-widest">{event.year}</span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
