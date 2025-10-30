
function Skills() {
  return(
    <section id='skills' className='py-20 border-t border-none bg-[#0A2540] hover:shadow-[0_0_30px_#00CED1]'>
      <h3 className='text-3xl font-semibold  sm:text-5xl md:text-5xl font-pixel text-[#cream] mb-4'>My Skills </h3>
    
        <ul  className="max-w-2xl mx-auto space-y-3 sm:px-0  sm:text-left text-cream">
            <li className="hover:text-[#388ef1]">Languages:C,C++,Java,
              GOLang(learning),
              JavaScript</li>
            <li className="hover:text-[#38c3f1]">Frontend: HTML, CSS, Tailwind CSS, React</li>
            <li className="hover:text-[#388ef1]">Backend & Frameworks: JSP, JDBC,Node.js</li>
            <li className="hover:text-[#388ef1]">Java Development: Core Java, JavaFX</li>
            <li className="hover:text-[#388ef1]">Databases: MongoDB, MySQL</li>
            <li className="hover:text-[#388ef1]">Tools & Platforms: Git, GitHub, Docker</li>
            <li className="hover:text-[#388ef1]">Libraries & APIs: Tesseract (OCR), ZXing (QR/Barcode Processing)</li>
        </ul>
     
        </section>
        );
}

export default Skills;