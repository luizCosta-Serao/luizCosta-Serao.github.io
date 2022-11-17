import React from 'react'
import styles from "./Social.module.css"


const Social = ({src, alt, href}) => {
  return (
    <>
      <a href={href} target="__blank">
        <img className={`${styles.img}`} src={src} alt={alt}/>
      </a>
    </>
  )
}

export default Social