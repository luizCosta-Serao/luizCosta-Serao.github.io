import React from 'react'
import Slide from './Slide'
import styles from "./Portfolio.module.css"
import dogs from "../../imgs/Portfolio/portfolio_dog.png"
import desafioRouter from "../../imgs/Portfolio/portfolio_products.png"
import wildBeast from "../../imgs/Portfolio/projeto-wildbeast.png"
import animaisFantasticos from "../../imgs/Portfolio/project-animais-fantasticos.png"
import sunnyside from "../../imgs/Portfolio/sunnyside.png"

const Portfolio = () => {
  const slides =  [
    {
      text:"Projeto realizado com API REST E ReactJS",
      img:<img src={dogs} alt="dogs"/>,
      href:"https://luizcosta-serao.github.io/dogs-react/"
    },
    {
      text:"Projeto realizado com ReactJS e API",
      img:<img src={desafioRouter} alt="router"/> ,
      href:"https://luizcosta-serao.github.io/desafio-router-react/"
    },
    {
      text:"Projeto realizado com HTML, CSS e JavaScript",
      img:<img src={sunnyside} alt="agência sunnyside"/>,
      href:"https://luizcosta-serao.github.io/LP_Sunnyside_Agency/"
    },
    {
      text:"Projeto realizado com HTML e CSS",
      img:<img src={wildBeast} alt="wildbeast"/>,
      href:"https://luizcosta-serao.github.io/Wildbeast-Grid/"
    },
    {
      text:"Projeto realizado com HTML CSS e JavaScript",
      img:<img src={animaisFantasticos} alt="animais fantásticos"/>,
      href:"https://luizcosta-serao.github.io/animais-fantasticos/"
    }
  ]

  return (
    <section id='portfolio' className={`${styles.portfolio} container`}>
      <h1>Portfólio</h1>
      <p>Meus Portfólios</p>
      <Slide slides={slides}/>
    </section> 
  )
}

export default Portfolio