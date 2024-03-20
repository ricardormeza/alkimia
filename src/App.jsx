import Navbar from './components/header/Navbar'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <div className='bg-red-500'>
      <h1 className="text-3xl font-bold text-yellow-500 underline">
      Hello world!
    </h1>
    </div>
    </>
  )
}

export default App
