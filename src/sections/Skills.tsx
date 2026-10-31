import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useTransform, type MotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionHeading } from '../components/SectionHeading';
import { GlassCard } from '../components/GlassCard';
import { Code2, Palette, Database, Wrench, Server, Braces, Layers, Cloud, Volume2, VolumeX, Gauge } from 'lucide-react';
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

/* Default stack level lookup */
const stackSkillLevels: Record<string, number> = {
    'React.js': 90,
    'Tailwind CSS': 95,
    'JavaScript': 85,
    'JS': 85,
    'HTML5 / CSS3': 90,
    'UI/UX Design': 85,
    'PostgreSQL': 75,
};

/* The full-stack split, top-of-section: Frontend, Backend, Database, Deployment */
const stackSplit = [
    {
        title: 'Frontend',
        icon: Layers,
        tint: '#22d3ee',
        summary: 'Component-driven interfaces, responsive layouts and design systems.',
        items: ['React.js', 'JS', 'Tailwind CSS'],
    },
    {
        title: 'Backend',
        icon: Server,
        tint: '#8b5cf6',
        summary: 'RESTful microservices, API architecture and server-side business logic.',
        items: ['Python', 'FastAPI', 'Node.js'],
    },
    {
        title: 'Database',
        icon: Database,
        tint: '#10b981',
        summary: 'Relational schemas, NoSQL document stores and optimized queries.',
        items: ['PostgreSQL', 'Firebase', 'MySQL'],
    },
    {
        title: 'Deployment',
        icon: Cloud,
        tint: '#f59e0b',
        summary: 'Live production hosting, continuous deployment and custom domain setup.',
        items: ['Hostinger', 'Vercel', 'Godaddy'],
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
const AUDIO_FILE_SRC = '/race-sound.mp3';

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

function SkillDial({
    skill,
    index,
    rpmMotion,
}: {
    skill: (typeof skills)[0];
    index: number;
    rpmMotion: MotionValue<number>;
}) {
    const [cardRef, cardInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const counterRef = useRef<HTMLSpanElement | null>(null);
    const gradientId = `dial-${index}`;
    const accent = tone(skill.color);

    const targetAngle = -120 + (skill.level / 100) * 240;
    const rotate = useTransform(rpmMotion, [0, 1], [-120, targetAngle]);

    const targetOffset = ARC_LENGTH * (1 - skill.level / 100);
    const strokeDashoffset = useTransform(rpmMotion, [0, 1], [ARC_LENGTH, targetOffset]);

    useEffect(() => {
        const unsub = rpmMotion.on('change', (latest: number) => {
            if (counterRef.current) {
                counterRef.current.textContent = `${Math.round(latest * skill.level)}%`;
            }
        });
        return unsub;
    }, [rpmMotion, skill.level]);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 26, scale: 0.94 }}
            animate={cardInView ? { opacity: 1, y: 0, scale: 1 } : {}}
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

                        {/* Active Progress Arc (dynamically sweeps up/down based on race audio RPM) */}
                        <motion.path
                            d={ARC_PATH}
                            fill="none"
                            stroke={`url(#${gradientId})`}
                            strokeWidth="7"
                            strokeLinecap="round"
                            strokeDasharray={ARC_LENGTH}
                            style={{
                                strokeDashoffset,
                                filter: `drop-shadow(0 2px 6px ${accent}60)`,
                            }}
                        />

                        {/* ─── Bike Speedometer Needle (races up/down based on race audio) ─── */}
                        <motion.g
                            style={{
                                rotate,
                                transformOrigin: '60px 60px',
                            }}
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

                    {/* Digital Readout inside gauge bottom recess (synchronized with race audio RPM) */}
                    <div className="absolute inset-x-0 bottom-1 flex flex-col items-center leading-none">
                        <span
                            ref={counterRef}
                            className="font-display text-[1.25rem] font-extrabold tracking-tight sm:text-[1.375rem]"
                            style={{ color: accent }}
                        >
                            0%
                        </span>
                        <span className="mt-0.5 text-[0.5625rem] font-semibold uppercase tracking-wider text-muted">
                            Base {skill.level}%
                        </span>
                    </div>
                </div>

                <div className="mt-3 flex items-center justify-center gap-1.5 sm:mt-4">
                    <p className="font-display text-[0.875rem] font-semibold tracking-tight text-ink sm:text-[0.9375rem]">
                        {skill.name}
                    </p>
                    <span
                        className="rounded-pill border px-2 py-0.5 font-mono text-[0.6875rem] font-bold tracking-tight shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
                        style={{
                            color: accent,
                            borderColor: `${accent}40`,
                            backgroundColor: `${accent}12`,
                        }}
                        title={`Default proficiency: ${skill.level}%`}
                    >
                        {skill.level}%
                    </span>
                </div>
                <span className="mt-1.5 rounded-pill border border-border bg-surface px-2.5 py-0.5 text-[0.625rem] uppercase tracking-[0.12em] text-faint">
                    {skillCategory[skill.name]}
                </span>
            </GlassCard>
        </motion.div>
    );
}

export function Skills() {
    // ── Race Sound & Tachometer Audio Engine ──
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const audioCtxRef = useRef<AudioContext | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const isConnectedRef = useRef(false);
    const animFrameRef = useRef<number | null>(null);
    const smoothedRpmRef = useRef<number>(0);

    const [isMuted, setIsMuted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [needsTap, setNeedsTap] = useState(false);

    const rpmMotion = useMotionValue(0);

    // Section-level observer: plays only while viewing this proficiency needle section
    const [proficiencyRef, proficiencyInView] = useInView({
        threshold: 0.2,
        triggerOnce: false, // critical: triggers true when inside, false when scrolling above or below
    });

    // Helper to safely instantiate Web Audio Context and Analyser
    const ensureAudioContext = useCallback(() => {
        if (!audioRef.current) return;
        try {
            if (!audioCtxRef.current) {
                const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
                audioCtxRef.current = new AudioCtx();
            }

            if (audioCtxRef.current.state === 'suspended') {
                audioCtxRef.current.resume().catch(() => { });
            }

            if (!isConnectedRef.current && audioCtxRef.current) {
                const analyser = audioCtxRef.current.createAnalyser();
                analyser.fftSize = 128;
                analyser.smoothingTimeConstant = 0.75;
                analyserRef.current = analyser;

                const source = audioCtxRef.current.createMediaElementSource(audioRef.current);
                source.connect(analyser);
                analyser.connect(audioCtxRef.current.destination);
                isConnectedRef.current = true;
            }
        } catch (err) {
            console.warn('Web Audio node connection note:', err);
        }
    }, []);

    // Initialize audio element
    useEffect(() => {
        const audio = new Audio(AUDIO_FILE_SRC);
        audio.loop = true;
        audio.preload = 'auto';
        audioRef.current = audio;

        return () => {
            audio.pause();
            audio.src = '';
            if (animFrameRef.current) {
                cancelAnimationFrame(animFrameRef.current);
            }
            if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
                audioCtxRef.current.close().catch(() => { });
            }
        };
    }, []);

    // Playback control synced to proficiency section visibility
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (proficiencyInView && !isMuted) {
            ensureAudioContext();
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        setIsPlaying(true);
                        setNeedsTap(false);
                        if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
                            audioCtxRef.current.resume().catch(() => { });
                        }
                    })
                    .catch((err) => {
                        // Browser autoplay deferred until interaction
                        console.log('Autoplay deferred until user tap:', err);
                        setIsPlaying(false);
                        setNeedsTap(true);
                    });
            }
        } else {
            // User scrolled above or below the proficiency section, or muted
            audio.pause();
            audio.currentTime = 0;
            setIsPlaying(false);
        }
    }, [proficiencyInView, isMuted, ensureAudioContext]);

    // Real-time animation loop driving needle revs up and down
    useEffect(() => {
        let active = true;
        const freqData = new Uint8Array(64);

        const tick = () => {
            if (!active) return;

            const audio = audioRef.current;
            const inPlayback = proficiencyInView && !isMuted && audio && !audio.paused;

            let targetRpm = 0;

            if (inPlayback && audio) {
                let analyserRpm = 0;

                // 1. Read real engine audio frequency data if analyser is active
                if (analyserRef.current) {
                    analyserRef.current.getByteFrequencyData(freqData);
                    let sum = 0;
                    let count = 0;
                    for (let i = 1; i < 20; i++) {
                        sum += freqData[i];
                        count++;
                    }
                    const avg = sum / (count || 1);
                    if (avg > 15) {
                        analyserRpm = Math.min(1, Math.max(0, (avg - 15) / 140));
                    }
                }

                // 2. Audio-synchronized engine throttle profile matching race gear shifts & redlines
                const t = audio.currentTime;
                const revCycle = t % 3.6;
                let timeRpm = 0.22; // idle baseline

                if (revCycle < 1.4) {
                    // Throttle acceleration burst
                    const p = revCycle / 1.4;
                    timeRpm = 0.25 + 0.73 * Math.pow(p, 1.4);
                } else if (revCycle < 1.7) {
                    // Gear shift clutch dip
                    const p = (revCycle - 1.4) / 0.3;
                    timeRpm = 0.98 - 0.45 * Math.sin(p * Math.PI);
                } else if (revCycle < 2.8) {
                    // High-rev power band
                    const p = (revCycle - 1.7) / 1.1;
                    timeRpm = 0.62 + 0.36 * Math.sin(p * Math.PI * 0.5);
                } else {
                    // Deceleration overrun
                    const p = (revCycle - 2.8) / 0.8;
                    timeRpm = 0.95 - 0.70 * p;
                }

                // Fuse live frequency data with time pulse
                if (analyserRpm > 0.05) {
                    targetRpm = analyserRpm * 0.7 + timeRpm * 0.3;
                } else {
                    targetRpm = timeRpm;
                }

                // Engine mechanical rumble jitter
                targetRpm = Math.min(1, Math.max(0, targetRpm + (Math.random() - 0.5) * 0.04));
            } else {
                // Out of view or stopped: needles fall back smoothly to 0 (idle)
                targetRpm = 0;
            }

            // Tachometer needle inertia physics: fast rise, dampened fall
            const current = smoothedRpmRef.current;
            const lerp = targetRpm > current ? 0.32 : 0.16;
            const next = current + (targetRpm - current) * lerp;
            const clamped = Math.abs(next) < 0.005 ? 0 : next;

            smoothedRpmRef.current = clamped;
            rpmMotion.set(clamped);

            animFrameRef.current = requestAnimationFrame(tick);
        };

        animFrameRef.current = requestAnimationFrame(tick);

        return () => {
            active = false;
            if (animFrameRef.current) {
                cancelAnimationFrame(animFrameRef.current);
            }
        };
    }, [proficiencyInView, isMuted, rpmMotion]);

    const toggleSound = () => {
        ensureAudioContext();
        if (isMuted) {
            setIsMuted(false);
            if (audioRef.current && proficiencyInView) {
                audioRef.current.play().then(() => setIsPlaying(true)).catch(() => { });
            }
        } else {
            setIsMuted(true);
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
                setIsPlaying(false);
            }
        }
    };

    const handleUserTap = () => {
        ensureAudioContext();
        setIsMuted(false);
        if (audioRef.current) {
            audioRef.current.play().then(() => {
                setIsPlaying(true);
                setNeedsTap(false);
            }).catch(() => { });
        }
    };

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

                {/* ─── Frontend / Backend / Database / Deployment split ─── */}
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
                                                className="inline-flex items-center gap-1.5 cursor-default rounded-pill border border-border bg-white px-3 py-1.5 text-[0.75rem] font-medium text-muted shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:text-ink sm:text-[0.8125rem]"
                                            >
                                                <span>{item}</span>
                                                {stackSkillLevels[item] && (
                                                    <span
                                                        className="rounded-pill px-1.5 py-0.2 font-mono text-[0.6875rem] font-bold"
                                                        style={{ color: t.fg, backgroundColor: `${t.fg}18` }}
                                                    >
                                                        {stackSkillLevels[item]}%
                                                    </span>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </div>

                {/* ─── Proficiency dials (Racing Audio Synchronized) ─── */}
                <div
                    ref={proficiencyRef}
                    className="mt-16 sm:mt-20 scroll-mt-24"
                    onClick={() => {
                        if (needsTap) handleUserTap();
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-7 flex flex-wrap items-center justify-between gap-4 sm:mb-8"
                    >
                        <div className="flex items-center gap-3">
                            <h3 className="shrink-0 font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
                                Proficiency
                            </h3>
                            <span className="hidden sm:inline-block rounded-pill border border-border bg-surface px-2.5 py-0.5 text-[0.6875rem] font-medium text-muted">
                                Race Sound Tachometer
                            </span>
                        </div>

                        {/* Engine Sound Control Pill */}
                        <div className="flex items-center gap-2">
                            {needsTap ? (
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleUserTap();
                                    }}
                                    className="inline-flex cursor-pointer items-center gap-2 rounded-pill border border-primary/50 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary shadow-[0_0_15px_rgba(34,211,238,0.25)] transition-all hover:scale-105 hover:bg-primary/20"
                                >
                                    <Gauge className="h-3.5 w-3.5 animate-spin [animation-duration:3s]" />
                                    <span>Tap to Rev Engine Audio 🔊</span>
                                </button>
                            ) : isPlaying ? (
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleSound();
                                    }}
                                    className="inline-flex cursor-pointer items-center gap-2 rounded-pill border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all hover:bg-emerald-500/20"
                                    title="Click to mute race sound"
                                >
                                    <span className="flex h-3 items-end gap-0.5">
                                        <span className="h-full w-0.5 animate-pulse rounded-full bg-emerald-400" />
                                        <span className="h-2/3 w-0.5 animate-pulse rounded-full bg-emerald-400 [animation-delay:150ms]" />
                                        <span className="h-4/5 w-0.5 animate-pulse rounded-full bg-emerald-400 [animation-delay:300ms]" />
                                    </span>
                                    <Volume2 className="h-3.5 w-3.5" />
                                    <span>Race Sound Revving</span>
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleSound();
                                    }}
                                    className="inline-flex cursor-pointer items-center gap-2 rounded-pill border border-border bg-surface px-3 py-1 text-xs font-medium text-muted transition-all hover:border-border-strong hover:text-ink"
                                    title="Click to unmute race sound"
                                >
                                    <VolumeX className="h-3.5 w-3.5 text-muted" />
                                    <span>Sound Muted</span>
                                </button>
                            )}
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
                        {skills.map((skill, index) => (
                            <SkillDial
                                key={skill.name}
                                skill={skill}
                                index={index}
                                rpmMotion={rpmMotion}
                            />
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
