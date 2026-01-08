'use client';
import { motion } from 'framer-motion';

export default function AboutUs() {
    return (
        <section style={{ padding: '8rem 2rem', background: 'var(--color-obsidian)' }} className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '2rem' }}>
                        Legacy of <span className="text-gradient-gold">Leadership</span>
                    </h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-platinum)', marginBottom: '1.5rem', opacity: 0.9 }}>
                        Established in **2005** by the **Aryan Soumya Educational Trust**, Students Public School has evolved into Bihta's beacon of educational excellence. Under the visionary leadership of **Chairman & Principal Birendra Singh**, we have consistently nurtured 'Leaders of Tomorrow'.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-platinum)', opacity: 0.9 }}>
                        Affiliated with **CBSE** (Central Board of Secondary Education), we offer a holistic curriculum from Nursery to Class 10, blending traditional values with modern pedagogy.
                    </p>
                </motion.div>

                {/* Image/Visual Placeholder */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-panel"
                    style={{ height: '400px', borderRadius: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}
                >
                    {/* Placeholder for School Building Image */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, var(--color-primary), var(--color-obsidian))', opacity: 0.5 }} />
                    <p style={{ position: 'relative', zIndex: 1, color: 'var(--color-gold)', fontSize: '1.5rem', fontWeight: 700 }}>
                        SPS Campus, Bihta
                    </p>
                    {/* If we had the real image URL, it would go here as an <img /> tag filling the container */}
                </motion.div>

            </div>
        </section>
    );
}
