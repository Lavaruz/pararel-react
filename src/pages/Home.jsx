import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import CarouselPage from "../components/CarouselPage"
import Trailer from "../components/Trailer"
import About from "../components/About"
import Warning from "../components/Warning"
import Manual from "../components/Manual"
import Download from "../components/Download"
import Footer from "../components/Footer"
import { useState, useRef, useEffect } from "react"

export default function Home(){
    const [isVideoEnded, setIsVideoEnded] = useState(false);
    const isMobile = useRef(window.innerWidth <= 768);
    const isPlayed = localStorage.getItem("loadingScreen")

    useEffect(() => {
        // Tambahkan event listener untuk mengecek perubahan lebar layar
        const handleResize = () => {
            isMobile.current = window.innerWidth <= 768;
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function handleVideoEnd(e) {
        setIsVideoEnded(true);
    }

    function handleAnimationEnd(e){
        e.target.remove()
        localStorage.setItem("loadingScreen", "played")
    }

    return(
        <>
            {isPlayed !== "played" && !isMobile.current && 
            <>
                <div className={`fixed z-50 left-0 right-0 top-0 bottom-0 justify-center bg-black flex ${isVideoEnded ? 'fadeOut' : ''}`} onAnimationEnd={handleAnimationEnd}>
                    <video className="inlinevideo h-screen" id="video1" height="100" playsInline autoPlay muted onEnded={handleVideoEnd}>
                        <source src="/video/LoadingScreen.mp4" />
                    </video>
                </div>
                <div className={`fixed z-40 top-0 bottom-0 right-0 left-0 backdrop-blur-sm ${isVideoEnded ? 'fadeOutBlur' : ''}`} onAnimationEnd={handleAnimationEnd}></div>
            </>
            }
            <Navbar/>
            <Hero/>
            <CarouselPage/>
            <Trailer/>
            <About/>
            <Warning/>
            <Manual/>
            <Download/>
            <Footer/>
        </>
    )
}