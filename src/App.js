import Header from './Components/header/Header';
import Pg1 from './Components/pg1/Pg1';
import About from './Components/about/About';
import Skills from './Components/skills/Skills';
import Achievements from './Components/achievements/Achievements';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Pg1 />
      <About />
      <Skills />
      <Achievements />
    </div>
  );
}

export default App;
