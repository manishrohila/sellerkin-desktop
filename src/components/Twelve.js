import React from 'react'
import girl from "../img/Group 255.svg"
import winner from "../img/noto-v1_thumbs-up-light-skin-tone.svg"
import loser from "../img/noto-v1_thumbs-up-light-skin-tone (1).svg"
import line from "../img/money back.svg"
const Twelve = () => {
    return (
        <div className='bg-custom-color-2 pt-10 mb-10'>
            <div className='hidden xl:text-5xl md:text-2xl font-extrabold font-sans md:flex flex-col justify-center items-center'>
                <p>This simply Means you will be able to</p>
                <div className='flex gap-2'>
                    <div className='flex justify-center md:relative md:left-24 xl:static'>
                        <p>attract</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <p><span className='text-custom-color-1'>More Customers = More Money.</span></p>
                        <img src={line} alt="" className='md:w-8/12 xl:w-full' />
                    </div>
                </div>

            </div>
            <div className='flex text-3xl font-sans md:hidden flex-col justify-center items-center font-extrabold '>
                <p>This simply </p>
                <p>Means you will </p>
                <p>be able to attract</p>
                <p><span className='text-custom-color-1'>More Customers</span></p>
                <p><span className='text-custom-color-1'>= More Money.</span></p>


            </div>


            <div className='md:hidden grid grid-cols-1 mt-10 font-serif text-base'>
                <div>
                    <img src={girl} alt="girl img loading " className='w-10/12 mx-auto'/>
                </div>
                <div className='flex flex-col gap-4 place-items-center mt-5 text-lg'>
                    <div>
                        <p className='flex justify-center'>The Game is for  &nbsp;<span className='italic'>SMART </span> </p>
                        <p className='flex justify-center'><span className='italic'>Entrepreneurs </span> &nbsp; MEANS FOR </p>
                        <p className='flex justify-center'>WINNERS NOT FOR LOSERS  </p>
          
                    </div>
                    <div>
                        <p className='flex justify-center'>Now you decide in which category </p>
                        <p className='flex justify-center'>you like to fall in?</p>
                    </div>
                    <div className='flex gap-3 font-bold'>
                        <img src={winner} alt="thumbsup" />
                        <p>WINNERS</p>
                        <p>OR</p>
                        <img src={loser} alt="thumbsup" />
                        <p>LOSERS</p>
                    </div>
                    <div>
                        <p className='flex justify-center'>Isn't it Cool enough? </p>
                    </div>
                    <div>
                        <p className='flex justify-center'>Before Launching Anything, you </p> 
                        <p className='flex justify-center'>Can come to know about ALL</p>
                        <p className='flex justify-center italic'>Competitor's Insights like Quantity</p>
                        <p className='flex justify-center italic'> Left, Customers love for which </p>
                        <p className='flex justify-center italic'>products and more eyeballs on...</p>
                    </div>
                    <div >
                        <p className='flex justify-center'>You absolutely can't miss this...</p>
                    </div>
                    <div>
                        <p className='flex justify-center'>what else... Do you need?</p>
                    </div>
                </div>

                
            </div>
            <div className='md:grid hidden grid-cols-2 mt-10 font-serif md:mx-20 xl:mx-0'>
                <div className='flex flex-col gap-4 justify-evenly xl:ml-52  xl:text-base md:text-xs md:max-w-[18rem] xl:max-w-[25rem]'>
                    <div>
                        <p>The Game is for SMART Entrepreneurs MEANS 
                      FOR WINNERS NOT FOR LOSERS Now you
                        decide in which category you like to fall in?</p>
                    </div>
                    <div>
                        <p>Now you decide in which category </p>
                        <p>you like to fall in?</p>
                    </div>
                    <div className='flex gap-3 font-bold'>
                        <img src={winner} alt="thumbsup" />
                        <p>WINNERS</p>
                        <p>OR</p>
                        <img src={loser} alt="thumbsup" />
                        <p>LOSERS</p>
                    </div>
                    <div>
                        <p>Isn't it Cool enough? </p>
                    </div>
                    <div>
                        <p>Before Launching Anything, you Can</p>
                        <p>come to know about ALL Competitor's</p>
                        <p>Insights like Quantity Left, Customers love</p>
                        <p>for which products and more eyeballs on...</p>
                    </div>
                    <div>
                        <p>You absolutely can't miss this...</p>
                    </div>
                    <div>
                        <p>what else... Do you need?</p>
                    </div>
                </div>
                <div>
                    <img src={girl} alt="girl img loading" />
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Twelve
