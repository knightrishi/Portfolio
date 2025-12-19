import { motion } from "framer-motion";

const tech = [
  { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },

  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "TailwindCSS", logo: "tailwind.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },

  { name: "JSP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "JDBC", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },

  { name: "Core Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "JavaFX", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },

  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },

  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "Thunder-Client", logo: "tc.png" },

  { name: "Tesseract OCR", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "ZXing", logo: "zing.webp" },
];

export default function Skills() {
  return (
    <section className="py-20 bg-[#13375c]  border-t border-blue-50" id="skills">
      <h2 className="text-center text-3xl hover:drop-shadow-[0_0_10px_#00ffff]  sm:text-4xl font-bold text-white mb-12 font-pixel">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto px-6">
{/* {{tech....}} as it is a JS ELEMNT and React is rendering HTML-like JSX.
JSX cannot interpret JavaScript directly.
So wrap the JS expression in {}*/}

        {tech.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.12, rotate: 2 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-[#0d2037] p-4 rounded-xl shadow-lg flex flex-col items-center justify-center hover:shadow-orange-300/30 transition"
          >
            <img src={item.logo} alt={item.name} className="h-12 mb-2" />
            <p className="text-white text-sm font-light tracking-wide">{item.name}</p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
