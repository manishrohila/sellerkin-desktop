import React from 'react'
import logo from "../img/Mask group.png";
import bgimage from "../img/Group 226.svg"
import first from "../img/Group 592.svg"
import second from "../img/Group 593.svg"
import third from "../img/Group 594.svg"
import vector from "../img/Vector.svg"
import macbook from "../img/Group 229.svg"

const Fourth = () => {
    return (
        <div className='bg-[#FEFAE7] mt-20 relative  '>
            <div className='hidden md:block md:justify-center flex-row mb-10 '>
                <p className='text-5xl flex items-center justify-center gap-3'>Introducing <span><img src={logo} alt="logo" /></span> SellerKin</p>
            </div>
            <div className='md:hidden flex flex-col justify-center items-center'>
                <p className='text-2xl flex gap-3 text-custom-color-1'>Introducing </p>
                <p className='text-5xl flex gap-3'><span><img src={logo} alt="logo" /></span> SellerKin</p>
            </div>

            <div className='hidden md:flex'>
                <div className='relative ml-20 mt-24'>
                    <div className='text-base mb-10'>
                        <p>Sellerkin is a tool for Etsy sellers to help them</p>
                        <p><strong>find the winning products & increase revenue for</strong></p>
                        <p>their Etsy shop in less than <strong>60 seconds</strong></p>
                        <p><strong>without trial & error</strong></p>
                    </div>
                    <div className='text-base mb-10'>
                        <p>It works like a charm and can give you </p>
                        <p>the Winners faster than you can say Cheese.</p>

                    </div>
                    <div className='text-base mb-10 flex flex-col gap-2'>
                        <div className='flex gap-3'>
                            <p><img className="w-4 h-4 relative top-1" src={vector} alt="dot"></img></p>
                            <p>Even if... You are New in the Game</p>
                        </div>
                        <div className='flex gap-3 flex-row'>
                            <p><img className="w-4 h-4 relative top-1" src={vector} alt="dot"></img></p>
                            <div className='flex flex-col'>
                                <p>Even if... You have never done any </p>
                                <p>Business before</p>
                            </div>
                        </div >
                        <div className='flex gap-3'>
                            <p><img className="w-4 h-4 relative top-1" src={vector} alt="dot"></img></p>
                            <p>Even if... You got stuck where to start</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={bgimage} alt="image w-11/12 " className='' />
                </div>
            </div>
            <div className='md:hidden flex justify-center items-center flex-wrap mt-10  gap-4 text-base mb-10'>
                <div className='mb-7'>
                    <img src={macbook} alt='image'></img>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p>Sellerkin is a tool for Etsy sellers to </p>
                    <p>help them <strong>find the winning products & </strong> </p>
                    <p><strong> increase revenue </strong> for their Etsy</p>
                    <p>in less than <strong>60 seconds</strong></p>
                    <p><strong>without trial & error</strong></p>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <p>It works like a charm and can</p>
                    <p> give you the Winners faster </p>
                    <p>then you can say Cheese</p>
                </div>
                <div className='text-base mb-10 flex flex-col gap-2'>
                    <div className='flex gap-3 flex-row'>
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




            <div className='flex gap-7 flex-col md:flex-row justify-center items-center'>

                <div className=' bg-custom-color-2 border-2 border-custom-color-1 rounded-md shadow-custom'>
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

                <div className=' bg-custom-color-2 border-2 border-custom-color-1 rounded-md shadow-custom'>
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

                <div className=' bg-custom-color-2 border-2 border-custom-color-1 rounded-md shadow-custom'>
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



        </div>


    )
}

export default Fourth