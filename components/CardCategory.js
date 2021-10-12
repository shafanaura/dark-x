import Image from 'next/image';
import styles from '../styles/CardCategory.module.scss';

export default function CardCategory({ icon, title, description }) {
  return (
    <div className={styles.container}>
      <img src={`/assets/icons/${icon}.svg`} alt="icon" />
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
