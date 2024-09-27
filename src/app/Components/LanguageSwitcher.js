'use client'

import { usePathname, useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  const changeLanguage = (newLocale) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <div className={styles.languageSwitcher}>
      <select 
        onChange={(e) => changeLanguage(e.target.value)} 
        defaultValue={params?.lang || 'en'}
        className={styles.select}
      >
        <option value="en">EN</option>
        <option value="ja">日本語</option>
        <option value="ko">한국어</option>
        <option value="ru">RU</option>
        <option value="de">DE</option>
        <option value="fr">FR</option>
        <option value="it">IT</option>
        <option value="es">ES</option>
        <option value="zh">中文</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;