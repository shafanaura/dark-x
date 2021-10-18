import styles from '../styles/TextBorder.module.scss'
import Image from 'next/image'

export default function TextBorder({ icon, text }) {
  return icon ? (
    <div className={styles.property}>
      <Image
        height="30"
        width="30"
        src={`/assets/icons/${icon}.svg`}
        alt="icon"
      />
    </div>
  ) : (
    <p className={styles.property}>{text}</p>
  )
}
