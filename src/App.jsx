import styles from './App.module.css'
import About from './componets/About/About'
import Contact from './componets/Contact/Contact'
import Hero from './componets/Hero/Hero'
import Navbar from './componets/Navbar/Navbar'
import Projects from './componets/Projects/Projects'
import Skills from './componets/Skills/Skills'

function App() {
  return(
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
