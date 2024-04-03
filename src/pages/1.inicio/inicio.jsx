import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
// import Animat from '../../components/animat/Animat'
import fondoDos from '../../assets/pixel-art-7284052_1280.png'
import fondoUno from '../../assets/tienda.png'
import Contacto from '../../components/contacto/contacto';
import { FaPlus } from "react-icons/fa";
// import UseTitle from '../../hooks/useTitle'
import Cards from '../../components/cards/cards';
import HeroGift from '../../components/HeroGift/HeroGift'

  // UseTitle({title: 'Agencia de Mercadotecnia'})

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

const inicio = () => {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Alkimia | Agencia de Mercadotecnia</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <HeroGift />
    <div className="contenedor ">
      {/* contenedor de dos imagenes viejo inicio */}
      {/* <section className=" mx-auto py-12 md:py-6">
        <div className=" box">
          <div className="div1 borde circuloGris">
            
            <div className="div2 bordeDos circuloAzul">
              
            </div>
          </div>
          
          <div className="contenido-hero">
            <div className="contenido-hero_titulo ">
              <p className="espacio">Esto es </p>
              <p>&#32;</p>
              <h1> ALKIMIA</h1>
            </div>
            <div className="contenido-hero_cta">
              <h2 className="fuenteTitulo">Una aleación que logra resultados increíbles</h2>
              <Link to="#" onClick={scrollToContact}>
                <button className="inline-flex mt-9 items-center justify-center px-5 py-1 text-base font-medium text-center text-white hover:text-sky-500 border border-gray-300 rounded-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                  Contáctanos
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      {/* contenedor de dos imagenes viejo FIN */}
      <section className="mx-auto py-2 md:py-0">
        <div className="mx-auto titulo--de_subtitulo">
          <div className="subtitulo"></div>
          <h2 className="subtituto--heading fuenteTitulo pb-4">
            Una agencia de marketing digital especializada en resultados.
          </h2>
        </div>
        <div className="container contenido--de_subtitulo pb-4">
          <p>
            2POINT is a full-service digital agency focused on branding,
            animated websites, and fully managed digi tal and social marketing.
            Whether you’re a global brand or a local shop, we’ve got the
            strategy to help you grow.
          </p>
          <p>
            Expertos en marketing digital con más de 10 años de experiencia.
            Expertos en marketing digital con más de 10 años de experiencia.
          </p>
        </div>
      </section>
      {/* SECCION CARDS INICIO */}
      <Cards />
      <section className="">
        {/* SECCIÓN CARDS FIN */}
        {/* PROYECTOS INICIO */}
        <div className="flex flex-col text-center w-full my-20">
          <h2 className="fuenteTitulo sm:text-5xl text-5xl font-medium title-font mb-2 text-[#425cc7] titulo--proyectos">
            Nuestros proyectos
          </h2>
        </div>
        <div className="max-w-max  w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img alt="feature" className="object-cover object-center h-full w-full" src={fondoUno}/>
        </div>
        <div className="max-w-max  w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img alt="feature" className="object-cover object-center h-full w-full" src={fondoDos}/>
        </div>
        <div className="max-w-max  w-full mb-10 lg:mb-0 rounded-lg overflow-hidden ">
          <img alt="feature" className="object-cover object-center h-full w-full bg--imagen" src={fondoUno}/>
        </div>
        {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
      </section>
      <section>
      <div className="bg-[#425cc7]  py-20 px-6 font-[sans-serif]">
      <div className="container mx-auto text-center">
        <div className="mx-auto text-6xl flex justify-center text-center text-white ">
          <Link to={`/proyectos`} className='hover:scale-150'>
            <FaPlus />
          </Link>
        {/* <button type="button" className="inline-block mt-10 px-6 py-3 bg-red-600 hover:bg-blue-700 text-white text-base font-medium rounded-md">uh</button> */}
        </div>
        
        
      </div>
    </div>
      </section>
      <Contacto />
      </div>
    </>
  );
};

export default inicio;
