import React from 'react'
import logo from '../imgs/logo.svg'
import styles from "./Header.module.css"
import account from "../imgs/account.svg"
import home from "../imgs/home.svg"
import document from "../imgs/document.svg"
import image from "../imgs/image.svg"
import call from "../imgs/call.svg"

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false)

  return (
    <header className={`${styles.header} container ativo`}>
      <img className={styles.logo} src={logo} alt='Luiz Costa'/>
      <button className={styles.buttonMenu} onClick={() => setShowMenu(!showMenu)}></button>
      <nav className={`${styles.nav} ${showMenu ? styles.active : ''}`}>
        <ul>
          <li>
            <img src={home} alt='Home'/>
            <a href='#home'>Home</a>
          </li>
          <li>
            <img src={account} alt="Sobre"/>
            <a href='#about'>Sobre</a>
          </li>
          <li>
            <img src={document} alt="Habilidades"/>
            <a href='#skills'>Habilidades</a>
          </li>
          <li>
            <img src={image} alt="Portfólio"/>
            <a href='#portfolio'>Projetos</a>
          </li>
          <li>
            <img src={call} alt="contato"/>
            <a href='#contact'>Contato</a>
          </li>
        </ul>
      </nav>
    </header> 
  )
}

export default Header