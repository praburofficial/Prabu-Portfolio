import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { SectionHeading } from '../components/SectionHeading';
import { GlassCard } from '../components/GlassCard';
import { Code2, Palette, Database, Wrench, Server, Braces, Layers } from 'lucide-react';
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

/* The full-stack split, top-of-section. Both halves list existing technologies. */
const stackSplit = [
    {
        title: 'Frontend',
        icon: Layers,
        tint: '#22d3ee',
        summary: 'Component-driven interfaces, responsive layouts and design systems.',
        items: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 / CSS3', 'Responsive Design'],
    },
    {
        title: 'Backend',
        icon: Server,
        tint: '#8b5cf6',
        summary: 'REST services, data modelling and API integration end to end.',
        items: ['Python', 'FastAPI', 'Node.js', 'REST API', 'API Integration', 'Firebase', 'PostgreSQL'],
    },
];

/* Professional grouping of the toolkit — same technologies, organised by discipline. */
const toolkit = [
    { title: 'Programming Languages', icon: Braces, tint: '#22d3ee', items: ['JavaScript', 'Python'] },
    { title: 'Frontend', icon: Code2, tint: '#00d4ff', items: ['React.js', 'Tailwind CSS', 'HTML5 / CSS3', 'Responsive Design'] },
    { title: 'Backend', icon: Server, tint: '#8b5cf6', items: ['Python', 'FastAPI', 'Node.js', 'REST API', 'API Integration'] },
    { title: 'Database', icon: Database, tint: '#34d399', items: ['PostgreSQL', 'Firebase'] },
    { title: 'Design', icon: Palette, tint: '#f472b6', items: ['UI/UX Design', 'Wireframing', 'Prototyping'] },
    { title: 'Tools & Version Control', icon: Wrench, tint: '#fbbf24', items: ['Git / GitHub', 'Postman', 'VS Code'] },
];

const badgeStyle = (name: string) => badges.find((b) => b.name === name)?.color ?? '';

/* ────────────────────────────────────────────────────────────
   A single proficiency dial: gradient-stroked SVG ring + counter
   ──────────────────────────────────────────────────────────── */
const RADIUS = 52;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function SkillDial({ skill, index }: { skill: (typeof skills)[0]; index: number }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
    const gradientId = `dial-${index}`;
    const accent = tone(skill.color);

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
                className="group flex h-full flex-col items-center p-5 text-center transition-transform duration-500 hover:-translate-y-1.5 sm:p-6"
            >
                {/* Colour bloom that wakes up on hover */}
                <div
                    className="pointer-events-none absolute inset-x-0 -top-16 h-32 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-40"
                    style={{ background: `radial-gradient(circle, ${accent}, transparent 70%)` }}
                />

                <div className="relative h-[112px] w-[112px] sm:h-[132px] sm:w-[132px]">
                    <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                        <defs>
                            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor={accent} />
                                <stop offset="100%" stopColor={accent} stopOpacity="0.45" />
                            </linearGradient>
                        </defs>

                        {/* Track */}
                        <circle
                            cx="60"
                            cy="60"
                            r={RADIUS}
                            fill="none"
                            stroke="rgba(15,23,42,0.07)"
                            strokeWidth="7"
                        />
                        {/* Progress */}
                        <circle
                            cx="60"
                            cy="60"
                            r={RADIUS}
                            fill="none"
                            stroke={`url(#${gradientId})`}
                            strokeWidth="7"
                            strokeLinecap="round"
                            strokeDasharray={CIRCUMFERENCE}
                            strokeDashoffset={inView ? CIRCUMFERENCE * (1 - skill.level / 100) : CIRCUMFERENCE}
                            style={{
                                transition: 'stroke-dashoffset 1.6s cubic-bezier(0.16,1,0.3,1)',
                                filter: `drop-shadow(0 3px 6px ${accent}45)`,
                            }}
                        />
                    </svg>

                    <div className="absolute inset-0 grid place-items-center">
                        <span className="font-display text-[1.5rem] font-bold tracking-tight sm:text-[1.75rem]" style={{ color: accent }}>
                            {inView ? <CountUp end={skill.level} duration={1.6} suffix="%" /> : '0%'}
                        </span>
                    </div>
                </div>

                <p className="mt-4 font-display text-[0.875rem] font-semibold tracking-tight text-ink sm:mt-5 sm:text-[0.9375rem]">
                    {skill.name}
                </p>
                <span className="mt-2 rounded-pill border border-border bg-surface px-2.5 py-0.5 text-[0.625rem] uppercase tracking-[0.12em] text-faint">
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
                    description="React on the frontend, Python and FastAPI on the backend — measured honestly, grouped by discipline."
                    className="mb-12 sm:mb-16"
                />

                {/* ─── Frontend / Backend split — the headline of the section ─── */}
                <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
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

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
