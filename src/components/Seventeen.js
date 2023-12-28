import React from 'react'
import plus from "../img/plus sign.svg"
import question from "../img/Group 184.svg"
import underline from "../img/Vector 40.svg"
const Seventeen = () => {
    return (
        <div className='bg-custom-color pt-10 '>
            <div className='font-sans text-5xl flex flex-col justify-center items-center gap-3'>
                <p> Frequently Asked <span className='text-custom-color-1'>Questions</span></p>
                <img src={underline} alt="img loading" className='w-6/12 ' />
            </div>
            <div>
                <img src={question} alt="" className='absolute left-20' />
            </div>
            <div>
                <img src={question} alt="" className='absolute right-20' />
            </div>
            <div className='flex flex-col mt-10 gap-3'>
                <div className='flex justify-between w-7/12 mx-auto p-4 items-center rounded-xl bg-custom-color-2 shadow-lg '>
                    <p className='ml-5'>What does this tool Do?</p>
                    <img src={plus} alt="img loading" />
                </div>
                <div className='flex justify-between w-7/12 mx-auto p-4 items-center  rounded-lg bg-custom-color-2 shadow-lg'>
                    <p className='ml-5'>Is it easy to use?</p>
                    <img src={plus} alt="img loading" />
                </div>
                <div className='flex justify-between rounded-xl w-7/12 mx-auto p-4 items-center bg-custom-color-2 shadow-lg '>
                    <p className='ml-5'>Do I need to have Technical Skills to use Sellerkin?</p>
                    <img src={plus} alt="img loading" />
                </div>
                <div className='flex justify-between rounded-xl w-7/12 mx-auto p-4 items-center bg-custom-color-2 shadow-lg'>
                    <p className='ml-5'>Will this tool save me time?</p>
                    <img src={plus} alt="img loading" />
                </div>
                <div className='flex justify-between rounded-xl w-7/12 mx-auto p-4 items-center bg-custom-color-2 shadow-lg'>
                    <p className='ml-5'>How does Pricing work?</p>
                    <img src={plus} alt="img loading" />
                </div>
                <div className='flex justify-between rounded-xl w-7/12 mx-auto p-4 items-center bg-custom-color-2 shadow-lg'>
                    <p className='ml-5'>Does it Comply with  Etsy's Policies?</p>
                    <img src={plus} alt="img loading" />
                </div>
                <div className='flex justify-between rounded-xl w-7/12 mx-auto p-4 items-center bg-custom-color-2 shadow-lg '>
                    <p className='ml-5'>If i am a new seller, will Sellerkin work for me?</p>
                    <img src={plus} alt="img loading" />
                </div>
                <div className='flex justify-between rounded-xl w-7/12 mx-auto p-4 items-center bg-custom-color-2 mb-10 shadow-lg'>
                    <p className='ml-5'>If i have questions, to whom I should contact?</p>
                    <img src={plus} alt="img loading" />
                </div>
            </div>
        </div>
    )
}

export default Seventeen
