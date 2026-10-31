import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionHeading } from '../components/SectionHeading';
import { GlassCard } from '../components/GlassCard';
import { Code2, Palette, Database, Wrench, Server, Braces, Layers, Cloud } from 'lucide-react';
import { tone, toneStyle } from '../lib/palette';

const skills = [
    { name: 'React.js', level: 90, color: '#00d4ff' },
    { name: 'Tailwind CSS', level: 95, color: '#7c3aed' },
    { name: 'JavaScript', level: 85, color: '#00FF9F' },
    { name: 'HTML5 / CSS3', level: 90, color: '#ff2d78' },
    { name: 'UI/UX Design', level: 85, color: '#00d4ff' },
    { name: 'PostgreSQL', level: 75, color: '#7c3aed' },
];

const badges = [
    { name: 'Wireframing', color: 'hover:border-violet/40 hover:bg-violet-tint hover:text-violet', drift: 'drift-1' },
    { name: 'Prototyping', color: 'hover:border-violet/40 hover:bg-violet-tint hover:text-violet', drift: 'drift-2' },
    { name: 'Responsive Design', color: 'hover:border-primary/40 hover:bg-primary-tint hover:text-primary', drift: 'drift-3' },
    { name: 'Git / GitHub', color: 'hover:border-secondary/40 hover:bg-secondary-tint hover:text-secondary', drift: 'drift-1' },
    { name: 'Postman', color: 'hover:border-secondary/40 hover:bg-secondary-tint hover:text-secondary', drift: 'drift-2' },
    { name: 'API Integration', color: 'hover:border-accent/40 hover:bg-accent-tint hover:text-accent', drift: 'drift-3' },
    { name: 'PostgreSQL', color: 'hover:border-primary/40 hover:bg-primary-tint hover:text-primary', drift: 'drift-1' },
    { name: 'Python', color: 'hover:border-secondary/40 hover:bg-secondary-tint hover:text-secondary', drift: 'drift-2' },
    { name: 'FastAPI', color: 'hover:border-accent/40 hover:bg-accent-tint hover:text-accent', drift: 'drift-3' },
    { name: 'Node.js', color: 'hover:border-accent/40 hover:bg-accent-tint hover:text-accent', drift: 'drift-1' },
    { name: 'Firebase', color: 'hover:border-primary/40 hover:bg-primary-tint hover:text-primary', drift: 'drift-2' },
    { name: 'REST API', color: 'hover:border-secondary/40 hover:bg-secondary-tint hover:text-secondary', drift: 'drift-3' },
    { name: 'VS Code', color: 'hover:border-primary/40 hover:bg-primary-tint hover:text-primary', drift: 'drift-1' },
    { name: 'Antigravity', color: 'hover:border-accent/40 hover:bg-accent-tint hover:text-accent', drift: 'drift-2' },
    { name: 'Hostinger', color: 'hover:border-primary/40 hover:bg-primary-tint hover:text-primary', drift: 'drift-1' },
    { name: 'Vercel', color: 'hover:border-accent/40 hover:bg-accent-tint hover:text-accent', drift: 'drift-2' },
];

/* ── Presentation-only grouping. Every label below is an existing skill/badge name. ── */
const skillCategory: Record<string, string> = {
    'React.js': 'Frontend',
    'Tailwind CSS': 'Frontend',
    'JavaScript': 'Language',
    'HTML5 / CSS3': 'Frontend',
    'UI/UX Design': 'Design',
    'PostgreSQL': 'Database',
};

/* The full-stack split, top-of-section: Frontend, Backend, Database, Deployment */
const stackSplit = [
    {
        title: 'Frontend',
        icon: Layers,
        tint: '#22d3ee',
        summary: 'Component-driven interfaces, responsive layouts and design systems.',
        items: ['React.js', 'JS', 'Tailwind CSS',],
    },
    {
        title: 'Backend',
        icon: Server,
        tint: '#8b5cf6',
        summary: 'RESTful microservices, API architecture and server-side business logic.',
        items: ['Python', 'FastAPI', 'Node.js',],
    },
    {
        title: 'Database',
        icon: Database,
        tint: '#10b981',
        summary: 'Relational schemas, NoSQL document stores and optimized queries.',
        items: ['PostgreSQL', 'Firebase','MySQL'],
    },
    {
        title: 'Deployment',
        icon: Cloud,
        tint: '#f59e0b',
        summary: 'Live production hosting, continuous deployment and custom domain setup.',
        items: ['Hostinger', 'Vercel','Godaddy'],
    },
];

/* Professional grouping of the toolkit — organised by discipline. */
const toolkit = [
    { title: 'Programming Languages', icon: Braces, tint: '#22d3ee', items: ['JavaScript', 'Python'] },
    { title: 'Frontend', icon: Code2, tint: '#00d4ff', items: ['React.js', 'Tailwind CSS', 'HTML5 / CSS3', 'Responsive Design'] },
    { title: 'Backend', icon: Server, tint: '#8b5cf6', items: ['Python', 'FastAPI', 'Node.js', 'REST API', 'API Integration'] },
    { title: 'Database', icon: Database, tint: '#10b981', items: ['PostgreSQL', 'Firebase'] },
    { title: 'Deployment & Hosting', icon: Cloud, tint: '#f59e0b', items: ['Hostinger', 'Vercel'] },
    { title: 'Design', icon: Palette, tint: '#f472b6', items: ['UI/UX Design', 'Wireframing', 'Prototyping'] },
    { title: 'Tools & Version Control', icon: Wrench, tint: '#fbbf24', items: ['Git / GitHub', 'Postman', 'VS Code', 'Antigravity'] },
];

const badgeStyle = (name: string) => badges.find((b) => b.name === name)?.color ?? '';

/* ────────────────────────────────────────────────────────────
   Bike Speedometer Gauge UI: 240° Tachometer arc + sweeping needle
   ──────────────────────────────────────────────────────────── */
const ARC_LENGTH = 192.68; // 240-degree arc length for radius 46
const ARC_PATH = 'M 20.16 83 A 46 46 0 1 1 99.84 83';

// Notch ticks around the 240-degree speedometer dial: 0%, 25%, 50%, 75%, 100%
const TICKS = [-120, -60, 0, 60, 120].map((deg) => {
    const rad = ((deg - 90) * Math.PI) / 180;
    return {
        x1: 60 + 49 * Math.cos(rad),
        y1: 60 + 49 * Math.sin(rad),
        x2: 60 + 54 * Math.cos(rad),
        y2: 60 + 54 * Math.sin(rad),
        isMajor: deg === -120 || deg === 0 || deg === 120,
    };
});

/* Looping digital readout synchronized with the needle and arc sweep */
function LoopingCounter({ end, active }: { end: number; active: boolean }) {
    const [val, setVal] = useState(0);

    useEffect(() => {
        if (!active) {
            setVal(0);
            return;
        }

        let startTime: number | null = null;
        let animId: number;
        const total = 3600; // 3.6s full cycle
        const up = 1600;    // 1.6s accelerate up
        const hold = 1100;  // 1.1s hold at target percentage (never exceeds end)
        const down = 900;   // 0.9s return to 0

        const tick = (time: number) => {
            if (startTime === null) startTime = time;
            const elapsed = (time - startTime) % total;

            if (elapsed < up) {
                const p = elapsed / up;
                const ease = 1 - Math.pow(2, -10 * p);
                setVal(Math.min(end, Math.max(0, Math.round(ease * end))));
            } else if (elapsed < up + hold) {
                setVal(end); // strictly stays at skill level, never touches 100%
            } else {
                const p = (elapsed - up - hold) / down;
                setVal(Math.min(end, Math.max(0, Math.round(end * (1 - p)))));
            }
            animId = requestAnimationFrame(tick);
        };

        animId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(animId);
    }, [end, active]);

    return <>{val}%</>;
}

function SkillDial({ skill, index }: { skill: (typeof skills)[0]; index: number }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
    const gradientId = `dial-${index}`;
    const accent = tone(skill.color);
    const targetAngle = -120 + (skill.level / 100) * 240;
    const targetOffset = ARC_LENGTH * (1 - skill.level / 100);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 26, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
        >
            <GlassCard
                glow
                className="group flex h-full flex-col items-center p-5 text-center transition-all duration-500 hover:-translate-y-2 sm:p-6"
            >
                {/* Colour bloom that wakes up on hover */}
                <div
                    className="pointer-events-none absolute inset-x-0 -top-16 h-32 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-50"
                    style={{ background: `radial-gradient(circle, ${accent}, transparent 70%)` }}
                />

                {/* Speedometer Gauge Dial Container */}
                <div className="relative h-[124px] w-[124px] sm:h-[140px] sm:w-[140px]">
                    <svg viewBox="0 0 120 120" className="h-full w-full">
                        <defs>
                            <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor={accent} stopOpacity="0.4" />
                                <stop offset="60%" stopColor={accent} />
                                <stop offset="100%" stopColor="#ffffff" />
                            </linearGradient>
                            {/* Needle gradient */}
                            <linearGradient id={`needle-${index}`} x1="0%" y1="100%" x2="0%" y2="0%">
                                <stop offset="0%" stopColor="#0f172a" />
                                <stop offset="50%" stopColor={accent} />
                                <stop offset="100%" stopColor="#ffffff" />
                            </linearGradient>
                        </defs>

                        {/* Speedometer Gauge Tick Marks */}
                        {TICKS.map((tick, i) => (
                            <line
                                key={i}
                                x1={tick.x1}
                                y1={tick.y1}
                                x2={tick.x2}
                                y2={tick.y2}
                                stroke={tick.isMajor ? accent : 'rgba(15,23,42,0.18)'}
                                strokeWidth={tick.isMajor ? '2' : '1.2'}
                                strokeLinecap="round"
                            />
                        ))}

                        {/* Background Track Arc */}
                        <path
                            d={ARC_PATH}
                            fill="none"
                            stroke="rgba(15,23,42,0.08)"
                            strokeWidth="7"
                            strokeLinecap="round"
                        />

                        {/* Active Progress Arc (increases looply, strictly up to skill.level, never 100%) */}
                        <motion.path
                            d={ARC_PATH}
                            fill="none"
                            stroke={`url(#${gradientId})`}
                            strokeWidth="7"
                            strokeLinecap="round"
                            strokeDasharray={ARC_LENGTH}
                            animate={{
                                strokeDashoffset: inView
                                    ? [ARC_LENGTH, targetOffset, targetOffset, ARC_LENGTH]
                                    : ARC_LENGTH,
                            }}
                            transition={{
                                duration: 3.6,
                                repeat: Infinity,
                                times: [0, 0.44, 0.75, 1],
                                ease: ['easeOut', 'linear', 'easeInOut'],
                            }}
                            style={{
                                filter: `drop-shadow(0 2px 6px ${accent}60)`,
                            }}
                        />

                        {/* ─── Bike Speedometer Needle (sweeps looply up to skill.level, never 100%) ─── */}
                        <motion.g
                            initial={{ rotate: -120 }}
                            animate={{
                                rotate: inView
                                    ? [-120, targetAngle, targetAngle, -120]
                                    : -120,
                            }}
                            whileHover={{ rotate: targetAngle + 4 }}
                            transition={{
                                duration: 3.6,
                                repeat: Infinity,
                                times: [0, 0.44, 0.75, 1],
                                ease: ['easeOut', 'linear', 'easeInOut'],
                            }}
                            style={{ transformOrigin: '60px 60px' }}
                        >
                            {/* Counterweight rear tail */}
                            <line
                                x1="60"
                                y1="60"
                                x2="60"
                                y2="70"
                                stroke="#475569"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                            />
                            {/* Main Tapered Needle */}
                            <line
                                x1="60"
                                y1="60"
                                x2="60"
                                y2="18"
                                stroke={`url(#needle-${index})`}
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                style={{ filter: `drop-shadow(0 0 5px ${accent})` }}
                            />
                            {/* Glowing needle tip pip */}
                            <circle cx="60" cy="18" r="2.2" fill={accent} style={{ filter: `drop-shadow(0 0 3px #ffffff)` }} />
                        </motion.g>

                        {/* Center Gauge Hub (Bike dial metallic center pivot) */}
                        <circle cx="60" cy="60" r="6" fill="#0b1220" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" />
                        <circle cx="60" cy="60" r="2.5" fill={accent} />
                    </svg>

                    {/* Digital Readout inside gauge bottom recess (synchronized with loop, never exceeds skill.level) */}
                    <div className="absolute inset-x-0 bottom-1 flex flex-col items-center">
                        <span className="font-display text-[1.3rem] font-extrabold tracking-tight sm:text-[1.45rem]" style={{ color: accent }}>
                            <LoopingCounter end={skill.level} active={inView} />
                        </span>
                    </div>
                </div>

                <p className="mt-3 font-display text-[0.875rem] font-semibold tracking-tight text-ink sm:mt-4 sm:text-[0.9375rem]">
                    {skill.name}
                </p>
                <span className="mt-1.5 rounded-pill border border-border bg-surface px-2.5 py-0.5 text-[0.625rem] uppercase tracking-[0.12em] text-faint">
                    {skillCategory[skill.name]}
                </span>
            </GlassCard>
        </motion.div>
    );
}

export function Skills() {
    return (
        <section id="skills" className="section-y relative z-10 overflow-hidden">
            {/* Faint precision grid behind the section */}
            <div className="pointer-events-none absolute inset-0 grid-lines mask-radial opacity-50" />

            <div className="shell relative z-10">
                <SectionHeading
                    eyebrow="Capabilities"
                    title="Full Stack"
                    highlight="Development"
                    description="Frontend, Backend, Database, and Deployment — measured honestly, grouped by discipline."
                    className="mb-12 sm:mb-16"
                />

                {/* ─── Frontend / Backend split — the headline of the section ─── */}
                <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {stackSplit.map((half, i) => {
                        const t = toneStyle(half.tint);
                        return (
                            <motion.div
                                key={half.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <GlassCard glow className="group h-full p-6 transition-transform duration-500 hover:-translate-y-1 sm:p-8">
                                    <div
                                        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-50"
                                        style={{ background: `radial-gradient(circle, ${t.fg}, transparent 70%)` }}
                                    />

                                    <div className="flex items-center gap-3.5">
                                        <span
                                            className="grid h-12 w-12 shrink-0 place-items-center rounded-[14px] transition-transform duration-500 group-hover:scale-110"
                                            style={{ background: t.bg, boxShadow: `inset 0 0 0 1px ${t.ring}` }}
                                        >
                                            <half.icon className="h-6 w-6" style={{ color: t.fg }} />
                                        </span>
                                        <div className="min-w-0">
                                            <h3 className="font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
                                                {half.title}
                                            </h3>
                                            <p className="mt-0.5 text-[0.8125rem] leading-snug text-muted">{half.summary}</p>
                                        </div>
                                    </div>

                                    <ul className="mt-6 flex flex-wrap gap-2">
                                        {half.items.map((item) => (
                                            <li
                                                key={item}
                                                className="cursor-default rounded-pill border border-border bg-white px-3 py-1.5 text-[0.75rem] font-medium text-muted shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:text-ink sm:text-[0.8125rem]"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </div>

                {/* ─── Proficiency dials ─── */}
                <div className="mt-16 sm:mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-7 flex items-center gap-4 sm:mb-8"
                    >
                        <h3 className="shrink-0 font-display text-lg font-bold tracking-tight text-ink sm:text-xl">Proficiency</h3>
                        <span className="h-px flex-1 bg-gradient-to-r from-border-strong to-transparent" />
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
                        {skills.map((skill, index) => (
                            <SkillDial key={skill.name} skill={skill} index={index} />
                        ))}
                    </div>
                </div>

                {/* ─── Categorised toolkit ─── */}
                <div className="mt-16 sm:mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-7 flex items-center gap-4 sm:mb-8"
                    >
                        <h3 className="shrink-0 font-display text-lg font-bold tracking-tight text-ink sm:text-xl">Toolkit</h3>
                        <span className="h-px flex-1 bg-gradient-to-r from-border-strong to-transparent" />
                    </motion.div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {toolkit.map((group, i) => {
                            const t = toneStyle(group.tint);
                            return (
                                <motion.div
                                    key={group.title}
                                    initial={{ opacity: 0, y: 22 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <GlassCard
                                        glow
                                        className="group h-full p-5 transition-transform duration-500 hover:-translate-y-1 sm:p-6"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span
                                                className="grid h-10 w-10 shrink-0 place-items-center rounded-[13px] transition-transform duration-500 group-hover:scale-110"
                                                style={{ background: t.bg, boxShadow: `inset 0 0 0 1px ${t.ring}` }}
                                            >
                                                <group.icon className="h-5 w-5" style={{ color: t.fg }} />
                                            </span>
                                            <h4 className="font-display text-[0.9375rem] font-bold tracking-tight text-ink">
                                                {group.title}
                                            </h4>
                                        </div>

                                        <ul className="mt-4 flex flex-wrap gap-2">
                                            {group.items.map((item) => (
                                                <li
                                                    key={item}
                                                    className={`cursor-default rounded-pill border border-border bg-white px-3 py-1.5 text-[0.75rem] font-medium text-muted shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 ${badgeStyle(item)}`}
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </GlassCard>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
