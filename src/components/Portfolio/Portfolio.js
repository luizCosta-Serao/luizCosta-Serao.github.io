import React from 'react'
import Slide from './Slide'
import styles from "./Portfolio.module.css"
import dogs from "../../imgs/Portfolio/portfolio-dog.png"
import desafioRouter from "../../imgs/Portfolio/portfolio_products.png"
import wildBeast from "../../imgs/Portfolio/projeto-wildbeast.png"
import sunnyside from "../../imgs/Portfolio/sunnyside.png"
import formIncricao from "../../imgs/Portfolio/form-portfolio.png"
import buscadorCep from "../../imgs/Portfolio/buscador-cep.png"

const Portfolio = () => {
  const slides =  [
    {
      text:"Projeto utilizando API, ReactJS, HTML, CSS e JavaScript",
      img:<img src={buscadorCep} alt="buscador de CEP"/>,
      href:"https://luizcosta-serao.github.io/buscador-cep/"
    },
    {
      text:"Projeto de Rede Social para cachorros realizado com API REST, ReactJS, HTML, CSS e JavaScript",
      img:<img src={dogs} alt="dogs"/>,
      href:"https://luizcosta-serao.github.io/dogs-react/"
    },
    {
      text:"Projeto de Produtos Eletrônicos realizado com ReactJS, HTML, CSS, JavaScript e API",
      img:<img src={desafioRouter} alt="router"/> ,
      href:"https://luizcosta-serao.github.io/desafio-router-react/"
    },
    {
      text:"Projeto Sunnyside Agency realizado com HTML, CSS e JavaScript",
      img:<img src={sunnyside} alt="agência sunnyside"/>,
      href:"https://luizcosta-serao.github.io/LP_Sunnyside_Agency/"
    },
    {
      text:"Projeto Wildbeast realizado com HTML e CSS",
      img:<img src={wildBeast} alt="wildbeast"/>,
      href:"https://luizcosta-serao.github.io/Wildbeast-Grid/"
    },
    {
      text:"Projeto de formulário com validação do lado do cliente com HTML, CSS e JavaScript utilizando regex",
      img:<img src={formIncricao} alt="Formulário de inscrição"/>,
      href:"https://luizcosta-serao.github.io/formulario-inscricao/"
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