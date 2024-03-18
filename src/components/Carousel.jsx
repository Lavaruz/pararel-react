export default function Carousel(){
    return (
        <section className="px-[10%] py-14 pt-28 lg:hidden relative">
            <img src="/img/Carousel.png" alt="" className="relative z-10" />
            <div className="absolute left-0 right-0 top-0 z-0">
                <img src="/img/Carousel-Bg.png" className="w-full" alt=""/>
            </div>
            <div className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-t from-[#85E6FF]/20 to-80%"></div>
        </section>
    )
}