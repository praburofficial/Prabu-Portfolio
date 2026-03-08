import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

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

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 pb-20 sm:pb-6"
                    data-lenis-prevent="true"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-md overscroll-none"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-4xl h-[90vh] sm:h-[85vh] flex flex-col z-10 overflow-hidden border border-primary/20 bg-background/95 rounded-2xl shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                        {/* Header Fixed */}
                        <div className="flex justify-between items-start p-4 sm:p-6 border-b border-white/10 shrink-0 relative z-10">
                            <div>
                                <h2 className="text-3xl font-bold font-['Outfit'] text-white">PRABU R <span className="text-primary text-xl font-normal">- Frontend Developer</span></h2>
                                <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 text-sm text-gray-400">
                                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-secondary" /> Namakkal, Tamil Nadu</span>
                                    <span className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-secondary" /> prabur2k5@gmail.com</span>
                                    <span className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-secondary" /> +91 95248 15890</span>
                                </div>
                                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 text-sm">
                                    <a href="https://www.linkedin.com/in/prabu-r12092005" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-primary hover:text-white transition-colors">
                                        <Linkedin className="w-4 h-4" /> linkedin.com/in/prabu-r12092005
                                    </a>
                                    <a href="https://github.com/praburofficial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-primary hover:text-white transition-colors">
                                        <Github className="w-4 h-4" /> github.com/praburofficial
                                    </a>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors border border-white/10"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="p-4 sm:p-6 overflow-y-auto overscroll-contain min-h-0 flex-grow space-y-8 text-gray-300 custom-scrollbar relative z-10">

                            {/* Summary */}
                            <section>
                                <h3 className="text-lg font-bold text-accent font-['Outfit'] uppercase tracking-wider mb-2 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Professional Summary
                                </h3>
                                <p className="text-sm leading-relaxed">
                                    Detail-oriented Computer Science Engineering student with strong expertise in Frontend Development using React.js and Tailwind CSS. Proven experience in building responsive, scalable web applications through internships and live institutional projects. Passionate about combining clean code with intuitive UI/UX design to solve real-world problems.
                                </p>
                            </section>

                            {/* Skills */}
                            <section>
                                <h3 className="text-lg font-bold text-primary font-['Outfit'] uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Technical Skills
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className="font-semibold text-white">Frontend Development:</span>
                                        <p className="mt-1 text-gray-400">React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Design.</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-white">UI/UX Design:</span>
                                        <p className="mt-1 text-gray-400">Wireframing, Prototyping, User Experience Design.</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-white">Backend & Database:</span>
                                        <p className="mt-1 text-gray-400">PostgreSQL, Basic API Integration.</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-white">Tools & Version Control:</span>
                                        <p className="mt-1 text-gray-400">Git, GitHub, VS Code, Postman.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Experience */}
                            <section>
                                <h3 className="text-lg font-bold text-secondary font-['Outfit'] uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" /> Professional Experience
                                </h3>
                                <div className="space-y-4">
                                    <div className="border-l-2 border-secondary/30 pl-4 py-1">
                                        <div className="flex justify-between items-start mb-1 flex-col sm:flex-row sm:items-center">
                                            <h4 className="font-bold text-white">Frontend Developer Intern <span className="font-normal text-gray-400">| Optimus Technocrates Pvt Ltd, Salem</span></h4>
                                            <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">July, 2025 – August, 2025</span>
                                        </div>
                                        <ul className="list-disc list-outside ml-4 text-sm text-gray-400 space-y-1 mt-2">
                                            <li>Developed dynamic and responsive user interfaces using React.js, ensuring crossbrowser compatibility.</li>
                                            <li>Collaborated with the UI/UX team to translate wireframes into high-quality code, improving visual consistency.</li>
                                        </ul>
                                    </div>
                                    <div className="border-l-2 border-secondary/30 pl-4 py-1">
                                        <div className="flex justify-between items-start mb-1 flex-col sm:flex-row sm:items-center">
                                            <h4 className="font-bold text-white">Frontend Developer Intern <span className="font-normal text-gray-400">| Code Blaza Technology, Namakkal</span></h4>
                                            <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">March, 2025 – Till</span>
                                        </div>
                                        <ul className="list-disc list-outside ml-4 text-sm text-gray-400 space-y-1 mt-2">
                                            <li>Engineered modular frontend components using React.js and Tailwind CSS for various client projects.</li>
                                            <li>Enhanced accessibility and web responsiveness across multiple project modules.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Projects */}
                            <section>
                                <h3 className="text-lg font-bold text-accent font-['Outfit'] uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Key Projects
                                </h3>
                                <div className="space-y-4">
                                    <div className="border-l-2 border-accent/30 pl-4 py-1">
                                        <h4 className="font-bold text-white">Gnanamani Educational Institution ERP System (Ongoing)</h4>
                                        <p className="text-xs text-gray-400 mb-2 mt-1"><span className="text-primary border border-primary/20 bg-primary/5 px-2 py-0.5 rounded">Role: Frontend Developer & UI/UX Designer</span> <span className="border border-white/10 px-2 py-0.5 rounded opacity-70 ml-2">Stack: React.js, Tailwind CSS, PostgreSQL</span></p>
                                        <ul className="list-disc list-outside ml-4 text-sm text-gray-400 space-y-1 mt-2">
                                            <li>Developing a comprehensive Enterprise Resource Planning (ERP) system to manage data for thousands of students and staff.</li>
                                            <li>Designed and implemented intuitive dashboards for distinct modules: Admission, Gate Entry, Billing, Transport, and Hostel.</li>
                                            <li>Built role-based access control (RBAC) interfaces for Admin, Staff, and Student panels ensuring data security.</li>
                                        </ul>
                                    </div>
                                    <div className="border-l-2 border-accent/30 pl-4 py-1">
                                        <h4 className="font-bold text-white">Shri Aathav Textile Mills – Stock & Inventory</h4>
                                        <p className="text-xs text-gray-400 mb-2 mt-1"><span className="text-primary border border-primary/20 bg-primary/5 px-2 py-0.5 rounded">Role: Frontend Developer</span> <span className="border border-white/10 px-2 py-0.5 rounded opacity-70 ml-2">Stack: React.js, Tailwind CSS</span></p>
                                        <ul className="list-disc list-outside ml-4 text-sm text-gray-400 space-y-1 mt-2">
                                            <li>Architected a digital solution for tracking stock levels, reducing manual inventory errors.</li>
                                            <li>Created interactive data tables and forms for real-time product management and sales tracking.</li>
                                            <li>Focused on a minimalist UI design to ensure ease of use for non-technical staff.</li>
                                        </ul>
                                    </div>
                                    <div className="border-l-2 border-accent/30 pl-4 py-1">
                                        <h4 className="font-bold text-white">College Academic Attendance Management System</h4>
                                        <p className="text-xs text-gray-400 mb-2 mt-1"><span className="text-primary border border-primary/20 bg-primary/5 px-2 py-0.5 rounded">Role: Frontend Developer</span> <span className="border border-white/10 px-2 py-0.5 rounded opacity-70 ml-2">Stack: HTML, CSS3, JavaScript</span></p>
                                        <ul className="list-disc list-outside ml-4 text-sm text-gray-400 space-y-1 mt-2">
                                            <li>Built a digital attendance tracking system replacing manual logbooks.</li>
                                            <li>Implemented analytics dashboards for HODs and Class Advisors to visualize attendance trends daily and hourly.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Education */}
                            <section>
                                <h3 className="text-lg font-bold text-primary font-['Outfit'] uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Education
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-start flex-col sm:flex-row sm:items-center p-3 bg-white/5 border border-white/10 rounded-lg">
                                        <div>
                                            <h4 className="font-bold text-white text-sm">B.E. in Computer Science and Engineering</h4>
                                            <p className="text-sm text-gray-400">Gnanamani College of Technology, Namakkal</p>
                                        </div>
                                        <div className="text-right mt-2 sm:mt-0">
                                            <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded whitespace-nowrap">Expected: May 2026</span>
                                            <p className="text-sm font-semibold text-white mt-1">CGPA: 7.86</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-start flex-col sm:flex-row sm:items-center p-3 bg-white/5 border border-white/10 rounded-lg">
                                        <div>
                                            <h4 className="font-bold text-white text-sm">Higher Secondary (HSC) - XII</h4>
                                            <p className="text-sm text-gray-400">GHSS, Puduchatram</p>
                                        </div>
                                        <div className="text-right mt-2 sm:mt-0">
                                            <span className="text-xs text-secondary bg-secondary/10 px-2 py-1 rounded whitespace-nowrap">May 2022</span>
                                            <p className="text-sm font-semibold text-white mt-1">73%</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-start flex-col sm:flex-row sm:items-center p-3 bg-white/5 border border-white/10 rounded-lg">
                                        <div>
                                            <h4 className="font-bold text-white text-sm">Secondary (SSLC) - X</h4>
                                            <p className="text-sm text-gray-400">GHSS, Kalangani</p>
                                        </div>
                                        <div className="text-right mt-2 sm:mt-0">
                                            <span className="text-xs text-secondary bg-secondary/10 px-2 py-1 rounded whitespace-nowrap">March 2020</span>
                                            <p className="text-sm font-semibold text-white mt-1">69%</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Certifications */}
                                <section>
                                    <h3 className="text-lg font-bold text-secondary font-['Outfit'] uppercase tracking-wider mb-3 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" /> Certifications & Courses
                                    </h3>
                                    <ul className="list-disc list-outside ml-4 text-sm text-gray-400 space-y-2">
                                        <li><b>Advance Diploma in Python Programming</b> | Grade: A+ | CSC, Namakkal</li>
                                        <li><b>Online Course Complete in Simplilearn</b> | HTML, CSS, JavaScript</li>
                                        <li><b>Online Course Complete in Cybernaut</b> | Python</li>
                                    </ul>
                                </section>

                                {/* Languages */}
                                <section>
                                    <h3 className="text-lg font-bold text-accent font-['Outfit'] uppercase tracking-wider mb-3 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Languages
                                    </h3>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3">
                                            <div className="w-20 text-sm font-semibold text-white">English</div>
                                            <div className="flex-grow h-2 bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full bg-primary w-[80%] rounded-full shadow-[0_0_10px_var(--color-primary)]" />
                                            </div>
                                            <span className="text-xs text-gray-400 w-28 text-right">Professional</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-20 text-sm font-semibold text-white">Tamil</div>
                                            <div className="flex-grow h-2 bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full bg-secondary w-full rounded-full shadow-[0_0_10px_var(--color-secondary)]" />
                                            </div>
                                            <span className="text-xs text-gray-400 w-28 text-right">Native</span>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}
