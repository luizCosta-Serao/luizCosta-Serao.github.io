import React from 'react'
import styles from "./Header.module.css"
import account from "../imgs/account.svg"
import home from "../imgs/home.svg"
import document from "../imgs/document.svg"
import image from "../imgs/image.svg"
import call from "../imgs/call.svg"

const Header = () => {
  const [menuMobile, setMenuMobile] = React.useState(false)
  const [active, setActive] = React.useState(false)
  
  React.useEffect(() => {
    window.addEventListener("resize", function() {
      if(this.window.matchMedia("(max-width:768px)").matches) {
        setMenuMobile(true)
      } else {
        setMenuMobile(false)
        setActive(false)
      }

    })
  },[])

  return (
    <header className={`${styles.header} container`}>
      <h1>Luiz <br/> Serão</h1>
      {menuMobile && <button className={styles.buttonMenu} onClick={() => {setActive(!active)}}></button>}
      <nav className={`${menuMobile ? styles.navMobile : styles.nav} ${active ? styles.active : styles.inativo}`}>
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
            <a href='#portfolio'>Portfólio</a>
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