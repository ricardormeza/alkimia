import {Helmet} from "react-helmet";
import Contacto from '../../components/contacto/contacto';
import Imagen from '../../assets/pixel-art-7284052_1280.png'

export default function AcentoCoffeRoaster() {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Alkimia | Acento Coffe Roaster - Cliente </title>
        <link rel="canonical" href="https://alkimia.agency/cliente/cliente-acento-coffe-roasters" />
        <meta name="description" content="Acento Coffe Roasater confió en nosotros para transformar su imagen y branding. Descubre cómo renovamos su diseño y creamos una experiencia única para sus clientes." />
        <meta name="author" content="Alkimia Agency"/>
        <meta name="robots" content="index, follow"/>
        <meta property="og:type" content="business.business"/>
        <meta property="og:title" content="Alkimia | Acento Coffe Roaster"/>
        <meta property="og:url" content="https://alkimia.agency/cliente/cliente-acento-coffe-roasters"/>
        <meta property="business:contact_data:street_address" content="Queretaro 2331 - 4 Col.  Madero Sur"/>
        <meta property="business:contact_data:locality" content="Tijuana"/>
        <meta property="business:contact_data:region" content="Baja California"/>
        <meta property="business:contact_data:country_name" content="Mexico"/>
    </Helmet>
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
