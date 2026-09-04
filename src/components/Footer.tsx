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

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <p>&copy; {new Date().getFullYear()} Students Public School. All rights reserved.</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexDirection: 'column' }}>
                        <h4 style={{ color: 'var(--color-platinum)' }}>About Developer</h4>
                        <a
                            href="https://pawanwashudev.neubofy.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: '0.5rem 1rem',
                                background: 'var(--color-gold)',
                                color: 'var(--color-obsidian)',
                                borderRadius: '0.5rem',
                                textDecoration: 'none',
                                fontWeight: 'bold'
                            }}
                        >
                            Visit My Portfolio
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
