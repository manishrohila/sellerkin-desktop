import React from 'react'
import first from "../img/Component 9.png"
import second from "../img/Component 10.svg"
import third from "../img/Component 11.svg"
import box from "../img/Component 12.svg"
import arrow from "../img/Vector 35 (1).svg"
import underline from "../img/Vector 40.svg"
import "./fifteen.css"
const Fifteen = () => {
    return (
        <div className='bg-custom-color pt-10'>
            <div className='text-5xl font-sans font-bold hidden md:flex justify-center gap-2'>
                <p><span className='text-custom-color-1'>Imagine </span></p>
                <div className='flex flex-col gap-2 justify-center'>
                    <p> where you would be in...</p>
                    <img src={underline} alt="img loading" className='w-10/12 hidden md:block' />
                </div>
            </div>
            <div className='text-3xl font-sans font-bold flex flex-col md:hidden justify-center '>
                <div className='flex gap-2 justify-center '>
                    <span className='text-custom-color-1'>Imagine </span>
                    <p> where you</p>

                </div>
                <div>
                    <p className='flex justify-center'>  would be in...</p>
                </div>
            </div>

            <div className=" md:flex hidden justify-center items-center  flex-wrap">
                <div className='flex flex-col gap-4 border-2 bg-custom-color-2 rounded-lg shadow-lg p-10'>

                    <div className='relative font-sans'>
                        <img src={box} alt="img loading" className='relative -left-16' />
                        <p className='absolute top-1 left-10 text-white text-lg'>1 Week from Now:</p>
                    </div>
                    <div className='-mt-6'>

                        <p>You've just started using Sellerkin. Already, you're</p>
                        <p>finding products that people love on etsy. You're not</p>
                        <p>guessing anymore; you're making <strong>smart choices.</strong></p>
                    </div>
                    <div>
                        <p>You feel a spark of excitement as you see your</p>
                        <p><strong className='underline'>first sale</strong> come in. The hard work put into</p>
                        <p>your products is finally <strong className='underline'>paying off!</strong></p>
                    </div>
                </div>
                <div className='self-end '>
                    <img src={arrow} alt="img loading" className='relative bottom-28' />
                </div>
                <div >
                    <img src={first} alt="img loading" />
                </div>
            </div>
            <div className="mt-10 md:flex hidden justify-center items-center flex-wrap">
                <div>
                    <img src={second} alt="img loading" />
                </div>
                <div className='self-end transform scale-x-[-1]'>
                    <img src={arrow} alt="" className='relative bottom-16' />
                </div>
                <div className='flex flex-col gap-4 border-2 bg-custom-color-2 rounded-lg shadow-lg p-10'>
                    <div className='relative font-sans'>
                        <img src={box} alt="img loading" className='relative -left-16' />
                        <p className='absolute top-1  text-white text-lg'>1 Month from Now:</p>
                    </div>

                    <div className='-mt-6'>
                        <p>Yore Etsy shop is growing. Yor're <strong>selling more and</strong></p>
                        <p><strong>more </strong> everyday. You're not staying up late, worrying</p>
                        <p>about what to sell next. <strong>Sellekin is like a friend that</strong></p>
                        <p><strong>helps you find the right products.</strong></p>
                    </div>
                    <div>
                        <p>Your family notices that you're <strong>happier</strong> and have</p>
                        <p>more time to spend with them. You feel proud of</p>
                        <p>what you've achieved</p>
                    </div>
                </div>


            </div>
            <div className="mt-10 md:flex hidden justify-center items-center  flex-wrap">
                <div className='flex flex-col gap-4 border-2 bg-custom-color-2 rounded-lg shadow-lg p-10'>
                    <div className='relative font-sans'>
                        <img src={box} alt="img loading" className='relative -left-16' />
                        <p className='absolute top-1 left-10 text-white text-lg'>6 Month from Now:</p>
                    </div>
                    <div className='-mt-6'>
                        <p>Wow! Your Etsy business is booming. You're not just</p>
                        <p>selling products; <strong>you're building a Brand.</strong> People</p>
                        <p>know your shop and love what you offer.</p>
                    </div>
                    <div>
                        <p>You've even started to hire help because the</p>
                        <p>business is doing so well. You look back and think</p>
                        <p>about how sellekin helped you get here. You feel</p>
                        <p>grateful and excited about the future.</p>
                    </div>
                </div>
                <div className='self-end'>
                    <img src={arrow} alt="" className='relative bottom-24' />
                </div>
                <div >
                    <img src={third} alt="img loading" />
                </div>
            </div>
        </div>
    )
}

export default Fifteen
