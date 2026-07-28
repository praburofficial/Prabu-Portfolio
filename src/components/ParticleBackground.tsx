import { useMemo } from 'react';
import { cn } from '../lib/utils';

interface ParticleBackgroundProps {
    className?: string;
}

/**
 * Ambient page backdrop: an aurora gradient mesh, a masked grid, fine film
 * grain and a sparse field of drifting motes.
 *
 * Everything is composited by the GPU (transform/opacity only) so it costs
 * far less than a per-frame canvas simulation and stays silky on mobile.
 */
export function ParticleBackground({ className }: ParticleBackgroundProps) {
    // Stable positions — generated once, never re-randomised across renders.
    const motes = useMemo(
        () =>
            Array.from({ length: 26 }).map((_, i) => ({
                left: `${(i * 37.6) % 100}%`,
                top: `${(i * 61.3) % 100}%`,
                size: i % 5 === 0 ? 2.5 : 1.5,
                duration: `${9 + (i % 7) * 1.6}s`,
                delay: `${(i % 9) * 0.7}s`,
                opacity: 0.15 + (i % 4) * 0.09,
            })),
        []
    );

    return (
        <div className={cn('fixed inset-0 z-0 overflow-hidden pointer-events-none', className)} aria-hidden="true">
            {/* Base wash */}
            <div className="absolute inset-0 bg-background" />

            {/* ─── Aurora mesh ─── */}
            <div className="absolute inset-0 opacity-[0.85]">
                <div
                    className="absolute -top-[20%] -left-[10%] h-[70vmax] w-[70vmax] rounded-full blur-[130px] animate-drift"
                    style={{ background: 'radial-gradient(circle at 30% 30%, rgba(34,211,238,0.20), transparent 62%)' }}
                />
                <div
                    className="absolute top-[10%] right-[-15%] h-[65vmax] w-[65vmax] rounded-full blur-[140px] animate-drift-alt"
                    style={{ background: 'radial-gradient(circle at 60% 40%, rgba(139,92,246,0.22), transparent 62%)' }}
                />
                <div
                    className="absolute bottom-[-25%] left-[20%] h-[60vmax] w-[60vmax] rounded-full blur-[150px] animate-drift"
                    style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(52,211,153,0.13), transparent 62%)',
                        animationDelay: '-8s',
                    }}
                />
                <div
                    className="absolute bottom-[5%] right-[10%] h-[45vmax] w-[45vmax] rounded-full blur-[130px] animate-drift-alt"
                    style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(244,114,182,0.10), transparent 62%)',
                        animationDelay: '-14s',
                    }}
                />
            </div>

            {/* ─── Masked precision grid ─── */}
            <div className="absolute inset-0 grid-lines mask-radial opacity-40" />

            {/* ─── Drifting motes ─── */}
            {motes.map((m, i) => (
                <span
                    key={i}
                    className="absolute rounded-full bg-white animate-float"
                    style={{
                        left: m.left,
                        top: m.top,
                        width: m.size,
                        height: m.size,
                        opacity: m.opacity,
                        animationDuration: m.duration,
                        animationDelay: m.delay,
                    }}
                />
            ))}

            {/* ─── Film grain ─── */}
            <div className="absolute inset-0 noise opacity-[0.035] mix-blend-overlay" />

            {/* ─── Vignette so content always wins the contrast fight ─── */}
            <div
                className="absolute inset-0"
                style={{ background: 'radial-gradient(ellipse 90% 70% at 50% 0%, transparent 40%, rgba(5,6,12,0.75) 100%)' }}
            />
        </div>
    );
}
