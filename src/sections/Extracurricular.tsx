import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import Tilt from 'react-parallax-tilt';
import { Film, Youtube, Play, ExternalLink, X, Cpu, Code2, Sparkles, Video, GraduationCap } from 'lucide-react';

interface ShortFilm {
    id: string;
    title: string;
    description: string;
    youtubeUrl: string;
    category: 'Short Film Direction' | '1-Minute Short Film';
    duration: string;
}

const shortFilms: ShortFilm[] = [
    {
        id: 'jdUdddNDw5E',
        title: 'SAALAI : The Road',
        description: 'SAALAI : The Road | Awareness Short Film | Road safety short film | Tamil Short Film | 3D Productions',
        youtubeUrl: 'https://youtu.be/jdUdddNDw5E?si=d1d645PL-uVrLN-z',
        category: 'Short Film Direction',
        duration: 'Short Film',
    },
    {
        id: 'C68PBLwrI-E',
        title: 'Dear Buddy',
        description: 'Dear Buddy | Tamil Short Film | Friendship Short Film | Crime Thriller | 3D Productions | Awareness',
        youtubeUrl: 'https://youtu.be/C68PBLwrI-E?si=uKjKeKW4NGph0uq4',
        category: 'Short Film Direction',
        duration: 'Short Film',
    },
    {
        id: 'DrwP2o125FQ',
        title: 'SECTION 416',
        description: 'SECTION 416 | CRIME THRILLER | TAMIL PREQUEL MOVIE | CM VIJAY | SUSPENSE TAMIL SHORT FILM | 3D Productions',
        youtubeUrl: 'https://youtu.be/DrwP2o125FQ?si=mUPwLmQzF8t75wYd',
        category: 'Short Film Direction',
        duration: 'Short Film',
    },
    {
        id: '-nFf8TypfuE',
        title: 'Who Blind',
        description: 'Who Blind short film | 1-Minute Short Film | Real Life Short Film | 3D Productions',
        youtubeUrl: 'https://youtu.be/-nFf8TypfuE?si=oImBxklWZ0MK0Dl9',
        category: '1-Minute Short Film',
        duration: '1 Minute',
    },
];

const youtubeAdminRoles = [
    {
        title: '3D Productions',
        role: 'Founder & Channel Administrator',
        link: 'https://youtube.com/@admin3d24?si=W9jzQEE7jwJwZW4g',
        description: 'Directing short film direction, creative video editing, storyboarding, digital content strategy, and channel management for 3D Productions.',
        handle: '@admin3d24',
        badge: 'Media & Film Channel',
        gradient: 'from-red-500/20 to-rose-500/20',
        borderColor: '#ef4444',
    },
    {
        title: 'Gnan CSE Hub-Gnanamani College of Technology',
        role: 'YouTube Channel Administrator',
        link: 'https://youtube.com/@admin_cse?si=gSLqqxFcG58-PBlx',
        description: 'Managing channel administration, technical video publishing, department events coverage, and digital media outreach.',
        handle: '@admin_cse',
        badge: 'Institutional Channel',
        gradient: 'from-blue-500/20 to-cyan-500/20',
        borderColor: '#00d4ff',
    },
    {
        title: 'Thamizhoviyaa Home Goodies',
        role: 'YouTube Channel Administrator',
        link: 'https://youtube.com/@admin_thamizhoviyaa?si=SA_7QzBGBMrlFztP',
        description: 'Directing digital video strategy, product promotions, brand storytelling, and YouTube channel operations for herbal products.',
        handle: '@admin_thamizhoviyaa',
        badge: 'Brand Channel',
        gradient: 'from-emerald-500/20 to-teal-500/20',
        borderColor: '#10b981',
    },
    {
        title: 'Boxart Studio',
        role: 'Founder & Channel Admin',
        link: 'https://youtube.com/@rp_admin?si=m1g48TDdLq0VBFzV',
        description: 'Designing and building custom vehicle models using cardboard by hand, producing tutorial videos, and managing studio channel.',
        handle: '@rp_admin',
        badge: 'Craft & Studio Creator',
        gradient: 'from-purple-500/20 to-pink-500/20',
        borderColor: '#7c3aed',
    },
];

const leadershipRoles = [
    {
        title: 'Final Year Project Team Head',
        organization: 'Gnanamani College of Technology',
        period: '2025-2026',
        description: 'Leading the final year project team for the Educational ERP System, directing full-stack architecture, role-based access control, admission, billing, and hostel management modules.',
        icon: GraduationCap,
        color: '#2563eb',
    },
    {
        title: 'Smart Connecters-Head of IoT Club',
        organization: 'Gnanamani College of Technology',
        period: '2024 - 2026',
        description: 'Serving as IoT Club Head, leading hardware-software integration workshops, IoT projects, and mentoring tech enthusiasts.',
        icon: Cpu,
        color: '#00d4ff',
    },
    {
        title: 'Softcell-Head of Frontend Developers',
        organization: 'Gnanamani College of Technology',
        period: '2024-Present',
        description: 'Leading student web and app developer projects, organizing technical sessions, code reviews, and full-stack software initiatives.',
        icon: Code2,
        color: '#7c3aed',
    },
];

const titleText = "Extracurriculars";
const letterVariants: Variants = {
    hidden: { opacity: 0, y: -30, rotateX: -90 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            delay: i * 0.05,
            type: 'spring',
            stiffness: 200,
            damping: 12,
        },
    }),
};

export function Extracurricular() {
    const [selectedVideo, setSelectedVideo] = useState<ShortFilm | null>(null);
    const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedVideo) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedVideo]);

    const handleImgError = (id: string) => {
        setImgErrors(prev => ({ ...prev, [id]: true }));
    };

    return (
        <section id="extracurricular" className="relative py-24 z-10 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Title */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Outfit'] inline-flex flex-wrap justify-center gap-x-1">
                        {titleText.split('').map((char, i) => (
                            <motion.span
                                key={i}
                                custom={i}
                                variants={letterVariants}
                                className={i < 5 ? 'text-slate-900' : 'gradient-text'}
                                style={{ display: 'inline-block' }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h2>
                    <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto mt-2 font-medium">
                        Film Direction, Channel Administration & Campus Leadership
                    </p>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4 shadow-[0_0_10px_var(--color-primary)]" />
                </motion.div>

                {/* --- SECTION 1: SHORT FILM DIRECTION --- */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="p-3 bg-primary/10 border border-primary/30 rounded-xl text-primary shadow-[0_0_15px_rgba(37,99,235,0.15)]">
                            <Film className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 font-['Outfit'] flex items-center gap-2">
                                Short Film Direction <span className="text-xs bg-primary/10 text-primary border border-primary/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">Director</span>
                            </h3>
                            <p className="text-slate-600 text-sm font-medium">Cinematic storytelling, directing, and creative production</p>
                        </div>
                    </motion.div>

                    {/* Short Films Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {shortFilms.map((film, index) => {
                            const thumbnailUrl = `https://img.youtube.com/vi/${film.id}/hqdefault.jpg`;
                            const hasError = imgErrors[film.id];

                            return (
                                <motion.div
                                    key={film.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Tilt
                                        tiltMaxAngleX={8}
                                        tiltMaxAngleY={8}
                                        glareEnable={true}
                                        glareMaxOpacity={0.15}
                                        glareColor="#2563eb"
                                        className="h-full"
                                    >
                                        <GlassCard
                                            glow
                                            className="h-full p-0 overflow-hidden group flex flex-col hover:-translate-y-2 transition-all duration-500 cursor-pointer border border-border bg-white shadow-e1 hover:shadow-e2 hover:border-primary/50"
                                            onClick={() => setSelectedVideo(film)}
                                        >
                                            {/* Video Thumbnail area */}
                                            <div className="relative h-48 w-full bg-[#0b1220] overflow-hidden flex items-center justify-center">
                                                {!hasError ? (
                                                    <img
                                                        src={thumbnailUrl}
                                                        alt={film.title}
                                                        onError={() => handleImgError(film.id)}
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                ) : (
                                                    /* Empty Thumbnail Fallback */
                                                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-4 text-center">
                                                        <Video className="w-10 h-10 text-slate-400 mb-2 group-hover:text-primary transition-colors" />
                                                        <span className="text-xs text-slate-300 font-medium">Thumbnail Placeholder</span>
                                                        <span className="text-[10px] text-slate-400 mt-1">Click to play video</span>
                                                    </div>
                                                )}

                                                {/* Gradient overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/80 via-transparent to-transparent pointer-events-none" />

                                                {/* Category Badge */}
                                                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-md z-10">
                                                    <span className="text-[11px] font-bold text-primary-soft tracking-wide">{film.duration}</span>
                                                </div>

                                                {/* Play Button Overlay */}
                                                <div className="absolute inset-0 flex items-center justify-center z-20 group-hover:scale-110 transition-transform duration-300">
                                                    <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.6)] group-hover:bg-red-600 transition-colors">
                                                        <Play className="w-6 h-6 fill-white ml-0.5" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                                                <div>
                                                    <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors font-['Outfit'] line-clamp-1">
                                                        {film.title}
                                                    </h4>
                                                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                                                        {film.description}
                                                    </p>
                                                </div>

                                                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                                                    <span className="text-[11px] font-semibold text-violet flex items-center gap-1">
                                                        <Film className="w-3.5 h-3.5" /> {film.category}
                                                    </span>
                                                    <span className="text-[11px] text-primary font-semibold flex items-center gap-1 group-hover:underline">
                                                        Watch <ExternalLink className="w-3 h-3" />
                                                    </span>
                                                </div>
                                            </div>
                                        </GlassCard>
                                    </Tilt>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* --- SECTION 2: YOUTUBE CHANNEL ADMINISTRATION --- */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-600 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
                            <Youtube className="w-6 h-6 fill-red-600 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 font-['Outfit']">
                                YouTube Channel Administration
                            </h3>
                            <p className="text-slate-600 text-sm font-medium">Managing & directing YouTube channels and digital content</p>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {youtubeAdminRoles.map((channel, index) => (
                            <motion.div
                                key={channel.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <GlassCard
                                    glow
                                    className="h-full p-6 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500 border border-border bg-white shadow-e1 hover:shadow-e2 hover:border-red-500/40 relative overflow-hidden"
                                >
                                    {/* Top decorative gradient glow */}
                                    <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${channel.gradient}`} />

                                    <div>
                                        {/* Header area with prominent YouTube Logo */}
                                        <div className="flex items-start justify-between gap-2 mb-4">
                                            <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-600 shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                                                <Youtube className="w-5 h-5 fill-red-600 text-white" />
                                            </div>
                                            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
                                                {channel.badge}
                                            </span>
                                        </div>

                                        <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-red-600 transition-colors font-['Outfit']">
                                            {channel.title}
                                        </h4>
                                        <p className="text-xs font-semibold text-red-600 mb-3 flex items-center gap-1.5">
                                            <Youtube className="w-3.5 h-3.5 fill-red-600 text-white" /> {channel.role}
                                        </p>
                                        <p className="text-xs text-slate-600 leading-relaxed mb-6">
                                            {channel.description}
                                        </p>
                                    </div>

                                    <a
                                        href={channel.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-2.5 px-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-bold font-['Outfit'] flex items-center justify-center gap-2 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm group-hover:shadow-md"
                                    >
                                        <Youtube className="w-3.5 h-3.5 fill-current" />
                                        <span>Visit {channel.handle}</span>
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* --- SECTION 3: CAMPUS LEADERSHIP & TECH CLUBS --- */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="p-3 bg-violet-500/10 border border-violet-500/30 rounded-xl text-violet shadow-[0_0_15px_rgba(124,58,237,0.15)]">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 font-['Outfit']">
                                Leadership & Community Positions
                            </h3>
                            <p className="text-slate-600 text-sm font-medium">Organizing, leading teams, and empowering developer communities</p>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {leadershipRoles.map((lead, index) => {
                            const IconComponent = lead.icon;
                            return (
                                <motion.div
                                    key={lead.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                >
                                    <GlassCard
                                        glow
                                        className="h-full p-6 flex gap-4 items-start group hover:-translate-y-1.5 transition-all duration-500 border border-border bg-white shadow-e1 hover:shadow-e2 hover:border-primary/40"
                                    >
                                        <div
                                            className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm"
                                            style={{ color: lead.color, boxShadow: `0 0 15px ${lead.color}20` }}
                                        >
                                            <IconComponent className="w-6 h-6" />
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                                                <h4 className="text-base font-bold text-slate-900 font-['Outfit'] group-hover:text-primary transition-colors">
                                                    {lead.title}
                                                </h4>
                                                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-primary-tint text-primary border border-primary/20">
                                                    {lead.period}
                                                </span>
                                            </div>
                                            <p className="text-xs font-semibold text-violet mb-2">
                                                {lead.organization}
                                            </p>
                                            <p className="text-xs text-slate-600 leading-relaxed">
                                                {lead.description}
                                            </p>
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Video Modal Portaled */}
            {createPortal(
                <AnimatePresence>
                    {selectedVideo && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedVideo(null)}
                            className="fixed inset-0 z-[9999] bg-slate-900/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
                            data-lenis-prevent="true"
                        >
                            <div
                                className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Header bar */}
                                <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50">
                                    <div className="flex items-center gap-2">
                                        <Film className="w-5 h-5 text-primary" />
                                        <h3 className="text-sm md:text-base font-bold text-slate-900 font-['Outfit'] truncate">
                                            {selectedVideo.title}
                                        </h3>
                                    </div>
                                    <button
                                        onClick={() => setSelectedVideo(null)}
                                        className="p-2 bg-slate-200 hover:bg-red-500 rounded-full text-slate-600 hover:text-white transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Video Iframe player */}
                                <div className="relative w-full aspect-video bg-black">
                                    <iframe
                                        src={`https://www.youtube-nocookie.com/embed/${selectedVideo.id}?autoplay=1`}
                                        title={selectedVideo.title}
                                        className="absolute inset-0 w-full h-full border-0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>

                                {/* Footer details */}
                                <div className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white">
                                    <div>
                                        <p className="text-xs text-slate-700 max-w-xl leading-relaxed font-medium">
                                            {selectedVideo.description}
                                        </p>
                                    </div>
                                    <a
                                        href={selectedVideo.youtubeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-red-600 text-white rounded-xl text-xs font-bold font-['Outfit'] flex items-center gap-2 hover:bg-red-500 transition-colors shadow-md shrink-0"
                                    >
                                        <Youtube className="w-4 h-4 fill-white" />
                                        <span>Open on YouTube</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
}

