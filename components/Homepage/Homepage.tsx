import Link from "next/link";
import HomepageLogo from "./HomepageLogo";
import styles from './Homepage.module.scss';

export default function Homepage() {
  return (
    <div className={styles.home}>
      <div className={styles.logoWrapper}>
        <HomepageLogo />
      </div>
      <div className={styles.slogan}>
        <h2>
          <span className={styles.titleHighlight}>M</span>
          edieval Feast... With a Modern Twist</h2>
      </div>

      <div className={styles.actions}>
        <Link href="/menu" className={styles.buttonOutline}>View the Feast</Link>

        {/* Wax seal: the main call to action. */}
        <Link href="/contact" className={styles.seal}>
          <span className={styles.sealSmall}>Book</span>
          <span className={styles.sealBig}>a Feast</span>
        </Link>
      </div>
    </div>
  );
}
