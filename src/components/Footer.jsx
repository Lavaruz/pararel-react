import { Link } from "react-router-dom"

export default function Footer(){
    return (
        <footer id="footer" className="px-[10%] py-8 bg-[#1C1C1C] text-[#AAAAAA]">
            <div className="lg:block hidden">
                <div className="grid grid-cols-10 gap-10">
                    <div className="col-span-2">
                        <a href="#">Terms of Service</a>
                    </div>
                    <div className="col-span-6">
                        <a href="https://www.termsfeed.com/live/39a6e853-6e3e-423b-b831-615512fa44c5" target="_blank">Privacy Policy</a>
                    </div>
                    <div className="col-span-2">
                        <p></p>
                    </div>
                </div>


                <div className="grid grid-cols-10 items-center gap-10 mt-3">
                    <div className="col-span-2">
                        <Link to={"https://www.festivo.co/"} className="">
                            <img src="/img/Festivo.png" alt="" />
                            <p>www.festivo.co</p>
                        </Link>
                    </div>
                    <div className="col-span-6">
                        <p className="text-sm py-6 w-[92%]">© 2024 PT Semesta Realitas Indonesia. All rights reserved. Festivo, the Festivo logo, Parallel X and the Parallel X logo are trademarks and/or registered trademarks of PT Semesta Realitas Indonesia.</p>
                    </div>
                    <div className="col-span-2 justify-self-end">
                        <div className="flex gap-5">
                            <p>Socials</p>
                            <a href="https://www.facebook.com/FestivoGo/">
                                <svg width="27" height="27" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_888_132)">
                                    <path d="M19.7071 21.1334C20.7847 21.1334 21.8458 21.1334 22.9298 21.1334C23.174 19.5754 23.4137 18.0468 23.659 16.4808C22.0115 16.4808 20.4064 16.4808 18.7767 16.4808C18.7686 16.3543 18.7569 16.2586 18.7569 16.1629C18.7557 15.2197 18.7528 14.276 18.7569 13.3328C18.7625 11.9522 19.5443 11.0457 20.9133 10.9355C21.8518 10.8599 22.7989 10.8914 23.7423 10.8761C23.9302 10.8732 24.1182 10.8757 24.3304 10.8757C24.3304 9.52166 24.3304 8.18461 24.3304 6.79747C23.9456 6.74537 23.5458 6.67871 23.1432 6.63872C21.5842 6.48482 20.024 6.32405 18.4743 6.72315C16.1231 7.32906 14.5346 9.02844 14.2412 11.4363C14.0864 12.7075 14.1316 14.0034 14.0924 15.2879C14.0811 15.664 14.0908 16.0405 14.0908 16.4577C12.8503 16.4577 11.6256 16.4577 10.3584 16.4577C10.3584 17.2596 10.3584 18.021 10.3584 18.7828C10.3584 19.5475 10.3584 20.3125 10.3584 21.1184C11.5985 21.1184 12.8232 21.1184 14.069 21.1184C14.069 25.0928 14.069 29.0264 14.069 32.9608C7.01005 32.0224 0.0529814 25.9564 0.00124391 16.5922C-0.0496851 7.46196 7.18264 0.3437 15.8483 0.0128724C25.0591 -0.338961 32.6799 6.84999 32.9895 15.9548C33.1367 20.2778 31.8436 24.1589 28.9867 27.4579C26.5139 30.3137 23.4371 32.1783 19.7071 33.0004C19.7071 29.0328 19.7071 25.1001 19.7071 21.1334Z" fill="#626262"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_888_132">
                                    <rect width="33" height="33" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/festivo.co/">
                                <svg width="27" height="27" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32.9984 7.53909C32.9984 13.5106 32.9984 19.4808 32.9984 25.4523C32.9775 25.5458 32.9482 25.6366 32.9384 25.7315C32.4931 29.7948 29.0816 32.9523 24.9973 32.9788C19.3287 33.0151 13.6601 32.997 7.99144 32.9816C6.65 32.9774 5.37278 32.6299 4.21142 31.9543C1.43364 30.3364 0.0335792 27.8839 0.0154328 24.6874C-0.0138804 19.2853 0.00705762 13.8847 0.00984936 8.4841C0.00984936 8.08767 0.0168287 7.68706 0.0698718 7.29621C0.529113 3.94054 2.34235 1.64433 5.51656 0.466221C6.16285 0.226131 6.86916 0.150754 7.54615 0C13.5177 0 19.4878 0 25.4594 0C25.5417 0.0195422 25.6241 0.0460637 25.7078 0.0572307C29.0872 0.533222 31.389 2.36042 32.5504 5.57231C32.7779 6.20045 32.8533 6.88164 32.9984 7.53909ZM29.7042 16.5327C29.7042 13.7731 29.7154 11.0134 29.7014 8.25378C29.686 5.4411 27.5992 3.3124 24.8047 3.30263C19.2631 3.28169 13.7215 3.2789 8.17988 3.30263C5.43001 3.3138 3.31946 5.42854 3.30969 8.1784C3.28875 13.72 3.28875 19.2602 3.30969 24.8018C3.31946 27.5545 5.42024 29.6748 8.17011 29.6874C13.7215 29.7139 19.2743 29.6985 24.8256 29.6916C25.6645 29.6902 26.4658 29.4933 27.1986 29.0732C28.875 28.1072 29.6805 26.6206 29.6986 24.7153C29.7223 21.9877 29.7042 19.2602 29.7042 16.5327Z" fill="#626262"/>
                                    <path d="M16.505 24.743C11.8861 24.7444 8.24848 21.1012 8.25685 16.4795C8.26383 11.8717 11.8945 8.24805 16.5037 8.24805C21.1254 8.24805 24.7602 11.8871 24.7519 16.5102C24.7435 21.118 21.1128 24.7416 16.505 24.743ZM21.4562 16.4837C21.4492 13.6961 19.2968 11.5451 16.5078 11.5423C13.7077 11.5395 11.5455 13.7059 11.5511 16.506C11.5567 19.2922 13.7119 21.446 16.4995 21.4474C19.2982 21.4502 21.4618 19.2824 21.4562 16.4837Z" fill="#626262"/>
                                    <path d="M26.3995 8.2539C26.3939 9.1654 25.6304 9.91638 24.7272 9.89824C23.8241 9.88009 23.0941 9.13749 23.0996 8.24134C23.1052 7.32983 23.8674 6.57886 24.7719 6.597C25.6764 6.61515 26.4051 7.35636 26.3995 8.2539Z" fill="#626262"/>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/festivogo">
                                <svg width="27" height="27" viewBox="0 0 27 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_673_305)">
                                    <path d="M9.17929 32.9807C9.06584 32.9668 8.95362 32.9452 8.84017 32.9389C7.02003 32.8233 5.19742 32.7256 3.37852 32.5897C1.94065 32.4818 0.69023 31.31 0.431267 29.7332C0.215464 28.4141 0.0366564 27.0747 0.0107601 25.7404C-0.0311673 23.5097 0.0378895 21.2753 0.111879 19.0446C0.137775 18.2778 0.279589 17.5085 0.438666 16.7556C0.791349 15.0772 2.01834 14.0654 3.7497 13.9067C9.12257 13.4166 14.5028 13.5411 19.8831 13.6667C21.1212 13.6959 22.3593 13.8267 23.5937 13.96C25.1166 14.1238 26.3042 15.2169 26.5631 16.7861C26.7814 18.1052 26.9602 19.4446 26.9849 20.7789C27.0268 23.0311 26.9627 25.2871 26.88 27.5394C26.8505 28.3582 26.6938 29.1822 26.5076 29.982C26.166 31.4484 24.9847 32.4793 23.5234 32.5973C21.7982 32.7357 20.0693 32.8233 18.3429 32.935C18.1887 32.9452 18.0346 32.9668 17.8792 32.982C14.9801 32.9807 12.0797 32.9807 9.17929 32.9807ZM14.0675 16.5626C14.0675 20.7459 14.0675 24.8758 14.0675 29.0184C14.6114 29.0184 15.1354 29.0184 15.6904 29.0184C15.6904 28.7442 15.6904 28.4928 15.6904 28.2617C16.0357 28.5169 16.3439 28.8166 16.7077 28.9994C17.6092 29.4551 18.4884 29.0032 18.6931 27.9964C18.777 27.5787 18.8189 27.1458 18.8226 26.7192C18.8374 25.1729 18.8325 23.6253 18.8251 22.0789C18.8238 21.7361 18.7942 21.3921 18.7523 21.0518C18.6352 20.0984 18.0469 19.5372 17.2133 19.6591C16.8705 19.7099 16.5388 19.9156 16.2268 20.0946C16.0369 20.2038 15.8914 20.3967 15.6805 20.5961C15.6805 19.2249 15.6805 17.9109 15.6805 16.5817C15.5671 16.5741 15.4857 16.5639 15.4043 16.5639C14.9665 16.5614 14.53 16.5626 14.0675 16.5626ZM23.3175 25.8356C23.3175 26.1936 23.3347 26.5262 23.3138 26.8551C23.2829 27.3159 23.0326 27.5952 22.6602 27.6295C22.2286 27.6701 21.8858 27.4619 21.8315 26.9884C21.7464 26.2406 21.7501 25.4814 21.7143 24.6828C22.8587 24.6828 23.9266 24.6828 24.9489 24.6828C24.9489 23.6976 25.0093 22.7505 24.9329 21.8149C24.849 20.7789 24.3077 20.0083 23.2903 19.7378C22.2804 19.47 21.3604 19.6655 20.6625 20.5364C20.2728 21.0239 20.1482 21.6181 20.1396 22.2237C20.1186 23.6519 20.1297 25.0789 20.1347 26.5072C20.1359 26.7091 20.1692 26.9135 20.2037 27.1141C20.4072 28.2935 21.1681 29.0159 22.3445 29.153C23.4358 29.2799 24.4113 28.7239 24.8133 27.7412C25.0636 27.128 24.9995 26.4856 25.0143 25.8343C24.4446 25.8356 23.9155 25.8356 23.3175 25.8356ZM10.9933 19.767C10.9933 19.9219 10.9933 20.0387 10.9933 20.1555C10.9933 22.2389 10.9822 24.3223 11.0031 26.4056C11.0068 26.7916 10.8811 27.062 10.6184 27.2994C10.3866 27.5089 10.135 27.7323 9.8119 27.5952C9.50115 27.4645 9.56157 27.1306 9.56157 26.8589C9.55787 24.6244 9.55911 22.3912 9.55911 20.1568C9.55911 20.0311 9.55911 19.9067 9.55911 19.7772C8.99679 19.7772 8.47146 19.7772 7.94737 19.7772C7.93874 19.8318 7.92887 19.8623 7.92887 19.894C7.9301 22.4395 7.92764 24.985 7.93874 27.5305C7.93997 27.8276 7.99176 28.131 8.06328 28.4192C8.15701 28.8026 8.41227 29.04 8.79701 29.1263C9.37783 29.2558 9.86493 29.0375 10.3089 28.6883C10.5358 28.5106 10.7392 28.3011 11.0056 28.0599C11.0056 28.4217 11.0056 28.7239 11.0056 29.0235C11.563 29.0235 12.0797 29.0235 12.6062 29.0235C12.6062 25.9295 12.6062 22.8534 12.6062 19.767C12.0661 19.767 11.5482 19.767 10.9933 19.767ZM5.73385 29.0298C5.73385 25.456 5.73385 21.9088 5.73385 18.3235C6.39729 18.3235 7.02866 18.3235 7.66374 18.3235C7.66374 17.7218 7.66374 17.1581 7.66374 16.588C5.76344 16.588 3.88411 16.588 2.00848 16.588C2.00848 17.1771 2.00848 17.7395 2.00848 18.34C2.65095 18.34 3.27123 18.34 3.92604 18.34C3.92604 21.9253 3.92604 25.4725 3.92604 29.0298C4.53399 29.0298 5.10494 29.0298 5.73385 29.0298Z" fill="#626262"/>
                                    <path d="M7.73835 12.5835C7.11807 12.5835 6.53726 12.5835 5.90958 12.5835C5.90958 12.4578 5.90958 12.3449 5.90958 12.2306C5.90958 11.0931 5.87382 9.95298 5.91944 8.81798C5.96384 7.72488 5.77886 6.68383 5.45084 5.65929C4.87989 3.87935 4.29661 2.10194 3.71949 0.324543C3.68989 0.234403 3.6603 0.144263 3.62207 0.0261931C4.25961 0.0261931 4.87743 0.0261931 5.54086 0.0261931C5.96137 1.61824 6.38804 3.23313 6.83815 4.94198C7.09218 3.93902 7.32278 3.02746 7.55338 2.11718C7.71369 1.48493 7.86784 0.850146 8.04294 0.221707C8.06761 0.132837 8.19092 0.0147669 8.27231 0.0122278C8.81367 -0.00681584 9.35502 0.00207117 9.92598 0.00207117C9.89638 0.12395 9.87542 0.225516 9.84705 0.323273C9.17375 2.60977 8.49798 4.89627 7.83084 7.18404C7.77165 7.38591 7.74205 7.603 7.74082 7.81375C7.73342 9.27376 7.73712 10.7338 7.73712 12.1938C7.73835 12.3106 7.73835 12.4274 7.73835 12.5835Z" fill="#626262"/>
                                    <path d="M19.2985 3.20947C19.8669 3.20947 20.3849 3.20947 20.9262 3.20947C20.9262 6.32373 20.9262 9.43165 20.9262 12.5599C20.3923 12.5599 19.8669 12.5599 19.3059 12.5599C19.3059 12.2526 19.3059 11.9581 19.3059 11.5823C19.1172 11.7651 18.9902 11.8972 18.8545 12.019C18.3797 12.4494 17.8643 12.7732 17.1922 12.6906C16.7433 12.636 16.4264 12.3821 16.3265 11.9314C16.255 11.609 16.2045 11.2738 16.2032 10.945C16.1921 8.42107 16.1946 5.89716 16.1934 3.37198C16.1934 3.33008 16.2008 3.28819 16.2069 3.22344C16.7372 3.22344 17.2625 3.22344 17.8384 3.22344C17.8384 3.34278 17.8384 3.4672 17.8384 3.59034C17.8384 5.74989 17.8384 7.90816 17.8396 10.0677C17.8396 10.2823 17.8372 10.4981 17.8618 10.7114C17.9087 11.124 18.1467 11.2586 18.5253 11.1024C18.984 10.9145 19.2972 10.4422 19.2972 9.94075C19.2972 7.83579 19.2972 5.72957 19.2972 3.62462C19.2985 3.49513 19.2985 3.36817 19.2985 3.20947Z" fill="#626262"/>
                                    <path d="M14.8685 7.89815C14.829 8.80843 14.8364 9.72379 14.7378 10.6277C14.6219 11.6942 13.9412 12.4216 12.9842 12.6464C11.9607 12.8863 10.9409 12.5334 10.4365 11.6599C10.201 11.2511 10.0259 10.7433 10.0111 10.2735C9.95929 8.68782 9.92229 7.09451 10.0086 5.51135C10.1332 3.21723 12.0963 2.71575 13.4023 3.28452C14.3974 3.71871 14.7538 4.60868 14.8044 5.64339C14.8414 6.39243 14.8118 7.14529 14.8118 7.89688C14.8315 7.89688 14.85 7.89815 14.8685 7.89815ZM11.6166 7.88672C11.6166 8.59387 11.608 9.30229 11.6216 10.0094C11.6253 10.2304 11.6672 10.4576 11.7313 10.6696C11.8275 10.9896 12.0557 11.1571 12.3874 11.1597C12.724 11.1622 12.9596 11.0048 13.0631 10.6557C13.1297 10.4335 13.1754 10.1948 13.1766 9.96374C13.1865 8.58118 13.1865 7.19734 13.1766 5.81478C13.1754 5.58372 13.1297 5.34504 13.0631 5.12286C12.9571 4.76865 12.7302 4.61757 12.3874 4.61884C12.0532 4.62138 11.8214 4.78516 11.7178 5.13556C11.6586 5.33742 11.6228 5.55452 11.6191 5.76654C11.6093 6.47115 11.6166 7.1783 11.6166 7.88672Z" fill="#626262"/>
                                    <path d="M15.6831 24.3745C15.6831 23.5277 15.6831 22.6809 15.6831 21.8341C15.6831 21.4976 15.8829 21.2793 16.2763 21.1815C16.6302 21.0939 16.9089 21.1955 17.0359 21.5091C17.1222 21.7224 17.1851 21.9623 17.1864 22.1908C17.1999 23.6584 17.1937 25.1273 17.1925 26.5962C17.1925 26.7029 17.1802 26.8108 17.1592 26.9149C17.01 27.6513 16.4711 27.8645 15.8952 27.3999C15.7855 27.311 15.6955 27.1244 15.693 26.9809C15.6733 26.1113 15.6831 25.2429 15.6831 24.3745Z" fill="#626262"/>
                                    <path d="M23.4193 23.2858C22.8188 23.2858 22.3021 23.2858 21.7139 23.2858C21.7533 22.7589 21.757 22.2473 21.8384 21.7483C21.9038 21.3497 22.1874 21.1554 22.5475 21.1491C22.9211 21.1427 23.2035 21.3357 23.2787 21.7572C23.3638 22.2473 23.3737 22.75 23.4193 23.2858Z" fill="#626262"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_673_305">
                                    <rect width="27" height="33" fill="white" transform="translate(-0.00195312)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE */}
            <div className="lg:hidden pb-10">
                <div className="flex flex-col items-center gap-5">
                    <p className="text-xl">Socials</p>
                    <div className="flex gap-10">
                        <a href="https://www.facebook.com/FestivoGo/">
                            <svg width="35" height="35" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_888_132)">
                                <path d="M19.7071 21.1334C20.7847 21.1334 21.8458 21.1334 22.9298 21.1334C23.174 19.5754 23.4137 18.0468 23.659 16.4808C22.0115 16.4808 20.4064 16.4808 18.7767 16.4808C18.7686 16.3543 18.7569 16.2586 18.7569 16.1629C18.7557 15.2197 18.7528 14.276 18.7569 13.3328C18.7625 11.9522 19.5443 11.0457 20.9133 10.9355C21.8518 10.8599 22.7989 10.8914 23.7423 10.8761C23.9302 10.8732 24.1182 10.8757 24.3304 10.8757C24.3304 9.52166 24.3304 8.18461 24.3304 6.79747C23.9456 6.74537 23.5458 6.67871 23.1432 6.63872C21.5842 6.48482 20.024 6.32405 18.4743 6.72315C16.1231 7.32906 14.5346 9.02844 14.2412 11.4363C14.0864 12.7075 14.1316 14.0034 14.0924 15.2879C14.0811 15.664 14.0908 16.0405 14.0908 16.4577C12.8503 16.4577 11.6256 16.4577 10.3584 16.4577C10.3584 17.2596 10.3584 18.021 10.3584 18.7828C10.3584 19.5475 10.3584 20.3125 10.3584 21.1184C11.5985 21.1184 12.8232 21.1184 14.069 21.1184C14.069 25.0928 14.069 29.0264 14.069 32.9608C7.01005 32.0224 0.0529814 25.9564 0.00124391 16.5922C-0.0496851 7.46196 7.18264 0.3437 15.8483 0.0128724C25.0591 -0.338961 32.6799 6.84999 32.9895 15.9548C33.1367 20.2778 31.8436 24.1589 28.9867 27.4579C26.5139 30.3137 23.4371 32.1783 19.7071 33.0004C19.7071 29.0328 19.7071 25.1001 19.7071 21.1334Z" fill="#626262"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_888_132">
                                <rect width="33" height="33" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/festivo.co/">
                            <svg width="35" height="35" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.9984 7.53909C32.9984 13.5106 32.9984 19.4808 32.9984 25.4523C32.9775 25.5458 32.9482 25.6366 32.9384 25.7315C32.4931 29.7948 29.0816 32.9523 24.9973 32.9788C19.3287 33.0151 13.6601 32.997 7.99144 32.9816C6.65 32.9774 5.37278 32.6299 4.21142 31.9543C1.43364 30.3364 0.0335792 27.8839 0.0154328 24.6874C-0.0138804 19.2853 0.00705762 13.8847 0.00984936 8.4841C0.00984936 8.08767 0.0168287 7.68706 0.0698718 7.29621C0.529113 3.94054 2.34235 1.64433 5.51656 0.466221C6.16285 0.226131 6.86916 0.150754 7.54615 0C13.5177 0 19.4878 0 25.4594 0C25.5417 0.0195422 25.6241 0.0460637 25.7078 0.0572307C29.0872 0.533222 31.389 2.36042 32.5504 5.57231C32.7779 6.20045 32.8533 6.88164 32.9984 7.53909ZM29.7042 16.5327C29.7042 13.7731 29.7154 11.0134 29.7014 8.25378C29.686 5.4411 27.5992 3.3124 24.8047 3.30263C19.2631 3.28169 13.7215 3.2789 8.17988 3.30263C5.43001 3.3138 3.31946 5.42854 3.30969 8.1784C3.28875 13.72 3.28875 19.2602 3.30969 24.8018C3.31946 27.5545 5.42024 29.6748 8.17011 29.6874C13.7215 29.7139 19.2743 29.6985 24.8256 29.6916C25.6645 29.6902 26.4658 29.4933 27.1986 29.0732C28.875 28.1072 29.6805 26.6206 29.6986 24.7153C29.7223 21.9877 29.7042 19.2602 29.7042 16.5327Z" fill="#626262"/>
                                <path d="M16.505 24.743C11.8861 24.7444 8.24848 21.1012 8.25685 16.4795C8.26383 11.8717 11.8945 8.24805 16.5037 8.24805C21.1254 8.24805 24.7602 11.8871 24.7519 16.5102C24.7435 21.118 21.1128 24.7416 16.505 24.743ZM21.4562 16.4837C21.4492 13.6961 19.2968 11.5451 16.5078 11.5423C13.7077 11.5395 11.5455 13.7059 11.5511 16.506C11.5567 19.2922 13.7119 21.446 16.4995 21.4474C19.2982 21.4502 21.4618 19.2824 21.4562 16.4837Z" fill="#626262"/>
                                <path d="M26.3995 8.2539C26.3939 9.1654 25.6304 9.91638 24.7272 9.89824C23.8241 9.88009 23.0941 9.13749 23.0996 8.24134C23.1052 7.32983 23.8674 6.57886 24.7719 6.597C25.6764 6.61515 26.4051 7.35636 26.3995 8.2539Z" fill="#626262"/>
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/festivogo">
                            <svg width="35" height="35" viewBox="0 0 27 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_673_305)">
                                <path d="M9.17929 32.9807C9.06584 32.9668 8.95362 32.9452 8.84017 32.9389C7.02003 32.8233 5.19742 32.7256 3.37852 32.5897C1.94065 32.4818 0.69023 31.31 0.431267 29.7332C0.215464 28.4141 0.0366564 27.0747 0.0107601 25.7404C-0.0311673 23.5097 0.0378895 21.2753 0.111879 19.0446C0.137775 18.2778 0.279589 17.5085 0.438666 16.7556C0.791349 15.0772 2.01834 14.0654 3.7497 13.9067C9.12257 13.4166 14.5028 13.5411 19.8831 13.6667C21.1212 13.6959 22.3593 13.8267 23.5937 13.96C25.1166 14.1238 26.3042 15.2169 26.5631 16.7861C26.7814 18.1052 26.9602 19.4446 26.9849 20.7789C27.0268 23.0311 26.9627 25.2871 26.88 27.5394C26.8505 28.3582 26.6938 29.1822 26.5076 29.982C26.166 31.4484 24.9847 32.4793 23.5234 32.5973C21.7982 32.7357 20.0693 32.8233 18.3429 32.935C18.1887 32.9452 18.0346 32.9668 17.8792 32.982C14.9801 32.9807 12.0797 32.9807 9.17929 32.9807ZM14.0675 16.5626C14.0675 20.7459 14.0675 24.8758 14.0675 29.0184C14.6114 29.0184 15.1354 29.0184 15.6904 29.0184C15.6904 28.7442 15.6904 28.4928 15.6904 28.2617C16.0357 28.5169 16.3439 28.8166 16.7077 28.9994C17.6092 29.4551 18.4884 29.0032 18.6931 27.9964C18.777 27.5787 18.8189 27.1458 18.8226 26.7192C18.8374 25.1729 18.8325 23.6253 18.8251 22.0789C18.8238 21.7361 18.7942 21.3921 18.7523 21.0518C18.6352 20.0984 18.0469 19.5372 17.2133 19.6591C16.8705 19.7099 16.5388 19.9156 16.2268 20.0946C16.0369 20.2038 15.8914 20.3967 15.6805 20.5961C15.6805 19.2249 15.6805 17.9109 15.6805 16.5817C15.5671 16.5741 15.4857 16.5639 15.4043 16.5639C14.9665 16.5614 14.53 16.5626 14.0675 16.5626ZM23.3175 25.8356C23.3175 26.1936 23.3347 26.5262 23.3138 26.8551C23.2829 27.3159 23.0326 27.5952 22.6602 27.6295C22.2286 27.6701 21.8858 27.4619 21.8315 26.9884C21.7464 26.2406 21.7501 25.4814 21.7143 24.6828C22.8587 24.6828 23.9266 24.6828 24.9489 24.6828C24.9489 23.6976 25.0093 22.7505 24.9329 21.8149C24.849 20.7789 24.3077 20.0083 23.2903 19.7378C22.2804 19.47 21.3604 19.6655 20.6625 20.5364C20.2728 21.0239 20.1482 21.6181 20.1396 22.2237C20.1186 23.6519 20.1297 25.0789 20.1347 26.5072C20.1359 26.7091 20.1692 26.9135 20.2037 27.1141C20.4072 28.2935 21.1681 29.0159 22.3445 29.153C23.4358 29.2799 24.4113 28.7239 24.8133 27.7412C25.0636 27.128 24.9995 26.4856 25.0143 25.8343C24.4446 25.8356 23.9155 25.8356 23.3175 25.8356ZM10.9933 19.767C10.9933 19.9219 10.9933 20.0387 10.9933 20.1555C10.9933 22.2389 10.9822 24.3223 11.0031 26.4056C11.0068 26.7916 10.8811 27.062 10.6184 27.2994C10.3866 27.5089 10.135 27.7323 9.8119 27.5952C9.50115 27.4645 9.56157 27.1306 9.56157 26.8589C9.55787 24.6244 9.55911 22.3912 9.55911 20.1568C9.55911 20.0311 9.55911 19.9067 9.55911 19.7772C8.99679 19.7772 8.47146 19.7772 7.94737 19.7772C7.93874 19.8318 7.92887 19.8623 7.92887 19.894C7.9301 22.4395 7.92764 24.985 7.93874 27.5305C7.93997 27.8276 7.99176 28.131 8.06328 28.4192C8.15701 28.8026 8.41227 29.04 8.79701 29.1263C9.37783 29.2558 9.86493 29.0375 10.3089 28.6883C10.5358 28.5106 10.7392 28.3011 11.0056 28.0599C11.0056 28.4217 11.0056 28.7239 11.0056 29.0235C11.563 29.0235 12.0797 29.0235 12.6062 29.0235C12.6062 25.9295 12.6062 22.8534 12.6062 19.767C12.0661 19.767 11.5482 19.767 10.9933 19.767ZM5.73385 29.0298C5.73385 25.456 5.73385 21.9088 5.73385 18.3235C6.39729 18.3235 7.02866 18.3235 7.66374 18.3235C7.66374 17.7218 7.66374 17.1581 7.66374 16.588C5.76344 16.588 3.88411 16.588 2.00848 16.588C2.00848 17.1771 2.00848 17.7395 2.00848 18.34C2.65095 18.34 3.27123 18.34 3.92604 18.34C3.92604 21.9253 3.92604 25.4725 3.92604 29.0298C4.53399 29.0298 5.10494 29.0298 5.73385 29.0298Z" fill="#626262"/>
                                <path d="M7.73835 12.5835C7.11807 12.5835 6.53726 12.5835 5.90958 12.5835C5.90958 12.4578 5.90958 12.3449 5.90958 12.2306C5.90958 11.0931 5.87382 9.95298 5.91944 8.81798C5.96384 7.72488 5.77886 6.68383 5.45084 5.65929C4.87989 3.87935 4.29661 2.10194 3.71949 0.324543C3.68989 0.234403 3.6603 0.144263 3.62207 0.0261931C4.25961 0.0261931 4.87743 0.0261931 5.54086 0.0261931C5.96137 1.61824 6.38804 3.23313 6.83815 4.94198C7.09218 3.93902 7.32278 3.02746 7.55338 2.11718C7.71369 1.48493 7.86784 0.850146 8.04294 0.221707C8.06761 0.132837 8.19092 0.0147669 8.27231 0.0122278C8.81367 -0.00681584 9.35502 0.00207117 9.92598 0.00207117C9.89638 0.12395 9.87542 0.225516 9.84705 0.323273C9.17375 2.60977 8.49798 4.89627 7.83084 7.18404C7.77165 7.38591 7.74205 7.603 7.74082 7.81375C7.73342 9.27376 7.73712 10.7338 7.73712 12.1938C7.73835 12.3106 7.73835 12.4274 7.73835 12.5835Z" fill="#626262"/>
                                <path d="M19.2985 3.20947C19.8669 3.20947 20.3849 3.20947 20.9262 3.20947C20.9262 6.32373 20.9262 9.43165 20.9262 12.5599C20.3923 12.5599 19.8669 12.5599 19.3059 12.5599C19.3059 12.2526 19.3059 11.9581 19.3059 11.5823C19.1172 11.7651 18.9902 11.8972 18.8545 12.019C18.3797 12.4494 17.8643 12.7732 17.1922 12.6906C16.7433 12.636 16.4264 12.3821 16.3265 11.9314C16.255 11.609 16.2045 11.2738 16.2032 10.945C16.1921 8.42107 16.1946 5.89716 16.1934 3.37198C16.1934 3.33008 16.2008 3.28819 16.2069 3.22344C16.7372 3.22344 17.2625 3.22344 17.8384 3.22344C17.8384 3.34278 17.8384 3.4672 17.8384 3.59034C17.8384 5.74989 17.8384 7.90816 17.8396 10.0677C17.8396 10.2823 17.8372 10.4981 17.8618 10.7114C17.9087 11.124 18.1467 11.2586 18.5253 11.1024C18.984 10.9145 19.2972 10.4422 19.2972 9.94075C19.2972 7.83579 19.2972 5.72957 19.2972 3.62462C19.2985 3.49513 19.2985 3.36817 19.2985 3.20947Z" fill="#626262"/>
                                <path d="M14.8685 7.89815C14.829 8.80843 14.8364 9.72379 14.7378 10.6277C14.6219 11.6942 13.9412 12.4216 12.9842 12.6464C11.9607 12.8863 10.9409 12.5334 10.4365 11.6599C10.201 11.2511 10.0259 10.7433 10.0111 10.2735C9.95929 8.68782 9.92229 7.09451 10.0086 5.51135C10.1332 3.21723 12.0963 2.71575 13.4023 3.28452C14.3974 3.71871 14.7538 4.60868 14.8044 5.64339C14.8414 6.39243 14.8118 7.14529 14.8118 7.89688C14.8315 7.89688 14.85 7.89815 14.8685 7.89815ZM11.6166 7.88672C11.6166 8.59387 11.608 9.30229 11.6216 10.0094C11.6253 10.2304 11.6672 10.4576 11.7313 10.6696C11.8275 10.9896 12.0557 11.1571 12.3874 11.1597C12.724 11.1622 12.9596 11.0048 13.0631 10.6557C13.1297 10.4335 13.1754 10.1948 13.1766 9.96374C13.1865 8.58118 13.1865 7.19734 13.1766 5.81478C13.1754 5.58372 13.1297 5.34504 13.0631 5.12286C12.9571 4.76865 12.7302 4.61757 12.3874 4.61884C12.0532 4.62138 11.8214 4.78516 11.7178 5.13556C11.6586 5.33742 11.6228 5.55452 11.6191 5.76654C11.6093 6.47115 11.6166 7.1783 11.6166 7.88672Z" fill="#626262"/>
                                <path d="M15.6831 24.3745C15.6831 23.5277 15.6831 22.6809 15.6831 21.8341C15.6831 21.4976 15.8829 21.2793 16.2763 21.1815C16.6302 21.0939 16.9089 21.1955 17.0359 21.5091C17.1222 21.7224 17.1851 21.9623 17.1864 22.1908C17.1999 23.6584 17.1937 25.1273 17.1925 26.5962C17.1925 26.7029 17.1802 26.8108 17.1592 26.9149C17.01 27.6513 16.4711 27.8645 15.8952 27.3999C15.7855 27.311 15.6955 27.1244 15.693 26.9809C15.6733 26.1113 15.6831 25.2429 15.6831 24.3745Z" fill="#626262"/>
                                <path d="M23.4193 23.2858C22.8188 23.2858 22.3021 23.2858 21.7139 23.2858C21.7533 22.7589 21.757 22.2473 21.8384 21.7483C21.9038 21.3497 22.1874 21.1554 22.5475 21.1491C22.9211 21.1427 23.2035 21.3357 23.2787 21.7572C23.3638 22.2473 23.3737 22.75 23.4193 23.2858Z" fill="#626262"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_673_305">
                                <rect width="27" height="33" fill="white" transform="translate(-0.00195312)"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex gap-10 text-[13px] mt-16 justify-center items-center">
                    <a href="https://www.termsfeed.com/live/39a6e853-6e3e-423b-b831-615512fa44c5" target="_blank">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
                <Link to={"https://www.festivo.co/"} className="flex flex-col items-center justify-center mt-14">
                    <img src="/img/Festivo.png" alt="" />
                    <p>www.festivo.co</p>
                </Link>
                <p className="text-sm mt-10 text-center">© 2024 PT Semesta Realitas Indonesia. All rights reserved. Festivo, the Festivo logo, Parallel X and the Parallel X logo are trademarks and/or registered trademarks of PT Semesta Realitas Indonesia.</p>
            </div>
        </footer>
    )
}