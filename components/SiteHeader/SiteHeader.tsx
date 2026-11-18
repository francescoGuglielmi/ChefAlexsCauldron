import Link from 'next/link';
import NavLinks from './NavLinks';
import styles from './SiteHeader.module.scss';

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>
          <Link href="/" className={styles.titleLink}>Chef Alex&apos;s Cauldron</Link>
        </h1>
      </div>
      <nav className={styles.navigation} aria-label="Main">
        <NavLinks />
      </nav>
    </header>
  );
}
