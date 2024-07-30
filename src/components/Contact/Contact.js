import React from 'react'
import email from "../../imgs/Contact/message.svg"
import wathsapp from "../../imgs/Contact/whatsapp.svg"
import messenger from "../../imgs/Contact/facebook-messenger.svg"
import arrow from "../../imgs/Contact/right-arrow.svg"
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <section id='contact' className={`${styles.contact} container`}>
      <div className={styles.methodContact}>
        <h1>Entre em Contato</h1>
        <ul>
          <li>
            <img src={email} alt="email"/>
            <h3>Email</h3>
            <p>luiz.asdc@hotmail.com</p>
            <a href="mailto:luiz.asdc@hotmail.com" target="__blank">
              Envie um Email
              <img src={arrow} alt="seta"/>
            </a>
          </li>

          <li>
            <img src={wathsapp} alt="wathsapp"/>
            <h3>Wathsapp</h3>
            <p>+55 (44) 98809-9490</p> 
            <a href='https://wa.me/5544988099490' target="__blank">
              Mande uma Mensagem
              <img src={arrow} alt="seta"/>
            </a>
          </li>

          <li>
            <img src={messenger} alt="messenger"/>
            <h3>Messenger</h3>
            <p>luiz.asdc</p>
            <a href='http://m.me/luiz.asdc' target="__blank">
              Mande uma mensagem
              <img src={arrow} alt="seta"/>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact