import React from 'react'
import left_arrow from "../img/mingcute_arrows-right-line.png";
import right_arrow from "../img/mingcute_arrows-right-line (1).png";
import days from "../img/7days1.svg";
import visa1 from "../img/toppng 4.svg"
import secure from "../img/lock1.svg";
import mac from "../img/mac1.svg";
import window from "../img/windows1.svg";
const Eighteen = () => {
    return (
        <div className='pt-10 bg-custom-color-2 mb-10 font-serif'>
            <div className='font-serif hidden  md:flex flex-col gap-4 flex-wrap p-10 border-2 border-dashed w-7/12 bg-custom-color border-custom-color-1 justify-center items-center mx-auto'>
                <div className='text-2xl' >
                    <p className='flex justify-center'><strong>P.S &nbsp;</strong> Want to 10x your Etsy sales? This tool is your </p>
                    <p className='flex justify-center'> ticket. I dare you to try it risk-free today.</p>

                </div>
                <div className="hidden md:flex md:flex-row justify-center  font-sans ">
                    <div>
                        <img src={left_arrow} alt="left arrow" className='relative top-2'></img>
                    </div>
                    <div className="bg-custom-color-1 m-1 text-2xl px-10 py-3 border-2 rounded-lg flex justify-center flex-col md:flex md:flex-col  text-white font-sans ">
                        <p className="flex justify-center font-bold font-sans  ">Get instant Access to Sellerkin</p>

                        <p className=' text-base flex justify-center'>Soon, Prices are going to be increased</p>
                    </div>
                    <div>
                        <img src={right_arrow} alt="right arrow 2" className='relative top-2'></img>
                    </div>
                </div>
                <div className="md:flex md:justify-center gap-4 ">
                    <div className="flex justify-center mb-5">
                        <img src={visa1} alt="payment" className="w-52 md:w-auto"></img>
                    </div>
                    <div className="flex justify-center mb-5 gap-3">
                        <img src={secure} alt="payment" className="relative mb-2"></img>
                        <img src={days} alt="payment" className="relative mb-2"></img>
                    </div>
                </div>
                <div className="flex justify-center mb-5 gap-4">
                    <img src={mac} alt="payment" className="w-24 md:w-auto "></img>
                    <img src={window} alt="payment" className="relative mb-2 w-24 md:w-auto"></img>
                </div>
            </div>
            <div className='font-serif flex  md:hidden flex-col gap-4 flex-wrap p-10 border-2 border-dashed w-11/12 bg-custom-color border-custom-color-1 justify-center items-center mx-auto'>
                <div className='text-2xl' >
                    <p className='flex justify-center items-center'><strong>P.S &nbsp;</strong> Want to 10x </p>
                    <p className='flex justify-center items-center'>your Etsy sales? </p>
                    <p className='flex justify-center items-center'>This tool is your </p>
                    <p className='flex justify-center'> ticket. I dare you </p>
                    <p className='flex justify-center items-center'>to try it risk- </p>
                    <p className='flex justify-center items-center'>free today.</p>

                </div>


                <div className="flex flex-row  md:hidden justify-center mt-5 font-sans w-full">

                    <div className="bg-custom-color-1 m-1 text-2xl px-3 py-3 border-2 rounded-lg flex justify-center items-center flex-col text-white font-bold font-sans">
                        <p className="flex justify-center">Get Instant Access</p>
                        <p className='flex justify-center'>To Sellerkin</p>

                    </div>

                </div>
                <div className='font-serif'>
                    <p className=' text-base flex justify-center'>Soon, Prices are going </p>
                    <p className=' text-base flex justify-center'> to be increased</p>
                </div>


                <div className="md:flex md:justify-center gap-4 ">
                    <div className="flex justify-center mb-5">
                        <img src={visa1} alt="payment" className="w-52 md:w-auto"></img>
                    </div>
                    <div className="flex justify-center mb-5 gap-3">
                        <img src={secure} alt="payment" className="relative mb-2"></img>
                        <img src={days} alt="payment" className="relative mb-2"></img>
                    </div>
                </div>
                <div className="flex justify-center mb-5 gap-4">
                    <img src={mac} alt="payment" className="w-24 md:w-auto "></img>
                    <img src={window} alt="payment" className="relative mb-2 w-24 md:w-auto"></img>
                </div>
            </div>

        </div>
    )
}

export default Eighteen
