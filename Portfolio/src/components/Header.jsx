import React from "react";
import { motion } from "framer-motion";
import logo2 from "../images/logo2.png"
const Header = () => {
  return (
   <header className='p-6 bg-[#081826] border-b-3 flex hover:shadow-[0_0_30px_#00CED1] border-none justify-between text-center items-center'>
  <h1 className='text-2xl font-bold font-pixel text-[#3090f7] '>Arnav Singh</h1>
  <div className="flex items-center gap-10">
        
        <nav className="flex items-center gap-6 font-pixel text-lg">
          
          <a href="#projects" className="text-gray-300 hover:text-[#3090f7] transition-colors duration-200 group flex items-center gap-2">
             {/* This ">" only appears on hover */}
             <span className="text-xl text-[#3090f7] opacity-0 group-hover:opacity-100 transition-opacity duration-200">&gt;</span>
             Projects
          </a>

          <a href="#skills" className="text-gray-300 hover:text-[#3090f7] transition-colors duration-200 group flex items-center gap-2">
             <span className="text-xl text-[#3090f7] opacity-0 group-hover:opacity-100 transition-opacity duration-200">&gt;</span>
             Skills
          </a>

          <a href="#contact" className="text-gray-300 hover:text-[#3090f7] transition-colors duration-200 group flex items-center gap-2">
             <span className="text-xl text-[#3090f7] opacity-0 group-hover:opacity-100 transition-opacity duration-200">&gt;</span>
             Contact
          </a>
        </nav>
        
<img
           src={logo2}
  alt={"ArnavSingh"}
  className="
    w-25 h-full rounded-xl object-cover flex-shrink-0 opacity-90 
    border-2 border-transparent 
    hover:opacity-100 hover:border-[#3090f7] hover:scale-110 
    transition-all duration-300 ease-in-out
  "
          />
          </div>
</header>

  );
};

export default Header;
