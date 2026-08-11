import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <Link href="/" className={styles.logo}>
          BLOG DE ENTRETENIMENTO
        </Link>
        <p className={styles.tagline}>Cultura Pop, Lifestyle & Tendências</p>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><Link href="/">Início</Link></li>
          <li><Link href="/">Pop Culture</Link></li>
          <li><Link href="/">Lifestyle</Link></li>
          <li><Link href="/">Entretenimento</Link></li>
        </ul>
      </nav>
    </header>
  );
}