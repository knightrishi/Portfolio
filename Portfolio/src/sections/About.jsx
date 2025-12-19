import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-20 bg-[#13375c] border-t border-blue-50   flex flex-col items-center px-6"
    >
      <h3 className="text-3xl hover:drop-shadow-[0_0_10px_#00ffff]  sm:text-4xl font-semibold font-pixel text-[cream] mb-10 text-center">
        About Me
      </h3>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-5xl">

        {/* IMAGE ANIMATION */}
        <motion.div
          className="relative flex justify-center md:justify-start w-full md:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="/me3.jpg"
            alt="about"
            className="h-[450px] sm:h-[300px] md:h-[350px] rounded-lg shadow-[10px_10px_40px_20px_rgba(251,191,36,0.3)] opacity-90"
          />
        </motion.div>

        {/* TEXT ANIMATION */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left leading-tight"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          
        >
          <p className="max-w-2xl text-right text-white font-normal px-4 sm:px-0 ml-[-40px] sm:text-left leading-relaxed">
            I see code as rhythm — lines that breathe, logic that moves. Every
            function hums with intent, every interface flows like music. As an
            engineer of logic and flow, I design intelligent networks, real-time
            systems, and experiences that blend Java, MERN, and machine insight.
            From backend pulse to front-end grace, I craft systems built to
            connect, respond, and evolve.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
