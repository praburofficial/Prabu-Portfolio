import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { name: 'Home', href: '/#home', isHash: true },
    { name: 'About', href: '/#about', isHash: true },
    { name: 'Skills', href: '/#skills', isHash: true },
    { name: 'Projects', href: '/#projects', isHash: true },
    { name: 'Journey', href: '/#journey', isHash: true },
    { name: 'Certifications', href: '/#certifications', isHash: true },
    { name: 'Contact', href: '/#contact', isHash: true },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();

    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            if (location.pathname === '/') {
                const sectionIds = navLinks.filter(link => link.isHash).map(link => link.href.replace('/#', ''));
                const scrollPosition = window.scrollY + window.innerHeight / 3;

                for (let i = sectionIds.length - 1; i >= 0; i--) {
                    const section = document.getElementById(sectionIds[i]);
                    if (section) {
                        const sectionTop = section.offsetTop;
                        if (sectionTop <= scrollPosition) {
                            setActiveSection(sectionIds[i]);
                            break;
                        }
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    // Lock body scroll while the mobile sheet is open
    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (location.pathname === '/') {
            const targetId = href.replace('/#', '');
            const element = document.getElementById(targetId);
            if (element) {
                e.preventDefault();
                const headerOffset = 80; // 80px for the h-20 header
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
        setMobileMenuOpen(false);
    };

    const isLinkActive = (link: (typeof navLinks)[number]) =>
        link.isHash
            ? location.pathname === '/' && activeSection === link.href.replace('/#', '')
            : location.pathname === link.href;

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            {/* Reading-progress hairline */}
            <motion.div
                className="absolute inset-x-0 top-0 h-[2px] origin-left"
                style={{
                    scaleX: progress,
                    background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary), var(--color-hotpink))',
                }}
            />

            <div
                className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled
                    ? 'border-b border-white/[0.07] bg-background/60 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_32px_-16px_rgba(0,0,0,0.9)]'
                    : 'border-b border-transparent bg-transparent'
                    }`}
            >
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
                    {/* ─── Wordmark ─── */}
                    <a
                        href="/#home"
                        onClick={(e) => handleNavClick(e, '/#home')}
                        className="group flex shrink-0 items-center gap-3"
                        aria-label="Prabu — back to top"
                    >
                        <span className="relative grid h-10 w-10 place-items-center rounded-[13px] surface-strong overflow-hidden">
                            <span
                                className="absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                                style={{ background: 'linear-gradient(140deg, rgba(34,211,238,0.35), rgba(139,92,246,0.28))' }}
                            />
                            <span className="relative font-display text-[15px] font-extrabold tracking-tight text-white">PR</span>
                        </span>
                        <span className="hidden font-display text-lg font-bold tracking-[-0.02em] text-ink sm:block">
                            Prabu<span className="text-primary">.</span>
                        </span>
                    </a>

                    {/* ─── Desktop pill nav ─── */}
                    <nav
                        aria-label="Primary"
                        className="hidden items-center gap-1 rounded-pill surface px-2 py-1.5 lg:flex"
                    >
                        {navLinks.map((link) => {
                            const isActive = isLinkActive(link);
                            const content = (
                                <>
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-pill"
                                            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                                            className="absolute inset-0 rounded-pill bg-white/[0.09] shadow-[0_0_0_1px_rgba(255,255,255,0.09),0_4px_14px_-6px_rgba(34,211,238,0.55)]"
                                        />
                                    )}
                                    <span className="relative z-10">{link.name}</span>
                                </>
                            );

                            const cls = `relative rounded-pill px-3.5 py-2 text-[0.8125rem] font-medium transition-colors duration-300 ${isActive ? 'text-ink' : 'text-muted hover:text-ink'
                                }`;

                            return link.isHash ? (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={cls}
                                >
                                    {content}
                                </a>
                            ) : (
                                <Link key={link.name} to={link.href} aria-current={isActive ? 'page' : undefined} className={cls}>
                                    {content}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-3">
                        {/* ─── Desktop CTA ─── */}
                        <a
                            href="/#contact"
                            onClick={(e) => handleNavClick(e, '/#contact')}
                            className="group hidden items-center gap-1.5 rounded-btn bg-gradient-to-b from-primary-soft to-primary px-4 py-2.5 text-[0.8125rem] font-semibold text-[#04121a] shadow-[0_1px_0_rgba(255,255,255,0.45)_inset,0_8px_24px_-10px_rgba(34,211,238,0.8)] transition-all duration-300 hover:shadow-[0_1px_0_rgba(255,255,255,0.55)_inset,0_14px_34px_-12px_rgba(34,211,238,0.95)] sm:inline-flex"
                        >
                            Let's talk
                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>

                        {/* ─── Mobile trigger ─── */}
                        <button
                            className="grid h-11 w-11 place-items-center rounded-[13px] surface text-ink transition-colors hover:bg-white/[0.08] lg:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-expanded={mobileMenuOpen}
                            aria-controls="mobile-nav"
                            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.span
                                    key={mobileMenuOpen ? 'close' : 'open'}
                                    initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                    exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                                    transition={{ duration: 0.2 }}
                                    className="grid place-items-center"
                                >
                                    {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                                </motion.span>
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </div>

            {/* ─── Mobile sheet ─── */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 top-20 -z-10 bg-background/80 backdrop-blur-xl lg:hidden"
                        />
                        <motion.nav
                            id="mobile-nav"
                            aria-label="Mobile"
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                            className="mx-4 mt-3 overflow-hidden rounded-panel surface-strong p-3 lg:hidden"
                        >
                            <div className="flex flex-col">
                                {navLinks.map((link, i) => {
                                    const isActive = isLinkActive(link);
                                    const cls = `flex items-center justify-between rounded-btn px-4 py-3.5 text-base font-medium transition-colors ${isActive ? 'bg-white/[0.07] text-primary' : 'text-muted hover:bg-white/[0.05] hover:text-ink'
                                        }`;
                                    const inner = (
                                        <>
                                            <span>{link.name}</span>
                                            <ArrowUpRight className="h-4 w-4 opacity-40" />
                                        </>
                                    );

                                    return (
                                        <motion.div
                                            key={link.name}
                                            initial={{ opacity: 0, x: -12 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.04 * i, duration: 0.3 }}
                                        >
                                            {link.isHash ? (
                                                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className={cls}>
                                                    {inner}
                                                </a>
                                            ) : (
                                                <Link to={link.href} onClick={() => setMobileMenuOpen(false)} className={cls}>
                                                    {inner}
                                                </Link>
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </div>

                            <a
                                href="/#contact"
                                onClick={(e) => handleNavClick(e, '/#contact')}
                                className="mt-3 flex items-center justify-center gap-2 rounded-btn bg-gradient-to-b from-primary-soft to-primary px-5 py-3.5 font-semibold text-[#04121a]"
                            >
                                Let's talk
                                <ArrowUpRight className="h-4 w-4" />
                            </a>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
