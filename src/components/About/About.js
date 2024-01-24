import React from 'react'
import photoAbout from "../../imgs/about/Notifications.svg"
import styles from "./About.module.css"
import Button from "../Geral/Button"
import curriculo from "../../documents/front_end.pdf"

const About = () => {
  return (
    <section id="about" className={`${styles.about} container`}>
      <h1>Sobre Mim</h1>
      <img className='animationImage' src={photoAbout} alt="Foto do Sobre"/>
      <div className={`${styles.content}`}>
        <p>Olá! Sou um desenvolvedor front-end apaixonado por criar experiências incríveis na web. Com foco em React, estou sempre em busca de novos desafios e oportunidades para aprimorar minhas habilidades e conhecimentos.</p>
        <p className={styles.job}>Se você está procurando um desenvolvedor front-end React apaixonado e comprometido, estou pronto para fazer parte do seu time!</p>
        <a className={styles.curriculo} download="curriculo" href={curriculo}>
          <Button>Download CV</Button>
        </a>
      </div>
    </section>
  )
}

export default About