import { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { SectionHeading } from '../components/SectionHeading';
import { Award, Trophy, Github, Linkedin, Maximize2, X, Download } from 'lucide-react';

/* Re-ordered certificates as requested */
const certificates = [
    {
        title: 'Advance Diploma in Python Programming',
        issuer: 'CSC Computer Education',
        grade: 'A+ Grade',
        gradeColor: '#FFD700',
        date: '2022',
        image: '/csc.webp',
    },
    {
        title: 'Data Science Foundation',
        issuer: 'Great Learning',
        grade: 'A Grade',
        gradeColor: '#00d4ff',
        date: '2024',
        image: '/ds.webp',
    },
    {
        title: 'UI/UX Design',
        issuer: 'Great Learning',
        grade: 'Completed',
        gradeColor: '#10b981',
        date: '2024',
        image: '/ui.webp',
    },
    {
        title: 'Python Programming',
        issuer: 'Cybernaut Edu-Tech',
        grade: 'Completed',
        gradeColor: '#10b981',
        date: '2024',
        image: '/python.webp',
    },
    {
        title: 'C++ Programming',
        issuer: 'Cybernaut Edu-Tech',
        grade: 'Completed',
        gradeColor: '#10b981',
        date: '2024',
        image: '/c++.webp',
    },
    {
        title: 'Java Programming',
        issuer: 'Cybernaut Edu-Tech',
        grade: 'Completed',
        gradeColor: '#10b981',
        date: '2024',
        image: '/java.webp',
    },
    {
        title: 'Html & css Bootcamp',
        issuer: 'Lets Upgrade',
        grade: 'Completed',
        gradeColor: '#10b981',
        date: '2025',
        image: '/boot.webp',
    },
    {
        title: 'Web development Internship',
        issuer: 'Optimus Technocrates',
        grade: 'Completed',
        gradeColor: '#10b981',
        date: '2025',
        image: '/optimus.png',
    },
    {
        title: 'Placement Preparation Webinar',
        issuer: 'Lets Upgrade',
        grade: 'Completed',
        gradeColor: '#10b981',
        date: '2025',
        image: '/placement.webp',
    },
    {
        title: 'Incubation Ecosystem Webinar',
        issuer: 'Optimus Technocrates',
        grade: 'Completed',
        gradeColor: '#10b981',
        date: '2025',
        image: '/incubation.webp',
    },
    {
        title: 'HTML',
        issuer: 'Simplilearn',
        grade: 'Completed',
        gradeColor: '#10b981',
        date: '2025',
        image: '/html.webp',
    },
    {
        title: 'CSS',
        issuer: 'Simplilearn',
        grade: 'Completed',
        gradeColor: '#10b981',
        date: '2025',
        image: '/css.webp',
    },
    {
        title: 'JavaScript',
        issuer: 'Simplilearn',
        grade: 'Completed',
        gradeColor: '#10b981',
        date: '2025',
        image: '/js.webp',
    },
    {
        title: 'HackerRank Problem Solving in Python',
        issuer: 'HackerRank',
        grade: 'Verified',
        gradeColor: '#7c3aed',
        date: '2025',
        image: '/hacker.webp',
    }
];

const eventCertificates = [
    {
        title: 'Workshop Participation',
        issuer: 'KSR Insitute for engineering and technology',
        grade: 'Participated',
        gradeColor: '#7c3aed',
        date: '2023',
        image: '/23.jpeg',
    },
    {
        title: 'Short Film-2nd Prize',
        issuer: 'Mahendra Engineering College',
        grade: '2nd Prize',
        gradeColor: '#00d4ff',
        date: '2024',
        image: '/24-1.jpeg',
    },
    {
        title: 'Code Debugging Participation',
        issuer: 'Knowledge Institute of Technology',
        grade: 'Participated',
        gradeColor: '#10b981',
        date: '2024',
        image: '/24-2.jpeg',
    },
    {
        title: 'Code Debugging Participation',
        issuer: 'Mahendra Engineering College',
        grade: 'Participated',
        gradeColor: '#7c3aed',
        date: '2024',
        image: '/24-3.jpeg',
    },
    {
        title: 'Short Film - 1st Prize',
        issuer: 'Mahendra Engineering College',
        grade: '1st Prize',
        gradeColor: '#00d4ff',
        date: '2024',
        image: '/24-4.jpeg',
    },
    {
        title: 'Bug Hunting Participation',
        issuer: 'Shri Shanmuga College of Engineering and Technology',
        grade: 'Participated',
        gradeColor: '#10b981',
        date: '2024',
        image: '/24-5.jpeg',
    },
    {
        title: 'Fun-a-thon 2nd Prize',
        issuer: 'Sona College of Technology',
        grade: '2nd Prize',
        gradeColor: '#10b981',
        date: '2025',
        image: '/25-1.jpeg',
    },
    {
        title: 'Idea Insights',
        issuer: 'Sona College of Technology',
        grade: 'Participated',
        gradeColor: '#7c3aed',
        date: '2025',
        image: '/25-2.jpeg',
    },
    {
        title: 'Paper Presentation Participation',
        issuer: 'KSR Institute of Technology',
        grade: 'Participated',
        gradeColor: '#00d4ff',
        date: '2025',
        image: '/25-3.jpeg',
    },
    {
        title: 'Techno Clash Participation',
        issuer: 'Jayalakshmi Institute of Technology',
        grade: 'Participated',
        gradeColor: '#10b981',
        date: '2025',
        image: '/25-4.jpeg',
    },
    {
        title: 'Tressure Hunt 1st Prize',
        issuer: 'Jayalakshmi Institute of Technology',
        grade: '1st Prize',
        gradeColor: '#7c3aed',
        date: '2025',
        image: '/25-5.jpeg',
    },
    {
        title: 'Neurothon Participation',
        issuer: 'New Prince Shri Bhavani College of Engineering and Technology',
        grade: 'Participated',
        gradeColor: '#00d4ff',
        date: '2026',
        image: '/26.jpeg',
    }
];

const tabs = ['Course Certifications', 'Event Certifications'] as const;
type Tab = (typeof tabs)[number];

export function Certifications() {
    const [activeTab, setActiveTab] = useState<Tab>('Course Certifications');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Lock background scroll when the image modal is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedImage]);

    // Close the lightbox on Escape
    useEffect(() => {
        if (!selectedImage) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedImage(null);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [selectedImage]);

    const list = activeTab === 'Course Certifications' ? certificates : eventCertificates;

    const counts = useMemo(
        () => ({
            'Course Certifications': certificates.length,
            'Event Certifications': eventCertificates.length,
        }),
        []
    );

    return (
        <section id="certifications" className="relative z-10 py-24 sm:py-32">
            {/* Soft spotlight */}
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[40rem]"
                style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(139,92,246,0.10), transparent 70%)' }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <SectionHeading
                    eyebrow="Credentials"
                    title="Certifications &"
                    highlight="Awards"
                    description="Courses completed and events competed in — every certificate is viewable and downloadable."
                    className="mb-12"
                />

                {/* ─── Segmented tabs ─── */}
                <div className="mb-12 flex justify-center">
                    <div role="tablist" aria-label="Certificate categories" className="inline-flex gap-1 rounded-pill surface p-1.5">
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab;
                            return (
                                <button
                                    key={tab}
                                    role="tab"
                                    aria-selected={isActive}
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative rounded-pill px-4 py-2.5 text-[0.8125rem] font-semibold transition-colors duration-300 sm:px-6 ${isActive ? 'text-[#04121a]' : 'text-muted hover:text-ink'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="cert-tab"
                                            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                                            className="absolute inset-0 rounded-pill bg-gradient-to-b from-primary-soft to-primary shadow-[0_1px_0_rgba(255,255,255,0.45)_inset,0_8px_24px_-10px_rgba(34,211,238,0.9)]"
                                        />
                                    )}
                                    <span className="relative z-10 inline-flex items-center gap-2">
                                        {tab}
                                        <span
                                            className={`rounded-pill px-1.5 py-0.5 text-[0.625rem] font-bold ${isActive ? 'bg-black/15 text-[#04121a]' : 'bg-white/[0.07] text-faint'
                                                }`}
                                        >
                                            {counts[tab]}
                                        </span>
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* ─── Certificate grid ─── */}
                <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    <AnimatePresence mode="popLayout">
                        {list.map((cert, index) => (
                            <motion.div
                                key={cert.title + cert.image}
                                layout
                                initial={{ opacity: 0, y: 26, scale: 0.96 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.5, delay: Math.min(index, 8) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <GlassCard glow className="group h-full p-0">
                                    <button
                                        type="button"
                                        onClick={() => setSelectedImage(cert.image)}
                                        aria-label={`View ${cert.title} certificate full screen`}
                                        className="flex h-full w-full flex-col text-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5"
                                    >
                                        {/* Preview */}
                                        <div className="relative aspect-[16/11] w-full overflow-hidden rounded-t-card">
                                            <img
                                                src={cert.image}
                                                alt={cert.title}
                                                loading="lazy"
                                                decoding="async"
                                                className="h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.09]"
                                            />
                                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080a12] via-transparent to-transparent" />

                                            {/* Year — opaque so it reads over pale certificate scans */}
                                            <span className="badge-over-image pointer-events-none absolute right-3 top-3 rounded-pill px-2.5 py-1 text-[0.6875rem] font-bold tracking-wide">
                                                {cert.date}
                                            </span>

                                            {/* Zoom affordance */}
                                            <span className="pointer-events-none absolute inset-0 grid place-items-center bg-background/45 opacity-0 backdrop-blur-[2px] transition-opacity duration-400 group-hover:opacity-100">
                                                <span className="grid h-11 w-11 place-items-center rounded-full surface-strong">
                                                    <Maximize2 className="h-4.5 w-4.5 text-ink" />
                                                </span>
                                            </span>
                                        </div>

                                        {/* Body */}
                                        <div className="relative flex flex-1 flex-col p-5 pt-8">
                                            {/* Floating award tile straddling the image edge */}
                                            <span
                                                className="absolute -top-6 left-5 grid h-12 w-12 place-items-center rounded-[15px] surface-strong transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105"
                                                style={{ boxShadow: `0 12px 30px -12px ${cert.gradeColor}90, inset 0 0 0 1px ${cert.gradeColor}33` }}
                                            >
                                                {cert.grade === 'A+ Grade' ? (
                                                    <Trophy className="h-5 w-5" style={{ color: cert.gradeColor }} />
                                                ) : (
                                                    <Award className="h-5 w-5" style={{ color: cert.gradeColor }} />
                                                )}
                                            </span>

                                            <h3 className="line-clamp-2 font-display text-[0.9375rem] font-bold leading-snug tracking-[-0.015em] text-ink transition-colors duration-300 group-hover:text-primary">
                                                {cert.title}
                                            </h3>
                                            <p className="mt-2 line-clamp-2 flex-1 text-[0.8125rem] leading-relaxed text-muted">
                                                {cert.issuer}
                                            </p>

                                            <span className="mt-4 inline-flex items-center gap-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-faint transition-colors duration-300 group-hover:text-primary">
                                                View certificate
                                                <Maximize2 className="h-3 w-3" />
                                            </span>
                                        </div>
                                    </button>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* ─── Social links ─── */}
                <motion.div
                    className="mt-16 flex justify-center gap-3"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <a
                        href="https://github.com/praburofficial"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub profile"
                        className="grid h-12 w-12 place-items-center rounded-btn surface text-muted transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:text-primary"
                    >
                        <Github className="h-5 w-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/prabu-r12092005"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn profile"
                        className="grid h-12 w-12 place-items-center rounded-btn surface text-muted transition-all duration-300 hover:-translate-y-1 hover:border-secondary/45 hover:text-secondary-soft"
                    >
                        <Linkedin className="h-5 w-5" />
                    </a>
                </motion.div>
            </div>

            {/* ─── Lightbox ─── */}
            {createPortal(
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                            role="dialog"
                            aria-modal="true"
                            aria-label="Certificate preview"
                            className="fixed inset-0 z-[9999] flex cursor-zoom-out items-center justify-center bg-background/92 p-4 backdrop-blur-2xl sm:p-8"
                            data-lenis-prevent="true"
                        >
                            <div className="absolute right-5 top-5 z-50 flex items-center gap-2 sm:right-8 sm:top-8">
                                <a
                                    href={selectedImage}
                                    download={selectedImage.split('/').pop() || 'certificate'}
                                    className="grid h-12 w-12 place-items-center rounded-btn surface-strong text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
                                    onClick={(e) => e.stopPropagation()}
                                    title="Download Certificate"
                                    aria-label="Download certificate"
                                >
                                    <Download className="h-5 w-5" />
                                </a>
                                <button
                                    className="grid h-12 w-12 place-items-center rounded-btn surface-strong text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-hotpink/50 hover:text-hotpink"
                                    onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                                    title="Close"
                                    aria-label="Close preview"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <motion.img
                                initial={{ scale: 0.92, y: 18, opacity: 0 }}
                                animate={{ scale: 1, y: 0, opacity: 1 }}
                                exit={{ scale: 0.92, y: 18, opacity: 0 }}
                                transition={{ type: 'spring', damping: 26, stiffness: 300 }}
                                src={selectedImage}
                                alt="Full Screen Certificate"
                                className="max-h-[88vh] max-w-full cursor-default rounded-panel object-contain shadow-e3 ring-1 ring-white/10"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
}
