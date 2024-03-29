import Contacto from '../../components/contacto/contacto';
import Cards from '../../components/cards/cards';


const servicios = () => {
  return (
    <>
    {/* HERO INCIO */}
    <div className="grid-servicio">
      <div className="servicios--contenedor-uno">
        <h2 id='servicios' className='text-left mt-6 text-2xl font-bold pt-24'>Servicio</h2>
        <h3 className='text-left mt-2 pt-3 text-7xl font-bold text-[#425cc7]'>Esto es lo que hacemos <br /> y lo hacemos muy bien.</h3>
        <div className="servicios-circulo-dos">
        <p className="text-left mt-3 pt-3 w-2/5">Tenemos nuestra propia historia y experiencias compuestas por 
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