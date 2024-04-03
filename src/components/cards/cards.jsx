import { Link } from "react-router-dom"
// import Contacto from '../../components/contacto/contacto';
import CardUno from '../../assets/tienda.png'
import CardGifUno from '../../assets/card-branding-alkimia.gif'

const scrollToContact = () => {
  const contactSection = document.getElementById('contacto');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function cards() {
  return (
    <>
    <section className="contenedor--cards">
        <section className="text-gray-600 body-font overflow-hidden ">
          <div className="container px-5 sm:py-6 py-24 mx-auto ">
            <div className="flex flex-wrap -m-4 border ">
                {/* CARD-1 */}
              <div className="p-1 xl:w-1/4 md:w-1/2 w-full ">
                <div className="h-full rounded-none border-2 border-gray-300 flex flex-col relative overflow-hidden efecto">
                    {/* <img src={CardGifUno} className="card-gif" alt="" /> */}
                    <div className="img-fija"></div>
                      <div className="img-gifi"></div>
                    {/* <h2 className="fuenteTitulo text-5xl text-zinc-500 font-bold pb-4 mb-4 border-b border-gray-200 leading-none">
                      Branding
                    </h2> */}
                    {/* <p className="flex items-center text-gray-600 mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Gestión de redes sociales
                    </p> */}
                    {/* <p className="flex items-center text-left text-gray-600 mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Publicidad pagada en redes sociales
                    </p> */}
                    {/* <p className="flex items-center text-gray-600 mb-6">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Campañas en Google ADS
                    </p> */}
                    {/* <p className="flex items-center text-gray-600 mb-6">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Desarrollo Web
                    </p> */}
                    {/* <button className="flex items-center justify-center mt-auto text-white text-center bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded-none">
                      Contactános
                      
                    </button> */}
                    {/* <p className="text-xs text-gray-500 mt-3">
                      Literally you probably haven't heard of them jean shorts.
                    </p> */}
                    <img src={CardGifUno} alt="" />
                  <div className="overlay">
                    <div className="text">
                      <h3>Branding</h3>
                    
                      <p className="flex items-center text-white mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Gestión de redes sociales
                    </p>
                    <p className="flex items-center text-left text-white mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Publicidad en redes sociales
                    </p>
                    
                      <Link to="#" onClick={scrollToContact}>
                        <button className="flex items-center justify-center text-white text-center mt-5 bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded-none">
                        Contactános
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* CARD 1 FIN */}
              {/* CARD 2 INICIO */}
              <div className="p-4 xl:w-1/4 md:w-1/2 w-full ">
                <div className="h-full p-6 rounded-none border-2 border-gray-300 flex flex-col relative overflow-hidden efecto">
                    {/* <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                      Branding
                    </h2> */}
                    <h2 className="fuenteTitulo text-5xl text-zinc-500 font-bold pb-4 mb-4 border-b border-gray-200 leading-none">
                      Diseño gráfico
                    </h2>
                    <p className="flex items-center text-gray-600 mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Gestión de redes sociales
                    </p>
                    <p className="flex items-center text-left text-gray-600 mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Publicidad pagada en redes sociales
                    </p>
                    <p className="flex items-center text-gray-600 mb-6">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Campañas en Google ADS
                    </p>
                    <p className="flex items-center text-gray-600 mb-6">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Desarrollo Web
                    </p>
                    <button className="flex items-center justify-center mt-auto text-white text-center bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded-none">
                      Contactános
                    </button>
                    {/* <p className="text-xs text-gray-500 mt-3">
                      Literally you probably haven't heard of them jean shorts.
                    </p> */}
                  <div className="overlay">
                    <div className="text">
                      <h3>Alkimia Agency</h3>
                      <Link to="#" onClick={scrollToContact}>
                        <button className="flex items-center justify-center text-white text-center mt-5 bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded-none">
                        Contactános
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* CARD 2 FIN */}
              {/* CARD 3 INICIO */}
              <div className="p-4 xl:w-1/4 md:w-1/2 w-full ">
                <div className="h-full p-6 rounded-none border-2 border-gray-300 flex flex-col relative overflow-hidden efecto">
                    {/* <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                      Branding
                    </h2> */}
                    <h2 className="fuenteTitulo text-5xl text-zinc-500 font-bold pb-4 mb-4 border-b border-gray-200 leading-none">
                      Marketing digital
                    </h2>
                    <p className="flex items-center text-gray-600 mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Gestión de redes sociales
                    </p>
                    <p className="flex items-center text-left text-gray-600 mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Publicidad pagada en redes sociales
                    </p>
                    <p className="flex items-center text-gray-600 mb-6">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Campañas en Google ADS
                    </p>
                    <p className="flex items-center text-gray-600 mb-6">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Desarrollo Web
                    </p>
                    <button className="flex items-center justify-center mt-auto text-white text-center bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded-none">
                      Contactános
                    </button>
                    {/* <p className="text-xs text-gray-500 mt-3">
                      Literally you probably haven't heard of them jean shorts.
                    </p> */}
                  <div className="overlay">
                    <div className="text">
                      <h3>Alkimia Agency</h3>
                        <Link to="#" onClick={scrollToContact}>
                          <button className="flex items-center justify-center  text-white text-center mt-5 bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded-none">
                          Contactános
                          </button>
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* card 3 fin */}
              {/* cuarta card inicio */}
               <div className="p-4 xl:w-1/4 md:w-1/2 w-full ">
                <div className="h-full p-6 rounded-none border-2 border-gray-300 flex flex-col relative overflow-hidden efecto">
                    {/* <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                      Branding
                    </h2> */}
                    <h2 className="fuenteTitulo text-5xl text-zinc-500 font-bold pb-4 mb-4 border-b border-gray-200 leading-none">
                      Desarrollo Web
                    </h2>
                    <p className="flex items-center text-gray-600 mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Gestión de redes sociales
                    </p>
                    <p className="flex items-center text-left text-gray-600 mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Publicidad pagada en redes sociales
                    </p>
                    <p className="flex items-center text-gray-600 mb-6">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Campañas en Google ADS
                    </p>
                    <p className="flex items-center text-gray-600 mb-6">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Desarrollo Web
                    </p>
                    <button className="flex items-center justify-center mt-auto text-white text-center bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded-none">
                      Contactános
                      {/* <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-auto"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg> */}
                    </button>
                    {/* <p className="text-xs text-gray-500 mt-3">
                      Literally you probably haven't heard of them jean shorts.
                    </p> */}
                  <div className="overlay">
                    <div className="text">
                    <h3>Alkimia Agency</h3>
                      <Link to="#" onClick={scrollToContact}>
                        <button className="flex items-center justify-center text-white text-center mt-5 bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded-none">
                        Contactános
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* cuarta card fin */}
            </div>
          </div>
        </section>
        {/* SECCIÓN CARDS FIN */}
      </section>
    
    </>
  )
}
