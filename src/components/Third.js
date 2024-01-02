import React from 'react';
import "./Third.css";
import curveline from "../img/Line 14.svg"
import quora from "../img/Component 18.svg"
import trend from "../img/Component 16 (1).svg"
import meta from "../img/Component 14.svg"
import checkbook from "../img/Component 16.svg"
import chat from "../img/Component 17.svg"
import drive from "../img/Component 15.svg"
import arrow from "../img/Line 12.svg"
import arrow2 from "../img/Line 20.svg"
import li31 from "../img/li31.svg"
import li32 from "../img/li32.svg"
import li33 from "../img/li33.svg"
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
import underline from "../img/Vector 3.svg"
import comp1 from "../img/Component 23 (1).svg"
import comp2 from "../img/Component 24.svg"
import comp3 from "../img/Component 25.svg"
import comp4 from "../img/Component 26.svg"
import comp5 from "../img/Component 27.svg"
import comp6 from "../img/Component 28.svg"
import comp7 from "../img/Component 29.svg"
import comp8 from "../img/Component 30.svg"
import small_right from "../img/mingcute_arrows-right-line (1).svg"
import small_left from "../img/Group.svg"
const Third = () => {

    return (
        <div className='bg-custom-color-2  mt-7 mb-2'>

            {/* winning formula */}
            <div className='hidden md:flex text-center  font-sans justify-center text-5xl gap-4 my-12 '>
                <div>
                    <p>The </p>
                </div>

                <div className='gap-4 flex flex-col'>
                    <p className='text-custom-color-1'>Winning Formula</p>
                    <img src={underline} alt="" />
                </div>
                <div>
                    <p>Revealed</p>
                </div>

            </div>
            <div className='flex flex-col  text-center md:hidden md:flex-row font-sans justify-center md:text-5xl text-4xl my-12 '>
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
                        <p className='flex justify-center'><img src={quora} alt='quora ' className='absolute -top-7'></img></p>
                        <p> <strong><span className='underline-offset-1 underline'>Go</span> to Quora</strong>  and look for</p>
                        <p>what people are asking</p>
                    </div>
                    <img src={arrow} alt="arrow sign" className='hidden md:block w-24' ></img>
                    <div className='flex justify-center md:hidden items-center'>
                        <img src={arrow2} alt="arrow sign" className='relative right-2 h-10 w-10' />
                    </div>

                    <div className='border-2 w-72 h-36  border-custom-color-1 bg-custom-color text-black flex justify-center text-center m-9 rounded-md flex-col relative'>
                        <p className='flex justify-center ' ><img src={meta} alt='meta ' className='absolute -top-7 '></img></p>
                        <p> <strong> <span className='underline-offset-1 underline'>Go</span> to facebook ads library</strong></p>
                        <p>and then find out what</p>
                        <p>people are running ads on</p>
                    </div>
                    <img src={arrow} alt="arrow sign" className='hidden md:block w-24' ></img>
                    <div className='flex justify-center md:hidden items-center'>
                        <img src={arrow2} alt="arrow sign" className='relative right-2  h-10 w-10' />
                    </div>

                    <div className='border-2 w-72 h-36  border-custom-color-1 bg-custom-color text-black flex justify-center text-center m-9 rounded-md flex-col relative'>
                        <p className='flex justify-center'><img src={drive} alt='drive ' className='absolute -top-7 '></img></p>
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
                        <p className='flex justify-center'><img src={checkbook} alt='check ' className='absolute -top-7'></img></p>
                        <p>Then to find out<strong>what</strong> </p>
                        <p><storn>people are commenting</storn></p>
                        <p> <strong>on ads</strong>  one by one</p>
                    </div>
                    <img src={arrow} alt="arrow sign" className='hidden md:block w-24'></img>
                    <div className='flex justify-center md:hidden items-center'>
                        <img src={arrow2} alt="arrow sign" className='relative right-2 h-10 w-10' />
                    </div>

                    <div className='border-2 w-72 h-36  border-custom-color-1 bg-custom-color text-black flex justify-center text-center m-9 rounded-md flex-col relative'>
                        <p className='flex justify-center'><img src={trend} alt='trend' className='absolute -top-7'></img></p>
                        <p> <strong><span className='underline-offset-1 underline'>Go</span> to Google Trends</strong>  and</p>
                        <p>search for Increasing /</p>
                        <p>Decreasing Markets</p>
                    </div>
                    <img src={arrow} alt="arrow sign" className='hidden md:block w-24' ></img>
                    <div className='flex justify-center md:hidden items-center'>
                        <img src={arrow2} alt="arrow sign" className='relative right-2 h-10 w-10' />
                    </div>

                    <div className='border-2 w-72 h-36  border-custom-color-1 bg-custom-color text-black flex justify-center text-center m-9 rounded-md flex-col relative'>
                        <p className='flex justify-center'><img src={chat} alt='chat' className='absolute -top-7'></img></p>
                        <p>And then People can <strong>start</strong> </p>
                        <p><strong>guessing,</strong>  that this could</p>
                        <p> <strong className='underline underline-offset-1'>be the winning product</strong> </p>
                    </div>


                </div>
            </div>

            {/* however if .. */}
            <div className='font-serif mt-10'>
                <div className='text-2xl hidden md:flex justify-center flex-col items-center  mb-10'>
                    <p> <span className='text-custom-color-1'>However </span>if we go ahead and start doing this <span className='text-custom-color-1'>manually, it can take over</span> </p>
                    <p> <span className='text-custom-color-1'>48 hours of research</span>  and even then you would be making guess</p>
                </div>

                <div className='text-lg flex md:hidden justify-center flex-col items-center   mb-10'>
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
                <div className='text-5xl hidden md:flex justify-center flex-col items-center  font-bold font-sans'>
                    <p className='word-spacing'>But <span className='text-custom-color-1'>what if you had a solution,</span></p>
                    <p className='word-spacing'>through which you can:</p>
                </div>

                <div className='text-2xl font-sans  flex md:hidden justify-center flex-col items-center  font-bold  mb-10'>
                    <p >But <span className='text-custom-color-1'>what if you had a </span></p>
                    <p> <span className='text-custom-color-1'>solution,</span> through</p>
                    <p> which you can:</p>
                </div>
            </div>

            {/* six points  */}
            <div className='mt-20 font-serif hidden md:flex flex-col  justify-center'>

                <div className='flex justify-center items-center gap-10  mb-8 '>

                    <div>
                        <img src={li31} alt="img loading" />
                    </div>
                    <div>
                        <img src={li32} alt="img loading" />
                    </div>
                </div>

                <div className='flex justify-center items-center gap-10  mb-8'>
                    <div>
                        <img src={li33} alt="img loading" />
                    </div>
                    <div>
                        <img src={li34} alt="img loading" />
                    </div>
                </div>
                <div className='flex justify-center items-center gap-10 mb-8'>
                    <div>
                        <img src={li35} alt="img loading" />
                    </div>
                    <div>
                        <img src={li36} alt="img loading" />
                    </div>
                </div>
                <div className='flex justify-center items-center gap-10 mb-8'>
                    <div>
                        <img src={li37} alt="img loading" />
                    </div>
                    <div>
                        <img src={li38} alt="img loading" />
                    </div>
                </div>
            </div>
            <div className='mt-10 flex flex-col md:hidden flex-wrap justify-center'>
                <div className='flex flex-col justify-center items-center gap-8 mb-8'>

                    <div className='flex  items-center justify-center '>
                        <img src={comp1} alt="img loading" />
                    </div >
                    <div className='flex  items-center justify-center '>
                        <img src={comp2} alt="img loading" />
                    </div >
                </div>
                <div className='flex flex-col justify-center items-center gap-8 mb-8'>
                    <div className='flex  items-center justify-center '>
                        <img src={comp3} alt="img loading" />
                    </div >
                    <div className='flex  items-center justify-center '>
                        <img src={comp4} alt="img loading" />
                    </div >
                </div>
                <div className='flex flex-col justify-center items-center gap-8 mb-8'>
                    <div className='flex  items-center justify-center '>
                        <img src={comp5} alt="img loading" />
                    </div >
                    <div className='flex  items-center justify-center '>
                        <img src={comp6} alt="img loading" />
                    </div >
                </div>
                <div className='flex flex-col justify-center items-center gap-8 mb-8'>
                    <div className='flex  items-center justify-center '>
                        <img src={comp7} alt="img loading" />
                    </div >
                    <div className='flex  items-center justify-center '>
                        <img src={comp8} alt="img loading" />
                    </div >
                </div>
            </div>

            <div className="hidden md:flex md:flex-row justify-center mt-10 font-sans gap-5 mb-10">
                <div >
                    <img src={left_arrow} alt="left arrow" className='flex items-center justify-center relative top-3'></img>
                </div>
                <div className="bg-custom-color-1 m-1 text-2xl px-10 py-3 border-2 rounded-lg flex justify-center flex-col md:flex md:flex-col text-white  ">
                    <p className="mr-1 md:mr-1">Get instant Access to Sellerkin</p>

                    <p className=' text-base flex justify-center font-serif '>Soon, Prices are going to be increased</p>
                </div>
                <div>
                    <img src={right_arrow} alt="right arrow 2" className='flex items-center justify-center relative top-3'></img>
                </div>
            </div>
            <div className="flex flex-row  md:hidden justify-center mt-5 font-sans mb-10">
                <div>
                    <img src={small_right} alt="left arrow" className="md:hidden relative top-7"></img>
                </div>
                <div className="bg-custom-color-1 m-1 text-2xl px-12 py-3 border-2 rounded-lg flex justify-center items-center flex-col text-white font-bold font-sans">
                    <p className="mr-1 md:mr-1">Get Instant Access</p>
                    <p>To Sellerkin</p>

                </div>
                <div>
                    <img src={small_left} alt="right arrow 2" className="md:hidden relative top-7"></img>
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
