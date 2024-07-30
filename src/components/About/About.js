import React from 'react'
import styles from "./About.module.css"
import Button from "../Geral/Button"
import curriculo from "../../documents/curr-luiz.pdf"

const About = () => {
  return (
    <section id="about" className={`${styles.about} container`}>
      <h1>Educação</h1>
      <div className={styles.ensinoSuperior}>
        <h2>Curso Superior</h2>
        <p><b>Instituição:</b> Descomplica</p>
        <p><b>Curso:</b> Análise e Desenvolvimento de sistemas</p>
        <p><b>Início:</b> 07/2024 - 1° Semestre</p>
        <a className={styles.curriculo} download="curriculo" href={curriculo}>
          <Button>Download CV</Button>
        </a>
      </div>
      <ul className={`${styles.cursosComplementares}`}>
        <h2>Cursos Complementares</h2>
        <li>
          <h2>Desenvolvimento Web Completo</h2>
          <p>Em Andamento</p>
        </li>
        <li>
          <h2>React Completo</h2>
          <p>Concluído</p>
        </li>
        <li>
          <h2>TypeScript para Iniciantes</h2>
          <p>Concluído</p>
        </li>
        <li>
          <h2>React com TypeScript</h2>
          <p>Concluído</p>
        </li>
        <li>
          <h2>JavaScript Completo ES6</h2>
          <p>Concluído</p>
        </li>
        <li>
          <h2>WordPress como CMS</h2>
          <p>Concluído</p>
        </li>
        <li>
          <h2>Next.js</h2>
          <p>Concluído</p>
        </li>
        <li>
          <h2>JavaScript e jQuery</h2>
          <p>Concluído</p>
        </li>
        <li>
          <h2>HTML e CSS para iniciantes</h2>
          <p>Concluído</p>
        </li>
        <li>
          <h2>CSS Flexbox</h2>
          <p>Concluído</p>
        </li>
        <li>
          <h2>CSS Grid Layout</h2>
          <p>Concluído</p>
        </li>
      </ul>
    </section>
  )
}

export default About