import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface SectionHeadingProps {
    /** Small uppercase kicker above the title. */
    eyebrow: string;
    /** Plain leading words of the title. */
    title: string;
    /** Trailing words rendered in the brand gradient. */
    highlight?: string;
    description?: string;
    align?: 'center' | 'left';
    className?: string;
}

const rise = {
    hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    }),
};

export function SectionHeading({
    eyebrow,
    title,
    highlight,
    description,
    align = 'center',
    className,
}: SectionHeadingProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className={cn(
                'relative flex flex-col',
                align === 'center' ? 'items-center text-center' : 'items-start text-left',
                className
            )}
        >
            {/* Eyebrow pill */}
            <motion.span
                custom={0}
                variants={rise}
                className="inline-flex items-center gap-2 rounded-pill border border-border bg-surface px-3.5 py-1.5"
            >
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_0_3px_rgba(37,99,235,0.14)]" />
                <span className="eyebrow text-muted">{eyebrow}</span>
            </motion.span>

            {/* Title */}
            <motion.h2
                custom={1}
                variants={rise}
                className="mt-5 text-[clamp(1.875rem,4.6vw,3.5rem)] font-bold leading-[1.06] tracking-[-0.035em] sm:mt-6"
            >
                <span className="text-gradient">{title}</span>
                {highlight && <> <span className="text-gradient-brand">{highlight}</span></>}
            </motion.h2>

            {description && (
                <motion.p
                    custom={2}
                    variants={rise}
                    className={cn(
                        'mt-4 max-w-[60ch] text-[0.9375rem] leading-relaxed text-muted sm:mt-5 sm:text-lg',
                        align === 'center' && 'mx-auto'
                    )}
                >
                    {description}
                </motion.p>
            )}

            {/* Hairline rule */}
            <motion.div
                custom={3}
                variants={rise}
                className={cn('mt-7 h-px w-full max-w-[420px] sm:mt-8', align === 'left' && 'max-w-[220px]')}
                style={{
                    background:
                        align === 'center'
                            ? 'linear-gradient(90deg, transparent, rgba(37,99,235,0.45), rgba(124,58,237,0.35), transparent)'
                            : 'linear-gradient(90deg, rgba(37,99,235,0.55), transparent)',
                }}
            />
        </motion.div>
    );
}
