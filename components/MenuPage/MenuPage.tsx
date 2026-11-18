import styles from './MenuPage.module.scss';
import { menuSections } from './menuData';

export default function MenuPage() {
  return (
    <section className={styles.menu}>
      <div className={styles.page}>
        {/* Decorative frame, cut from the original menu artwork. */}
        <div className={styles.frame} aria-hidden="true">
          <div className={styles.frameTop} />
          <div className={styles.frameLeft} />
          <div className={styles.frameRight} />
          <div className={styles.frameBottom} />
        </div>

        <div className={styles.scroll}>
          {menuSections.map((section) => (
            <div key={section.title} className={styles.section}>
              <h2 className={`${styles.sectionTitle} ${section.italic ? styles.italic : ''}`}>
                {section.title}
              </h2>
              <ul className={styles.dishes}>
                {section.dishes.map((dish) => (
                  <li key={dish.name} className={styles.dish}>
                    <h3 className={styles.dishName}>{dish.name}</h3>
                    <p className={styles.dishDescription}>{dish.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <a className={styles.original} href="/images/menu.jpeg" target="_blank" rel="noopener">
            View the original printed menu
          </a>
        </div>
      </div>
    </section>
  );
}
