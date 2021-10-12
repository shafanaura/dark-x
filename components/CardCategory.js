import styles from '../styles/CardCategory.module.scss';
import TextBorder from './TextBorder';

export default function CardCategory({ icon, title, description }) {
  return (
    <div className={styles.container}>
      <TextBorder icon={icon} />
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
