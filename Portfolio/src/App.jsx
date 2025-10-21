
import './App.css'
import './styles/global.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './sections/About';
import Header from './components/Header';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { color } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-gray-100 font-mono">
      <Header />

      <main className='p-4'>
      <HeroSection />
        <section id='about' className='py-20 border-t border-gray-800'>
          <h3 className='text-3xl font-semibold text-[#ffcc00] mb-4'>All About Me </h3>
             <p className="max-w-2xl text-gray-400">
            I'm a developer who builds digital stories — one line of code at a time.
          </p>
        </section>
        <section id='projects' className='py-20 border-t border-gray-800'>
            <h3 className='text-3xl font-semibold text-[#ffcc00] mb-4'>All My Pojects </h3>
        </section>
         <section id="contact" className="py-20 border-t border-gray-800">
          <h3 className="text-3xl font-semibold text-[#ffcc00] mb-4">Contact</h3>
        </section>
      </main>
</div>
  );
}

export default App;