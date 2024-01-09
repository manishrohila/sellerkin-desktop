import React from 'react'
import logo from "../img/logo.svg";
import bgimage from "../img/Group 591 (1).svg"
import first from "../img/Group 592.svg"
import second from "../img/Group 593.svg"
import third from "../img/Group 594.svg"
import vector from "../img/Vector.svg"
import macbook from "../img/Group 229.svg"

import underline from "../img/Vector 31.svg"
import small_right from "../img/mingcute_arrows-right-line (1).svg"
import small_left from "../img/Group.svg"
import visa1 from "../img/toppng 4.svg"
import secure from "../img/lock1.svg";
import days from "../img/7days1.svg";
import mac_bg from "../img/Component 35.svg"
import './Fourth.css'

const Fourth = () => {
    return (
        <div className='bg-[#FEFAE7]   pb-10 '>
            <div className='hidden md:flex md:justify-center flex-row gap-2 pt-20 font-bold md:text-3xl font-sans xl:text-5xl xl:left-7 xl:relative' >
                <p className=' '>Introducing </p>
                <div className='flex flex-col relative md:bottom-2 xl:static gap-2 md:w-4/12' >
                    <div className='flex  gap-2'>
                        <img src={logo} alt="logo" className='' />
                        <p className='md:relative top-2 xl:static'> SellerKin</p>
                    </div>
                    <img src={underline} alt="" className='md:w-9/12 xl:w-8/12' />
                </div>


            </div>
            <div className='md:hidden flex flex-col pt-10 justify-center items-center font-bold font-sans'>
                <p className='text-3xl flex gap-3 text-custom-color-1'>Introducing </p>
                <p className='text-5xl flex gap-3 mt-5 mb-3'><span><img src={logo} alt="logo" /></span> SellerKin</p>
                <img src={underline} alt="" className='' />
            </div>

            <div className='hidden md:grid grid-cols-1 relative md:text-xs xl:text-lg font-serif '>
                <div className='relative xl:pl-32 md:pl-20 mt-24'>
                    <div className='mb-2  xl:mb-10 xl:max-w-[28rem] md:max-w-[19rem]'>
                        <p >Sellerkin is a tool for Etsy sellers to help them &nbsp;
                            <strong>find the winning products & increase revenue for &nbsp;</strong>
                            their Etsy shop in less than <strong>60 seconds &nbsp;</strong>
                            <strong>without trial & error</strong></p>
                    </div>
                    <div className='md:text-xs xl:text-lg md:mb-2 xl:mb-10 font-serif'>
                        <p>It works like a charm and can give you </p>
                        <p>the Winners faster than you can say Cheese.</p>

                    </div>
                    <div className=' mb-10 flex flex-col gap-3 font-serif md:text-xs xl:text-lg'>
                        <div className='flex xl:gap-3 md:gap-2 flex-row'>
                            <p><img className="xl:w-4 xl:h-4 md:h-3 md:w-3 relative  md:top-1 xl:top-1" src={vector} alt="dot"></img></p>
                            <p>Even if... You are New in the Game</p>
                        </div>
                        <div className='flex xl:gap-3 md:gap-2 flex-row'>
                            <p><img className="xl:w-4 xl:h-4 md:h-3 md:w-3 relative  md:top-1 xl:top-1" src={vector} alt="dot"></img></p>
                            <div className='flex flex-col'>
                                <p>Even if... You have never done any Business before</p>
                                <p></p>
                            </div>
                        </div >
                        <div className='flex xl:gap-3 md:gap-2 flex-row'>
                            <p><img className="xl:w-4 xl:h-4 md:h-3 md:w-3 relative  md:top-1 xl:top-1" src={vector} alt="dot"></img></p>
                            <p>Even if... You got stuck where to start</p>
                        </div>
                    </div>
                </div>





            </div>
            <div className='relative flex justify-end '>
                <img src={bgimage} alt="image  " className='absolute hidden md:block md:bottom-[-220px] md:w-[600px] xl:bottom-[-380px] xl:w-[1000px] ' />
            </div>
            <div className='md:hidden flex justify-center items-center flex-wrap mt-10  gap-4 text-lg mb-10 font-serif'>
                <div className='mb-7 border-top-2 border-custom-color-1 relative' >
                    <img src={mac_bg} alt="img loading" className='absolute left-2 bottom-2' />
                    <img src={macbook} alt='img loading' className='back'></img>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p>Sellerkin is a tool for Etsy sellers to </p>
                    <p>help them <strong>find the winning products & </strong> </p>
                    <p><strong> increase revenue </strong> for their Etsy</p>
                    <p>in less than <strong>60 seconds</strong></p>
                    <p><strong>without trial & error</strong></p>
                </div>

                <div className='flex flex-col justify-center items-center text-lg'>
                    <p>It works like a charm and can</p>
                    <p> give you the Winners faster </p>
                    <p>then you can say Cheese</p>
                </div>
                <div className='text-base mb-10 flex flex-col gap-2'>
                    <div className='flex gap-3 flex-row justify-start'>
                        <p><img className="w-4 h-4 relative top-1" src={vector} alt="dot"></img></p>
                        <div className='flex flex-col'>
                            <p>Even if... You are New in </p>
                            <p>the Game</p>
                        </div>
                    </div >
                    <div className='flex gap-3 flex-row'>
                        <p><img className="w-4 h-4 relative top-1" src={vector} alt="dot"></img></p>
                        <div className='flex flex-col'>
                            <p>Even if... You have never </p>
                            <p>done any Business before</p>
                        </div>
                    </div >
                    <div className='flex gap-3 flex-row'>
                        <p><img className="w-4 h-4 relative top-1" src={vector} alt="dot"></img></p>
                        <div className='flex flex-col'>
                            <p>Even if... You got stuck </p>
                            <p>where to start</p>
                        </div>
                    </div >
                </div>
            </div>



            {/* Three points */}

            <div className='md:flex hidden gap-7 flex-col md:flex-row justify-center pb-16 px-10 md:mt-56 xl:mt-72 '>


                <div className=' bg-custom-color-2  p-5 rounded-md shadow-custom h-1/2 '>
                    <div className='relative ml-3 top-2'>
                        <p><img src={first} alt=" img" className='xl:h-16 xl:w-16 md:h-10 md:w-10' /></p>
                    </div>
                    <div className='xl:text-base md:text-[10px] p-5 max-w-[18rem] '>

                        <p><strong className='underline'>Product Finder :</strong> Helps you to
                            <strong> &nbsp; find winning products,</strong> which </p>
                        <p>products are getting more
                            viewed and people's favorite</p>
                    </div>
                </div>

                <div className=' bg-custom-color-2  p-5 rounded-md shadow-custom h-3/5'>
                    <div className='relative ml-3 top-2'>
                        <p><img src={second} alt=" img" className='xl:h-16 xl:w-16 md:h-10 md:w-10' /></p>
                    </div>
                    <div className='xl:text-base md:text-[10px]  p-5 max-w-[18rem] '>


                        <p><strong className='underline'>Shop Analyzer :</strong> Helps you to
                            Analyze the <strong>competitor</strong>
                            <strong> &nbsp;stats-</strong>how much <strong>sales,</strong>
                            <strong> &nbsp; views, conversion rate </strong> they
                            are getting and may be
                            more .. Your Jaws will drop</p>
                    </div>
                </div>

                <div className=' bg-custom-color-2 p-5 rounded-md shadow-custom'>
                    <div className='relative ml-3 top-2'>
                        <p><img src={third} alt=" img" className='xl:h-16 xl:w-16 md:h-10 md:w-10' /></p>
                    </div>
                    <div className='xl:text-base md:text-[10px] max-w-[18rem] p-5 '>



                        <p> <strong className='underline'>Listing Analyzer:</strong> Helps you to
                            analyze <strong> competitor's listing &nbsp;</strong>
                            and You are able to sideline
                            Your Competitors even if you
                            are <strong>NEW</strong> in the Game by

                            being able to check how
                            much <strong>quantity is left</strong> and Your&nbsp;
                            <strong className='underline'> Listing </strong> &nbsp;will be able to <strong>Shine & &nbsp;</strong>
                            <strong>Rank</strong> in the <strong className='underline'>Marketplace</strong></p>
                    </div>
                </div>





            </div>
            <div className='flex md:hidden gap-7 flex-col justify-center pb-16 '>

                <div className=' bg-custom-color-2 border-2 border-custom-color-1 rounded-md shadow-custom h-1/2 w-5/6 mx-auto  flex flex-col'>
                    <div className='relative ml-3 top-2'>
                        <p><img src={first} alt=" img" className='h-16 w-16' /></p>
                    </div>
                    <div className='text-base flex flex-col  p-5 '>

                        <p><strong>Product Finder:</strong> Helps you to</p>
                        <p><strong>find winning products,</strong> which </p>
                        <p>products are getting more</p>
                        <p>viewed and people's favorite</p>
                    </div>
                </div>

                <div className=' bg-custom-color-2 border-2 border-custom-color-1 rounded-md shadow-custom h-3/5 w-5/6 mx-auto '>
                    <div className='relative ml-3 top-2'>
                        <p><img src={second} alt=" img" className='h-16 w-16' /></p>
                    </div>
                    <div className='text-base flex flex-col  p-5 '>


                        <p><strong>Shop Analyzer:</strong> Helps you to</p>
                        <p>Analyze the <strong>competitor</strong></p>
                        <p><strong>stats-</strong>how much <strong>sales</strong></p>
                        <p><strong>views, conversion rate </strong> they</p>
                        <p>are getting and may be</p>
                        <p>more .. Your Jaws will drop</p>
                    </div>
                </div>

                <div className=' bg-custom-color-2 border-2 border-custom-color-1 rounded-md shadow-custom w-5/6 mx-auto '>
                    <div className='relative ml-3 top-2'>
                        <p><img src={third} alt=" img" className='h-16 w-16' /></p>
                    </div>
                    <div className='text-base flex flex-col  p-5 '>



                        <p> <strong>Listing Analyzer:</strong> Helps you to</p>
                        <p>analyze <strong> competitor's listing</strong></p>
                        <p>and You are able to sideline</p>
                        <p>Your Competitors even if you</p>
                        <p>are <strong>NEW</strong> in the Game by</p>

                        <p>being able to check how</p>
                        <p>more <strong>quantity is left</strong> and Your </p>
                        <p><strong>Listing</strong>will be able to <strong>Shine &</strong> </p>
                        <p><strong>Rank</strong> in the <strong>Marketplace</strong></p>
                    </div>
                </div>





            </div>
            <div className="flex flex-row  md:hidden justify-center mt-5 font-sans mb-10">
                <div>
                    <img src={small_right} alt="left arrow" className="md:hidden relative top-7"></img>
                </div>
                <div className="bg-custom-color-1 m-1 text-2xl font-bold px-12 md:px-5 py-3 border-2 rounded-lg flex justify-center flex-col md:flex md:flex-row text-white">
                    <p className="flex justify-center">Scale Your Etsy</p>
                    <p className='flex justify-center'>Business Today</p>
                </div>
                <div>
                    <img src={small_left} alt="right arrow 2" className="md:hidden relative top-7"></img>
                </div>
            </div>
            <div className="md:hidden flex flex-col justify-center gap-4 ">
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

export default Fourth
