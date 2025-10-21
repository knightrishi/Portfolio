import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="flex flex-col justify-center items-center h-[40vh] text-center">
      <motion.h2
        className="text-4xl font-pixel text-mustard mb-2"
        initial={{ opacity: 0, y:40}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to My Retro World
      </motion.h2>
      <motion.p
        className="text-cream font-mono max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        I code stories. I design motion. I live between pixels and logic.
      </motion.p>
    </section>
  );
}