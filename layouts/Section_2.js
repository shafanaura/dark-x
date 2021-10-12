import Button from '../components/Button';
import CardCategory from '../components/CardCategory';
import styles from '../styles/Section_2.module.scss';

export default function Section_2() {
  return (
    <>
      <div className={styles.container}>
        <CardCategory
          icon="arrow"
          title="Realtime Trading"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        />
        <CardCategory
          icon="chart"
          title="Advanced Charts"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        />
        <CardCategory
          icon="security"
          title="Enterprise Grade Security"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        />
        <CardCategory
          icon="chart-up"
          title="ETFs and stocks"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        />
        <CardCategory
          icon="bag"
          title="Currencies & Commodities"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        />
        <CardCategory
          icon="bitcoin"
          title="Cyrptocurrencies"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        />
      </div>
      <div className={styles.btn__container}>
        <Button size="large">Get Started</Button>
        <Button size="large" variant="secondary">
          Browse Features
        </Button>
      </div>
    </>
  );
}
