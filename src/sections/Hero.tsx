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
            className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28 sm:pb-24 lg:pt-24"
        >
            {/* ─── Local ambience ─── */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div
                    className="absolute left-1/2 top-[-14%] h-[46rem] w-[46rem] max-w-none -translate-x-1/2 rounded-full blur-[140px]"
                    style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.12), transparent 66%)' }}
                />
                <div
                    className="absolute bottom-[-22%] right-[-12%] h-[34rem] w-[34rem] max-w-none rounded-full blur-[130px]"
                    style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12), transparent 66%)' }}
                />
            </div>

            <div className="shell grid w-full grid-cols-1 items-center gap-14 sm:gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 xl:gap-24">

                {/* ══════════ Left — the pitch ══════════ */}
                <motion.div initial="hidden" animate="visible" className="relative z-10 min-w-0">

                    {/* Availability badge */}
                    <motion.div custom={0} variants={rise}>
                        <span className="inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 rounded-pill border border-border bg-white/80 px-3.5 py-2 shadow-e1 backdrop-blur-sm sm:px-4">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-soft opacity-70" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent shadow-[0_0_0_3px_rgba(5,150,105,0.16)]" />
                            </span>
                            <span className="hidden h-3 w-px bg-border-strong sm:block" />
                            <span className="text-[0.75rem] text-muted">Namakkal, Tamil Nadu</span>
                        </span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        custom={1}
                        variants={rise}
                        className="mt-6 font-display text-[clamp(2.75rem,10vw,6rem)] font-extrabold leading-[0.92] tracking-[-0.05em] sm:mt-8"
                    >
                        <span className="text-gradient block">PRABU R</span>
                    </motion.h1>

                    {/* Typewriter role */}
                    <motion.div custom={2} variants={rise} className="mt-4 flex min-h-9 items-center gap-3 sm:mt-5">
                        <span className="h-px w-6 shrink-0 bg-gradient-to-r from-primary to-transparent sm:w-8" />
                        <span className="font-display text-lg font-semibold tracking-[-0.02em] text-primary sm:text-xl md:text-2xl">
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer',
                                    2000,
                                    'React.js & FastAPI Developer',
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
                        className="mt-6 max-w-[58ch] text-[0.9375rem] leading-relaxed text-muted sm:mt-7 sm:text-lg"
                    >
                        Detail-oriented Computer Science Engineering student with strong expertise in
                        Full Stack Development — React.js and Tailwind CSS on the frontend, Python and
                        FastAPI on the backend. Passionate about combining clean code with intuitive
                        UI/UX design to solve real-world problems.
                    </motion.p>

                    {/* Actions */}
                    <motion.div custom={4} variants={rise} className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
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

                        <span className="mx-1 hidden h-8 w-px bg-border-strong sm:block" />

                        <a
                            href="https://github.com/praburofficial"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub profile"
                            className="grid h-13 w-13 place-items-center rounded-btn border border-border bg-white text-muted shadow-e1 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:text-primary hover:shadow-[0_14px_30px_-14px_rgba(37,99,235,0.6)] sm:h-14 sm:w-14"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/prabu-r12092005"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn profile"
                            className="grid h-13 w-13 place-items-center rounded-btn border border-border bg-white text-muted shadow-e1 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:text-secondary hover:shadow-[0_14px_30px_-14px_rgba(79,70,229,0.6)] sm:h-14 sm:w-14"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.dl
                        custom={5}
                        variants={rise}
                        className="mt-10 grid max-w-lg grid-cols-3 divide-x divide-border overflow-hidden rounded-card border border-border bg-white/80 shadow-e1 backdrop-blur-sm sm:mt-12"
                    >
                        {stats.map((s) => (
                            <div key={s.label} className="px-3 py-4 text-center sm:px-6 sm:py-5">
                                <dt className="sr-only">{s.label}</dt>
                                <dd className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                                    <CountUp end={s.value} duration={2} suffix={s.suffix} enableScrollSpy scrollSpyOnce />
                                </dd>
                                <p className="mt-1.5 text-[0.625rem] uppercase tracking-[0.12em] text-faint sm:text-[0.6875rem]">{s.label}</p>
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
                                    className="cursor-default rounded-pill border border-border bg-white px-3 py-1.5 text-[0.75rem] font-medium text-muted shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-colors duration-300 hover:border-primary/40 hover:bg-primary-tint hover:text-primary sm:px-3.5 sm:text-[0.78125rem]"
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
                    className="relative mx-auto flex w-full max-w-[20rem] items-center justify-center sm:max-w-[24rem] lg:max-w-[30rem]"
                >
                    {/* Orbit rings. Each spinning ring lives inside a centring wrapper —
                        the rotate keyframes own `transform`, so they can't also carry the
                        centring translate. */}
                    <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[116%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-900/[0.05]" />

                    <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2">
                        <div className="h-full w-full rounded-full border border-dashed border-slate-900/[0.07] animate-spin-slow gpu" />
                    </div>

                    <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[116%] -translate-x-1/2 -translate-y-1/2">
                        <div
                            className="h-full w-full rounded-full gpu"
                            style={{
                                background: 'conic-gradient(from 210deg, transparent 55%, rgba(37,99,235,0.55) 78%, transparent 92%)',
                                mask: 'radial-gradient(circle, transparent 48.6%, #000 49%, #000 50%, transparent 50.4%)',
                                WebkitMask: 'radial-gradient(circle, transparent 48.6%, #000 49%, #000 50%, transparent 50.4%)',
                                animation: reduceMotion ? undefined : 'conic-spin 14s linear infinite',
                            }}
                        />
                    </div>

                    {/* Circular portrait frame */}
                    <div className="group relative aspect-square w-[78%] max-w-[21rem]">
                        <div
                            className="absolute -inset-5 rounded-full opacity-70 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                            style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.25), rgba(124,58,237,0.20) 55%, transparent 74%)' }}
                        />

                        {/* The original circuit-computer motif, tucked behind the frame */}
                        <motion.div
                            animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                            className="pointer-events-none absolute -bottom-14 -left-14 z-0 hidden h-36 w-36 place-items-center overflow-hidden rounded-panel border border-border bg-white/90 shadow-e2 backdrop-blur-sm xl:grid"
                            aria-hidden="true"
                        >
                            <div className="scale-[0.62]">
                                <CircuitComputerIcon />
                            </div>
                        </motion.div>

                        {/* Spinning conic ring */}
                        <div
                            className="absolute inset-0 z-10 rounded-full opacity-90 gpu"
                            style={{
                                background: 'conic-gradient(from 0deg, #2563eb, #4f46e5, #7c3aed, #059669, #2563eb)',
                                animation: reduceMotion ? undefined : 'conic-spin 9s linear infinite',
                            }}
                        />
                        <div className="absolute inset-[3px] z-10 rounded-full bg-background" />

                        {/* Bezel + photo */}
                        <div className="absolute inset-[6px] z-10 overflow-hidden rounded-full border border-border bg-white p-2 shadow-e2">
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
                                {/* Soft brand wash */}
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-30 mix-blend-soft-light"
                                    style={{ background: 'linear-gradient(160deg, rgba(37,99,235,0.55), transparent 55%, rgba(124,58,237,0.5))' }}
                                />
                                {/* Top specular highlight */}
                                <div
                                    className="pointer-events-none absolute inset-0"
                                    style={{ background: 'radial-gradient(120% 70% at 30% 0%, rgba(255,255,255,0.28), transparent 55%)' }}
                                />
                            </div>
                        </div>

                        {/* Name plate, straddling the bottom of the circle */}
                        <div className="absolute -bottom-6 left-1/2 z-20 flex w-[min(17rem,94%)] -translate-x-1/2 items-center justify-between gap-3 rounded-[16px] border border-border bg-white/90 px-4 py-3 shadow-e2 backdrop-blur-md">
                            <div className="min-w-0">
                                <p className="truncate font-display text-sm font-bold text-ink">Prabu R</p>
                                <p className="truncate text-[0.6875rem] text-faint">B.E - CSE ( 2022-2026 )</p>
                            </div>
                            <span className="shrink-0 rounded-pill bg-accent-tint px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-wider text-accent ring-1 ring-accent/20">
                                Open
                            </span>
                        </div>

                        {/* ─── Floating decorative elements ─── */}
                        <motion.div
                            animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -left-4 top-8 z-20 hidden rounded-[15px] border border-border bg-white/90 px-3.5 py-2.5 shadow-e2 backdrop-blur-md sm:block lg:-left-8"
                        >
                            <p className="text-[0.625rem] uppercase tracking-[0.14em] text-faint">Backend</p>
                            <p className="font-display text-sm font-bold text-primary">Python · FastAPI</p>
                        </motion.div>

                        <motion.div
                            animate={reduceMotion ? undefined : { y: [0, 14, 0] }}
                            transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                            className="absolute -right-3 top-[48%] z-20 hidden rounded-[15px] border border-border bg-white/90 px-3.5 py-2.5 shadow-e2 backdrop-blur-md sm:block lg:-right-6"
                        >
                            <p className="text-[0.625rem] uppercase tracking-[0.14em] text-faint">Focus</p>
                            <p className="font-display text-sm font-bold text-violet">Full Stack</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* ─── Scroll cue ─── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="absolute inset-x-0 bottom-5 z-20 hidden justify-center sm:flex"
            >
                <a
                    href="#about"
                    className="group flex flex-col items-center gap-2 text-faint transition-colors duration-300 hover:text-primary"
                >
                    <span className="text-[0.625rem] uppercase tracking-[0.24em]">Scroll</span>
                    <span className="flex h-9 w-[22px] justify-center rounded-pill border border-border-strong pt-2 transition-colors duration-300 group-hover:border-primary/50">
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
