import styles from '../styles/Review.module.scss'
import { CardCarousel } from '../components/CardCarousel'
import SliderData from '../components/SliderData.json'

export default function Review() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>What our clients say</p>
      <CardCarousel slides={SliderData} />
    </div>
  )
}
