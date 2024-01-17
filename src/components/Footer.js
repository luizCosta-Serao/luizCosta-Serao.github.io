import React from 'react'
import github from "../imgs/social/github.svg"
import linkedin from "../imgs/social/linkedin.svg"
import styles from "./Footer.module.css"
import logo from '../imgs/logo.svg'

const Footer = () => {
  return (
    <footer className={styles.bg}>
      <section className={`${styles.footer} container ativo`}>
        <img className={styles.logo} src={logo} alt='Luiz Costa' />
        <ul className={styles.links}> 
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>Sobre</a>
          </li>
          <li>
            <a href='#skills'>Habilidades</a>
          </li>
          <li>
            <a href='#portfolio'>Projetos</a>
          </li>
          <li>
            <a href='#contact'>Contato</a>
          </li>
        </ul>
        <div className={styles.social}>
          <a target="__blank" href='https://github.com/luizCosta-Serao'>
            <img src={github} alt='github'/>
          </a>
          <a target="__blank" href='https://www.linkedin.com/in/luiz-antonio-205058230/'>
            <img src={linkedin} alt='linkedin'/>
          </a>
        </div>
        <p>Luiz Serão. Alguns direitos reservados.</p>
      </section>
    </footer>
  )
}

export default Footer