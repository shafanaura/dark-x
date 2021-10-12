import styles from '../styles/CardCategory.module.scss';
import TextBorder from './TextBorder';

const VARIANT = ['nobg', 'bg'];
const DIRECTION = ['col', 'row'];

export default function CardCategory({
  icon,
  title,
  description,
  direction,
  variant,
}) {
  const checkVariant = VARIANT.includes(variant) ? variant : VARIANT[0];
  const checkDirection = DIRECTION.includes(direction)
    ? direction
    : DIRECTION[0];
  return (
    <div
      className={`${styles[checkVariant]} ${styles[checkDirection]} ${styles.container}`}
    >
      <TextBorder icon={icon} />
      <div className={`${styles[checkDirection]}`}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
