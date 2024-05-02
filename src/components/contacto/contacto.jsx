import FormularioGral from "../formulario/FormularioGral";

export default function contacto() {
  return (
    <section className="my-2">
      <div className="my-20" id="contacto">
        <h2 className="fuenteTitulo text-5xl py-14 text-[#425cc5] font-extrabold text-center">
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
            <FormularioGral/>
            {/* FORMULARIO INICIO */}
          
        </div>
      </div>
    </section>
  );
}
