import React from 'react'
import left_arrow from "../img/mingcute_arrows-right-line.png";
import right_arrow from "../img/mingcute_arrows-right-line (1).png";
import days from "../img/7days1.svg";
import visa1 from "../img/toppng 4.svg"
import secure from "../img/lock1.svg";
const Sixteen = () => {
    return (
        <div className='pt-10 bg-custom-color-2 mb-10'>
            <div className='font-serif hidden md:flex flex-col gap-4 flex-wrap p-10 border-2 border-dashed md:w-10/12 xl:w-7/12 bg-custom-color border-custom-color-1 justify-center items-center mx-auto rounded-lg'>
                <div >
                    <p className='flex justify-center'>Sellerkin isn't just a tool; it's <strong> &nbsp; a gateway to success.</strong> &nbsp;it's like having a wise </p>
                    <p className='flex justify-center'>friends who guides you, helps you make smart decisions, and cheers you</p>
                    <p className='flex justify-center'>on. You don't have to be an expert or have a big business mind. you just</p>
                    <p className='flex justify-center'>need the passion and the right tool to help you shine.</p>
                </div>
                <div>
                    <p className='flex justify-center'>Don't wait. Start your journey with Sellerkin today and see</p>
                    <p className='flex justify-center'>while it takes you. Your future success is just a click away</p>
                </div>
                <div className="flex justify-center mt-5 font-sans">
                    <div>
                        <img src={left_arrow} alt="left arrow"></img>
                    </div>
                    <div className="bg-custom-color-1 m-1 text-2xl px-5 py-3 border-2 rounded-lg flex justify-center flex-col md:flex md:flex-row text-white">
                        <p className="mr-1 md:mr-1">Scale Your Etsy</p>
                        <p>
                            Business Today
                        </p>
                    </div>
                    <div>
                        <img src={right_arrow} alt="right arrow 2"></img>
                    </div>
                </div>
                <div className="md:flex md:justify-center gap-4 mt-5">
                    <div className="flex justify-center mb-5">
                        <img src={visa1} alt="payment" className="w-52 md:w-auto"></img>
                    </div>
                    <div className="flex justify-center mb-5 gap-3">
                        <img src={secure} alt="payment" className="relative mb-2"></img>
                        <img src={days} alt="payment" className="relative mb-2"></img>
                    </div>
                </div>
            </div>
            <div className='font-serif flex md:hidden flex-col gap-4 flex-wrap py-9 px-5 border-2 border-dashed w-10/12 bg-custom-color border-custom-color-1 justify-center items-center mx-auto rounded-lg'>
                <div >
                    <p className='flex justify-center'>Sellerkin isn't just a tool; </p>
                    <p className='flex justify-center'> it's <strong>a gateway to success.</strong> it's </p>
                    <p className='flex justify-center'> like having a wise friends  </p>
                    <p className='flex justify-center'>who guides you, helps you </p>
                    <p className='flex justify-center'> make smart decisions, </p>
                    <p className='flex justify-center'> and cheers you on.</p>
                    <p className='flex justify-center mt-5'> You don't have to be an </p>
                    <p className='flex justify-center'> expert or have a big </p>
                    <p className='flex justify-center'>business mind. you just</p>
                    <p  className='flex justify-center'>need the passion and the </p>
                    <p className='flex justify-center'> right tool to help you shine.</p>
                </div>
                <div>
                    <p className='flex justify-center'>Don't wait. Start your </p>
                    <p className='flex justify-center'> journey with Sellerkin today </p>
      
                    <p className='flex justify-center'> and see while it takes you. </p>
                    <p className='flex justify-center'> Your future success is </p>
                    <p className='flex justify-center'> just a click away</p>
                </div>
                <div className="flex justify-center mt-5 font-sans">
                    
                    <div className="bg-custom-color-1 m-1 text-xl px-5 py-3 border-2 rounded-lg flex justify-center flex-col md:flex md:flex-row text-white">
                        <p className="mr-1 md:mr-1">Scale Your Etsy</p>
                        <p>
                            Business Today
                        </p>
                    </div>
                   
                </div>
                <div className='font-serif'>
                    <p className=' text-base flex justify-center'>Soon, Prices are going </p>
                    <p className=' text-base flex justify-center'> to be increased</p>
                </div>
                <div className="md:flex md:justify-center gap-4 mt-5">
                    <div className="flex justify-center mb-5">
                        <img src={visa1} alt="payment" className="w-52 md:w-auto"></img>
                    </div>
                    <div className="flex justify-center mb-5 gap-3">
                        <img src={secure} alt="payment" className="relative mb-2"></img>
                        <img src={days} alt="payment" className="relative mb-2"></img>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sixteen
