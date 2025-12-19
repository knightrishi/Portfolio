function Navbar() {
  return
   (
     <nav className=" bg-[#13375c] fixed top-0 w-full text-cream font-mono backdrop-blur-md flex justify-center gap-6 py-4 shadow-sm ">
     <a href="hero" className="hover:text-sienna">Home</a>
     <a href="about" className="hover:text-sienna">About</a>
     <a href="projects" className="hover:text-sienna">Projects</a>
     <a href="contact" className="hover:text-sienna">Contacts</a>
   Navbar Section
    </nav>
    );
}

export default Navbar;