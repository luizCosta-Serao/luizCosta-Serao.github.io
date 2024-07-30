import React from 'react'
import styles from "./Portfolio.module.css"
import blogDogs from '../../imgs/Portfolio/blogdogs.jpeg'
import norbenCleaning from '../../imgs/Portfolio/norben-cleaning.png'
import furniro from '../../imgs/Portfolio/furniro.png'
import html from '../../imgs/Skills/html.svg'
import css from '../../imgs/Skills/css.svg'
import js from '../../imgs/Skills/javascript.svg'
import react from '../../imgs/Skills/reactjs.svg'
import typeScript from '../../imgs/Skills/typescript.svg'
import nodejs from '../../imgs/Skills/nodejs.svg'
import mongodb from '../../imgs/Skills/mongodb.svg'

const Portfolio = () => {
  const slides =  [
    {
      text: 'Norben Cleaning',
      img: <img src={norbenCleaning} alt='Norben Cleaning' />,
      techs: [
        <img src={html} alt='HTML' />,
        <img src={css} alt='CSS' />,
        <img src={js} alt='JavaScript' />,
        <img src={react} alt='ReactJS' />,
        <img src={typeScript} alt='TypeScript' />,
        <img src={nodejs} alt='Node.js' />,
        <img src={mongodb} alt='MongoDB' />,
      ],
      href: 'https://norben-cleaning-company.vercel.app/',
      github: 'https://github.com/luizCosta-Serao/norben-cleaning-company'
    },
    {
      text: 'Furniro Ecommerce',
      img: <img src={furniro} alt='Furniro' />,
      techs: [
        <img src={html} alt='HTML' />,
        <img src={css} alt='CSS' />,
        <img src={js} alt='JavaScript' />,
        <img src={react} alt='ReactJS' />,
        <img src={typeScript} alt='TypeScript' />,
        <img src={nodejs} alt='Node.js' />,
        <img src={mongodb} alt='MongoDB' />,
      ],
      href: 'https://furniro-gilt.vercel.app/',
      github: 'https://github.com/luizCosta-Serao/furniro'
    },
    {
      text: 'BlogDogs',
      img: <img src={blogDogs} alt='BlogDogs' />,
      techs: [
        <img src={html} alt='HTML' />,
        <img src={css} alt='CSS' />,
        <img src={js} alt='JavaScript' />,
        <img src={react} alt='ReactJS' />,
        <img src={typeScript} alt='TypeScript' />,
      ],
      href: 'https://blogging-sepia.vercel.app/',
      github: 'https://github.com/luizCosta-Serao/blogging'
    },
  ]
  //<Slide slides={slides}/>
  return (
    <section id='portfolio' className={`${styles.portfolio} container`}>
      <h1>Principais Projetos</h1>
      <ul className={styles.portfolioLista}>
      {slides.map((slide, index) => (
          <li key={index}>
            {slide.img}
            <p className={styles.portfolioTexto}>{slide.text}</p>
            <p className={styles.portfolioTechs}>Tecnologias usadas no projeto:</p>
            <div className={styles.techs}>
              {slide.techs.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            <div>
              <a target='__blank' href={slide.href} >Visualizar</a>
              <a target='__blank' href={slide.github}>Repositório</a>
            </div>
          </li>
      ))}
      </ul>
    </section> 
  )
}

export default Portfolio