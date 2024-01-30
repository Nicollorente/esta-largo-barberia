import './App.css'
import Barberos from './Components/Barberos/Barberos'
import Home from './Components/Home/Home'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Servicios from './Components/Servicios/Servicios'
import Ubicacion from './Ubicacion/Ubicacion'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <>
<BrowserRouter>
<Navbar/>
<Routes >
  <Route exact path='/' element={<Home/>} />
  <Route exacth path='/servicios' element={<Servicios/>} />
  <Route exact path='/barberos' element={<Barberos/>} />
  <Route exact path='/ubicacion' element={<Ubicacion/>} />
</Routes>

</BrowserRouter>

    </>
  )
}

export default App
