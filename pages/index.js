import Navbar from '../components/Navbar'
import Introduction from '../layouts/Introduction'
import Feature from '../layouts/Feature'
import About from '../layouts/About'
import Started from '../layouts/Started'
import Review from '../layouts/Review'
import Footer from '../layouts/Footer'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Navbar />
      <div className="padding_container">
        <section id="home">
          <Introduction />
        </section>
        <section id="about">
          <Feature />
        </section>
        <section id="pricing">
          <About />
        </section>
        <section id="pages">
          <Started />
        </section>
        <Review />
      </div>
      <Footer />
    </>
  )
}
