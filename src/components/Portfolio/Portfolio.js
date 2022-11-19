import React from 'react'
import Slide from './Slide'
import styles from "./Portfolio.module.css"
import photoTest from "../../imgs/social/github.svg"

const Portfolio = () => {
  const slides =  [
    {
     img:<img src={photoTest} alt="teste"/>,
     href:"https://www.google.com"
    },
    {
      img:<img src={photoTest} alt="teste"/> 
    },
    {
      img:<img src={photoTest} alt="teste"/> 
    }
  ]

  return (
    <section className={`${styles.portfolio} container`}>
      <h1>Portfólio</h1>
      <p>Meus Portfólios</p>
      <Slide slides={slides}/>
    </section>
  )
}

export default Portfolio