import Contacto from '../../components/contacto/contacto';

const servicios = () => {
  return (
    <>
    {/* HERO INCIO */}
    <div className="grid md:grid-cols-2 py-6 items-center md:gap-4 gap-8 font-[sans-serif] text-[#333] max-w-5xl max-md:max-w-md mx-auto">
      <div className="max-md:order-1 max-md:text-center">
        <h3 className="md:text-3xl text-2xl md:leading-10">Esto es lo que hacemos
 y lo hacemos muy bien.</h3>
        <p className="mt-4 text-sm">Tenemos nuestra propia historia y experiencias compuestas por 
personas y elementos que hoy constituyen un todo.
 Tenemos nuestra propia historia y experiencias compuestas por 
personas y elementos que hoy constituyen un todo.Tenemos 
nuestra propia historia y experiencias compuestas por personas 
y elementos que hoy constituyen un todo.Tenemos nuestra 
propia historia y experiencias compuestas por personas y ele
mentos que hoy constituyen un todo.</p>
        <button type="button" className="px-6 py-2 mt-8 font-semibold rounded text-sm outline-none border-2 border-[#333] hover:bg-[#333] hover:text-white transition-all duration-300">Explore</button>
      </div>
      <div className="md:h-[450px]">
        <img src="https://readymadeui.com/photo.webp" className="w-full h-full md:object-contain" />
      </div>
    </div>
    {/* HERO FIN */}
    <Contacto />
    </>
  )
}

export default servicios