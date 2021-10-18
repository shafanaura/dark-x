import Button from '../components/Button'
import CardAbout from '../components/CardAbout'
import CardCategory from '../components/CardCategory'
import styles from '../styles/About.module.scss'
import Image from 'next/image'

const RightContent = (
  <div className={styles.container_img_right}>
    <Image width="651" height="444" src="/assets/img/dashboard.svg" alt="img" />
  </div>
)

const LeftContent = (
  <div className={styles.container_img_left}>
    <Image height={300} width={300} src="/assets/img/encrypt.svg" alt="img" />
  </div>
)

export default function About() {
  return (
    <div className={styles.container_content}>
      <CardAbout
        title="Real-Time Trading Like Never Before"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sit feugiat etiam risus, massa sit."
        col_content={RightContent}
      >
        <CardCategory
          direction="row"
          icon="clock"
          title="<1 Sec Operations"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sit feugiat etiam risus, massa sit."
        />
        <CardCategory
          direction="row"
          icon="no"
          title="No Commissions"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sit feugiat etiam risus, massa sit."
        />
      </CardAbout>
      <CardAbout
        align="left"
        title="Built-in Enterprise Encryption and Security"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sit feugiat etiam risus, massa sit."
        col_content={LeftContent}
      >
        <CardCategory
          direction="row"
          icon="clock"
          title="256-Bit AES Encryption"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sit feugiat etiam risus, massa sit."
        />
        <CardCategory
          direction="row"
          icon="no"
          title="Advanced Security Standards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sit feugiat etiam risus, massa sit."
        />
      </CardAbout>
      <div className={styles.subscribe_container}>
        <p>Create your account and start trading today</p>
        <div>
          <Button variant="white" size="large">
            Get Started
          </Button>
          <Button variant="white-outlined" size="large">
            View Pricing
          </Button>
        </div>
      </div>
    </div>
  )
}
