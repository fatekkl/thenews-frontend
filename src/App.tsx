
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Login from './Components/Login'
import Authenticated from './Components/Authenticated'
import Dashboard from './Components/Dashboard'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/authenticated' element={<Authenticated/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
