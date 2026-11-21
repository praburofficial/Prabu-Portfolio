import { motion } from 'framer-motion';
import { GlassCard } from '../components/GlassCard';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from '../components/FloatingWhatsApp';
import { toneStyle } from '../lib/palette';

export function Contact() {
    const contactItems = [
        {
            icon: Mail,
            label: 'Email',
            color: '#00d4ff',
            links: [
                { text: 'prabur2k5@gmail.com', href: 'mailto:prabur2k5@gmail.com', badge: 'Primary' },
                { text: 'prabur2k5@outlook.com', href: 'mailto:prabur2k5@outlook.com', badge: 'Outlook' },
            ],
        },
        {
            icon: Phone,
            label: 'Phone & WhatsApp',
            color: '#00FF9F',
            links: [
                { text: '+91 95248 15890', href: 'tel:+919524815890', badge: 'Call' },
                { text: '+91 95248 15890', href: 'https://wa.me/919524815890', badge: 'WhatsApp', isWhatsApp: true },
            ],
        },
        {
            icon: MapPin,
            label: 'Address',
            color: '#7c3aed',
            links: [
                { text: 'Kalangani, Namakkal, Tamil Nadu', href: '', badge: 'Location' },
            ],
        },
    ];

    return (
        <section id="contact" className="section-y relative z-10">
            {/* Spotlight */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{ background: 'radial-gradient(ellipse 55% 45% at 50% 25%, rgba(37,99,235,0.07), transparent 70%)' }}
            />

            <div className="shell-narrow relative z-10">
                <SectionHeading
                    eyebrow="Contact & Collaboration"
                    title="Let's Build Something"
                    highlight="Meaningful Together"
                    description="Whether you are looking for a technology professional, exploring a software project or interested in collaboration, I would be happy to connect."
                    className="mb-12 sm:mb-16"
                />

                {/* ─── 3 Contact Pathways ─── */}
                <div className="mb-8 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/10 p-4 text-center">
                        <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-sky-400">01. Career Pathways</span>
                        <h4 className="mt-1 font-display text-sm font-bold text-ink">Career Opportunities</h4>
                        <p className="mt-1 text-[0.75rem] text-muted">For engineering recruiters &amp; hiring managers seeking senior technical talent.</p>
                    </div>
                    <div className="rounded-2xl border border-violet/30 bg-violet/10 p-4 text-center">
                        <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-violet">02. Software Solutions</span>
                        <h4 className="mt-1 font-display text-sm font-bold text-ink">Business Enquiries</h4>
                        <p className="mt-1 text-[0.75rem] text-muted">For enterprises exploring custom ERP, POS billing software, and web applications.</p>
                    </div>
                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                        <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-emerald-500">03. Alliances</span>
                        <h4 className="mt-1 font-display text-sm font-bold text-ink">Partnerships &amp; MOUs</h4>
                        <p className="mt-1 text-[0.75rem] text-muted">For startup founders, institutions, and technology partners.</p>
                    </div>
                </div>

                {/* ══════════ Contact details ══════════ */}
                <div className="grid gap-4 sm:grid-cols-3">
                    {contactItems.map((item, index) => {
                        const t = toneStyle(item.color);

                        return (
                            <Reveal key={item.label} delay={index * 0.08}>
                                <GlassCard glow className="group h-full p-5 sm:p-6 hover:-translate-y-1 transition-transform duration-300">
                                    <div className="flex h-full flex-col">
                                        <div className="flex items-center justify-between">
                                            <span
                                                className="grid h-12 w-12 place-items-center rounded-[15px] transition-transform duration-500 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-[17px]"
                                                style={{ background: t.bg, boxShadow: `inset 0 0 0 1px ${t.ring}` }}
                                            >
                                                <item.icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: t.fg }} />
                                            </span>
                                            <span className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-faint">
                                                {item.label}
                                            </span>
                                        </div>

                                        <div className="mt-5 flex flex-1 flex-col justify-center gap-2.5">
                                            {item.links.map((link, lIdx) => (
                                                link.href ? (
                                                    <a
                                                        key={lIdx}
                                                        href={link.href}
                                                        target={link.href.startsWith('http') ? '_blank' : undefined}
                                                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                        className="group/link flex items-center justify-between gap-2 rounded-lg border border-border/60 bg-surface/40 p-2.5 transition-all duration-200 hover:border-primary/40 hover:bg-white hover:shadow-e1"
                                                    >
                                                        <div className="flex flex-col min-w-0">
                                                            <span className="text-[0.625rem] font-semibold uppercase tracking-wider text-faint">
                                                                {link.badge}
                                                            </span>
                                                            <span className="truncate text-[0.8125rem] font-medium text-ink transition-colors duration-200 group-hover/link:text-primary sm:text-[0.875rem]">
                                                                {link.text}
                                                            </span>
                                                        </div>
                                                        <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-faint transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-primary" />
                                                    </a>
                                                ) : (
                                                    <div
                                                        key={lIdx}
                                                        className="flex flex-col rounded-lg border border-border/60 bg-surface/40 p-2.5"
                                                    >
                                                        <span className="text-[0.625rem] font-semibold uppercase tracking-wider text-faint">
                                                            {link.badge}
                                                        </span>
                                                        <span className="text-[0.8125rem] font-medium text-ink sm:text-[0.875rem]">
                                                            {link.text}
                                                        </span>
                                                    </div>
                                                )
                                            ))}
                                        </div>
                                    </div>
                                </GlassCard>
                            </Reveal>
                        );
                    })}
                </div>

                {/* ══════════ Call to action ══════════ */}
                <div className="mt-4">

                    {/* ─── The pitch ─── */}
                    <Reveal delay={0.12}>
                        <GlassCard glow className="relative flex h-full flex-col overflow-hidden p-6 sm:p-9">
                            {/* Availability */}
                            <span className="inline-flex w-fit items-center gap-2.5 rounded-pill border border-border bg-surface px-4 py-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-soft opacity-70" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent shadow-[0_0_0_3px_rgba(5,150,105,0.16)]" />
                                </span>
                                <span className="text-[0.8125rem] font-semibold text-ink">Available for Work</span>
                            </span>

                            <h3 className="mt-6 font-display text-[clamp(1.375rem,3.2vw,2rem)] font-bold leading-tight tracking-[-0.03em]">
                                <span className="text-gradient">Let's build something</span>{' '}
                                <span className="text-gradient-brand">worth shipping</span>
                            </h3>

                            <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-muted">
                                Open to full stack roles, freelance projects, and technology consulting. Drop me a line and I'll get back to you promptly.
                            </p>

                            <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
                                <a
                                    href="mailto:prabur2k5@gmail.com"
                                    className="group/cta inline-flex h-13 items-center gap-2.5 overflow-hidden rounded-btn bg-gradient-to-b from-primary-soft to-primary px-6 font-semibold text-white shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_12px_30px_-12px_rgba(37,99,235,0.85)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_1px_0_rgba(255,255,255,0.35)_inset,0_18px_40px_-14px_rgba(37,99,235,0.95)] sm:h-14 sm:px-8"
                                >
                                    <Mail className="h-[18px] w-[18px]" />
                                    Email me
                                </a>

                                <a
                                    href="https://wa.me/919524815890"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Message on WhatsApp"
                                    className="inline-flex h-13 items-center gap-2.5 rounded-btn border border-[#25D366]/40 bg-[#25D366]/10 px-6 font-semibold text-[#128C7E] shadow-e1 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white hover:shadow-e2 sm:h-14 sm:px-7"
                                >
                                    <WhatsAppIcon className="h-5 w-5" />
                                    WhatsApp
                                </a>

                                <a
                                    href="https://github.com/praburofficial"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub profile"
                                    className="grid h-13 w-13 place-items-center rounded-btn border border-border bg-white text-muted shadow-e1 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:text-primary sm:h-14 sm:w-14"
                                >
                                    <Github className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/prabu-r12092005"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn profile"
                                    className="grid h-13 w-13 place-items-center rounded-btn border border-border bg-white text-muted shadow-e1 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:text-secondary sm:h-14 sm:w-14"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </a>
                            </div>

                            {/* Decorative corner glows */}
                            <motion.div
                                aria-hidden="true"
                                className="pointer-events-none absolute -bottom-28 -right-20 h-64 w-64 rounded-full blur-3xl"
                                style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.18), transparent 70%)' }}
                                animate={{ opacity: [0.5, 0.9, 0.5] }}
                                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            <motion.div
                                aria-hidden="true"
                                className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full blur-3xl"
                                style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.16), transparent 70%)' }}
                                animate={{ opacity: [0.9, 0.5, 0.9] }}
                                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            />
                        </GlassCard>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
