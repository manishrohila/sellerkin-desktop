import React from 'react'
import first from "../img/Component 9.png"
import second from "../img/Component 10.svg"
import third from "../img/Component 11.svg"
import box from "../img/Component 12.svg"
import arrow from "../img/Vector 35 (1).svg"
import underline from "../img/Vector 40.svg"
import arrow2 from "../img/Vector 51.svg"
import "./fifteen.css"
const Fifteen = () => {
    return (
        <div className='bg-custom-color pt-10 pb-10'>
            <div className='lg:text-5xl md:text-2xl font-sans font-bold hidden md:flex justify-center gap-2 md:relative md:left-28 lg:static'>
                <p><span className='text-custom-color-1'>Imagine </span></p>
                <div className='flex flex-col gap-2 justify-center'>
                    <p> where you would be in...</p>
                    <img src={underline} alt="img loading" className='lg:w-10/12 md:w-6/12' />
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

            <div className=" md:flex hidden justify-center items-center  ">
                <div className='flex flex-col gap-4 border-2 bg-custom-color-2 rounded-lg shadow-lg p-10'>

                    <div className='relative font-sans'>
                        <img src={box} alt="img loading" className='relative -left-16' />
                        <p className='absolute font-semibold top-1 lg:left-10 text-white text-lg'>1 Week from Now:</p>
                    </div>
                    <div className='-mt-6 md:text-[10px] lg:text-base'>

                        <p>You've just started using Sellerkin. Already, you're</p>
                        <p>finding products that people love on etsy. You're not</p>
                        <p>guessing anymore; you're making <strong>smart choices.</strong></p>
                    </div>
                    <div className='md:text-[10px] lg:text-base '>
                        <p>You feel a spark of excitement as you see your</p>
                        <p><strong className='underline'>first sale</strong> come in. The hard work put into</p>
                        <p>your products is finally <strong className='underline'>paying off!</strong></p>
                    </div>
                </div>
                <div className='self-end '>
                    <img src={arrow} alt="img loading" className='relative  lg:bottom-28 md:w-16 md:bottom-10 lg:w-20' />
                </div>
                <div >
                    <img src={first} alt="img loading" className='w-72 lg:w-[490px] lg:h-[529px]' />
                </div>
            </div>
            <div className="mt-10 md:flex hidden justify-center items-center ">
                <div>
                    <img src={second} alt="img loading" className='w-72 lg:w-[490px]' />
                </div>
                <div className='self-end transform scale-x-[-1]'>
                    <img src={arrow} alt="" className='relative bottom-16 md:w-16 lg:w-20' />
                </div>
                <div className='flex flex-col gap-4 border-2 bg-custom-color-2 rounded-lg shadow-lg p-10'>
                    <div className='relative font-sans'>
                        <img src={box} alt="img loading" className='relative -left-16' />
                        <p className='absolute font-semibold top-1  text-white text-lg'>1 Month from Now:</p>
                    </div>

                    <div className='-mt-6 md:text-[10px] lg:text-base'>
                        <p>Yore Etsy shop is growing. Yor're <strong>selling more and</strong></p>
                        <p><strong>more </strong> everyday. You're not staying up late, worrying</p>
                        <p>about what to sell next. <strong>Sellekin is like a friend that</strong></p>
                        <p><strong>helps you find the right products.</strong></p>
                    </div>
                    <div className='md:text-[10px] lg:text-base'>
                        <p>Your family notices that you're <strong>happier</strong> and have</p>
                        <p>more time to spend with them. You feel proud of</p>
                        <p>what you've achieved</p>
                    </div>
                </div>


            </div>
            <div className="mt-10 md:flex hidden justify-center items-center ">
                <div className='flex flex-col gap-4 border-2 bg-custom-color-2 rounded-lg shadow-lg p-10'>
                    <div className='relative font-sans'>
                        <img src={box} alt="img loading" className='relative -left-16' />
                        <p className='absolute font-semibold top-1 lg:left-10 text-white text-lg'>6 Month from Now:</p>
                    </div>
                    <div className='-mt-6 md:text-[10px] lg:text-base'>
                        <p>Wow! Your Etsy business is booming. You're not just</p>
                        <p>selling products; <strong>you're building a Brand.</strong> People</p>
                        <p>know your shop and love what you offer.</p>
                    </div>
                    <div className='md:text-[10px] lg:text-base'>
                        <p>You've even started to hire help because the</p>
                        <p>business is doing so well. You look back and think</p>
                        <p>about how sellekin helped you get here. You feel</p>
                        <p>grateful and excited about the future.</p>
                    </div>
                </div>
                <div className='self-end'>
                    <img src={arrow} alt="" className='relative  lg:bottom-24 md:w-16  lg:w-20 md:bottom-10' />
                </div>
                <div >
                    <img src={third} alt="img loading" className='w-72 lg:w-[491px]' />
                </div>
            </div>


            {/* Mobile Version */}

            <div className='flex flex-col md:hidden gap-2 border-2 bg-custom-color-2 rounded-lg shadow-lg w-9/12 mx-auto mt-10 pb-9 font-serif'>
                <div className='relative font-sans top-9'>
                    <img src={box} alt="img loading" className='relative right-6 ' />
                    <p className='absolute top-1 left-10 text-white text-lg'>1 Week from Now:</p>
                </div>
                <div >
                    <img src={first} alt="img loading" className='w-52 h-52 mx-auto' />
                </div>
                <div className='relative'>
                    <img src={arrow2} alt=""className='absolute bottom-3 left-16'/>
                </div>

                <div className='mt-4'>

                    <p className='flex justify-center'>You've just started using </p>
                    <p className='flex justify-center'> Sellerkin. Already, you're</p>
                    <p className='flex justify-center'>finding products that people </p>
                    <p className='flex justify-center'>love on etsy. You're not</p>
                    <p className='flex justify-center'>guessing anymore; you're </p>
                    <p className='flex justify-center'> making &nbsp; <strong>smart choices.</strong></p>
                </div>
                <div>
                    <p className='flex justify-center'>You feel a spark of excitement </p>
                    <p className='flex justify-center'>as you see your &nbsp;<strong className='underline'>first sale</strong></p>
                    <p className='flex justify-center'> come in. The hard work you </p>
                    <p className='flex justify-center'> put into your products is</p>
                    <p className='flex justify-center'> finally &nbsp;  <strong className='underline'>paying off!</strong></p>
                </div>
            </div>

            <div className='flex flex-col md:hidden gap-2 border-2 bg-custom-color-2 rounded-lg shadow-lg w-9/12 mx-auto mt-10 pb-9 font-serif'>
                <div className='relative font-sans top-9'>
                    <img src={box} alt="img loading" className='relative right-6 ' />
                    <p className='absolute top-1 left-10 text-white text-lg'>1 Month from Now:</p>
                </div>
                <div className='mt-10'>
                    <img src={second} alt="img loading" className='w-52 h-52 mx-auto' />
                </div>
                <div className='relative'>
                    <img src={arrow2} alt=""className='absolute bottom-3 left-16'/>
                </div>

                <div className='mt-4'>

                    <p className='flex justify-center'>Yore Etsy shop is growing. </p>
                    <p className='flex justify-center'> Yor're &nbsp; <strong>selling more and</strong></p>
                    <p className='flex justify-center'><strong>more </strong> &nbsp; everyday. You're not </p>
                    <p className='flex justify-center'>staying up late, worrying</p>
                    <p className='flex justify-center'>about what to sell next. </p>
                    <p className='flex justify-center'> <strong>Sellekin is like a friend </strong></p>
                    <p className='flex justify-center'><strong>that helps you find the </strong></p>
                    <p className='flex justify-center'> <strong>right products.</strong></p>
                </div>
                <div>
                    <p className='flex justify-center'>Your family notices that </p>
                    <p className='flex justify-center'> you're &nbsp;<strong>happier</strong> and have</p>
                    <p className='flex justify-center'>more time to spend with </p>
                    <p className='flex justify-center'> them. You feel proud of</p>
                    <p className='flex justify-center'>what you've achieved</p>
                </div>
            </div>
            <div className='flex flex-col md:hidden gap-2 border-2 bg-custom-color-2 rounded-lg shadow-lg w-9/12 mx-auto mt-10 pb-9 font-serif'>
                <div className='relative font-sans top-9'>
                    <img src={box} alt="img loading" className='relative right-6 ' />
                    <p className='absolute top-1 left-10 text-white text-lg'>6 Month from Now:</p>
                </div>
                <div className='mt-10'>
                    <img src={third} alt="img loading" className='w-52 h-52 mx-auto' />
                </div>
                <div className='relative'>
                    <img src={arrow2} alt=""className='absolute bottom-3 left-16'/>
                </div>
                <div className='mt-4'>

                    <p className='flex justify-center'>Wow! Your Etsy business is </p>
                    <p className='flex justify-center'> booming. You're not just</p>
                    <p className='flex justify-center'>selling products; &nbsp; <strong>you're </strong> </p>
                    <p className='flex justify-center'> <strong> building a Brand.&nbsp;  </strong> People</p>
                    <p className='flex justify-center'>know your shop and love </p>
                    <p className='flex justify-center'> what you offer.</p>
                </div>
                <div>
                    <p className='flex justify-center'>You've even started to hire </p>
                    <p className='flex justify-center'> help because the business</p>
                    <p className='flex justify-center'> is doing so well. You look </p> 
                    <p className='flex justify-center'>back and think about how</p>
                    <p className='flex justify-center'> sellekin helped you get </p> 
                    <p className='flex justify-center'>here. You feel grateful and </p>
                    <p className='flex justify-center'>excited about the future.</p>
                </div>
            </div>



        </div>
    )
}

export default Fifteen
