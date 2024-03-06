export default function Action(){
    return (
        <section id="about" className="min-h-screen lg:px-[10%] py-20 pb-28">
            {/* <div className="bg-gradient-to-b from-[#85E6FF]/10 via-[#85E6FF]/30 via-50% to-[#85E6FF]/10 border-2 border-[#85E6FF]/50"></div> */}
            <div className="p-[3px] rounded-lg bg-gradient-to-tr from-[#85E6FF] via-[#85E6FF]/20 to-[#85E6FF]">
                <div className="py-10 px-14 bg-black bg-gradient-to-b from-[#85E6FF]/10 via-[#85E6FF]/30 via-50% to-[#85E6FF]/10 rounded-lg">
                    <p className="text-3xl text-[#85E6FF] text-center font-extrabold">Solve Alien Symbol Puzzles based on<br/>X Manuals.</p>
                    <div className="grid grid-cols-8 mt-14 justify-between gap-8">
                        <div className="col-span-3">
                            <div className="">
                                <p className="text-white text-[20px] font-extrabold">Fix Various starships and collect clues</p>
                                <p className="text-[#85E6FF]/50 text-sm mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a </p>
                            </div>
                            <div className="mt-16">
                                <p className="text-white text-[20px] font-extrabold">The success of every Co-Op mission relies on effective communication and coordination among all players.</p>
                                <p className="text-[#85E6FF]/50 text-sm mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="col-span-5 bg-[#8D8D8D] rounded-xl flex items-center justify-center">Foto Suasana</div>
                    </div>
                </div>
            </div>
        </section>
    )
}