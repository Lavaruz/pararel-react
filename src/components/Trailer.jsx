export default function Trailer(){
    return (
        <section id="" className="lg:px-[10%] py-20 font-second flex items-center flex-col relative">
            <div className="absolute left-0 bottom-0 bg-gradient-to-r from-[#85E6FF]/20">
                <img src="/Kiri.png" className=" w-[200px]" alt=""/>
            </div>
            <div className="text-center w-[700px] m-auto">
                <p className="text-[#85E6FF] font-extrabold text-[30px] ">Watch it in Action</p>
                <p className="text-[#85E6FF]/50">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
            </div>
            <div className="w-[920px] mt-8 m-auto rounded-lg h-[500px] bg-[#8D8D8D] flex items-center justify-center">Video</div>
            <div className="absolute right-0 bottom-0 bg-gradient-to-l from-[#85E6FF]/20">
                <img src="/Kiri.png" className="w-[200px] scale-[-1]" alt=""/>
            </div>
        </section>
    )
}