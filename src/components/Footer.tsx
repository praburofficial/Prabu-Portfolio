import { useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const quickLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Journey', href: '/#journey' },
    { name: 'Certifications', href: '/#certifications' },
    { name: 'Contact', href: '/#contact' },
];

const socials = [
    { name: 'GitHub', href: 'https://github.com/praburofficial', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/prabu-r12092005', icon: Linkedin },
    { name: 'Email', href: 'mailto:prabur2k5@gmail.com', icon: Mail },
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
                style={{ background: 'radial-gradient(ellipse 50% 100% at 50% 0%, rgba(37,99,235,0.06), transparent 70%)' }}
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
                            <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-[14px] shadow-[0_6px_18px_-8px_rgba(37,99,235,0.7)]">
                                <span
                                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                                    style={{ background: 'linear-gradient(140deg, #3b82f6, #4f46e5 55%, #7c3aed)' }}
                                />
                                <span className="relative font-display text-[15px] font-extrabold tracking-tight text-white">PR</span>
                            </span>
                            <span className="font-display text-xl font-bold tracking-[-0.02em] text-ink">
                                Prabu<span className="text-primary">.</span>
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
                                    className="grid h-11 w-11 place-items-center rounded-btn border border-border bg-white text-muted shadow-e1 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:text-primary"
                                >
                                    <social.icon className="h-[18px] w-[18px]" />
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
                                        <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
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
                                <a href="mailto:prabur2k5@gmail.com" className="break-all text-muted transition-colors hover:text-primary">
                                    prabur2k5@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919524815890" className="text-muted transition-colors hover:text-primary">
                                    +91 95248 15890
                                </a>
                            </li>
                            <li className="text-muted">Namakkal, Tamil Nadu</li>
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
                    <p className="text-center text-sm text-faint sm:text-left">
                        © {new Date().getFullYear()} PRABU. All rights reserved.
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
