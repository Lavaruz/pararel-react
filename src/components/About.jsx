import { Carousel } from "flowbite-react";

export default function Action(){
    return (
        <section id="about" className="px-[5%] lg:px-0 py-20">
            <div className="lg:w-[1135px] m-auto">
                {/* <div className="bg-gradient-to-b from-[#85E6FF]/10 via-[#85E6FF]/30 via-50% to-[#85E6FF]/10 border-2 border-[#85E6FF]/50"></div> */}
                <div className="p-[3px] rounded-lg bg-gradient-to-tr from-[#85E6FF] via-[#85E6FF]/20 to-[#85E6FF]">
                    <div className="py-10 px-8 lg:px-14 bg-black bg-gradient-to-b from-[#85E6FF]/10 via-[#85E6FF]/20 via-50% to-[#85E6FF]/10 rounded-lg">
                        <p className="text-2xl lg:text-3xl text-[#85E6FF] text-center font-extrabold">Solve Alien Symbol Puzzles based<br/>on X Manuals</p>
                        <div className="grid grid-cols-10 mt-14 justify-between items-center lg:gap-14">
                            <div className="lg:col-span-4 col-span-10">
                                <div className="text-center lg:text-left">
                                    <p className="text-white lg:text-[19px] font-extrabold">Dynamic Challenges</p>
                                    <p className="text-[#85E6FF]/50 text-sm mt-3">Engage in ever-changing alien puzzles and codes, ensuring an exhilarating experience that remains both fresh and captivating.</p>
                                </div>
                                <div className="mt-10 text-center lg:text-left">
                                    <p className="text-white lg:text-[18px] font-extrabold">Bonds Beyond Borders</p>
                                    <p className="text-[#85E6FF]/50 text-sm mt-3">Strengthen the bonds of friendship across reality as 'Parallel X' connects players, where collaboration among players is crucial!</p>
                                </div>
                            </div>
                            <div className="lg:min-h-[350px] lg:col-span-6 col-span-10 bg-[#8D8D8D] overflow-hidden rounded-xl flex items-center justify-center lg:h-full h-[150px] lg:h-[200px] mt-10 lg:mt-0">
                                <Carousel pauseOnHover indicators={false}>
                                    <img src="/img/About/About1.png" alt="..." />
                                    <img src="/img/About/About2.png" alt="..." />
                                    <img src="/img/About/About3.png" alt="..." />
                                    <img src="/img/About/About4.png" alt="..." />
                                    <img src="/img/About/About5.png" alt="..." />
                                    <img src="/img/About/About6.png" alt="..." />
                                    <img src="/img/About/About7.png" alt="..." />
                                    <img src="/img/About/About8.png" alt="..." />
                                    <img src="/img/About/About9.png" alt="..." />
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}