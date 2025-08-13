import { useState } from "react";
import {
  FaShareAlt,
  FaBullhorn,
  FaCamera,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navLinkClass =
    "relative px-2 py-1 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-[#D29BFD] before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100";

  const projects = [
    {
      src: "/assets/portafolio1.jpg",
      title: "Decoramigas VY",
      role: "Manejo total de Redes Sociales y creación de material audiovisual para la misma",
      link: "https://drive.google.com/drive/folders/129JSYPzpAN48iNn_kbGrNhUEix4S0PhV",
    },
    {
      src: "/assets/portafolio2.jpg",
      title: "Zone bike",
      role: "Cobertura de eventos especiales y creación de material audiovisual y material con estilo cinematográfico",
      link: "https://drive.google.com/drive/folders/129JSYPzpAN48iNn_kbGrNhUEix4S0PhV",
    },
    {
      src: "/assets/portafolio3.jpg",
      title: "Sport Life",
      role: "Cobertura de evento especial y creación de material audiovisual",
      link: "https://drive.google.com/drive/folders/129JSYPzpAN48iNn_kbGrNhUEix4S0PhV",
    },
  ];

  return (
    <div className="font-sans bg-white text-gray-800">
      {/* HEADER */}
      <header className="bg-[#0A0A0A] text-white py-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold tracking-wide">Mafe Ortiz</h1>

          {/* Botón hamburguesa móvil */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Menú */}
          <nav
            className={`fixed top-[64px] left-0 right-0 bg-[#0A0A0A] md:bg-transparent md:static md:flex md:space-x-6 text-sm font-medium transition-transform duration-300 ease-in-out z-50 ${
              menuOpen
                ? "translate-y-0"
                : "-translate-y-[200%] md:translate-y-0"
            } md:translate-y-0`}
          >
            <a
              href="#about"
              className={`${navLinkClass} block py-3 px-6 md:inline-block`}
              onClick={() => setMenuOpen(false)}
            >
              Sobre mí
            </a>
            <a
              href="#services"
              className={`${navLinkClass} block py-3 px-6 md:inline-block`}
              onClick={() => setMenuOpen(false)}
            >
              Servicios
            </a>
            <a
              href="#portfolio"
              className={`${navLinkClass} block py-3 px-6 md:inline-block`}
              onClick={() => setMenuOpen(false)}
            >
              Portafolio
            </a>
            <a
              href="#contact"
              className={`${navLinkClass} block py-3 px-6 md:inline-block`}
              onClick={() => setMenuOpen(false)}
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative bg-cover bg-center h-[500px]"
        style={{ backgroundImage: "url('/assets/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center px-6 mt-24">
            {/* TEXTO */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                María Fernanda Ortiz Duno
              </h2>
              <p className="text-white text-lg max-w-xl mb-6">
                Creadora de contenido y especialista en marketing digital. Ayudo
                a marcas y emprendedores a destacar en el mundo online.
              </p>
              <a
                href="#contact"
                className="border-b-2 border-b-[#D29BFD] text-white px-6 py-3 shadow-lg hover:border-b-[#b66df8] transition"
              >
                Trabajemos juntos
              </a>
            </div>

            {/* IMAGEN */}
            <div className="flex justify-center md:justify-end h-full">
              <img
                src="/assets/maffer.png"
                alt="Maffer Ortiz"
                className="w-[80%] h-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 px-6 bg-gray-950">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Collage de imágenes */}
          <div className="grid grid-cols-3 grid-rows-3 gap-2 w-full md:w-2/3 lg:w-1/2 mx-auto max-h-[380px]">
            <img
              src="/assets/profile.jpg"
              alt="Collage 1"
              className="col-span-2 row-span-2 object-cover w-full h-full shadow-lg"
            />
            <img
              src="/assets/twouble.jpg"
              alt="Collage 2"
              className="object-cover w-full h-full shadow-lg"
            />
            <img
              src="/assets/rutax.jpg"
              alt="Collage 3"
              className="object-cover w-full h-full shadow-lg"
            />
            <img
              src="/assets/market4.jpg"
              alt="Collage 4"
              className="col-span-1 object-cover w-full h-full shadow-lg"
            />
            <img
              src="/assets/playita.jpg"
              alt="Collage 5"
              className="object-cover w-full h-full shadow-lg"
            />
          </div>

          {/* Texto */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-[#D29BFD]">Sobre mí</h3>
            <p className="text-gray-600 mb-4 text-xl">
              Soy Mafe, apasionada por el marketing digital y la creación de
              contenido que conecta con las personas. Me especializo en diseñar
              estrategias creativas y auténticas para redes sociales.
            </p>
            <p className="text-gray-600 text-lg">
              Mi misión es ayudarte a construir una presencia digital sólida,
              alineada con tu esencia y con impacto real en tu audiencia.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 px-6 bg-neutral-950">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-[#D29BFD] mb-12">
            Lo que puedo hacer por ti
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
              <FaShareAlt className="text-[#D29BFD] text-6xl mx-auto mb-4" />
              <h4 className="font-bold text-gray-500 text-xl mb-2">
                Gestión de Redes
              </h4>
              <p className="text-gray-600">
                Manejo estratégico de redes sociales para conectar con tu
                comunidad.
              </p>
            </div>
            <div className="bg-gray-900 shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
              <FaBullhorn className="text-[#D29BFD] text-6xl mx-auto mb-4" />
              <h4 className="font-bold text-gray-500 text-xl mb-2">
                Publicidad Digital
              </h4>
              <p className="text-gray-600">
                Campañas efectivas, Instagram y Tiktok.
              </p>
            </div>
            <div className="bg-gray-900 shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
              <FaCamera className="text-[#D29BFD] text-6xl mx-auto mb-4" />
              <h4 className="font-bold text-gray-500 text-xl mb-2">
                Creación de Contenido
              </h4>
              <p className="text-gray-600">
                Fotos, videos y diseños creativos para impulsar tu marca
                personal o negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-16 px-6 bg-gray-950">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-[#D29BFD] mb-12">
            Mis Proyectos
          </h3>

          {projects.map(({ src, title, role, link }, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center mb-12 ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="rounded-lg shadow-lg overflow-hidden flex items-center justify-center h-[250px] relative">
                <img
                  src={src}
                  alt={`Proyecto ${index + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="text-white">
                <h4 className="text-2xl font-bold mb-3">{title}</h4>
                <p className="text-gray-300 text-lg">{role}</p>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block mt-4 bg-gray-900 text-white px-4 py-2 overflow-hidden group"
                >
                  <span className="relative z-10">Ver más</span>
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D29BFD] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-6 bg-neutral-950">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-[#D29BFD] mb-8">Contáctame</h3>
          <p className="text-gray-300 mb-12 text-lg">
            Si quieres trabajar conmigo o saber más sobre lo que hago, escríbeme
            o sígueme en Instagram.
          </p>

          <div className="flex justify-center gap-12">
            {/* Gmail */}
            <a
              href="https://mail.google.com/mail/mu/mp/518/#co"
              className="flex flex-col items-center text-white hover:text-[#D29BFD] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-12 h-12 mb-2"
              >
                <path
                  d="M20 4H4c-1.1 0-2 .9-2 2v12c0 
            1.1.9 2 2 2h16c1.1 0 2-.9 
            2-2V6c0-1.1-.9-2-2-2zm0 
            4l-8 5-8-5V6l8 5 8-5v2z"
                />
              </svg>
              Gmail
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/mafe_ortizduno?igsh=MTZwbXptb2pydWpiNQ=="
              className="flex flex-col items-center text-white hover:text-[#D29BFD] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-12 h-12 mb-2"
              >
                <path
                  d="M7 2C4.243 2 2 4.243 2 
            7v10c0 2.757 2.243 5 5 
            5h10c2.757 0 5-2.243 
            5-5V7c0-2.757-2.243-5-5-5H7zm10 
            2c1.654 0 3 1.346 3 
            3v10c0 1.654-1.346 3-3 
            3H7c-1.654 0-3-1.346-3-3V7c0-1.654 
            1.346-3 3-3h10zm-5 
            3a5 5 0 100 10 5 5 0 000-10zm0 
            2a3 3 0 110 6 3 3 0 010-6zm4.5-3a1.5 
            1.5 0 100 3 1.5 1.5 0 000-3z"
                />
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#0A0A0A] text-white py-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} María Fernanda Ortiz Duno - Marketing
          Digital & Creación de Contenido.
        </p>
      </footer>
    </div>
  );
}
