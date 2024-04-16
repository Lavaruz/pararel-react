export default function Warning(){
    return (
        <>
            <section style={{backgroundImage: "url('/img/Warning/Background-D.png')"}} className="hidden lg:block bg-center relative z-10 py-14 px-32 w-full bg-cover h-[65vh] bg-no-repeat">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[900px]">
                    <img src="/img/Warning/Foreground-D.png" alt="" />
                </div>
            </section>
            <section style={{backgroundImage: "url('/img/Warning/Background-M.png')"}} className="lg:hidden relative z-10 py-14 px-32 w-full bg-contain h-[450px] bg-no-repeat"></section>
        </>
    )
}