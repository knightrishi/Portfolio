import { motion } from "framer-motion";
import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import herorun from "../utils/herorun.gif"
import herostill1 from "../utils/herostill1.png"




const HeroSection = () => {
  const [isRunning ,setIsRunning]=useState(true);
  const handleClick =()=>{
setIsRunning(true);
setTimeout(()=> setIsRunning(false),100000);
  }
  return (
    <section
      id="hero" 
      className="min-h-[60vh] flex flex-col justify-center items-center text-center space-y-6 bg-[#0A2540]"
    >
      <div className="animate-hero-entry" onClick={handleClick}>
        <img
          src={isRunning ? herorun : herostill1}
          alt="Retro Hero"
          className="w-28 h-auto drop-shadow-[0_0_15px_#00CED1]"
        />
         <h1 className="text-3xl sm:text-4xl font-bold font-pixel text-[cream] mt-4">
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
        className="text-[#FFFFFF] text-sm sm:text-base max-w-xl"
      >
        <p>I am a passionate software developer who believes code can have emotion — a bridge between
          machines and meaning.I chase elegance in logic, and beauty in simplicity.
          I believe i have a long way ahead but i am ready to handel the voilent waves of the code and triumph this coding voyage.</p>
       
      </motion.p>

      
    </section>
  );
};

export default HeroSection;
