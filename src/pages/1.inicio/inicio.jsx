import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Animat from '../../components/animat/Animat'
import fondoDos from "../../assets/pixel-art-7284052_1280.png";
import fondoUno from "../../assets/tienda.png";
import Contacto from "../../components/contacto/contacto";
import { FaPlus } from "react-icons/fa";
// import UseTitle from '../../hooks/useTitle'
import Cards from "../../components/cards/cards";
import HeroGift from "../../components/HeroGift/HeroGift";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';

// UseTitle({title: 'Agencia de Mercadotecnia'})

const scrollToContact = () => {
  const contactSection = document.getElementById("contacto");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

const inicio = () => {
  // Animación
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 5,
      },
    },
    exit: {
      opacity: 1,
    },
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Alkimia | Agencia de Mercadotecnia</title>
        <link rel="canonical" href="https://alkimia.agency" />
        <meta
          name="description"
          content="Expertos en mercadotecnia ofreciendo diseño web, branding, marketing digital y diseño gráfico para potenciar tu negocio. ¡Destaca con Alkimia Agency!"
        />
        <meta name="author" content="Alkimia Agency" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="business.business" />
        <meta
          property="og:title"
          content="Alkimia | Agencia de Mercadotecnia"
        />
        <meta property="og:url" content="https://alkimia.agency" />
        <meta
          property="business:contact_data:street_address"
          content="Queretaro 2331 - 4 Col.  Madero Sur"
        />
        <meta property="business:contact_data:locality" content="Tijuana" />
        <meta
          property="business:contact_data:region"
          content="Baja California"
        />
        <meta property="business:contact_data:country_name" content="Mexico" />
      </Helmet>

      <motion.div {...anim(opacity)}>
        <HeroGift />
        <div className="contenedor " data-aos="fade-right">
          <motion.div
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <main className="mx-auto py-2 md:py-0">
              <div className="mx-auto titulo--de_subtitulo">
                <div className="subtitulo"></div>
                <motion.h2 
                  initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}
                  className="subtituto--heading fuenteTitulo pb-4"> 
                  Una agencia de marketing digital especializada en resultados.
                </motion.h2>
              </div>
              <motion.div 
                initial={{
                  x: 500,
                  opacity: 0,
                  scale: 0.5
              }}
              animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1
              }}
              transition={{
                  duration: 1.5,
              }}
              className="container contenido--de_subtitulo pb-4" data-aos="fade-right"> 
                <p>
                  2POINT is a full-service digital agency focused on branding,
                  animated websites, and fully managed digi tal and social
                  marketing. Whether you&#39;re a global brand or a local shop, we&#39;ve
                  got the strategy to help you grow.
                </p>
                <p data-aos="fade-left">
                  Expertos en marketing digital con más de 10 años de experiencia.
                  Expertos en marketing digital con más de 10 años de experiencia.
                </p>
              </motion.div>
            </main>
          </motion.div>
        </div>
          {/* SECCION CARDS INICIO */}
          <Cards />
          {/* SECCIÓN CARDS FIN */}
            {/* PROYECTOS INICIO */}
            <div className="contenedor flex flex-col text-center w-full my-20">
              <h2 className="fuenteTitulo sm:text-5xl text-5xl font-medium title-font mb-2 text-[#425cc7] titulo--proyectos">
                Nuestros proyectos
              </h2>
            </div>
            
            {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
        {/* IMAGENES INICIO */}
        <section className="w-screen border">
              <div className="max-w-max  w-full mb-10 lg:mb-0 overflow-hidden">
                <img
                  alt="feature"
                  className="object-cover object-center h-full w-screen"
                  src={fondoUno}
                />
              </div>
              <div className="max-w-max  w-full mb-10 lg:mb-0 overflow-hidden">
                <img
                  alt="feature"
                  className="object-cover object-center h-full w-screen"
                  src={fondoDos}
                />
              </div>
              <div className="max-w-max  w-full mb-10 lg:mb-0 overflow-hidden ">
                <img
                  alt="feature"
                  className="object-cover object-center h-full w-screen bg--imagen"
                  src={fondoUno}
                />
              </div>
            </section>
            {/* FIN DE IMAGENES */}
          <section>
            <div className="bg-[#425cc7]  py-20 px-6 font-[sans-serif]">
              <div className="contenedor container mx-auto text-center">
                <div className="mx-auto text-6xl flex justify-center text-center text-white ">
                  <Link to={`/proyectos`} className="hover:scale-150">
                    <FaPlus />
                  </Link>
                  {/* <button type="button" className="inline-block mt-10 px-6 py-3 bg-red-600 hover:bg-blue-700 text-white text-base font-medium rounded-md">uh</button> */}
                </div>
              </div>
            </div>
          </section>
          {/* SECCION DE CONTACTO INICIO */}
          <Contacto />
          {/* SECCION DE CONTACTO FIN */}
      </motion.div>
    </>
  );
};

export default inicio;
