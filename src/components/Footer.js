import React from 'react'
import logo from "../img/logo.svg";
const Footer = () => {
    return (
        <div className=' bg-[#2F363C] pt-10'>
            <div className='grid grid-cols-2 '>
                <div className='text-white flex flex-col gap-4 ml-16'>
                    <div>
                        <p>This site is not a part of the Facebook website or Facebook inc. Additionally, This site is</p>
                        <p>NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.</p>
                    </div>
                    <div>
                        <p>Copyright Sellerkin 2023. All Right Reserved.</p>
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


        </div>
    )
}

export default Footer
