import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Carousel from "../components/Carousel"
import Trailer from "../components/Trailer"
import About from "../components/About"
import Warning from "../components/Warning"
import Manual from "../components/Manual"
import Download from "../components/Download"
import Footer from "../components/Footer"

export default function Home(){
    return(
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