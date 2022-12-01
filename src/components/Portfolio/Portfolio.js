import React from 'react'
import Slide from './Slide'
import styles from "./Portfolio.module.css"
import dogs from "../../imgs/Portfolio/portfolio_dog.png"
import desafioRouter from "../../imgs/Portfolio/portfolio_products.png"

const Portfolio = () => {
  const slides =  [
    {
     img:<img src={dogs} alt="teste"/>,
     href:"https://luizcosta-serao.github.io/dogs-react/"
    },
    {
      img:<img src={desafioRouter} alt="teste"/> ,
      href:"https://luizcosta-serao.github.io/desafio-router-react/"
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