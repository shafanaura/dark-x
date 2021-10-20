import Button from '../components/Button'
import CardCategory from '../components/CardCategory'
import styles from '../styles/Started.module.scss'

export default function Started() {
  return (
    <div className={styles.container}>
      <div
        className={styles.left_content}
        data-aos="fade-up-right"
        data-aos-duration="1500"
      >
        <h2>How to get started</h2>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ipsum
          risus urna at. Curabitur non lectus eget magna.
        </span>
        <Button size="large">Get Started</Button>
      </div>
      <div className={styles.right_content}>
        <CardCategory
          img="mobile-1.svg"
          type="img"
          variant="bg"
          title="Create your account"
          description="Lorem ipsum dolor sit amet, elit. Imperdiet at at varius commodo pharetra odio sollicitudin. "
          text="1"
        />
        <CardCategory
          img="mobile-2.svg"
          type="img"
          variant="bg"
          title="Customize your profile"
          description="Lorem ipsum dolor sit amet, elit. Imperdiet at at varius commodo pharetra odio sollicitudin. "
          text="2"
        />
        <CardCategory
          img="mobile-3.png"
          type="img"
          variant="bg"
          title="Customize your profile"
          description="Lorem ipsum dolor sit amet, elit. Imperdiet at at varius commodo pharetra odio sollicitudin. "
          text="3"
        />
      </div>
    </div>
  )
}
