// components/Footer.js
import Link from 'next/link';
import styles from '../page.module.css'; // 更新为正确的相对路径

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/terms">Terms and Conditions</Link>
      <Link href="/privacy">Privacy Policy</Link>
      <Link href="/license">License Agreement</Link>
      <Link href="https://www.playsprunkiphrase4.com">Play Sprunki Phase 4</Link>

    </footer>
  );
};

export default Footer;