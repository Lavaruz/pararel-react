import { useState } from 'react'
import Home from './pages/Home'
import PrintableManual from './pages/PrintableManual'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/manual-print' element={<PrintableManual/>}/>
      </Routes>
    </Router>
  )
}

export default App
