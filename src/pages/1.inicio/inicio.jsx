import { Link } from 'react-router-dom';
import fondoDos from '../../assets/pixel-art-7284052_1280.png'
import fondoUno from '../../assets/tienda.png'
import Contacto from '../../components/contacto/contacto';
import { FaPlus } from "react-icons/fa";
import UseTitle from '../../hooks/useTitle'

  UseTitle({title: 'Agencia de Mercadotecnia'})

const inicio = () => {
  return (
    <>
      <section className="mx-auto py-12 md:py-6 ">
        <div className=" box">
          <div className="div1 borde circuloGris">
            {/* <img src={circuloGris} alt="imagen uno" className='uno' /> */}
            <div className="div2 bordeDos circuloAzul">
              {/* <img src={ciruloAzul} alt="imagen dos" /> */}
            </div>
          </div>
          {/* texto de hero */}
          <div className="contenido-hero">
            <div className="contenido-hero_titulo">
              <p className="espacio">Esto es </p>
              <p>&#32;</p>
              <h1> ALKIMIA</h1>
            </div>
            <div className="contenido-hero_cta">
              <h2>Una aleación que logra resultados increíbles</h2>
              <button className="inline-flex mt-9 items-center justify-center px-5 py-1 text-base font-medium text-center text-white hover:text-sky-500 border border-gray-300 rounded-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto py-2 md:py-0">
        <div className="mx-auto titulo--de_subtitulo">
          <div className="subtitulo"></div>
          <h2 className="subtituto--heading font-Linden pb-4">
            Una agencia de marketing digital especializada en resultados.
          </h2>
        </div>
        <div className="container contenido--de_subtitulo pb-4">
          <p>
            2POINT is a full-service digital agency focused on branding,
            animated websites, and fully managed digi tal and social marketing.
            Whether you’re a global brand or a local shop, we’ve got the
            strategy to help you grow.
          </p>
          <p>
            Expertos en marketing digital con más de 10 años de experiencia.
            Expertos en marketing digital con más de 10 años de experiencia.
          </p>
        </div>
      </section>
      {/* SECCION CARDS INICIO */}
      <section className="contenedor--cards">
        <section className="text-gray-600 body-font overflow-hidden ">
          <div className="container px-5 py-24 mx-auto ">
            <div className="flex flex-wrap -m-4 border">
              <div className="p-4 xl:w-1/4 md:w-1/2 w-full hover:bg-blue-500">
                <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                    START
                  </h2>
                  <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                    Free
                  </h1>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Vexillologist pitchfork
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Tumeric plaid portland
                  </p>
                  <p className="flex items-center text-gray-600 mb-6">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Mixtape chillwave tumeric
                  </p>
                  <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                    Button
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-auto"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <p className="text-xs text-gray-500 mt-3">
                    Literally you probably haven't heard of them jean shorts.
                  </p>
                </div>
              </div>
              {/* CARD 1 FIN */}
              {/* CARD 2 INICIO */}
              <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                  <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                    POPULAR
                  </span>
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                    PRO
                  </h2>
                  <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    <span>$38</span>
                    <span className="text-lg ml-1 font-normal text-gray-500">
                      /mo
                    </span>
                  </h1>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Vexillologist pitchfork
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Tumeric plaid portland
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Hexagon neutra unicorn
                  </p>
                  <p className="flex items-center text-gray-600 mb-6">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Mixtape chillwave tumeric
                  </p>
                  <button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
                    Button
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-auto"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <p className="text-xs text-gray-500 mt-3">
                    Literally you probably haven't heard of them jean shorts.
                  </p>
                </div>
              </div>
              <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                    BUSINESS
                  </h2>
                  <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    <span>$56</span>
                    <span className="text-lg ml-1 font-normal text-gray-500">
                      /mo
                    </span>
                  </h1>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Vexillologist pitchfork
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Tumeric plaid portland
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Hexagon neutra unicorn
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Vexillologist pitchfork
                  </p>
                  <p className="flex items-center text-gray-600 mb-6">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Mixtape chillwave tumeric
                  </p>
                  <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                    Button
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-auto"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <p className="text-xs text-gray-500 mt-3">
                    Literally you probably haven't heard of them jean shorts.
                  </p>
                </div>
              </div>
              {/* cuarta card inicio */}
                
              <div id="curve" className="card p-4 xl:w-1/4 md:w-1/2 w-full">
                <div className="footer">
                  <div className="connections">
                    <div className="connection facebook">
                      <i className="fab fa-facebook"></i>
                    </div>
                    <div className="connection instagram">
                      <i className="fab fa-instagram"></i>
                    </div>
                    <div className="connection twitter">
                      <i className="fab fa-twitter"></i>
                    </div>
                  </div>
                  <svg id="curve">
                    <path
                      id="p"
                      d="M0,200 Q80,100 400,200 V150 H0 V50"
                      transform="translate(0 300)"
                    />
                    <rect
                      id="dummyRect"
                      x="0"
                      y="0"
                      height="450"
                      width="400"
                      fill="transparent"
                    />
                    {/* <!-- slide up--> */}
                    <animate
                      href="#p"
                      attributeName="d"
                      to="M0,50 Q80,100 400,50 V150 H0 V50"
                      fill="freeze"
                      begin="dummyRect.mouseover"
                      end="dummyRect.mouseout"
                      dur="0.1s"
                      id="bounce1"
                    />
                    {/* <!-- slide up and curve in --> */}
                    <animate
                      href="#p"
                      attributeName="d"
                      to="M0,50 Q80,0 400,50 V150 H0 V50"
                      fill="freeze"
                      begin="bounce1.end"
                      end="dummyRect.mouseout"
                      dur="0.15s"
                      id="bounce2"
                    />
                    {/* <!-- slikde down and curve in --> */}
                    <animate
                      href="#p"
                      attributeName="d"
                      to="M0,50 Q80,80 400,50 V150 H0 V50"
                      fill="freeze"
                      begin="bounce2.end"
                      end="dummyRect.mouseout"
                      dur="0.15s"
                      id="bounce3"
                    />
                    {/* <!-- slide down and curve out --> */}
                    <animate
                      href="#p"
                      attributeName="d"
                      to="M0,50 Q80,45 400,50 V150 H0 V50"
                      fill="freeze"
                      begin="bounce3.end"
                      end="dummyRect.mouseout"
                      dur="0.1s"
                      id="bounce4"
                    />
                    {/* <!-- curve in --> */}
                    <animate
                      href="#p"
                      attributeName="d"
                      to="M0,50 Q80,50 400,50 V150 H0 V50"
                      fill="freeze"
                      begin="bounce4.end"
                      end="dummyRect.mouseout"
                      dur="0.05s"
                      id="bounce5"
                    />

                    <animate
                      href="#p"
                      attributeName="d"
                      to="M0,200 Q80,100 400,200 V150 H0 V50"
                      fill="freeze"
                      begin="dummyRect.mouseout"
                      dur="0.15s"
                      id="bounceOut"
                    />
                  </svg>
                  <div className="info">
                    <div className="name">Сергей Фомин</div>
                    <div className="job">Главный архитектор</div>
                  </div>
                </div>
                <div className="card-blur"></div>
              </div>
              {/* cuarta card fin */}
            </div>
          </div>
      </section>
        {/* SECCIÓN CARDS FIN */}
        {/* PROYECTOS INICIO */}
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 titulo--proyectos">
            Nuestros proyectos
          </h2>
        </div>
        <div className="max-w-max  w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img alt="feature" className="object-cover object-center h-full w-full" src={fondoUno}/>
        </div>
        <div className="max-w-max  w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img alt="feature" className="object-cover object-center h-full w-full" src={fondoDos}/>
        </div>
        <div className="max-w-max  w-full mb-10 lg:mb-0 rounded-lg overflow-hidden ">
          <img alt="feature" className="object-cover object-center h-full w-full bg--imagen" src={fondoUno}/>
        </div>
        {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
      </section>
      <section>
      <div className="bg-[#425cc7]  py-20 px-6 font-[sans-serif]">
      <div className="container mx-auto text-center">
        <div className="mx-auto text-6xl flex justify-center text-center text-white ">
          <Link to={`/proyectos`} className='hover:scale-150'>
            <FaPlus />
          </Link>
        {/* <button type="button" className="inline-block mt-10 px-6 py-3 bg-red-600 hover:bg-blue-700 text-white text-base font-medium rounded-md">uh</button> */}
        </div>
        
        
      </div>
    </div>
      </section>
      <Contacto />
    </>
  );
};

export default inicio;
