import React from 'react'
import logo from "../img/logo.svg";
const Footer = () => {
    return (
        <div className=' bg-[#2F363C] pt-4 font-serif'>
            <div className='md:grid hidden grid-cols-2 text-xs'>
                <div className='text-white flex flex-col relative top-4 gap-4 ml-16'>
                    <div>
                        <p>This site is not a part of the Facebook website or Facebook inc. Additionally, This site is</p>
                        <p>NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.</p>
                    </div>
                    <div>
                        <p>Copyright © Sellerkin 2024. All Right Reserved.</p>
                    </div>
                    <div className='mb-10'>
                        <p>Privacy Policy | Terms Of Services | Disclaimer</p>
                    </div>
                </div>
                <div className="flex gap-2 text-white justify-center items-center">
                    <img src={logo} alt="SellerKin logo" className="w-12 h-12"></img>
                    <span className="text-2xl font-bold relative  ">SellerKin</span>
                </div>
            </div>

            <div className='flex md:hidden flex-col text-white gap-4 '>
                <div className="flex gap-4 text-white justify-center items-center">
                    <img src={logo} alt="SellerKin logo" className="w-12 h-12"></img>
                    <span className="text-4xl font-bold relative top-1  ">SellerKin</span>
                </div>
                <div>
                    <p className='flex justify-center items-center'>This site is not a part of the Facebook </p>
                    <p className='flex justify-center items-center'>website or Facebook inc. Additionally, </p>
                    <p className='flex justify-center items-center'>This site is NOT endorsed by</p>
                    <p className='flex justify-center items-center'> Facebook in any way. FACEBOOK is a </p>
                    <p className='flex justify-center items-center'>trademark of FACEBOOK, Inc.</p>
                </div>
                <div>
                    <p className='flex justify-center items-center'>Copyright © Sellerkin 2024. All Right Reserved.</p>
                </div>
                <div className=''>
                    <p className='flex justify-center items-center'>Privacy Policy | Terms Of Services | Disclaimer</p>
                </div>

            </div>


        </div>
    )
}

export default Footer
