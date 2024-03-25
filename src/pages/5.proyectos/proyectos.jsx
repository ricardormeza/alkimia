import { Link } from 'react-router-dom';
import React from 'react'
import Imagen from '../../assets/pixel-art-7284052_1280.png'

export default function proyectos() {
  return (
    <>
    <main className='pt-14'>
      <div className="contenedor-proyectos ">
        <div className="proyecto-cuadro">
          <h1 className='text-left pt-2 text-2xl font-extrabold'>Nuestros proyectos</h1>
          <h2 className='text-left text-7xl pt-2 font-bold text-[#425cc7]'>Cada proyecto <br /> es unico</h2>
        </div>
        <div className="proyecto-texto">
          <p className='w-2/5 text-left pt-2'>Tenemos nuestra propia historia y experiencias compuestas por
            personas y elementos que hoy constituyen un todo.
            Tenemos nuestra propia historia y experiencias compuestas por</p>
        </div>
      </div>
    </main>
    {/* grid inicio de imagenes */}
    <div className="proyectos-imgs-grid mt-8">
      <div className="proyecto-img-uno">
        <Link to={'/cliente/cliente-acento-coffe-roasters'}>
          <img src={Imagen} alt="" className='tienda'/>
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
