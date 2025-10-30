import { motion } from "framer-motion";
import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import herorun from "../utils/herorun.gif";
import herostill1 from "../utils/herostill1.png";

const HeroSection = () => {
  const [isRunning, setIsRunning] = useState(true);
  const handleClick = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 100000); // 100 seconds
  };
  return (
    <section
      id="hero"
      className="
        bg-[#0A2540] 
        flex flex-col justify-center items-center text-center 
        w-full 
        py-20 px-6 
        space-y-4 
        md:min-h-[60vh] md:py-0 
        md:space-y-6 
        md:hover:shadow-[0_0_30px_#00CED1]
      "
    >
      <div className="animate-hero-entry" onClick={handleClick}>
        <img
          src={isRunning ? herorun : herostill1}
          alt="Retro Hero"
          className="w-24 sm:w-28 md:w-32 h-auto drop-shadow-[0_0_15px_#00CED1]"
        />
         <h1 className="text-3xl  sm:text-4xl md:text-5xl lg:text-4xl  font-bold font-pixel text-[cream] mt-4">
          <Typewriter
            words={["Hi... I am Arnav Singh"]}
            loop={100}          // type once
            cursor            // show blinking cursor
            cursorStyle="|"   // style of cursor
            typeSpeed={200}   // speed of typing (ms per letter)
            deleteSpeed={70}  // speed of deleting (not needed here)
          />  
        </h1>
        </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-[#FFFFFF] text-sm sm:text-base md:text max-w-xl text-center"
         // FIX 3: Removed redundant 'px-4 sm:px-0'. The parent's 'px-6' handles this.
      >
        <p> {/* FIX 1: Removed className="text-left" */}
          I see code as rhythm — lines that breathe, logic that moves. Every
          function hums with intent, every interface flows like music. As an
          engineer of logic and flow, I design intelligent networks, real-time
          systems, and experiences that blend Java, MERN, and machine insight.
          From backend pulse to front-end grace, I craft systems that feel
          alive — built to connect, respond, and evolve.
        </p>
      </motion.p>
    </section>
  );
};

export default HeroSection;