// components/Footer.js
import Link from 'next/link';
import styles from '../../app/page.module.css'; // 更新路径以指向正确的 CSS 模块文件

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/terms">Terms and Conditions</Link>
      <Link href="/privacy">Privacy Policy</Link>
      <Link href="/license">License Agreement</Link>
    </footer>
  );
};

export default Footer;