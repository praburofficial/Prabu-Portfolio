import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export function Contact() {
    const contactItems = [
        { icon: Mail, label: 'Email', value: 'prabur2k5@gmail.com', href: 'mailto:prabur2k5@gmail.com', color: '#00d4ff' },
        { icon: Phone, label: 'Phone', value: '+91 95248 15890', href: 'tel:+919524815890', color: '#00FF9F' },
        { icon: MapPin, label: 'Location', value: 'Namakkal, Tamil Nadu', href: '', color: '#7c3aed' },
    ];

    return (
        <section id="contact" className="relative py-24 z-10">
            {/* Radial gradient spotlight */}
            <div className="absolute inset-0 pointer-events-none" style={{
                background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.06) 0%, transparent 60%)',
            }} />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Outfit'] relative inline-block">
                        <span className="text-white">Get In </span>
                        <span className="text-primary text-glow">Touch</span>
                        {/* Draw-in underline */}
                        <motion.div
                            className="absolute -bottom-2 left-0 h-1 bg-accent rounded-full shadow-[0_0_10px_var(--color-accent)]"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        />
                    </h2>
                </motion.div>

                {/* Contact Info Cards — 3 Column Grid */}
                <div className="flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
                    >
                        {contactItems.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <GlassCard
                                    glow
                                    className="p-6 group hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full flex flex-col items-center text-center"
                                >
                                    {item.href ? (
                                        <a href={item.href} className="flex flex-col items-center gap-4 w-full">
                                            <div
                                                className="w-16 h-16 rounded-xl bg-[#050b18] border border-[rgba(0,212,255,0.15)] flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] mb-2"
                                            >
                                                <item.icon className="w-8 h-8 transition-colors duration-300" style={{ color: item.color }} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{item.label}</p>
                                                <p className="text-white font-medium text-sm md:text-base group-hover:text-primary transition-colors">{item.value}</p>
                                            </div>
                                        </a>
                                    ) : (
                                        <div className="flex flex-col items-center gap-4 w-full">
                                            <div className="w-16 h-16 rounded-xl bg-[#050b18] border border-[rgba(0,212,255,0.15)] flex items-center justify-center mb-2">
                                                <item.icon className="w-8 h-8" style={{ color: item.color }} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{item.label}</p>
                                                <p className="text-white font-medium text-sm md:text-base">{item.value}</p>
                                            </div>
                                        </div>
                                    )}
                                </GlassCard>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        className="flex gap-6 pt-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <a href="https://github.com/praburofficial" target="_blank" rel="noopener noreferrer"
                            className="p-4 bg-white/5 rounded-full border border-white/10 text-gray-400 hover:text-primary hover:border-primary/50 transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/prabu-r12092005" target="_blank" rel="noopener noreferrer"
                            className="p-4 bg-white/5 rounded-full border border-white/10 text-gray-400 hover:text-secondary hover:border-secondary/50 transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
