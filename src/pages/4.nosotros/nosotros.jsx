import {Helmet} from "react-helmet";
// import Cuadro from '../../assets/textura-puntos1.webp'
import Imagen from "../../assets/tienda.png";
import Cards from '../../components/cards/cards';
import Contacto from '../../components/contacto/contacto';


export default function nosotros() {
  return (
    <>
    
    <Helmet>
        <meta charSet="utf-8" />
        <title>Alkimia | Nosotros </title>
        <link rel="canonical" href="https://alkimia.agency/nosotros" />
        <meta name="description" content="Conoce nuestra agencia de mercadotecnia especializada en diseño web, branding, marketing digital y diseño gráfico. ¡Descubre quiénes somos y cómo podemos ayudarte!." />
        <meta name="author" content="Alkimia Agency"/>
        <meta name="robots" content="index, follow"/>
        <meta property="og:type" content="business.business"/>
        <meta property="og:title" content="Alkimia | Nosotros"/>
        <meta property="og:url" content="https://alkimia.agency/nosotros"/>
        <meta property="business:contact_data:street_address" content="Queretaro 2331 - 4 Col.  Madero Sur"/>
        <meta property="business:contact_data:locality" content="Tijuana"/>
        <meta property="business:contact_data:region" content="Baja California"/>
        <meta property="business:contact_data:country_name" content="Mexico"/>
    </Helmet>
      <section className="text-gray-600 body-font contenedor">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 id="nosotros" className="fuenteTitulo sm:text-2xl text-3xl mb-4 font-medium text-gray-900">
              Nosotros
            </h1>
            <h2 className="fuenteTitulo sm:text-4xl text-3xl mb-4 font-extrabold text-[#425cc5]">
              Somos una agencia de branding y marketing digital ubicada
              orgullosamente en la esquina de México, Tijuana B.C.
            </h2>
            <p className="mb-8 leading-relaxed">
              Tenemos nuestra propia historia y experiencias compuestas por
              personas y elementos que hoy constituyen un todo. Tenemos nuestra
              propia historia y experiencias compuestas por personas y elementos
              que hoy constituyen un todo.Tenemos nuestra propia historia y
              experiencias compuestas por personas y elementos que hoy
              constituyen un todo.Tenemos nuestra propia historia y experiencias
              compuestas por personas y ele mentos que hoy constituyen un todo.
            </p>
            {/* <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
            </div> */}
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Imagen}
            />
          </div>
        </div>
      </section>
      {/* seccion-dos inicio */}
      <div className="mx-auto contenedor-circulo">
        <div className=" contenedor contenedor-cirlculo-uno">          
          <h2 className="title-font sm:text-2xl text-left text-3xl  font-medium text-gray-900">
            Nuestro proceso
          </h2>
          <h3 className="title-font sm:text-4xl text-left text-7xl mb-4 font-extrabold text-[#425cc5]">
            This is how
            <br className=" sm:inline-block text-7xl" />
            we do it
          </h3>
          <div className="contenedor-circulo-uno-imagenes">
            <div className="imagen-gris"></div>
            <div className="imagen-textura"></div>
          </div>
        </div>
        <div className="contenedor-circulo-dos grid">
          <h2 className="place-self-center ">Desarrollo</h2>
          <p>
            Tenemos nuestra propia historia y experiencias compuestas por
            personas y elementos que hoy constituyen un todo.
          </p>
          
          <p>
            Tenemos nuestra propia historia y experiencias compuestas por
            personas y elementos que hoy constituyen un todo.
          </p>
          <p>
            Tenemos nuestra propia historia y experiencias compuestas por
            personas y elementos que hoy constituyen un todo
          </p>
          <p>
            Tenemos nuestra propia historia y experiencias compuestas por
            personas y elementos que hoy constituyen un todo
          </p>
        </div>
      </div>
      {/* INICIO CARDS */}
      <Cards />
      {/* INICIO CARDS FIN*/}
      {/* INICIO Contacto */}
      <Contacto />
      {/* INICIO Contacto fin */}
      
    </>
  );
}
