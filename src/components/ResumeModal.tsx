import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const pages = [
    { src: '/resume.jpg', label: 'Page 1' },
    { src: '/resume1.jpg', label: 'Page 2' },
];

const RESUME_PDF_PATH = '/Prabu Resume.pdf';
const RESUME_DOWNLOAD_NAME = 'Prabu_Resume.pdf';

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Lock body scroll when open
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

    // Keyboard navigation (Escape to close)
    useEffect(() => {
        if (!isOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
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
                    aria-label="Resume Document Preview"
                    className="fixed inset-0 z-[9999] overflow-y-auto overscroll-contain bg-slate-950/90 backdrop-blur-xl"
                    onClick={onClose}
                    data-lenis-prevent="true"
                >
                    {/* ─── Floating Top Actions: Download PDF Resume & Close Button ─── */}
                    <div
                        className="sticky top-0 z-50 flex items-center justify-end gap-3 p-4 sm:p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Download PDF Resume Option */}
                        <a
                            href={RESUME_PDF_PATH}
                            download={RESUME_DOWNLOAD_NAME}
                            type="application/pdf"
                            className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/20 px-5 py-2.5 text-xs font-bold text-sky-200 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-sky-400 hover:bg-sky-400 hover:text-slate-950 hover:shadow-[0_0_24px_rgba(56,189,248,0.6)] active:scale-95 sm:text-sm"
                            title="Download PDF Resume"
                        >
                            <Download className="h-4 w-4" />
                            <span>Download PDF Resume</span>
                        </a>

                        {/* Close Modal */}
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close resume"
                            className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white hover:text-slate-950 active:scale-95"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* ─── Resume Pages: Natural Scrollable Stack ─── */}
                    <div
                        className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-3 pb-16 sm:px-6 sm:pb-24"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {pages.map((p, index) => (
                            <motion.div
                                key={p.src}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.35, delay: index * 0.1 }}
                                className="w-full overflow-hidden rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.85)] ring-1 ring-white/10"
                            >
                                <img
                                    src={p.src}
                                    alt={`Prabu R Resume - ${p.label}`}
                                    className="block h-auto w-full object-contain"
                                    loading={index === 0 ? 'eager' : 'lazy'}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}
