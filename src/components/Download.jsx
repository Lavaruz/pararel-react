export default function Download(){
    return (
        <section id="download" style={{backgroundImage: "url('GetIt.png')"}} className="py-20 px-32 w-full bg-cover h-[90vh] bg-no-repeat">
            <div className="flex justify-center">
                <img src="/GETITNOW.png" width="500" alt=""/>
            </div>
            <div className="grid grid-cols-2 mt-20 w-[60vw] m-auto">
                <div className="flex flex-col gap-6">
                    <p className="text-white font-extrabold text-xl text-center">PC</p>
                    <div style={{backgroundImage: "url('Download-Rect.png')"}} className="scale-[.85] cursor-pointer flex gap-4 items-center bg-no-repeat p-4 pb-5 justify-center bg-center">
                        <img src="/Windows.png" alt=""/>
                        <p className="text-white font-extrabold">Windows</p>
                    </div>
                    <div style={{backgroundImage: "url('Download-Rect.png')"}} className="scale-[.85] cursor-pointer flex gap-4 items-center bg-no-repeat p-4 pb-5 justify-center bg-center">
                        <img src="/Apple Logo.png" alt=""/>
                        <p className="text-white font-extrabold">IOS</p>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <p className="text-white font-extrabold text-xl text-center">VR</p>
                    <div style={{backgroundImage: "url('Download-Rect.png')"}} className="scale-[.85] cursor-pointer flex gap-4 items-center bg-no-repeat p-4 pb-5 justify-center bg-center">
                        <img src="/Meta.svg" alt=""/>
                        <p className="text-white font-extrabold">Meta Quest</p>
                    </div>
                    <div style={{backgroundImage: "url('Download-Rect.png')"}} className="scale-[.85] cursor-pointer flex gap-4 items-center bg-no-repeat p-4 pb-5 justify-center bg-center">
                        <img src="/Pico.svg" alt=""/>
                        <p className="text-white font-extrabold">Pico</p>
                    </div>
                </div>
            </div>
        </section>
    )
}