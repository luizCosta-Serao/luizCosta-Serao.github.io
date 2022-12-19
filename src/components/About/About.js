import React from 'react'
import photoAbout from "../../imgs/about/Notifications.svg"
import styles from "./About.module.css"
import Button from "../Geral/Button"
import curriculo from "../../documents/Currículo LUIZ SERÃO.docx"

const About = () => {
  return (
    <section id="about" className={`${styles.about} container`}>
      <h1>Sobre Mim</h1>
      <p>Minha introdução</p>
      <img className='animationImage' src={photoAbout} alt="Foto do Sobre"/>
      <div className={`${styles.content}`}>
        <p>Sou desenvolvedor Front-End, desenvolvo sites com HTML, CSS, JavaScript e React.</p>
        <p>Comecei a estudar em janeiro de 2022 e busco um emprego onde posso trabalhar com o que amo e crescer junto com a empresa, pois acredito que estou preparado para trabalhar como Front-End Junior</p>
        <a download="curriculo" href={curriculo}>
          <Button>Download CV</Button>
        </a>
      </div>
    </section>
  )
}

export default About