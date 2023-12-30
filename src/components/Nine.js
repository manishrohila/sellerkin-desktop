import React from 'react'
import third from "../img/Group 434.svg"
import frist from "../img/Mockup (3) 1.svg"
import second from "../img/Mockup (4) 1.svg"
import underline from "../img/Vector 37.svg"
import bonus1 from "../img/Group 439.svg"
import bonus2 from "../img/Group 440.svg"
import bonus3 from "../img/Group 441.svg"

import left_arrow from "../img/mingcute_arrows-right-line.png";
import right_arrow from "../img/mingcute_arrows-right-line (1).png";
import visa1 from "../img/toppng 4.svg"
import secure from "../img/lock1.svg";
import days from "../img/7days1.svg";
import mac from "../img/mac1.svg";
import window from "../img/windows1.svg";
import left_box from "../img/left box.svg"
import right_box from "../img/right box.svg"
const Nine = () => {
    return (
        <div className='bg-custom-color p-20 mt-10'>
            <div className='md:flex hidden flex-col text-4xl justify-center items-center font-sans font-bold'>
                <div>
                    <p>Not just that, If you decide to take action today you</p>
                </div>

                <div className='flex gap-2 justify-center items-center'>
                    <p className='ml-36'>Will be rewarded with </p>
                    <div className='flex flex-col text-custom-color-1 '>
                        <p>Fast Action Bonues:</p>
                        <img src={underline} alt="img" className='w-4/5' />
                    </div>
                </div>


            </div>
            {/* mobile version */}
            <div className='md:hidden flex flex-col text-3xl justify-center items-center font-sans font-bold'>
                <p className='flex justify-center items-center'>Not just that, <span className='text-custom-color-1'>If you</span> </p>
                <p className='text-custom-color-1 flex justify-center items-center'>decide to take action</p>
                <p className='flex justify-center items-center gap-2'>
                    <span className='text-custom-color-1 '>today you</span> will be </p>
                <p className='text-custom-color-1 flex justify-center items-center'>rewarded with Fast </p>
                <p className='text-custom-color-1 flex justify-center items-center'>Action Bonuses:</p>

            </div>

            <div className='md:flex hidden   shadow-xl justify-center items-center mt-20 bg-custom-color-2 w-9/12 mx-auto'>
                <div className=''>
                    <div>
                        <img src={bonus1} alt="img" className='relative  right-[7.5rem]' />
                    </div>
                    
                    <div className='relative right-6 font-serif mb-2'>
                        <p className='font-bold'>(Value $X)</p>
                    </div>
                    <div className='relative right-6 font-serif'>
                        <p>
                            A detailed guide on how to optimize Etsy
                        </p>
                        <p>listings for better visibility and conversion.</p>
                        <p>This can include tips on writing compelling</p>
                        <p>Descriptions, choosing the right keywords,</p>
                        <p>and using high-quality  images.</p>
                    </div>
                </div>
                <div className='relative bottom-10'>
                    <img src={frist} alt="img loading" className='' />
                </div>
            </div>
            <div className='md:flex hidden shadow-xl justify-center items-center mt-24 bg-custom-color-2 w-9/12 mx-auto gap-10'>
                <div className='relative bottom-10'>
                    <img src={second} alt="img loading" className='' />
                </div>
                <div className='relative left-28'>

                    <div>
                        <img src={bonus2} alt="img" className=' relative right-1 ' />
                    </div>
                    
                    <div className='relative left-10 font-serif mb-2'>
                        <p className='font-bold'>(Value $X)</p>
                    </div>
                    <div className='relative left-10 font-serif'>
                        <p>
                            A comprehensive ebook filled with tips,
                        </p>
                        <p>tricks, and stategies for succeeding on</p>
                        <p>Etsy. It could cover everything from</p>
                        <p>setting up a shop to marketing and </p>
                        <p>customer service.</p>
                    </div>
                </div>

            </div>
            <div className='md:flex hidden  shadow-xl justify-center items-center mt-16 bg-custom-color-2 w-9/12 mx-auto p-10'>
                <div className=''>
                    <div>
                        <img src={bonus3} alt="img" className='relative  right-16' />
                    </div>
                    
                    <div className='relative left-6 font-serif mb-2'>
                        <p className='font-bold'>(Value $X)</p>
                    </div>
                    <div className='relative left-6 font-serif'>
                        <p>
                            An invitation to a private Facebook
                        </p>
                        <p>group or forum where users can</p>
                        <p>network with other Sellerkin</p>
                        <p>customers, share experiences, ask</p>
                        <p>questions, and get support.</p>
                    </div>
                </div>
                <div className=''>
                    <img src={third} alt="img loading" className='relative left-11' />
                </div>
            </div>

            {/* Mobile version */}

            <div className='md:hidden flex flex-col font-serif shadow-xl justify-center items-center mt-16 bg-custom-color-2  p-10 '>
                <div className=''>

                    <div className='flex justify-center items-center mb-6 '>
                        <img src={frist} alt="img loading" className='w-32 h-56' />
                    </div>

                    <div className='flex justify-center items-center'>
                        <p className='font-bold'>(Value $X)</p>
                    </div>
                    <div>
                        <p className='flex justify-center items-center'>A detailed guide on how to </p> 
                        <p className='flex justify-center items-center'>optimize Etsy listings for better </p>
                        <p className='flex justify-center items-center mb-4'>visibility and conversion.</p>
                        <p className='flex justify-center items-center'>This can include tips on </p>
                         <p className='flex justify-center items-center'>writing compelling</p>
                        <p className='flex justify-center items-center'>Descriptions, choosing the </p>
                        <p className='flex justify-center items-center'> right keywords, and using </p>
                        <p className='flex justify-center items-center'>high-quality  images.</p>
                    </div>
                </div>

            </div>

            <div className='md:hidden flex flex-col shadow-xl font-serif justify-center items-center mt-16 bg-custom-color-2  p-10 '>
                <div className=''>

                    <div className='flex justify-center items-center mb-6'>
                        <img src={second} alt="img loading" className='w-32 h-56' />
                    </div>

                    <div className='flex justify-center items-center'>
                        <p className='font-bold'>(Value $X)</p>
                    </div>
                    <div>
                        <p className='flex justify-center items-center'>A comprehensive ebook filled </p>
                        <p className='flex justify-center items-center'> with tips, tricks, and stategies</p>
                        <p className='flex justify-center items-center mb-4'>for succeeding on Etsy. </p>
                        <p className='flex justify-center items-center'>It could cover everything from</p>
                        <p className='flex justify-center items-center'>setting up a shop to marketing  </p>
                        <p className='flex justify-center items-center'>and customer service.</p>
                    </div>
                </div>

            </div>
            <div className='md:hidden flex flex-col shadow-xl font-serif justify-center items-center mt-16 bg-custom-color-2  p-10 '>
                <div className=''>

                    <div className='flex justify-center items-center mb-6'>
                        <img src={third} alt="img loading" className='w-54 h-44' />
                    </div>

                    <div className='flex justify-center items-center'>
                        <p className='font-bold'>(Value $X)</p>
                    </div>
                    <div>
                    <p>An invitation to a private </p>
                        <p className='flex justify-center items-center'> Facebook group or forum n</p>
                        <p className='flex justify-center items-center'> where users ca network with </p>
                        <p className='flex justify-center items-center'>other Sellerkin customers, </p>
                        <p className='flex justify-center items-center'>share experiences, ask </p>
                        <p className='flex justify-center items-center'> questions, and get support.</p>
                       
                    </div>
                </div>

            </div>

            <div className="flex flex-row  md:hidden mt-5 font-sans mb-4 ">
                <div>
                    <img src={left_arrow} alt="left arrow"></img>
                </div>
                <div className="bg-custom-color-1  text-base px-5 border-2 rounded-lg flex justify-center items-center flex-col text-white font-bold p">
                    <p >Get instant Access </p>
                    <p> to Sellerkin</p>
                    

                </div>
                <div>
                    <img src={right_arrow} alt="right arrow 2"></img>
                </div>
            </div>
            <div className="md:flex md:justify-center gap-4 mt-20 ">
                <div className="flex justify-center mb-5">
                    <img src={visa1} alt="payment" className="w-52 md:w-auto"></img>
                </div>
                <div className="flex justify-center mb-5 gap-3">
                    <img src={secure} alt="payment" className="relative mb-2"></img>
                    <img src={days} alt="payment" className="relative mb-2"></img>
                </div>
            </div>
            <div className="flex justify-center mb-5 gap-4">
                <img src={mac} alt="payment" className="w-24 md:w-auto "></img>
                <img src={window} alt="payment" className="relative mb-2 w-24 md:w-auto"></img>
            </div>



        </div>
    )
}

export default Nine
