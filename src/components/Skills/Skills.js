import React from 'react'
import styles from "./Skills.module.css"

const Skills = () => {
  return (
    <section id='skills' className={`${styles.skills} container`}>
      <h1>Skills</h1>
      <p>Meu nível técnico</p>
      <div className={styles.frontEnd}>
        <h2>Front End</h2>
        <ul className={styles.skillsList}>
          <li>
            <p>HTML</p>
            <span>Avançado</span>
          </li>
          <li>
            <p>CSS</p>
            <span>Avançado</span>
          </li>
          <li>
            <p>JavaScript</p>
            <span>Intermediário</span>
          </li>
          <li>
            <p>React</p>
            <span>Intermediário</span>
          </li>
          <li>
            <p>Wordpress</p>
            <span>Intermediário</span>
          </li>
          <li>
            <p>Figma</p>
            <span>Intermediário</span>
          </li>
          <li>
            <p>Bootstrap</p>
            <span>Básico</span>
          </li>
          <li>
            <p>sass</p>
            <span>Básico</span>
          </li>
          <li>
            <p>NodeJS</p>
            <span>Iniciante</span>
          </li>
          <li>
            <p>MongoDB</p>
            <span>Iniciante</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skills