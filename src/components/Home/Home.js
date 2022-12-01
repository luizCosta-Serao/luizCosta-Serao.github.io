import React from 'react'
import styles from "./Home.module.css"
import Social from './Social'
import github from "../../imgs/social/github.svg"
import linkedin from "../../imgs/social/linkedin.svg"
import instagram from "../../imgs/social/instagram.svg"
import photo from "../../imgs/home/Message-Sent.svg"
import sendMessage from "../../imgs/home/telegram.svg"
import Button from '../Geral/Button'

const Home = () => {
  return (
    <section id="home" className={`${styles.home} container`}>
      <div className={styles.social}>
        <Social
          src={github}     
          alt="Github"
          href={"https://github.com/luizCosta-Serao"}
        />
        <Social
          src={linkedin}     
          alt="Linkedin"
          href={"https://www.linkedin.com/in/luiz-antonio-205058230/"}
        />
        <Social
          src={instagram}     
          alt="Instagram"
          href={"https://www.instagram.com/luiz_antoni.o/"}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <h1>Luiz Serão</h1>
          <span>Desenvolvedor Front End</span>
          <p>Sou um Desenvolvedor Front End com muita vontade de aprender e apaixonado por programação</p>
          <a target="__blank" href='https://xn--r1a.click/Luiz_Serao'>
            <Button>
              Diga Olá
              <img src={sendMessage} alt="Ícone de mensagem"/>
            </Button>
          </a>
        </div>
        <div className={`animationImage ${styles.contentPhoto}`}>
          <img src={photo} alt="Ilustração"/>
        </div>
      </div>
    </section>
  )
} 

export default Home