
import Contacto from '../../components/contacto/contacto';
import Imagen from '../../assets/pixel-art-7284052_1280.png'

export default function AcentoCoffeRoaster() {
  return (
    <>
      <main className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              {/* <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">CATEGORY</span> */}
              <h2 className="sm:text-3xl text-7xl title-font font-bold text-[#425cc7] mt-4 mb-4">Acento Coffe Roasters</h2>
              <p className="leading-relaxed mb-8 text-left">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic.</p>
              
            </div>
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              
            </div>
          </div>
        </div>
      </main>
      <section>
        <div className="cafe-imagen-uno">
          <img src={Imagen} alt="" className='' />
        </div>
        <div className="cafe-imagen_grid mt-7 mb-7">
        <img src={Imagen} alt="" className='' />
        <img src={Imagen} alt="" className='' />
        </div>
        <div className="cafe-imagen-uno">
          <img src={Imagen} alt="" className='' />
        </div>
      </section>
      <Contacto />
    </>
  )
}
