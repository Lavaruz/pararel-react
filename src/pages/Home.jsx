import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Carousel from "../components/Carousel"
import Trailer from "../components/Trailer"
import About from "../components/About"
import Warning from "../components/Warning"
import Manual from "../components/Manual"
import Download from "../components/Download"
import Footer from "../components/Footer"
import { useState } from "react"
import { useRef } from "react"

export default function Home(){
    const [isVideoEnded, setIsVideoEnded] = useState(false);
    const videoRef = useRef()

    const isPlayed = localStorage.getItem("loadingScreen")

    function handleVideoEnd(e) {
        setIsVideoEnded(true);
    }

    function handleAnimationEnd(e){
        e.target.remove()
        localStorage.setItem("loadingScreen", "played")
    }

    const setPlayBack = () => {
        videoRef.current.playbackRate = 1.5;
    };

    return(
        <>
            {isPlayed !== "played" && 
            <>
                <div className={`fixed z-50 left-0 right-0 justify-center bg-black flex ${isVideoEnded ? 'fadeOut' : ''}`} onAnimationEnd={handleAnimationEnd}>
                    <video onCanPlay={setPlayBack} ref={videoRef} className="h-screen" id="video1" height="100" playsinline autoPlay muted onEnded={handleVideoEnd}>
                        <source src="/video/LoadingScreen2.mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                </div>
                <div className={`fixed z-40 top-0 bottom-0 right-0 left-0 backdrop-blur-sm ${isVideoEnded ? 'fadeOutBlur' : ''}`} onAnimationEnd={handleAnimationEnd}></div>
            </>
            }
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