import styles from '../styles/Home.module.scss'
import Head from 'next/Head'
import Navbar from '../components/Navbar'
import Introduction from '../layouts/Introduction'
import Feature from '../layouts/Feature'
import About from '../layouts/About'
import Started from '../layouts/Started'
import Review from '../layouts/Review'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dark X</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className="padding_container">
        <Introduction />
        <Feature />
        <About />
        <Started />
        <Review />
      </div>
      <div style={{ marginTop: 100 }} />
    </div>
  )
}
