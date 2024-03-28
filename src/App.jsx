import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import NavbarDos from './components/header/NavbarDos'
import Navbarf from './components/header/Navbarf'
import Inicio from './pages/1.inicio/inicio'
import Nosotros from './pages/4.nosotros/nosotros'
import Servicios from './pages/2.servicios/servicios'
import Proyectos from './pages/5.proyectos/proyectos'
import Contacto from './pages/3.contacto/contacto'
import Acento from './pages/6.proyecto/cliente-acento-coffe-roaster'
import Footer from './components/footer/footer'
import UseTitle from './hooks/useTitle'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // UseTitle({title: 'Pepito'})

  return (
    <>
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

    
    </>
  )
}

export default App
