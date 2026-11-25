import { useEffect, useRef, useState, useCallback } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface JourneyEvent {
    year: string;
    title: string;
    organization: string;
    description: string;
    image: string;
    isActive?: boolean;
}

const baseYears = [
    '2023', '2023', '2023', '2024', '2024',
    '2024', '2025', '2025', '2025', '2025',
    '2025', '2025', '2025', '2025', '2025',
    '2025', '2025', '2025', '2025', '2025',
    '2026', '2026', '2026'
];

const events: JourneyEvent[] = [
    ...baseYears.map((year, i) => ({
        year,
        title: `Memory ${i + 1}`,
        organization: 'Journey Captured',
        description: 'Reflecting on the continuous milestones and unforgettable moments gathered along my path.',
        image: `/Journey/${i + 1}.webp`,
    })),
    {
        year: '2025',
        title: "1st Prize ALGONEXUS'25",
        organization: 'Student Achievement',
        description: 'Awarded 1st Prize for Short Film at ALGONEXUS 2025 symposium, Jayalakshmi Institute of Technology.',
        image: '/Journey/24.jpg',
    },
    {
        year: '2026',
        title: 'College ERP Presentation',
        organization: 'Gnanamani Institutions',
        description: 'Presenting Development of a Secure and Scalable College ERP with OCR Integration.',
        image: '/Journey/25.jpg',
    },
    {
        year: '2026',
        title: 'Project Team Leaders',
        organization: 'Gnanamani CSE',
        description: 'Final Year ERP Project Team standing together after successful demonstration.',
        image: '/Journey/26.jpg',
    },
    {
        year: '2026',
        title: 'Faculty & HOD Recognition',
        organization: 'Academic Excellence',
        description: 'Receiving recognition and award honors with college HOD and faculty members.',
        image: '/Journey/27.jpg',
    },
    {
        year: '2026',
        title: 'Developer Studio Team',
        organization: 'Tech & Creative Collaboration',
        description: 'Group photo with the development and creative studio team members.',
        image: '/Journey/28.jpg',
    },
    {
        year: '2026',
        title: 'Innovation & Team Synergy',
        organization: 'Journey Captured',
        description: 'Memorable milestone capturing collaboration and technological dedication.',
        image: '/Journey/29.jpeg',
    },
    {
        year: '2026',
        title: 'Code Blaza Technology',
        organization: 'Journey at CBT',
        description: 'Capturing moments and milestones at Code Blaza Technology.',
        image: '/Journey/30.jpeg',
    },
    {
        year: '2026',
        title: 'Professional Milestones',
        organization: 'Journey Captured',
        description: 'Continuing to build, create, and achieve higher benchmarks along the way.',
        image: '/Journey/31.jpeg',
        isActive: true,
    },
];

// Tripled events array to enable seamless infinite looping
const loopedEvents = [...events, ...events, ...events];

const CARD_WIDTH = 240; // Card width in pixels
const CARD_GAP = 60;    // Generous gap between cards so cards NEVER overlap when scaled
const STEP = CARD_WIDTH + CARD_GAP; // Total pitch per item (300px)
const SINGLE_SET_WIDTH = events.length * STEP;

export function Journey() {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const posRef = useRef(-SINGLE_SET_WIDTH);
    const isPausedRef = useRef(false);
    const [isPausedState, setIsPausedState] = useState(false);
    const [activeCenterEvent, setActiveCenterEvent] = useState<JourneyEvent>(events[events.length - 1]);
    const [activeFrameNum, setActiveFrameNum] = useState<number>(events.length);

    // Drag / Touch tracking
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const dragStartPosRef = useRef(0);
    const lastTimeRef = useRef<number | null>(null);

    // Continuous 60/120fps requestAnimationFrame loop for ultra-smooth centering & scaling
    useEffect(() => {
        let animationFrameId: number;

        const updatePositions = (now: number) => {
            if (lastTimeRef.current === null) {
                lastTimeRef.current = now;
            }
            const delta = Math.min(32, now - lastTimeRef.current);
            lastTimeRef.current = now;

            if (!isPausedRef.current && !isDraggingRef.current) {
                // Move smoothly at ~0.8px per 16ms frame
                posRef.current -= 0.8 * (delta / 16);
            }

            // Infinite seamless wrap-around
            if (posRef.current <= -SINGLE_SET_WIDTH * 2) {
                posRef.current += SINGLE_SET_WIDTH;
            } else if (posRef.current >= 0) {
                posRef.current -= SINGLE_SET_WIDTH;
            }

            // Translate track directly on GPU
            if (trackRef.current) {
                trackRef.current.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
            }

            // Calculate scale for each card based on distance to viewport center
            if (containerRef.current) {
                const containerRect = containerRef.current.getBoundingClientRect();
                const viewportCenter = containerRect.left + containerRect.width / 2;
                const threshold = STEP * 0.95; // Focus threshold

                let closestDist = Infinity;
                let closestIndex = 0;

                cardRefs.current.forEach((cardEl, idx) => {
                    if (!cardEl) return;

                    // Absolute center of card in viewport coordinates
                    const cardCenter = containerRect.left + posRef.current + (idx * STEP) + (CARD_WIDTH / 2);
                    const dist = Math.abs(cardCenter - viewportCenter);

                    if (dist < closestDist) {
                        closestDist = dist;
                        closestIndex = idx;
                    }

                    if (dist < threshold) {
                        // Smooth cosine interpolation from 0.88 at edge to 1.20 at exact center (zero overlap with 60px gap)
                        const norm = dist / threshold;
                        const factor = Math.cos(norm * (Math.PI / 2));
                        const scale = 0.88 + 0.32 * factor;
                        const opacity = 0.65 + 0.35 * factor;
                        const zIndex = Math.round(factor * 25) + 1;

                        cardEl.style.transform = `scale(${scale.toFixed(3)})`;
                        cardEl.style.opacity = `${opacity.toFixed(2)}`;
                        cardEl.style.zIndex = `${zIndex}`;

                        // Add glow ring if in center focus
                        const innerBox = cardEl.firstElementChild as HTMLElement;
                        if (innerBox) {
                            if (factor > 0.55) {
                                innerBox.style.borderColor = 'rgba(16, 185, 129, 0.7)';
                                innerBox.style.boxShadow = '0 16px 36px -10px rgba(16, 185, 129, 0.35), 0 0 0 2px rgba(16, 185, 129, 0.3)';
                            } else {
                                innerBox.style.borderColor = 'rgba(226, 232, 240, 0.9)';
                                innerBox.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.05)';
                            }
                        }
                    } else {
                        cardEl.style.transform = 'scale(0.88)';
                        cardEl.style.opacity = '0.65';
                        cardEl.style.zIndex = '1';

                        const innerBox = cardEl.firstElementChild as HTMLElement;
                        if (innerBox) {
                            innerBox.style.borderColor = 'rgba(226, 232, 240, 0.9)';
                            innerBox.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.05)';
                        }
                    }
                });

                // Update active center card details if changed
                const originalIndex = closestIndex % events.length;
                if (closestDist < STEP * 0.6) {
                    setActiveCenterEvent((prev) => (prev !== events[originalIndex] ? events[originalIndex] : prev));
                    setActiveFrameNum(originalIndex + 1);
                }
            }

            animationFrameId = requestAnimationFrame(updatePositions);
        };

        animationFrameId = requestAnimationFrame(updatePositions);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    // Manual navigation controls
    const scrollStep = useCallback((direction: 'next' | 'prev') => {
        const delta = direction === 'next' ? -STEP : STEP;
        posRef.current += delta;
    }, []);

    // Toggle pause / play
    const togglePause = () => {
        const next = !isPausedRef.current;
        isPausedRef.current = next;
        setIsPausedState(next);
    };

    // Drag / Touch Handlers
    const handlePointerDown = (e: React.PointerEvent) => {
        isDraggingRef.current = true;
        startXRef.current = e.clientX;
        dragStartPosRef.current = posRef.current;
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDraggingRef.current) return;
        const delta = e.clientX - startXRef.current;
        posRef.current = dragStartPosRef.current + delta;
    };

    const handlePointerUp = () => {
        isDraggingRef.current = false;
    };

    return (
        <section id="journey" className="section-y relative z-10 w-full overflow-hidden">
            <div className="shell">
                <SectionHeading
                    eyebrow="My Journey"
                    title="Milestones &"
                    highlight="Captured Moments"
                    description="A visual timeline of continuous milestones, engineering achievements, and unforgettable memories gathered along my path."
                    className="mb-8 sm:mb-12"
                />

                {/* ─── Gallery Top Bar Controls ─── */}
                <div className="mb-6 flex items-center justify-end border-b border-border pb-4">
                    {/* Navigation Actions */}
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => scrollStep('prev')}
                            aria-label="Previous memory"
                            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-white text-ink shadow-e1 transition-all duration-200 hover:border-primary/40 hover:text-primary hover:shadow-e2 active:scale-95"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                            type="button"
                            onClick={togglePause}
                            title={isPausedState ? 'Resume auto-loop' : 'Pause auto-loop'}
                            aria-label={isPausedState ? 'Resume auto-loop' : 'Pause auto-loop'}
                            className="flex h-9 items-center gap-1.5 rounded-full border border-border bg-white px-3 text-xs font-medium text-ink shadow-e1 transition-all duration-200 hover:border-primary/40 hover:text-primary hover:shadow-e2 active:scale-95"
                        >
                            {isPausedState ? (
                                <>
                                    <Play className="h-3.5 w-3.5 text-emerald-600 fill-emerald-600" />
                                    <span>Resume</span>
                                </>
                            ) : (
                                <>
                                    <Pause className="h-3.5 w-3.5 text-muted" />
                                    <span>Pause</span>
                                </>
                            )}
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollStep('next')}
                            aria-label="Next memory"
                            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-white text-ink shadow-e1 transition-all duration-200 hover:border-primary/40 hover:text-primary hover:shadow-e2 active:scale-95"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                {/* ─── Looping Gallery Track with Center Magnification ─── */}
                <div
                    ref={containerRef}
                    onMouseEnter={() => { isPausedRef.current = true; }}
                    onMouseLeave={() => { if (!isPausedState) isPausedRef.current = false; }}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                    className="relative w-full overflow-hidden py-10 cursor-grab active:cursor-grabbing select-none"
                    style={{ touchAction: 'pan-y' }}
                >
                    {/* Ambient center spotlight glow */}
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[90px] z-0" />

                    {/* Translating Track */}
                    <div
                        ref={trackRef}
                        className="flex will-change-transform"
                        style={{ gap: `${CARD_GAP}px` }}
                    >
                        {loopedEvents.map((event, index) => {
                            const originalIdx = index % events.length;

                            return (
                                <div
                                    key={index}
                                    ref={(el) => { cardRefs.current[index] = el; }}
                                    className="shrink-0 select-none will-change-transform transition-all duration-200"
                                    style={{
                                        width: `${CARD_WIDTH}px`,
                                        transformOrigin: 'center center',
                                    }}
                                >
                                    {/* Normal Square Photo Frame Card */}
                                    <div className="group/card relative flex flex-col rounded-2xl border-2 border-slate-200/90 bg-white p-3 shadow-md shadow-slate-200/50 backdrop-blur-md transition-all duration-300">
                                        {/* Square photo display */}
                                        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-100">
                                            <img
                                                src={event.image}
                                                alt={`${event.title} — ${event.year}`}
                                                loading="lazy"
                                                decoding="async"
                                                className="h-full w-full object-cover select-none pointer-events-none transition-transform duration-500 group-hover/card:scale-105"
                                                draggable={false}
                                            />

                                            {/* Frame badge */}
                                            <span className="absolute top-2 right-2 rounded-full bg-slate-900/80 px-2 py-0.5 text-[0.625rem] font-bold text-white shadow-sm backdrop-blur-sm">
                                                #{originalIdx + 1}
                                            </span>

                                            {/* Year badge */}
                                            <span className="absolute top-2 left-2 rounded-full bg-emerald-500 px-2.5 py-0.5 text-[0.6875rem] font-bold text-white shadow-sm">
                                                {event.year}
                                            </span>
                                        </div>

                                        {/* Title and metadata */}
                                        <div className="mt-2.5 text-center">
                                            <h4 className="font-display text-xs sm:text-sm font-bold text-ink truncate">
                                                {event.title}
                                            </h4>
                                            <p className="mt-0.5 text-[0.6875rem] text-muted truncate">
                                                {event.organization}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ─── Active Center Item Highlight Card ─── */}
                <div className="mt-6 flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm">
                        <span>Frame #{activeFrameNum} of {events.length}</span>
                        <span>&bull;</span>
                        <span>{activeCenterEvent.year}</span>
                    </div>
                    <h3 className="mt-2.5 font-display text-lg font-bold text-ink sm:text-xl">
                        {activeCenterEvent.title}
                    </h3>
                    <p className="mt-1 max-w-lg text-xs leading-relaxed text-muted sm:text-sm">
                        {activeCenterEvent.description}
                    </p>
                </div>
            </div>
        </section>
    );
}
