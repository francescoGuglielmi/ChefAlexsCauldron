"use client";

import Image from "next/image";
import { useState } from "react";
import styles from './Homepage.module.scss';

// Client component so the reveal only starts once the image has
// loaded, instead of playing while it's still downloading.
export default function HomepageLogo() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.logoStage}>
      <Image
        src="/images/alex_logo.png"
        alt="Alex with the Cauldron"
        width={1200}
        height={1534}
        className={`${styles.logo} ${loaded ? styles.logoVisible : ''}`}
        sizes="(max-width: 768px) 100vw, 50vw"
        loading="eager"
        onLoad={() => setLoaded(true)}
      />
      {/* Warm candlelight laid over the logo once it has appeared. */}
      <div className={`${styles.glow} ${loaded ? styles.glowVisible : ''}`} aria-hidden="true" />
    </div>
  );
}
