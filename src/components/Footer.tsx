import { Rocket } from 'lucide-react';

export function Footer() {
    return (
        <footer className="relative py-12 border-t border-white/10 mt-20 z-10 bg-black/50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <a href="#home" className="flex items-center gap-2 group">
                    <Rocket className="w-6 h-6 text-gray-500 group-hover:text-primary transition-colors" />
                    <span className="text-xl font-bold font-['Outfit'] tracking-wider text-gray-500 group-hover:text-white transition-colors">
                        PRABU
                    </span>
                </a>

                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} PRABU. All rights reserved.
                </p>

                <div className="flex gap-4 text-sm font-medium">
                    <a href="https://github.com/praburofficial" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-secondary transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/prabu-r12092005" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent transition-colors">LinkedIn</a>
                </div>
            </div>
            {/* Footer bottom glow */}
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </footer>
    );
}
