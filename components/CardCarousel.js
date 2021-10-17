import styles from '../styles/CardCarousel.module.scss'
import { useState } from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

export function CardCarousel({ slides }) {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }
  return (
    <section className={styles.slider}>
      <FaArrowRight className={styles.right_arrow} onClick={nextSlide} />
      <FaArrowLeft className={styles.left_arrow} onClick={prevSlide} />
      {slides.map((item, index) => {
        return (
          <div
            className={styles[index === current ? 'slide_active' : 'slide']}
            key={index}
          >
            <div>
              {index === current && (
                <div className={styles.container}>
                  <div>
                    <p className={styles.comment}>“{item.comment}”</p>
                    <p className={styles.description}>{item.description}</p>
                    <div>
                      <p className={styles.name}>{item.name}</p>
                      <p className={styles.job}>{item.job}</p>
                    </div>
                  </div>
                  <img src={item.image} alt="img" />
                </div>
              )}
            </div>
          </div>
        )
      })}
      {/* {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? styles.slide_active : styles.slide}
            key={index}
          >
            {index === current && (
              <img src={slide.image} className={styles.image} />
            )}
          </div>
        )
      })} */}
    </section>
  )
}
