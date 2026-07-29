import { useMemo } from 'react';
import { cn } from '../lib/utils';

interface ParticleBackgroundProps {
    className?: string;
}

/**
 * Ambient page backdrop for the light canvas: a pale aurora mesh, a masked
 * precision grid, a whisper of grain and a sparse field of drifting motes.
 *
 * Everything is composited by the GPU (transform/opacity only) so it costs
 * far less than a per-frame canvas simulation and stays silky on mobile.
 */
export function ParticleBackground({ className }: ParticleBackgroundProps) {
    // Stable positions — generated once, never re-randomised across renders.
    const motes = useMemo(
        () =>
            Array.from({ length: 22 }).map((_, i) => ({
                left: `${(i * 37.6) % 100}%`,
                top: `${(i * 61.3) % 100}%`,
                size: i % 5 === 0 ? 3 : 2,
                duration: `${9 + (i % 7) * 1.6}s`,
                delay: `${(i % 9) * 0.7}s`,
                opacity: 0.10 + (i % 4) * 0.05,
                hue: i % 3 === 0 ? '#7c3aed' : i % 3 === 1 ? '#2563eb' : '#059669',
            })),
        []
    );

    return (
        <div className={cn('fixed inset-0 z-0 overflow-hidden pointer-events-none', className)} aria-hidden="true">
            {/* Base wash */}
            <div className="absolute inset-0 bg-background" />

            {/* ─── Aurora mesh — pale, high-key, never muddies the type ─── */}
            <div className="absolute inset-0">
                <div
                    className="absolute -top-[20%] -left-[10%] h-[70vmax] w-[70vmax] rounded-full blur-[130px] animate-drift gpu"
                    style={{ background: 'radial-gradient(circle at 30% 30%, rgba(37,99,235,0.13), transparent 62%)' }}
                />
                <div
                    className="absolute top-[8%] right-[-15%] h-[65vmax] w-[65vmax] rounded-full blur-[140px] animate-drift-alt gpu"
                    style={{ background: 'radial-gradient(circle at 60% 40%, rgba(124,58,237,0.12), transparent 62%)' }}
                />
                <div
                    className="absolute bottom-[-25%] left-[18%] h-[60vmax] w-[60vmax] rounded-full blur-[150px] animate-drift gpu"
                    style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(5,150,105,0.09), transparent 62%)',
                        animationDelay: '-8s',
                    }}
                />
                <div
                    className="absolute bottom-[5%] right-[8%] h-[45vmax] w-[45vmax] rounded-full blur-[130px] animate-drift-alt gpu"
                    style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(79,70,229,0.10), transparent 62%)',
                        animationDelay: '-14s',
                    }}
                />
            </div>

            {/* ─── Masked precision grid ─── */}
            <div className="absolute inset-0 grid-lines mask-radial opacity-60" />

            {/* ─── Drifting motes ─── */}
            {motes.map((m, i) => (
                <span
                    key={i}
                    className="absolute rounded-full animate-float gpu"
                    style={{
                        left: m.left,
                        top: m.top,
                        width: m.size,
                        height: m.size,
                        background: m.hue,
                        opacity: m.opacity,
                        animationDuration: m.duration,
                        animationDelay: m.delay,
                    }}
                />
            ))}

            {/* ─── Film grain ─── */}
            <div className="absolute inset-0 noise opacity-[0.018] mix-blend-multiply" />

            {/* ─── Soft top-light so the page has a light source ─── */}
            <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 28%, rgba(248,250,252,0.55) 100%)' }}
            />
        </div>
    );
}
