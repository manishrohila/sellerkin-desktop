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
import left_arrow from "../img/mingcute_arrows-right-line.png";
import right_arrow from "../img/mingcute_arrows-right-line (1).png";
import visa1 from "../img/toppng 4.svg"
import secure from "../img/lock1.svg";
import days from "../img/7days1.svg";
const Third = () => {
    return (
        <div className='bg-custom-color-2  mt-7 mb-2'>

            {/* winning formula */}
            <div className='flex flex-col  text-center md:flex-row font-sans justify-center md:text-5xl text-4xl my-12 '>
                <h1 className='font-bold'>
                    The <span className='text-custom-color-1 font-bold'>Winning &nbsp;</span>
                </h1>
                <h1 className='font-bold'>
                    <span className='text-custom-color-1 font-bold'>Formula</span> Revealed
                </h1>
            </div>

            {/* Box and line */}
            <div className='flex flex-col relative items-center md:h-[500px]'>

                {/* Above 3 box */}
                <div className='flex justify-center w-11/12 font-serif flex-col md:flex md:flex-row '>
                    <div className='border-2 w-72 h-36  border-custom-color-1 bg-custom-color text-black flex justify-center text-center m-9 md:-mr-px rounded-md flex-col relative'>
                        <p className='flex justify-center'><img src={quora} alt='quora image' className='absolute -top-4 font-sans border-2 border-custom-color-1 rounded-full bg-custom-color-2 p-1'></img></p>
                        <p> <strong><span className='underline-offset-1 underline'>Go</span> to Quora</strong>  and look for</p>
                        <p>what people are asking</p>
                    </div>
                    <img src={arrow} alt="arrow sign" className='hidden md:block w-24' ></img>
                    <div className='flex justify-center md:hidden items-center'>
                        <img src={arrow2} alt="arrow sign" className='relative right-2 h-10 w-10' />
                    </div>

                    <div className='border-2 w-72 h-36  border-custom-color-1 bg-custom-color text-black flex justify-center text-center m-9 rounded-md flex-col relative'>
                        <p className='flex justify-center ' ><img src={meta} alt='meta image' className='absolute -top-4 font-sans border-2 border-custom-color-1 rounded-full bg-custom-color-2 p-2 '></img></p>
                        <p> <strong> <span className='underline-offset-1 underline'>Go</span> to facebook ads library</strong></p>
                        <p>and then find out what</p>
                        <p>people are running ads on</p>
                    </div>
                    <img src={arrow} alt="arrow sign" className='hidden md:block w-24' ></img>
                    <div className='flex justify-center md:hidden items-center'>
                        <img src={arrow2} alt="arrow sign" className='relative right-2  h-10 w-10' />
                    </div>

                    <div className='border-2 w-72 h-36  border-custom-color-1 bg-custom-color text-black flex justify-center text-center m-9 rounded-md flex-col relative'>
                        <p className='flex justify-center'><img src={drive} alt='drive image' className='absolute -top-4 font-sans border-2 border-custom-color-1 rounded-full bg-custom-color-2 p-1'></img></p>
                        <p> <strong><span className='underline-offset-1 underline'>Go</span> to google Ads Library</strong> and</p>
                        <p> find the ads being run</p>
                        <p>on different products</p>
                    </div>


                </div>





                {/* UNDER LINE */}

                <div className='md:flex hidden justify-center'>
                    <img src={curveline} alt="curve line" className='w-11/12 relative top-24 hidden md:block md:w-[1250px] lg:w-[1250px] lg:left-0 bottom-0 lg:bottom-4 lg:-top-24 left-14 right-0 ml-10' />


                </div>
                {/* <img src={curveline} alt="curve line" className='w-[1400px]' /> */}

                {/* arrow sign */}
                <div className='flex justify-center md:hidden items-center'>
                    <img src={arrow2} alt="arrow sign" className='relative right-2  h-10 w-10' />
                </div>





                {/* Down three box */}

                <div className='flex justify-center w-11/12 font-serif md:mt-10 flex-col md:flex md:flex-row relative lg:-top-56 '>
                    <div className='border-2 w-72 h-36  border-custom-color-1 bg-custom-color text-black flex justify-center text-center m-9 md:-mr-px rounded-md flex-col relative'>
                        <p className='flex justify-center'><img src={checkbook} alt='check image' className='absolute -top-4 font-sans border-2 border-custom-color-1 rounded-full bg-custom-color-2 p-1'></img></p>
                        <p>Then to find out<strong>what</strong> </p>
                        <p><storn>people are commenting</storn></p>
                        <p> <strong>on ads</strong>  one by one</p>
                    </div>
                    <img src={arrow} alt="arrow sign" className='hidden md:block w-24'></img>
                    <div className='flex justify-center md:hidden items-center'>
                        <img src={arrow2} alt="arrow sign" className='relative right-2 h-10 w-10' />
                    </div>

                    <div className='border-2 w-72 h-36  border-custom-color-1 bg-custom-color text-black flex justify-center text-center m-9 rounded-md flex-col relative'>
                        <p className='flex justify-center'><img src={trend} alt='trend image' className='absolute -top-4 font-sans border-2 border-custom-color-1 rounded-full bg-custom-color-2 p-2 h-9'></img></p>
                        <p> <strong><span className='underline-offset-1 underline'>Go</span> to Google Trends</strong>  and</p>
                        <p>search for Increasing /</p>
                        <p>Decreasing Markets</p>
                    </div>
                    <img src={arrow} alt="arrow sign" className='hidden md:block w-24' ></img>
                    <div className='flex justify-center md:hidden items-center'>
                        <img src={arrow2} alt="arrow sign" className='relative right-2 h-10 w-10' />
                    </div>

                    <div className='border-2 w-72 h-36  border-custom-color-1 bg-custom-color text-black flex justify-center text-center m-9 rounded-md flex-col relative'>
                        <p className='flex justify-center'><img src={chat} alt='chat image' className='absolute -top-4 font-sans border-2 border-custom-color-1 rounded-full bg-custom-color-2 p-1'></img></p>
                        <p>And then People can <strong>start</strong> </p>
                        <p><strong>guessing,</strong>  that this could</p>
                        <p> <strong className='underline underline-offset-1'>be the winning product</strong> </p>
                    </div>


                </div>
            </div>

            {/* however if .. */}
            <div>
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
            </div>

            {/* But what if .. */}

            <div>
                <div className='text-5xl hidden md:flex justify-center flex-col items-center  font-bold font-serif'>
                    <p className='word-spacing'>But <span className='text-custom-color-1'>what if you had a solution,</span></p>
                    <p className='word-spacing'>through which you can:</p>
                </div>

                <div className='text-2xl  flex md:hidden justify-center flex-col items-center  font-bold font-serif mb-10'>
                    <p >But <span className='text-custom-color-1'>what if you had a </span></p>
                    <p> <span className='text-custom-color-1'>solution,</span> through</p>
                    <p> which you can:</p>
                </div>
            </div>

            {/* six points  */}
            <div className='mt-10 hidden md:flex flex-col  justify-center'>

                <div className='flex justify-center items-center gap-40 mb-8 '>

                    <div className='border-2 border-custom-color-2 bg-custom-color p-4 h-25 w-96 container1 relative   flex flex-col shadow-2xl '>
                        <p>Remove the manual effort and frustration</p>
                        <p>of second guessing your Business winners.</p>
                    </div >
                    <div className='border-2 border-custom-color-2 bg-custom-color p-4 h-25 w-96 container2 relative   flex flex-col shadow-2xl '>
                        <p className='p-3'>Find Winning Niches within first 2 minutes</p>

                    </div>
                </div>
                
                <div className='flex justify-center items-center gap-40 mb-8'>
                    <div className='border-2 border-custom-color-2 bg-custom-color p-4 h-25 w-96 container3 relative   flex flex-col shadow-2xl '>
                        <p>PinPoint the <strong>Winning Product</strong> in less than</p>
                        <p>60 seconds at the click of a Button.</p>
                    </div >
                    <div className='border-2 border-custom-color-2 bg-custom-color p-4 h-25 w-96 container4 relative   flex flex-col shadow-2xl '>
                        <p>Go from No Product to your first sale with</p>
                        <p>literally <strong>ZERO trial and erro</strong></p>

                    </div>
                </div>
                <div className='flex justify-center items-center gap-40 mb-8'>
                    <div className='border-2 border-custom-color-2 bg-custom-color p-4 h-25 w-96 container5 relative   flex flex-col shadow-2xl '>
                        <p>Get back the <strong>last time</strong> and hours with</p>
                        <p>finding winners faster so that you can</p>
                        <p>enjoy the <strong>found time with family.</strong></p>
                    </div >
                    <div className='border-2 border-custom-color-2 bg-custom-color p-4 h-25 w-96 container6 relative   flex flex-col shadow-2xl '>
                        <p>Reduce your anxiety and get a <strong>peaceful</strong> </p>
                        <p><strong>sleep</strong>knowing your business is growing.</p>

                    </div>
                </div>
                <div className='flex justify-center items-center gap-40 mb-8'>
                    <div className='border-2 border-custom-color-2 bg-custom-color p-4 h-25 w-96 container7 relative   flex flex-col shadow-2xl '>
                        <p>See your money pile up as your product</p>
                        <p>Selecting <strong>bring in a regular income.</strong></p>
                        <p>making your financial life easier.</p>
                    </div >
                    <div className='border-2 border-custom-color-2 bg-custom-color p-4 h-25 w-96 container8 relative   flex flex-col shadow-2xl '>
                        <p>watch your<strong>money grow,</strong> ensuring a </p>
                        <p><strong>stable future</strong> and giving you opportunities</p>
                        <p>for fun investments and great experiences</p>

                    </div>
                </div>
            </div>
            <div className='mt-10 flex flex-col md:hidden flex-wrap justify-center'>
                <div className='flex flex-col justify-center items-center gap-8 mb-8'>

                    <div className='border-2 border-custom-color-2 bg-custom-color p-4 h-25 w-72  relative  flex flex-col items-center justify-center shadow-xl rounded-lg '>
                        <p>Remove the manual</p>
                        <p>effort and frustration of</p>
                        <p>second guessing your</p>
                        <p>Business winners.</p>
                    </div >
                    <div className='border-2 border-custom-color-2 bg-custom-color p-4 h-25 w-72  flex flex-col items-center justify-center shadow-xl rounded-lg '>
                        <p >Find <strong>Winning Niches</strong>  </p>
                        <p> within first 2 minutes</p>

                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-8 mb-8'>
                    <div className='border-2 border-custom-color-2 bg-custom-color p-4 h-25 w-72  flex flex-col items-center justify-center shadow-xl rounded-lg'>
                        <p>PinPoint the <strong>Winning</strong></p>
                        <p><strong> Product</strong> in less than</p>
                        <p>60 seconds at the </p>
                        <p>click of a Button.</p>
                    </div >
                    <div className='border-2 border-custom-color-2 bg-custom-color p-4 h-25 w-72  flex flex-col items-center justify-center shadow-xl rounded-lg'>
                        <p>Go from No Product</p>
                        <p> to your first <strong>sale </strong>with</p>
                        <p>literally <strong>ZERO trial</strong> </p>
                        <p> and<strong> error</strong></p>

                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-8 mb-8'>
                    <div className='border-2 border-custom-color-2 bg-custom-color p-4 h-25 w-72  flex flex-col items-center justify-center shadow-xl rounded-lg'>
                        <p>Get back the <strong>last time</strong> </p>
                        <p>and hours with finding</p>
                        <p> winners faster so that you </p>
                        <p> can enjoy the <strong> new found</strong></p>
                        <p> <strong> time with family.</strong></p>
                    </div >
                    <div className='border-2 border-custom-color-2 bg-custom-color p-4 h-25 w-72  flex flex-col items-center justify-center shadow-xl rounded-lg '>
                        <p>Reduce your anxiety
                            <p></p> and get a <strong>peaceful</strong> </p>
                        <p><strong>sleep</strong>knowing your</p>
                        <p>business is growing.</p>

                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-8 mb-8'>
                    <div className='border-2 border-custom-color-2 bg-custom-color p-4 h-25 w-72  flex flex-col items-center justify-center shadow-xl rounded-lg'>
                        <p>See your money pile up as </p>
                        <p>your product Selecting bring </p>
                        <p> <strong>in a regular income, making </strong></p>
                        <p>your financial life easier.</p>
                    </div >
                    <div className='border-2 border-custom-color-2 bg-custom-color p-4 h-25 w-72  flex flex-col items-center justify-center shadow-xl rounded-lg'>
                        <p>watch your<strong>money grow,</strong></p>
                        <p>ensuring a <strong>stable future</strong> and </p>
                        <p>  giving you opportunities for</p>
                        <p> fun investments and great</p>
                        <p>experiences</p>

                    </div>
                </div>
            </div>

            <div className="hidden md:flex md:flex-row justify-center mt-5 font-sans mb-10">
                <div>
                    <img src={left_arrow} alt="left arrow"></img>
                </div>
                <div className="bg-custom-color-1 m-1 text-2xl px-5 py-3 border-2 rounded-lg flex justify-center flex-col md:flex md:flex-col text-white mb-10">
                    <p className="mr-1 md:mr-1">Get instant Access to Sellerkin</p>

                    <p className=' text-base'>Soon, Prices are going to be increased</p>
                </div>
                <div>
                    <img src={right_arrow} alt="right arrow 2"></img>
                </div>
            </div>
            <div className="flex flex-row  md:hidden justify-center mt-5 font-sans mb-10">
                <div>
                    <img src={left_arrow} alt="left arrow"></img>
                </div>
                <div className="bg-custom-color-1 m-1 text-base px-5 py-3 border-2 rounded-lg flex justify-center items-center flex-col text-white font-bold">
                    <p className="mr-1 md:mr-1">Get instant Access</p>
                    <p>
                        to Sellerkin
                    </p>

                </div>
                <div>
                    <img src={right_arrow} alt="right arrow 2"></img>
                </div>
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



        </div>

    );
};

export default Third;
