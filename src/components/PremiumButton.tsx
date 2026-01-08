'use client';
import { motion, HTMLMotionProps } from 'framer-motion';
import styles from './PremiumButton.module.css';

interface PremiumButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
}

export default function PremiumButton({ children, variant = 'primary', className = '', ...props }: PremiumButtonProps) {
    return (
        <motion.button
            className={`${styles.button} ${styles[variant]} ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            {...props}
        >
            <span className={styles.content}>{children}</span>
            <div className={styles.glow} />
        </motion.button>
    );
}
