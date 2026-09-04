'use client';
import { motion } from 'framer-motion';
import PremiumButton from './PremiumButton';

export default function AdmissionsSection() {
    return (
        <section id="admissions" style={{ padding: '8rem 2rem', background: 'var(--color-obsidian-light)' }} className="container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
            >
                <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem' }}>
                    Join the <span className="text-gradient-gold">Legacy</span>
                </h2>
                <p style={{ fontSize: '1.2rem', lineHeight: 1.6, color: 'var(--color-platinum)', marginBottom: '3rem' }}>
                    Admissions open for Academic Session 2024-25 & 2025-26. From Nursery to Class 10, we invite bright minds to be part of our excellence.
                </p>

                <div className="glass-panel" style={{ padding: '3rem', borderRadius: '1.5rem', textAlign: 'left', marginBottom: '3rem' }}>
                    <h3 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Admission Procedure</h3>
                    <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-platinum)' }}>
                        <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                            <span style={{ color: 'var(--color-gold)' }}>01.</span> Registration (Online/Offline)
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                            <span style={{ color: 'var(--color-gold)' }}>02.</span> Entrance Test / Interaction
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                            <span style={{ color: 'var(--color-gold)' }}>03.</span> Document Verification
                        </li>
                        <li style={{ display: 'flex', gap: '1rem' }}>
                            <span style={{ color: 'var(--color-gold)' }}>04.</span> Fee Submission
                        </li>
                    </ul>
                </div>

                <PremiumButton variant="primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    Apply Now
                </PremiumButton>
            </motion.div>
        </section>
    );
}
