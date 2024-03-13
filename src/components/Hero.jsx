export default function Hero(){
    return (
        <>
            <section className="pb-20 py-14 lg:px-0 px-[10%] h-screen relative z-10">
                <div className="lg:w-[1135px] m-auto flex flex-col lg:justify-center mt-32 lg:mt-0 h-[91.5vh] relative z-10">
                    <div className="flex justify-center lg:justify-start gap-10">
                        <img src="/BestAppGame.png" className="w-[130px]" alt="" />
                        <img src="/2ndPrize.png" className="w-[130px]" alt="" />
                    </div>
                    <div className="lg:w-[560px] mt-10 text-center lg:text-left">
                        <img src="/Hero-Pararel.svg" alt="" className="lg:hidden m-auto mb-4" />
                        <p className="text-xl lg:text-4xl text-[#85E6FF] font-extrabold">Elevate Your Squad Vibes With the Coolest VR Puzzle Co-Op!</p>
                        <button className="bg-[#5DD1F5]/10 border-2 border-white rounded-xl text-white px-10 lg:pe-28 pe-14 py-2 mt-8 font-bold">AVAILABLE ON .....</button>
                    </div>
                    <div className="hidden lg:block mt-8">
                        <img src="/Carousel.png" className="rounded-lg" width="200" alt=""/>
                    </div>
                </div>
                <div className="absolute top-0 bottom-0 right-0 left-0">
                    <img src="/Hero.png" alt="" className="lg:h-screen h-[50vh] w-full object-cover"/>
                </div>
            </section>
        </>
    )
}