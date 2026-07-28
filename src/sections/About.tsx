import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Layers, Palette, Database, Wrench, MapPin, Mail } from 'lucide-react';

const education = [
    { degree: 'B.E. Computer Science', school: 'Gnanamani College of Technology', date: 'May 2026', score: 'CGPA: 7.86', isCurrent: true },
    { degree: 'Higher Secondary (XII)', school: 'GHSS, Puduchatram', date: 'May 2022', score: 'Score: 73%', isCurrent: false },
    { degree: 'SSLC (X)', school: 'GHSS, Kalangani', date: 'Mar 2020', score: 'Score: 69%', isCurrent: false },
];

/* Ordered oldest first, by start date. */
const experience = [
    { role: 'Frontend Developer Intern', company: 'Code Blaza Technology', location: 'Namakkal', date: 'Mar \'25 - May \'26', isCurrent: false },
    { role: 'Web Developer Intern', company: 'Optimus Technocrates pvt ltd', location: 'Salem', date: 'Jul \'25 - Aug \'25', isCurrent: false },
    { role: 'Fullstack Developer Intern', company: 'Qmex', location: 'Coimbatore', date: 'Aug \'26 - Present', isCurrent: true },
];

/* Skills overview — the four disciplines listed on the résumé. */
const disciplines = [
    { icon: Layers, label: 'Frontend Development', detail: 'React.js · JavaScript · Tailwind CSS', tint: '#22d3ee' },
    { icon: Palette, label: 'UI/UX Design', detail: 'Wireframing · Prototyping', tint: '#f472b6' },
    { icon: Database, label: 'Backend & Database', detail: 'Python · FastAPI · PostgreSQL', tint: '#8b5cf6' },
    { icon: Wrench, label: 'Tools & Version Control', detail: 'Git · GitHub · Postman · VS Code', tint: '#34d399' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function About() {
    const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section id="about" className="relative z-10 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <SectionHeading
                    eyebrow="About"
                    title="The person behind"
                    highlight="the pixels"
                    description="A quick look at the story, the schooling and the day-to-day craft."
                    className="mb-16"
                />

                <div className="grid items-stretch gap-6 lg:grid-cols-12">

                    {/* ══════════ Story card ══════════ */}
                    <Reveal direction="right" className="lg:col-span-7">
                        <GlassCard glow className="flex h-full flex-col p-8 sm:p-10">
                            <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:text-left">
                                {/* Portrait with spinning conic ring */}
                                <div className="group relative h-40 w-40 shrink-0 animate-float sm:h-44 sm:w-44">
                                    <div
                                        className="absolute -inset-[2px] rounded-full opacity-90"
                                        style={{
                                            background: 'conic-gradient(from 0deg, #22d3ee, #8b5cf6, #f472b6, #22d3ee)',
                                            animation: 'conic-spin 8s linear infinite',
                                        }}
                                    />
                                    <div className="absolute inset-[3px] rounded-full bg-background" />
                                    <div className="absolute inset-[6px] overflow-hidden rounded-full">
                                        <img
                                            src="./Prabu.jpeg"
                                            alt="Prabu R Profile"
                                            loading="lazy"
                                            decoding="async"
                                            className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                                        />
                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent to-white/10 transition-opacity duration-500 group-hover:opacity-0" />
                                    </div>
                                </div>

                                <div className="min-w-0">
                                    <h3 className="font-display text-2xl font-bold shimmer-text">The Journey</h3>

                                    <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
                                        <span className="inline-flex items-center gap-1.5 rounded-pill surface px-3 py-1 text-[0.75rem] text-muted">
                                            <MapPin className="h-3.5 w-3.5 text-secondary-soft" /> Namakkal, Tamil Nadu
                                        </span>
                                        <a
                                            href="mailto:prabur2k5@gmail.com"
                                            className="inline-flex items-center gap-1.5 rounded-pill surface px-3 py-1 text-[0.75rem] text-muted transition-colors hover:border-primary/40 hover:text-primary"
                                        >
                                            <Mail className="h-3.5 w-3.5 text-primary" /> prabur2k5@gmail.com
                                        </a>
                                    </div>

                                    <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted">
                                        As a Computer Science and Engineering student at Gnanamani College of Technology, I'm deeply passionate about the intersection of design, technology, and user experience.
                                    </p>
                                    <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">
                                        With a solid foundation in component-based UI architecture, responsive web design, and a deep love for Tailwind CSS and React.js, I continuously strive to bring static designs to life. My goal is to build products that are not just functional, but visually stunning and highly interactive.
                                    </p>
                                </div>
                            </div>

                            {/* Skills overview strip */}
                            <div className="mt-9 grid gap-3 border-t border-white/[0.07] pt-8 sm:grid-cols-2">
                                {disciplines.map((d, i) => (
                                    <motion.div
                                        key={d.label}
                                        initial={{ opacity: 0, y: 14 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.07, duration: 0.5 }}
                                        className="group/d flex items-start gap-3 rounded-[15px] border border-white/[0.06] bg-white/[0.02] p-3.5 transition-colors duration-300 hover:border-white/12 hover:bg-white/[0.045]"
                                    >
                                        <span
                                            className="grid h-9 w-9 shrink-0 place-items-center rounded-[11px] transition-transform duration-300 group-hover/d:scale-110"
                                            style={{ background: `${d.tint}14`, boxShadow: `inset 0 0 0 1px ${d.tint}30` }}
                                        >
                                            <d.icon className="h-[18px] w-[18px]" style={{ color: d.tint }} />
                                        </span>
                                        <div className="min-w-0">
                                            <p className="text-[0.8125rem] font-semibold text-ink">{d.label}</p>
                                            <p className="mt-0.5 truncate text-[0.75rem] text-faint">{d.detail}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </GlassCard>
                    </Reveal>

                    {/* ══════════ Education + Experience ══════════ */}
                    <Reveal direction="left" delay={0.12} className="lg:col-span-5">
                        <GlassCard glow className="flex h-full flex-col gap-10 p-8 sm:p-10">

                            {/* ─── Education timeline ─── */}
                            <div ref={timelineRef}>
                                <div className="mb-7 flex items-center gap-3">
                                    <span className="grid h-9 w-9 place-items-center rounded-[11px] bg-accent/12 ring-1 ring-accent/25">
                                        <GraduationCap className="h-[18px] w-[18px] text-accent" />
                                    </span>
                                    <h4 className="font-display text-lg font-bold tracking-tight text-ink">Education</h4>
                                </div>

                                <motion.div
                                    className="relative space-y-7 pl-6"
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate={timelineInView ? 'visible' : 'hidden'}
                                >
                                    {/* Animated rail */}
                                    <div
                                        className="absolute left-[5px] top-1.5 bottom-1.5 w-px origin-top"
                                        style={{
                                            background: 'linear-gradient(180deg, var(--color-accent), rgba(52,211,153,0.15))',
                                            transform: timelineInView ? 'scaleY(1)' : 'scaleY(0)',
                                            transition: 'transform 1.1s cubic-bezier(0.16,1,0.3,1)',
                                        }}
                                    />

                                    {education.map((edu, i) => (
                                        <motion.div key={i} variants={itemVariants} className="relative">
                                            {/* Node */}
                                            <span
                                                className={`absolute -left-6 top-1.5 grid h-[11px] w-[11px] place-items-center rounded-full ring-4 ring-background ${edu.isCurrent
                                                    ? 'bg-accent shadow-[0_0_14px_var(--color-accent)]'
                                                    : 'bg-white/25'
                                                    }`}
                                            >
                                                {edu.isCurrent && (
                                                    <span className="absolute h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                                                )}
                                            </span>

                                            <div className="flex flex-wrap items-start justify-between gap-2">
                                                <h5 className="font-semibold text-ink">{edu.degree}</h5>
                                                <span className="rounded-pill border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[0.625rem] uppercase tracking-[0.1em] text-faint">
                                                    {edu.date}
                                                </span>
                                            </div>
                                            <p className="mt-1 text-sm text-accent">{edu.school}</p>
                                            <p className="mt-1 text-xs text-faint">{edu.score}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* ─── Experience cards ─── */}
                            <div>
                                <div className="mb-7 flex items-center gap-3">
                                    <span className="grid h-9 w-9 place-items-center rounded-[11px] bg-secondary/15 ring-1 ring-secondary/30">
                                        <Briefcase className="h-[18px] w-[18px] text-secondary-soft" />
                                    </span>
                                    <h4 className="font-display text-lg font-bold tracking-tight text-ink">Experience</h4>
                                </div>

                                <motion.div
                                    className="space-y-3"
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {experience.map((exp, i) => (
                                        <motion.div
                                            key={i}
                                            variants={itemVariants}
                                            className="group/exp relative overflow-hidden rounded-[15px] border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-400 hover:-translate-y-0.5 hover:border-secondary/30 hover:bg-white/[0.045]"
                                        >
                                            <span className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-secondary to-transparent opacity-60 transition-opacity duration-300 group-hover/exp:opacity-100" />
                                            <div className="flex flex-wrap items-start justify-between gap-2">
                                                <h5 className="font-semibold text-ink">{exp.role}</h5>
                                                <span
                                                    className={`rounded-pill border px-2.5 py-1 text-[0.625rem] uppercase tracking-[0.1em] ${exp.isCurrent
                                                        ? 'border-accent/25 bg-accent/10 text-accent'
                                                        : 'border-white/[0.08] bg-white/[0.04] text-faint'
                                                        }`}
                                                >
                                                    {exp.date}
                                                </span>
                                            </div>
                                            <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-secondary-soft">
                                                {exp.company}
                                                <span className="inline-flex items-center gap-1 text-xs text-faint">
                                                    <MapPin className="h-3 w-3" />
                                                    {exp.location}
                                                </span>
                                            </p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </GlassCard>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
