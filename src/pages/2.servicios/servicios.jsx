import {Helmet} from "react-helmet";
import Contacto from '../../components/contacto/contacto';
import Cards from '../../components/cards/cards';

const servicios = () => {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Alkimia | Servicios</title>
        <link rel="canonical" href="https://alkimia.agency/servicios" />
        <meta name="description" content="Descubre nuestros servicios de diseño web, branding, marketing digital y diseño gráfico. Impulsa tu marca con nuestra agencia de mercadotecnia líder." />
        <meta name="author" content="Alkimia Agency"/>
        <meta name="robots" content="index, follow"/>
        <meta property="og:type" content="business.business"/>
        <meta property="og:title" content="Alkimia | Contacto"/>
        <meta property="og:url" content="https://alkimia.agency/servicios"/>
        <meta property="business:contact_data:street_address" content="Queretaro 2331 - 4 Col.  Madero Sur"/>
        <meta property="business:contact_data:locality" content="Tijuana"/>
        <meta property="business:contact_data:region" content="Baja California"/>
        <meta property="business:contact_data:country_name" content="Mexico"/>
    </Helmet>
    {/* HERO INCIO */}
    <div className="contenedor grid-servicio md:pb-40 md:py-16">
      <div className="servicios--contenedor-uno">
        <h2 id='servicios' className='text-left text-2xl font-bold pt-24'>Servicio</h2>
        <h3 className='text-left mt-2  text-7xl font-bold text-[#425cc7]'>Esto es lo que hacemos <br className='' /> y lo hacemos muy bien.</h3>
        <div className="servicios-circulo-dos">
        <p className="text-left mt-3 pt-3 w-2/5 ">Tenemos nuestra propia historia y experiencias compuestas por 
          personas y elementos que hoy constituyen un todo.
          Tenemos nuestra propia historia y experiencias compuestas por 
          personas y elementos que hoy constituyen un todo.Tenemos 
          nuestra propia historia y experiencias compuestas por personas 
          y elementos que hoy constituyen un todo.Tenemos nuestra 
          propia historia y experiencias compuestas por personas y ele
          mentos que hoy constituyen un todo.</p>
        </div>
      </div>
      <div className="servicios--contenedor-circulos mb-14">
      </div>
    </div>
    
    {/* HERO FIN */}
    <Cards />
    <Contacto />
    </>
  )
}

export default servicios