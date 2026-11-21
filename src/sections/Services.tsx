import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { GlassCard } from '../components/GlassCard';
import { Reveal } from '../components/Reveal';
import { 
    Code, 
    Layers, 
    Globe, 
    Cpu, 
    TrendingUp, 
    GraduationCap, 
    CheckCircle2, 
    ExternalLink 
} from 'lucide-react';
import { toneStyle } from '../lib/palette';

const services = [
    {
        title: 'Custom Software Development',
        icon: Code,
        color: '#00d4ff',
        description: 'Developing business-specific software applications tailored precisely to unique operational requirements and enterprise workflows.',
        deliverables: ['Tailored business logic', 'Modular system architecture', 'Scalable codebases'],
    },
    {
        title: 'ERP & Management Systems',
        icon: Layers,
        color: '#7c3aed',
        description: 'Building robust management applications for educational institutions, HR workforce tracking, billing, inventory, and end-to-end business operations.',
        deliverables: ['Point of Sale (POS)', 'Inventory & barcode support', 'Multi-role user dashboards'],
    },
    {
        title: 'Web Application Development',
        icon: Globe,
        color: '#00FF9F',
        description: 'Engineering responsive, modern, and user-friendly web applications with ultra-fast page transitions and reliable cloud deployments.',
        deliverables: ['React & Tailwind UI', 'RESTful API integration', 'Cross-device accessibility'],
    },
    {
        title: 'Business Automation',
        icon: Cpu,
        color: '#ff2d78',
        description: 'Creating digital workflows and automated data pipelines to eliminate repetitive manual operations and minimize clerical errors.',
        deliverables: ['Automated invoices & billing', 'Digital reporting pipelines', 'Real-time notifications'],
    },
    {
        title: 'Digital Marketing',
        icon: TrendingUp,
        color: '#ec4899',
        description: 'Delivering data-driven digital marketing strategies, SEO optimization, social brand visibility campaigns, and online growth solutions for businesses.',
        deliverables: ['Search Engine Optimization (SEO)', 'Social Media & Brand Growth', 'Performance Marketing & Analytics'],
    },
    {
        title: 'EduTech Courses',
        icon: GraduationCap,
        color: '#f59e0b',
        description: 'Providing industry-oriented technology training, full stack development workshops, technical internships, and skill-building programs for students and developers.',
        deliverables: ['Full Stack & Web Development Training', 'Hands-on Projects & Mentorship', 'Institutional Workshops & Certification'],
    },
];

export function Services() {
    return (
        <section id="services" className="section-y relative z-10 overflow-hidden">
            <div className="shell">
                <SectionHeading
                    eyebrow="Services & Solutions"
                    title="Technology Solutions for"
                    highlight="Real-World Business Challenges"
                    description="I work on developing practical digital solutions that help businesses streamline operations, improve productivity and adopt modern technology."
                    className="mb-12 sm:mb-16"
                />

                {/* ─── Services Grid ─── */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => {
                        const t = toneStyle(service.color);
                        const Icon = service.icon;

                        return (
                            <Reveal key={service.title} delay={index * 0.08} className="h-full">
                                <GlassCard glow className="flex h-full flex-col p-6 sm:p-7">
                                    {/* Icon & Title */}
                                    <div className="flex items-center gap-3.5">
                                        <div
                                            className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border"
                                            style={{
                                                backgroundColor: t.bg,
                                                borderColor: t.ring,
                                                color: t.fg,
                                            }}
                                        >
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <h3 className="font-display text-base font-bold text-ink">
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <p className="mt-4 flex-1 text-xs leading-relaxed text-muted sm:text-[0.8125rem]">
                                        {service.description}
                                    </p>

                                    {/* Deliverables */}
                                    <ul className="mt-5 space-y-2 border-t border-border pt-4">
                                        {service.deliverables.map((item) => (
                                            <li key={item} className="flex items-center gap-2 text-xs text-muted">
                                                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </GlassCard>
                            </Reveal>
                        );
                    })}
                </div>

                {/* ─── Company Positioning Banner ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-12 rounded-3xl border border-sky-400/30 bg-gradient-to-br from-slate-900/95 via-[#031535]/90 to-slate-900/95 p-6 shadow-2xl backdrop-blur-xl sm:p-9"
                >
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:text-left text-center">
                        {/* Left Side: Logo + Details */}
                        <div className="flex flex-col items-center gap-5 sm:flex-row sm:text-left text-center">
                            <div className="relative grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-2xl border-2 border-sky-400/50 bg-white p-1 shadow-lg shadow-sky-500/20 sm:h-20 sm:w-20">
                                <img
                                    src="/Logo/CBT New Logo.jpeg"
                                    alt="Code Blaza Technology Logo"
                                    className="h-full w-full object-contain"
                                    onError={(e) => {
                                        const target = e.currentTarget;
                                        if (!target.dataset.fallback) {
                                            target.dataset.fallback = 'true';
                                            target.src = '/logo/logo.png';
                                        }
                                    }}
                                />
                            </div>
                            <div>
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/40 bg-sky-500/15 px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-wider text-sky-300">
                                    Code Blaza Technology &bull; Official Company Portal
                                </span>
                                <h4 className="mt-2 font-display text-lg font-bold text-white sm:text-xl">
                                    Software Development &bull; Digital Marketing &bull; EduTech Courses
                                </h4>
                                <p className="mt-1.5 max-w-xl text-xs leading-relaxed text-slate-300 sm:text-sm">
                                    For comprehensive enterprise software deployments, business automation packages, digital marketing solutions, and professional training programs.
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Bold, Highly Visible Visit Button */}
                        <div className="shrink-0">
                            <a
                                href="https://codeblazatechnology.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 px-7 py-3.5 text-xs font-bold uppercase tracking-wide text-white shadow-xl shadow-sky-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/50 active:scale-95 sm:text-sm"
                            >
                                <span className="relative z-10">Visit Code Blaza Technology</span>
                                <ExternalLink className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
