import { Carousel } from "flowbite-react";

export default function CarouselPage(){
    return (
        <section style={{backgroundImage: "url('/img/Carousel/Background.png')"}} className="bg-cover bg-center px-[10%] py-10 lg:hidden relative">
            <div className="w-full h-[200px] relative z-10 rounded-xl overflow-hidden">
                <Carousel indicators={false}>
                    <img src="/img/People/1.jpg" alt="..." />
                    <img src="/img/People/2.jpg" alt="..." />
                    <img src="/img/People/3.jpg" alt="..." />
                </Carousel>
            </div>
        </section>
    )
}