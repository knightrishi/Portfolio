
import './App.css'
import './styles/global.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './sections/About';
import Header from './components/Header';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { color } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-[c6e8f5] text-gray-100 font-mono">


      <main className='p-4'>
        <Header />
      <HeroSection />
      <About />   
      <Skills />
      <Projects />
      <Contact />  
      < Footer />
      </main>
</div>
  );
}

export default App;