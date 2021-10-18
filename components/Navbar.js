import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'
import Button from './Button'
import { FiAlignRight, FiX } from 'react-icons/fi'
import Image from 'next/image'

export default function Navbar() {
  function openNav() {
    document.getElementById('myNav').style.width = '100%'
  }
  function closeNav() {
    document.getElementById('myNav').style.width = '0%'
  }
  return (
    <header className={styles.header}>
      <div id="myNav" className={styles.overlay}>
        <FiX className={styles.closebtn} onClick={closeNav} />
        <div className={styles.overlay_content}>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Pages</Link>
          <Link href="#">Cart(0)</Link>
        </div>
      </div>

      <div className={styles.logo}>
        <p>Dark X</p>
        <Image src="/assets/icons/logo.svg" alt="logo" width="40" height="40" />
      </div>
      <div className={styles.nav_links}>
        <Link href="#">Home</Link>
        <Link href="#">About</Link>
        <Link href="#">Pricing</Link>
        <Link href="#">Pages</Link>
        <Link href="#">Cart(0)</Link>
      </div>
      <div className={styles.auth_container}>
        <Link href="#">sign in</Link>
        <Button>Get Started</Button>
      </div>
      <FiAlignRight size={26} className={styles.nav_icon} onClick={openNav} />
    </header>
  )
}
