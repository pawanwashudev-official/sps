'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
    { label: 'Happy Students', value: 1200, suffix: '+' },
    { label: 'Expert Faculty', value: 50, suffix: '+' },
    { label: 'Years of Excellence', value: 18, suffix: '+' }, // Est 2005 -> 2023+
    { label: 'Class 10 Pass Rate', value: 100, suffix: '%' },
];

export default function CampusPulse() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} style={{ padding: '6rem 2rem', background: 'var(--color-obsidian-light)' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
                {stats.map((stat, index) => (
                    <Counter key={index} stat={stat} isInView={isInView} />
                ))}
            </div>
        </section>
    );
}

function Counter({ stat, isInView }: { stat: any, isInView: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            const duration = 2000; // 2 seconds
            const steps = 60;
            const stepTime = duration / steps;
            const increment = stat.value / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= stat.value) {
                    setCount(stat.value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [isInView, stat.value]);

    return (
        <div style={{ textAlign: 'center' }}>
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ type: "spring", duration: 0.8 }}
                style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--color-gold)', marginBottom: '0.5rem' }}
            >
                {count}{stat.suffix}
            </motion.div>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-platinum)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {stat.label}
            </p>
        </div>
    );
}
