import Link from 'next/link';
import styles from './SiteHeader.module.scss';

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>Chef Alex&apos;s Cauldron</h1>
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link href="/">Home</Link></li>
          <li className={styles.navItem}><Link href="/about">About</Link></li>
          <li className={styles.navItem}><Link href="/menu">Menu</Link></li>
          <li className={styles.navItem}><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
