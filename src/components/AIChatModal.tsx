import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, X, RotateCcw, ArrowUpRight } from 'lucide-react';
import { queryPortfolioAI } from '../data/aiKnowledgeBase';

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
            text: `👋 **Hi there! I'm Recko, Prabu R's Personal AI Assistant.**

I am an intelligent humanoid AI agent trained specifically on Prabu's full portfolio, engineering architecture, CEO leadership at Code Blaza Technology, 20+ shipped projects, and 33 credentials.

Ask me anything, or tap one of the suggested topics below!`,
            timestamp: 'Just now',
            suggestions: [
                '💼 What is your work experience?',
                '🚀 Tell me about your top projects',
                '⚡ What is your full tech stack?',
                '🏆 What certifications do you have?',
                '📞 How can I contact or hire Prabu?',
            ],
        },
    ]);

    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto-scroll on new messages
    useEffect(() => {
        if (isOpen) {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isTyping, isOpen]);

    // Focus input on open & lock background body & HTML scrolling
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 300);
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
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

    const handleSend = (textToSend?: string) => {
        const queryText = (textToSend || input).trim();
        if (!queryText) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            sender: 'user',
            text: queryText,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages((prev) => [...prev, userMsg]);
        if (!textToSend) setInput('');
        setIsTyping(true);

        // Realistic AI response delay with immediate answer calculation
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
        }, 400);
    };

    const handleReset = () => {
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
    };

    // Format simple markdown into bold and linebreaks
    const renderFormattedText = (rawText: string) => {
        return rawText.split('\n').map((line, idx) => {
            // Check for markdown links [text](url)
            const parts = line.split(/(\[.*?\]\(.*?\))/g);
            return (
                <p key={idx} className={line.trim() === '' ? 'h-2' : 'mb-1.5 leading-relaxed'}>
                    {parts.map((part, pIdx) => {
                        const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
                        if (linkMatch) {
                            return (
                                <a
                                    key={pIdx}
                                    href={linkMatch[2]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-sky-400 underline decoration-sky-400/40 hover:text-sky-300 hover:decoration-sky-300"
                                >
                                    {linkMatch[1]}
                                    <ArrowUpRight className="inline-block h-3.5 w-3.5 -translate-y-0.5 ml-0.5" />
                                </a>
                            );
                        }

                        // Bold formatting **text**
                        const boldParts = part.split(/(\*\*.*?\*\*)/g);
                        return boldParts.map((bPart, bIdx) => {
                            if (bPart.startsWith('**') && bPart.endsWith('**')) {
                                return (
                                    <strong key={bIdx} className="font-bold text-white">
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
                        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
                    />

                    {/* Chat Drawer / Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.94, y: 30 }}
                        transition={{ type: 'spring', damping: 28, stiffness: 350 }}
                        data-lenis-prevent="true"
                        onWheel={(e) => e.stopPropagation()}
                        onTouchMove={(e) => e.stopPropagation()}
                        className="relative z-10 flex h-[90vh] max-h-[720px] w-full max-w-[460px] flex-col overflow-hidden rounded-[26px] border border-sky-400/30 bg-[#020817]/95 shadow-[0_20px_60px_-15px_rgba(0,180,255,0.4)] backdrop-blur-2xl"
                    >
                        {/* ─── Header ─── */}
                        <div className="relative flex items-center justify-between border-b border-sky-400/15 bg-gradient-to-r from-sky-500/10 via-primary/10 to-transparent px-5 py-4">
                            {/* Ambient top glow */}
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />

                            <div className="flex items-center gap-3">
                                {/* Humanoid Robot Avatar */}
                                <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-primary to-purple-600 p-[2px] shadow-[0_0_18px_rgba(56,189,248,0.55)]">
                                    <div className="h-full w-full overflow-hidden rounded-[14px] bg-[#01040a]">
                                        <img
                                            src="/recko-robot.png"
                                            alt="Recko AI Humanoid Robot"
                                            width={44}
                                            height={44}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#020817] bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                                </div>

                                <div>
                                    <div className="flex items-center gap-1.5">
                                        <h3 className="font-display text-[1rem] font-bold text-white">Recko AI Assistant</h3>
                                        <Sparkles className="h-4 w-4 text-sky-400" />
                                    </div>
                                    <p className="text-[0.72rem] font-mono text-sky-300/80">Humanoid AI · Trained on Portfolio</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-1">
                                <button
                                    type="button"
                                    onClick={handleReset}
                                    title="Clear conversation"
                                    className="grid h-9 w-9 place-items-center rounded-full text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                                >
                                    <RotateCcw className="h-4 w-4" />
                                </button>
                                <button
                                    type="button"
                                    onClick={onClose}
                                    title="Close assistant"
                                    className="grid h-9 w-9 place-items-center rounded-full text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* ─── Messages Area (Isolated scrolling inside chatbox only) ─── */}
                        <div
                            data-lenis-prevent="true"
                            onWheel={(e) => e.stopPropagation()}
                            onTouchMove={(e) => e.stopPropagation()}
                            className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-5 space-y-4 text-[0.875rem]"
                        >
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                                >
                                    <div
                                        className={`max-w-[88%] rounded-[20px] px-4 py-3 sm:px-4.5 sm:py-3.5 ${
                                            msg.sender === 'user'
                                                ? 'bg-gradient-to-r from-sky-500 to-primary text-white shadow-md rounded-br-sm'
                                                : 'border border-sky-400/20 bg-slate-900/80 text-slate-200 shadow-sm rounded-tl-sm'
                                        }`}
                                    >
                                        {msg.sender === 'ai' ? (
                                            <div className="text-[0.84rem] text-slate-300">
                                                {renderFormattedText(msg.text)}
                                            </div>
                                        ) : (
                                            <p className="text-[0.875rem] font-medium leading-relaxed">{msg.text}</p>
                                        )}
                                    </div>

                                    <span className="mt-1 px-1 text-[0.6875rem] text-slate-500">{msg.timestamp}</span>

                                    {/* Follow-up suggestions */}
                                    {msg.suggestions && msg.suggestions.length > 0 && (
                                        <div className="mt-3 flex flex-wrap gap-1.5">
                                            {msg.suggestions.map((sug, sIdx) => (
                                                <button
                                                    key={sIdx}
                                                    type="button"
                                                    onClick={() => handleSend(sug)}
                                                    className="rounded-pill border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-[0.75rem] font-medium text-sky-300 transition-all duration-200 hover:border-sky-400 hover:bg-sky-500/25 hover:text-white active:scale-95"
                                                >
                                                    {sug}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Typing Indicator */}
                            {isTyping && (
                                <div className="flex items-center gap-2 text-slate-400">
                                    <div className="flex items-center gap-1.5 rounded-pill border border-sky-400/20 bg-slate-900/80 px-4 py-2">
                                        <span className="h-2 w-2 rounded-full bg-sky-400 animate-bounce" />
                                        <span className="h-2 w-2 rounded-full bg-sky-400 animate-bounce [animation-delay:0.2s]" />
                                        <span className="h-2 w-2 rounded-full bg-sky-400 animate-bounce [animation-delay:0.4s]" />
                                    </div>
                                    <span className="text-xs text-sky-400 font-mono">Recko is thinking...</span>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* ─── Input Form ─── */}
                        <div
                            data-lenis-prevent="true"
                            onWheel={(e) => e.stopPropagation()}
                            className="border-t border-sky-400/15 bg-slate-950/80 p-3 sm:p-4"
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
                                    placeholder="Ask Recko anything about Prabu..."
                                    className="w-full rounded-pill border border-sky-400/30 bg-slate-900/90 py-3 pl-4 pr-12 text-[0.875rem] text-white placeholder-slate-400 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim()}
                                    title="Send message"
                                    className="absolute right-1.5 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-primary text-white shadow-md transition-transform duration-200 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
                                >
                                    <Send className="h-4 w-4" />
                                </button>
                            </form>
                            <p className="mt-2 text-center text-[0.6875rem] text-slate-500">
                                Recko is tailored exclusively to Prabu R's experience, architecture, and portfolio.
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
