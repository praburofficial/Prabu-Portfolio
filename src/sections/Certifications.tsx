import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { Award, Trophy, Github, Linkedin, ExternalLink, X, Download } from 'lucide-react';

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

/* Letter-by-letter title with spring physics */
const titleText = "Certifications";
const letterVariants: Variants = {
    hidden: { opacity: 0, y: -40, rotateX: -90 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            delay: i * 0.06,
            type: 'spring',
            stiffness: 200,
            damping: 12,
        },
    }),
};

export function Certifications() {
    const [activeTab, setActiveTab] = useState<'Course Certifications' | 'Event Certifications'>('Course Certifications');
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

    // Generate stable star positions on mount lazily
    const [stars] = useState(() =>
        Array.from({ length: 50 }).map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            duration: `${2 + Math.random() * 3}s`,
            delay: `${Math.random() * 3}s`,
        }))
    );

    return (
        <section id="certifications" className="relative py-24 z-10 min-h-screen">
            {/* Star particle effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {stars.map((star, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-white/30"
                        style={{
                            top: star.top,
                            left: star.left,
                            animation: `pulse-glow ${star.duration} ease-in-out infinite`,
                            animationDelay: star.delay,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Dramatic letter-by-letter title */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Outfit'] inline-flex">
                        {titleText.split('').map((char, i) => (
                            <motion.span
                                key={i}
                                custom={i}
                                variants={letterVariants}
                                className={i < 7 ? 'text-white' : 'gradient-text'}
                                style={{ display: 'inline-block' }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_var(--color-primary)]" />
                </motion.div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {(['Course Certifications', 'Event Certifications'] as const).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2.5 rounded-full font-['Outfit'] font-bold transition-all duration-300 ${activeTab === tab
                                ? 'bg-primary text-white shadow-[0_0_15px_var(--color-primary)] scale-105'
                                : 'bg-white/5 text-gray-400 border border-white/10 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* 4-column card grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {(activeTab === 'Course Certifications' ? certificates : eventCertificates).map((cert, index) => (
                        <motion.div
                            key={cert.title + activeTab}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <GlassCard
                                glow
                                className="h-full group hover:-translate-y-2 hover:border-primary/40 transition-all duration-500 relative overflow-hidden flex flex-col cursor-pointer"
                            >
                                {/* Diagonal shimmer sweep */}
                                <div
                                    className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: 'linear-gradient(135deg, transparent 30%, rgba(0,212,255,0.08) 50%, transparent 70%)',
                                        backgroundSize: '200% 200%',
                                        animation: 'shimmer 3s ease-in-out infinite',
                                    }}
                                />

                                {/* Certificate Image Header - Click to view full image */}
                                <div
                                    className="relative h-48 w-full overflow-hidden border-b border-white/5"
                                    onClick={() => setSelectedImage(cert.image)}
                                >
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050b18] via-transparent to-transparent pointer-events-none" />

                                    {/* Year badge over image */}
                                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full z-20 pointer-events-none">
                                        <span className="text-xs font-bold text-white tracking-wider">{cert.date}</span>
                                    </div>

                                    {/* Hover zoom overlay indicator */}
                                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 backdrop-blur-[2px] pointer-events-none">
                                        <ExternalLink className="w-8 h-8 text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
                                    </div>
                                </div>

                                {/* Content Body */}
                                <div className="p-5 flex-1 flex flex-col relative z-20 bg-[#050b18]/40" onClick={() => setSelectedImage(cert.image)}>
                                    {/* Trophy Icon overriding the image cut */}
                                    <div className="absolute -top-8 left-5">
                                        <div
                                            className="w-12 h-12 rounded-xl bg-[#0a1628] border border-[rgba(0,212,255,0.2)] flex items-center justify-center group-hover:animate-pulse transition-all shadow-xl"
                                            style={{ boxShadow: `0 0 20px ${cert.gradeColor}30` }}
                                        >
                                            {cert.grade === 'A+ Grade'
                                                ? <Trophy className="w-6 h-6" style={{ color: cert.gradeColor, filter: `drop-shadow(0 0 5px ${cert.gradeColor})` }} />
                                                : <Award className="w-6 h-6" style={{ color: cert.gradeColor, filter: `drop-shadow(0 0 5px ${cert.gradeColor})` }} />
                                            }
                                        </div>
                                    </div>

                                    {/* Push text down because of the floating icon */}
                                    <div className="pt-6 flex-1 flex flex-col pointer-events-none">
                                        <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors font-['Outfit'] line-clamp-2">
                                            {cert.title}
                                        </h3>
                                        <p className="text-gray-400 text-xs md:text-sm mb-4 flex-1">{cert.issuer}</p>

                                        {/* Grade removed as requested */}
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

                {/* Social Links */}
                <motion.div
                    className="flex justify-center gap-4 mt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <a href="https://github.com/praburofficial" target="_blank" rel="noopener noreferrer"
                        className="p-3 bg-white/5 rounded-full border border-white/10 text-gray-400 hover:text-primary hover:border-primary/50 transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(0,212,255,0.4)]">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/prabu-r12092005" target="_blank" rel="noopener noreferrer"
                        className="p-3 bg-white/5 rounded-full border border-white/10 text-gray-400 hover:text-secondary hover:border-secondary/50 transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(124,58,237,0.4)]">
                        <Linkedin className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>

            {/* Full Screen Image Modal Portaled */}
            {createPortal(
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
                            data-lenis-prevent="true"
                        >
                            {/* Action Buttons Container */}
                            <div className="absolute top-6 right-6 flex items-center gap-4 z-50">
                                {/* Download Button */}
                                <a
                                    href={selectedImage}
                                    download={selectedImage.split('/').pop() || 'certificate'}
                                    className="p-3 bg-primary/20 backdrop-blur-sm rounded-full hover:bg-primary/40 hover:scale-110 transition-all group flex items-center justify-center border border-primary/30 shadow-[0_0_15px_rgba(0,212,255,0.3)]"
                                    onClick={(e) => e.stopPropagation()}
                                    title="Download Certificate"
                                >
                                    <Download className="w-6 h-6 text-primary" />
                                </a>

                                {/* Enhanced Close / "Wrong" Button */}
                                <button
                                    className="p-3 bg-red-500/80 rounded-full hover:bg-red-500 hover:scale-110 transition-all group flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.5)]"
                                    onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                                    title="Close"
                                >
                                    <X className="w-6 h-6 text-white" />
                                </button>
                            </div>

                            <motion.img
                                initial={{ scale: 0.8, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.8, y: 20 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                src={selectedImage}
                                alt="Full Screen Certificate"
                                className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-[0_0_40px_rgba(0,212,255,0.3)] border border-primary/20"
                                onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking image itself
                            />
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
}
