import { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { ChevronLeft, ChevronRight, Pause, Play, Maximize2, X, Download } from 'lucide-react';

interface JourneyEvent {
    year: string;
    title: string;
    organization: string;
    description: string;
    image: string;
    isActive?: boolean;
}

const events: JourneyEvent[] = [
    {
        year: '2023',
        title: 'Smart India Hackathon',
        organization: 'National Hackathon',
        description: 'Participating and presenting innovative software solutions at the Smart India Hackathon.',
        image: '/Journey/1.webp',
    },
    {
        year: '2023',
        title: 'Innovation Competition',
        organization: 'Tech Competition',
        description: 'Demonstrating technical innovation and creative problem-solving in college innovation challenges.',
        image: '/Journey/2.webp',
    },
    {
        year: '2023',
        title: 'Web Development Team',
        organization: 'Team Collaboration',
        description: 'Collaborating with fellow student developers building responsive web development projects.',
        image: '/Journey/3.webp',
    },
    {
        year: '2024',
        title: 'Short Film Winner - 2nd Prize',
        organization: '3D Productions & Film',
        description: 'Honored with 2nd Prize for social awareness short film directing and visual storytelling.',
        image: '/Journey/4.webp',
    },
    {
        year: '2024',
        title: 'Short Film Winner - 1st Prize',
        organization: 'Creative Excellence',
        description: 'Winning 1st Prize recognition for exemplary direction and cinematography in short filmmaking.',
        image: '/Journey/5.webp',
    },
    {
        year: '2024',
        title: 'Industrial Visit',
        organization: 'Industry Exposure',
        description: 'Educational industrial visit gaining real-world exposure to enterprise IT and tech infrastructure.',
        image: '/Journey/6.webp',
    },
    {
        year: '2025',
        title: 'IoT Workshop - Day 1',
        organization: 'Hands-on Technical Workshop',
        description: 'Hands-on exploration of Internet of Things (IoT) sensors, microcontrollers, and hardware interfaces.',
        image: '/Journey/7.webp',
    },
    {
        year: '2025',
        title: 'IoT Workshop - Day 2',
        organization: 'Hardware & Networking',
        description: 'Intermediate IoT prototyping, sensor data acquisition, and cloud telemetry integration.',
        image: '/Journey/8.webp',
    },
    {
        year: '2025',
        title: 'IoT Workshop - Day 2 Session',
        organization: 'Embedded Systems',
        description: 'Developing connected device prototypes, circuit debugging, and embedded logic workflows.',
        image: '/Journey/9.webp',
    },
    {
        year: '2025',
        title: 'IoT Workshop - Day 3',
        organization: 'Final Project Demonstration',
        description: 'Successfully deploying complete IoT smart automation solutions and receiving completion honors.',
        image: '/Journey/10.webp',
    },
    {
        year: '2025',
        title: 'Idea Innovation Challenge',
        organization: 'Student Entrepreneurship',
        description: 'Pitching innovative startup concepts, business feasibility models, and digital transformation ideas.',
        image: '/Journey/11.webp',
    },
    {
        year: '2025',
        title: 'Technical Quiz Competition',
        organization: 'Academic Excellence',
        description: 'Competing and testing computer science fundamentals, algorithm logic, and technical problem-solving.',
        image: '/Journey/12.webp',
    },
    {
        year: '2025',
        title: 'Fun-a-Thon Winner',
        organization: 'Symposium Achievement',
        description: 'Awarded winner honors in technical Fun-a-Thon symposium competition at Sona College of Technology.',
        image: '/Journey/13.webp',
    },
    {
        year: '2025',
        title: 'Institutional Recognition',
        organization: 'Gnyanamani Institutions',
        description: 'Receiving official institutional appreciation for outstanding academic and software contributions.',
        image: '/Journey/14.webp',
    },
    {
        year: '2025',
        title: 'Startup Opening',
        organization: 'Code Blaza Journey',
        description: 'Inception and opening milestones of the Code Blaza Technology entrepreneurial initiative.',
        image: '/Journey/15.webp',
    },
    {
        year: '2025',
        title: 'MSME Registration',
        organization: 'Government Milestone',
        description: 'Official Government MSME registration establishing Code Blaza Technology as an official enterprise.',
        image: '/Journey/16.webp',
    },
    {
        year: '2025',
        title: 'Annual Day Startup Recognition',
        organization: 'College Annual Day',
        description: 'Honored during the college Annual Day ceremony for entrepreneurial leadership and startup founding.',
        image: '/Journey/17.webp',
    },
    {
        year: '2025',
        title: 'Algo Finder',
        organization: 'Code Debugging Challenge',
        description: 'Winning top honors in algorithmic optimization, code debugging, and algorithmic problem-solving.',
        image: '/Journey/18.webp',
    },
    {
        year: '2025',
        title: 'Short Film - 2nd Prize',
        organization: 'Film & Creative Arts',
        description: 'Securing 2nd Prize in inter-collegiate short film competition for impactful visual direction.',
        image: '/Journey/19.webp',
    },
    {
        year: '2025',
        title: 'Official ID Card Issue',
        organization: 'Code Blaza Technology',
        description: 'Formal release and issuance of the first official Code Blaza Technology employee ID cards.',
        image: '/Journey/20.webp',
    },
    {
        year: '2025',
        title: 'Hackathon Participation',
        organization: '24-Hour Code Sprint',
        description: 'Rapid prototyping and architecture development during competitive 24-hour hackathons.',
        image: '/Journey/21.webp',
    },
    {
        year: '2025',
        title: 'Hackathon Team',
        organization: 'Collaborative Engineering',
        description: 'Standing together with the hackathon sprint team after delivering robust full-stack prototypes.',
        image: '/Journey/22.webp',
    },
    {
        year: '2025',
        title: 'Startup Meetup',
        organization: 'Entrepreneurial Network',
        description: 'Engaging with fellow founders, technology leaders, and startup mentors at regional business summits.',
        image: '/Journey/23.webp',
    },
    {
        year: '2025',
        title: 'College Banner Recognition',
        organization: 'Student Achievement',
        description: 'Awarded 1st Prize for Short Film at ALGONEXUS 2025 symposium, Jayalakshmi Institute of Technology.',
        image: '/Journey/24.jpg',
    },
    {
        year: '2026',
        title: 'Final Year Project Presentation',
        organization: 'Gnanamani Institutions',
        description: 'Presenting Development of a Secure and Scalable College ERP with OCR Integration.',
        image: '/Journey/25.jpg',
    },
    {
        year: '2026',
        title: 'Final Year Project Team',
        organization: 'Gnanamani CSE',
        description: 'Final Year ERP Project Team standing together after successful demonstration.',
        image: '/Journey/26.jpg',
    },
    {
        year: '2026',
        title: 'Last Day of College',
        organization: 'Academic Milestone',
        description: 'Cherishing academic milestones, memories, and honors with college HOD, faculty, and peers.',
        image: '/Journey/27.jpg',
    },
    {
        year: '2026',
        title: 'Python Trainer',
        organization: 'Technology Mentorship',
        description: 'Conducting Python programming training sessions and mentoring junior developers in core software concepts.',
        image: '/Journey/28.jpg',
    },
    {
        year: '2026',
        title: 'College Memory',
        organization: 'Journey Captured',
        description: 'Memorable milestone capturing student camaraderie, collaboration, and technological dedication.',
        image: '/Journey/29.jpeg',
    },
    {
        year: '2026',
        title: 'Company Opening',
        organization: 'Code Blaza Technology',
        description: 'Celebrating corporate milestones, client partnerships, and company development at Code Blaza Technology.',
        image: '/Journey/30.jpeg',
    },
    {
        year: '2026',
        title: 'Workshop Conduct',
        organization: 'EduTech & Mentorship',
        description: 'Leading and conducting hands-on software development and technical skill-building workshops.',
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
    const [selectedEvent, setSelectedEvent] = useState<JourneyEvent | null>(null);

    // Drag / Touch tracking
    const isPointerDownRef = useRef(false);
    const isDraggingRef = useRef(false);
    const hasDraggedRef = useRef(false);
    const startXRef = useRef(0);
    const dragStartPosRef = useRef(0);
    const lastTimeRef = useRef<number | null>(null);

    // Global listener to ensure drag release always resets even outside the container
    useEffect(() => {
        const onGlobalPointerUp = () => {
            isPointerDownRef.current = false;
            isDraggingRef.current = false;
        };
        window.addEventListener('pointerup', onGlobalPointerUp);
        window.addEventListener('pointercancel', onGlobalPointerUp);
        return () => {
            window.removeEventListener('pointerup', onGlobalPointerUp);
            window.removeEventListener('pointercancel', onGlobalPointerUp);
        };
    }, []);

    // Handle ESC key & scroll lock for full view image modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedEvent(null);
        };
        if (selectedEvent) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [selectedEvent]);

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
        if (e.button !== 0 && e.pointerType === 'mouse') return;
        isPointerDownRef.current = true;
        isDraggingRef.current = false;
        hasDraggedRef.current = false;
        startXRef.current = e.clientX;
        dragStartPosRef.current = posRef.current;
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isPointerDownRef.current) return;
        const delta = e.clientX - startXRef.current;
        if (Math.abs(delta) > 5) {
            hasDraggedRef.current = true;
            isDraggingRef.current = true;
        }
        if (isDraggingRef.current) {
            posRef.current = dragStartPosRef.current + delta;
        }
    };

    const handlePointerUp = () => {
        isPointerDownRef.current = false;
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
                                    <div
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => {
                                            if (!hasDraggedRef.current) {
                                                setSelectedEvent(event);
                                            }
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                setSelectedEvent(event);
                                            }
                                        }}
                                        className="group/card relative flex flex-col rounded-2xl border-2 border-slate-200/90 bg-white p-3 shadow-md shadow-slate-200/50 backdrop-blur-md transition-all duration-300 cursor-pointer hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10"
                                    >
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

                                            {/* Zoom icon on hover */}
                                            <span className="pointer-events-none absolute inset-0 grid place-items-center bg-slate-950/30 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover/card:opacity-100">
                                                <span className="grid h-10 w-10 place-items-center rounded-full bg-white/95 text-ink shadow-md transition-transform duration-300 group-hover/card:scale-110">
                                                    <Maximize2 className="h-4 w-4 text-emerald-600" />
                                                </span>
                                            </span>

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
                <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setSelectedEvent(activeCenterEvent)}
                    className="mt-6 flex flex-col items-center text-center cursor-pointer group"
                    title="Click to view full photo"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm transition-transform duration-200 group-hover:scale-105">
                        <span>Frame #{activeFrameNum} of {events.length}</span>
                        <span>&bull;</span>
                        <span>{activeCenterEvent.year}</span>
                        <Maximize2 className="h-3 w-3 ml-0.5 text-emerald-600 opacity-70 group-hover:opacity-100" />
                    </div>
                    <h3 className="mt-2.5 font-display text-lg font-bold text-ink sm:text-xl group-hover:text-emerald-700 transition-colors">
                        {activeCenterEvent.title}
                    </h3>
                    <p className="mt-1 max-w-lg text-xs leading-relaxed text-muted sm:text-sm">
                        {activeCenterEvent.description}
                    </p>
                </div>
            </div>

            {/* ─── Lightbox Modal (Identical to Certificate View) ─── */}
            {createPortal(
                <AnimatePresence>
                    {selectedEvent && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedEvent(null)}
                            role="dialog"
                            aria-modal="true"
                            aria-label={`${selectedEvent.title} preview`}
                            className="fixed inset-0 z-[9999] flex cursor-zoom-out items-center justify-center bg-slate-900/45 p-4 backdrop-blur-xl sm:p-8"
                            data-lenis-prevent="true"
                        >
                            {/* Action Buttons Top Right */}
                            <div className="absolute right-4 top-4 z-50 flex items-center gap-2 sm:right-8 sm:top-8">
                                <a
                                    href={selectedEvent.image}
                                    download={selectedEvent.image.split('/').pop() || 'journey-memory'}
                                    className="grid h-12 w-12 place-items-center rounded-btn border border-border bg-white text-primary shadow-e2 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
                                    onClick={(e) => e.stopPropagation()}
                                    title="Download Photo"
                                    aria-label="Download photo"
                                >
                                    <Download className="h-5 w-5" />
                                </a>
                                <button
                                    className="grid h-12 w-12 place-items-center rounded-btn border border-border bg-white text-ink shadow-e2 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet/50 hover:text-violet"
                                    onClick={(e) => { e.stopPropagation(); setSelectedEvent(null); }}
                                    title="Close"
                                    aria-label="Close preview"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            {/* Full-view Image */}
                            <motion.img
                                initial={{ scale: 0.92, y: 18, opacity: 0 }}
                                animate={{ scale: 1, y: 0, opacity: 1 }}
                                exit={{ scale: 0.92, y: 18, opacity: 0 }}
                                transition={{ type: 'spring', damping: 26, stiffness: 300 }}
                                src={selectedEvent.image}
                                alt={selectedEvent.title}
                                className="max-h-[82vh] max-w-full cursor-default rounded-panel bg-white object-contain shadow-e3 ring-1 ring-slate-900/10"
                                onClick={(e) => e.stopPropagation()}
                            />

                            {/* Floating details badge at bottom */}
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 12 }}
                                transition={{ delay: 0.1, duration: 0.25 }}
                                className="pointer-events-none absolute bottom-4 sm:bottom-6 z-50 flex flex-col items-center text-center px-4"
                            >
                                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/95 px-4 py-2 shadow-e2 backdrop-blur-md">
                                    <span className="rounded-full bg-emerald-500 px-2.5 py-0.5 text-[0.6875rem] font-bold text-white shadow-sm">
                                        {selectedEvent.year}
                                    </span>
                                    <span className="font-display text-xs sm:text-sm font-bold text-ink">
                                        {selectedEvent.title}
                                    </span>
                                    <span className="text-muted text-xs">&bull;</span>
                                    <span className="text-xs text-muted">
                                        {selectedEvent.organization}
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
}
