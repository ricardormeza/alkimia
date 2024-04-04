import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";


import Imagen from '../../assets/pixel-art-7284052_1280.png'

export default function proyectos() {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Alkimia | Proyectos </title>
        <link rel="canonical" href="https://alkimia.agency/proyectos" />
        <meta name="description" content="Explora nuestros proyectos en diseño web, branding, marketing digital y diseño gráfico. Descubre cómo hemos ayudado a nuestros clientes a destacarse en línea." />
        <meta name="author" content="Alkimia Agency"/>
        <meta name="robots" content="index, follow"/>
        <meta property="og:type" content="business.business"/>
        <meta property="og:title" content="Alkimia | Proyectos"/>
        <meta property="og:url" content="https://alkimia.agency/proyectos"/>
        <meta property="business:contact_data:street_address" content="Queretaro 2331 - 4 Col.  Madero Sur"/>
        <meta property="business:contact_data:locality" content="Tijuana"/>
        <meta property="business:contact_data:region" content="Baja California"/>
        <meta property="business:contact_data:country_name" content="Mexico"/>
    </Helmet>
    <main className='pt-14 pb-20'>
      <div className="contenedor contenedor-proyectos">
        <div className="proyecto-cuadro">
          <h1 className='text-left pt-2 text-2xl font-extrabold'>Nuestros proyectos</h1>
          <h2 className='text-left text-7xl pt-2 font-bold text-[#425cc7]'>Cada proyecto <br /> es unico</h2>
        </div>
        <div className="proyecto-texto">
          <p className='sm:w-4/5 md:w-2/5 text-left pt-2'>Tenemos nuestra propia historia y experiencias compuestas por
            personas y elementos que hoy constituyen un todo.
            Tenemos nuestra propia historia y experiencias compuestas por</p>
        </div>
      </div>
    </main>
    {/* grid inicio de imagenes */}
    <div className="proyectos-imgs-grid mt-8">
      <div className="proyecto-img-uno">
        <Link to={'/cliente/cliente-acento-coffe-roasters'}>
          <h2>Acento Coffe Roasters</h2>
          <img src={Imagen} alt="" />
        </Link>
      </div>
      <div className="proyecto-imgenes-dos">
      <img src={Imagen} alt="" />
      <img src={Imagen} alt="" />
      </div>
    </div>
    {/* grid cuatro inicio  */}
    <div className="proyecto-cuadricula mt-7 mb-24">
      <img src={Imagen} alt="" />
      <img src={Imagen} alt="" />
      <img src={Imagen} alt="" />
      <img src={Imagen} alt="" />
    </div>
    {/* grid cuatro fin  */}

    {/* INICIO DE GRID */}
    
    </>
  )
}
