import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import Tilt from 'react-parallax-tilt';

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
        image: './cbt.jpeg',
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
        title: 'Snake Game-Web Application',
        description: 'A modern recreation of the classic retro snake arcade game, featuring smooth grid-based movement and dynamic score tracking.',
        image: './snake-game.jpeg',
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        links: { live: '', github: '' },
        color: '#00FF9F',
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
        <section id="projects" className="relative py-24 z-10">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Outfit'] relative inline-block">
                        Mission <span className="gradient-text">Logs</span>
                        {/* Animated underline */}
                        <motion.div
                            className="absolute -bottom-2 left-0 h-1 bg-primary rounded-full shadow-[0_0_10px_var(--color-primary)]"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        />
                    </h2>
                </motion.div>


                {/* Project Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Tilt
                                    tiltMaxAngleX={12}
                                    tiltMaxAngleY={12}
                                    glareEnable={true}
                                    glareMaxOpacity={0.2}
                                    glareColor="#00d4ff"
                                    glarePosition="all"
                                    className="h-full"
                                >
                                    <GlassCard
                                        glow
                                        className="h-full p-0 overflow-hidden group hover:-translate-y-2 transition-all duration-500"
                                        style={{
                                            borderTop: `2px solid`,
                                            borderImage: `linear-gradient(90deg, #00d4ff, #7c3aed) 1`,
                                        }}
                                    >
                                        {/* Image with hover overlay */}
                                        <div className="relative h-52 w-full overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#050b18] via-[#050b18]/40 to-transparent pointer-events-none" />
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors font-['Outfit'] line-clamp-2">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                                {project.description}
                                            </p>

                                            {/* Tech tags */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tags.map(tag => (
                                                    <span
                                                        key={tag}
                                                        className="text-xs font-semibold px-2.5 py-1 rounded bg-[#050b18] border border-[#00d4ff]/20 text-gray-300 hover:text-primary hover:border-primary/50 hover:shadow-[0_0_10px_rgba(0,212,255,0.2)] transition-all cursor-default"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>


                                        </div>

                                        {/* Hover glow */}
                                        <div
                                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                            style={{ boxShadow: `0 0 30px ${project.color}25` }}
                                        />
                                    </GlassCard>
                                </Tilt>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
