import { useState } from 'react';

interface ReckoLogoProps {
    className?: string;
    size?: number;
}

export function ReckoLogo({ className = 'h-full w-full', size = 48 }: ReckoLogoProps) {
    const [imgFailed, setImgFailed] = useState(false);

    if (!imgFailed) {
        return (
            <img
                src="/recko-logo.png"
                alt="Recko AI Logo"
                width={size}
                height={size}
                onError={() => setImgFailed(true)}
                className={`object-cover object-center ${className}`}
            />
        );
    }

    // Creative Geometric Cyber-Neural Vector Logo for Recko AI
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient id="recko-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="50%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
                <linearGradient id="recko-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00d4ff" />
                    <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
                <radialGradient id="recko-core" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                    <stop offset="60%" stopColor="#2563eb" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#01040a" stopOpacity="0" />
                </radialGradient>
                <filter id="recko-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>

            {/* Ambient Background Glow */}
            <circle cx="50" cy="50" r="42" fill="url(#recko-core)" />

            {/* Outer Hexagonal Shield */}
            <path
                d="M50 8 L86 28 L86 72 L50 92 L14 72 L14 28 Z"
                stroke="url(#recko-grad-1)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.8"
            />

            {/* Orbiting Tech Nodes */}
            <circle cx="50" cy="8" r="3" fill="#38bdf8" filter="url(#recko-glow)" />
            <circle cx="86" cy="72" r="3" fill="#8b5cf6" filter="url(#recko-glow)" />
            <circle cx="14" cy="72" r="3" fill="#00d4ff" filter="url(#recko-glow)" />

            {/* Stylized Creative Futuristic "R" Core */}
            {/* Left Vertical Spine with glow */}
            <path
                d="M34 26 L34 74"
                stroke="url(#recko-grad-1)"
                strokeWidth="7"
                strokeLinecap="round"
                filter="url(#recko-glow)"
            />

            {/* Upper R-Loop: Modern faceted polygonal curve */}
            <path
                d="M34 26 H56 C66 26 72 32 72 41 C72 50 65 55 54 55 H34"
                stroke="url(#recko-grad-2)"
                strokeWidth="6.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Dynamic Angled Kinetic Leg */}
            <path
                d="M50 55 L68 74"
                stroke="url(#recko-grad-1)"
                strokeWidth="7"
                strokeLinecap="round"
            />

            {/* Luminous Core Nexus Spark */}
            <circle cx="52" cy="40.5" r="3.5" fill="#ffffff" filter="url(#recko-glow)" />
            <circle cx="52" cy="40.5" r="1.5" fill="#38bdf8" />
        </svg>
    );
}

