import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trailer from './components/Trailer'
import Action from './components/Action'
import Warning from './components/Warning'
import Manual from './components/Manual'
import Download from './components/Download'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
        <Navbar/>
        <Hero/>
        <Trailer/>
        <Action/>
        <Warning/>
        <Manual/>
        <Download/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App
