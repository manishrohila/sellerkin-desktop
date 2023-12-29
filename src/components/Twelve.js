import React from 'react'
import girl from "../img/Group 255.svg"
import winner from "../img/noto-v1_thumbs-up-light-skin-tone.svg"
import loser from "../img/noto-v1_thumbs-up-light-skin-tone (1).svg"
import line from "../img/money back.svg"
const Twelve = () => {
    return (
        <div className='bg-custom-color-2 pt-10 mb-10'>
            <div className='hidden text-5xl font-sans md:flex flex-col justify-center items-center'>
                <p>This simply Means you will be able to</p>
                <div className='flex gap-2'>
                    <div>
                        <p>attract</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p><span className='text-custom-color-1'>More Customers = More Money.</span></p>
                        <img src={line} alt="" />
                    </div>
                </div>

            </div>
            <div className='flex text-5xl font-sans md:hidden flex-col justify-center items-center'>
                <p>This simply </p>
                <p>Means you will </p>
                <p>be able to attract</p>
                <p><span className='text-custom-color-1'>More Customers</span></p>
                <p><span className='text-custom-color-1'>= More Money.</span></p>


            </div>


            <div className='md:hidden grid grid-cols-1 mt-10'>
                <div>
                    <img src={girl} alt="girl img loading" />
                </div>
                <div className='flex flex-col gap-4 place-items-center '>
                    <div>
                        <p className='flex justify-center'>The Game is for SMART </p>
                        <p className='flex justify-center'> Entrepreneurs MEANS FOR </p>
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
                        <p className='flex justify-center'>Competitor's Insights like Quantity</p>
                        <p className='flex justify-center'> Left, Customers love for which </p>
                        <p className='flex justify-center'>products and more eyeballs on...</p>
                    </div>
                    <div >
                        <p className='flex justify-center'>You absolutely can't miss this...</p>
                    </div>
                    <div>
                        <p className='flex justify-center'>what else... Do you need?</p>
                    </div>
                </div>

                
            </div>
            <div className='md:grid hidden grid-cols-2 mt-10'>
                <div className='flex flex-col gap-4 justify-evenly ml-52'>
                    <div>
                        <p>The Game is for SMART Entrepreneurs MEANS </p>
                        <p>FOR WINNERS NOT FOR LOSERS Now you </p>
                        <p>decide in which category you like to fall in?</p>
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
