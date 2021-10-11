import Button from '../components/Button';
import styles from '../styles/Section_1.module.scss';
import Image from 'next/Image';

export default function Section_1() {
  return (
    <div className={styles.container}>
      <p style={{ marginTop: 48 }}>Next-Gen Investing App</p>
      <p className={styles.gradient__text}>for modern investor</p>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam
        quam viverra purus tellus purus. Convallis fusce
      </span>
      <div className={styles.btn__container}>
        <Button size="large">Get Started</Button>
        <Button size="large" variant="secondary">
          Browse Features
        </Button>
      </div>
      <div className={styles.chart__container}>
        <Image
          src="/assets/img/chart-board.svg"
          alt="chart"
          width="1373"
          height="751"
        />
      </div>
    </div>
  );
}
