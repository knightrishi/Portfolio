import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import resume from "../images/resume.png";
import communication from "../images/communication.png";

function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-gray-800">
      <h3 className="text-3xl font-semibold font-pixel text-[#00CED1] mb-4">Socials</h3>
      <div className="flex justify-center gap-6">
        <a href="https://github.com/knightrishi" target="_blank" rel="noopener noreferrer">
          <img src={github} className="w-16 h-16 hover:shadow-[0_0_10px_#00CED1] transition-shadow" alt="GitHub" />
        </a>

        <a href="https://www.linkedin.com/in/arnav-singh-851476318" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} className="w-16 h-16 hover:shadow-[0_0_10px_#00CED1] transition-shadow" alt="LinkedIn" />
        </a>

        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <img src={resume} className="w-16 h-16 hover:shadow-[0_0_10px_#00CED1] transition-shadow" alt="Resume" />
        </a>

        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=arnav.ara05@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
          <img src={communication} className="w-16 h-16 hover:shadow-[0_0_10px_#00CED1] transition-shadow" alt="Email" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
