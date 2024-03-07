export default function Warning(){
    return (
        <>
            <section style={{backgroundImage: "url('/Warning.png')"}} className="hidden lg:block relative z-10 py-14 px-32 w-full bg-cover h-[400px] bg-no-repeat"></section>
            <section style={{backgroundImage: "url('/Warning-Mobile.png')"}} className="lg:hidden relative z-10 py-14 px-32 w-full bg-contain h-[450px] bg-no-repeat"></section>
        </>
    )
}