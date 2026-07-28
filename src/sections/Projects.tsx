import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { SectionHeading } from '../components/SectionHeading';
import Tilt from 'react-parallax-tilt';
import { Github, ExternalLink } from 'lucide-react';

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
        <section id="projects" className="relative z-10 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <SectionHeading
                    eyebrow="Selected Work"
                    title="Mission"
                    highlight="Logs"
                    description="Products, tools and experiments — built end to end, from wireframe to shipped interface."
                    className="mb-16"
                />

                {/* ─── Project grid ─── */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence mode="popLayout">
                        {projects.map((project, index) => {
                            const hasLinks = Boolean(project.links.github || project.links.live);

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
                                        tiltMaxAngleX={6}
                                        tiltMaxAngleY={6}
                                        scale={1.01}
                                        transitionSpeed={1800}
                                        glareEnable
                                        glareMaxOpacity={0.12}
                                        glareColor="#ffffff"
                                        glarePosition="all"
                                        glareBorderRadius="20px"
                                        className="h-full"
                                    >
                                        <GlassCard glow className="group flex h-full flex-col p-0">
                                            {/* Aura that matches the project's accent colour */}
                                            <div
                                                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                                                style={{ background: `radial-gradient(120% 70% at 50% 0%, ${project.color}22, transparent 65%)` }}
                                            />

                                            {/* ─── Cover ─── */}
                                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-card">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    loading="lazy"
                                                    decoding="async"
                                                    className="h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
                                                />
                                                {/* Scrim so the title always has contrast */}
                                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080a12] via-[#080a12]/25 to-transparent" />
                                                <div
                                                    className="pointer-events-none absolute inset-0 opacity-0 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-100"
                                                    style={{ background: `linear-gradient(140deg, ${project.color}55, transparent 60%)` }}
                                                />

                                                {/* Index chip — opaque so it survives bright screenshots */}
                                                <span className="badge-over-image absolute left-4 top-4 rounded-pill px-2.5 py-1 font-display text-[0.6875rem] font-bold tracking-[0.1em]">
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                            </div>

                                            {/* ─── Body ─── */}
                                            <div className="flex flex-1 flex-col p-6">
                                                {/* Category kicker */}
                                                <span
                                                    className="mb-2.5 inline-flex items-center gap-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.12em]"
                                                    style={{ color: project.color }}
                                                >
                                                    <span
                                                        className="h-1.5 w-1.5 rounded-full"
                                                        style={{ background: project.color, boxShadow: `0 0 10px ${project.color}` }}
                                                    />
                                                    {project.category}
                                                </span>

                                                <h3 className="line-clamp-2 font-display text-[1.0625rem] font-bold leading-snug tracking-[-0.02em] text-ink transition-colors duration-300 group-hover:text-primary">
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
                                                            className="cursor-default rounded-[9px] border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[0.6875rem] font-medium text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                                                        >
                                                            {tag}
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* Links render only for projects that actually have them —
                                                    no dead buttons on the ones that don't. */}
                                                {hasLinks && (
                                                    <div className="mt-5 flex items-center gap-2 border-t border-white/[0.07] pt-5">
                                                        {project.links.github && (
                                                            <a
                                                                href={project.links.github}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                aria-label={`${project.title} source on GitHub`}
                                                                className="inline-flex items-center gap-1.5 rounded-btn surface px-3 py-2 text-[0.75rem] font-semibold text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-ink"
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
                                                                className="inline-flex items-center gap-1.5 rounded-btn bg-gradient-to-b from-primary-soft to-primary px-3 py-2 text-[0.75rem] font-semibold text-[#04121a] transition-all duration-300 hover:-translate-y-0.5"
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
