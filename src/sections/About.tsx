import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { useInView } from 'react-intersection-observer';

const education = [
    { degree: 'B.E. Computer Science', school: 'Gnanamani College of Technology', date: 'Expected: 2026', score: 'CGPA: 7.86', isCurrent: true },
    { degree: 'Higher Secondary (XII)', school: 'GHSS, Puduchatram', date: 'May 2022', score: 'Score: 73%', isCurrent: false },
    { degree: 'SSLC (X)', school: 'GHSS, Kalangani', date: 'Mar 2020', score: 'Score: 69%', isCurrent: false },
];

const experience = [
    { role: 'Frontend Developer Intern', company: 'Code Blaza Technology', date: 'Mar \'25 - Present' },
    { role: 'Frontend Developer Intern', company: 'Optimus Technocrates pvt ltd', date: 'Jul \'25 - Aug \'25' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function About() {
    const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section id="about" className="relative py-24 z-10">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Outfit']">
                        <span className="gradient-text">About</span> Me
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_var(--color-primary)]" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 items-stretch pt-4">
                    {/* The Journey Card — slides from left */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <GlassCard className="p-8 h-full flex flex-col hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all duration-500" glow>
                            <div className="flex flex-col gap-6 mb-6 items-center text-center">
                                {/* Profile Photo with conic-gradient spinning border */}
                                <div className="relative w-48 h-48 sm:w-56 sm:h-56 shrink-0 group" style={{ animation: 'float 3s ease-in-out infinite' }}>
                                    {/* Spinning conic gradient border */}
                                    <div
                                        className="absolute -inset-1 rounded-full"
                                        style={{
                                            background: 'conic-gradient(from 0deg, #00d4ff, #7c3aed, #ff2d78, #00d4ff)',
                                            animation: 'conic-spin 4s linear infinite',
                                        }}
                                    />
                                    <div className="absolute inset-[3px] rounded-full bg-[#050b18]" />
                                    <div className="absolute inset-[5px] rounded-full overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" />
                                        <img
                                            src="./Prabu.jpeg"
                                            alt="Prabu R Profile"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-3 font-['Outfit'] shimmer-text">The Journey</h3>
                                    <p className="text-sm text-gray-300 leading-relaxed mb-4">
                                        As a Computer Science and Engineering student at Gnanamani College of Technology, I'm deeply passionate about the intersection of design, technology, and user experience.
                                    </p>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        With a solid foundation in component-based UI architecture, responsive web design, and a deep love for Tailwind CSS and React.js, I continuously strive to bring static designs to life. My goal is to build products that are not just functional, but visually stunning and highly interactive.
                                    </p>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Experience & Education Card — slides from right */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <GlassCard glow className="p-8 h-full flex flex-col gap-8 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all duration-500">

                            {/* Education Section with draw-in timeline */}
                            <div ref={timelineRef}>
                                <h4 className="text-xl font-bold text-accent mb-6 font-['Outfit'] flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Education
                                </h4>

                                <motion.div
                                    className="space-y-6 relative"
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate={timelineInView ? "visible" : "hidden"}
                                >
                                    {/* Animated vertical line */}
                                    <div
                                        className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent/30 origin-top"
                                        style={{
                                            transform: timelineInView ? 'scaleY(1)' : 'scaleY(0)',
                                            transition: 'transform 1s ease-out',
                                        }}
                                    />

                                    {education.map((edu, i) => (
                                        <motion.div key={i} variants={itemVariants} className="pl-4 py-1 relative">
                                            {/* Glowing dot on current */}
                                            <div className={`absolute -left-[4px] top-2 w-2 h-2 rounded-full ${edu.isCurrent
                                                ? 'bg-accent shadow-[0_0_10px_var(--color-accent)] animate-pulse'
                                                : 'bg-accent/40'
                                                }`} />
                                            <h5 className="text-white font-semibold mb-1">{edu.degree}</h5>
                                            <div className="flex justify-between items-center mb-1">
                                                <p className="text-sm text-accent">{edu.school}</p>
                                                <span className="text-[10px] uppercase tracking-wider text-gray-500 bg-white/5 px-2 py-1 rounded">{edu.date}</span>
                                            </div>
                                            <p className="text-xs text-gray-400">{edu.score}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Experience Section */}
                            <div>
                                <h4 className="text-xl font-bold text-secondary mb-6 font-['Outfit'] flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" /> Experience
                                </h4>

                                <motion.div
                                    className="space-y-6"
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {experience.map((exp, i) => (
                                        <motion.div key={i} variants={itemVariants} className="border-l-2 border-secondary/30 pl-4 py-1">
                                            <h5 className="text-white font-semibold mb-1">{exp.role}</h5>
                                            <div className="flex justify-between items-center mb-1">
                                                <p className="text-sm text-secondary">{exp.company}</p>
                                                <span className="text-[10px] uppercase tracking-wider text-gray-500 bg-white/5 px-2 py-1 rounded">{exp.date}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>

                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
