import { Route, Routes } from 'react-router-dom'

//views
import Menu from './components/Menu'

//components
import Home from './views/Home'
import Favoritas from './views/Favoritas'

//CSS
/* import './App.css' */
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (
    <>
      <Menu/>
      <Routes>
        <Route
          path='/'
          element={<Home/>}/>
        <Route
          path='/favoritas'
          element={<Favoritas/>}/>
      </Routes>
      
    </>
  )
}

export default App
