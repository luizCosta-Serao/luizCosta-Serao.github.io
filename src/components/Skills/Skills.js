import React from 'react'
import styles from "./Skills.module.css"
import html from '../../imgs/Skills/html.svg'
import css from '../../imgs/Skills/css.svg'
import js from '../../imgs/Skills/javascript.svg'
import figma from '../../imgs/Skills/figma.svg'
import react from '../../imgs/Skills/reactjs.svg'
import sass from '../../imgs/Skills/sass.svg'
import github from '../../imgs/Skills/github.svg'
import typescript from '../../imgs/Skills/typescript.svg'
import nodejs from '../../imgs/Skills/nodejs.svg'
import mongodb from '../../imgs/Skills/mongodb.svg'
import nextjs from '../../imgs/Skills/nextjs.svg'
import jquery from '../../imgs/Skills/jquery.svg'
import php from '../../imgs/Skills/php.svg'
import mysql from '../../imgs/Skills/mysql.svg'

const Skills = () => {
  return (
    <section id='skills' className={`${styles.skills} container`}>
      <h1>Habilidades</h1>
      <div className={styles.frontEnd}>
        <ul className={styles.skillsList}>
          <li>
            <img src={html} alt='HTML' />
          </li>
          <li>
            <img src={css} alt='CSS' />
          </li>
          <li>
            <img src={js} alt='JavaScript'/>
          </li>
          <li>
            <img src={react} alt='ReactJS' />
          </li>
          <li>
            <img src={typescript} alt='TypeScript' />
          </li>
          <li>
            <img src={figma} alt='Figma' />
          </li>
          <li>
            <img src={sass} alt='SASS' />
          </li>
          <li>
            <img src={github} alt='Github' />
          </li>
          <li>
            <img src={nodejs} alt='Node' />
          </li>
          <li>
            <img src={mongodb} alt='MongoDB' />
          </li>
          <li>
            <img src={nextjs} alt='Next' />
          </li>
          <li>
            <img src={jquery} alt='JQuery' />
          </li>
          <li>
            <img src={php} alt='PHP' />
          </li>
          <li>
            <img src={mysql} alt='MySql' />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skills