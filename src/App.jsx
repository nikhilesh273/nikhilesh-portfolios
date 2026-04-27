import Scene from './components/Scene';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="canvas-container">
        <Scene />
      </div>
      <div className="content-layer">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}

export default App;
