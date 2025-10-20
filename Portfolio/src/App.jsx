
import './App.css'
import './styles/global.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
      
    </>
  );
}

export default App;