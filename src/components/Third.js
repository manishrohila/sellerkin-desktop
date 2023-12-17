import React from 'react';
import curveline from "../img/Line 14.svg"
import quora from "../img/quora.svg"
import trend from "../img/google-trends-logo-freelogovectors 2.svg"
import meta from "../img/meta.svg"
import checkbook from "../img/checkbook.svg"
import chat from "../img/chat 2.svg"
import drive from "../img/drive.svg"
import arrow from "../img/Line 12.svg"
import arrow2 from "../img/Line 20.svg"
const Third = () => {
    return (
        <div className='bg-custom-color-2 pb-5 mt-7'>
            <div className='flex flex-col text-center md:flex-row font-sans justify-center text-3xl'>
                <h1 className='font-bold'>
                    The <span className='text-custom-color-1 font-bold'>Winning &nbsp;</span>
                </h1>
                <h1 className='font-bold'>
                    <span className='text-custom-color-1 font-bold'>Formula</span> Revealed
                </h1>
            </div>


            <div className='flex flex-col relative items-center'>
                <div className='flex justify-center w-11/12 font-serif flex-col md:flex md:flex-row'>
                    <div className='border-2 w-72 h-32  border-custom-color-1 bg-custom-color text-black flex justify-center text-center m-9 rounded-md flex-col relative'>
                        <p className='flex justify-center'><img src={quora} alt='quora image' className='absolute -top-4 font-sans border-2 border-custom-color-1 rounded-full bg-custom-color-2 p-1'></img></p>
                        <p> <strong><span className='underline-offset-1 underline'>Go</span> to Quora</strong>  and look for</p>
                        <p>what people are asking</p>
                    </div>
                    <img src={arrow} alt="arrow sign" className='hidden md:block' ></img>
                    <div className='flex justify-center md:hidden items-center'>
                        <img src={arrow2} alt="arrow sign" className='block h-10 w-10' />
                    </div>

                    <div className='border-2 w-72 h-32  border-custom-color-1 bg-custom-color text-black flex justify-center text-center m-9 rounded-md flex-col relative'>
                        <p className='flex justify-center ' ><img src={meta} alt='meta image' className='absolute -top-4 font-sans border-2 border-custom-color-1 rounded-full bg-custom-color-2 p-2 '></img></p>
                        <p> <strong> <span className='underline-offset-1 underline'>Go</span> to facebook ads library</strong></p>
                        <p>and then find out what</p>
                        <p>people are running ads on</p>
                    </div>
                    <img src={arrow} alt="arrow sign" className='hidden md:block' ></img>
                    <div className='flex justify-center md:hidden items-center'>
                        <img src={arrow2} alt="arrow sign" className='block h-10 w-10' />
                    </div>

                    <div className='border-2 w-72 h-32  border-custom-color-1 bg-custom-color text-black flex justify-center text-center m-9 rounded-md flex-col relative'>
                        <p className='flex justify-center'><img src={drive} alt='drive image' className='absolute -top-4 font-sans border-2 border-custom-color-1 rounded-full bg-custom-color-2 p-1'></img></p>
                        <p> <strong><span className='underline-offset-1 underline'>Go</span> to google Ads Library</strong> and</p>
                        <p> find the ads being run</p>
                        <p>on different products</p>
                    </div>


                </div>





                {/* UNDER LINE */}

                <div className='flex justify-center'>
                    <img src={curveline} alt="curve line" className='w-11/12 relative top-24 hidden md:block  lg:w-full lg:left-0 bottom-0 lg:bottom-4 lg:-top-24 left-14 right-0 ' />
                </div>

                <div className='flex justify-center md:hidden items-center'>
                    <img src={arrow2} alt="arrow sign" className='block h-10 w-10' />
                </div>







                <div className='flex justify-center w-11/12 font-serif mt-14 flex-col md:flex md:flex-row relative lg:-top-56'>
                    <div className='border-2 w-72 h-32  border-custom-color-1 bg-custom-color text-black flex justify-center text-center m-9 rounded-md flex-col relative'>
                        <p className='flex justify-center'><img src={checkbook} alt='check image' className='absolute -top-4 font-sans border-2 border-custom-color-1 rounded-full bg-custom-color-2 p-1'></img></p>
                        <p>Then to find out<strong>what</strong> </p>
                        <p><storn>people are commenting</storn></p>
                        <p> <strong>on ads</strong>  one by one</p>
                    </div>
                    <img src={arrow} alt="arrow sign" className='hidden md:block'></img>
                    <div className='flex justify-center md:hidden items-center'>
                        <img src={arrow2} alt="arrow sign" className='block h-10 w-10' />
                    </div>

                    <div className='border-2 w-72 h-32  border-custom-color-1 bg-custom-color text-black flex justify-center text-center m-9 rounded-md flex-col relative'>
                        <p className='flex justify-center'><img src={trend} alt='trend image' className='absolute -top-4 font-sans border-2 border-custom-color-1 rounded-full bg-custom-color-2 p-2 h-9'></img></p>
                        <p> <strong><span className='underline-offset-1 underline'>Go</span> to Google Trends</strong>  and</p>
                        <p>search for Increasing /</p>
                        <p>Decreasing Markets</p>
                    </div>
                    <img src={arrow} alt="arrow sign" className='hidden md:block' ></img>
                    <div className='flex justify-center md:hidden items-center'>
                        <img src={arrow2} alt="arrow sign" className='block h-10 w-10' />
                    </div>

                    <div className='border-2 w-72 h-32  border-custom-color-1 bg-custom-color text-black flex justify-center text-center m-9 rounded-md flex-col relative'>
                        <p className='flex justify-center'><img src={chat} alt='chat image' className='absolute -top-4 font-sans border-2 border-custom-color-1 rounded-full bg-custom-color-2 p-1'></img></p>
                        <p>And then People can <strong>start</strong> </p>
                        <p><strong>guessing,</strong>  that this could</p>
                        <p> <strong className='underline underline-offset-1'>be the winning product</strong> </p>
                    </div>


                </div>
            </div>




        </div>

    );
};

export default Third;
