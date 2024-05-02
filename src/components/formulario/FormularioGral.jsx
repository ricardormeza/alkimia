import { useForm } from 'react-hook-form'

export default function FormularioGral() {
    const {register, handleSubmit, 
        formState:{errors},
        reset,
    } = useForm();

    const onSubmit = handleSubmit((data)=>{
        console.log(data);
        alert('Enviando formulario...')
        reset()
    })
  return (
    <>
    <form onSubmit={onSubmit} action="" className="md:col-span-2">
        <h2>formulario</h2>
            <div className="relative flex items-center sm:col-span-2">
                {/* NOMBRE */}
                <input
                    type="text"
                    placeholder="Nombre"
                    className="px-2 py-3 mb-2 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                    {...register("nombre",  {required: true, minLength:2,maxLength: 50})}
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
                {errors.nombre && <span className='text-red-500'>Los campos * son requeridos</span> }
                <div className="grid sm:grid-cols-2 gap-6">
                <div className="relative flex items-center">
                    {/* EMPRESA */}
                    <input
                    type="text"
                    placeholder="Empresa"
                    className="px-2 pt-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                    {...register("empresa", {required: true, maxLength: 100})}
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
                        {errors.empresa && <span className='block text-red-500 text-sm'>*</span> }
                </div>
                <div className="relative flex items-center">
                    {/* EMAIL */}
                    <input
                    type="email"
                    placeholder="E-mail"
                    className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                    {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
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
                    {errors.email && <span className='block text-red-500 text-sm'>*</span> }
                </div>
                <div className="relative flex items-center">
                    {/* TELEFONO */}
                    <input
                    type="number"
                    placeholder="Teléfono"
                    className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                    {...register("telefono",{required: true, minLength: 6, maxLength: 12})}
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
                    {errors.telefono && <span className='block text-red-500 text-sm'>*</span> }
                </div>
                <div className="relative flex items-center">
                    {/* SERVICIOS */}
                    {/* <label htmlFor="" className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none">Servicios</label> */}
                    {/* <input
                    type="text"
                    placeholder="Servicios de interés"
                    className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                    /> */}
                    <select 
                        defaultValue="opt1"
                        name="" 
                        id=""  
                        className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                        {...register("servicioInteres", { required: true })}
                        >
                        <option disabled value="opt1" >-- Seleccione servicio de interés --</option>
                        <option value="branding">Branding</option>
                        <option value="diseno">Diseño gráfico</option>
                        <option value="marketing">Marketing digital</option>
                        <option value="web">Desarrollo web</option>
                        <option value="google">Google ADS</option>
                    </select>
                    {/* <svg
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
                    </svg> */}
                {errors.servicioInteres && <span className='block text-red-500 text-sm'>*</span> }
                </div>
                <div className="relative flex items-center sm:col-span-2">
                    <textarea
                    placeholder="Comentarios"
                    className="px-2 pt-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                    {...register("mensaje")}
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
                type="submit"
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
    </>
  )
}
