import React from 'react'
import first from "../img/Rectangle 129.svg"
import second from "../img/Rectangle 142.svg"
import third from '../img/Rectangle 139.svg'
import bg from "../img/Rectangle 127.svg"
import circle from "../img/Ellipse 187.svg"
import left_arrow from "../img/mingcute_arrows-right-line.png";
import right_arrow from "../img/mingcute_arrows-right-line (1).png";
import visa1 from "../img/toppng 4.svg"
import secure from "../img/lock1.svg";
import days from "../img/7days1.svg";

const Fifth = () => {
    return (
        <div className='bg-custom-color-2 mt-10'>
            <div className='text-sans flex justify-center mb-10 md:mb-20'>
                <p className='text-5xl'> <span className='text-custom-color-1'>Imagine</span>  this...</p>
            </div>
            <div className='mt-10 hidden md:flex flex-col justify-center items-center '>

                <div className='flex relative flex-wrap items-center justify-around gap-5 mb-20 '>
                    <div>
                        <img src={circle} alt="circle" className='absolute -top-10 z-0 -left-10 ' />
                    </div>

                    <div className='text-base flex flex-col gap-5 border-2 rounded-xl border-custom-color-1 bg-custom-color justify-center p-20  z-10 shadow-xl'>
                        <div>
                            <p>Having <strong>extra</strong> time to spend with your loved</p>
                            <p><strong>Ones,</strong> doing <strong> fun activities</strong>and creating</p>
                            <p><strong>special memories together</strong></p>
                        </div>
                        <div>
                            <p>With Sellerkin, you can quickly find the <strong>best</strong></p>
                            <p>products for your Etsy shop, leaving more time</p>
                            <p>for <strong> joyful gathering and <strong>family bonding</strong></strong></p>
                        </div>

                    </div>
                    <div>
                        <img src={first} alt="family picture" className='w-80 h-80' />
                    </div>
                </div>

                <div className='flex justify-evenly flex-wrap items-center gap-3 mb-20 relative z-10'>
                    <div>
                        <img src={second} alt="family picture" className='w-80 h-80' />
                    </div>

                    <div className='text-base flex flex-col gap-5 border-2 rounded-xl border-custom-color-1 bg-custom-color justify-center p-16 shadow-xl z-20 '>

                        <div>
                            <p>Say <strong> goodbye to worries </strong> about which products </p>
                            <p>  to sell and how to make your <strong>Etsy shop</strong> </p>
                            <p><strong>successful.</strong> Sellerkin takes <strong>away the stress </strong>by</p>
                            <p>helping you discover <strong>winning product easily</strong></p>
                        </div>
                        <div>
                            <p>This means you can <strong>enjoy your hobbies,</strong></p>
                            <p>explore <strong>new interests,</strong> and have a happier,</p>
                            <p> <strong>stress-free</strong>time managing your business</p>
                        </div>


                    </div>
                    <div className='relative z-10 '>
                        <img src={circle} alt="circle" className='relative left-0' />
                    </div>


                </div>

                <div className='flex justify-evenly flex-wrap items-center gap-5 mb-20 relative'>
                    <div>
                        <img src={circle} alt="circle" className=' absolute -top-10 z-0 -left-10 ' />
                    </div>

                    <div className='text-base flex flex-col gap-5 border-2 rounded-xl border-custom-color-1 bg-custom-color justify-center p-12 px-24 shadow-xl z-10'>
                        <div>
                            <p>Sellerkin helps you make <strong>smart decisions</strong></p>
                            <p>that lead to more <strong>sales</strong> and <strong> success</strong> on</p>
                            <p> Etsy. When you see your <strong> shop growing </strong></p>
                            <p>and your hard work paying off</p>
                        </div>
                        <div>
                            <p>you'll feel a <strong>sense of accomplishment</strong></p>
                            <p>that <strong>boots your confidence.</strong> You'll be</p>
                            <p>proud of what you've achieved and</p>
                            <p>excited to keep reaching for your  <strong>goals</strong></p>
                        </div>

                    </div>
                    <div>
                        <img src={third} alt="family picture" className='w-80 h-80  transform scale-x-[-1]' />
                    </div>
                </div>


            </div>
            <div className='mt-10 flex md:hidden flex-col justify-center items-center '>

                <div className='flex relative flex-wrap items-center justify-around gap-5 mb-20 '>
                    
                    <div>
                        <img src={first} alt="family picture" className='w-80 h-80 mb-10' />
                    </div>
                    <div className='text-base flex flex-col gap-5 border-2 rounded-md border-custom-color-1 bg-custom-color justify-center p-10  z-10 shadow-lg '>
                        <div>
                            <p>Having <strong>extra</strong> time to spend </p> 
                            <p>with your loved <strong>Ones,</strong> doing </p>
                            <p><strong> fun activities</strong>and creating</p>
                            <p><strong>special memories together.</strong></p>
                        </div>
                        <div>
                            <p>With Sellerkin, you can quickly </p>
                             <p>find the <strong>best</strong> products for</p>
                            <p> your Etsy shop, leaving more </p>
                            <p> time for <strong> joyful gathering </strong> </p>
                            <p> <strong> and family bonding</strong></p>
                        </div>

                    </div>
                    {/* <div>
                        <img src={circle} alt="circle" className='absolute -top-10 z-0 -left-10 ' />
                    </div> */}
                    
                </div>

                <div className='flex justify-evenly flex-wrap items-center gap-3 mb-20 relative z-10'>
                    <div>
                        <img src={second} alt="family picture" className='w-80 h-80 mb-10' />
                    </div>

                    <div className='text-base flex flex-col gap-5 border-2 rounded-xl border-custom-color-1 bg-custom-color justify-center p-12 shadow-xl '>

                        <div>
                            <p>Say <strong> goodbye to worries </strong> </p>
                             <p> about which products to sell</p>
                            <p>  and how to make your <strong>Etsy</strong> </p>
                            <p><strong>shop successful.</strong> Sellerkin </p>
                            <p> takes <strong>away the stress </strong>by</p>
                            <p>helping you discover </p> 
                            <p><strong>winning product easily</strong></p>
                        </div>
                        <div>
                            <p>This means you can <strong>enjoy </strong> </p>
                            <p> <strong> your hobbies,</strong> explore <strong> new </strong> </p>
                            <p> <strong> interests,</strong> and have a </p>
                            <p> <strong>happier, stress-free</strong>time </p> 
                            <p>managing your business</p>
                        </div>


                    </div>
                    {/* <div className='relative z-0'>
                        <img src={circle} alt="circle" className='absolute -top-14 -right-10 ' />
                    </div> */}


                </div>

                <div className='flex justify-evenly flex-wrap items-center gap-5 mb-20 relative'>
                    {/* <div>
                        <img src={circle} alt="circle" className=' absolute -top-10 z-0 -left-10 ' />
                    </div> */}
                    <div>
                        <img src={third} alt="family picture" className='w-80 h-80  transform scale-x-[-1] mb-10' />
                    </div>

                    <div className='text-base flex flex-col gap-5 border-2 rounded-xl border-custom-color-1 bg-custom-color justify-center p-12 shadow-xl z-10 '>
                        <div>
                            <p>Sellerkin helps you make </p> 
                            <p><strong>smart decisions</strong>that lead </p>
                            <p>to more <strong>sales</strong> and <strong> success</strong> </p>
                            <p>on Etsy. When you see your </p> 
                            <p><strong> shop growing </strong> and your</p>
                            <p> hard work paying off</p>
                        </div>
                        <div>
                            <p>you'll feel a <strong>sense of </strong></p>
                            <p><strong>accomplishment that </strong> </p> 
                            <p><strong>  boots your confidence.</strong> </p> 
                            <p>You'll be proud of what</p>
                            <p> you've achieved and</p>
                            <p>excited to keep reaching </p> 
                            <p>for your  <strong>goals</strong></p>
                        </div>

                    </div>
                    
                </div>


            </div>

            <div className='hidden md:flex flex-col flex-wrap font-serif justify-center items-center mb-10'>
                <p>Step into boundless possibilities with <strong>Sellerkin's incredible insights revealing</strong></p>
                <p>features. Grow your business to <strong>new heights</strong> through <strong>deep insights</strong></p>
            </div>
            <div className='md:flex hidden flex-col flex-wrap font-serif justify-center items-center mb-10'>
                <p>Leave your competitors <strong>behind</strong>and become a <span>standout leader</span> <strong>Biggest</strong></p>
                <p><strong>Player</strong> in your niche, all powered by <strong>Sellerkin's advanced tools</strong></p>
            </div>
            <div className='flex md:hidden flex-col flex-wrap font-serif justify-center items-center mb-10'>
                <p>Step into boundless possibilities with </p>
                <p><strong>Sellerkin's incredible insights revealing</strong></p>
                <p>features. Grow your business to <strong>new </strong> </p>
                <p><strong>heights</strong> through <strong>deep insights</strong></p>
            </div>

            <div className='md:hidden flex flex-col flex-wrap font-serif justify-center items-center mb-10'>
                <p>Leave your competitors <strong>behind</strong>and </p>
                 <p>become a <span>standout leader</span> <strong>Biggest</strong></p>
                <p><strong>Player</strong> in your niche, all powered by  </p>
                <p> <strong>Sellerkin's advanced tools</strong></p>
            </div>
            <div className="hidden md:flex md:flex-row justify-center mt-5 font-sans mb-10">
                <div>
                    <img src={left_arrow} alt="left arrow"></img>
                </div>
                <div className="bg-custom-color-1 m-1 text-2xl px-5 py-3 border-2 rounded-lg flex justify-center flex-col md:flex md:flex-col text-white mb-10">
                    <p className="mr-1 md:mr-1">Your Journey to Success Starts Here</p>

                    <p className='text-base flex justify-center'>Soon, Prices are going to be increased</p>
                </div>
                <div>
                    <img src={right_arrow} alt="right arrow 2"></img>
                </div>
            </div>
            <div className="flex flex-row  md:hidden justify-center mt-5 font-sans mb-12 md:mb-40">
                <div>
                    <img src={left_arrow} alt="left arrow"></img>
                </div>
                <div className="bg-custom-color-1 m-1 text-base px-5 py-3 border-2 rounded-lg flex justify-center items-center flex-col text-white font-bold">
                    <p className="mr-1 md:mr-1">Your Journey to </p>
                    <p>
                        Success Starts Here
                    </p>

                </div>
                <div>
                    <img src={right_arrow} alt="right arrow 2"></img>
                </div>
            </div>

            {/* <div className='flex justify-center items-center md:hidden'>
                <p>Soon, Prices are going to be increased</p>
            </div> */}


            <div className="md:flex md:justify-center gap-4  h-20 ">
                <div className="flex justify-center mb-5">
                    <img src={visa1} alt="payment" className="w-52 md:w-auto"></img>
                </div>
                <div className="flex justify-center mb-5 gap-3">
                    <img src={secure} alt="payment" className="relative mb-2"></img>
                    <img src={days} alt="payment" className="relative mb-2"></img>
                </div>
            </div>

        </div>
    )
}

export default Fifth
