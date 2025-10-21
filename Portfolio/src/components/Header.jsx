import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
   <header className='p-6 border-b-3 border-gray-800 flex justify-between items-center'>
  <h1 className='text-2xl font-bold text-[#ffcc00]'>Arnav Singh</h1>
  <nav className='space-x-6'>
    <a href="#about" className='hover:text-[#ffcc00]'>About</a>
    <a href="#projects" className='hover:text-[#ffcc00]'>Projects</a>
    <a href="#contact" className='hover:text-[#ffcc00]'>Contact</a>
  </nav>
</header>

  );
};

export default Header;
