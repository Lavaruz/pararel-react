export default function Navbar(){
    return (
        <section className="w-full navbar fixed top-0 left-1/2 transform -translate-x-1/2 py-8 top-0 z-20 bg-gradient-to-b from-black via-black">
            <div className="lg:w-[1135px] flex justify-between items-start m-auto">
                <img src="/Brand.svg" className="lg:w-[20%] w-[30%]" alt=""/>
                <div className="hidden lg:flex items-center">
                    <div style={{backgroundImage: "url('/Navbar-Kiri.png')"}} className="flex items-center gap-20 text-white py-2 px-10 bg-cover">
                        <a href="#about" className="text-sm font-bold hover:text-[#FF7204] duration-200">About</a>
                        <a href="#manual" className="text-sm font-bold hover:text-[#FF7204] duration-200">Manual</a>
                        <a href="#contact-us" className="text-sm font-bold hover:text-[#FF7204] duration-200">Contact Us</a>
                    </div>
                    <div style={{backgroundImage: "url('/Navbar-Kanan.png')"}} className="flex items-center gap-20 text-white py-2 px-10 bg-cover">
                        <a href="#download" className="text-sm font-bold text-[#000]">Get it Now</a>
                    </div>
                </div>
            </div>
        </section>
    )
}