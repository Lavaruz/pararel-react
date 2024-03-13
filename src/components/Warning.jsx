export default function Warning(){
    return (
        <>
            <section style={{backgroundImage: "url('/Warning-Bg.png')"}} className="hidden lg:block relative z-10 py-14 px-32 w-full bg-cover h-[70vh] bg-no-repeat">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[900px]">
                    <img src="/Warning-Fg.png" alt="" />
                </div>
            </section>
            <section style={{backgroundImage: "url('/Warning-Mobile.png')"}} className="lg:hidden relative z-10 py-14 px-32 w-full bg-contain h-[450px] bg-no-repeat"></section>
        </>
    )
}