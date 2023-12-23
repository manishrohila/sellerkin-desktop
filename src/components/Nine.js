import React from 'react'
import third from "../img/Group 434.svg"
import frist from "../img/Mockup (3) 1.svg"
import second from "../img/Mockup (4) 1.svg"
import underline from "../img/Vector 37.svg"
import bonus1 from "../img/Group 439.svg"
import bonus2 from "../img/Group 440.svg"
import bonus3 from "../img/Group 441.svg"
import trangle from "../img/Vector 42.svg"
import trangle1 from "../img/Vector 41.svg"
const Nine = () => {
    return (
        <div className='bg-custom-color p-10 mt-10'>
            <div className='flex flex-col text-5xl justify-center items-center'>
                <div>
                    <p>Not just that, If you decide to take action today you</p>
                </div>

                <div className='flex gap-2 justify-center items-center'>
                    <p className='ml-36'>Will be rewarded with </p>
                    <div className='flex flex-col text-custom-color-1 '>
                        <p>Fast Action Bonues:</p>
                        <img src={underline} alt="image" className='w-4/5' />
                    </div>
                </div>


            </div>

            <div className='flex shadow-xl justify-center items-center mt-16 bg-custom-color-2 w-4/5 mx-auto'>
                <div className=''>
                    <div>
                        <img src={bonus1} alt="image" className='relative  right-28' />
                    </div>
                    <div>
                        <img src={trangle} alt="image" className='relative  right-28' />
                    </div>
                    <div>
                        <p className='font-bold'>(Value $X)</p>
                    </div>
                    <div>
                        <p>
                            A detailed guide on how to optimize Etsy
                        </p>
                        <p>listings for better visibility and conversion.</p>
                        <p>This can include tips on writing compelling</p>
                        <p>Descriptions, choosing the right keywords,</p>
                        <p>and using high-quality  images.</p>
                    </div>
                </div>
                <div className='relative bottom-10'>
                    <img src={frist} alt="image loading" className='' />
                </div>
            </div>
            <div className='flex shadow-xl justify-center items-center mt-24 bg-custom-color-2 w-4/5 mx-auto gap-10'>
                <div className='relative bottom-10'>
                    <img src={frist} alt="image loading" className='' />
                </div>
                <div className='relative left-28'>

                    <div>
                        <img src={bonus2} alt="image" className=' relative right-1 ' />
                    </div>
                    <div className='flex justify-end relative bottom-4 right-3'>
                        <img src={trangle1} alt="image" className='' />
                    </div>
                    <div className="">
                        <p className='font-bold'>(Value $X)</p>
                    </div>
                    <div >
                        <p>
                            A comprehensive ebook filled with tips,
                        </p>
                        <p>tricks, and stategies for succeeding on</p>
                        <p>Etsy. It could cover everything from</p>
                        <p>setting up a shop to marketing and </p>
                        <p>customer service.</p>
                    </div>
                </div>

            </div>
            <div className='flex shadow-xl justify-center items-center mt-16 bg-custom-color-2 w-4/5 mx-auto p-10'>
                <div className=''>
                    <div>
                        <img src={bonus3} alt="image" className='relative  right-14' />
                    </div>
                    <div>
                        <img src={trangle} alt="image" className='relative  right-14' />
                    </div>
                    <div>
                        <p className='font-bold'>(Value $X)</p>
                    </div>
                    <div>
                        <p>
                            An invitation to a private Facebook
                        </p>
                        <p>group or forum where users can</p>
                        <p>network with other Sellerkin</p>
                        <p>customers, share experiences, ask</p>
                        <p>questions, and get support.</p>
                    </div>
                </div>
                <div className=''>
                    <img src={third} alt="image loading" className='' />
                </div>
            </div>
        </div>
    )
}

export default Nine
