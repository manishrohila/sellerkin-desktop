import React from 'react';
import "./Third.css";
import curveline from "../img/Line 14.svg"
import quora from "../img/quora.svg"
import trend from "../img/google-trends-logo-freelogovectors 2.svg"
import meta from "../img/meta.svg"
import checkbook from "../img/checkbook.svg"
import chat from "../img/chat 2.svg"
import drive from "../img/drive.svg"
import arrow from "../img/Line 12.svg"
import arrow2 from "../img/Line 20.svg"
import li31 from "../img/li31.svg"
import li32 from "../img/li32.svg"
import li33 from "../img/li333.svg"
import li34 from "../img/li34.svg"
import li35 from "../img/li35.svg"
import li36 from "../img/li36.svg"
import li37 from "../img/li37.svg"
import li38 from "../img/li38.svg"
const Third = () => {
    return (
        <div className='bg-custom-color-2 pb-5 mt-7'>
            <div className='flex flex-col text-center md:flex-row font-sans justify-center md:text-5xl text-lg my-12 '>
                <h1 className='font-bold'>
                    The <span className='text-custom-color-1 font-bold'>Winning &nbsp;</span>
                </h1>
                <h1 className='font-bold'>
                    <span className='text-custom-color-1 font-bold'>Formula</span> Revealed
                </h1>
            </div>


            <div className='flex flex-col relative items-center md:h-[500px]'>
                <div className='flex justify-center w-11/12 font-serif flex-col md:flex md:flex-row space-x-5'>
                    <div className='border-2 w-72 h-36  border-custom-color-1 bg-custom-color text-black flex justify-center text-center m-9 md:-mr-px rounded-md flex-col relative'>
                        <p className='flex justify-center'><img src={quora} alt='quora image' className='absolute -top-4 font-sans border-2 border-custom-color-1 rounded-full bg-custom-color-2 p-1'></img></p>
                        <p> <strong><span className='underline-offset-1 underline'>Go</span> to Quora</strong>  and look for</p>
                        <p>what people are asking</p>
                    </div>
                    <img src={arrow} alt="arrow sign" className='hidden md:block w-24' ></img>
                    <div className='flex justify-center md:hidden items-center'>
                        <img src={arrow2} alt="arrow sign" className='block h-10 w-10' />
                    </div>

                    <div className='border-2 w-72 h-36  border-custom-color-1 bg-custom-color text-black flex justify-center text-center m-9 rounded-md flex-col relative'>
                        <p className='flex justify-center ' ><img src={meta} alt='meta image' className='absolute -top-4 font-sans border-2 border-custom-color-1 rounded-full bg-custom-color-2 p-2 '></img></p>
                        <p> <strong> <span className='underline-offset-1 underline'>Go</span> to facebook ads library</strong></p>
                        <p>and then find out what</p>
                        <p>people are running ads on</p>
                    </div>
                    <img src={arrow} alt="arrow sign" className='hidden md:block w-24' ></img>
                    <div className='flex justify-center md:hidden items-center'>
                        <img src={arrow2} alt="arrow sign" className='block h-10 w-10' />
                    </div>

                    <div className='border-2 w-72 h-36  border-custom-color-1 bg-custom-color text-black flex justify-center text-center m-9 rounded-md flex-col relative'>
                        <p className='flex justify-center'><img src={drive} alt='drive image' className='absolute -top-4 font-sans border-2 border-custom-color-1 rounded-full bg-custom-color-2 p-1'></img></p>
                        <p> <strong><span className='underline-offset-1 underline'>Go</span> to google Ads Library</strong> and</p>
                        <p> find the ads being run</p>
                        <p>on different products</p>
                    </div>


                </div>





                {/* UNDER LINE */}

                <div className='flex justify-center'>
                    <img src={curveline} alt="curve line" className='w-11/12 relative top-24 hidden md:block md:w-[1250px] lg:w-[1250px] lg:left-0 bottom-0 lg:bottom-4 lg:-top-24 left-14 right-0 ml-10' />

                    {/* <img src={curveline} alt="curve line" className='w-[1400px]' /> */}
                </div>

                <div className='flex justify-center md:hidden items-center'>
                    <img src={arrow2} alt="arrow sign" className='block h-10 w-10' />
                </div>







                <div className='flex justify-center w-11/12 font-serif mt-10 flex-col md:flex md:flex-row relative lg:-top-56 space-x-5'>
                    <div className='border-2 w-72 h-36  border-custom-color-1 bg-custom-color text-black flex justify-center text-center m-9 md:-mr-px rounded-md flex-col relative'>
                        <p className='flex justify-center'><img src={checkbook} alt='check image' className='absolute -top-4 font-sans border-2 border-custom-color-1 rounded-full bg-custom-color-2 p-1'></img></p>
                        <p>Then to find out<strong>what</strong> </p>
                        <p><storn>people are commenting</storn></p>
                        <p> <strong>on ads</strong>  one by one</p>
                    </div>
                    <img src={arrow} alt="arrow sign" className='hidden md:block w-24'></img>
                    <div className='flex justify-center md:hidden items-center'>
                        <img src={arrow2} alt="arrow sign" className='block h-10 w-10' />
                    </div>

                    <div className='border-2 w-72 h-36  border-custom-color-1 bg-custom-color text-black flex justify-center text-center m-9 rounded-md flex-col relative'>
                        <p className='flex justify-center'><img src={trend} alt='trend image' className='absolute -top-4 font-sans border-2 border-custom-color-1 rounded-full bg-custom-color-2 p-2 h-9'></img></p>
                        <p> <strong><span className='underline-offset-1 underline'>Go</span> to Google Trends</strong>  and</p>
                        <p>search for Increasing /</p>
                        <p>Decreasing Markets</p>
                    </div>
                    <img src={arrow} alt="arrow sign" className='hidden md:block w-24' ></img>
                    <div className='flex justify-center md:hidden items-center'>
                        <img src={arrow2} alt="arrow sign" className='block h-10 w-10' />
                    </div>

                    <div className='border-2 w-72 h-36  border-custom-color-1 bg-custom-color text-black flex justify-center text-center m-9 rounded-md flex-col relative'>
                        <p className='flex justify-center'><img src={chat} alt='chat image' className='absolute -top-4 font-sans border-2 border-custom-color-1 rounded-full bg-custom-color-2 p-1'></img></p>
                        <p>And then People can <strong>start</strong> </p>
                        <p><strong>guessing,</strong>  that this could</p>
                        <p> <strong className='underline underline-offset-1'>be the winning product</strong> </p>
                    </div>


                </div>
            </div>


            <div className='text-2xl hidden md:flex justify-center flex-col items-center font-sans mb-10'>
                <p> <span className='text-custom-color-1'>However </span>if we go ahead and start doing this <span className='text-custom-color-1'>manually, it can take over</span> </p>
                <p> <span className='text-custom-color-1'>48 hours of research</span>  and even then you would be making guess</p>
            </div>

            <div className='text-lg flex md:hidden justify-center flex-col items-center  font-sans mb-10'>
                <p> <span className='text-custom-color-1'>However </span>if we go ahead and   </p>
                <p>start doing this <span className='text-custom-color-1'>manually, it </span></p>
                <p>
                    <span className='text-custom-color-1'>can take over 8 hours of </span>
                </p>
                <p> <span className='text-custom-color-1'>research</span>  and even then you </p>
                <p>would be making guess</p>
            </div>

            <div className='text-5xl hidden md:flex justify-center flex-col items-center  font-bold font-serif'>
                <p className='word-spacing'>But <span className='text-custom-color-1'>what if you had a solution,</span></p>
                <p className='word-spacing'>through which you can:</p>
            </div>

            <div className='text-lg  flex md:hidden justify-center flex-col items-center  font-bold font-serif mb-10'>
                <p >But <span className='text-custom-color-1'>what if you had a </span></p>
                <p> <span className='text-custom-color-1'>solution,</span> through</p>
                <p> which you can:</p>
            </div>

            <div className='mt-10'>
                <div className='flex justify-center items-center gap-8 mb-8'>
                    <div className='border-2 border-custom-color-2 bg-custom-color p-4 h-25 w-96'>
                        <p>Remove the manual effort and frustration</p>
                        <p>of second guessing your Business winners.</p>
                    </div >
                    <div className='border-2 border-custom-color-2 bg-custom-color p-4 h-25 w-96'>
                        <p className='h-6'>Find Winning Niches within first 2 minutes</p>
                        
                    </div>
                </div>
                <div className='flex justify-center items-center gap-8 mb-8'>
                    <div className='border-2 border-custom-color-2 bg-custom-color p-4 h-25 w-96'>
                        <p>PinPoint the <strong>Winning Product</strong> in less than</p>
                        <p>60 seconds at the click of a Button.</p>
                    </div >
                    <div className='border-2 border-custom-color-2 bg-custom-color p-4 h-25 w-96'>
                        <p>Go from No Product to your first sale with</p>
                        <p>literally <strong>ZERO trial and erro</strong></p>
                        
                    </div>
                </div>
                <div className='flex justify-center items-center gap-8 mb-8'>
                    <div className='border-2 border-custom-color-2 bg-custom-color p-4 h-25 w-96'>
                        <p>Get back the <strong>last time</strong> and hours with</p>
                        <p>finding winners faster so that you can</p>
                        <p>enjoy the <strong>found time with family.</strong></p>
                    </div >
                    <div className='border-2 border-custom-color-2 bg-custom-color p-4 h-25 w-96'>
                        <p>Reduce your anxiety and get a <strong>peaceful</strong> </p>
                        <p><strong>sleep</strong>knowing your business is growing.</p>
                        
                    </div>
                </div>
                <div className='flex justify-center items-center gap-8 mb-8'>
                    <div className='border-2 border-custom-color-2 bg-custom-color p-4 h-25 w-96'>
                        <p>See your money pile up as your product</p>
                        <p>Selecting <strong>bring in a regular income.</strong></p>
                        <p>making your financial life easier.</p>
                    </div >
                    <div className='border-2 border-custom-color-2 bg-custom-color p-4 h-25 w-96'>
                        <p>watch your<strong>money grow,</strong> ensuring a </p>
                        <p><strong>stable future</strong> and giving you opportunities</p>
                        <p>for fun investments and great experiences</p>
                        
                    </div>
                </div>
            </div>




        </div>

    );
};

export default Third;
