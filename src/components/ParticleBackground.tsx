import { useEffect, useRef } from 'react';
import { cn } from '../lib/utils';

interface ParticleBackgroundProps {
    className?: string;
}

export function ParticleBackground({ className }: ParticleBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        interface Node {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
        }

        const nodesCount = Math.floor((window.innerWidth * window.innerHeight) / 15000);

        const nodes: Node[] = Array.from({ length: Math.min(Math.max(nodesCount, 40), 90) }).map(() => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            radius: Math.random() * 2 + 1,
        }));

        interface Pulse {
            from: Node;
            to: Node;
            progress: number;
            speed: number;
            color: string;
        }

        let pulses: Pulse[] = [];
        const colors = ['#00F5FF', '#8B5CF6', '#00FF9F'];

        const draw = () => {
            ctx.fillStyle = 'rgba(15, 15, 26, 0.4)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            nodes.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;

                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
            });

            ctx.lineWidth = 1;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 150) {
                        const opacity = 1 - Math.pow(dist / 150, 1.5);
                        ctx.strokeStyle = `rgba(0, 245, 255, ${opacity * 0.15})`;
                        const useXFirst = (i + j) % 2 === 0;

                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        if (useXFirst) {
                            ctx.lineTo(nodes[j].x, nodes[i].y);
                            ctx.lineTo(nodes[j].x, nodes[j].y);
                        } else {
                            ctx.lineTo(nodes[i].x, nodes[j].y);
                            ctx.lineTo(nodes[j].x, nodes[j].y);
                        }
                        ctx.stroke();

                        if (Math.random() < 0.001) {
                            pulses.push({
                                from: nodes[i],
                                to: nodes[j],
                                progress: 0,
                                speed: 0.01 + Math.random() * 0.015,
                                color: colors[Math.floor(Math.random() * colors.length)],
                            });
                        }
                    }
                }
            }

            nodes.forEach(node => {
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0, 255, 159, 0.4)';
                ctx.fill();
            });

            pulses = pulses.filter(pulse => {
                pulse.progress += pulse.speed;
                if (pulse.progress >= 1) return false;

                let px, py;
                const i = nodes.indexOf(pulse.from);
                const j = nodes.indexOf(pulse.to);
                const useXFirst = (i + j) % 2 === 0;

                if (pulse.progress < 0.5) {
                    const t = pulse.progress * 2;
                    if (useXFirst) {
                        px = pulse.from.x + (pulse.to.x - pulse.from.x) * t;
                        py = pulse.from.y;
                    } else {
                        px = pulse.from.x;
                        py = pulse.from.y + (pulse.to.y - pulse.from.y) * t;
                    }
                } else {
                    const t = (pulse.progress - 0.5) * 2;
                    if (useXFirst) {
                        px = pulse.to.x;
                        py = pulse.from.y + (pulse.to.y - pulse.from.y) * t;
                    } else {
                        px = pulse.from.x + (pulse.to.x - pulse.from.x) * t;
                        py = pulse.to.y;
                    }
                }

                ctx.beginPath();
                ctx.arc(px, py, 3, 0, Math.PI * 2);
                ctx.fillStyle = '#fff';
                ctx.shadowColor = pulse.color;
                ctx.shadowBlur = 15;
                ctx.fill();

                ctx.beginPath();
                ctx.arc(px, py, 1.5, 0, Math.PI * 2);
                ctx.fillStyle = pulse.color;
                ctx.fill();

                ctx.shadowBlur = 0;

                return true;
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className={cn("fixed inset-0 z-0 pointer-events-none overflow-hidden", className)}>
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-primary)_0%,_transparent_40%)] opacity-10" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-secondary)_0%,_transparent_40%)] opacity-10" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />
        </div>
    );
}
