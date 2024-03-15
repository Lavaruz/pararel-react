export default function Navbar(){
    return (
        <section className="px-[10%] w-full navbar fixed top-0 left-1/2 transform -translate-x-1/2 py-8 top-0 z-20 bg-gradient-to-b from-black via-black">
            <div className="lg:w-[1135px] flex justify-between items-center">
                <img src="/Hero-Pararel.svg" alt="" className="lg:w-[23%] w-[30%]"/>
                <div className="hidden lg:flex items-center">
                    <div style={{backgroundImage: "url('/Navbar-Kiri.png')"}} className="flex items-center gap-20 text-white py-3 px-10 bg-cover">
                        <a href="#about" className="text-sm font-bold hover:text-[#FF7204] duration-200">About</a>
                        <a href="#manual" className="text-sm font-bold hover:text-[#FF7204] duration-200">Manual</a>
                        <a href="#footer" className="text-sm font-bold hover:text-[#FF7204] duration-200">Contact Us</a>
                    </div>
                    <a href="#download" className="group">
                        <div style={{backgroundImage: "url('/Navbar-Kanan.png')"}} className="flex items-center gap-20 text-white py-3 px-12 bg-cover">
                            <p className="text-sm font-bold text-[#000] group-hover:text-white duration-300">Get it Now</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}