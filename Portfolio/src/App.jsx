
import './App.css'
import './styles/global.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './sections/About';
import Header from './components/Header';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { color } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-gray-100 font-mono">
      <Header />

      <main className='p-4'>
      <HeroSection />
      <About />   
      <Skills />
      <Contact />  
      </main>
</div>
  );
}

export default App;