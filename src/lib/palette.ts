/**
 * Presentation-only colour bridge.
 *
 * The section data files still carry their original accent hexes — nothing in
 * them has been edited. Those values were authored for a dark canvas, where
 * neon cyan/lime/gold read beautifully; on a white canvas they wash out and
 * fail contrast. Rather than rewrite the data, every component pipes its colour
 * through `tone()`, which snaps it onto the single site-wide accent palette:
 *
 *   Blue → Indigo → Violet → Emerald
 *
 * Add a mapping here — never in a data array — if a new accent appears.
 */

export const PALETTE = {
    blue: '#2563eb',
    indigo: '#4f46e5',
    violet: '#7c3aed',
    emerald: '#059669',
} as const;

export type ToneName = keyof typeof PALETTE;

/** Legacy (dark-theme) hex → palette family. Keys are lowercased. */
const LEGACY_TONE: Record<string, ToneName> = {
    // cyans
    '#00d4ff': 'blue',
    '#22d3ee': 'blue',
    '#67e8f9': 'blue',
    '#06b6d4': 'blue',
    // greens
    '#00ff9f': 'emerald',
    '#34d399': 'emerald',
    '#10b981': 'emerald',
    '#059669': 'emerald',
    // purples
    '#7c3aed': 'violet',
    '#8b5cf6': 'violet',
    '#a78bfa': 'violet',
    // pinks fold into violet so the palette stays at four families
    '#f472b6': 'violet',
    '#ff2d78': 'violet',
    '#ec4899': 'violet',
    // warm tones fold into indigo
    '#fbbf24': 'indigo',
    '#ffd700': 'indigo',
    '#f97316': 'indigo',
    '#f59e0b': 'indigo',
};

const ORDER: ToneName[] = ['blue', 'indigo', 'violet', 'emerald'];

/** Deterministic fallback so an unmapped hex still lands inside the palette. */
function fallback(hex: string): ToneName {
    let sum = 0;
    for (let i = 0; i < hex.length; i++) sum += hex.charCodeAt(i);
    return ORDER[sum % ORDER.length];
}

/** Resolve any legacy accent hex to its palette family name. */
export function toneName(hex: string): ToneName {
    const key = hex.trim().toLowerCase();
    return LEGACY_TONE[key] ?? fallback(key);
}

/** Resolve any legacy accent hex to a palette hex. */
export function tone(hex: string): string {
    return PALETTE[toneName(hex)];
}

/* ── Ready-made surface recipes, so tinted chips look identical everywhere ── */

export interface ToneStyle {
    /** Solid accent — text, icons, dots. */
    fg: string;
    /** 8% wash — icon tiles, chips. */
    bg: string;
    /** Hairline ring that pairs with `bg`. */
    ring: string;
    /** Soft coloured elevation for hover states. */
    shadow: string;
}

export function toneStyle(hex: string): ToneStyle {
    const fg = tone(hex);
    return {
        fg,
        bg: `color-mix(in srgb, ${fg} 8%, #ffffff)`,
        ring: `color-mix(in srgb, ${fg} 22%, #ffffff)`,
        shadow: `0 18px 38px -20px color-mix(in srgb, ${fg} 65%, transparent)`,
    };
}
