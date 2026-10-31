/**
 * Recko AI Humanoid Voice Engine
 * Combines Web SpeechSynthesis with subtle Web Audio harmonic chimes
 * to produce a distinctive Human + AI Robot mixed vocal signature.
 */

class ReckoVoiceEngine {
    private isMuted: boolean = false;
    private audioCtx: AudioContext | null = null;

    constructor() {
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            // Pre-load voices
            window.speechSynthesis.getVoices();
            window.speechSynthesis.onvoiceschanged = () => {
                window.speechSynthesis.getVoices();
            };
        }
    }

    public setMuted(muted: boolean) {
        this.isMuted = muted;
        if (muted && typeof window !== 'undefined' && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
    }

    public getMuted(): boolean {
        return this.isMuted;
    }

    /**
     * Futuristic electronic cyber chime played right before speaking
     */
    private playCyberChime() {
        if (this.isMuted || typeof window === 'undefined') return;
        try {
            const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
            if (!AudioCtxClass) return;

            if (!this.audioCtx || this.audioCtx.state === 'suspended') {
                this.audioCtx = new AudioCtxClass();
            }

            const ctx = this.audioCtx;
            if (ctx.state === 'suspended') {
                ctx.resume();
            }

            const now = ctx.currentTime;
            const osc1 = ctx.createOscillator();
            const osc2 = ctx.createOscillator();
            const gain = ctx.createGain();

            // Robotic cyber frequency ramp (D5 to A5 harmonic)
            osc1.type = 'sine';
            osc1.frequency.setValueAtTime(587.33, now);
            osc1.frequency.exponentialRampToValueAtTime(880, now + 0.12);

            osc2.type = 'triangle';
            osc2.frequency.setValueAtTime(880, now);
            osc2.frequency.exponentialRampToValueAtTime(1174.66, now + 0.12);

            gain.gain.setValueAtTime(0.035, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);

            osc1.connect(gain);
            osc2.connect(gain);
            gain.connect(ctx.destination);

            osc1.start(now);
            osc2.start(now);
            osc1.stop(now + 0.16);
            osc2.stop(now + 0.16);
        } catch {
            // Handled safely if audio context is blocked
        }
    }

    /**
     * Synthesize speech with human + AI robot mixed characteristics
     */
    public speak(text: string, onEnd?: () => void) {
        if (this.isMuted || typeof window === 'undefined' || !('speechSynthesis' in window)) {
            if (onEnd) onEnd();
            return;
        }

        // Cancel previous utterances
        window.speechSynthesis.cancel();
        this.playCyberChime();

        // Clean markdown symbols for natural speaking
        const cleanedText = text
            .replace(/\*\*(.*?)\*\*/g, '$1')
            .replace(/\[(.*?)\]\(.*?\)/g, '$1')
            .replace(/[-*•]/g, '')
            .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
            .trim();

        if (!cleanedText) {
            if (onEnd) onEnd();
            return;
        }

        const utterance = new SpeechSynthesisUtterance(cleanedText);
        const voices = window.speechSynthesis.getVoices();

        // Find clean English robotic/natural voice
        const preferredVoice =
            voices.find((v) => v.name.includes('Google US English') || v.name.includes('Natural') || v.name.includes('David') || v.name.includes('Mark')) ||
            voices.find((v) => v.lang.startsWith('en')) ||
            voices[0];

        if (preferredVoice) {
            utterance.voice = preferredVoice;
        }

        // Human + AI Robot mixed settings:
        // Pitch: 0.9 (slightly lower robotic resonance)
        // Rate: 1.02 (crisp, precise cadence)
        utterance.pitch = 0.9;
        utterance.rate = 1.02;

        if (onEnd) {
            utterance.onend = () => onEnd();
            utterance.onerror = () => onEnd();
        }

        window.speechSynthesis.speak(utterance);
    }

    public stop() {
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
    }
}

export const reckoVoice = new ReckoVoiceEngine();

