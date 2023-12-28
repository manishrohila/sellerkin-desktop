import React from 'react'
import book from "../img/Component 8.svg"
import visa1 from "../img/toppng 4.svg"
import secure from "../img/lock1.svg";
import days from "../img/7days1.svg";

const Fourteen = () => {
    return (
        <div className='bg-custom-color-2 pt-20'>
            <div className='grid grid-cols-2'>
                <div className='font-sans text-2xl flex flex-col gap-7 ml-32'>
                    <div>
                        <p>After all, why wait another decade for results?</p>
                    </div>
                    <div>
                        <p>Seize the opportunity now with Sellerkin, and</p>
                        <p><strong>just a week from today,</strong> you'll witness the </p>
                        <p><strong>transformation </strong> you've been ongoing for.</p>
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
                    <div className="bg-custom-color-1 m-1 text-2xl px-5 py-3 border-2 rounded-lg  md:flex md:flex-col text-white w-9/12">
                        <p className="mr-1 md:mr-1">Get instant Access to Sellerkin</p>


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
        </div>
    )
}

export default Fourteen
