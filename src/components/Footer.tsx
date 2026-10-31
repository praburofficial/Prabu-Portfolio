import { useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUp, Home, User, Code2, Folder, Map, Award, Phone, MapPin, Activity } from 'lucide-react';
import { WhatsAppIcon } from './FloatingWhatsApp';

const quickLinks = [
    { name: 'Home', href: '/#home', icon: Home, color: 'text-sky-400' },
    { name: 'About', href: '/#about', icon: User, color: 'text-emerald-400' },
    { name: 'Skills', href: '/#skills', icon: Code2, color: 'text-purple-400' },
    { name: 'Projects', href: '/#projects', icon: Folder, color: 'text-amber-400' },
    { name: 'Journey', href: '/#journey', icon: Map, color: 'text-pink-400' },
    { name: 'Certifications', href: '/#certifications', icon: Award, color: 'text-yellow-400' },
    { name: 'Extracurricular', href: '/#extracurricular', icon: Activity, color: 'text-cyan-400' },
    { name: 'Contact', href: '/#contact', icon: Phone, color: 'text-rose-400' },
];

const socials = [
    { name: 'GitHub', href: 'https://github.com/praburofficial', icon: Github, hoverColor: 'hover:border-sky-400 hover:text-white hover:bg-sky-500/20', color: 'text-slate-300' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/prabu-r12092005', icon: Linkedin, hoverColor: 'hover:border-sky-400 hover:text-white hover:bg-sky-500/20', color: 'text-sky-400' },
    { name: 'Email', href: 'mailto:prabur2k5@gmail.com', icon: Mail, hoverColor: 'hover:border-rose-400 hover:text-white hover:bg-rose-500/20', color: 'text-rose-400' },
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
        <footer
            className="relative z-10 mt-12 overflow-hidden border-t border-sky-400/20 text-white"
            style={{
                backgroundColor: '#01040a',
                backgroundImage: `
                    linear-gradient(to right, rgba(1, 4, 10, 0.98) 0%, rgba(1, 4, 10, 0.88) 32%, rgba(1, 6, 18, 0.45) 54%, transparent 72%),
                    radial-gradient(ellipse 75% 65% at 88% 28%, rgba(0, 180, 255, 0.85) 0%, rgba(2, 132, 199, 0.55) 28%, rgba(3, 75, 160, 0.28) 55%, transparent 75%),
                    linear-gradient(220deg, rgba(0, 195, 255, 0.5) 0%, rgba(14, 165, 233, 0.25) 28%, transparent 58%),
                    linear-gradient(115deg, #01040a 0%, #020817 36%, #03183d 60%, #06326e 82%, #08489c 100%)
                `,
            }}
        >
            {/* Top hairline cyan/sky glow */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />

            {/* Ambient spotlight beam matching hero card */}
            <div
                className="pointer-events-none absolute -right-10 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 rounded-full blur-[110px] opacity-75"
                style={{ background: 'radial-gradient(circle, rgba(0, 185, 255, 0.5) 0%, rgba(14, 165, 233, 0.3) 38%, rgba(37, 99, 235, 0.15) 62%, transparent 75%)' }}
            />
            <div
                className="pointer-events-none absolute left-[-6%] top-0 h-[26rem] w-[26rem] rounded-full blur-[110px] opacity-25"
                style={{ background: 'radial-gradient(circle, rgba(56, 189, 248, 0.35), transparent 70%)' }}
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
                            {/* Profile image logo in place of old PR badge */}
                            <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-[14px] bg-slate-900 border border-sky-400/35 shadow-[0_4px_16px_-4px_rgba(0,180,255,0.5)] transition-transform duration-500 group-hover:scale-105">
                                <img
                                    src="/profile.jpg"
                                    alt="Prabu R"
                                    width={88}
                                    height={88}
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                            </span>
                            <span className="font-display text-xl font-bold tracking-[-0.02em] text-white">
                                Prabu R<span className="text-sky-400">.</span>
                            </span>
                        </a>

                        <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-300">
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
                                    className={`grid h-11 w-11 place-items-center rounded-btn border border-sky-400/20 bg-slate-900/60 shadow-e1 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${social.hoverColor}`}
                                >
                                    <social.icon className={`h-[18px] w-[18px] ${social.color}`} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ─── Quick links ─── */}
                    <nav aria-label="Footer">
                        <p className="font-mono text-xs font-semibold tracking-[0.2em] text-sky-400 uppercase">Navigate</p>
                        <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="group inline-flex items-center gap-2 text-sm text-slate-300 transition-colors duration-300 hover:text-white"
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
                        <p className="font-mono text-xs font-semibold tracking-[0.2em] text-sky-400 uppercase">Get in touch</p>
                        <ul className="mt-5 space-y-3 text-sm">
                            <li>
                                <a href="mailto:prabur2k5@gmail.com" className="group flex items-center gap-2 break-all text-slate-300 transition-colors hover:text-white">
                                    <Mail className="h-4 w-4 shrink-0 text-rose-400 transition-transform group-hover:scale-110" />
                                    prabur2k5@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919524815890" className="group flex items-center gap-2 text-slate-300 transition-colors hover:text-white">
                                    <Phone className="h-4 w-4 shrink-0 text-sky-400 transition-transform group-hover:scale-110" />
                                    +91 95248 15890
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/919524815890" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-slate-300 transition-colors hover:text-[#25D366]">
                                    <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#25D366] transition-transform group-hover:scale-110" />
                                    Message on WhatsApp
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-slate-400">
                                <MapPin className="h-4 w-4 shrink-0 text-purple-400" />
                                Namakkal, Tamil Nadu
                            </li>
                        </ul>

                        <a
                            href="/#contact"
                            onClick={(e) => handleNavClick(e, '/#contact')}
                            className="mt-6 inline-flex items-center gap-2 rounded-btn border border-sky-400/30 bg-sky-500/10 px-4 py-2.5 text-[0.8125rem] font-semibold text-white shadow-e1 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400 hover:bg-sky-500/20 hover:text-sky-300"
                        >
                            Start a conversation
                        </a>
                    </div>
                </div>

                {/* ─── Bottom bar ─── */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-sky-400/15 pt-7 sm:mt-14 sm:flex-row sm:pt-8">
                    <p className="text-center text-sm text-slate-400 sm:text-left flex flex-wrap gap-x-2 items-center justify-center sm:justify-start">
                        <span>© {new Date().getFullYear()} PRABU. All rights reserved.</span>
                        <span className="hidden sm:inline text-slate-600">•</span>
                        <a href="/copyrights" className="hover:text-sky-400 transition-colors underline decoration-slate-700 hover:decoration-sky-400">Copyrights Policy</a>
                    </p>

                    <button
                        type="button"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group inline-flex items-center gap-2 rounded-pill border border-sky-400/25 bg-slate-900/60 px-4 py-2 text-[0.8125rem] font-medium text-slate-300 shadow-e1 transition-all duration-300 hover:border-sky-400 hover:text-white hover:bg-sky-500/15"
                    >
                        Back to top
                        <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 text-sky-400" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
