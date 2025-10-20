
import './App.css'
import './styles/global.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { color } from 'framer-motion';

function App() {
  return (
    <div className="bg-cream text-choco">
    <Navbar />
    <HeroSection />
    <About />
    < Contact/>
    <Footer />
    <Projects />
</div>
  );
}

export default App;