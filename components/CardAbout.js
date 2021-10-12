import styles from '../styles/CardAbout.module.scss';
import AboutContent from './AboutContent';

export default function CardAbout() {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.title}>Real-Time Trading Like Never Before.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sit
          feugiat etiam risus, massa sit.
        </p>
        <div className={styles.container__about}>
          <AboutContent
            icon="clock"
            title="<1 Sec Operations"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sit feugiat etiam risus, massa sit."
          />
          <AboutContent
            icon="no"
            title="No Commissions"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sit feugiat etiam risus, massa sit."
          />
        </div>
      </div>
      <div>
        <p>Real-Time Trading Like Never Before.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sit
          feugiat etiam risus, massa sit.
        </p>
      </div>
    </div>
  );
}
