'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function LiveBackground() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none', overflow: 'hidden' }}>
            {isMobile ? <MobileBackground /> : <DesktopBackground />}
        </div>
    );
}

function MobileBackground() {
    // Lightweight, CSS-based floating orbs for mobile (performance optimized)
    return (
        <div className="mobile-bg">
            <motion.div
                animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute', top: '20%', left: '10%',
                    width: '150px', height: '150px', borderRadius: '50%',
                    background: 'radial-gradient(circle, var(--color-gold) 0%, transparent 70%)',
                    filter: 'blur(40px)', opacity: 0.3
                }}
            />
            <motion.div
                animate={{ y: [0, 30, 0], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{
                    position: 'absolute', bottom: '30%', right: '10%',
                    width: '200px', height: '200px', borderRadius: '50%',
                    background: 'radial-gradient(circle, var(--color-primary-light) 0%, transparent 70%)',
                    filter: 'blur(50px)', opacity: 0.2
                }}
            />
        </div>
    );
}

function DesktopBackground() {
    // Richer particulate animation for desktop
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;

        const particles: { x: number, y: number, vx: number, vy: number, size: number, color: string }[] = [];
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                color: Math.random() > 0.5 ? '#D4AF37' : '#ffffff' // Gold or White
            });
        }

        let animationFrameId: number;

        const animate = () => {
            ctx.clearRect(0, 0, w, h);

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = w;
                if (p.x > w) p.x = 0;
                if (p.y < 0) p.y = h;
                if (p.y > h) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = 0.3; // Subtle
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            {/* Base Gradient Layers */}
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #0a0a0a 100%)' }} />
            <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0 }} />
        </>
    );
}
