import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '../components/Button';
import { Github, Linkedin, ArrowUpRight, FileText, ChevronDown, Sparkles } from 'lucide-react';
import { CircuitComputerIcon } from '../components/CircuitComputerIcon';
import { ResumeModal } from '../components/ResumeModal';
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';

/* Stack chips — drawn from the technical skills listed on the résumé. */
const techStack = [
    'React.js',
    'JavaScript (ES6+)',
    'Tailwind CSS',
    'HTML5',
    'CSS3',
    'Python',
    'FastAPI',
    'PostgreSQL',
    'Git',
    'GitHub',
    'Postman',
    'VS Code',
];

const stats = [
    { value: 10, suffix: '+', label: 'Projects' },
    { value: 26, suffix: '', label: 'Certificates' },
    { value: 3, suffix: '', label: 'Internships' },
];

const ease = [0.16, 1, 0.3, 1] as const;

const rise = {
    hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { delay: 0.1 + i * 0.09, duration: 0.85, ease },
    }),
};

export function Hero() {
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
    const reduceMotion = useReducedMotion();

    return (
        <section
            id="home"
            className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-24 lg:pt-24"
        >
            {/* ─── Local ambience ─── */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div
                    className="absolute left-1/2 top-[-10%] h-[52rem] w-[52rem] -translate-x-1/2 rounded-full blur-[150px]"
                    style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.13), transparent 65%)' }}
                />
                <div
                    className="absolute right-[-10%] bottom-[-20%] h-[36rem] w-[36rem] rounded-full blur-[130px]"
                    style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.16), transparent 65%)' }}
                />
            </div>

            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

                {/* ══════════ Left — the pitch ══════════ */}
                <motion.div initial="hidden" animate="visible" className="relative z-10">

                    {/* Availability badge */}
                    <motion.div custom={0} variants={rise}>
                        <span className="inline-flex items-center gap-2.5 rounded-pill surface px-4 py-2">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_var(--color-accent)]" />
                            </span>
                            <span className="text-[0.8125rem] font-medium tracking-[-0.01em] text-ink">
                                Available for Work
                            </span>
                            <span className="h-3 w-px bg-white/15" />
                            <span className="text-[0.75rem] text-muted">Namakkal, TN</span>
                        </span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        custom={1}
                        variants={rise}
                        className="mt-8 font-display text-[clamp(3rem,9vw,5.75rem)] font-extrabold leading-[0.94] tracking-[-0.045em]"
                    >
                        <span className="text-gradient block">PRABU R</span>
                    </motion.h1>

                    {/* Typewriter role */}
                    <motion.div custom={2} variants={rise} className="mt-5 flex h-9 items-center gap-3">
                        <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
                        <span className="font-display text-xl font-semibold tracking-[-0.02em] text-primary sm:text-2xl">
                            <TypeAnimation
                                sequence={[
                                    'Frontend Developer',
                                    2000,
                                    'React.js Specialist',
                                    2000,
                                    'UI/UX Designer',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                cursor={true}
                                style={{ display: 'inline-block' }}
                            />
                        </span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        custom={3}
                        variants={rise}
                        className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
                    >
                        Detail-oriented Computer Science Engineering student with strong expertise in
                        Frontend Development using React.js and Tailwind CSS. Passionate about combining
                        clean code with intuitive UI/UX design to solve real-world problems.
                    </motion.p>

                    {/* Actions */}
                    <motion.div custom={4} variants={rise} className="mt-10 flex flex-wrap items-center gap-3">
                        <Button size="lg" onClick={() => setIsResumeModalOpen(true)}>
                            <FileText className="h-[18px] w-[18px]" />
                            View Resume
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => {
                                const el = document.getElementById('projects');
                                if (el) {
                                    window.scrollTo({
                                        top: el.getBoundingClientRect().top + window.scrollY - 80,
                                        behavior: 'smooth',
                                    });
                                }
                            }}
                        >
                            View Work
                            <ArrowUpRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </Button>

                        <span className="mx-1 hidden h-8 w-px bg-white/10 sm:block" />

                        <a
                            href="https://github.com/praburofficial"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub profile"
                            className="grid h-14 w-14 place-items-center rounded-btn surface text-muted transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:text-primary hover:shadow-[0_14px_34px_-14px_rgba(34,211,238,0.8)]"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/prabu-r12092005"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn profile"
                            className="grid h-14 w-14 place-items-center rounded-btn surface text-muted transition-all duration-300 hover:-translate-y-1 hover:border-secondary/45 hover:text-secondary-soft hover:shadow-[0_14px_34px_-14px_rgba(139,92,246,0.8)]"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.dl
                        custom={5}
                        variants={rise}
                        className="mt-12 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-card surface"
                    >
                        {stats.map((s) => (
                            <div key={s.label} className="bg-white/[0.015] px-4 py-5 text-center sm:px-6">
                                <dt className="sr-only">{s.label}</dt>
                                <dd className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                                    <CountUp end={s.value} duration={2} suffix={s.suffix} enableScrollSpy scrollSpyOnce />
                                </dd>
                                <p className="mt-1.5 text-[0.6875rem] uppercase tracking-[0.12em] text-faint">{s.label}</p>
                            </div>
                        ))}
                    </motion.dl>

                    {/* Tech chips */}
                    <motion.div custom={6} variants={rise} className="mt-8">
                        <div className="mb-3 flex items-center gap-2">
                            <Sparkles className="h-3.5 w-3.5 text-primary" />
                            <span className="eyebrow">Working with</span>
                        </div>
                        <ul className="flex flex-wrap gap-2">
                            {techStack.map((tech, i) => (
                                <motion.li
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.05 + i * 0.045, duration: 0.4, ease }}
                                    whileHover={{ y: -3 }}
                                    className="cursor-default rounded-pill surface px-3.5 py-1.5 text-[0.78125rem] font-medium text-muted transition-colors duration-300 hover:border-primary/40 hover:text-primary"
                                >
                                    {tech}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                {/* ══════════ Right — the portrait ══════════ */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.1, ease, delay: 0.25 }}
                    className="relative mx-auto flex w-full max-w-[26rem] items-center justify-center lg:max-w-none"
                >
                    {/* Orbit rings */}
                    <div className="pointer-events-none absolute aspect-square w-[112%] max-w-[34rem] rounded-full border border-white/[0.06]" />
                    <div className="pointer-events-none absolute aspect-square w-[92%] max-w-[28rem] rounded-full border border-dashed border-white/[0.07] animate-spin-slow" />
                    <div
                        className="pointer-events-none absolute aspect-square w-[112%] max-w-[34rem] rounded-full"
                        style={{
                            background: 'conic-gradient(from 210deg, transparent 55%, rgba(34,211,238,0.5) 78%, transparent 92%)',
                            mask: 'radial-gradient(circle, transparent 48.6%, #000 49%, #000 50%, transparent 50.4%)',
                            WebkitMask: 'radial-gradient(circle, transparent 48.6%, #000 49%, #000 50%, transparent 50.4%)',
                            animation: reduceMotion ? undefined : 'conic-spin 14s linear infinite',
                        }}
                    />

                    {/* Circular portrait frame */}
                    <div className="group relative aspect-square w-full max-w-[21rem]">
                        <div
                            className="absolute -inset-4 rounded-full opacity-70 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                            style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.35), rgba(139,92,246,0.28) 55%, transparent 75%)' }}
                        />

                        {/* The original circuit-computer motif, tucked behind the frame */}
                        <motion.div
                            animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                            className="pointer-events-none absolute -bottom-16 -left-16 z-0 hidden h-36 w-36 place-items-center overflow-hidden rounded-panel surface lg:grid"
                            aria-hidden="true"
                        >
                            <div className="scale-[0.62]">
                                <CircuitComputerIcon />
                            </div>
                        </motion.div>

                        {/* Spinning conic ring */}
                        <div
                            className="absolute inset-0 z-10 rounded-full opacity-90"
                            style={{
                                background: 'conic-gradient(from 0deg, #22d3ee, #8b5cf6, #f472b6, #22d3ee)',
                                animation: reduceMotion ? undefined : 'conic-spin 9s linear infinite',
                            }}
                        />
                        <div className="absolute inset-[3px] z-10 rounded-full bg-background" />

                        {/* Glass bezel + photo */}
                        <div className="absolute inset-[6px] z-10 overflow-hidden rounded-full surface-strong p-2">
                            <div className="relative h-full w-full overflow-hidden rounded-full">
                                <img
                                    src="./Prabu.jpeg"
                                    alt="Portrait of Prabu R"
                                    width={640}
                                    height={640}
                                    fetchPriority="high"
                                    decoding="async"
                                    className="h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
                                />
                                {/* Soft duotone wash */}
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-60 mix-blend-soft-light"
                                    style={{ background: 'linear-gradient(160deg, rgba(34,211,238,0.5), transparent 55%, rgba(139,92,246,0.45))' }}
                                />
                                {/* Top specular highlight so it reads as glass */}
                                <div
                                    className="pointer-events-none absolute inset-0"
                                    style={{ background: 'radial-gradient(120% 70% at 30% 0%, rgba(255,255,255,0.16), transparent 55%)' }}
                                />
                            </div>
                        </div>

                        {/* Name plate, straddling the bottom of the circle */}
                        <div className="badge-over-image absolute -bottom-6 left-1/2 z-20 flex w-[min(17rem,86%)] -translate-x-1/2 items-center justify-between gap-3 rounded-[16px] px-4 py-3">
                            <div className="min-w-0">
                                <p className="truncate font-display text-sm font-bold text-ink">Prabu R</p>
                                <p className="truncate text-[0.6875rem] text-faint">B.E - CSE ( 2022-2026 )</p>
                            </div>
                            <span className="shrink-0 rounded-pill bg-accent/12 px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-wider text-accent ring-1 ring-accent/25">
                                Open
                            </span>
                        </div>

                        {/* ─── Floating decorative elements ─── */}
                        <motion.div
                            animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            className="badge-over-image absolute -left-6 top-10 z-20 hidden rounded-[15px] px-4 py-2.5 sm:block"
                        >
                            
                        </motion.div>

                        <motion.div
                            animate={reduceMotion ? undefined : { y: [0, 14, 0] }}
                            transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                            className="badge-over-image absolute -right-5 top-[46%] z-20 hidden rounded-[15px] px-4 py-2.5 sm:block"
                        >
                            <p className="text-[0.625rem] uppercase tracking-[0.14em] text-faint">Focus</p>
                            <p className="font-display text-sm font-bold text-secondary-soft">Full Stack</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* ─── Scroll cue ─── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="absolute inset-x-0 bottom-7 z-20 flex justify-center"
            >
                <a
                    href="#about"
                    className="group flex flex-col items-center gap-2 text-faint transition-colors duration-300 hover:text-primary"
                >
                    <span className="text-[0.625rem] uppercase tracking-[0.24em]">Scroll</span>
                    <span className="flex h-9 w-[22px] justify-center rounded-pill border border-white/12 pt-2 transition-colors duration-300 group-hover:border-primary/50">
                        <motion.span
                            animate={{ y: [0, 8, 0], opacity: [1, 0.2, 1] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                            className="h-1.5 w-1.5 rounded-full bg-primary"
                        />
                    </span>
                    <ChevronDown className="h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100" />
                </a>
            </motion.div>

            <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
        </section>
    );
}
