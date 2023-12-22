import React from 'react'
import first from "../img/Group 239.svg"
import second from "../img/Group 240.svg"

const Sixth = () => {
    return (
        <div className='bg-custom-color mb-20 mt-10 '>
            <div className='flex text-5xl flex-col md:flex-row gap-3 justify-center items-center pt-20'>
                <p className=''>Sellerkin works in </p>
                <p><span className='text-custom-color-1'> 2 Easy Steps</span></p>
            </div>
            <div className='flex items-center gap-10  justify-evenly text-2xl mt-14 md:flex-row flex-col'>
                <div>
                    <img src={first} alt="image loading" className='w-80 h-54 md:w-full h-full' />
                </div>
                <div className='  font-serif'>
                    <button className='border-2 bg-custom-color-1 rounded-md p-2 text-white font-serif'>Step 1:</button>
                    <p>Search for your</p>
                    <p>Desired Keyword</p>
                </div>
            </div>
            <div className='flex items-center gap-10 justify-evenly text-2xl mt-14 md:flex-row flex-col mb-20'>
                <div className=' md:hidden'>
                    <img src={second} alt="image loading" className='w-80 h-54 md:w-full h-full' />
                </div>
                <div className='font-serif mb-40 '>
                    <button className='border-2 bg-custom-color-1 rounded-md p-2 text-white font-serif'>Step 2:</button>
                    <p>Able to see the</p>
                    <p>winning products data</p>
                </div>
                <div className='hidden md:block'>
                    <img src={second} alt="image loading" className='w-80 h-54 md:w-full h-full' />
                </div>
            </div>
        </div>
    )
}

export default Sixth
