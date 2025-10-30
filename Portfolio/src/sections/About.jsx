function About() {
  return (
    <section
      id='about'
      className='py-20 bg-[#081826] flex flex-col justify-center hover:shadow-[0_0_30px_#00CED1] items-center'
    >
      <h3 className='text-3xl sm:text-4xl md:text-5xl font-semibold font-pixel text-[cream] mb-6 text-center'>
        About Me
      </h3>
      <p className="max-w-2xl text-cream font-mono px-4 sm:px-0 text-center sm:text-left leading-relaxed">
        I'm Arnav, a developer who believes code can have emotion — a bridge between
        machines and meaning. I chase elegance in logic, and beauty in simplicity.
        I believe I have a long way ahead but I am ready to handle the violent waves of life and triumph this coding voyage.
      </p>
    </section>
  );
}

export default About;
