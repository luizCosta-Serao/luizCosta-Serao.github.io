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

        <Certificates 
          title="Curso WebMaster Front-End Completo"
          hours="81h"
          teacher="DankiCode"
        />

        <Certificates 
          title="Curso Front-End Completo 2.0"
          hours="10h"
          teacher="DankiCode"
        />

        <Certificates 
          title="JavaScript - Base"
          hours="10h"
          teacher="OneBitCode"
        />

        <Certificates 
          title="JavaScript - Orientação a Objetos"
          hours="4.5h"
          teacher="OneBitCode"
        />

        <Certificates 
          title="JavaScript - DOM"
          hours="4h"
          teacher="OneBitCode"
        />

        <Certificates 
          title="JavaScript - Moderno"
          hours="4.5h"
          teacher="OneBitCode"
        />

        <Certificates 
          title="UI Design para iniciantes"
          hours="34h"
          teacher="Origamid"
        />
      </ul>
    </section>
  )
}

export default Education