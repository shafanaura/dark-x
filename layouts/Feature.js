import Button from '../components/Button'
import CardCategory from '../components/CardCategory'
import styles from '../styles/Feature.module.scss'

export default function Feature() {
  return (
    <div className="padding_container">
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
      <div className={styles.btn_container}>
        <Button size="large">Get Started</Button>
        <Button size="large" variant="secondary">
          Browse Features
        </Button>
      </div>
    </div>
  )
}
