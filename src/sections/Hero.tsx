import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, ChevronDown, ArrowRight } from 'lucide-react';
import { ResumeModal } from '../components/ResumeModal';
import CountUp from 'react-countup';

const stats = [
    { value: 20, suffix: '+', label: 'Projects' },
    { value: 33, suffix: '', label: 'Certificates' },
    { value: 3, suffix: '', label: 'Internships' },
];

export function Hero() {
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

    return (
        <section
            id="home"
            className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-3 pt-20 pb-8 sm:px-5 sm:pt-24 sm:pb-12 lg:px-7"
        >
            {/* Ambient background glow behind hero */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div
                    className="absolute left-1/2 top-[-10%] h-[46rem] w-[46rem] -translate-x-1/2 rounded-full blur-[150px] opacity-45"
                    style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.22), transparent 70%)' }}
                />
            </div>

            {/* Screen-matched container */}
            <div className="w-full max-w-[1720px]">
                {/* ══════════ Main Hero Card with Exact Cross Gradient ══════════ */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex min-h-[calc(100svh-4.5rem)] lg:min-h-[92vh] lg:max-h-[940px] xl:min-h-[95vh] xl:max-h-[1000px] flex-col justify-between overflow-hidden rounded-[24px] border border-sky-400/20 shadow-[0_25px_80px_-20px_rgba(0,140,255,0.4)] sm:rounded-[36px] lg:rounded-[44px]"
                    style={{
                        backgroundColor: '#01040a',
                        backgroundImage: `
                            linear-gradient(to right, rgba(1, 4, 10, 0.98) 0%, rgba(1, 4, 10, 0.88) 32%, rgba(1, 6, 18, 0.45) 54%, transparent 72%),
                            radial-gradient(ellipse 75% 65% at 88% 28%, rgba(0, 180, 255, 0.85) 0%, rgba(2, 132, 199, 0.55) 28%, rgba(3, 75, 160, 0.28) 55%, transparent 75%),
                            linear-gradient(220deg, rgba(0, 195, 255, 0.5) 0%, rgba(14, 165, 233, 0.25) 28%, transparent 58%),
                            linear-gradient(115deg, #01040a 0%, #020817 36%, #03183d 60%, #06326e 82%, #08489c 100%)
                        `,
                    }}
                >
                    {/* Ambient spotlight beam directly behind person */}
                    <div
                        className="pointer-events-none absolute -right-10 top-1/3 h-[42rem] w-[42rem] -translate-y-1/2 rounded-full blur-[110px] opacity-90"
                        style={{ background: 'radial-gradient(circle, rgba(0, 185, 255, 0.6) 0%, rgba(14, 165, 233, 0.35) 38%, rgba(37, 99, 235, 0.15) 62%, transparent 75%)' }}
                    />
                    <div
                        className="pointer-events-none absolute left-[-8%] top-[-15%] h-[30rem] w-[30rem] rounded-full blur-[130px] opacity-20"
                        style={{ background: 'radial-gradient(circle, rgba(56, 189, 248, 0.3), transparent 70%)' }}
                    />

                    <div className="relative z-10 grid h-full flex-1 grid-cols-1 items-stretch lg:grid-cols-[1.12fr_0.88fr] xl:grid-cols-[1.16fr_0.84fr]">
                        {/* ─── Left Column: Pitch & Typography (Balanced for Viewport Fit) ─── */}
                        <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14">
                            <div>
                                {/* Eyebrow / Kicker */}
                                <motion.div
                                    initial={{ opacity: 0, y: 14 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.55, delay: 0.15 }}
                                    className="flex flex-wrap items-center gap-2"
                                >
                                    <span className="font-mono text-xs font-semibold tracking-[0.22em] text-slate-200 uppercase sm:text-sm">
                                        PRABU R
                                    </span>
                                    <span className="mx-2 hidden h-1 w-1 rounded-full bg-slate-500 sm:inline-block" />
                                    <span className="rounded-full border border-sky-400/30 bg-sky-500/10 px-2.5 py-0.5 font-mono text-[0.6875rem] font-semibold tracking-wider text-sky-300 uppercase sm:text-xs">
                                        CEO · CODE BLAZA TECHNOLOGY
                                    </span>
                                </motion.div>

                                {/* Perfectly Balanced Headline */}
                                <motion.h1
                                    initial={{ opacity: 0, y: 18 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.25 }}
                                    className="mt-4 font-display text-[clamp(2.1rem,3.6vw,3.6rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-white sm:mt-5"
                                >
                                    Connecting<br />
                                    <span className="text-sky-400">Businesses</span> and<br />
                                    <span className="text-sky-400">Opportunities</span>
                                </motion.h1>

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.65, delay: 0.35 }}
                                    className="mt-3.5 max-w-[48ch] text-[0.875rem] leading-relaxed text-slate-300 sm:mt-4 sm:text-[0.9375rem] lg:text-[1rem]"
                                >
                                    Prabu R is a seasoned entrepreneur and CEO at Code Blaza Technology, renowned for building scalable web architectures, innovative digital platforms, and forging strategic partnerships that drive growth across industries.
                                </motion.p>

                                {/* Action Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.65, delay: 0.45 }}
                                    className="mt-6 flex flex-wrap items-center gap-3.5 sm:mt-7"
                                >
                                    {/* Primary CTA — "Connect with Me" */}
                                    <a
                                        href="#contact"
                                        className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-black/25 transition-all duration-300 hover:scale-[1.03] hover:bg-slate-100 hover:shadow-xl active:scale-[0.98] sm:text-[0.9375rem]"
                                    >
                                        <span>Connect with Me</span>
                                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>

                                    {/* Resume Button */}
                                    <button
                                        onClick={() => setIsResumeModalOpen(true)}
                                        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-medium text-slate-200 transition-all duration-300 hover:scale-[1.02] hover:border-white/40 hover:bg-white/15 hover:text-white"
                                    >
                                        <FileText className="h-4 w-4" />
                                        <span>Resume</span>
                                    </button>
                                </motion.div>
                            </div>

                            {/* Elevated Stats Card with Increased Height + Nearby GitHub & LinkedIn */}
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.65, delay: 0.55 }}
                                className="mt-8 flex flex-wrap items-center gap-3.5 sm:mt-10 sm:gap-4"
                            >
                                {/* Increased Height Stats Card with Rotating Loop Border Line */}
                                <div className="relative flex-1 min-w-[280px] overflow-hidden rounded-2xl p-[1.5px] sm:rounded-3xl shadow-xl">
                                    {/* Rotating loop border line like header box border */}
                                    <motion.div
                                        className="pointer-events-none absolute inset-[-150%] gpu"
                                        style={{
                                            background:
                                                'conic-gradient(from 0deg, transparent 0deg, transparent 65deg, #00d4ff 90deg, #10b981 115deg, transparent 140deg, transparent 360deg)',
                                        }}
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                                    />

                                    {/* Stats Card Inner Surface */}
                                    <div className="relative z-10 grid h-full w-full grid-cols-3 divide-x divide-white/12 rounded-[calc(1rem-1.5px)] border border-white/10 bg-[#05142b]/85 px-4 py-5 backdrop-blur-xl sm:rounded-[calc(1.5rem-1.5px)] sm:px-7 sm:py-6">
                                        {stats.map((s) => (
                                            <div key={s.label} className="px-2 text-center first:pl-1 last:pr-1 sm:px-4">
                                                <dd className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                                    <CountUp end={s.value} duration={2} suffix={s.suffix} enableScrollSpy scrollSpyOnce />
                                                </dd>
                                                <p className="mt-1 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-slate-300 sm:text-xs">
                                                    {s.label}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* GitHub & LinkedIn positioned right nearby stats card */}
                                <div className="flex items-center gap-2.5 sm:gap-3">
                                    <a
                                        href="https://github.com/praburofficial"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub profile"
                                        className="group/gh relative grid h-14 w-14 place-items-center rounded-2xl border border-white/20 bg-white/[0.07] text-slate-200 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-sky-400 hover:bg-sky-400 hover:text-slate-950 hover:shadow-[0_0_24px_rgba(56,189,248,0.7)] sm:h-16 sm:w-16 sm:rounded-3xl"
                                    >
                                        <Github className="h-5 w-5 transition-transform duration-300 group-hover/gh:scale-110 sm:h-6 sm:w-6" />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/prabu-r12092005"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn profile"
                                        className="group/li relative grid h-14 w-14 place-items-center rounded-2xl border border-white/20 bg-white/[0.07] text-slate-200 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#0a66c2] hover:bg-[#0a66c2] hover:text-white hover:shadow-[0_0_24px_rgba(10,102,194,0.85)] sm:h-16 sm:w-16 sm:rounded-3xl"
                                    >
                                        <Linkedin className="h-5 w-5 transition-transform duration-300 group-hover/li:scale-110 sm:h-6 sm:w-6" />
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* ─── Right Column: Large, Prominent Person Image ─── */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.95, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative flex h-full min-h-[460px] w-full items-end justify-center overflow-hidden sm:min-h-[540px] lg:min-h-0 lg:justify-end"
                        >
                            <div className="relative flex h-full w-full items-end justify-center lg:justify-end">
                                <img
                                    src="/person.png"
                                    alt="Prabu R - CEO at Code Blaza Technology"
                                    width={1196}
                                    height={1315}
                                    fetchPriority="high"
                                    decoding="async"
                                    className="h-full w-auto max-w-full object-contain object-bottom sm:max-h-[640px] lg:max-h-[860px] xl:max-h-[920px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_8%,black_100%)] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_16%,black_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_8%,black_100%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_16%,black_100%)] select-none"
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll cue indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute inset-x-0 bottom-1 z-20 hidden justify-center sm:flex"
            >
                <a
                    href="#about"
                    className="group flex flex-col items-center gap-1 text-slate-400 transition-colors duration-300 hover:text-sky-400"
                >
                    <span className="text-[0.625rem] uppercase tracking-[0.24em]">Scroll</span>
                    <ChevronDown className="h-3.5 w-3.5 animate-bounce opacity-70" />
                </a>
            </motion.div>

            <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
        </section>
    );
}
