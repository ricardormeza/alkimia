import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import HeroGif from "../../assets/circulo-fusion-alkimia.gif";
import CirculoAzul from "../../assets/circulo-azul1.webp";

const scrollToContact = () => {
  const contactSection = document.getElementById("contacto");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};


export default function Animat() {

  return (
    <>
      <section className="contenedor py-24 gifs-centrados ">
        <div className=" contenedor-hero-gifs">
          <div className="play-on-hover"></div>
          {/* <img src={HeroGif} className='play-on-hover' alt="" /> */}
          <div id='moviendo' className="marginado">
            <img
              src={CirculoAzul}
              className="imgAzul"
              alt="imagen circulo azul by Alkimia Agency"
            />
          </div>
        </div>
      </section>
      {/* CTA */}
      <div className="contenido-heroA">
        <div className="contenido-hero_tituloA ">
          <p className="espacio">Esto es </p>
          <p>&#32;</p>
          <h1> ALKIMIA</h1>
        </div>
        <div className="contenido-hero_ctaA">
          <h2 className="fuenteTitulo">
            Una aleación que logra <br /> resultados increíbles
          </h2>
          <Link to="#" onClick={scrollToContact}>
            <button className="inline-flex mt-9 items-center justify-center px-5 py-1 text-base font-medium text-center text-white hover:text-sky-500 border border-gray-300 rounded-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 btn-azulito">
              Contáctanos
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
