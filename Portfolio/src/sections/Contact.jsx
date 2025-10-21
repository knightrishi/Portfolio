function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-serif mb-6">Contact Me</h2>
      <p className="text-lg mb-4">
        Let's build something beautiful together.
        </p>
      <a
        href="arnav.ara05@gmail.com"
        className="bg-sienna text-red px-6 py-2 rounded-lg hover:bg-mustard hover:text-choco transition"
      >
        Say Hello
      </a>
    </section>
  );
}

export default Contact;