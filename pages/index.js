import Head from 'next/Head'
import Navbar from '../components/Navbar'
import Introduction from '../layouts/Introduction'
import Feature from '../layouts/Feature'
import About from '../layouts/About'
import Started from '../layouts/Started'
import Review from '../layouts/Review'
import Footer from '../layouts/Footer'

export default function Home() {
  return (
    <div>
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
      <Footer />
    </div>
  )
}
