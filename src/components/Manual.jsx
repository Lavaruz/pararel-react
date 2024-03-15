export default function Manual(){
    return (
        <section id="manual" className="px-[10%] lg:py-20 pb-20 font-second flex items-center flex-col relative">
            <div className="lg:w-[1135px] m-auto">
                <div className="text-center lg:w-[800px] m-auto flex flex-col justify-center items-center">
                    <div className="bg-gradient-to-r from-black via-[#85E6FF]/50 px-10 py-2">
                        <p className="text-[#85E6FF] font-extrabold text-2xl lg:text-[30px]">Download Manual</p>
                    </div>
                    <div className="grid grid-cols-2 justify-between gap-10">
                        <div className="order-last lg:order-first col-span-2 lg:col-span-1 flex flex-col h-full justify-center gap-10">
                            <div style={{backgroundImage: "url('/Manual-Top.png')"}} className="lg:scale-[1] flex items-center gap-4 cursor-pointer bg-contain bg-no-repeat p-4 pb-5 justify-center bg-center">
                                <img src="/Print.svg" alt="" />
                                <p className="text-white font-extrabold">Printable X Manual</p>
                            </div>
                            <div style={{backgroundImage: "url('/Manual-Bottom.png')"}} className="lg:scale-[1] flex items-center gap-4 cursor-pointer bg-contain bg-no-repeat p-4 pb-5 justify-center bg-center">
                                <img src="/Phone.svg" alt="" />
                                <p className="text-white font-extrabold">Digital X Manual</p>
                            </div>
                        </div>
                        <div className="col-span-2 lg:col-span-1 mt-8 text-left">
                            <img src="/Manual.png" className="w-[80%] lg:w-full m-auto" alt="" />
                            <img src="/ManualText.png" alt="" className="mt-2 w-[90%] lg:w-full m-auto" />
                            <p className="lg:text-sm text-base text-white/60 text-center lg:text-left">As the game was intended to be played, the Manual is for COSMOLINK'S eyes only. The Mechanic is not allowed to view the Manual</p>
                        </div>
                    </div>
                </div>
                


                <div className="hidden lg:block absolute left-0 bottom-0 bg-gradient-to-r from-[#85E6FF]/10">
                    <img src="/Kiri.png" className=" w-[210px]" alt=""/>
                </div>
                <div className="hidden lg:block absolute right-0 bottom-0 bg-gradient-to-l from-[#85E6FF]/10">
                    <img src="/Kiri.png" className="w-[210px] scale-[-1]" alt=""/>
                </div>
            </div>
        </section>
    )
}