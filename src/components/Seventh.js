import React from 'react'
import line from "../img/Vector 37.svg"
import first from '../img/rafiki.svg'
import second from "../img/pana.svg"
import speaker from "../img/speaker.svg"
import left_arrow from "../img/mingcute_arrows-right-line.png";
import right_arrow from "../img/mingcute_arrows-right-line (1).png";
import visa1 from "../img/toppng 4.svg"
import secure from "../img/lock1.svg";
import days from "../img/7days1.svg";
import rectangle from "../img/Rectangle 202.svg"
import Clock from './Clock'
import mac from "../img/mac1.svg";
import window from "../img/windows1.svg";
import small_right from "../img/mingcute_arrows-right-line (1).svg"
import small_left from "../img/Group.svg"
const Seventh = () => {
    return (
        <div className='bg-custom-color-2 mb-20 md:mb-0'>
            <div className='text-5xl hidden md:flex flex-col items-center justify-center font-extrabold '>
                <p className='mt-5'>Don't believe what we say</p>
                <p className='text-custom-color-1'>Check out for Yourself!</p>
                <img src={line} alt="imag loading" className='hidden md:block' />
            </div>
            <div className='text-3xl font-extrabold  flex md:hidden flex-col items-center justify-center '>
                <p className=' flex justify-center items-center'>Don't believe what </p>
                <p className='flex justify-center gap-1 items-center'>we say,<span className='text-custom-color-1'>Check out </span></p>
                <p className='flex justify-center items-center text-custom-color-1' >for Yourself!</p>

            </div>

            <div className='md:flex hidden justify-center items-center mt-20'>
                <div className=''>
                    <img src={first} alt="img loading" className='hidden md:block' />
                </div>
                <div className="mt-6 mx-6 rounded-lg flex justify-center flex-col xl:ml-24 font-serif z-20">
                    <p className="text-center xl:text-[15px] md:text-[8px] bg-custom-color-1 border-t-2 p-2 rounded-t-2xl text-white flex justify-center gap-1 ">

                        <img src={speaker} alt="speaker" className="hidden md:block"></img>

                        Make sure Your Sound Is Turned On! (Please Wait For Video To Fully Load)
                    </p>
                    <iframe
                        className=" w-full aspect-video xl:w-[736px] xl:h-[388px] md:w-[453px] md:h-[260px]  border-b-2 rounded-b-xl"
                        src="https://www.youtube.com/embed/VIDEO_ID"
                        title="video"
                        allowFullScreen></iframe>
                </div>
                <div className='hidden md:flex'>
                    <img src={second} alt="img loading" className='' />
                </div>
                {/* <div className=''>
                    <img src={rectangle} alt="image loading" className='' />
                </div> */}
            </div>
            <div className='md:hidden flex justify-center items-center '>
                <div className=''>
                    <img src={first} alt="img loading" className='hidden md:block' />
                </div>
                <div className="mt-6 mx-6 rounded-lg flex justify-center flex-col xl:ml-24 font-serif ">
                    <p className="text-center text-[10px] bg-custom-color-1 border-t-2 p-2 rounded-t-xl text-white flex justify-center gap-1 ">

                        <img src={speaker} alt="speaker" className="hidden md:block"></img>
                        Watch this short video to discover the secret method
                    </p>
                    <iframe
                        className=" w-full aspect-video md:w-[736px] md:h-[388px]  border-b-2 rounded-b-xl"
                        src="https://www.youtube.com/embed/VIDEO_ID"
                        title="video"
                        allowFullScreen></iframe>
                </div>
                <div className='hidden md:flex'>
                    <img src={second} alt="img loading" className='' />
                </div>
                {/* <div className=''>
                    <img src={rectangle} alt="image loading" className='' />
                </div> */}
            </div>
            <div className='bg-custom-color pt-10 pb-12'>
                <div className='text-xl flex justify-center items-center md:mt-10 font-serif'>
                    <p>Special Deal ending in :</p>
                </div>
                <Clock></Clock>
                <div className="hidden md:flex md:flex-row justify-center mt-5 font-serif ">
                    <div>
                        <img src={left_arrow} alt="left arrow" className='flex items-center justify-center relative top-3'></img>
                    </div>
                    <div className="bg-custom-color-1 m-1 text-2xl  py-3 border-2 rounded-lg flex justify-center flex-col md:flex md:flex-col text-white mb-10 px-10 tracking-wider ">
                        <p className="mr-1 md:mr-1">Get instant Access to Sellerkin</p>

                        <p className=' text-base flex items-center justify-center font-serif'>Soon, Prices are going to be increased</p>
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
                    <p className="mr-1 md:mr-1">Get Instant Access</p>
                    <p>To Sellerkin</p>

                </div>
                <div>
                    <img src={small_left} alt="right arrow 2" className="md:hidden relative top-7"></img>
                </div>
            </div>

                <div className='md:flex hidden justify-center items-center -mt-5 mb-6 '>
                    <p className='font-serif'>No Download or installation Required</p>
                </div>
                <div className='mb-4 md:hidden'>
                <p className=' text-base flex items-center justify-center font-serif'>Soon, Prices are going to be increased</p>
                </div>
                <div className="md:flex md:justify-center gap-4 ">
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

        </div>
    )
}

export default Seventh
