export default function Hero(){
    return (
        <>
            <section className="pb-20 py-14 lg:px-[10%] bg-right bg-contain bg-no-repeat h-screen bg-gradient-to-r from-black from-0% to-75% via-black via-30% relative z-10">
                <div className="flex flex-col justify-center h-[91.5vh]">
                    <div className="flex gap-10">
                        <img src="/BestAppGame.png" className="w-[130px]" alt="" />
                        <img src="/2ndPrize.png" className="w-[130px]" alt="" />
                    </div>
                    <div className="w-[420px] mt-10">
                        <p className="text-3xl text-[#85E6FF] font-extrabold">Elevate Your Squad Vibes With the Coolest VR Puzzle Co-Op!</p>
                        <button className="bg-[#000] border-2 border-white rounded-xl text-white px-10 pe-28 py-2.5 mt-8">Available on ...</button>
                    </div>
                    <div className="mt-8">
                        <img src="/Carousel.png" className="rounded-lg" width="200" alt=""/>
                    </div>
                </div>
            </section>
            <div className="absolute top-0 right-0 z-0">
                <img src="/Hero.png" alt="" className=" h-screen"/>
            </div>
        </>
    )
}