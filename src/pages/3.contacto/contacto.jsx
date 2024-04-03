
// import ImagenUno from '../../assets/circulo-azul1.webp'
// import ImagenDos from '../../assets/circulo-gris1.webp'
// import ImagenTres from '../../assets/tienda.png'
import ImagenCuatro from '../../assets/pixel-art-7284052_1280.png'
// import ImagenCinco from '../../assets/dos.webp'
// import ImagenSeis from '../../assets/uno.webp'
// import Animat from '../../components/animat/animat'




const contacto = () => {
  return (
    <>
    
    {/* <Animat /> */}
    {/* HERO SECTION INICIO */}
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 items-center justify-center flex-col">
        <img src={ImagenCuatro} className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero"  />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font fuenteTitulo sm:text-4xl text-3xl mb-4 font-medium text-[#425cc5]">Contactános</h1>
          <p className="mb-8 leading-relaxed">En Alkimia estamos comprometidos a ayudarte y orientarte en el
            momento que lo necesites. No dudes en ponerte en contacto con
            nosotros, ¡estamos a tu disposición!.</p>
        </div>
      </div>
    </section>
    {/* HERO SECTION FIN */}
    {/* FORMULARIO INICIO */}
    <section className="my-2">
      <div className="my-20" id="contacto">
        <h2 className="fuenteTitulo text-5xl  text-[#425cc5] font-extrabold text-center">
          Hablemos de tu proyecto
        </h2>
        {/* <div className="grid sm:grid-cols-2 items-start gap-16 p-8 mx-auto max-w-4xl "> */}
        <div className="grid sm:grid-cols-3 items-start gap-16 p-8 mx-auto max-w-4xl ">
          <div>
            <h3 className="fuenteTitulo text-2xl text-[#425cc5] font-extrabold">
              Contactanos para desarrollar tu proyecto.
            </h3>
            <p className="text-sm text-gray-400 mt-3">
              Gestión de redes so ciales Publicidad pagada en redes socia les
              Campañas en Google Ads Desarrollo web.
            </p>
          </div>
            {/* FORMULARIO INICIO */}
          <form className="md:col-span-2">
            <div className="relative flex items-center sm:col-span-2">
              <input
                type="text"
                placeholder="Nombre"
                className="px-2 py-3 mb-2 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                className="w-[18px] h-[18px] absolute right-2"
                viewBox="0 0 24 24"
              >
                <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                <path
                  d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                  data-original="#000000"
                ></path>
              </svg>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Empresa"
                  className="px-2 pt-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path
                    d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 682.667 682.667"
                >
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                    </clipPath>
                  </defs>
                  <g
                    clipPath="url(#a)"
                    transform="matrix(1.33 0 0 -1.33 0 682.667)"
                  >
                    <path
                      fill="none"
                      strokeMiterlimit="10"
                      strokeWidth="40"
                      d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                      data-original="#000000"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="relative flex items-center">
                <input
                  type="number"
                  placeholder="Teléfono"
                  className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                />
                <svg
                  fill="#bbb"
                  className="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Servicios de interés"
                  className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path
                    d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              
              <div className="relative flex items-center sm:col-span-2">
                <textarea
                  placeholder="Comentarios"
                  className="px-2 pt-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                ></textarea>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 682.667 682.667"
                >
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                    </clipPath>
                  </defs>
                  <g
                    clipPath="url(#a)"
                    transform="matrix(1.33 0 0 -1.33 0 682.667)"
                  >
                    <path
                      fill="none"
                      strokeMiterlimit="10"
                      strokeWidth="40"
                      d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                      data-original="#000000"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
            <button
              type="button"
              className="border border-sky-700 mt-12 flex items-center justify-center text-sm  max-lg:w-full px-6 py-2.5 font-semibold bg-gray-200 text-[#425cc7] hover:text-white hover:bg-[#5a75e0]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#425cc7"
                className="mr-2 hover:text-[#fff]"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fillRule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clipRule="evenodd"
                  data-original="#000000"
                />
              </svg>
              Contáctanos
            </button>
          </form>
        </div>
      </div>
    </section>
    {/* FORMULARIO FIN */}
    <section className="text-gray-600 body-font relative">
      {/* DOS SECCIONES INICIO */}
      <section className="text-gray-600 body-font">
        <div className="contenedor container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2 md:w-full">
              <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                  <path fill="#e0e0e0" d="M35.13 42H19V30C19 30 35.48 42 35.13 42zM6.3 10.87c.1-.33.22-.65.38-.96C7.36 8.46 8.54 7.3 10 6.64 10.149 6.565 11 13 11 13S6.193 11.207 6.3 10.87z"></path><path fill="#7cb342" d="M18 6H20V23H18z"></path><path fill="#ffcdd2" d="M11,18v23.73c-0.35-0.09-0.68-0.21-1-0.37c-2.36-1.08-4-3.47-4-6.23V18H11z"></path><path fill="#aed581" d="M42,25v10.13c0,0.36-0.03,0.71-0.09,1.05L20,20.6V6h3C23,16.48,31.52,25,42,25z"></path><path fill="#bdbdbd" d="M12 14h-2V6.64c.32-.16.65-.28 1-.37.32-.1.66-.17 1-.2C12.28 6.02 12 14 12 14zM18 32H20V42H18z"></path><path fill="#f9a825" d="M42,35.02v0.11c0,0.36-0.03,0.71-0.09,1.05c-0.06,0.43-0.16,0.84-0.31,1.23 c-0.82,2.36-2.9,4.13-5.44,4.5C35.83,41.97,35.48,42,35.13,42h-0.57l-3.02-2.15c-0.01,0-0.01-0.01-0.01-0.01l-4.5-3.2 c0,0-0.01,0-0.01-0.01l-6.36-4.52L20,31.65l-1-0.72l-1-0.71l-0.91-0.64L16.28,29l-2.49-1.77L12.06,26L12,25.96l-1-0.71l-1-0.72 L9.26,24H9.25L6,21.69v-8.82c0-0.69,0.1-1.37,0.3-2c0.1-0.33,0.22-0.65,0.38-0.96L10,12.27l2,1.42l1,0.71l5,3.55l1,0.71l0.55,0.39 L20,19.37v0.01l14.73,10.47l1.6,1.14l2.66,1.89l0.98,0.7L42,35.02z"></path><path fill="#fdd835" d="M41.91,36.18c-0.06,0.43-0.16,0.84-0.31,1.23c-0.82,2.36-2.9,4.13-5.44,4.5l-2.72-1.93 c-0.01,0.01-0.01,0.01-0.02,0l-1.49-1.08l-4.15-2.94c0,0,0,0-0.01-0.01l-1.51-1.08l-5.07-3.6L20,30.42l-1-0.71L18,29l-1.53-1.09 h-0.01l-2.31-1.65L13,25.45l-1-0.72l-1-0.71l-1-0.71l-0.11-0.08L6,20.47v-7.6c0-0.69,0.1-1.37,0.3-2L10,13.5l1,0.71l2,1.42l5,3.55 l1,0.71l1,0.71v0.01l12.41,8.81l1.89,1.35c0,0,0,0.01,0.01,0.01l4.6,3.26l0.88,0.63L41.91,36.18z"></path><path fill="#ef9a9a" d="M12,33v8.94c-0.34-0.04-0.68-0.11-1-0.21c-0.35-0.09-0.68-0.21-1-0.37V32L12,33z"></path><path fill="#fafafa" d="M19,6v36h-6.13c-0.3,0-0.59-0.02-0.87-0.06c-0.34-0.04-0.68-0.11-1-0.21V6.27 c0.32-0.1,0.66-0.17,1-0.2C12.28,6.02,12.57,6,12.87,6H19z"></path><path fill="#3996e8" d="M18,6v17h-6V6.052C12.28,6.015,12.57,6,12.87,6H18z"></path><path fill="#1976d2" d="M38.77,29.04c0,0-0.77,0.96-2.77,0.96s-3-1-3-1s-1,1-3,1s-2.77-0.96-2.77-0.96 C26.45,30.16,26,31.53,26,33c0,3.87,3.13,7,7,7s7-3.13,7-7C40,31.53,39.55,30.16,38.77,29.04z"></path><path fill="#d84315" d="M38,33H28c0-0.42,0.05-0.83,0.15-1.23C28.72,31.92,29.34,32,30,32c1.28,0,2.29-0.31,3-0.64 c0.71,0.33,1.72,0.64,3,0.64c0.66,0,1.28-0.08,1.85-0.23C37.95,32.17,38,32.58,38,33z"></path><path fill="#fbc02d" d="M10 12.27L10 13.5 10 24.53 11 25.25 11 14.21 11 12.98zM20 19.38L20 31.65 19 30.93 19 18.66z"></path><path fill="#1976d2" d="M15 21A7 7 0 1 0 15 35A7 7 0 1 0 15 21Z"></path><path fill="#e89c23" d="M10 12.27L10 13.5 11 14.21 11 12.98zM19 18.66L19 19.89 20 20.6 20 19.37z"></path><path fill="#e9e9e9" d="M42,16.96V26c-11.03,0-20-8.97-20-20h9.04C31.52,11.83,36.17,16.48,42,16.96z"></path><path fill="#7cb342" d="M42,13v4.96C35.62,17.48,30.52,12.38,30.05,6H35C38.87,6,42,9.13,42,13z"></path><path fill="#aed581" d="M42,13v3.96C36.17,16.48,31.52,11.83,31.04,6H35C38.87,6,42,9.13,42,13z"></path><g><path fill="#7cb342" d="M23,6h-1c0,11.03,8.97,20,20,20v-1C31.52,25,23,16.48,23,6z"></path></g><g><path fill="#fafafa" d="M15 24L12 32 15 30 18 32z"></path><path fill="#fff" d="M38.45,30.48C37.88,30.76,37.08,31,36,31c-1.39,0-2.39-0.41-3-0.77C32.39,30.59,31.39,31,30,31 c-1.08,0-1.88-0.24-2.45-0.52C27.19,31.26,27,32.11,27,33c0,3.31,2.69,6,6,6s6-2.69,6-6C39,32.11,38.81,31.26,38.45,30.48z M33,38 c-2.415,0-4.434-1.721-4.899-4h9.798C37.434,36.279,35.415,38,33,38z M28,33c0-0.422,0.051-0.834,0.151-1.233 C28.724,31.922,29.343,32,30,32c1.283,0,2.288-0.308,3-0.641C33.712,31.692,34.717,32,36,32c0.657,0,1.276-0.078,1.849-0.233 C37.949,32.166,38,32.578,38,33H28z"></path><path fill="#fff" d="M32.125 35.24c0 0 0-.625-.625-.625s-.625.625-.625.625h.375c0-.114.043-.25.25-.25.066 0 .242 0 .25.25 0 .215-.291.549-.487.707l-.013.01-.375.325v.036.298h1.25V36.24h-.628C31.497 36.24 32.125 35.74 32.125 35.24zM33.4 35.615c.125-.102.225-.243.225-.427 0-.316-.28-.573-.625-.573s-.625.257-.625.573c0 .184.1.325.225.427-.125.102-.225.243-.225.427 0 .316.28.573.625.573s.625-.257.625-.573C33.625 35.858 33.525 35.717 33.4 35.615zM33 34.99c.135 0 .25.091.25.198 0 .106-.157.19-.25.228-.092-.037-.25-.121-.25-.228C32.75 35.079 32.862 34.99 33 34.99zM33 36.24c-.138 0-.25-.089-.25-.198 0-.106.157-.19.25-.228.092.037.25.121.25.228C33.25 36.149 33.135 36.24 33 36.24zM34.499 34.99c.104 0 .138.033.163.067.057.075.087.207.087.382v.354c0 .175-.03.307-.086.381-.026.034-.06.067-.162.067-.105 0-.139-.033-.165-.067-.057-.075-.087-.206-.087-.38v-.355c0-.175.03-.307.086-.381C34.362 35.023 34.396 34.99 34.499 34.99M34.499 34.615c-.199 0-.352.071-.461.214s-.163.346-.163.608v.355c0 .261.055.463.164.607.109.144.264.215.463.215.198 0 .351-.071.46-.214.109-.143.163-.346.163-.608v-.354c0-.262-.055-.465-.164-.608C34.852 34.687 34.698 34.615 34.499 34.615L34.499 34.615z"></path></g>
                </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Visitanos</h2>
                  <p className="leading-relaxed text-base">Calle Queretaro 2331 - 4 Col. Madero Sur en Tijuana, B.C. México.</p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2 md:w-full">
              <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100">
                  <path fill="#c7ede6" d="M87.215,56.71C88.35,54.555,89,52.105,89,49.5c0-6.621-4.159-12.257-10.001-14.478 C78.999,35.015,79,35.008,79,35c0-11.598-9.402-21-21-21c-9.784,0-17.981,6.701-20.313,15.757C36.211,29.272,34.638,29,33,29 c-7.692,0-14.023,5.793-14.89,13.252C12.906,43.353,9,47.969,9,53.5C9,59.851,14.149,65,20.5,65c0.177,0,0.352-0.012,0.526-0.022 C21.022,65.153,21,65.324,21,65.5C21,76.822,30.178,86,41.5,86c6.437,0,12.175-2.972,15.934-7.614C59.612,80.611,62.64,82,66,82 c4.65,0,8.674-2.65,10.666-6.518C77.718,75.817,78.837,76,80,76c6.075,0,11-4.925,11-11C91,61.689,89.53,58.727,87.215,56.71z"></path><path fill="#fff" d="M15.405,51H5.5C5.224,51,5,50.776,5,50.5S5.224,50,5.5,50h9.905c0.276,0,0.5,0.224,0.5,0.5 S15.682,51,15.405,51z"></path><path fill="#fff" d="M18.5,51h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5 S18.777,51,18.5,51z"></path><path fill="#fff" d="M23.491,53H14.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h8.991c0.276,0,0.5,0.224,0.5,0.5 S23.767,53,23.491,53z"></path><path fill="#fff" d="M12.5,53h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5 S12.777,53,12.5,53z"></path><path fill="#fff" d="M9.5,53h-2C7.224,53,7,52.776,7,52.5S7.224,52,7.5,52h2c0.276,0,0.5,0.224,0.5,0.5S9.777,53,9.5,53 z"></path><path fill="#fff" d="M15.5,55h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5 S15.776,55,15.5,55z"></path><path fill="#fff" d="M18.5,46c-0.177,0-0.823,0-1,0c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5 c0.177,0,0.823,0,1,0c0.276,0,0.5-0.224,0.5-0.5C19,46.224,18.776,46,18.5,46z"></path><path fill="#fff" d="M18.5,48c-0.177,0-4.823,0-5,0c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5 c0.177,0,4.823,0,5,0c0.276,0,0.5-0.224,0.5-0.5C19,48.224,18.776,48,18.5,48z"></path><path fill="#fff" d="M23.5,50c-0.177,0-2.823,0-3,0c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5 c0.177,0,2.823,0,3,0c0.276,0,0.5-0.224,0.5-0.5C24,50.224,23.776,50,23.5,50z"></path><path fill="#fff" d="M71.5,26h-10c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h10c0.276,0,0.5,0.224,0.5,0.5 S71.776,26,71.5,26z"></path><path fill="#fff" d="M75.5,26h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5 S75.776,26,75.5,26z"></path><path fill="#fff" d="M80.5,28h-10c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h10c0.276,0,0.5,0.224,0.5,0.5 S80.777,28,80.5,28z"></path><path fill="#fff" d="M68.5,28h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5 S68.776,28,68.5,28z"></path><path fill="#fff" d="M65.375,28H63.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1.875c0.276,0,0.5,0.224,0.5,0.5 S65.651,28,65.375,28z"></path><path fill="#fff" d="M74.5,24h-5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h5c0.276,0,0.5,0.224,0.5,0.5 S74.777,24,74.5,24z"></path><path fill="#fff" d="M71.5,30h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5 S71.776,30,71.5,30z"></path><g><path fill="#fdfcef" d="M30.815,77.5c0,0,11.691,0,11.762,0c2.7,0,4.888-2.189,4.888-4.889 c0-2.355-1.666-4.321-3.884-4.784c0.026-0.206,0.043-0.415,0.043-0.628c0-2.796-2.267-5.063-5.063-5.063 c-1.651,0-3.113,0.794-4.037,2.017c-0.236-3.113-3.017-5.514-6.27-5.116c-2.379,0.291-4.346,2.13-4.784,4.486 c-0.14,0.756-0.126,1.489,0.014,2.177c-0.638-0.687-1.546-1.119-2.557-1.119c-1.85,0-3.361,1.441-3.48,3.261 c-0.84-0.186-1.754-0.174-2.717,0.188c-1.84,0.691-3.15,2.423-3.227,4.387c-0.109,2.789,2.12,5.085,4.885,5.085 c0.21,0,0.948,0,1.118,0h10.151"></path><path fill="#472b29" d="M42.576,78H30.815c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h11.762 c2.42,0,4.389-1.969,4.389-4.389c0-2.067-1.466-3.873-3.486-4.295c-0.254-0.053-0.426-0.292-0.394-0.55 c0.022-0.186,0.039-0.375,0.039-0.567c0-2.516-2.047-4.563-4.563-4.563c-1.438,0-2.765,0.663-3.638,1.818 c-0.125,0.166-0.342,0.237-0.539,0.179c-0.2-0.059-0.342-0.235-0.358-0.442c-0.104-1.377-0.778-2.671-1.85-3.549 c-1.084-0.887-2.452-1.279-3.861-1.109c-2.165,0.265-3.955,1.943-4.353,4.081c-0.124,0.667-0.12,1.335,0.013,1.986 c0.044,0.22-0.063,0.442-0.262,0.544c-0.197,0.102-0.442,0.061-0.595-0.104c-0.574-0.619-1.353-0.959-2.19-0.959 c-1.568,0-2.878,1.227-2.98,2.793c-0.01,0.146-0.082,0.28-0.199,0.367c-0.116,0.087-0.268,0.119-0.407,0.088 c-0.844-0.186-1.64-0.131-2.434,0.167c-1.669,0.626-2.836,2.209-2.903,3.938c-0.047,1.207,0.387,2.35,1.222,3.218 C14.061,76.522,15.185,77,16.389,77h11.27c0.276,0,0.5,0.224,0.5,0.5s-0.224,0.5-0.5,0.5h-11.27c-1.479,0-2.858-0.587-3.884-1.653 s-1.559-2.469-1.501-3.951c0.084-2.126,1.511-4.069,3.552-4.836c0.8-0.3,1.628-0.4,2.468-0.298 c0.377-1.823,1.996-3.182,3.904-3.182c0.685,0,1.354,0.179,1.944,0.51c-0.001-0.386,0.035-0.773,0.107-1.159 c0.476-2.562,2.619-4.573,5.214-4.891c1.688-0.206,3.321,0.267,4.616,1.328c1.004,0.823,1.716,1.951,2.038,3.193 c1.012-0.916,2.318-1.425,3.713-1.425c3.067,0,5.563,2.496,5.563,5.563c0,0.083-0.002,0.166-0.007,0.249 c2.254,0.672,3.848,2.777,3.848,5.164C47.965,75.583,45.548,78,42.576,78z"></path><path fill="#fdfcef" d="M27.982,66.731c-1.808-0.119-3.365,1.13-3.476,2.789c-0.014,0.206-0.005,0.409,0.025,0.606 c-0.349-0.394-0.865-0.661-1.458-0.7c-1.085-0.071-2.022,0.645-2.158,1.62c-0.197-0.054-0.403-0.09-0.616-0.104 c-1.582-0.104-2.944,0.989-3.042,2.441"></path><path fill="#472b29" d="M17.257,73.632c-0.006,0-0.011,0-0.017,0c-0.138-0.009-0.242-0.128-0.232-0.266 c0.106-1.586,1.563-2.783,3.308-2.674c0.135,0.009,0.271,0.027,0.408,0.053c0.272-0.967,1.255-1.639,2.365-1.568 c0.426,0.028,0.824,0.161,1.163,0.382c0.001-0.019,0.002-0.037,0.004-0.055c0.12-1.794,1.8-3.146,3.742-3.022 c0.138,0.009,0.242,0.128,0.232,0.266c-0.008,0.137-0.106,0.245-0.266,0.233c-1.658-0.104-3.108,1.038-3.211,2.557 c-0.012,0.186-0.004,0.372,0.023,0.551c0.017,0.11-0.041,0.217-0.141,0.265c-0.102,0.046-0.221,0.022-0.294-0.061 c-0.317-0.358-0.786-0.583-1.287-0.616c-0.959-0.064-1.774,0.555-1.893,1.405c-0.011,0.071-0.051,0.134-0.11,0.174 s-0.135,0.052-0.203,0.033c-0.189-0.051-0.38-0.084-0.567-0.096c-1.452-0.099-2.687,0.896-2.776,2.208 C17.497,73.531,17.388,73.632,17.257,73.632z"></path><g><path fill="#fdfcef" d="M44.556,68.4c-1.699-0.801-3.664-0.234-4.389,1.267c-0.09,0.186-0.157,0.379-0.201,0.574"></path><path fill="#472b29" d="M39.966,70.49c-0.019,0-0.037-0.002-0.057-0.006c-0.134-0.031-0.218-0.166-0.187-0.3 c0.05-0.216,0.123-0.427,0.219-0.625c0.783-1.622,2.9-2.243,4.721-1.384c0.125,0.059,0.179,0.208,0.12,0.333 c-0.06,0.125-0.21,0.177-0.333,0.12c-1.575-0.743-3.394-0.226-4.057,1.149c-0.08,0.165-0.142,0.34-0.184,0.521 C40.183,70.412,40.08,70.49,39.966,70.49z"></path></g></g><path fill="#1fc648" d="M28.989,65.011V36.989c0-3.866,3.134-7,7-7h28.023c3.866,0,7,3.134,7,7v28.023c0,3.866-3.134,7-7,7	H35.989C32.123,72.011,28.989,68.877,28.989,65.011z"></path><path fill="#472b29" d="M64,30.4c3.639,0,6.6,2.961,6.6,6.6v28c0,3.639-2.961,6.6-6.6,6.6H36c-3.639,0-6.6-2.961-6.6-6.6V37	c0-3.639,2.961-6.6,6.6-6.6H64 M64,29H36c-4.418,0-8,3.582-8,8v28c0,4.418,3.582,8,8,8h28c4.418,0,8-3.582,8-8V37	C72,32.582,68.418,29,64,29L64,29z"></path><path fill="#472b29" d="M64,69.375H36c-2.413,0-4.375-1.962-4.375-4.375V37c0-2.413,1.962-4.375,4.375-4.375h28	c2.413,0,4.375,1.962,4.375,4.375v3.625C68.375,40.832,68.207,41,68,41s-0.375-0.168-0.375-0.375V37	c0-1.999-1.626-3.625-3.625-3.625H36c-1.999,0-3.625,1.626-3.625,3.625v28c0,1.999,1.626,3.625,3.625,3.625h28	c1.999,0,3.625-1.626,3.625-3.625V48.25c0-0.207,0.168-0.375,0.375-0.375s0.375,0.168,0.375,0.375V65	C68.375,67.413,66.413,69.375,64,69.375z"></path><path fill="#472b29" d="M68,46c-0.207,0-0.375-0.168-0.375-0.375v-3.25C67.625,42.168,67.793,42,68,42	s0.375,0.168,0.375,0.375v3.25C68.375,45.832,68.207,46,68,46z"></path><g><path fill="#fdfcef" d="M80.248,76.5c1.883,0,3.517,0,3.54,0c2.11,0,3.821-1.674,3.821-3.739 c0-1.802-1.302-3.305-3.035-3.66c0.02-0.158,0.034-0.317,0.034-0.48c0-2.139-1.772-3.873-3.957-3.873 c-1.29,0-2.433,0.607-3.155,1.543c-0.185-2.381-2.358-4.218-4.9-3.913c-1.859,0.223-3.397,1.629-3.739,3.431 c-0.11,0.578-0.098,1.139,0.011,1.665c-0.498-0.525-1.208-0.856-1.998-0.856c-1.446,0-2.627,1.102-2.72,2.494 c-0.657-0.142-1.371-0.133-2.123,0.143c-1.438,0.528-2.462,1.853-2.522,3.356c-0.085,2.133,1.657,3.889,3.818,3.889 c0.164,0,0.741,0,0.874,0h7.934 M73.77,76.5h0.36"></path><path fill="#472b29" d="M83.787,77h-3.54c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h3.54 c1.831,0,3.321-1.453,3.321-3.239c0-1.524-1.108-2.857-2.637-3.17c-0.257-0.052-0.429-0.294-0.396-0.554 c0.018-0.137,0.03-0.275,0.03-0.416c0-1.86-1.551-3.373-3.457-3.373c-1.093,0-2.099,0.491-2.76,1.348 c-0.125,0.165-0.343,0.232-0.538,0.174c-0.198-0.059-0.34-0.234-0.355-0.44c-0.079-1.019-0.565-1.943-1.37-2.603 c-0.828-0.68-1.886-0.984-2.973-0.853c-1.646,0.197-3.006,1.442-3.307,3.028c-0.094,0.494-0.091,0.988,0.009,1.471 c0.046,0.219-0.06,0.441-0.258,0.544c-0.196,0.104-0.439,0.064-0.595-0.099c-0.428-0.451-1.008-0.7-1.635-0.7 c-1.17,0-2.146,0.891-2.221,2.027c-0.01,0.145-0.082,0.279-0.198,0.366c-0.115,0.088-0.263,0.12-0.406,0.089 c-0.639-0.139-1.241-0.097-1.847,0.124c-1.262,0.464-2.144,1.632-2.193,2.906c-0.035,0.875,0.282,1.708,0.895,2.345 C61.533,75.636,62.393,76,63.321,76h8.808c0.276,0,0.5,0.224,0.5,0.5s-0.224,0.5-0.5,0.5h-8.808 c-1.185,0-2.331-0.485-3.144-1.332c-0.803-0.835-1.219-1.928-1.174-3.078c0.066-1.674,1.212-3.203,2.849-3.805 c0.612-0.225,1.245-0.307,1.881-0.245c0.345-1.396,1.629-2.424,3.136-2.424c0.493,0,0.977,0.113,1.413,0.323 c0.01-0.242,0.037-0.484,0.083-0.726c0.381-2.009,2.096-3.585,4.17-3.834c1.364-0.16,2.686,0.218,3.727,1.073 c0.747,0.613,1.278,1.409,1.546,2.301c0.791-0.648,1.785-1.006,2.843-1.006c2.458,0,4.457,1.961,4.457,4.373 c0,0.034-0.001,0.068-0.002,0.103c1.765,0.555,3.004,2.188,3.004,4.038C88.109,75.098,86.17,77,83.787,77z M74.129,77H73.77 c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h0.359c0.276,0,0.5,0.224,0.5,0.5S74.406,77,74.129,77z"></path><path fill="#472b29" d="M82.08,71.197c-0.018,0-0.036-0.002-0.055-0.006c-0.135-0.03-0.22-0.164-0.189-0.299 c0.038-0.167,0.095-0.329,0.17-0.479c0.604-1.223,2.273-1.673,3.721-1.006c0.126,0.058,0.181,0.207,0.122,0.332 c-0.057,0.125-0.209,0.179-0.331,0.122c-1.204-0.556-2.579-0.21-3.063,0.774c-0.058,0.115-0.102,0.238-0.13,0.367 C82.298,71.118,82.195,71.197,82.08,71.197z"></path><g><path fill="#472b29" d="M76.921,77h-1.107c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1.107c0.276,0,0.5,0.224,0.5,0.5 S77.198,77,76.921,77z"></path></g></g><g><path fill="#472b29" d="M58.013,72.281c-0.027,0-0.056-0.007-0.08-0.023c-0.07-0.044-0.091-0.137-0.047-0.207l1.962-3.106 c0.044-0.07,0.138-0.091,0.207-0.047c0.07,0.044,0.091,0.137,0.047,0.207l-1.962,3.106C58.112,72.257,58.063,72.281,58.013,72.281z"></path><path fill="#472b29" d="M57.013,72.281c-0.027,0-0.056-0.007-0.08-0.023c-0.07-0.044-0.091-0.137-0.047-0.207l1.962-3.106 c0.044-0.07,0.139-0.091,0.207-0.047c0.07,0.044,0.091,0.137,0.047,0.207l-1.962,3.106C57.112,72.257,57.063,72.281,57.013,72.281z"></path><path fill="#472b29" d="M56.013,72.281c-0.027,0-0.056-0.007-0.08-0.023c-0.07-0.044-0.091-0.137-0.047-0.207l1.962-3.106 c0.044-0.07,0.139-0.091,0.207-0.047c0.07,0.044,0.091,0.137,0.047,0.207l-1.962,3.106C56.112,72.257,56.063,72.281,56.013,72.281z"></path><path fill="#472b29" d="M55.013,72.281c-0.027,0-0.056-0.007-0.08-0.023c-0.07-0.044-0.091-0.137-0.047-0.207l1.962-3.106 c0.044-0.07,0.139-0.091,0.207-0.047c0.07,0.044,0.091,0.137,0.047,0.207l-1.962,3.106C55.112,72.257,55.063,72.281,55.013,72.281z"></path><path fill="#472b29" d="M54.013,72.281c-0.027,0-0.056-0.007-0.08-0.023c-0.07-0.044-0.091-0.137-0.047-0.207l1.962-3.106 c0.044-0.07,0.139-0.091,0.207-0.047c0.07,0.044,0.091,0.137,0.047,0.207l-1.962,3.106C54.112,72.257,54.063,72.281,54.013,72.281z"></path><path fill="#472b29" d="M53.013,72.281c-0.027,0-0.056-0.007-0.08-0.023c-0.07-0.044-0.091-0.137-0.047-0.207l1.962-3.106 c0.044-0.07,0.138-0.091,0.207-0.047c0.07,0.044,0.091,0.137,0.047,0.207l-1.962,3.106C53.112,72.257,53.063,72.281,53.013,72.281z"></path><path fill="#472b29" d="M52.013,72.281c-0.027,0-0.056-0.007-0.08-0.023c-0.07-0.044-0.091-0.137-0.047-0.207l1.297-2.053 c0.044-0.07,0.138-0.091,0.207-0.047c0.07,0.044,0.091,0.137,0.047,0.207l-1.297,2.053C52.112,72.257,52.063,72.281,52.013,72.281z"></path><path fill="#472b29" d="M51.013,72.281c-0.027,0-0.056-0.007-0.08-0.023c-0.07-0.044-0.091-0.137-0.047-0.207l0.813-1.289 c0.043-0.071,0.139-0.09,0.207-0.047c0.07,0.044,0.091,0.137,0.047,0.207l-0.813,1.289C51.112,72.257,51.063,72.281,51.013,72.281z"></path></g><path fill="#fff" d="M42.36,37.875c0.655,0.986,1.998,3.088,2.881,4.476c0.521,0.819,0.536,1.864,0.041,2.7l-0.2,0.338	c-0.542,0.914-0.469,2.071,0.186,2.906c0.896,1.142,2.226,2.765,3.492,4.03c1.287,1.286,2.981,2.72,4.158,3.682	c0.827,0.676,1.98,0.758,2.891,0.204l0.37-0.224c0.798-0.484,1.793-0.487,2.592-0.006c1.365,0.821,3.449,2.085,4.438,2.743	c0.508,0.338,0.709,0.977,0.496,1.548c-0.637,1.714-1.678,3.561-4.974,3.561c-3.794,0-9.043-4.106-13.205-8.266l0,0	c-0.001-0.001-0.003-0.003-0.005-0.005c-0.001-0.001-0.003-0.003-0.005-0.005l0,0c-4.16-4.162-8.281-9.198-8.281-13.085	c0-3.536,1.862-4.457,3.577-5.095C41.383,37.166,42.022,37.367,42.36,37.875z"></path><path fill="#472b29" d="M49,59.024c-0.057,0-0.114-0.02-0.161-0.059c-0.662-0.559-1.339-1.161-2.01-1.789	c-0.101-0.094-0.106-0.252-0.012-0.354c0.094-0.102,0.254-0.105,0.354-0.012c0.665,0.622,1.335,1.219,1.99,1.772	c0.105,0.089,0.119,0.247,0.03,0.352C49.142,58.994,49.071,59.024,49,59.024z"></path><path fill="#472b29" d="M58.73,64.083c-2.088,0-4.739-1.184-7.88-3.518c-0.11-0.083-0.134-0.239-0.051-0.35	c0.083-0.112,0.239-0.133,0.35-0.052c3.052,2.269,5.603,3.419,7.581,3.419c3.056,0,4.084-1.633,4.739-3.398	c0.174-0.466,0.01-0.982-0.399-1.253c-0.959-0.638-2.938-1.841-4.429-2.737c-0.721-0.434-1.614-0.431-2.333,0.006l-0.37,0.224	c-0.997,0.604-2.275,0.515-3.179-0.225c-1.192-0.975-2.885-2.408-4.177-3.699c-1.277-1.278-2.614-2.909-3.511-4.052	c-0.714-0.909-0.797-2.19-0.205-3.188l0.2-0.337c0.45-0.76,0.436-1.694-0.037-2.438c-0.961-1.511-2.241-3.513-2.879-4.472	c-0.271-0.409-0.786-0.575-1.253-0.4c-1.727,0.642-3.413,1.546-3.413,4.86c0,3.117,2.762,7.46,8.208,12.908	c0.098,0.098,0.098,0.256,0,0.354s-0.256,0.098-0.354,0c-5.544-5.545-8.354-10.007-8.354-13.262c0-3.634,1.93-4.656,3.739-5.329	c0.683-0.253,1.442-0.011,1.843,0.592c0.641,0.962,1.922,2.967,2.885,4.48c0.574,0.904,0.592,2.039,0.045,2.961l-0.2,0.337	c-0.486,0.822-0.419,1.876,0.168,2.625c0.889,1.132,2.212,2.746,3.472,4.007c1.277,1.276,2.956,2.698,4.14,3.666	c0.739,0.606,1.785,0.682,2.603,0.184l0.37-0.224c0.879-0.533,1.97-0.536,2.851-0.007c1.495,0.899,3.48,2.107,4.448,2.75	c0.603,0.4,0.846,1.159,0.591,1.844C63.255,62.201,62.101,64.083,58.73,64.083z"></path><path fill="#472b29" d="M45.52,55.81c-0.069,0-0.13-0.03-0.18-0.08c-0.05-0.04-0.07-0.11-0.07-0.17	c0-0.07,0.021-0.13,0.07-0.18c0.07-0.07,0.18-0.09,0.27-0.05c0.03,0.01,0.061,0.03,0.08,0.05c0.051,0.05,0.08,0.11,0.08,0.18	c0,0.06-0.029,0.13-0.08,0.17C45.649,55.78,45.58,55.81,45.52,55.81z"></path><path fill="#472b29" d="M45.518,55.812c-0.08,0-0.157-0.038-0.205-0.11l0.003-0.001c-0.06-0.113-0.035-0.265,0.072-0.337	c0.116-0.077,0.26-0.059,0.337,0.056c0.076,0.115,0.048,0.272-0.067,0.349C45.614,55.797,45.565,55.812,45.518,55.812z"></path><path fill="#472b29" d="M45.525,55.817c-0.062,0-0.123-0.023-0.17-0.066c-0.083-0.073-0.11-0.196-0.059-0.3	c0.063-0.124,0.215-0.174,0.335-0.112c0.039,0.02,0.077,0.053,0.102,0.089c0.076,0.115,0.046,0.27-0.069,0.347	C45.621,55.804,45.573,55.817,45.525,55.817z"></path><path fill="#472b29" d="M45.52,55.82c-0.06,0-0.13-0.03-0.17-0.08c-0.05-0.04-0.08-0.11-0.08-0.17	c0-0.07,0.03-0.13,0.08-0.18c0.021-0.02,0.05-0.04,0.08-0.05c0.09-0.04,0.2-0.02,0.271,0.05c0.05,0.05,0.08,0.11,0.08,0.18	c0,0.06-0.03,0.13-0.08,0.17C45.66,55.79,45.59,55.82,45.52,55.82z"></path>
                </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Llamanos o escribenos</h2>
                  <p className="leading-relaxed text-base">Tel. 664 211 9491 o info@alkimia.agency.</p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* DOS SECCIONES FIN */}
      {/* <div className="container px-5  mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl fuenteTitulo text-2xl font-medium title-font mb-4 text-[#425cc5]">Visitanos</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Calle Queretaro 2331 - 4 Col. Madero Sur en Tijuana,B.C.</p>
        </div>
        
      </div> */}
      {/* MAPA INICIO */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
        <iframe
            width="100%"
            height="100%"
            className="lg:w-4/6 md:w-4/6 w-5/6 min-h-80 mb-10 object-cover object-center rounded"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.2671185151313!2d-117.0255449!3d32.5207056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d949ae6473f6d5%3A0xc0579d4e9205faa9!2sAlkimia%20publicidad!5e0!3m2!1ses!2smx!4v1649284304572!5m2!1ses!2smx"
          ></iframe>
        </div>
      </section>
      {/* MAPA FIN */}
    </section>
    
    </>
  )
}

export default contacto