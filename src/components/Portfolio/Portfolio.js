import React from 'react'
import styles from "./Portfolio.module.css"
import dogs from "../../imgs/Portfolio/dogs.jpeg"
import gestorEstoque from "../../imgs/Portfolio/gestor_de_estoque.jpeg"
import calculadora from "../../imgs/Portfolio/calculadora.jpeg"
import jogoDaVelha from "../../imgs/Portfolio/jogo-da-velha.jpeg"
import blogDogs from '../../imgs/Portfolio/blogdogs.jpeg'
import cloudBoard from '../../imgs/Portfolio/cloudboard.jpeg'
import shopper from "../../imgs/Portfolio/shopper.jpeg"
import html from '../../imgs/Skills/html.svg'
import css from '../../imgs/Skills/css.svg'
import js from '../../imgs/Skills/javascript.svg'
import react from '../../imgs/Skills/reactjs.svg'
import typeScript from '../../imgs/Skills/typescript.svg'

const Portfolio = () => {
  const slides =  [
    {
      text: 'O site foi desenvolvido com o objetivo de simular um blog, que é dedicado a compartilhar informações, dicas e histórias sobre nossos amigos de quatro patas. Aqui você encontrará uma variedade de artigos relacionados a raças de cachorros, cuidados, treinamento e muito mais..',
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
    {
      text:'plataforma de comércio eletrônico moderna e elegante que oferece uma experiência de compra perfeita. Foi projetado para proporcionar aos usuários uma interface amigável para navegar e comprar uma variedade de produtos.',
      img:<img src={shopper} alt="Ecommerce Outfit/Pro"/>,
      techs: [
        <img src={html} alt='HTML' />,
        <img src={css} alt='CSS' />,
        <img src={js} alt='JavaScript' />,
        <img src={react} alt='ReactJS' />,
      ],
      href:"https://ecommerce-shopper-six.vercel.app/",
      github:"https://github.com/luizCosta-Serao/ecommerce-shopper"
    },
    {
      text:'O CloudBoard é um dashboard financeiro que oferece uma visão abrangente de vendas, processando e recebidos retirados de uma API. Acesse dados detalhados de cada transação e gerencie através deste dashboard intuitivo.',
      img:<img src={cloudBoard} alt="CloudBoard"/>,
      techs: [
        <img src={html} alt='HTML' />,
        <img src={css} alt='CSS' />,
        <img src={js} alt='JavaScript' />,
        <img src={react} alt='ReactJS' />,
        <img src={typeScript} alt='TypeScript' />,
      ],
      href:"https://cloudboard-five.vercel.app/",
      github:"https://github.com/luizCosta-Serao/cloudboard"
    },
    {
      text:"Projeto realizado no curso da origamid utilizando uma API RESTful. Rede social para cães, onde os amantes de cachorros podem se conectar, compartilhar fotos e interagir com outros donos de cachorros. Usuário e Senha padrão já salva => usuário: dog | senha: dog",
      img:<img src={dogs} alt="dogs"/>,
      techs: [
        <img src={html} alt='HTML' />,
        <img src={css} alt='CSS' />,
        <img src={js} alt='JavaScript' />,
        <img src={react} alt='ReactJS' />,
      ],
      href:"https://social-dogs-ten.vercel.app/",
      github:"https://github.com/luizCosta-Serao/social-dogs"
    },
    {
      text:"Este é um site desenvolvido para ajudar no gerenciamento de estoques de produtos. Aqui você poderá cadastrar, visualizar, editar e excluir produtos do seu estoque de forma fácil e intuitiva.",
      img:<img src={gestorEstoque} alt="Gestor de Estoque"/> ,
      techs: [
        <img src={html} alt='HTML' />,
        <img src={css} alt='CSS' />,
        <img src={js} alt='JavaScript' />,
        <img src={react} alt='ReactJS' />,
      ],
      href:"https://gestor-de-estoque-wheat.vercel.app/",
      github:"https://github.com/luizCosta-Serao/gestor_de_estoque"
    },
    {
      text:"Este é um jogo clássico de estratégia onde dois jogadores se enfrentam em um tabuleiro 3x3. O objetivo é conseguir três símbolos iguais em uma linha, coluna ou diagonal antes do seu oponente.",
      img:<img src={jogoDaVelha} alt="Jogo da Velha"/>,
      techs: [
        <img src={html} alt='HTML' />,
        <img src={css} alt='CSS' />,
        <img src={js} alt='JavaScript' />,
      ],
      href:"https://jogo-da-velha-wine-nu.vercel.app/",
      github:"https://github.com/luizCosta-Serao/jogo-da-velha"
    },
    {
      text:"Esta é uma calculadora simples desenvolvida em JavaScript. Ela permite que você realize operações matemáticas básicas, como adição, subtração, multiplicação e divisão.",
      img:<img src={calculadora} alt="Calculadora"/>,
      techs: [
        <img src={html} alt='HTML' />,
        <img src={css} alt='CSS' />,
        <img src={js} alt='JavaScript' />,
      ],
      href:"https://calculadora-js-ten-sigma.vercel.app/",
      github:"https://github.com/luizCosta-Serao/calculadora-js"
    },
  ]
  //<Slide slides={slides}/>
  return (
    <section id='portfolio' className={`${styles.portfolio} container`}>
      <h1>Projetos</h1>
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