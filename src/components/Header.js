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
            <a onClick={() => setShowMenu(false)} href='#home'>Home</a>
          </li>
          <li>
            <img src={account} alt="Sobre"/>
            <a onClick={() => setShowMenu(false)} href='#about'>Educação</a>
          </li>
          <li>
            <img src={document} alt="Habilidades"/>
            <a onClick={() => setShowMenu(false)} href='#skills'>Habilidades</a>
          </li>
          <li>
            <img src={image} alt="Portfólio"/>
            <a onClick={() => setShowMenu(false)} href='#portfolio'>Projetos</a>
          </li>
          <li>
            <img src={call} alt="contato"/>
            <a onClick={() => setShowMenu(false)} href='#contact'>Contato</a>
          </li>
        </ul>
      </nav>
    </header> 
  )
}

export default Header