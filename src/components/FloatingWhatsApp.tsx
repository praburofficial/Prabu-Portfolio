import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { AIChatModal } from './AIChatModal';

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

export function FloatingWhatsApp() {
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3.5 sm:bottom-8 sm:right-8">
        {/* ─── Recko AI Assistant Floating Button (Right above WhatsApp) ─── */}
        <div className="group relative">
          {/* Tooltip on hover */}
          <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-pill border border-sky-400/30 bg-slate-900/95 px-3 py-1 text-xs font-semibold text-white shadow-lg backdrop-blur-md opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-1">
            🤖 Ask Recko AI
          </span>

          <button
            type="button"
            onClick={() => setIsAIChatOpen(true)}
            aria-label="Ask Recko AI Assistant"
            className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full p-[2px] bg-gradient-to-tr from-sky-400 via-primary to-purple-600 shadow-[0_8px_24px_rgba(14,165,233,0.55)] transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_12px_28px_rgba(14,165,233,0.75)] active:scale-95 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
          >
            {/* Animated outer aura */}
            <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-sky-400 to-purple-500 opacity-60 blur-md animate-pulse" />

            <span className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[#020817]">
              <img
                src="/recko-robot.png"
                alt="Recko AI Humanoid Robot"
                width={64}
                height={64}
                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
              />
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center">
                <Sparkles className="h-3 w-3 text-sky-300 drop-shadow-[0_0_4px_rgba(56,189,248,0.9)] animate-pulse" />
              </span>
            </span>
          </button>
        </div>

        {/* ─── WhatsApp Floating Button ─── */}
        <a
          href="https://wa.me/919524815890"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_12px_28px_rgba(37,211,102,0.6)] sm:h-14 sm:w-14 lg:h-16 lg:w-16"
        >
          <WhatsAppIcon className="h-8 w-8 lg:h-10 lg:w-10" />
        </a>
      </div>

      {/* ─── AI Chat Drawer Modal ─── */}
      <AIChatModal isOpen={isAIChatOpen} onClose={() => setIsAIChatOpen(false)} />
    </>
  );
}
