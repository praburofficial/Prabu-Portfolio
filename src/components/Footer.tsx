import { useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUp, Home, User, Code2, Folder, Map, Award, Phone, MapPin, Activity } from 'lucide-react';
import { WhatsAppIcon } from './FloatingWhatsApp';

const quickLinks = [
    { name: 'Home', href: '/#home', icon: Home, color: 'text-blue-500' },
    { name: 'About', href: '/#about', icon: User, color: 'text-emerald-500' },
    { name: 'Skills', href: '/#skills', icon: Code2, color: 'text-purple-500' },
    { name: 'Projects', href: '/#projects', icon: Folder, color: 'text-orange-500' },
    { name: 'Journey', href: '/#journey', icon: Map, color: 'text-pink-500' },
    { name: 'Certifications', href: '/#certifications', icon: Award, color: 'text-yellow-500' },
    { name: 'Extracurricular', href: '/#extracurricular', icon: Activity, color: 'text-cyan-500' },
    { name: 'Contact', href: '/#contact', icon: Phone, color: 'text-red-500' },
];

const socials = [
    { name: 'GitHub', href: 'https://github.com/praburofficial', icon: Github, hoverColor: 'hover:border-slate-800 hover:text-slate-800', color: 'text-slate-700' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/prabu-r12092005', icon: Linkedin, hoverColor: 'hover:border-[#0077b5] hover:text-[#0077b5]', color: 'text-[#0077b5]' },
    { name: 'Email', href: 'mailto:prabur2k5@gmail.com', icon: Mail, hoverColor: 'hover:border-[#ea4335] hover:text-[#ea4335]', color: 'text-[#ea4335]' },
];

export function Footer() {
    const location = useLocation();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (location.pathname !== '/') return;
        const element = document.getElementById(href.replace('/#', ''));
        if (!element) return;
        e.preventDefault();
        window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="relative z-10 mt-8 overflow-hidden border-t border-border bg-surface/60">
            {/* Top hairline glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-64"
                style={{ background: 'radial-gradient(ellipse 50% 100% at 50% 0%, rgba(16,185,129,0.06), transparent 70%)' }}
            />

            <div className="shell relative py-12 sm:py-16">
                <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">

                    {/* ─── Brand ─── */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <a
                            href="/#home"
                            onClick={(e) => handleNavClick(e, '/#home')}
                            className="group inline-flex items-center gap-3"
                        >
                            <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-[14px] shadow-[0_6px_18px_-8px_rgba(16,185,129,0.7)]">
                                <span
                                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                                    style={{ background: 'linear-gradient(140deg, #10b981, #0d9488 55%, #65a30d)' }}
                                />
                                <span className="relative font-display text-[15px] font-extrabold tracking-tight text-white">PR</span>
                            </span>
                            <span className="font-display text-xl font-bold tracking-[-0.02em] text-ink">
                                Prabu R<span className="text-primary">.</span>
                            </span>
                        </a>

                        <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
                            Full Stack Developer &amp; UI/UX Designer building clean, responsive products with React.js,
                            Tailwind CSS, Python and FastAPI.
                        </p>

                        <div className="mt-6 flex gap-2.5">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target={social.href.startsWith('http') ? '_blank' : undefined}
                                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    aria-label={social.name}
                                    className={`grid h-11 w-11 place-items-center rounded-btn border border-border bg-white shadow-e1 transition-all duration-300 hover:-translate-y-1 ${social.hoverColor}`}
                                >
                                    <social.icon className={`h-[18px] w-[18px] ${social.color}`} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ─── Quick links ─── */}
                    <nav aria-label="Footer">
                        <p className="eyebrow">Navigate</p>
                        <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="group inline-flex items-center gap-2 text-sm text-muted transition-colors duration-300 hover:text-ink"
                                    >
                                        <link.icon className={`h-4 w-4 ${link.color} transition-transform duration-300 group-hover:scale-110`} />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* ─── Contact ─── */}
                    <div>
                        <p className="eyebrow">Get in touch</p>
                        <ul className="mt-5 space-y-3 text-sm">
                            <li>
                                <a href="mailto:prabur2k5@gmail.com" className="group flex items-center gap-2 break-all text-muted transition-colors hover:text-[#ea4335]">
                                    <Mail className="h-4 w-4 shrink-0 text-[#ea4335] transition-transform group-hover:scale-110" />
                                    prabur2k5@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919524815890" className="group flex items-center gap-2 text-muted transition-colors hover:text-blue-500">
                                    <Phone className="h-4 w-4 shrink-0 text-blue-500 transition-transform group-hover:scale-110" />
                                    +91 95248 15890
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/919524815890" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-muted transition-colors hover:text-[#25D366]">
                                    <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#25D366] transition-transform group-hover:scale-110" />
                                    Message on WhatsApp
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-muted">
                                <MapPin className="h-4 w-4 shrink-0 text-purple-500" />
                                Namakkal, Tamil Nadu
                            </li>
                        </ul>

                        <a
                            href="/#contact"
                            onClick={(e) => handleNavClick(e, '/#contact')}
                            className="mt-6 inline-flex items-center gap-2 rounded-btn border border-border bg-white px-4 py-2.5 text-[0.8125rem] font-semibold text-ink shadow-e1 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                        >
                            Start a conversation
                        </a>
                    </div>
                </div>

                {/* ─── Bottom bar ─── */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-7 sm:mt-14 sm:flex-row sm:pt-8">
                    <p className="text-center text-sm text-faint sm:text-left flex flex-wrap gap-x-2 items-center justify-center sm:justify-start">
                        <span>© {new Date().getFullYear()} PRABU. All rights reserved.</span>
                        <span className="hidden sm:inline">•</span>
                        <a href="/copyrights" className="hover:text-primary transition-colors underline decoration-border hover:decoration-primary">Copyrights Policy</a>
                    </p>

                    <button
                        type="button"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group inline-flex items-center gap-2 rounded-pill border border-border bg-white px-4 py-2 text-[0.8125rem] font-medium text-muted shadow-e1 transition-all duration-300 hover:border-primary/40 hover:text-primary"
                    >
                        Back to top
                        <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
