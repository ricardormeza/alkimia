import ciruloAzul from '../../assets/circulo-azul1.webp'
import circuloGris from '../../assets/circulo-gris1.webp'
const inicio = () => {
  return (
    <>
    <section className='mx-auto py-16 '>
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
          <p className='espacio'>Esto es  </p><p>&#32;</p><h1> ALKIMIA</h1>
        </div>
        <div className="contenido-hero_cta">
          <h2>Una aleación que logra resultados increíbles</h2>

        </div>
      </div>
      </div>
    </section>
    <section>
    <h2>holo</h2>
    </section>
    </>
  )
}

export default inicio