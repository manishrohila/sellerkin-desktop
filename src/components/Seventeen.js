import React from 'react'
import plus from "../img/plus sign.svg"
import question from "../img/Group 184.svg"
import underline from "../img/Vector 40.svg"
import { useState } from 'react'
const Seventeen = () => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [showAnswer1, setShowAnswer1] = useState(false);
    const [showAnswer2, setShowAnswer2] = useState(false);
    const [showAnswer3, setShowAnswer3] = useState(false);
    const [showAnswer4, setShowAnswer4] = useState(false);
    const [showAnswer5, setShowAnswer5] = useState(false);
    const [showAnswer6, setShowAnswer6] = useState(false);
    const [showAnswer7, setShowAnswer7] = useState(false);


    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };
    const toggleAnswer1 = () => {
        setShowAnswer1(!showAnswer1);
    };
    const toggleAnswer2 = () => {
        setShowAnswer2(!showAnswer2);
    };
    const toggleAnswer3 = () => {
        setShowAnswer3(!showAnswer3);
    };
    const toggleAnswer4 = () => {
        setShowAnswer4(!showAnswer4);
    };
    const toggleAnswer5 = () => {
        setShowAnswer5(!showAnswer5);
    };
    const toggleAnswer6 = () => {
        setShowAnswer6(!showAnswer6);
    };
    const toggleAnswer7 = () => {
        setShowAnswer7(!showAnswer7);
    };

    return (
        <div className='bg-custom-color pt-10 '>
            <div className='font-sans font-bold xl:text-5xl md:text-2xl hidden md:flex flex-col justify-center items-center gap-3'>
                <p> Frequently Asked <span className='text-custom-color-1'>Questions</span></p>
                <img src={underline} alt="img loading" className='xl:w-6/12 md:w-5/12 ' />
            </div>
            <div className='font-sans font-bold text-3xl flex md:hidden flex-col justify-center items-center gap-3'>
                <p> Frequently Asked </p>
                <p> <span className='text-custom-color-1'>Questions</span></p>

            </div>
            <div className='hidden md:block'>
                <img src={question} alt="" className='absolute left-20 md:w-[90px] ' />
            </div>
            <div className='hidden md:block'>
                <img src={question} alt="" className='absolute right-20 md:w-[90px]' />
            </div>
            <div className='flex flex-col mt-10 gap-3 pb-16 font-serif'>
                <div className='flex flex-col  w-10/12 md:w-7/12 mx-auto p-4  rounded-xl bg-custom-color-2 shadow-lg '>
                    <div className='flex justify-between   items-center '>
                        <p className='ml-5'>What does this tool Do?</p>
                        <button onClick={toggleAnswer}>
                            <img src={plus} alt="img loading" />
                        </button>
                    </div>

                    {showAnswer && (<div className='ml-5 pt-2'>
                        The tool acts as a "Golden Ticket" for both E-commerce businesses and Digital Product Owners who are selling on the Etsy Marketplace. It helps you to find winning products and to increase revenue for their etsy shop.
                    </div>)}

                </div>



                <div className='flex flex-col  w-10/12 md:w-7/12 mx-auto p-4  rounded-xl bg-custom-color-2 shadow-lg '>
                    <div className='flex justify-between   items-center '>
                        <p className='ml-5'>Is it easy to use?</p>
                        <button onClick={toggleAnswer1}>
                            <img src={plus} alt="img loading" />
                        </button>
                    </div>

                    {showAnswer1 && (<div className='ml-5 pt-2'>
                        Yes, it’s user friendly and easy to navigate.
                    </div>)}

                </div>

                <div className='flex flex-col  w-10/12 md:w-7/12 mx-auto p-4  rounded-xl bg-custom-color-2 shadow-lg '>
                    <div className='flex justify-between   items-center '>
                        <p className='ml-5'>Do I need to have Technical Skills to use Sellerkin?</p>
                        <button onClick={toggleAnswer2}>
                            <img src={plus} alt="img loading" />
                        </button>
                    </div>

                    {showAnswer2 && (<div className='ml-5 pt-2'>
                        No, You don’t need to have technical skills to use Sellerkin
                    </div>)}

                </div>
                
                <div className='flex flex-col  w-10/12 md:w-7/12 mx-auto p-4  rounded-xl bg-custom-color-2 shadow-lg '>
                    <div className='flex justify-between   items-center '>
                        <p className='ml-5'>Will this tool save me time?</p>
                        <button onClick={toggleAnswer3}>
                            <img src={plus} alt="img loading" />
                        </button>
                    </div>

                    {showAnswer3 && (<div className='ml-5 pt-2'>
                    Yes, the tool helps you "Skyrocket your Etsy Business" by finding winning products on Etsy and copying their success. This implies that the tool can save you time by providing insights into successful products.
                    </div>)}

                </div>
                
                <div className='flex flex-col  w-10/12 md:w-7/12 mx-auto p-4  rounded-xl bg-custom-color-2 shadow-lg '>
                    <div className='flex justify-between   items-center '>
                        <p className='ml-5'>How does Pricing work?</p>
                        <button onClick={toggleAnswer5}>
                            <img src={plus} alt="img loading" />
                        </button>
                    </div>

                    {showAnswer5 && (<div className='ml-5 pt-2'>
                    Please check the Pricing Table as mentioned above for all the features - Product Finder, Shop Analyzer, and Listing Analyzer with all the updates and upgrades on these features for lifetime access.  
                    </div>)}

                </div>
                
                <div className='flex flex-col  w-10/12 md:w-7/12 mx-auto p-4  rounded-xl bg-custom-color-2 shadow-lg '>
                    <div className='flex justify-between   items-center '>
                        <p className='ml-5'>Does it Comply with  Etsy's Policies?</p>
                        <button onClick={toggleAnswer6}>
                            <img src={plus} alt="img loading" />
                        </button>
                    </div>

                    {showAnswer6 && (<div className='ml-5 pt-2'>
                    Yes, absolutely it complies with the Etsy policies. 


                    </div>)}

                </div>
                
                <div className='flex flex-col  w-10/12 md:w-7/12 mx-auto p-4  rounded-xl bg-custom-color-2 shadow-lg '>
                    <div className='flex justify-between   items-center '>
                        <p className='ml-5'>If i am a new seller, will Sellerkin work for me?</p>
                        <button onClick={toggleAnswer7}>
                            <img src={plus} alt="img loading" />
                        </button>
                    </div>

                    {showAnswer7 && (<div className='ml-5 pt-2'>
                    Yes, Sellerkin works for both new and experienced sellers.


                    </div>)}

                </div>
                <div className='flex flex-col  w-10/12 md:w-7/12 mx-auto p-4  rounded-xl bg-custom-color-2 shadow-lg '>
                    <div className='flex justify-between   items-center '>
                        <p className='ml-5'>If I have questions, to whom I should contact ?</p>
                        <button onClick={toggleAnswer4}>
                            <img src={plus} alt="img loading" />
                        </button>
                    </div>

                    {showAnswer4 && (<div className='ml-5 pt-2'>
                    If you have any query, please send us an email at sellerkin@gmail.com


                    </div>)}

                </div>
                
            </div>
        </div>
    )
}

export default Seventeen
