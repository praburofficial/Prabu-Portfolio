import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';
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

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-[#050b18]/70 backdrop-blur-xl border-b border-[rgba(0,212,255,0.1)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <a href="/#home" className="flex items-center gap-2 group">
                    <Rocket className="w-8 h-8 text-primary transition-transform group-hover:animate-float group-hover:text-secondary" />
                    <span className="text-2xl font-bold font-['Outfit'] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                        PRABU
                    </span>
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = link.isHash
                            ? location.pathname === '/' && activeSection === link.href.replace('/#', '')
                            : location.pathname === link.href;

                        const linkClasses = `text-sm font-medium hover:text-primary transition-colors relative group ${isActive ? 'text-primary' : 'text-gray-300'}`;
                        const underlineClasses = `absolute -bottom-1 left-0 h-0.5 bg-primary transition-all group-hover:w-full group-hover:shadow-[0_0_10px_var(--color-primary)] ${isActive ? 'w-full shadow-[0_0_10px_var(--color-primary)]' : 'w-0'}`;

                        return link.isHash ? (
                            <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className={linkClasses}>
                                {link.name}
                                <span className={underlineClasses} />
                            </a>
                        ) : (
                            <Link key={link.name} to={link.href} className={linkClasses}>
                                {link.name}
                                <span className={underlineClasses} />
                            </Link>
                        );
                    })}
                </nav>

                <button
                    className="md:hidden text-gray-300 hover:text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-20 inset-x-0 bg-[#050b18]/95 backdrop-blur-xl border-b border-[rgba(0,212,255,0.1)]"
                    >
                        <nav className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => {
                                const isActive = link.isHash
                                    ? location.pathname === '/' && activeSection === link.href.replace('/#', '')
                                    : location.pathname === link.href;

                                const linkClasses = `text-lg font-medium hover:text-primary transition-colors ${isActive ? 'text-primary' : 'text-gray-300'}`;

                                return link.isHash ? (
                                    <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className={linkClasses}>
                                        {link.name}
                                    </a>
                                ) : (
                                    <Link key={link.name} to={link.href} onClick={() => setMobileMenuOpen(false)} className={linkClasses}>
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
