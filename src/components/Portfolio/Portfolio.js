import React from 'react'
import Slide from './Slide'
import styles from "./Portfolio.module.css"
import dogs from "../../imgs/Portfolio/dogs.jpeg"
import gestorEstoque from "../../imgs/Portfolio/gestor_de_estoque.jpeg"
import calculadora from "../../imgs/Portfolio/calculadora.jpeg"
import jogoDaVelha from "../../imgs/Portfolio/jogo-da-velha.jpeg"
import shopper from "../../imgs/Portfolio/shopper.jpeg"

const Portfolio = () => {
  const slides =  [
    {
      text:"Shopper - Ecommerce de roupas para homens, mulheres e crianças. Foi usado HTML, CSS, JavaScript, ReactJS e React Router",
      img:<img src={shopper} alt="Ecommerce Shopper"/>,
      href:"https://ecommerce-shopper-six.vercel.app/"
    },
    {
      text:"Dogs - Rede Social para cachorros realizado com API RESTful, ReactJS, React Router, HTML, CSS e JavaScript",
      img:<img src={dogs} alt="dogs"/>,
      href:"https://social-dogs-ten.vercel.app/"
    },
    {
      text:"Gestor de estoque, utilizando HTML, CSS, JavaScript, ReactJS e React Router",
      img:<img src={gestorEstoque} alt="Gestor de Estoque"/> ,
      href:"https://gestor-de-estoque-wheat.vercel.app/"
    },
    {
      text:"Jogo da velha, utilizando JavaSript, CSS e HTML",
      img:<img src={jogoDaVelha} alt="Jogo da Velha"/>,
      href:"https://jogo-da-velha-wine-nu.vercel.app/"
    },
    {
      text:"Calculadora, utilizando JavaScript, HTML e CSS",
      img:<img src={calculadora} alt="Calculadora"/>,
      href:"https://calculadora-js-ten-sigma.vercel.app/"
    },
  ]

  return (
    <section id='portfolio' className={`${styles.portfolio} container`}>
      <h1>Portfólio</h1>
      <Slide slides={slides}/>
    </section> 
  )
}

export default Portfolio