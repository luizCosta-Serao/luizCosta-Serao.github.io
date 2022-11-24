import React from 'react'
import Certificates from './Certificates'
import styles from "./Education.module.css"

const Education = () => {

  return (
    <section id='education' className={`${styles.education} container`}>
      <h1>Education</h1>
      <p>Minha jornada educativa</p>

      <ul>
        <Certificates 
          title="Curso HTML e CSS para iniciantes"
          hours="46h"
          teacher="Origamid"
        />

        <Certificates 
          title="CSS Flexbox"
          hours="6h"
          teacher="Origamid"
        />

        <Certificates 
          title="CSS Grid Layout"
          hours="10h"
          teacher="Origamid"
        />

        <Certificates 
          title="JavaScript Completo ES6"
          hours="74h"
          teacher="Origamid"
        />

        <Certificates 
          title="React Completo"
          hours="36h"
          teacher="Origamid"
        />
      </ul>
    </section>
  )
}

export default Education