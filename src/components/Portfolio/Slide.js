import React, { useRef } from 'react'
import styles from "./Slide.module.css"

const Slide = ({slides}) => {
  const [position, setPosition] = React.useState(0)
  const [active, setActive] = React.useState(0)
  const currentRef = useRef()
  React.useEffect(() => {
    const {width} = currentRef.current.getBoundingClientRect()
    setPosition(-(width * active))

    window.addEventListener("resize", () => {
      const {width} = currentRef.current.getBoundingClientRect()
      setPosition(-(width * active))
    })
  },[active])

  function slidePrev() {
    if(active > 0) setActive(active - 1)
  }

  function slideNext() {
    if(active < slides.length - 1) setActive(active + 1)
  }
  
  return (
    <div className={styles.container}>
      <ul ref={currentRef} className={styles.content} style={{transform:`translateX(${position}px)`}}>
        {slides.map((slide, index) =>
          <li className={styles.item} key={index}>
            <h4>{slide.text}</h4>
            <a target="__blank" href={slide.href}>
              {slide.img}
            </a>
          </li>
        )}
      </ul>
      <nav className={styles.nav}>
        <button onClick={slidePrev}>{`<`}</button>
        <button onClick={slideNext}>{`>`}</button>
      </nav>
    </div>
  )
}

export default Slide