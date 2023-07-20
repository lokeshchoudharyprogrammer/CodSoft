
import './App.css';
import WithSubnavigation from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Github from './Components/Github';
import Projects from './Components/Project/Projects';

function App() {
  return (
    <div className="App">
      <WithSubnavigation />
      <About />
      <Skills />
      <Github />
      <Projects />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
