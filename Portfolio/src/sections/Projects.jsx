import { motion } from "framer-motion";
import React from "react";
import urlShort from "../images/urlshort.jpg"
import traveler from "../images/traveler.jpg"
import jsi from "../images/js.png"

function ProjectCard({ title, description, tech, link, image }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -20 }} //rising the card on hovering
      whileTap={{ scale: 0.98 }}//shrik the card on clicking
      transition={{ type: "spring", stiffness: 150 }}
      className="relative bg-[#0b0b0d] border border-[#00CED1]/30 rounded-2xl shadow-[0_0_25px_#00CED1] p-5 hover:shadow-[0_0_40px_#00CED1] hover:border-[#01f7b5] duration-300 max-w-sm text-left m-4"
    >
      <img
        src={image}
        alt={title}
        className="rounded-xl w-full h-40 object-cover mb-4 opacity-90 hover:opacity-100 transition"
      />
      <h4 className="text-2xl font-bold text-[#00E0FF] font-pixel mb-2">
        {title}
      </h4>
      <p className="text-[#B0EFFF] text-sm mb-3 leading-snug">{description}</p>
      <p className="text-[#6EE7FF] text-xs mb-4">⚙️ {tech}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-[#0b0b0d] bg-[#00E0FF] hover:bg-[#0AE6E6] font-semibold px-4 py-2 rounded-lg shadow-lg transition duration-300"
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
      image:urlShort,
    },
    {
      title: "Travelers",
      description:
    "It is a React based Travel booking Website having all the fuction from having to book room to book rides.",
      tech: "React,JavaScript",
      link: "https://github.com/knightrishi/Travelers",
      image: traveler,
    },
    {
      title: "JavaScript Projects",
      description:
    "It is a collections of JavaScript Projects.",
      tech: "JavaScript,HTML,CSS",
      link: "https://github.com/knightrishi/JS",
      image: jsi,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 border-t border-gray-800 bg-[#081826] text-center"
    >
      <h3 className="text-4xl font-semibold font-pixel text-[cream] mb-10">
        All My Projects
      </h3>
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
