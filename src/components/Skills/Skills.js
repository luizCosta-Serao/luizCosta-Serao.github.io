import React from 'react'
import styles from "./Skills.module.css"
import html from '../../imgs/Skills/html.svg'
import css from '../../imgs/Skills/css.svg'
import js from '../../imgs/Skills/javascript.svg'
import figma from '../../imgs/Skills/figma.svg'
import react from '../../imgs/Skills/reactjs.svg'
import sass from '../../imgs/Skills/sass.svg'
import github from '../../imgs/Skills/github.svg'

const Skills = () => {
  return (
    <section id='skills' className={`${styles.skills} container`}>
      <h1>Habilidades</h1>
      <div className={styles.frontEnd}>
        <ul className={styles.skillsList}>
          <li>
            <img src={html} alt='HTML' />
            <p>HTML</p>
          </li>
          <li>
            <img src={css} alt='CSS' />
            <p>CSS</p>
          </li>
          <li>
            <img src={js} alt='JavaScript'/>
            <p>JavaScript</p>
          </li>
          <li>
            <img src={react} alt='ReactJS' />
            <p>ReactJS</p>
          </li>
          <li>
            <img src={figma} alt='Figma' />
            <p>Figma</p>
          </li>
          <li>
            <img src={sass} alt='SASS' />
            <p>Sass</p>
          </li>
          <li>
            <img src={github} alt='Github' />
            <p>Github</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skills