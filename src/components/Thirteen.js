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
import down_arrow from "../img/mingcute_arrows-right-line.svg"
import third from '../img/Component 13.svg'
const Thirteen = () => {
  return (
    <div className='bg-custom-color pt-10'>
      <div className='text-5xl md:flex hidden place-items-center flex-col font-sans font-bold'>
        <p>Once you Know about this <span className='text-custom-color-1'>SECRET CODE,</span></p>
        <p>half the battle is already Won.</p>
        <img src={underline} alt="img loading" className='hidden md:block mt-4' />
      </div>
      <div className='text-3xl md:hidden flex  place-items-center flex-col font-sans font-bold'>
        <p>Once you Know </p>
        <p> about this <span className='text-custom-color-1'>SECRET CODE,</span></p>
        <p>  <span className='text-custom-color-1'>CODE,</span> half the battle</p>
        <p> is already Won.</p>
        <img src={underline} alt="img loading" className='hidden md:block mt-4' />
      </div>

      <div className='place-items-center text-2xl md:flex hidden flex-col mt-5 font-serif'>
        <p>You don't need a marketing degree to crack the code. you just found</p>
        <p> <span className='underline'>Sellerkin</span> which gives you <strong>winning products of your niche in <span className='underline'>miutes.</span></strong></p>
      </div>
      <div className='place-items-center text-xl md:hidden flex flex-col mt-7 font-serif'>
        <p>You don't need a marketing </p>
        <p> degree to crack the code. </p> 
        <p className='mt-6'>you just found <span className='underline'>Sellerkin</span> which  </p>
        <p>   <strong> gives you winning products of</strong> </p>
        <p><strong> your niche in <span className='underline'>miutes.</span></strong></p>
      </div>
      <div className='md:grid hidden grid-cols-7 justify-evenly mx-52 items-center mt-16 font-serif  '>
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
      <div className='md:hidden grid grid-rows-7 gap-5 justify-center items-center mt-16 font-serif  '>
            <div className="flex flex-col justify-center gap-4">
                <img src={cup} alt="img loading" className='w-[90px] h-[90px] mx-auto' />
                <p > <span className='text-2xl font-bold'>Winning Product</span></p>
            </div>
            <div className="flex justify-center">
                <img src={down_arrow} alt="img loading" />
            </div>
            <div className="flex flex-col justify-center gap-4">
                <img src={book} alt="img loading" className='w-[90px] h-[90px] mx-auto' />
                <p > <span className='text-2xl font-bold flex justify-center'>More Eyeballs</span></p>
            </div>
            <div className="flex justify-center">
                <img src={down_arrow} alt="img loading" />
            </div>
            <div className="flex flex-col justify-center gap-4">
                <img src={man} alt="img loading" className='w-[90px] h-[90px] mx-auto' />
                <p  className='text-2xl font-bold flex justify-center'>More Customers</p>
            </div>
            <div className="flex justify-center">
                <img src={down_arrow} alt="img loading" />
            </div>
            <div className="flex flex-col justify-center gap-4">
                <img src={graph} alt="img loading" className='w-[90px] h-[90px] mx-auto' />
                <p  className='text-2xl font-bold flex justify-center'>More Revenue</p>
            </div>
      </div>
      <div className=' md:flex hidden flex-wrap justify-center items-center text-5xl mt-16 font-sans font-bold'>
        <p><span className='text-custom-color-1'>Forget </span> about the <span className='text-custom-color-1 italic'>years long-research </span>process... </p>
      </div>
      <div className=' flex flex-col md:hidden flex-wrap justify-center items-center text-4xl mt-16 font-sans font-bold'>
        <p><span className='text-custom-color-1'>Forget </span> about the </p>
        <p> <span className='text-custom-color-1 italic'>years long-research </span></p>
        <p>process... </p>
      </div>
      <div className='mt-16 flex justify-center items-center gap-10'>
            <div>
                <img src={first} alt="img loading" />
            </div>
            <div className="self-start absolute md:relative md:self-center ">
                <img src={arrow2} alt="img loading"/>
            </div>
            <div>
                <img src={second} alt="img loading" />
            </div>
      </div>
      <div className='font-sans md:flex hidden justify-center items-center text-4xl mt-16 font-bold'>
        <p> Go from <span className='text-custom-color-1 underline'>"No Product "</span> to your <span className='text-custom-color-1 underline'>"First Winning Product"</span> in mere days</p>
      </div>
      <div className='font-serif md:flex hidden justify-center items-center mt-10 text-2xl flex-col '>
        <p>Don't spend another decade working without seeing results. It's time to build the</p>
        <p className='mb-16'>life you desire,giving you the freedom to do what you love, whenever you want</p>
      </div>
      <div className='md:hidden flex justify-center items-center mt-5'>
        <img src={third} alt="" />
      </div>
      <div className='font-serif md:hidden flex justify-center items-center mt-10 text-xl flex-col '>
        <p>Don't spend another decade </p>
        <p className='mb-4'> working without seeing results. </p>
        <p> It's time to build the life you desire,</p>
        <p >giving you the freedom to do what </p>
        <p className='mb-16'> you love, whenever you want</p>
      </div>
    </div>
  )
}

export default Thirteen
