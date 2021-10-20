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
          <Link href="#home">
            <a onClick={closeNav}>Home</a>
          </Link>
          <Link href="#about">
            <a onClick={closeNav}>About</a>
          </Link>
          <Link href="#pricing">
            <a onClick={closeNav}>Pricing</a>
          </Link>
          <Link href="#pages">
            <a onClick={closeNav}>Pages</a>
          </Link>
          <Link href="#">
            <a onClick={closeNav}>Cart(0)</a>
          </Link>
        </div>
      </div>

      <div className={styles.logo}>
        <p>Dark X</p>
        <Image src="/assets/icons/logo.svg" alt="logo" width="40" height="40" />
      </div>
      <div className={styles.nav_links}>
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#pricing">Pricing</Link>
        <Link href="#pages">Pages</Link>
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
