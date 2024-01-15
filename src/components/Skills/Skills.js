import React from 'react'
import styles from "./Skills.module.css"
import html from '../../imgs/Skills/html.svg'
import css from '../../imgs/Skills/css.svg'
import js from '../../imgs/Skills/javascript.svg'
import figma from '../../imgs/Skills/figma.svg'
import react from '../../imgs/Skills/reactjs.svg'
import sass from '../../imgs/Skills/sass.svg'
import styledComponents from '../../imgs/Skills/styled-components.svg'
import github from '../../imgs/Skills/github.svg'

const Skills = () => {
  return (
    <section id='skills' className={`${styles.skills} container`}>
      <h1>Skills</h1>
      <div className={styles.frontEnd}>
        <h2>Front End</h2>
        <ul className={styles.skillsList}>
          <li>
            <p>HTML</p>
            <img src={html} alt='HTML' />
          </li>
          <li>
            <p>CSS</p>
            <img src={css} alt='CSS' />
          </li>
          <li>
            <p>JavaScript</p>
            <img src={js} alt='JavaScript'/>
          </li>
          <li>
            <p>React</p>
            <img src={react} alt='ReactJS' />
          </li>
          <li>
            <p>Figma</p>
            <img src={figma} alt='Figma' />
          </li>
          <li>
            <p>Sass</p>
            <img src={sass} alt='SASS' />
          </li>
          <li>
            <p>Styled Components</p>
            <img src={styledComponents} alt='Styled Components' />
          </li>
          <li>
            <p>Github</p>
            <img src={github} alt='Github' />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skills