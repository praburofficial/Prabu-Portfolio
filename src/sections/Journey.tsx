import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useScroll, useSpring } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';

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
    const railRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: railRef,
        offset: ['start 80%', 'end 40%'],
    });
    const railScale = useSpring(scrollYProgress, { stiffness: 90, damping: 28, restDelta: 0.001 });

    return (
        <section id="journey" className="relative z-10 w-full overflow-hidden py-24 sm:py-32">
            <div className="mx-auto max-w-[1400px] px-6">
                <SectionHeading
                    eyebrow="Timeline"
                    title="My"
                    highlight="Journey"
                    description="Milestones, moments and the people along the way — captured year by year."
                    className="mb-20"
                />

                <div ref={railRef} className="relative">
                    {/* Vertical rail that draws itself in as you scroll (mobile) */}
                    <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/[0.07] md:hidden">
                        <motion.div
                            style={{ scaleY: railScale }}
                            className="h-full w-full origin-top bg-gradient-to-b from-primary via-secondary to-transparent"
                        />
                    </div>

                    <ol className="relative z-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
                        {events.map((event, index) => {
                            const isLastItem = index === events.length - 1;

                            return (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.86, y: 26 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                    transition={{
                                        duration: 0.6,
                                        type: 'spring',
                                        stiffness: 140,
                                        damping: 18,
                                        delay: (index % 5) * 0.06,
                                    }}
                                    className="group relative flex flex-col items-center gap-5"
                                >
                                    {/* Horizontal connectors between nodes in the same row */}
                                    {!isLastItem && (
                                        <>
                                            {index % 3 !== 2 && (
                                                <span
                                                    aria-hidden="true"
                                                    className="absolute left-1/2 top-[4.75rem] -z-10 hidden h-px w-[calc(100%+2rem)] md:block lg:hidden"
                                                    style={{ background: 'linear-gradient(90deg, rgba(34,211,238,0.45), rgba(139,92,246,0.12))' }}
                                                />
                                            )}
                                            {index % 5 !== 4 && (
                                                <span
                                                    aria-hidden="true"
                                                    className="absolute left-1/2 top-[5.25rem] -z-10 hidden h-px w-[calc(100%+2rem)] lg:block"
                                                    style={{ background: 'linear-gradient(90deg, rgba(34,211,238,0.45), rgba(139,92,246,0.12))' }}
                                                />
                                            )}
                                        </>
                                    )}

                                    {/* ─── Photo node ─── */}
                                    <div className="relative aspect-square w-32 shrink-0 sm:w-36 md:w-40 lg:w-[10.5rem]">
                                        {/* Halo */}
                                        <div
                                            className="pointer-events-none absolute -inset-2 rounded-full opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100"
                                            style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.35), transparent 70%)' }}
                                        />

                                        {/* Live pulse on the most recent memory */}
                                        {event.isActive && (
                                            <span className="pointer-events-none absolute -inset-1 animate-ping rounded-full border border-primary/40 opacity-40" />
                                        )}

                                        {/* Conic ring */}
                                        <div
                                            className="absolute inset-0 rounded-full opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                                            style={{
                                                background: event.isActive
                                                    ? 'conic-gradient(from 0deg, #22d3ee, #8b5cf6, #f472b6, #22d3ee)'
                                                    : 'conic-gradient(from 0deg, rgba(255,255,255,0.22), rgba(34,211,238,0.5), rgba(139,92,246,0.35), rgba(255,255,255,0.22))',
                                                animation: 'conic-spin 10s linear infinite',
                                            }}
                                        />
                                        <div className="absolute inset-[2px] rounded-full bg-background" />

                                        <div className="absolute inset-[5px] overflow-hidden rounded-full">
                                            <img
                                                src={event.image}
                                                alt={`${event.title} — ${event.year}`}
                                                loading="lazy"
                                                decoding="async"
                                                className="h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.18]"
                                            />
                                            <div className="pointer-events-none absolute inset-0 bg-background/35 transition-colors duration-500 group-hover:bg-background/5" />

                                            {/* Caption reveal */}
                                            <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-background via-background/85 to-transparent px-3 pb-3 pt-6 text-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
                                                <p className="truncate font-display text-[0.75rem] font-bold text-ink">{event.title}</p>
                                                <p className="truncate text-[0.625rem] text-faint">{event.organization}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ─── Year pill ─── */}
                                    <div
                                        className={`relative inline-flex items-center gap-2 rounded-pill px-4 py-1.5 transition-all duration-400 group-hover:-translate-y-0.5 ${event.isActive
                                            ? 'surface-strong shadow-[0_10px_30px_-14px_rgba(34,211,238,0.9)]'
                                            : 'surface'
                                            }`}
                                    >
                                        <span
                                            className={`h-1.5 w-1.5 rounded-full ${event.isActive ? 'bg-primary shadow-[0_0_10px_var(--color-primary)]' : 'bg-white/25'}`}
                                        />
                                        <span className="font-display text-sm font-bold tracking-[0.08em] text-ink">
                                            {event.year}
                                        </span>
                                    </div>
                                </motion.li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </section>
    );
}
