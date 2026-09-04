'use client';
import Link from 'next/link';
import NextImage from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import PremiumButton from './PremiumButton';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About Us' },
        { href: '#admissions', label: 'Admissions' },
        { href: '#contact', label: 'Contact' },
    ];

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <motion.nav
            className={`${styles.navbar} glass-panel`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`container ${styles.container}`}>
                <Link href="#home" className={styles.logo} onClick={(e) => handleScroll(e, '#home')}>
                    <div style={{ position: 'relative', width: '50px', height: '50px', marginRight: '15px' }}>
                        <NextImage
                            src="/spslogo.JPG"
                            alt="SPS Logo"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    <span><span className="text-gradient-gold">Students</span> Public School</span>
                </Link>

                {/* Desktop Menu */}
                <div className={styles.navActions}>
                    <div className={styles.links}>
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={styles.link}
                                onClick={(e) => handleScroll(e, link.href)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <PremiumButton variant="primary" onClick={() => document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' })}>
                        Apply Now
                    </PremiumButton>
                </div>

                {/* Mobile Toggle */}
                <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle menu">
                    <span className={styles.bar} style={{ transform: isOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }} />
                    <span className={styles.bar} style={{ opacity: isOpen ? 0 : 1 }} />
                    <span className={styles.bar} style={{ transform: isOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }} />
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={styles.mobileLink}
                            onClick={(e) => handleScroll(e, link.href)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div style={{ marginTop: '2rem' }}>
                        <PremiumButton variant="primary" onClick={() => { setIsOpen(false); document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' }); }}>
                            Apply Now
                        </PremiumButton>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
