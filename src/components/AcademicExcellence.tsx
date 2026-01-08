'use client';
import { motion } from 'framer-motion';

export default function AcademicExcellence() {
    const features = [
        {
            title: "Premium Facilities",
            description: "From Horse Riding and Archery to a Splash Pool and Robotics Lab, we offer 43+ world-class amenities."
        },
        {
            title: "ATAL Tinkering Lab",
            description: "Fostering curiosity, creativity, and imagination in young minds; inculcating skills such as design mindset, computational thinking, and physical computing."
        },
        {
            title: "Nursery to Class 10",
            description: "A complete educational journey from early childhood foundation to secondary school excellence, affiliated with CBSE."
        },
        {
            title: "Expert Faculty",
            description: "Led by Principal Birendra Singh, learn from Bihta's best educators dedicated to nurturing every student's potential."
        }
    ];

    return (
        <section style={{ padding: '8rem 2rem' }} className="container">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '4rem', textAlign: 'center' }}
            >
                Why <span className="text-gradient-gold">SPS Bihta?</span>
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-panel"
                        style={{ padding: '2.5rem', borderRadius: '1rem' }}
                        whileHover={{ y: -10 }}
                    >
                        <h3 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', marginBottom: '1rem' }}>{feature.title}</h3>
                        <p style={{ lineHeight: 1.6, color: 'var(--color-platinum)', opacity: 0.9 }}>{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
