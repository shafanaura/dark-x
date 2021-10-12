import styles from '../styles/AboutContent.module.scss';
import TextBorder from './TextBorder';

export default function AboutContent({ icon, title, description }) {
  return (
    <div className={styles.container}>
      <TextBorder icon={icon} />
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
