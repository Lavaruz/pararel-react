export default function Trailer(){
    return (
        <section style={{backgroundImage: "url('/img/Trailer/Background.png')"}} className="bg-cover bg-center bg-[#061317] lg:min-h-screen lg:px-0 px-[10%] py-20 font-second flex items-center flex-col relative">
            <div className="lg:w-[1135px] m-auto">
                <div className="text-center lg:w-[800px] m-auto">
                    <p className="text-[#85E6FF] font-extrabold text-[24px] lg:text-[30px] mb-3 lg:mb-2">Watch it in Action</p>
                    <p className="text-[#85E6FF]/50 text-base">Enjoy the exhilarating gameplay of 'Parallel X,' where players must collaborate under pressure to solve puzzles and repair space stations!</p>
                </div>
                <div className="lg:w-[920px] overflow-hidden w-full mt-9 m-auto rounded-lg h-[200px] lg:h-[500px] bg-[#8D8D8D] flex items-center justify-center">
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/htaVKIiv63U?si=eirePogb_rOfO_Q9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </section>
    )
}