import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';


function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Resume />
      <Projects />
    </>
  );
}

export default App;
