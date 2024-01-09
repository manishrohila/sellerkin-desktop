import React from 'react'
import first from "../img/Group 239.svg"
import second from "../img/Group 240.svg"
import underline from "../img/Vector 37 (1).svg"

const Sixth = () => {
    return (
        <div className='bg-custom-color mb-20 mt-10 ' id='how_it_works'>
            <div className='flex lg:text-5xl text-4xl flex-col md:flex-row  justify-center items-center pt-20 font-bold font-sans'>
                <p className='flex justify-center items-center'>Sellerkin works in </p>
                <div className='flex flex-col gap-3 relative md:right-9 lg:right-0 top-2 justify-center items-center'>
                    <p className='text-custom-color-1'>2 Easy Steps</p>
                    <img src={underline} alt="underline loading" className='hidden md:flex md:w-10/12' />
                </div>

            </div>
            <div className='flex items-center   justify-evenly text-2xl mt-14 md:flex-row flex-col'>
                <div>
                    <img src={first} alt="img loading" className='w-80 h-54 md:w-full h-full' />
                </div>
                <div className='hidden md:block  font-serif'>
                    <button className='border-2 bg-custom-color-1 rounded-md p-2 text-white font-serif'>Step 1:</button>
                    <p>Search for your</p>
                    <p>Desired Keyword</p>
                </div>
                <div className=' md:hidden relative top-6  font-serif'>
                    <button className='border-2 bg-custom-color-1 rounded-md p-2 px-4 text-white font-serif relative left-10 mb-4 mt-4'>Step 1:</button>
                    <p className='flex justify-center'>Search for your</p>
                    <p className='flex justify-center'>Desired Keyword</p>
                </div>
            </div>
            <div className='flex items-center relative md:left-5  justify-evenly text-2xl mt-32 md:flex-row flex-col mb-20 pb-20'>
                <div className=' md:hidden'>
                    <img src={second} alt="img loading" className='w-80 h-54 md:w-full h-full' />
                </div>
                <div className='hidden md:block  font-serif'>
                    <button className='border-2 bg-custom-color-1 rounded-md p-2 text-white font-serif'>Step 2:</button>
                    <p>Able to see the</p>
                    <p>winning products data</p>
                </div>
                <div className=' md:hidden relative top-6  font-serif'>
                    <button className='border-2 bg-custom-color-1 rounded-md p-2 px-4 text-white font-serif relative left-16 mb-4 mt-4'>Step 2:</button>
                    <p className='flex justify-center'>Able to see the</p>
                    <p className='flex justify-center'>winning products data</p>
                </div>
                <div className='hidden md:block'>
                    <img src={second} alt="img loading" className='w-80 h-54 md:w-full h-full' />
                </div>
            </div>
        </div>
    )
}

export default Sixth
