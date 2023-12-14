import { Route,Routes } from 'react-router-dom'
import './App.css'
import Nav from "./ components/Nav"
import About from "./pages/About"
import Dashboard from "./pages/Dashbord"
import Stock from "./pages/Stock"
import Home from "./pages/Home"

function App() {
 

  return (
    <>
     <Nav /> 
     <Routes>
     <Route path='/' element={<Home />}/> 
     <Route path='/about' element={<About  />}/> 
     <Route path='/stocks/:symbol' element={<Stock />}/> 
     <Route path='/stocks' element={<Dashboard />}/> 
     </Routes>
    </>
  )
}

export default App