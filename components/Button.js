import styles from '../styles/Button.module.scss';

const TYPE = ['primary', 'secondary', 'white', 'white-outlined'];
const SIZE = ['small', 'medium', 'large'];

export default function Button({ variant, size, children }, props) {
  const checkBtnType = TYPE.includes(variant) ? variant : TYPE[0];
  const checkBtnSize = SIZE.includes(size) ? size : SIZE[1];
  return (
    <button
      {...props}
      className={`${styles.btn} ${styles[checkBtnType]} ${styles[checkBtnSize]}`}
    >
      {children}
    </button>
  );
}
