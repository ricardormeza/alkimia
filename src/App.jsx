import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Navbarf from './components/header/Navbarf'
import './App.css'
import { AnimatePresence } from 'framer-motion'
// import NavbarDos from './components/header/NavbarDos'
// import Inicio from './pages/1.inicio/inicio'
// import Nosotros from './pages/4.nosotros/nosotros'
// import Servicios from './pages/2.servicios/servicios'
// import Proyectos from './pages/5.proyectos/proyectos'
// import Contacto from './pages/3.contacto/contacto'
// import Acento from './pages/6.proyecto/cliente-acento-coffe-roaster'
// import Footer from './components/footer/footer'
// import UseTitle from './hooks/useTitle'

const Inicio = lazy( () => import('./pages/1.inicio/inicio'))
const Nosotros = lazy( () => import('./pages/4.nosotros/nosotros'))
const Servicios = lazy( () => import('./pages/2.servicios/servicios'))
const Proyectos = lazy( () => import('./pages/5.proyectos/proyectos'))
const Contacto = lazy( () => import('./pages/3.contacto/contacto'))
const Acento = lazy( () => import('./pages/6.proyecto/cliente-acento-coffe-roaster'))
const Footer = lazy( () => import('./components/footer/footer'))

function App() {
  // const [count, setCount] = useState(0)
  // UseTitle({title: 'Pepito'})

  return (
    <>
    <AnimatePresence mode='wait'>
      <Suspense fallback={<h2>Cargando...</h2>}>
      <Router>
        <Navbarf />
      <Routes>
        <Route exact path='/' element={<Inicio />}/>
        <Route path='/nosotros' element={<Nosotros />}/>
        <Route path='/servicios' element={<Servicios />}/>
        <Route path='/proyectos' element={<Proyectos />}/>
        <Route path='/contacto' element={<Contacto />}/>
        <Route path='/cliente/cliente-acento-coffe-roasters' element={<Acento />}/>
      </Routes>
        <Footer/>
      </Router>
      </Suspense>
    </AnimatePresence>
    </>
  )
}

export default App
