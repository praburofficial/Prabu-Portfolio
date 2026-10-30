import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useScroll, useSpring } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';

interface JourneyEvent {
    year: string;
    title: string;
    organization: string;
    description: string;
    image: string;
    isActive?: boolean;
}

const baseYears = [
    '2023', '2023', '2023', '2024', '2024',
    '2024', '2025', '2025', '2025', '2025',
    '2025', '2025', '2025', '2025', '2025',
    '2025', '2025', '2025', '2025', '2025',
    '2026', '2026', '2026'
];

const events: JourneyEvent[] = [
    ...baseYears.map((year, i) => ({
        year,
        title: `Memory ${i + 1}`,
        organization: 'Journey Captured',
        description: 'Reflecting on the continuous milestones and unforgettable moments gathered along my path.',
        image: `/Journey/${i + 1}.webp`,
    })),
    {
        year: '2025',
        title: "1st Prize ALGONEXUS'25",
        organization: 'Student Achievement',
        description: 'Awarded 1st Prize for Short Film at ALGONEXUS 2025 symposium, Jayalakshmi Institute of Technology.',
        image: '/Journey/24.jpg',
    },
    {
        year: '2026',
        title: 'College ERP Presentation',
        organization: 'Gnanamani Institutions',
        description: 'Presenting Development of a Secure and Scalable College ERP with OCR Integration.',
        image: '/Journey/25.jpg',
    },
    {
        year: '2026',
        title: 'Project Team Leaders',
        organization: 'Gnanamani CSE',
        description: 'Final Year ERP Project Team standing together after successful demonstration.',
        image: '/Journey/26.jpg',
    },
    {
        year: '2026',
        title: 'Faculty & HOD Recognition',
        organization: 'Academic Excellence',
        description: 'Receiving recognition and award honors with college HOD and faculty members.',
        image: '/Journey/27.jpg',
    },
    {
        year: '2026',
        title: 'Developer Studio Team',
        organization: 'Tech & Creative Collaboration',
        description: 'Group photo with the development and creative studio team members.',
        image: '/Journey/28.jpg',
    },
    {
        year: '2026',
        title: 'Innovation & Team Synergy',
        organization: 'Journey Captured',
        description: 'Memorable milestone capturing collaboration and technological dedication.',
        image: '/Journey/29.jpeg',
    },
    {
        year: '2026',
        title: 'Code Blaza Technology',
        organization: 'Journey at CBT',
        description: 'Capturing moments and milestones at Code Blaza Technology.',
        image: '/Journey/30.jpeg',
    },
    {
        year: '2026',
        title: 'Professional Milestones',
        organization: 'Journey Captured',
        description: 'Continuing to build, create, and achieve higher benchmarks along the way.',
        image: '/Journey/31.jpeg',
        isActive: true,
    },
];

export function Journey() {
    const railRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: railRef,
        offset: ['start 80%', 'end 40%'],
    });
    const railScale = useSpring(scrollYProgress, { stiffness: 90, damping: 28, restDelta: 0.001 });

    return (
        <section id="journey" className="section-y relative z-10 w-full overflow-hidden">
            <div className="shell">
                <SectionHeading
                    eyebrow="Timeline"
                    title="My"
                    highlight="Journey"
                    description="Milestones, moments and the people along the way — captured year by year."
                    className="mb-14 sm:mb-20"
                />

                <div ref={railRef} className="relative">
                    {/* Vertical rail line only — clean and centered, no diagonal/cross lines */}
                    <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-slate-200/70">
                        <motion.div
                            style={{ scaleY: railScale }}
                            className="h-full w-full origin-top bg-gradient-to-b from-primary via-violet to-emerald-500 shadow-[0_0_8px_rgba(37,99,235,0.4)]"
                        />
                    </div>

                    <ol className="relative z-10 grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-3 sm:gap-8 lg:grid-cols-4 xl:grid-cols-5 xl:gap-10">
                        {events.map((event, index) => {
                            return (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.86, y: 26 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                    transition={{
                                        duration: 0.55,
                                        type: 'spring',
                                        stiffness: 140,
                                        damping: 18,
                                        delay: index * 0.065,
                                    }}
                                    className="group relative flex flex-col items-center gap-4 sm:gap-5"
                                >
                                    {/* ─── Photo node ─── */}
                                    <div
                                        
                                        className="relative aspect-square w-[7.5rem] shrink-0 sm:w-36 md:w-40 lg:w-[10.5rem]"
                                    >
                                        {/* Step number badge (Frame 1 to 31) */}
                                        <span className="absolute -top-1.5 -right-1.5 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[0.625rem] font-bold text-primary shadow-e1 ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-110">
                                            {index + 1}
                                        </span>
                                        {/* Halo */}
                                        <div
                                            className="pointer-events-none absolute -inset-2 rounded-full opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100"
                                            style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.28), transparent 70%)' }}
                                        />

                                        {/* Live pulse on the most recent memory */}
                                        {event.isActive && (
                                            <span className="pointer-events-none absolute -inset-1 animate-ping rounded-full border border-primary/35 opacity-40" />
                                        )}

                                        {/* Conic ring */}
                                        <div
                                            className="absolute inset-0 rounded-full opacity-80 transition-opacity duration-500 group-hover:opacity-100 gpu"
                                            style={{
                                                background: event.isActive
                                                    ? 'conic-gradient(from 0deg, #2563eb, #4f46e5, #7c3aed, #059669, #2563eb)'
                                                    : 'conic-gradient(from 0deg, rgba(203,213,225,0.9), rgba(37,99,235,0.55), rgba(124,58,237,0.45), rgba(203,213,225,0.9))',
                                                animation: 'conic-spin 10s linear infinite',
                                            }}
                                        />
                                        <div className="absolute inset-[2px] rounded-full bg-background" />

                                        <div className="absolute inset-[5px] overflow-hidden rounded-full bg-surface-2 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.06)]">
                                            <img
                                                src={event.image}
                                                alt={`${event.title} — ${event.year}`}
                                                loading="lazy"
                                                decoding="async"
                                                className="h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.14]"
                                            />
                                        </div>
                                    </div>

                                    {/* ─── Year pill ─── */}
                                    <div
                                        className={`relative inline-flex items-center gap-2 rounded-pill px-3.5 py-1.5 transition-all duration-300 group-hover:-translate-y-0.5 sm:px-4 ${event.isActive
                                            ? 'border border-primary/25 bg-primary-tint shadow-[0_10px_26px_-14px_rgba(37,99,235,0.9)]'
                                            : 'border border-border bg-white shadow-e1'
                                            }`}
                                    >
                                        <span
                                            className={`h-1.5 w-1.5 rounded-full ${event.isActive ? 'bg-primary shadow-[0_0_0_3px_rgba(37,99,235,0.18)]' : 'bg-slate-300'}`}
                                        />
                                        <span className={`font-display text-sm font-bold tracking-[0.08em] ${event.isActive ? 'text-primary' : 'text-ink'}`}>
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
