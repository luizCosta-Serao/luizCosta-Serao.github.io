import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';

function App() {

  const a = document.querySelectorAll("header a[href^='#']")
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

  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Education/>
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
