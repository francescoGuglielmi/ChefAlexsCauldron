import Image from "next/image";
import styles from './Homepage.module.scss';

export default function Homepage() {
  return (
    <div>
      <div className={styles.imageWrapper}>
        <Image 
          src="/images/alex_logo.png" 
          alt="Alex with the Cauldron" 
          width={1200}
          height={800}
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className={styles.slogan}>
        <h2>
          <span className={styles.titleHighlight}>M</span>
          edieval Feast... With a Modern Twist</h2>
      </div>
    </div>
  );
}
