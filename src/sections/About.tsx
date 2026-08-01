import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Layers, Palette, Database, Wrench, MapPin, Mail } from 'lucide-react';
import { toneStyle } from '../lib/palette';

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
        <section id="about" className="section-y relative z-10">
            <div className="shell">
                <SectionHeading
                    eyebrow="About"
                    title="The person behind"
                    highlight="the pixels"
                    description="A quick look at the story, the schooling and the day-to-day craft."
                    className="mb-12 sm:mb-16"
                />

                <div className="grid items-stretch gap-5 sm:gap-6 lg:grid-cols-12">

                    {/* ══════════ Story card ══════════ */}
                    <Reveal direction="right" className="lg:col-span-7">
                        <GlassCard glow className="flex h-full flex-col p-6 sm:p-9 lg:p-10">
                            <div className="flex flex-col items-center gap-7 text-center sm:flex-row sm:items-start sm:gap-8 sm:text-left">
                                {/* Portrait with spinning conic ring */}
                                <div className="group relative h-44 w-44 shrink-0 animate-float gpu sm:h-52 sm:w-52 md:h-56 md:w-56 lg:h-64 lg:w-64">
                                    <div
                                        className="absolute -inset-[2.5px] rounded-full opacity-90"
                                        style={{
                                            background: 'conic-gradient(from 0deg, #2563eb, #4f46e5, #7c3aed, #059669, #2563eb)',
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
                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent to-primary/10 transition-opacity duration-500 group-hover:opacity-0" />
                                    </div>
                                </div>

                                <div className="min-w-0 flex-1">
                                    <h3 className="font-display text-xl font-bold shimmer-text sm:text-2xl lg:text-3xl">The Journey</h3>

                                    <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">
                                        As a Computer Science and Engineering student at Gnanamani College of Technology, I'm deeply passionate about the intersection of design, technology, and user experience.
                                    </p>
                                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                                        With a solid foundation in component-based UI architecture, responsive web design, and a deep love for Tailwind CSS and React.js, I continuously strive to bring static designs to life. My goal is to build products that are not just functional, but visually stunning and highly interactive.
                                    </p>

                                    <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                                        <span className="inline-flex items-center gap-1.5 rounded-pill border border-border bg-surface px-3.5 py-1.5 text-xs text-muted transition-colors hover:border-violet/40 hover:bg-violet/5 hover:text-ink">
                                            <MapPin className="h-3.5 w-3.5 shrink-0 text-violet" /> Namakkal, Tamil Nadu
                                        </span>
                                        <a
                                            href="mailto:prabur2k5@gmail.com"
                                            className="inline-flex max-w-full items-center gap-1.5 rounded-pill border border-border bg-surface px-3.5 py-1.5 text-xs text-muted transition-colors hover:border-primary/40 hover:bg-primary-tint hover:text-primary"
                                        >
                                            <Mail className="h-3.5 w-3.5 shrink-0 text-primary" />
                                            <span className="truncate">prabur2k5@gmail.com</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Skills overview strip */}
                            <div className="mt-8 grid gap-3 border-t border-border pt-7 sm:mt-9 sm:grid-cols-2 sm:pt-8">
                                {disciplines.map((d, i) => {
                                    const t = toneStyle(d.tint);
                                    return (
                                        <motion.div
                                            key={d.label}
                                            initial={{ opacity: 0, y: 14 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.07, duration: 0.5 }}
                                            className="group/d flex items-start gap-3 rounded-[15px] border border-border bg-white p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-e2"
                                        >
                                            <span
                                                className="grid h-9 w-9 shrink-0 place-items-center rounded-[11px] transition-transform duration-300 group-hover/d:scale-110"
                                                style={{ background: t.bg, boxShadow: `inset 0 0 0 1px ${t.ring}` }}
                                            >
                                                <d.icon className="h-[18px] w-[18px]" style={{ color: t.fg }} />
                                            </span>
                                            <div className="min-w-0">
                                                <p className="text-[0.8125rem] font-semibold text-ink">{d.label}</p>
                                                <p className="mt-0.5 truncate text-[0.75rem] text-faint">{d.detail}</p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </GlassCard>
                    </Reveal>

                    {/* ══════════ Education + Experience ══════════ */}
                    <Reveal direction="left" delay={0.12} className="lg:col-span-5">
                        <GlassCard glow className="flex h-full flex-col gap-9 p-6 sm:gap-10 sm:p-9 lg:p-10">

                            {/* ─── Education timeline ─── */}
                            <div ref={timelineRef}>
                                <div className="mb-6 flex items-center gap-3 sm:mb-7">
                                    <span className="grid h-9 w-9 place-items-center rounded-[11px] bg-accent-tint ring-1 ring-accent/20">
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
                                            background: 'linear-gradient(180deg, var(--color-accent), rgba(5,150,105,0.12))',
                                            transform: timelineInView ? 'scaleY(1)' : 'scaleY(0)',
                                            transition: 'transform 1.1s cubic-bezier(0.16,1,0.3,1)',
                                        }}
                                    />

                                    {education.map((edu, i) => (
                                        <motion.div key={i} variants={itemVariants} className="relative">
                                            {/* Node */}
                                            <span
                                                className={`absolute -left-6 top-1.5 grid h-[11px] w-[11px] place-items-center rounded-full ring-4 ring-white ${edu.isCurrent
                                                    ? 'bg-accent shadow-[0_0_0_3px_rgba(5,150,105,0.16)]'
                                                    : 'bg-slate-300'
                                                    }`}
                                            >
                                                {edu.isCurrent && (
                                                    <span className="absolute h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                                                )}
                                            </span>

                                            <div className="flex flex-wrap items-start justify-between gap-2">
                                                <h5 className="font-semibold text-ink">{edu.degree}</h5>
                                                <span className="rounded-pill border border-border bg-surface px-2.5 py-1 text-[0.625rem] uppercase tracking-[0.1em] text-faint">
                                                    {edu.date}
                                                </span>
                                            </div>
                                            <p className="mt-1 text-sm font-medium text-accent">{edu.school}</p>
                                            <p className="mt-1 text-xs text-faint">{edu.score}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* ─── Experience cards ─── */}
                            <div>
                                <div className="mb-6 flex items-center gap-3 sm:mb-7">
                                    <span className="grid h-9 w-9 place-items-center rounded-[11px] bg-secondary-tint ring-1 ring-secondary/20">
                                        <Briefcase className="h-[18px] w-[18px] text-secondary" />
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
                                            className="group/exp relative overflow-hidden rounded-[15px] border border-border bg-white p-4 pl-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/30 hover:shadow-e2"
                                        >
                                            <span className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-secondary to-violet opacity-50 transition-opacity duration-300 group-hover/exp:opacity-100" />
                                            <div className="flex flex-wrap items-start justify-between gap-2">
                                                <h5 className="font-semibold text-ink">{exp.role}</h5>
                                                <span
                                                    className={`rounded-pill border px-2.5 py-1 text-[0.625rem] uppercase tracking-[0.1em] ${exp.isCurrent
                                                        ? 'border-accent/25 bg-accent-tint text-accent'
                                                        : 'border-border bg-surface text-faint'
                                                        }`}
                                                >
                                                    {exp.date}
                                                </span>
                                            </div>
                                            <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-secondary">
                                                {exp.company}
                                                <span className="inline-flex items-center gap-1 text-xs font-normal text-faint">
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
