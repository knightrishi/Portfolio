import { motion } from "framer-motion";
import React from "react";
import urlShort from "../images/urlshort.jpg";
import traveler from "../images/traveler.jpg";
import jsi from "../images/js.png";
import mininotes from "../images/mininotes.jpg";
import lf from "../images/lf.png";
import bob from "../images/bob.png";

function ProjectCard({ title, description, tech, link, image }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 150 }}
      className="relative bg-[#061931] border border-[#00CED1]/10 rounded-2xl shadow-[0_0_25px_#00CED1] p-5 hover:border-[#01f7b5] duration-300 w-full sm:w-[300px] md:w-[350px] m-4 text-left
                 flex flex-col justify-between h-[480px]" // fixed height
    >
      <div>
        <img
          src={image}
          alt={title}
          className="rounded-xl w-full h-40 object-cover mb-4 opacity-90 hover:opacity-100 transition"
        />
        <h4 className="text-xl sm:text-2xl font-bold text-[#d2e461] font-pixel mb-2">
          {title}
        </h4>
        <p className="text-[#B0EFFF] text-sm sm:text-base mb-3 leading-snug">
          {description}
        </p>
        <p className="text-[#6EE7FF] text-xs sm:text-sm mb-4">⚙️ {tech}</p>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-[#0b0b0d] bg-[#d2e461] hover:bg-[#e68a0a] font-semibold px-4 py-2 rounded-lg shadow-lg transition duration-300 text-sm sm:text-base mt-auto"
      >
        View Project
      </a>
    </motion.div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Url Shortner",
      description:
        "A web app that creates short links and tracks their click counts. Built with Node.js, Express, MongoDB, and EJS for the views.",
      tech: "MongoDB,Node.js,Express,EJS",
      link: "https://github.com/knightrishi/Backend-Node/tree/main/Short-URL",
      image: urlShort,
    },
    {
      title: "Travelers",
      description:
        "A React based Travel booking Website having all the functions from booking rooms to rides.",
      tech: "React,JavaScript",
      link: "https://github.com/knightrishi/Travelers",
      image: traveler,
    },
    {
      title: "JavaScript Projects",
      description: "A collection of JavaScript projects.",
      tech: "JavaScript,HTML,CSS",
      link: "https://github.com/knightrishi/JS",
      image: jsi,
    },
    {
      title: "Mini-Notes Vault",
      description: "A Mini-notes vault based on MERN Stack.",
      tech: "MERN",
      link: "https://github.com/knightrishi/JS/tree/main/Mini-notes-vault",
      image: mininotes,
    },
    {
      title: "LifeLine",
      description: "A comprehensive platform for a healthier tomorrow.",
      tech: "MERN",
      link: "https://github.com/knightrishi/LifeLine",
      image: lf,
    },
    {
      title: "Breakout Ball",
      description:
        "A classic Brick Breaker arcade game implementation developed using the Java programming language and Swing/AWT GUI toolkit.",
      tech: "Java",
      link: "https://github.com/knightrishi/JAVA-PROJECT/tree/main/BreakoutballGame",
      image: bob,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 border-t border-b-blue-50  bg-[#13375c] text-center"
    >
      <h3 className="text-2xl sm:text-3xl md:text-4xl hover:drop-shadow-[0_0_10px_#00ffff]  font-semibold font-pixel text-[cream] mb-10">
        All My Projects
      </h3>
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
