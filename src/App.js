import React from 'react';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';

function App() {

React.useEffect(() => {
  const a = document.querySelectorAll("a[href^='#']")
  a.forEach(item => {
    item.addEventListener("click", (e) =>{
      e.preventDefault()
      let href = item.getAttribute("href")
      let section = document.querySelector(href)
      section.scrollIntoView({
        behavior:"smooth",
        block:"start"
      })
    })
  })
},[])

React.useEffect(() => {
  const jsScroll = document.querySelector(".jsScroll").childNodes
  jsScroll[0].classList.add("ativo")
  window.addEventListener("scroll", () => {
    jsScroll.forEach((item) => {
      const windowMetade = window.innerHeight * 0.8
      const bounding = item.getBoundingClientRect().top - windowMetade
      if(bounding < 0) {
        item.classList.add("ativo")
      }
    })
  })
},[])

  return (
    <>
      <Header />
      <main className='jsScroll'> 
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
