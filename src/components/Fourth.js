import React from 'react'
import logo from "../img/Mask group.png";
import bgimage from "../img/Group 226.svg"

const Fourth = () => {
    return (
        <div className='bg-[#FEFAE7] mt-20 relative  '>
            <div className='hidden md:block md:justify-center flex-row mb-10'>
                <p className='text-5xl flex items-center justify-center gap-3'>Introducing <span><img src={logo} alt="logo" /></span> SellerKin</p>
            </div>
            <div className='md:hidden flex flex-col justify-center items-center'>
                <p className='text-2xl flex gap-3 text-custom-color-1'>Introducing </p>
                <p className='text-5xl flex gap-3'><span><img src={logo} alt="logo" /></span> SellerKin</p>
            </div>
            <div className='relative ml-20'>
                <div className='text-base mb-10'>
                    <p>Sellerkin is a tool for Etsy sellers to help them</p>
                    <p><strong>find the winning products & increase revenue for</strong></p>
                    <p>their Etsy shop in less than <strong>60 seconds</strong></p>
                    <p><strong>without trial & error</strong></p>
                </div>
                <div className='text-base mb-10'>
                    <p>It works like a charm and can give you </p>
                    <p>the Winners faster than you can say</p>
                    <p>cheese.</p>
                </div>
                <div className='text-base mb-10'>
                    <p>Even if... You are New in the Game</p>
                    <p>Even if... You have never done any Business before</p>
                    <p>Even if... You got stuck where to start</p>
                </div>
            </div>
            <div className='relative '>
                <div className='absolute  right-0 -top-[30.75rem]  '>
                    <img src={bgimage} alt="image" />
                </div>
            </div>

            {/* <div className='flex gap-7'>
                <div className='bg-gray'>
                    <div className='border-2 text-base flex flex-col justify-center items-center'>
                        <p><strong>Product Finder:</strong> Helps you to</p>
                        <p><strong>find winning products,</strong> which </p>
                        <p>products are getting more</p>
                        <p>viewed and people's favorite</p>
                    </div>
                </div>
                <div className='bg-[#FEFAE7]'>
                    <div className='border-2 text-base flex flex-col justify-center items-center'>
                        <p><strong>Shop Analyzer:</strong> Helps you to</p>
                        <p>Analyze the <strong>competitor</strong></p>
                        <p><strong>stats-</strong>how much <strong>sales</strong></p>
                        <p><strong>views, conversion rate </strong> they</p>
                        <p>are getting and may be</p>
                        <p>more .. Your Jaws will drop</p>
                    </div>
                </div>

                <div>
                    <div div className='border-2 text-base flex flex-col justify-center items-center'>
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

            </div> */}



        </div>


    )
}

export default Fourth
