import styles from '../styles/Input.module.scss'

export default function Input(props) {
  return <input id="inputID" type="text" {...props} className={styles.input} />
}
