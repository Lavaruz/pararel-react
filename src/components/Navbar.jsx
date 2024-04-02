export default function Navbar(){

    function handleBurger(e){
        document.getElementById("navbar-burger").classList.toggle("hidden")
        if(document.getElementById("navbar-burger").classList.contains("hidden")){
            e.target.innerHTML = `<svg className="lg:hidden cursor-pointer" onClick={handleBurger} width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="22" height="3" rx="1" fill="#8D8D8D"/>
                    <rect y="7.5" width="22" height="3" rx="1" fill="#8D8D8D"/>
                    <rect y="14.5" width="22" height="3" rx="1" fill="#8D8D8D"/>
            </svg>`
        }else{
            e.target.innerHTML = `<svg className="lg:hidden cursor-pointer" width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2.55957" y="1.05173" width="23.2465" height="2.68211" rx="1" transform="rotate(45 2.55957 1.05173)" fill="#85E6FF"/>
            <rect x="0.661133" y="17.0517" width="23.2465" height="2.68858" rx="1" transform="rotate(-45 0.661133 17.0517)" fill="#85E6FF"/>
            </svg>`
        }
    }

    return (
        <section className="lg:w-full px-[10%] lg:px-0 w-full navbar fixed top-0 left-1/2 transform -translate-x-1/2 py-8 top-0 z-20 bg-gradient-to-b from-black via-black">
            <div className="lg:w-[1135px] mx-auto flex justify-between items-center">
                <p className="text-white/60 text-lg lg:hidden">EN</p>
                <img src="/img/Hero-Pararel.svg" alt="" className="lg:w-[23%] w-[60%]"/>
                <svg className="lg:hidden cursor-pointer" onClick={handleBurger} width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="22" height="3" rx="1" fill="#8D8D8D"/>
                    <rect y="7.5" width="22" height="3" rx="1" fill="#8D8D8D"/>
                    <rect y="14.5" width="22" height="3" rx="1" fill="#8D8D8D"/>
                </svg>
                <div className="hidden lg:flex items-center">
                    <div style={{backgroundImage: "url('/img/Navbar-Kiri.png')"}} className="flex items-center gap-20 text-white py-3 px-10 bg-cover">
                        <a href="#about" className="text-sm font-bold hover:text-[#FF7204] duration-200">About</a>
                        <a href="#manual" className="text-sm font-bold hover:text-[#FF7204] duration-200">Manual</a>
                        <a href="#footer" className="text-sm font-bold hover:text-[#FF7204] duration-200">Contact Us</a>
                    </div>
                    <a href="#download" className="group">
                        <div style={{backgroundImage: "url('/img/Navbar-Kanan.png')"}} className="flex items-center gap-20 text-white py-3 px-12 bg-cover">
                            <p className="text-sm font-bold text-[#000] group-hover:text-white duration-300">Get it Now</p>
                        </div>
                    </a>
                </div>
            </div>


            <div id="navbar-burger" className="hidden flex mt-10 relative px-[10%]">
                <div className="overflow-hidden bg-gradient-to-b from-black via-black to-[#85E6FF]/20 bg-black flex flex-col p-8 pb-10 rounded-xl border border-white/60 justify-center text-white absolute z-10 left-0 right-0 text-2xl gap-10 font-bold">
                    <a href="#about">About</a>
                    <a href="#manual">X Manual</a>
                    <a href="#contact">Contact Us</a>
                    <a href="#download" className="mt-10 relative">
                        <div className="flex justify-center items-center w-full relative z-10">
                            <img src="/img/Navbar-Burger-Download.png" alt="" className="absolute left-0 right-0 w-full h-[45px]" />
                            <p className="text-xl font-bold text-[#000] relative z-20">GET IT NOW</p>

                        </div>
                    </a>
                    <div className="absolute left-0 right-0 bottom-0 z-0">
                        <img src="/img/Navbar-BG.png" className="w-full" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}