export default function Manual(){
    return (
        <section id="about" className="py-20 font-second flex items-center flex-col relative">
            <div className="absolute left-0 bottom-0 bg-gradient-to-r from-[#85E6FF]/20">
                <img src="/Kiri.png" className=" w-[210px]" alt=""/>
            </div>
            <div className="text-center w-[800px] m-auto flex flex-col justify-center items-center">
                <p className="text-[#85E6FF] font-extrabold text-[30px] bg-gradient-to-r from-black via-[#85E6FF]/50 w-max">Download Manual</p>
                <div className="grid grid-cols-2 justify-between gap-10">
                    <div className="flex flex-col h-full justify-center gap-6">
                        <div style={{backgroundImage: "url('/ManualButtonTop.png')"}} className="scale-[.8] cursor-pointer bg-contain bg-no-repeat p-4 pb-5 justify-center bg-center">
                            <p className="text-white font-extrabold">Printable X Manual</p>
                        </div>
                        <div style={{backgroundImage: "url('/ManualButtonBottom.png')"}} className="scale-[.8] flex items-center gap-4 cursor-pointer bg-contain bg-no-repeat p-4 pb-5 justify-center bg-center">
                            <svg width="20" height="20" viewBox="0 0 23 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.9781 15.7843C22.9781 14.6053 22.9785 13.4263 22.9788 12.2475C22.9798 9.1048 22.9808 5.96269 22.9747 2.82059C22.9731 1.63722 22.2836 0.77825 20.9634 0.251294C20.7675 0.172611 20.5557 0.119864 20.3439 0.0671387C20.2565 0.0453638 20.1691 0.0235926 20.0828 0H2.89533C2.88806 0.00507668 2.88116 0.0111687 2.87426 0.0172607C2.86047 0.0294446 2.84668 0.0416285 2.8299 0.0456898C0.910871 0.461467 0 1.41334 0 3.00182V33.9841C0 35.8574 1.41747 36.9829 3.77768 36.9829C5.26793 36.9829 6.75818 36.9797 8.24839 36.9764C11.8844 36.9686 15.5202 36.9607 19.1551 36.9996C21.4415 37.0255 23.015 35.6853 22.9999 33.9475C22.9597 29.5522 22.9664 25.1561 22.973 20.7603C22.9756 19.1016 22.9781 17.4429 22.9781 15.7843ZM21.5304 17.0499V34.0191C21.5304 35.2086 20.7638 35.8254 19.286 35.8254H3.68542C2.22937 35.8254 1.44766 35.2055 1.44766 34.0496V2.9272C1.44766 1.788 2.23105 1.15748 3.64684 1.15595C3.84251 1.15545 4.03836 1.15612 4.23428 1.1568C4.62623 1.15815 5.01842 1.15951 5.40986 1.15138C5.78059 1.14377 5.96175 1.93779 5.97685 2.2561C6.00201 2.81808 6.42977 3.14553 7.1276 3.14705C10.0682 3.15162 13.0072 3.15162 15.9461 3.14705C16.6204 3.14553 17.0667 2.81808 17.0868 2.28351C17.1002 1.9515 17.2646 1.14072 17.6655 1.15138C18.0368 1.16154 18.4089 1.15951 18.7807 1.15748C18.9666 1.15646 19.1524 1.15545 19.338 1.15595C20.7303 1.15748 21.5304 1.78952 21.5304 2.89521C21.5315 6.0407 21.5312 9.1862 21.5308 12.3317C21.5306 13.9044 21.5304 15.4772 21.5304 17.0499Z" fill="white"/>
                                <path d="M22.9781 15.7843C22.9781 14.6053 22.9785 13.4263 22.9788 12.2475C22.9798 9.1048 22.9808 5.96269 22.9747 2.82059C22.9731 1.63722 22.2836 0.77825 20.9634 0.251294C20.7675 0.172611 20.5557 0.119864 20.3439 0.0671387C20.2565 0.0453638 20.1691 0.0235926 20.0828 0H2.89533C2.88806 0.00507668 2.88116 0.0111687 2.87426 0.0172607C2.86047 0.0294446 2.84668 0.0416285 2.8299 0.0456898C0.910871 0.461467 0 1.41334 0 3.00182V33.9841C0 35.8574 1.41747 36.9829 3.77768 36.9829C5.26793 36.9829 6.75818 36.9797 8.24839 36.9764C11.8844 36.9686 15.5202 36.9607 19.1551 36.9996C21.4415 37.0255 23.015 35.6853 22.9999 33.9475C22.9597 29.5522 22.9664 25.1561 22.973 20.7603C22.9756 19.1016 22.9781 17.4429 22.9781 15.7843ZM21.5304 17.0499V34.0191C21.5304 35.2086 20.7638 35.8254 19.286 35.8254H3.68542C2.22937 35.8254 1.44766 35.2055 1.44766 34.0496V2.9272C1.44766 1.788 2.23105 1.15748 3.64684 1.15595C3.84251 1.15545 4.03836 1.15612 4.23428 1.1568C4.62623 1.15815 5.01842 1.15951 5.40986 1.15138C5.78059 1.14377 5.96175 1.93779 5.97685 2.2561C6.00201 2.81808 6.42977 3.14553 7.1276 3.14705C10.0682 3.15162 13.0072 3.15162 15.9461 3.14705C16.6204 3.14553 17.0667 2.81808 17.0868 2.28351C17.1002 1.9515 17.2646 1.14072 17.6655 1.15138C18.0368 1.16154 18.4089 1.15951 18.7807 1.15748C18.9666 1.15646 19.1524 1.15545 19.338 1.15595C20.7303 1.15748 21.5304 1.78952 21.5304 2.89521C21.5315 6.0407 21.5312 9.1862 21.5308 12.3317C21.5306 13.9044 21.5304 15.4772 21.5304 17.0499Z" stroke="white"/>
                            </svg>
                            <p className="text-white font-extrabold">Digital X Manual</p>
                        </div>
                    </div>
                    <div className="mt-8 text-left">
                        <img src="/Manual.png" alt="" />
                        <img src="/ManualText.png" alt="" className="mt-2" />
                        <p className="text-sm text-white/60 text-left">As the game was intended to be played, the Manual is for COSMOLINK'S eyes only. The Mechanic is not allowed to view the Manual</p>
                    </div>
                </div>
            </div>
            


            <div className="absolute right-0 bottom-0 bg-gradient-to-l from-[#85E6FF]/20">
                <img src="/Kiri.png" className="w-[210px] scale-[-1]" alt=""/>
            </div>
        </section>
    )
}