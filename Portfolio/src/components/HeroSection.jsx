import { motion } from "framer-motion";
import React, { useState } from "react";
import herorun from "../utils/herorun.gif"
import herostill1 from "../utils/herostill1.png"
const HeroSection = () => {
  const [isRunning ,setIsRunning]=useState(true);
  const handleClick =()=>{
setIsRunning(true);
setTimeout(()=> setIsRunning(false),10000);
  }
  return (
    <section
      id="hero"
      className="min-h-[90vh] flex flex-col justify-center items-center text-center space-y-6"
    >
      <div className="animate-hero-entry" onClick={handleClick}>
        <img
          src={isRunning ? herorun : herostill1}
          alt="Retro Hero"
          className="w-48 h-auto drop-shadow-[0_0_15px_#00CED1]"
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-[#FFFFFF] text-sm sm:text-base max-w-xl"
      >
        A retro-futuristic developer crafting digital dreams with pixels and purpose.
      </motion.p>

      <motion.a
        href="#projects"
        whileHover={{
          scale: 1.2,
          textShadow: "0 0 10px #00ffff",
        }}
                transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
        className="mt-6 border border-[#00CED1] px-6 py-3 rounded-lg text-[#FFFFFF] hover:bg-[#00CED1] hover:text-[#141212] font-bold duration-300"
      >
        View Projects
      </motion.a>
    </section>
  );
};

export default HeroSection;
