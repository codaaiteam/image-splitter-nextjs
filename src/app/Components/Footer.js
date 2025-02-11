// components/Footer.js
import Link from 'next/link';
import styles from '../page.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <div className={styles.footerSection}>
          <h4>Legal</h4>
          <Link href="/terms">Terms and Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/license">License Agreement</Link>
        </div>
        <div className={styles.footerSection}>
          <h4>Games & Tools</h4>
          <Link href="https://www.playsprunkiphase4.com" target="_blank" rel="noopener noreferrer">Play Sprunki Phase 4</Link>
          <Link href="https://www.blockblastsolvers.org" target="_blank" rel="noopener noreferrer">Block Blast Solver</Link>
          <Link href="https://www.miside-online.org" target="_blank" rel="noopener noreferrer">Miside Online Game</Link>
          <Link href="https://www.mochi1preview.com/" target="_blank" rel="noopener noreferrer">Mochi 1 Preview</Link>
        </div>
        <div className={styles.footerSection}>
          <h4>AI Services</h4>
          <Link href="https://c2story.com/" target="_blank" rel="noopener noreferrer">AI Generate Story</Link>
          <Link href="https://www.hailuoai.work" target="_blank" rel="noopener noreferrer">Hailuo AI Video</Link>
          <Link href="https://www.calories-calculator.cc" target="_blank" rel="noopener noreferrer">Panda Express Calories</Link>
        </div>
        <div className={styles.footerSection}>
          <h4>Contact</h4>
          <Link href="/contact">Contact Us</Link>
          <Link href="/support">Support</Link>
          <Link href="/faq">FAQ</Link>
        </div>
      </div>
      <div className={styles.copyright}>
        {new Date().getFullYear()} Image Splitter. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;