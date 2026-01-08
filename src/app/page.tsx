'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import PremiumButton from '@/components/PremiumButton';
import CampusPulse from '@/components/CampusPulse';
import AcademicExcellence from '@/components/AcademicExcellence';
import AboutUs from '@/components/AboutUs';
import HallOfFame from '@/components/HallOfFame';
import AdmissionsSection from '@/components/AdmissionsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <div style={{ minHeight: '200vh' }}>
      <section id="home" ref={targetRef} style={{ height: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        {/* Background Elements */}
        <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
          <div style={{
            position: 'absolute', top: '20%', left: '20%', width: '300px', height: '300px',
            background: 'var(--color-gold)', filter: 'blur(150px)', opacity: 0.15, borderRadius: '50%'
          }} />
          <div style={{
            position: 'absolute', bottom: '20%', right: '20%', width: '400px', height: '400px',
            background: 'var(--color-primary-light)', filter: 'blur(150px)', opacity: 0.1, borderRadius: '50%'
          }} />
        </div>

        <motion.div
          style={{ opacity, scale, y, textAlign: 'center', zIndex: 10, maxWidth: '800px', padding: '0 1rem' }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}
          >
            Bihta's Premier <span className="text-gradient-gold">Educational</span> Destination
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ fontSize: '1.25rem', color: 'var(--color-platinum)', opacity: 0.8, marginBottom: '2.5rem', maxWidth: '600px', marginInline: 'auto' }}
          >
            Managed by Aryan Soumya Educational Trust. Nurturing minds from Nursery to Class 10 in the heart of SPS Colony, Bihta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
          >
            <PremiumButton variant="primary" onClick={() => document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' })}>Explore Campus</PremiumButton>
            <PremiumButton variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Admissions Open</PremiumButton>
          </motion.div>
        </motion.div>
      </section>

      <div id="about">
        <AboutUs />
      </div>

      <HallOfFame />
      <CampusPulse />

      <section style={{ padding: '4rem 2rem' }} className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '2rem' }}>Experience <span className="text-gradient-gold">Excellence</span></h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '700px', color: 'var(--color-platinum)', margin: '0 auto' }}>
            Our curriculum is designed to challenge and inspire, fostering creativity, critical thinking, and a lifelong love of learning.
          </p>
        </motion.div>
      </section>

      <AcademicExcellence />
      <AdmissionsSection />
      <ContactSection />
    </div>
  );
}
