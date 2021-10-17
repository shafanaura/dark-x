import Button from '../components/Button'
import Input from '../components/Input'
import styles from '../styles/Footer.module.scss'

export default function Footer() {
  return (
    <>
      <hr />
      <div className={styles.container}>
        <div>
          <p className={styles.title}>Pages</p>
          <ul>
            <li>
              <a href="#">Home </a>
            </li>
            <li>
              <a href="#">About </a>
            </li>
            <li>
              <a href="#">Contact </a>
            </li>
            <li>
              <a href="#">Blog </a>
            </li>
            <li>
              <a href="#">Pricing </a>
            </li>
          </ul>
        </div>
        <div>
          <p className={styles.title}>Utility Pages</p>
          <ul>
            <li>
              <a href="#">Home </a>
            </li>
            <li>
              <a href="#">About </a>
            </li>
            <li>
              <a href="#">Contact </a>
            </li>
            <li>
              <a href="#">Blog </a>
            </li>
          </ul>
        </div>
        <div>
          <p className={styles.title}>Subscribe to our newsletter</p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <Input placeholder="Your email address" />
            <Button size="large">Subscribe</Button>
          </div>
        </div>
      </div>
      <hr />
      <p className={styles.copyright}>Develop by Shafa Naura</p>
    </>
  )
}
