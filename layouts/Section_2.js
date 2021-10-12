import Button from '../components/Button';
import CardCategory from '../components/CardCategory';
import styles from '../styles/Section_2.module.scss';

export default function Section_2() {
  return (
    <div className="padding__container">
      <div className={styles.container}>
        <div className={styles.content}>
          <CardCategory
            variant="bg"
            direction="col"
            icon="arrow"
            title="Realtime Trading"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          />
          <CardCategory
            variant="bg"
            direction="col"
            icon="chart"
            title="Advanced Charts"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          />
          <CardCategory
            variant="bg"
            direction="col"
            icon="security"
            title="Enterprise Grade Security"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          />
          <CardCategory
            variant="bg"
            direction="col"
            icon="chart-up"
            title="ETFs and stocks"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          />
          <CardCategory
            variant="bg"
            direction="col"
            icon="bag"
            title="Currencies & Commodities"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          />
          <CardCategory
            variant="bg"
            direction="col"
            icon="bitcoin"
            title="Cyrptocurrencies"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          />
        </div>
      </div>
      <div className={styles.btn__container}>
        <Button size="large">Get Started</Button>
        <Button size="large" variant="secondary">
          Browse Features
        </Button>
      </div>
    </div>
  );
}
