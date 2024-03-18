export default function Action(){
    return (
        <section id="about" className="min-h-screen px-[5%] lg:px-0 py-20 pb-28">
            <div className="lg:w-[1135px] m-auto">
                {/* <div className="bg-gradient-to-b from-[#85E6FF]/10 via-[#85E6FF]/30 via-50% to-[#85E6FF]/10 border-2 border-[#85E6FF]/50"></div> */}
                <div className="p-[3px] rounded-lg bg-gradient-to-tr from-[#85E6FF] via-[#85E6FF]/20 to-[#85E6FF]">
                    <div className="py-10 px-8 lg:px-14 bg-black bg-gradient-to-b from-[#85E6FF]/10 via-[#85E6FF]/20 via-50% to-[#85E6FF]/10 rounded-lg">
                        <p className="text-2xl lg:text-3xl text-[#85E6FF] text-center font-extrabold">Solve Alien Symbol Puzzles based<br/>on X Manuals.</p>
                        <div className="grid grid-cols-10 mt-14 justify-between lg:gap-14">
                            <div className="lg:col-span-4 col-span-10">
                                <div className="text-center lg:text-left">
                                    <p className="text-white lg:text-[19px] font-extrabold">Fix Various starships and collect clues</p>
                                    <p className="text-[#85E6FF]/50 text-sm mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a </p>
                                </div>
                                <div className="mt-10 text-center lg:text-left">
                                    <p className="text-white lg:text-[18px] font-extrabold">The success of every Co-Op mission relies on effective communication and coordination among all players.</p>
                                    <p className="text-[#85E6FF]/50 text-sm mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div className="lg:col-span-6 col-span-10 bg-[#8D8D8D] rounded-xl flex items-center justify-center lg:h-full h-[200px] mt-10 lg:mt-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}