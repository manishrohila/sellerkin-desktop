import React from 'react'
import book from "../img/Component 8.svg"
import book1 from '../img/Component 34.svg'
import visa1 from "../img/toppng 4.svg"
import secure from "../img/lock1.svg";
import days from "../img/7days1.svg";
import small_right from "../img/mingcute_arrows-right-line (1).svg"
import small_left from "../img/Group.svg"
const Fourteen = () => {
    return (
        <div className='bg-custom-color-2 md:pt-20 pt-10'>
            <div className='md:grid  hidden grid-cols-2'>
                <div className='font-serif text-xl flex flex-col gap-7 ml-28'>
                    <div>
                        <p>After all, why wait another decade for results?</p>
                    </div>
                    <div>
                        <p>Seize the opportunity now with Sellerkin, and</p>
                        <p><strong>just a week from today,</strong> you'll witness the </p>
                        <p><strong>transformation </strong> you've been longing for.</p>
                    </div>
                    <div>
                        <p>Your dedication will shine as you uncover</p>
                        <p>beloved Etsy products, <strong>making informed</strong></p>
                        <p><strong>decisions </strong> that align with your passion</p>
                    </div>
                    <div>
                        <p>Your journey to success is </p>
                        <p>underway, and it all starts today.</p>
                    </div>
                    <div className="bg-custom-color-1  text-2xl p-2 border-2 rounded-lg   text-white w-9/12">
                        <p className="flex justify-center items-center">Get instant Access to Sellerkin</p>
                    </div>
                    <div className="md:flex  gap-4  ">
                        <div className="flex justify-center mb-5">
                            <img src={visa1} alt="payment" className="w-52 md:w-auto"></img>
                        </div>
                        <div className="flex justify-center mb-5 gap-3">
                            <img src={secure} alt="payment" className="relative mb-2"></img>
                            <img src={days} alt="payment" className="relative mb-2"></img>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={book} alt="img loading" />
                </div>
            </div>
            <div className='md:hidden  grid grid-cols-1'>
                <div className='font-sans text-xl flex flex-col gap-7 '>
                    <div>
                        <p className='flex justify-center'>After all, why wait another </p>
                        <p className='flex justify-center'> decade for results?</p>
                    </div>
                    <div>
                        <p className='flex justify-center'>Seize the opportunity now with </p>
                        <p className='flex justify-center'>Sellerkin,<strong> and just a week from today,</strong>  </p>

                        <p className='flex justify-center gap-2'> you'll witness the <strong>transformation </strong>  </p>
                        <p className='flex justify-center'>you've been longing for.</p>
                    </div>
                    <div className='flex justify-center'>
                        <img src={book1} alt="img loading" />
                    </div>
                    <div>
                        <p className='flex justify-center'>Your dedication will shine as you </p>
                        <p className='flex justify-center'>uncover beloved Etsy products, </p>
                        <p className='flex justify-center'><strong>making informed decisions </strong> that</p>
                        <p className='flex justify-center'> align with your passion</p>
                    </div>
                    <div>
                        <p className='flex justify-center'>Your journey to success is </p>
                        <p className='flex justify-center'>underway, and it all starts today.</p>
                    </div>
                    <div className="flex flex-row  md:hidden justify-center mt-5 font-sans ">
                        <div>
                            <img src={small_right} alt="left arrow" className="md:hidden relative top-7"></img>
                        </div>
                        <div className="bg-custom-color-1 m-1 text-xl px-10 py-3 border-2 rounded-lg flex justify-center items-center flex-col text-white font-bold font-sans">
                            <p className="mr-1 md:mr-1">Get Instant Access</p>
                            <p>to Sellerkin</p>

                        </div>
                        <div>
                            <img src={small_left} alt="right arrow 2" className="md:hidden relative top-7"></img>
                        </div>
                    </div>
                    <div className='font-serif'>
                        <p className=' text-base flex justify-center'>Soon, Prices are going </p>
                        <p className=' text-base flex justify-center'> to be increased</p>
                    </div>
                    <div className="md:flex  gap-4  ">
                        <div className="flex justify-center mb-5">
                            <img src={visa1} alt="payment" className="w-52 md:w-auto"></img>
                        </div>
                        <div className="flex justify-center mb-5 gap-3">
                            <img src={secure} alt="payment" className="relative mb-2"></img>
                            <img src={days} alt="payment" className="relative mb-2"></img>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Fourteen
