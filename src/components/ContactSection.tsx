'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import PremiumButton from './PremiumButton';

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

    const handleSendWhatsApp = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.phone || !formData.message) {
            alert('Please fill in Name, Phone, and Message to proceed.');
            return;
        }
        const text = `*New Admission Inquiry*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Message:* ${formData.message}`;
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/917004275302?text=${encodedText}`, '_blank');
    };

    const handleSendEmail = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in Name, Email, and Message to proceed.');
            return;
        }
        const subject = encodeURIComponent('New Admission Inquiry');
        const body = encodeURIComponent(`New Admission Inquiry\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`);
        window.open(`mailto:schoolstudentpublic@gmail.com?subject=${subject}&body=${body}`, '_blank');
    };

    return (
        <section id="contact" style={{ padding: '8rem 2rem' }} className="container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}
            >
                <div>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '2rem' }}>
                        Get in <span className="text-gradient-gold">Touch</span>
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-platinum)', marginBottom: '3rem' }}>
                        We&apos;d love to hear from you. Visit our campus or reach out digitally regarding admissions or inquiries.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <ContactButton
                            icon="📞"
                            title="Call Now"
                            label="+91 7004275302"
                            href="tel:+917004275302"
                            color="var(--color-gold)"
                        />
                        <ContactButton
                            icon="💬"
                            title="WhatsApp"
                            label="Chat with us"
                            href="https://wa.me/917004275302"
                            color="#25D366"
                        />
                        <ContactButton
                            icon="✉️"
                            title="Email Us"
                            label="schoolstudentpublic@..."
                            href="mailto:schoolstudentpublic@gmail.com"
                            color="var(--color-platinum)"
                        />
                        <ContactButton
                            icon="📍"
                            title="Visit Campus"
                            label="Get Directions"
                            href="https://www.google.com/maps/search/?api=1&query=Students+Public+School+Bihta"
                            color="var(--color-primary-light)"
                        />
                    </div>
                </div>

                <div className="glass-panel" style={{ padding: '3rem', borderRadius: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--color-gold)', marginBottom: '2rem' }}>Send a Message</h3>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            style={inputStyle}
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            style={inputStyle}
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            style={inputStyle}
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                        />
                        <textarea
                            placeholder="Message / Admission Inquiry"
                            rows={5}
                            style={inputStyle}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                        />
                        <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                            <PremiumButton variant="primary" onClick={handleSendWhatsApp}>
                                Send via WhatsApp
                            </PremiumButton>
                            <PremiumButton variant="secondary" onClick={handleSendEmail}>
                                Send via Email
                            </PremiumButton>
                        </div>
                    </form>
                </div>
            </motion.div>
        </section>
    );
}

const inputStyle = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    padding: '1rem',
    borderRadius: '0.5rem',
    color: 'white',
    width: '100%',
    fontFamily: 'inherit'
};

function ContactButton({ icon, title, label, href, color }: { icon: string, title: string, label: string, href: string, color: string }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass-panel"
                style={{
                    display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1rem 1.5rem',
                    borderRadius: '1rem', border: `1px solid ${color}40`, cursor: 'pointer'
                }}
            >
                <div style={{
                    background: `${color}20`, width: '50px', height: '50px', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem'
                }}>
                    {icon}
                </div>
                <div>
                    <h4 style={{ color: color, marginBottom: '0.2rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</h4>
                    <p style={{ color: 'var(--color-platinum)', fontWeight: 600 }}>{label}</p>
                </div>
            </motion.div>
        </a>
    );
}
