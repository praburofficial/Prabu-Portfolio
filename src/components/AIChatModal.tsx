import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, X, RotateCcw, ArrowUpRight, Mic, Volume2, VolumeX } from 'lucide-react';
import { queryPortfolioAI } from '../data/aiKnowledgeBase';
import { reckoVoice } from '../utils/reckoVoice';
import { ReckoLogo } from './ReckoLogo';

interface Message {
    id: string;
    sender: 'user' | 'ai';
    text: string;
    timestamp: string;
    suggestions?: string[];
}

interface AIChatModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AIChatModal({ isOpen, onClose }: AIChatModalProps) {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'initial',
            sender: 'ai',
            text: `👋 **Hello! I'm Recko, Prabu R's AI portfolio assistant.**

I can help you explore his technical expertise, software projects, professional journey and leadership at Code Blaza Technology.

Are you interested in his developer profile, projects or business initiatives?`,
            timestamp: 'Just now',
            suggestions: [
                '👨‍💻 Developer Profile & Tech Stack',
                '🚀 Top Projects & EveryKadai',
                '👑 Founder Journey at Code Blaza',
                '🏢 Company Services & Solutions',
                '📬 How to Contact Prabu',
            ],
        },
    ]);

    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const recognitionRef = useRef<any>(null);
    const silenceTimerRef = useRef<number | null>(null);

    // Stop listening and clear the 15-second inactivity timer
    const stopListeningWithTimer = () => {
        if (silenceTimerRef.current !== null) {
            window.clearTimeout(silenceTimerRef.current);
            silenceTimerRef.current = null;
        }
        if (recognitionRef.current) {
            try {
                recognitionRef.current.stop();
            } catch {
                // Handled safely
            }
        }
        setIsListening(false);
    };

    // Reset the 15-second silence auto-stop timer
    const resetSilenceTimer = () => {
        if (silenceTimerRef.current !== null) {
            window.clearTimeout(silenceTimerRef.current);
        }
        // Auto-stop after 15 seconds of no speech
        silenceTimerRef.current = window.setTimeout(() => {
            stopListeningWithTimer();
        }, 15000);
    };

    // Auto-scroll on new messages
    useEffect(() => {
        if (isOpen) {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isTyping, isOpen]);

    // When modal opens: greet in voice & lock page scroll
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 300);
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';

            // Speak greeting: "Hello, welcome! Have a great day."
            const timer = setTimeout(() => {
                reckoVoice.speak('Hello, welcome! Have a great day.');
            }, 350);

            return () => clearTimeout(timer);
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            reckoVoice.stop();
            stopListeningWithTimer();
        }
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            reckoVoice.stop();
            stopListeningWithTimer();
        };
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    // Handle Mute toggle
    const toggleMute = () => {
        const next = !isMuted;
        setIsMuted(next);
        reckoVoice.setMuted(next);
    };

    // Toggle Voice Recognition (Speech-to-Text with 15s auto-stop)
    const toggleListening = () => {
        if (isListening) {
            stopListeningWithTimer();
            return;
        }

        // Check Web Speech API availability
        const SpeechRec =
            (window as unknown as { SpeechRecognition?: any; webkitSpeechRecognition?: any }).SpeechRecognition ||
            (window as unknown as { webkitSpeechRecognition?: any }).webkitSpeechRecognition;

        if (!SpeechRec) {
            alert('Voice recognition is not supported in this browser. Please try in Google Chrome or Microsoft Edge.');
            return;
        }

        try {
            const recognition = new SpeechRec();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = 'en-US';

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            recognition.onresult = (event: any) => {
                // Reset the 15-second inactivity timer on every detected speech event
                resetSilenceTimer();

                let currentTranscript = '';
                for (let i = 0; i < event.results.length; i++) {
                    currentTranscript += event.results[i][0].transcript;
                }
                if (currentTranscript) {
                    setInput(currentTranscript);
                }
            };

            recognition.onerror = () => {
                stopListeningWithTimer();
            };

            recognition.onend = () => {
                stopListeningWithTimer();
            };

            recognitionRef.current = recognition;
            recognition.start();
            setIsListening(true);

            // Start initial 15-second inactivity countdown
            resetSilenceTimer();
        } catch {
            stopListeningWithTimer();
        }
    };

    // Handle Sending Messages
    const handleSend = (textToSend?: string) => {
        const queryText = (textToSend || input).trim();
        if (!queryText) return;

        // Stop voice recognition if active
        if (isListening) {
            stopListeningWithTimer();
        }

        const userMsg: Message = {
            id: Date.now().toString(),
            sender: 'user',
            text: queryText,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages((prev) => [...prev, userMsg]);
        if (!textToSend) setInput('');
        setIsTyping(true);

        // 1. Spoken acknowledgment: "Okay, processing..."
        reckoVoice.speak('Okay, processing.');

        // 2. Compute answer and show
        setTimeout(() => {
            const result = queryPortfolioAI(queryText);
            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                sender: 'ai',
                text: result.answer,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                suggestions: result.suggestions,
            };

            setMessages((prev) => [...prev, aiMsg]);
            setIsTyping(false);

            // Read concise response summary in humanoid voice
            const firstParagraph = result.answer.split('\n\n')[0] || result.answer;
            reckoVoice.speak(firstParagraph);
        }, 900);
    };

    const handleReset = () => {
        reckoVoice.stop();
        stopListeningWithTimer();
        setMessages([
            {
                id: 'reset',
                sender: 'ai',
                text: `✨ Chat cleared! I'm Recko — what else would you like to know about Prabu R?`,
                timestamp: 'Just now',
                suggestions: [
                    'What projects has he built?',
                    'What is his tech stack?',
                    'Where did he study?',
                    'How to contact Prabu?',
                ],
            },
        ]);
        reckoVoice.speak("Chat cleared. What else would you like to know about Prabu?");
    };

    // Format simple markdown into bold and linebreaks
    const renderFormattedText = (rawText: string) => {
        return rawText.split('\n').map((line, idx) => {
            const parts = line.split(/(\[.*?\]\(.*?\))/g);
            return (
                <p key={idx} className={line.trim() === '' ? 'h-2' : 'mb-1.5 leading-relaxed text-slate-700'}>
                    {parts.map((part, pIdx) => {
                        const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
                        if (linkMatch) {
                            return (
                                <a
                                    key={pIdx}
                                    href={linkMatch[2]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-sky-600 underline decoration-sky-300 hover:text-sky-700 hover:decoration-sky-500 transition-colors"
                                >
                                    {linkMatch[1]}
                                    <ArrowUpRight className="inline-block h-3.5 w-3.5 -translate-y-0.5 ml-0.5" />
                                </a>
                            );
                        }

                        const boldParts = part.split(/(\*\*.*?\*\*)/g);
                        return boldParts.map((bPart, bIdx) => {
                            if (bPart.startsWith('**') && bPart.endsWith('**')) {
                                return (
                                    <strong key={bIdx} className="font-bold text-slate-900">
                                        {bPart.slice(2, -2)}
                                    </strong>
                                );
                            }
                            return bPart;
                        });
                    })}
                </p>
            );
        });
    };

    if (typeof document === 'undefined') return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div
                    data-lenis-prevent="true"
                    className="fixed inset-0 z-[9999] flex items-end justify-end p-2 sm:p-6 md:p-8 pointer-events-auto"
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        onWheel={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                        onTouchMove={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
                    />

                    {/* Chat Drawer / Card — Clean White Theme Default */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.94, y: 30 }}
                        transition={{ type: 'spring', damping: 28, stiffness: 350 }}
                        data-lenis-prevent="true"
                        onWheel={(e) => e.stopPropagation()}
                        onTouchMove={(e) => e.stopPropagation()}
                        className="relative z-10 flex h-[90vh] max-h-[720px] w-full max-w-[460px] flex-col overflow-hidden rounded-[28px] border border-slate-200/90 bg-white shadow-[0_25px_70px_-12px_rgba(15,23,42,0.22),0_4px_16px_rgba(15,23,42,0.06)]"
                    >
                        {/* ─── Header ─── */}
                        <div className="relative flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4">
                            {/* Ambient top hairline */}
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500" />

                            <div className="flex items-center gap-3">
                                {/* Creative Recko AI Logo */}
                                <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 p-[2px] shadow-sm">
                                    <div className="h-full w-full overflow-hidden rounded-[14px] bg-white">
                                        <ReckoLogo size={44} className="h-full w-full object-cover object-center" />
                                    </div>
                                    <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500 shadow-sm" />
                                </div>

                                <div>
                                    <div className="flex items-center gap-1.5">
                                        <h3 className="font-display text-[1rem] font-bold text-slate-900">Recko AI Assistant</h3>
                                        <Sparkles className="h-4 w-4 text-sky-500" />
                                    </div>
                                    <p className="text-[0.72rem] font-mono font-medium text-sky-600">Intelligent AI · Trained on Portfolio</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-1">
                                {/* Mute / Unmute Voice Button */}
                                <button
                                    type="button"
                                    onClick={toggleMute}
                                    title={isMuted ? 'Unmute voice' : 'Mute voice'}
                                    className={`grid h-9 w-9 place-items-center rounded-full transition-colors ${
                                        isMuted ? 'text-slate-400 hover:text-slate-600 hover:bg-slate-100' : 'text-sky-600 hover:bg-sky-50'
                                    }`}
                                >
                                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                                </button>

                                {/* Reset Chat */}
                                <button
                                    type="button"
                                    onClick={handleReset}
                                    title="Clear conversation"
                                    className="grid h-9 w-9 place-items-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                                >
                                    <RotateCcw className="h-4 w-4" />
                                </button>

                                {/* Close */}
                                <button
                                    type="button"
                                    onClick={onClose}
                                    title="Close assistant"
                                    className="grid h-9 w-9 place-items-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* ─── Messages Area ─── */}
                        <div
                            data-lenis-prevent="true"
                            onWheel={(e) => e.stopPropagation()}
                            onTouchMove={(e) => e.stopPropagation()}
                            className="flex-1 overflow-y-auto overscroll-contain bg-slate-50/70 p-4 sm:p-5 space-y-4 text-[0.875rem]"
                        >
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                                >
                                    <div
                                        className={`max-w-[88%] px-4 py-3 sm:px-4.5 sm:py-3.5 ${
                                            msg.sender === 'user'
                                                ? 'rounded-[20px] rounded-br-sm bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm shadow-sky-500/20'
                                                : 'rounded-[20px] rounded-tl-sm border border-slate-200/90 bg-white text-slate-800 shadow-xs'
                                        }`}
                                    >
                                        {msg.sender === 'ai' ? (
                                            <div className="text-[0.84rem] text-slate-700">
                                                {renderFormattedText(msg.text)}
                                            </div>
                                        ) : (
                                            <p className="text-[0.875rem] font-medium leading-relaxed">{msg.text}</p>
                                        )}
                                    </div>

                                    <span className="mt-1 px-1 text-[0.6875rem] text-slate-400">{msg.timestamp}</span>

                                    {/* Follow-up suggestions */}
                                    {msg.suggestions && msg.suggestions.length > 0 && (
                                        <div className="mt-3 flex flex-wrap gap-1.5">
                                            {msg.suggestions.map((sug, sIdx) => (
                                                <button
                                                    key={sIdx}
                                                    type="button"
                                                    onClick={() => handleSend(sug)}
                                                    className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[0.75rem] font-medium text-slate-700 shadow-xs transition-all duration-200 hover:border-sky-400 hover:bg-sky-50 hover:text-sky-600 active:scale-95"
                                                >
                                                    {sug}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Typing / Processing Indicator */}
                            {isTyping && (
                                <div className="flex items-center gap-2 text-slate-500">
                                    <div className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-xs">
                                        <span className="h-2 w-2 rounded-full bg-sky-500 animate-bounce" />
                                        <span className="h-2 w-2 rounded-full bg-sky-500 animate-bounce [animation-delay:0.2s]" />
                                        <span className="h-2 w-2 rounded-full bg-sky-500 animate-bounce [animation-delay:0.4s]" />
                                    </div>
                                    <span className="text-xs text-sky-600 font-mono font-medium">Processing...</span>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* ─── Input Form with Mic and Speech-to-Text ─── */}
                        <div
                            data-lenis-prevent="true"
                            onWheel={(e) => e.stopPropagation()}
                            className="border-t border-slate-100 bg-white p-3.5 sm:p-4"
                        >
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSend();
                                }}
                                className="relative flex items-center"
                            >
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder={
                                        isListening
                                            ? 'Listening... (auto-stops after 15s of silence)'
                                            : 'Ask Recko anything about Prabu...'
                                    }
                                    className={`w-full rounded-full border bg-slate-50 py-3.5 pl-4.5 pr-24 text-[0.875rem] text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none transition-all ${
                                        isListening
                                            ? 'border-rose-400 ring-2 ring-rose-400/30 bg-rose-50/30'
                                            : 'border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20'
                                    }`}
                                />

                                <div className="absolute right-1.5 flex items-center gap-1">
                                    {/* Mic Speech-to-Text Button */}
                                    <button
                                        type="button"
                                        onClick={toggleListening}
                                        title={isListening ? 'Stop listening' : 'Click to speak (auto-stops after 15s silence)'}
                                        aria-label={isListening ? 'Stop listening' : 'Click to speak'}
                                        className={`relative flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${
                                            isListening
                                                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/40'
                                                : 'text-slate-400 hover:bg-slate-100 hover:text-sky-600'
                                        }`}
                                    >
                                        {isListening ? (
                                            <>
                                                <Mic className="h-4 w-4 animate-pulse" />
                                                <span className="absolute -inset-1 rounded-full border border-rose-400 animate-ping opacity-60" />
                                            </>
                                        ) : (
                                            <Mic className="h-4 w-4" />
                                        )}
                                    </button>

                                    {/* Send Button */}
                                    <button
                                        type="submit"
                                        disabled={!input.trim()}
                                        title="Send message"
                                        className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm transition-transform duration-200 hover:scale-105 active:scale-95 disabled:opacity-35 disabled:pointer-events-none"
                                    >
                                        <Send className="h-4 w-4" />
                                    </button>
                                </div>
                            </form>

                            <p className="mt-2 text-center text-[0.6875rem] text-slate-400 flex items-center justify-center gap-1.5">
                                {isListening ? (
                                    <span className="text-rose-500 font-medium animate-pulse">
                                        ● Listening — auto-stops if nothing is spoken for 15 seconds
                                    </span>
                                ) : (
                                    <span>Recko AI · Tap the mic to speak · Auto-stops after 15s silence</span>
                                )}
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
