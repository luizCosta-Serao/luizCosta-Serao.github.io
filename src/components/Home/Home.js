import React from 'react'
import styles from "./Home.module.css"
import Social from './Social'
import github from "../../imgs/social/github.svg"
import linkedin from "../../imgs/social/linkedin.svg"
import photo from "../../imgs/home/Message-Sent.svg"
import whatsapp from "../../imgs/Contact/whatsapp_2.svg"
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
      </div> 
      <div className={styles.content}>
        <div className={styles.contentText}>
          <h1>Luiz Serão</h1>
          <p className={styles.typeAnimation}>Desenvolvedor Front End</p>
          <p>Bem-vindo ao meu portfólio! Aqui você encontrará informações e projetos desenvolvidos por mim, um entusiasta da programação e apaixonado por tecnologia.</p>
          <a className={styles.whatsapp} target="__blank" href='https://linkwhats.app/85893b'>
            <Button>
              Diga Olá
              <img src={whatsapp} alt="Whatsapp"/>
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