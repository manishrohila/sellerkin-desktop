import React from 'react'
import arrow from "../img/Group 136.svg"
import cup from "../img/Component 2.svg"
import book from "../img/Component 3.svg"
import man from "../img/Component 4.svg"
import graph from "../img/Component 5.svg"
import first from "../img/Component 6.svg"
import second from "../img/Component 7.svg"
import arrow2 from "../img/Vector 39.svg"
import underline from "../img/Vector 40.svg"
const Thirteen = () => {
  return (
    <div className='bg-custom-color pt-10'>
      <div className='text-5xl flex place-items-center flex-col font-sans'>
        <p>Once you Know about this <span className='text-custom-color-1'>SECRET CODE,</span></p>
        <p>half the battle is already Won.</p>
        <img src={underline} alt="img loading" className='hidden md:block mt-4' />
      </div>

      <div className='place-items-center text-2xl flex flex-col mt-5 font-serif'>
        <p>You don't need a marketing degree to crack the code. you just found</p>
        <p> <span className='underline'>Sellerkin</span> which gives you <strong>winning products of your niche in <span className='underline'>miutes.</span></strong></p>
      </div>
      <div className='grid grid-cols-7 justify-evenly mx-52 items-center mt-16 font-serif  '>
            <div>
                <img src={cup} alt="img loading" />
                <p>Winning Product</p>
            </div>
            <div>
                <img src={arrow} alt="img loading" />
            </div>
            <div>
                <img src={book} alt="img loading" />
                <p>More Eyeballs</p>
            </div>
            <div>
                <img src={arrow} alt="img loading" />
            </div>
            <div>
                <img src={man} alt="img loading" />
                <p>More Customers</p>
            </div>
            <div>
                <img src={arrow} alt="img loading" />
            </div>
            <div>
                <img src={graph} alt="img loading" />
                <p>More Revenue</p>
            </div>
      </div>
      <div className=' flex justify-center items-center text-5xl mt-16 font-sans'>
        <p><span className='text-custom-color-1'>Forget </span> about the <span className='text-custom-color-1 italic'>years long-research </span>process... </p>
      </div>

      <div className='mt-16 flex justify-center items-center gap-10'>
            <div>
                <img src={first} alt="img loading" />
            </div>
            <div>
                <img src={arrow2} alt="img loading" />
            </div>
            <div>
                <img src={second} alt="img loading" />
            </div>
      </div>
      <div className='font-sans flex justify-center items-center text-4xl mt-16'>
        <p> Go from <span className='text-custom-color-1 underline'>"No Product " to</span> your <span className='text-custom-color-1 underline'>"First Winning Product"</span> in mere days</p>
      </div>
      <div className='font-serif flex justify-center items-center mt-10 text-2xl flex-col '>
        <p>Don't spend another decade working without seeing results. It's time to build the</p>
        <p className='mb-16'>life you desire,giving you the freedom to do what you love, whenever you want</p>
      </div>
    </div>
  )
}

export default Thirteen
