export default function Trailer(){
    return (
        <section id="" className="lg:px-0 px-[10%] py-20 font-second flex items-center flex-col relative">
            <div className="lg:w-[1135px] m-auto">
                <div className="hidden lg:block absolute left-0 bottom-0 bg-gradient-to-r from-[#85E6FF]/10">
                    <img src="/Kiri.png" className="w-[200px]" alt=""/>
                </div>
                <div className="text-center lg:w-[800px] m-auto">
                    <p className="text-[#85E6FF] font-extrabold text-[36px] lg:text-[30px] mb-4 lg:mb-2">Watch it in Action</p>
                    <p className="text-[#85E6FF]/50 text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                </div>
                <div className="lg:w-[920px] w-full mt-9 m-auto rounded-lg h-[200px] lg:h-[500px] bg-[#8D8D8D] flex items-center justify-center"></div>
                <div className="hidden lg:block absolute right-0 bottom-0 bg-gradient-to-l from-[#85E6FF]/10">
                    <img src="/Kiri.png" className="w-[200px] scale-[-1]" alt=""/>
                </div>
            </div>
        </section>
    )
}