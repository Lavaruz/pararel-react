import { Carousel } from "flowbite-react";

export default function Hero(){
    return (
        <>
            <section className="pb-20 py-14 lg:px-0 px-[10%] h-screen relative z-10">
                <div className="lg:w-[1135px] m-auto flex flex-col lg:justify-center mt-24 lg:mt-0 h-[91.5vh] relative z-10">
                    <div className="flex justify-center lg:justify-start gap-10">
                        <img src="/img/Hero/BestAppGame.png" className="w-[130px]" alt="" />
                        <img src="/img/Hero/2ndPrize.png" className="w-[130px]" alt="" />
                    </div>
                    <div className="lg:w-[560px] mt-10 text-center lg:text-left">
                        <p className="text-2xl lg:text-4xl text-white font-extrabold hidden lg:block">Elevate Your Squad Vibes With the Coolest VR Puzzle Co-Op!</p>
                        <p className="text-2xl lg:text-4xl text-white font-extrabold lg:hidden">Elevate Your Squad Vibes With the Coolest VR Puzzle <div className="">Co-Op!</div></p>
                        <a href="#download">
                            <button className="bg-[#072834]/40 border-2 border-[#85E6FF] shadow-[0_0_60px_-18px_rgba(133,230,255,1)] rounded-xl px-4 lg:pe-14 py-2 mt-8 font-bold text-sm lg:text-lg text-[#85E6FF]">AVAILABLE ON META QUEST & PICO</button>
                        </a>
                    </div>
                    <div className="hidden lg:block mt-8 w-[250px] min-h-[150px] rounded-xl overflow-hidden">
                        <Carousel leftControl="‎" rightControl="‎">
                            <img src="/img/People/1.jpg" alt="..." />
                            <img src="/img/People/2.jpg" alt="..." />
                            <img src="/img/People/3.jpg" alt="..." />
                        </Carousel>
                    </div>
                </div>
                <div className="hidden lg:block absolute top-0 bottom-0 right-0 left-0">
                    <img src="/img/Hero/Hero-Desktop.png" alt="" className="lg:h-screen h-[90vh] w-full object-cover"/>
                </div>
                <div className="lg:hidden absolute left-0 bottom-0 right-0">
                    <img src="/img/Hero/Hero-Mobile.png" alt="" className="lg:h-screen h-[50vh] w-full object-cover"/>
                </div>
            </section>
        </>
    )
}