import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trailer from './components/Trailer'
import About from './components/About'
import Warning from './components/Warning'
import Manual from './components/Manual'
import Download from './components/Download'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Carousel from './components/Carousel'

function App() {

  return (
    <>
        <Navbar/>
        <Hero/>
        <Carousel/>
        <Trailer/>
        <About/>
        <Warning/>
        <Manual/>
        <Download/>
        <Footer/>
    </>
  )
}

export default App
