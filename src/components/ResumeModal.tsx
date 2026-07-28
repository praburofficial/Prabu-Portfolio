import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

/* The résumé is a two-page document; both pages live in /public. */
const pages = [
    { src: '/resume.png', label: 'Page 1' },
    { src: '/resume1.png', label: 'Page 2' },
];

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Escape closes the sheet
    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen, onClose]);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Resume"
                    className="fixed inset-0 z-[1000] flex items-center justify-center p-4 pb-20 sm:p-6 sm:pb-6"
                    data-lenis-prevent="true"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 overscroll-none bg-background/85 backdrop-blur-2xl"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ scale: 0.96, opacity: 0, y: 18 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.96, opacity: 0, y: 18 }}
                        transition={{ type: 'spring', damping: 26, stiffness: 300 }}
                        className="relative z-10 flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-panel surface-strong shadow-e3 sm:h-[88vh]"
                    >
                        {/* Ambient wash */}
                        <div
                            className="pointer-events-none absolute inset-x-0 top-0 h-40"
                            style={{ background: 'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(34,211,238,0.14), transparent 70%)' }}
                        />

                        {/* ─── Header ─── */}
                        <div className="relative z-10 flex shrink-0 items-start justify-between gap-4 border-b border-white/[0.08] p-5 sm:p-7">
                            <div className="min-w-0">
                                <h2 className="font-display text-2xl font-bold tracking-[-0.025em] text-ink sm:text-3xl">
                                    PRABU R <span className="text-lg font-normal text-primary sm:text-xl">- Frontend Developer</span>
                                </h2>

                                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
                                    <span className="flex items-center gap-1.5">
                                        <MapPin className="h-4 w-4 text-secondary-soft" /> Namakkal, Tamil Nadu
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Mail className="h-4 w-4 text-secondary-soft" /> prabur2k5@gmail.com
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Phone className="h-4 w-4 text-secondary-soft" /> +91 95248 15890
                                    </span>
                                </div>

                                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                                    <a
                                        href="https://www.linkedin.com/in/prabu-r12092005"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-primary transition-colors hover:text-ink"
                                    >
                                        <Linkedin className="h-4 w-4" /> linkedin.com/in/prabu-r12092005
                                    </a>
                                    <a
                                        href="https://github.com/praburofficial"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-primary transition-colors hover:text-ink"
                                    >
                                        <Github className="h-4 w-4" /> github.com/praburofficial
                                    </a>
                                </div>
                            </div>

                            <button
                                onClick={onClose}
                                aria-label="Close resume"
                                className="grid h-11 w-11 shrink-0 place-items-center rounded-btn surface text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-hotpink/45 hover:text-hotpink"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* ─── Résumé pages ─── */}
                        <div className="custom-scrollbar relative z-10 min-h-0 flex-grow overflow-y-auto overscroll-contain p-4 sm:p-7">
                            <div className="mx-auto flex max-w-2xl flex-col gap-6">
                                {pages.map((page, i) => (
                                    <motion.figure
                                        key={page.src}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                        className="group relative overflow-hidden rounded-card bg-white shadow-e3 ring-1 ring-white/10"
                                    >
                                        <img
                                            src={page.src}
                                            alt={`Prabu R resume — ${page.label}`}
                                            loading={i === 0 ? 'eager' : 'lazy'}
                                            decoding="async"
                                            className="block w-full"
                                        />

                                        {/* Page label + per-page download */}
                                        <figcaption className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-3">
                                            <span className="badge-over-image rounded-pill px-2.5 py-1 text-[0.6875rem] font-semibold tracking-wide">
                                                {page.label}
                                            </span>
                                            <a
                                                href={page.src}
                                                download={page.src.replace('/', '')}
                                                aria-label={`Download resume ${page.label}`}
                                                className="badge-over-image pointer-events-auto grid h-9 w-9 place-items-center rounded-btn opacity-0 transition-all duration-300 hover:-translate-y-0.5 hover:text-primary group-hover:opacity-100 focus-visible:opacity-100"
                                            >
                                                <Download className="h-4 w-4" />
                                            </a>
                                        </figcaption>
                                    </motion.figure>
                                ))}
                            </div>
                        </div>

                        {/* ─── Footer actions ─── */}
                        <div className="relative z-10 flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] px-5 py-4 sm:px-7">
                            <p className="text-xs text-faint">Two-page resume · updated May 2026</p>
                            <div className="flex flex-wrap gap-2">
                                {pages.map((page) => (
                                    <a
                                        key={page.src}
                                        href={page.src}
                                        download={page.src.replace('/', '')}
                                        className="inline-flex items-center gap-2 rounded-btn surface px-4 py-2.5 text-[0.8125rem] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:text-primary"
                                    >
                                        <Download className="h-4 w-4" />
                                        {page.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}
