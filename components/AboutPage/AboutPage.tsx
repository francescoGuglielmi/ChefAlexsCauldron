import Divider from '@/components/Divider/Divider';
import styles from './AboutPage.module.scss';

export default function AboutPage() {
  return (
    <section className={styles.about}>
      <h2 className={styles.title}>
        <span className={styles.titleHighlight}>T</span>he Chef
      </h2>

      <div className={styles.content}>
        <p className={`${styles.dropCap} reveal`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        <p className="reveal">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <Divider />

        <h3 className={`${styles.subtitle} reveal`}>
          <span className={styles.titleHighlight}>T</span>he Experience
        </h3>
        <p className={`${styles.dropCap} reveal`}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
          illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.
        </p>
        <p className="reveal">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt.
        </p>
      </div>
    </section>
  );
}
