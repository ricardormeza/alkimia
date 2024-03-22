import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import NavbarDos from './components/header/NavbarDos'
import Inicio from './pages/1.inicio/inicio'
import Nosotros from './pages/2.servicios/servicios'
import Contacto from './pages/3.contacto/contacto'
import Footer from './components/footer/footer'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <NavbarDos />
    <Routes>
      <Route exact path='/' element={<Inicio />}/>
      <Route path='/servicios' element={<Nosotros />}/>
      <Route path='/contacto' element={<Contacto />}/>
    </Routes>
    </Router>

    <Footer />
    
    </>
  )
}

export default App
