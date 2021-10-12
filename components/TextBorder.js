import styles from '../styles/TextBorder.module.scss';

export default function TextBorder({ icon, text }) {
  return icon !== '' ? (
    <img
      src={`/assets/icons/${icon}.svg`}
      alt="icon"
      className={styles.property}
    />
  ) : (
    <p className={styles.property}>{text}</p>
  );
}
