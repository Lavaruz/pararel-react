export default function Download(){
    return (
        <section id="download" style={{backgroundImage: "url('/img/Download/GetIt.png')"}} className="py-20 px-[10%] bg-cover bg-no-repeat">
            <div className="flex justify-center">
                <img src="/img/Download/GETITNOW.png" className="w-full lg:w-[500px]" alt=""/>
            </div>
            <div className="mt-10 lg:mt-20 lg:gap-20">
                <div className="flex flex-col gap-6 mt-8 lg:mt-0">
                    <div className="w-[80%] lg:w-1/3 m-auto cursor-pointer p-[3px] rounded-lg bg-gradient-to-r from-[#85E6FF]/80 via-[#85E6FF]/10 via-50% to-[#85E6FF]/80">
                        <div className="flex gap-4 justify-center py-2.5 px-8 lg:px-14 bg-black/50 rounded-lg">
                            <img src="/img/Download/Meta.svg" alt=""/>
                            <p className="text-white font-extrabold">Meta Quest</p>
                        </div>
                    </div>
                    <div className="w-[80%] lg:w-1/3 m-auto cursor-pointer p-[3px] rounded-lg bg-gradient-to-r from-[#85E6FF]/80 via-[#85E6FF]/10 via-50% to-[#85E6FF]/80">
                        <div className="flex gap-4 justify-center py-2.5 px-8 lg:px-14 bg-black/50 rounded-lg">
                            <img src="/img/Download/Pico.svg" alt=""/>
                            <p className="text-white font-extrabold">Pico</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}