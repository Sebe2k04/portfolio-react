import Pg1 from './Components/pg1/Pg1';
import About from './Components/about/About';
import Skills from './Components/skills/Skills';
import Achievements from './Components/achievements/Achievements';
import './App.css';
import Projects from './Components/projects/Projects';
import Experience from './Components/experience/Experience';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Pg1 />
      <About />
      <Skills />
      <Achievements />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
