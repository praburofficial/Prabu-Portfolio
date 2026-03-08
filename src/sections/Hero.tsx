import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { Github, Linkedin, ChevronDown } from 'lucide-react';
import { CircuitComputerIcon } from '../components/CircuitComputerIcon';
import { ResumeModal } from '../components/ResumeModal';
import { TypeAnimation } from 'react-type-animation';

export function Hero() {
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center pt-20 overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #050b18 0%, #0a1628 50%, #050b18 100%)' }}
        >
            {/* Ambient glow orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#7c3aed]/8 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* ─── Left Column: Text Content ─── */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    className="z-10"
                >
                    {/* Available badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-sm font-medium tracking-wide">Available for Work</span>
                    </motion.div>

                    {/* Glitch Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="text-5xl md:text-7xl font-bold leading-tight mb-2 relative"
                    >
                        <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-['Outfit'] drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                        >
                            PRABU R
                        </span>
                        <div className="absolute -left-10 top-0 w-32 h-32 bg-primary/20 blur-[100px] pointer-events-none rounded-full" />
                    </motion.h1>

                    {/* Typewriter Role Switcher */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="mb-6 h-10"
                    >
                        <span className="text-xl md:text-2xl font-semibold text-[#00d4ff]/90 font-['Outfit']">
                            <TypeAnimation
                                sequence={[
                                    'Frontend Developer',
                                    2000,
                                    'React.js Specialist',
                                    2000,
                                    'UI/UX Designer',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                cursor={true}
                                style={{ display: 'inline-block' }}
                            />
                        </span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.7 }}
                        className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg leading-relaxed"
                    >
                        Detail-oriented Computer Science Engineering student with strong expertise in
                        Frontend Development using React.js and Tailwind CSS. Passionate about combining
                        clean code with intuitive UI/UX design to solve real-world problems.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0, duration: 0.6 }}
                        className="flex flex-wrap items-center gap-4 mb-12"
                    >
                        <Button
                            variant="outline"
                            onClick={() => setIsResumeModalOpen(true)}
                            className="neon-btn"
                        >
                            View Resume
                        </Button>

                        <a
                            href="https://github.com/praburofficial"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 rounded-full border border-white/10 text-gray-400 hover:text-primary hover:border-primary/50 transition-all hover:scale-110 hover:-translate-y-1 block duration-300 shadow-[0_0_15px_transparent] hover:shadow-[0_0_15px_var(--color-primary)]"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/prabu-r12092005"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 rounded-full border border-white/10 text-gray-400 hover:text-secondary hover:border-secondary/50 transition-all hover:scale-110 hover:-translate-y-1 block duration-300 shadow-[0_0_15px_transparent] hover:shadow-[0_0_15px_var(--color-secondary)]"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </motion.div>
                </motion.div>

                {/* ─── Right Column: Circuit Computer Orb (Original Design) ─── */}
                <motion.div
                    className="relative lg:h-[600px] w-full flex items-center justify-center pointer-events-none"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* Spinning orbit rings */}
                    <div className="absolute inset-0 max-w-md mx-auto aspect-square rounded-full border-[0.5px] border-primary/20 bg-primary/5 blur-xl animate-[spin_20s_linear_infinite]" />
                    <div className="absolute inset-10 max-w-[15rem] mx-auto aspect-square rounded-full border-t-[3px] border-secondary/60 animate-[spin_10s_linear_infinite_reverse]" />
                    <div className="absolute inset-20 max-w-[10rem] mx-auto aspect-square rounded-full border-b-[3px] border-accent/60 animate-[spin_15s_linear_infinite]" />

                    {/* Purple orb with CircuitComputerIcon */}
                    <div className="relative w-48 h-48 md:w-64 md:h-64 bg-gradient-to-tr from-primary via-secondary to-background rounded-full animate-float shadow-[0_0_100px_var(--color-primary)] opacity-90 overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614729939124-032f0b5609ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')] bg-cover bg-center mix-blend-overlay opacity-50" />
                        <CircuitComputerIcon />
                    </div>
                </motion.div>
            </div>

            {/* ─── Bouncing Scroll-Down Indicator ─── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 z-20"
                style={{ animation: 'bounce-scroll 2s ease infinite' }}
            >
                <a
                    href="#about"
                    className="flex flex-col items-center gap-2 text-gray-500 hover:text-primary transition-colors duration-300 group"
                >
                    <span className="text-xs tracking-[0.2em] uppercase font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                        Scroll Down
                    </span>
                    <div className="w-8 h-12 rounded-full border-2 border-gray-600 group-hover:border-primary/60 flex justify-center pt-2 transition-colors duration-300">
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                            className="w-1.5 h-1.5 rounded-full bg-primary/80"
                        />
                    </div>
                    <ChevronDown className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
            </motion.div>

            <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
        </section>
    );
}
