import styles from '../styles/CardCategory.module.scss'
import TextBorder from './TextBorder'
import Image from 'next/image'

const VARIANT = ['nobg', 'bg']
const DIRECTION = ['col', 'row']

export default function CardCategory({
  icon,
  text,
  title,
  description,
  direction,
  variant,
  type,
  img,
}) {
  const checkVariant = VARIANT.includes(variant) ? variant : VARIANT[0]
  const checkDirection = DIRECTION.includes(direction)
    ? direction
    : DIRECTION[0]
  type = type === 'img' ? type : 'no-img'
  return (
    <div
      className={styles.parent_container}
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div
        className={`${styles[checkVariant]} ${styles[checkDirection]} ${styles.container} ${styles[type]}`}
      >
        <TextBorder icon={icon} text={text} />
        <div className={`${styles[checkDirection]}`}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      {type === 'img' && (
        <div className={styles.container_img}>
          <Image
            data-aos="fade-up"
            data-aos-duration="1500"
            height={300}
            width={180}
            src={`/assets/img/${img}`}
            alt="img"
          />
        </div>
      )}
    </div>
  )
}
