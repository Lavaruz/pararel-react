export default function Navbar(){
    return (
        <section className="px-10 lg:px-32 w-full navbar flex justify-between items-start fixed py-8 top-0 z-20 bg-gradient-to-b from-black via-black">
            <img src="/Brand.svg" className="w-[20%]" alt=""/>
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
        </section>
    )
}