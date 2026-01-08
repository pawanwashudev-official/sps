'use client';
import Link from 'next/link';
import NextImage from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import PremiumButton from './PremiumButton';
import styles from './Navbar.module.css';

const Navbar = () => {
    const pathname = usePathname();

    const links = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About Us' },
        { href: '#admissions', label: 'Admissions' },
        { href: '#contact', label: 'Contact' },
    ];

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
            </div>
        </motion.nav>
    );
};

export default Navbar;
