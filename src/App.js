import './App.css';
import About from './components/About/About';
import Education from './components/Education/Education';
import Header from './components/Header';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Education/>
    </>
  );
}

export default App;
