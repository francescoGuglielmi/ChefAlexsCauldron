import styles from './Divider.module.scss';

// Gold rule with a fleur-de-lis (cut from the menu artwork) at its centre.
export default function Divider() {
  return (
    <div className={`${styles.divider} reveal`} role="separator" aria-hidden="true">
      <span className={styles.fleur} />
    </div>
  );
}
