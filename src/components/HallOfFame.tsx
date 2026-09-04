'use client';
import { motion } from 'framer-motion';

export default function HallOfFame() {
    return (
        <section style={{ padding: '8rem 2rem', position: 'relative' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '4rem' }}
                >
                    Bihta&apos;s <span className="text-gradient-gold">#1 Choice</span> for Toppers
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {/* Card 1 */}
                    <AchievementCard
                        title="100% Pass Rate"
                        subtitle="Class 10 CBSE Results"
                        description="Consistent academic excellence year after year."
                    />
                    {/* Card 2 */}
                    <AchievementCard
                        title="District Toppers"
                        subtitle="Pride of Bihta"
                        description="Our students consistently secure top ranks in Patna district."
                    />
                    {/* Card 3 */}
                    <AchievementCard
                        title="5.0/5.0 Rating"
                        subtitle="Teacher Effectiveness"
                        description="Rated 'Excellent' by parents and students for our dedicated faculty."
                    />
                </div>
            </div>
        </section>
    );
}

function AchievementCard({ title, subtitle, description }: { title: string, subtitle: string, description: string }) {
    return (
        <motion.div
            className="glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            style={{ padding: '3rem', borderRadius: '1.5rem', textAlign: 'center' }}
        >
            <h3 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-gold)', marginBottom: '0.5rem' }}>{title}</h3>
            <h4 style={{ fontSize: '1.25rem', color: 'var(--color-platinum)', marginBottom: '1.5rem', fontWeight: 600 }}>{subtitle}</h4>
            <p style={{ opacity: 0.8, lineHeight: 1.6 }}>{description}</p>
        </motion.div>
    );
}
