import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div style={{ marginBottom: '1rem' }}>
                    <h3 style={{ color: 'var(--color-gold)', marginBottom: '0.5rem' }}>Students Public School</h3>
                    <p>Managed by Aryan Soumya Educational Trust</p>
                </div>

                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '1rem' }}>
                    <div>
                        <h4 style={{ color: 'var(--color-platinum)', marginBottom: '0.5rem' }}>Contact</h4>
                        <p>+91 7004275302</p>
                        <p>+91 9079273585</p>
                        <p>schoolstudentpublic@gmail.com</p>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--color-platinum)', marginBottom: '0.5rem' }}>Address</h4>
                        <p>Near SPS Colony, HPCL</p>
                        <p>Lai Road, Bihta</p>
                        <p>Patna - 801103</p>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem', width: '100%' }}>
                    <p>&copy; {new Date().getFullYear()} Students Public School. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
