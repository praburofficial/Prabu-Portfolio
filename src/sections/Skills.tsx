import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { SectionHeading } from '../components/SectionHeading';
import { GlassCard } from '../components/GlassCard';
import { Code2, Palette, Database, Wrench, Server } from 'lucide-react';

const skills = [
    { name: 'React.js', level: 90, color: '#00d4ff' },
    { name: 'Tailwind CSS', level: 95, color: '#7c3aed' },
    { name: 'JavaScript', level: 85, color: '#00FF9F' },
    { name: 'HTML5 / CSS3', level: 90, color: '#ff2d78' },
    { name: 'UI/UX Design', level: 85, color: '#00d4ff' },
    { name: 'PostgreSQL', level: 75, color: '#7c3aed' },
];

const badges = [
    { name: 'Wireframing', color: 'hover:border-pink-500 hover:text-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]', drift: 'drift-1' },
    { name: 'Prototyping', color: 'hover:border-purple-500 hover:text-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]', drift: 'drift-2' },
    { name: 'Responsive Design', color: 'hover:border-blue-500 hover:text-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]', drift: 'drift-3' },
    { name: 'Git / GitHub', color: 'hover:border-orange-500 hover:text-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]', drift: 'drift-1' },
    { name: 'Postman', color: 'hover:border-amber-500 hover:text-amber-500 hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]', drift: 'drift-2' },
    { name: 'API Integration', color: 'hover:border-emerald-500 hover:text-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]', drift: 'drift-3' },
    { name: 'PostgreSQL', color: 'hover:border-cyan-500 hover:text-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]', drift: 'drift-1' },
    { name: 'Python', color: 'hover:border-yellow-500 hover:text-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.5)]', drift: 'drift-2' },
    { name: 'FastAPI', color: 'hover:border-teal-500 hover:text-teal-500 hover:shadow-[0_0_15px_rgba(20,184,166,0.5)]', drift: 'drift-3' },
];

/* ── Presentation-only grouping. Every label below is an existing skill/badge name. ── */
const skillCategory: Record<string, string> = {
    'React.js': 'Frameworks',
    'Tailwind CSS': 'Frameworks',
    'JavaScript': 'Languages',
    'HTML5 / CSS3': 'Languages',
    'UI/UX Design': 'Design',
    'PostgreSQL': 'Database',
};

const toolkit = [
    { title: 'Frontend', icon: Code2, tint: '#22d3ee', items: ['Responsive Design'] },
    { title: 'Design', icon: Palette, tint: '#f472b6', items: ['Wireframing', 'Prototyping'] },
    { title: 'Backend', icon: Server, tint: '#8b5cf6', items: ['Python', 'FastAPI', 'API Integration'] },
    { title: 'Database', icon: Database, tint: '#34d399', items: ['PostgreSQL'] },
    { title: 'Tools', icon: Wrench, tint: '#fbbf24', items: ['Git / GitHub', 'Postman'] },
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
                className="group flex h-full flex-col items-center p-6 text-center transition-transform duration-500 hover:-translate-y-1.5"
            >
                {/* Colour bloom that wakes up on hover */}
                <div
                    className="pointer-events-none absolute inset-x-0 -top-16 h-32 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-60"
                    style={{ background: `radial-gradient(circle, ${skill.color}, transparent 70%)` }}
                />

                <div className="relative h-[132px] w-[132px]">
                    <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                        <defs>
                            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor={skill.color} />
                                <stop offset="100%" stopColor={skill.color} stopOpacity="0.45" />
                            </linearGradient>
                        </defs>

                        {/* Track */}
                        <circle
                            cx="60"
                            cy="60"
                            r={RADIUS}
                            fill="none"
                            stroke="rgba(255,255,255,0.06)"
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
                                filter: `drop-shadow(0 0 6px ${skill.color}80)`,
                            }}
                        />
                    </svg>

                    <div className="absolute inset-0 grid place-items-center">
                        <span className="font-display text-[1.75rem] font-bold tracking-tight" style={{ color: skill.color }}>
                            {inView ? <CountUp end={skill.level} duration={1.6} suffix="%" /> : '0%'}
                        </span>
                    </div>
                </div>

                <p className="mt-5 font-display text-[0.9375rem] font-semibold tracking-tight text-ink">
                    {skill.name}
                </p>
                <span className="mt-2 rounded-pill border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 text-[0.625rem] uppercase tracking-[0.12em] text-faint">
                    {skillCategory[skill.name]}
                </span>
            </GlassCard>
        </motion.div>
    );
}

export function Skills() {
    return (
        <section id="skills" className="relative z-10 py-24 sm:py-32">
            {/* Faint precision grid behind the section */}
            <div className="pointer-events-none absolute inset-0 grid-lines mask-radial opacity-30" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <SectionHeading
                    eyebrow="Capabilities"
                    title="Skills &"
                    highlight="craft"
                    description="Where I spend my hours — measured honestly, grouped by discipline."
                    className="mb-16"
                />

                {/* ─── Proficiency dials ─── */}
                <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
                    {skills.map((skill, index) => (
                        <SkillDial key={skill.name} skill={skill} index={index} />
                    ))}
                </div>

                {/* ─── Categorised toolkit ─── */}
                <div className="mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 flex items-center gap-4"
                    >
                        <h3 className="font-display text-xl font-bold tracking-tight text-ink">Toolkit</h3>
                        <span className="h-px flex-1 bg-gradient-to-r from-white/12 to-transparent" />
                    </motion.div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                        {toolkit.map((group, i) => (
                            <motion.div
                                key={group.title}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <GlassCard
                                    glow
                                    className="group h-full p-5 transition-transform duration-500 hover:-translate-y-1"
                                >
                                    <div className="flex items-center gap-3">
                                        <span
                                            className="grid h-10 w-10 place-items-center rounded-[13px] transition-transform duration-500 group-hover:scale-110"
                                            style={{ background: `${group.tint}14`, boxShadow: `inset 0 0 0 1px ${group.tint}33` }}
                                        >
                                            <group.icon className="h-5 w-5" style={{ color: group.tint }} />
                                        </span>
                                        <h4 className="font-display text-[0.9375rem] font-bold tracking-tight text-ink">
                                            {group.title}
                                        </h4>
                                    </div>

                                    <ul className="mt-4 flex flex-wrap gap-2">
                                        {group.items.map((item) => (
                                            <li
                                                key={item}
                                                className={`cursor-default rounded-pill border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[0.75rem] font-medium text-muted transition-all duration-300 hover:-translate-y-0.5 ${badgeStyle(item)}`}
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
