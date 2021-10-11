import styles from '../styles/Button.module.scss'

export default function Button(props) {
  return (
    <button {...props} className={styles['btn-primary']}>
      {props.children}
    </button>
  )
}
