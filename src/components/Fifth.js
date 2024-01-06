import React from 'react'
import first from "../img/Component 20.svg"
import second from "../img/Component 20 (1).svg"
import third from '../img/Component 23.svg'


import left_arrow from "../img/mingcute_arrows-right-line.png";
import right_arrow from "../img/mingcute_arrows-right-line (1).png";
import visa1 from "../img/toppng 4.svg"
import secure from "../img/lock1.svg";
import days from "../img/7days1.svg";

import fourth from "../img/Component 19.svg"
import fifth from "../img/Component 21.svg"
import sixth from "../img/Component 22.svg"
import underline from "../img/Vector 4.svg"
import first1 from "../img/Component 33.svg"
import second1 from "../img/Component 31.svg"
import third1 from '../img/Component 32.svg'
import small_right from "../img/mingcute_arrows-right-line (1).svg"
import small_left from "../img/Group.svg"

const Fifth = () => {
    return (
        <div className='bg-custom-color-2 mt-10'>

            <div className='text-sans flex text-5xl gap-2 justify-center mb-10 md:mb-20 font-bold font-sans'>
                <div className='flex flex-col gap-3'>
                    <p className='text-custom-color-1'> Imagine </p>
                    <img src={underline} alt="underline loading" className='hidden md:block' />
                </div>
                <div>
                    <p>this ...</p>
                </div>

            </div>

            <div className='mt-10 hidden md:flex flex-col justify-center items-center '>

                <div className='flex relative flex-wrap items-center justify-center gap-5 mb-20 '>
                    <div>
                        <img src={fourth} alt="" />
                    </div>
                    <div>
                        <img src={first} alt="family picture" className='' />
                    </div>

                </div>

                <div className='flex relative left-12 flex-wrap items-center justify-center gap-5 mb-20 '>
                    <div>
                        <img src={second} alt="family picture" className='' />
                    </div>

                    <div>
                        <img src={fifth} alt="" />
                    </div>
                </div>

                <div className='flex relative flex-wrap items-center justify-center gap-5 mb-20 '>
                    <div>
                        <img src={sixth} alt="" />
                    </div>
                    <div>
                        <img src={third} alt="family picture" className=' transform scale-x-[-1]' />
                    </div>
                </div>


            </div>
            <div className='mt-10 flex md:hidden flex-col justify-center items-center font-serif '>

                <div className='flex relative flex-wrap items-center justify-around gap-5 mb-10 '>

                    <img src={first1} alt="img loading" />


                </div>

                <div className='flex justify-evenly flex-wrap items-center gap-3 mb-10 relative '>
                    <div className='flex relative flex-wrap items-center justify-around gap-5  '>
                        <img src={second1} alt="img loading" />
                    </div>
                </div>

                <div className='flex justify-evenly flex-wrap items-center gap-5 mb-10 relative font-serif'>

                    <div className='flex relative flex-wrap items-center justify-around gap-5 mb-10 '>
                        <img src={third1} alt="img loading" />
                    </div>

                </div>


            </div>

            <div className='hidden md:flex flex-col flex-wrap font-serif justify-center items-center mb-10'>
                <p>Step into boundless possibilities with <strong>Sellerkin's incredible insights revealing</strong></p>
                <p>features. Grow your business to <strong>new heights</strong> through <strong>deep insights</strong></p>
            </div>
            <div className='md:flex hidden flex-col flex-wrap font-serif justify-center items-center mb-10'>
                <p>Leave your competitors <strong>behind</strong>and become a <span>standout leader</span> <strong>Biggest</strong></p>
                <p><strong>Player</strong> in your niche, all powered by <strong>Sellerkin's advanced tools</strong></p>
            </div>
            <div className='flex md:hidden flex-col flex-wrap font-serif justify-center items-center text-base mb-10'>
                <p>Step into boundless possibilities with </p>
                <p><strong>Sellerkin's incredible insights revealing</strong></p>
                <p>features. Grow your business to <strong>new </strong> </p>
                <p><strong>heights</strong> through <strong>deep insights</strong></p>
            </div>

            <div className='md:hidden flex flex-col flex-wrap font-serif justify-center items-center mb-10 text-base'>
                <p>Leave your competitors <strong>behind</strong> &nbsp;and </p>
                <p>become a <span>standout leader</span> <strong>Biggest</strong></p>
                <p><strong>Player</strong> in your niche, all powered by  </p>
                <p> <strong>Sellerkin's advanced tools</strong></p>
            </div>
            <div className="hidden md:flex md:flex-row justify-center mt-5 font-sans mb-10">
                <div>
                    <img src={left_arrow} alt="left arrow" className='flex items-center justify-center relative top-3'></img>
                </div>
                <div className="bg-custom-color-1 m-1 text-2xl px-10 py-3 border-2 rounded-lg flex justify-center flex-col md:flex md:flex-col text-white ">
                    <p className="mr-1 md:mr-1">Your Journey to Success Starts Here</p>

                    <p className='text-base flex justify-center font-serif'>Soon, Prices are going to be increased</p>
                </div>
                <div>
                    <img src={right_arrow} alt="right arrow 2" className='flex items-center justify-center relative top-3'></img>
                </div>
            </div>
            <div className="flex flex-row  md:hidden justify-center mt-5 font-sans mb-10">
                <div>
                    <img src={small_right} alt="left arrow" className="md:hidden relative top-7"></img>
                </div>
                <div className="bg-custom-color-1 m-1 text-xl px-10 py-3 border-2 rounded-lg flex justify-center items-center flex-col text-white font-bold font-sans">
                    <p className="mr-1 md:mr-1">Your Journey to</p>
                    <p>Success Starts Here</p>

                </div>
                <div>
                    <img src={small_left} alt="right arrow 2" className="md:hidden relative top-7"></img>
                </div>
            </div>





            <div className="md:flex md:justify-center gap-4  h-20 ">
                <div className="flex justify-center mb-5">
                    <img src={visa1} alt="payment" className="w-52 md:w-auto"></img>
                </div>
                <div className="flex justify-center mb-5 gap-3">
                    <img src={secure} alt="payment" className="relative mb-2"></img>
                    <img src={days} alt="payment" className="relative mb-2"></img>
                </div>
            </div>

        </div>
    )
}

export default Fifth
