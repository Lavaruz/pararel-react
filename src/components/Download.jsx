export default function Download(){
    return (
        <section id="download" style={{backgroundImage: "url('GetIt.png')"}} className="py-20 px-[10%] lg:px-32 w-full bg-cover lg:h-[90vh] bg-no-repeat">
            <div className="lg:w-[1135px] m-auto">
                <div className="flex justify-center">
                    <img src="/GETITNOW.png" className="w-full lg:w-[500px]" alt=""/>
                </div>
                <div className="grid grid-cols-2 mt-10 lg:mt-20 w-[60vw] m-auto lg:gap-20">
                    <div className="col-span-2 lg:col-span-1 flex flex-col gap-6">
                        <p className="text-white font-extrabold text-xl text-center">PC</p>
                        <div className="cursor-pointer p-[3px] rounded-lg bg-gradient-to-r from-[#85E6FF]/80 via-[#85E6FF]/10 via-50% to-[#85E6FF]/80 w-full">
                            <div className="flex gap-4 justify-center py-2.5 px-8 lg:px-14 bg-black/50 rounded-lg">
                                <img src="/Windows.png" alt=""/>
                                <p className="text-white font-extrabold">Windows</p>
                            </div>
                        </div>
                        <div className="cursor-pointer p-[3px] rounded-lg bg-gradient-to-r from-[#85E6FF]/80 via-[#85E6FF]/10 via-50% to-[#85E6FF]/80 w-full">
                            <div className="flex gap-4 justify-center py-2.5 px-8 lg:px-14 bg-black/50 rounded-lg">
                                <img src="/Apple Logo.png" alt=""/>
                                <p className="text-white font-extrabold">IOS</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1 flex flex-col gap-6 mt-8 lg:mt-0">
                        <p className="text-white font-extrabold text-xl text-center">VR</p>
                        <div className="cursor-pointer p-[3px] rounded-lg bg-gradient-to-r from-[#85E6FF]/80 via-[#85E6FF]/10 via-50% to-[#85E6FF]/80 w-full">
                            <div className="flex gap-4 justify-center py-2.5 px-8 lg:px-14 bg-black/50 rounded-lg">
                                <img src="/Meta.svg" alt=""/>
                                <p className="text-white font-extrabold">Meta Quest</p>
                            </div>
                        </div>
                        <div className="cursor-pointer p-[3px] rounded-lg bg-gradient-to-r from-[#85E6FF]/80 via-[#85E6FF]/10 via-50% to-[#85E6FF]/80 w-full">
                            <div className="flex gap-4 justify-center py-2.5 px-8 lg:px-14 bg-black/50 rounded-lg">
                                <img src="/Pico.svg" alt=""/>
                                <p className="text-white font-extrabold">Pico</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}