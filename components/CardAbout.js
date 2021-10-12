import styles from '../styles/CardAbout.module.scss';

export default function CardAbout({
  title,
  children,
  description,
  col_content,
  align,
}) {
  align = align ? align : 'right';
  return (
    <div className={`${styles.container} ${styles[align]}`}>
      {align === 'left' ? (
        <>
          <div>{col_content}</div>
          <div>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
            <div className={styles.container__about}>{children}</div>
          </div>
        </>
      ) : (
        <>
          <div>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
            <div className={styles.container__about}>{children}</div>
          </div>
          <div>{col_content}</div>
        </>
      )}
    </div>
  );
}
