import React from 'react'
import github from "../imgs/social/github.svg"
import linkedin from "../imgs/social/linkedin.svg"
import instagram from "../imgs/social/instagram.svg"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.bg}>
      <section className={`${styles.footer} container`}>
        <h1>Luiz Serão</h1>
        <ul className={styles.links}>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#sobre'>Sobre</a>
          </li>
          <li>
            <a href='#habilidades'>Habilidades</a>
          </li>
          <li>
            <a href='#educacao'>Educação</a>
          </li>
          <li>
            <a href='#portfolio'>Portfólio</a>
          </li>
        </ul>
        <div className={styles.social}>
          <a href='https://github.com/luizCosta-Serao'>
            <img src={github} alt='github'/>
          </a>
          <a href='https://www.google.com'>
            <img src={instagram} alt='instagram'/>
          </a>
          <a href='https://www.google.com'>
            <img src={linkedin} alt='linkedin'/>
          </a>
        </div>
        <p>Luiz Serão. Alguns direitos reservados.</p>
      </section>
    </footer>
  )
}

export default Footer