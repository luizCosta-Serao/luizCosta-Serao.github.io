import React from 'react'
import styles from "./Certificates.module.css"

const Certificates = ({title, hours, teacher}) => {
  return (
    <li className={styles.certificate}>
      <h3>{title}</h3>
      <span>{hours}</span>
      <p>{teacher}</p>
    </li>
  )
}

export default Certificates