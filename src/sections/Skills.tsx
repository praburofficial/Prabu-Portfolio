import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const skills = [
    { name: 'React.js', level: 90, color: '#00d4ff' },
    { name: 'Tailwind CSS', level: 95, color: '#7c3aed' },
    { name: 'JavaScript', level: 85, color: '#00FF9F' },
    { name: 'HTML5 / CSS3', level: 90, color: '#ff2d78' },
    { name: 'UI/UX Design', level: 85, color: '#00d4ff' },
    { name: 'PostgreSQL', level: 75, color: '#7c3aed' },
];

const badges = [
    { name: 'Wireframing', color: 'hover:border-pink-500 hover:text-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]', drift: 'drift-1' },
    { name: 'Prototyping', color: 'hover:border-purple-500 hover:text-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]', drift: 'drift-2' },
    { name: 'Responsive Design', color: 'hover:border-blue-500 hover:text-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]', drift: 'drift-3' },
    { name: 'Git / GitHub', color: 'hover:border-orange-500 hover:text-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]', drift: 'drift-1' },
    { name: 'Postman', color: 'hover:border-amber-500 hover:text-amber-500 hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]', drift: 'drift-2' },
    { name: 'API Integration', color: 'hover:border-emerald-500 hover:text-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]', drift: 'drift-3' },
    { name: 'PostgreSQL', color: 'hover:border-cyan-500 hover:text-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]', drift: 'drift-1' },
];

const driftDurations: Record<string, string> = {
    'drift-1': '2s',
    'drift-2': '2.5s',
    'drift-3': '3s',
};

function SkillDial({ skill, index }: { skill: typeof skills[0]; index: number }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col items-center gap-4 group"
        >
            <div className="w-32 h-32 md:w-36 md:h-36 relative transition-transform duration-300 group-hover:scale-110">
                <CircularProgressbar
                    value={inView ? skill.level : 0}
                    text=""
                    styles={buildStyles({
                        pathColor: skill.color,
                        trailColor: 'rgba(255,255,255,0.05)',
                        pathTransitionDuration: 1.5,
                    })}
                    strokeWidth={6}
                />
                {/* Percentage inside */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold font-['Outfit']" style={{ color: skill.color }}>
                        {inView ? <CountUp end={skill.level} duration={1.5} suffix="%" /> : '0%'}
                    </span>
                </div>
                {/* Glow effect */}
                <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ boxShadow: `0 0 25px ${skill.color}40` }}
                />
            </div>
            <span className="text-sm font-semibold text-gray-300 tracking-wide group-hover:text-white transition-colors">
                {skill.name}
            </span>
        </motion.div>
    );
}

/* Section title letter-by-letter reveal */
const titleText = "My Skills";
const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.05, duration: 0.4 },
    }),
};

export function Skills() {
    return (
        <section id="skills" className="relative py-24 z-10">
            {/* Circuit grid background */}
            <div className="absolute inset-0 circuit-bg pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Letter-by-letter title */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Outfit']">
                        {titleText.split('').map((char, i) => (
                            <motion.span
                                key={i}
                                custom={i}
                                variants={letterVariants}
                                className={char === 'S' || char === 'k' || char === 'i' || char === 'l' || char === 's'
                                    ? 'gradient-text'
                                    : ''}
                                style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : undefined }}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </motion.span>
                        ))}
                    </h2>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full shadow-[0_0_10px_var(--color-secondary)]" />
                </motion.div>

                {/* Circular Skill Dials — 3-column grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 max-w-3xl mx-auto mb-16">
                    {skills.map((skill, index) => (
                        <SkillDial key={skill.name} skill={skill} index={index} />
                    ))}
                </div>

                {/* Skill Badges */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {badges.map((badge) => (
                        <motion.div
                            key={badge.name}
                            whileHover={{ scale: 1.15, y: -5 }}
                            className={`px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-gray-300 transition-all cursor-default shadow-[0_0_15px_transparent] font-medium tracking-wide ${badge.color}`}
                            style={{ animation: `${badge.drift} ${driftDurations[badge.drift]} ease-in-out infinite` }}
                        >
                            {badge.name}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
