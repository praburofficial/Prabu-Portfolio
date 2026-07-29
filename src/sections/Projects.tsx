import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { SectionHeading } from '../components/SectionHeading';
import Tilt from 'react-parallax-tilt';
import { Github, ExternalLink } from 'lucide-react';
import { toneStyle } from '../lib/palette';

const projects = [
    {
        title: 'Gnanamani Educational Institutions-ERP System',
        description: 'Comprehensive ERP system managing admission, billing, and hostel with role-based access control for secure data management.',
        image: './gct-erp.jpeg',
        tags: ['React.js', 'Tailwind CSS', 'PostgreSQL'],
        links: { live: '', github: '' },
        color: '#7c3aed',
        category: 'React.js',
    },
    {
        title: 'Shri Aathav Textile Mills-Stock Management System',
        description: 'Digital solution for tracking stock levels with interactive data tables, reducing manual inventory errors with minimalist UI.',
        image: './Aadhav.jpeg',
        tags: ['React.js', 'Tailwind CSS', 'Frontend'],
        links: { live: '', github: '' },
        color: '#00d4ff',
        category: 'React.js',
    },
    {
        title: 'Code Blaza Technology-Company Website',
        description: 'Engineered a modern, responsive agency website featuring modular frontend components, prioritizing accessibility and scalable UI architecture.',
        image: './cbt.png',
        tags: ['React.js', 'Tailwind CSS', 'Frontend'],
        links: { live: '', github: '' },
        color: '#00FF9F',
        category: 'React.js',
    },

    {
        title: 'Trust Lock-Social Media Fake ID Detection',
        description: 'A tool engineered to analyze social media profiles to identify and flag potential fake accounts using data patterns and behavior analysis.',
        image: './trust-lock.jpeg',
        tags: ['React.js', 'Tailwind CSS'],
        links: { live: '', github: '' },
        color: '#7c3aed',
        category: 'React.js',
    },
    {
        title: 'PDFMaster Pro - PDF Conversion Tool',
        description: 'A powerful windows Application PDF conversionre— convert PDFs to Images,Compress,Split,Compare, intuitive interface.',
        image: './pdf (2).webp',
        tags: ['Python', 'tkinter', 'PyPDF2'],
        links: { live: '', github: '' },
        color: '#f97316',
        category: 'React.js',
    },
    {
        title: 'DocPix - PDF and Image Conversion Tool',
        description: 'A versatile PDF and image conversion tool for seamless document processing and format transformations.',
        image: './docpix.png',
        tags: ['Python', 'tkinter'],
        links: { live: '', github: '' },
        color: '#f97316',
        category: 'Python',
    },
    {
        title: 'BuilDial - Construction Service Directory',
        description: 'A platform connecting homeowners with verified construction professionals, from civil engineers to interior designers, with transparent pricing and ratings.',
        image: './buildial.png',
        tags: ['React.js', 'Tailwind CSS'],
        links: { live: '', github: '' },
        color: '#2563EB',
        category: 'React.js',
    },
    {
        title: 'Snake Game-Web Application',
        description: 'A modern recreation of the classic retro snake arcade game, featuring smooth grid-based movement and dynamic score tracking.',
        image: './snake-game.jpeg',
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        links: { live: '', github: '' },
        color: '#00FF9F',
        category: 'HTML/CSS',
    },
    {
        title: 'Chess Game-Web Application',
        description: 'A classic chess game built from scratch with full move validation, piece highlighting, and an intuitive drag-and-drop interface for two-player gameplay.',
        image: './chess.png',
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        links: { live: '', github: '' },
        color: '#7c3aed',
        category: 'HTML/CSS',
    },
    {
        title: 'Basic Quiz- Web Application',
        description: 'Interactive web-based quiz application with scoring, timer functions, and dynamic question rendering for an engaging user experience.',
        image: './quiz.jpeg',
        tags: ['JavaScript', 'HTML', 'CSS'],
        links: { live: '', github: '' },
        color: '#00d4ff',
        category: 'JavaScript',
    },
    {
        title: 'Academic Attendance-Web Application',
        description: 'Digital attendance tracking system featuring analytics dashboards to visualize attendance trends daily and hourly.',
        image: './attendance.jpeg',
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        links: { live: '', github: '' },
        color: '#00d4ff',
        category: 'JavaScript',
    },

];


export function Projects() {

    return (
        <section id="projects" className="section-y relative z-10">
            <div className="shell">
                <SectionHeading
                    eyebrow="Selected Work"
                    title="Mission"
                    highlight="Logs"
                    description="Products, tools and experiments — built end to end, from wireframe to shipped interface."
                    className="mb-12 sm:mb-16"
                />

                {/* ─── Project grid ─── */}
                <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
                    <AnimatePresence mode="popLayout">
                        {projects.map((project, index) => {
                            const hasLinks = Boolean(project.links.github || project.links.live);
                            const t = toneStyle(project.color);

                            return (
                                <motion.article
                                    key={project.title}
                                    layout
                                    initial={{ opacity: 0, y: 44, scale: 0.96 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    viewport={{ once: true, margin: '-60px' }}
                                    transition={{ duration: 0.65, delay: (index % 3) * 0.09, ease: [0.16, 1, 0.3, 1] }}
                                    className="h-full"
                                >
                                    <Tilt
                                        tiltMaxAngleX={5}
                                        tiltMaxAngleY={5}
                                        scale={1.01}
                                        transitionSpeed={1800}
                                        glareEnable
                                        glareMaxOpacity={0.08}
                                        glareColor="#ffffff"
                                        glarePosition="all"
                                        glareBorderRadius="18px"
                                        tiltEnable={typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches}
                                        className="h-full"
                                    >
                                        <GlassCard glow className="group flex h-full flex-col p-0 hover:shadow-e3">
                                            {/* Aura that matches the project's accent colour */}
                                            <div
                                                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                                                style={{ background: `radial-gradient(120% 70% at 50% 0%, ${t.fg}14, transparent 65%)` }}
                                            />

                                            {/* ─── Cover ─── */}
                                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-card bg-surface-2">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    loading="lazy"
                                                    decoding="async"
                                                    className="h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                                                />
                                                {/* Gentle bottom scrim keeps the chip legible on busy screenshots */}
                                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent" />
                                                <div
                                                    className="pointer-events-none absolute inset-0 opacity-0 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-100"
                                                    style={{ background: `linear-gradient(140deg, ${t.fg}18, transparent 60%)` }}
                                                />
                                                {/* Hairline so the image sits inside the card, not on top of it */}
                                                <div className="pointer-events-none absolute inset-0 rounded-t-card ring-1 ring-inset ring-slate-900/[0.06]" />

                                                {/* Index chip */}
                                                <span className="badge-over-image absolute left-4 top-4 rounded-pill px-2.5 py-1 font-display text-[0.6875rem] font-bold tracking-[0.1em]">
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                            </div>

                                            {/* ─── Body ─── */}
                                            <div className="flex flex-1 flex-col p-5 sm:p-6">
                                                {/* Category kicker */}
                                                <span
                                                    className="mb-2.5 inline-flex items-center gap-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.12em]"
                                                    style={{ color: t.fg }}
                                                >
                                                    <span
                                                        className="h-1.5 w-1.5 rounded-full"
                                                        style={{ background: t.fg, boxShadow: `0 0 0 3px ${t.bg}` }}
                                                    />
                                                    {project.category}
                                                </span>

                                                <h3 className="line-clamp-2 font-display text-[1rem] font-bold leading-snug tracking-[-0.02em] text-ink transition-colors duration-300 group-hover:text-primary sm:text-[1.0625rem]">
                                                    {project.title}
                                                </h3>

                                                <p className="mt-2.5 line-clamp-3 text-[0.875rem] leading-relaxed text-muted">
                                                    {project.description}
                                                </p>

                                                {/* Tech badges */}
                                                <ul className="mt-auto flex flex-wrap gap-2 pt-5">
                                                    {project.tags.map((tag) => (
                                                        <li
                                                            key={tag}
                                                            className="cursor-default rounded-[9px] border border-border bg-surface px-2.5 py-1 text-[0.6875rem] font-medium text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary-tint hover:text-primary"
                                                        >
                                                            {tag}
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* Links render only for projects that actually have them —
                                                    no dead buttons on the ones that don't. */}
                                                {hasLinks && (
                                                    <div className="mt-5 flex items-center gap-2 border-t border-border pt-5">
                                                        {project.links.github && (
                                                            <a
                                                                href={project.links.github}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                aria-label={`${project.title} source on GitHub`}
                                                                className="inline-flex items-center gap-1.5 rounded-btn border border-border bg-white px-3 py-2 text-[0.75rem] font-semibold text-muted shadow-e1 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:text-ink"
                                                            >
                                                                <Github className="h-4 w-4" />
                                                                Code
                                                            </a>
                                                        )}
                                                        {project.links.live && (
                                                            <a
                                                                href={project.links.live}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                aria-label={`${project.title} live demo`}
                                                                className="inline-flex items-center gap-1.5 rounded-btn bg-gradient-to-b from-primary-soft to-primary px-3 py-2 text-[0.75rem] font-semibold text-white shadow-[0_8px_20px_-10px_rgba(37,99,235,0.8)] transition-all duration-300 hover:-translate-y-0.5"
                                                            >
                                                                <ExternalLink className="h-4 w-4" />
                                                                Live Demo
                                                            </a>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </GlassCard>
                                    </Tilt>
                                </motion.article>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
