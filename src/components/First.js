import React, { useState } from 'react';
import "./First.css"
import logo from "../img/Mask group.png"
import shopping_cart from "../img/noto_shopping-cart.png"
import achievement from "../img/Group 193.png"
import underline from "../img/Vector 2.png"
import li1 from "../img/li1.png"
import li2 from "../img/li2.png"
import li3 from "../img/li3.png"
import li4 from "../img/li4.png"
import li5 from "../img/li5.png"
import left_arrow from "../img/mingcute_arrows-right-line.png"
import right_arrow from "../img/mingcute_arrows-right-line (1).png"
import shopping_cart_2 from "../img/mdi_cart.png"
import cloud from "../img/iconamoon_cloud-yes-fill.png"
import graph from "../img/mdi_graph-box.png"
import secure from "../img/lock.png"
import { GiHamburgerMenu } from "react-icons/gi";
import visa from "../img/visa.png"
import days from "../img/7days.png"
import mac from "../img/mac.png"
import window from "../img/windows.png"
function First() {

    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className='bg-custom-color pb-10'>
            <nav className='flex px-10 py-6 '>
                <div className='flex ml-40'>
                    <img src={logo} alt='SellerKin logo' className='relative -mt-4'></img>
                    <span className='pr-20 font-bold' >SellerKin</span>
                </div>
                {/* ul list  */}
                <div>
                    <ul className=' justify-center list-none ml-48 hidden md:flex space-x-5'>

                        <li className=''>How it Works</li>
                        <li>Testimonials</li>
                        <li>Pricing</li>

                    </ul>
                </div>

                {/* button */}
                <div className='ml-20 space-x-10 hidden md:flex md:justify-end'>
                    <button className="border-2 rounded border-custom-color-1 px-2.5 py-0.5">Log in</button>
                    <button className="border-2 rounded border-custom-color-1 bg-custom-color-1 px-2.5 py-0.5">Get Started</button>
                </div>

                <div className="hamburger-menu">
                    <a href="#" onClick={() => setShowMenu(!showMenu)}>
                        <GiHamburgerMenu />
                    </a>
                </div>

            </nav>
            <div className='border-2 rounded-2xl bg-custom-color-1 border-custom-color-1 w-64 mx-auto flex justify-center items-center'>
                This is an invite-only page...
            </div>

            <div className='flex justify-center align-center mt-6 text-base '>
                <div >
                    <h4>Golden Scaling Gateway for all Ecom Businesses & Digital </h4>
                    <h4 className='ml-12 font-bold'>Product Owners Selling on Etsy Marketplace</h4>
                </div>
            </div>
            <div className='flex justify-center align-center gap-8 mt-2.5 ml-40'>
                <div >
                    <h2 className='text-3xl tracking-wide font-bold word-spacing '> <span className='inline-block'>Skyrocket Your Etsy Business <img src={shopping_cart} alt='shopping cart' className='h-9 w-9 inline-block '></img></span>  By</h2>
                    <img src={underline} alt='underline' className='relative w-3/5 '></img>
                    <h2 className='text-3xl tracking-wide font-bold word-spacing '>
                        <span className='text-custom-color-1 inline-block word-spacing'>Finding The <img src={achievement} alt='achievement sign' className='inline-block h-9 w-9 relative -mt-2 '></img>  Winning Products </span>
                        <span> And</span>
                    </h2>
                    <h2 className='text-3xl tracking-wider font-bold word-spacing'>Copying Them For Your Instant Sucess</h2>
                </div>
            </div>
            <div className=' md:flex justify-center mt-6'>
                <div className='mt-6 rounded-lg flex justify-center flex-col'>

                    <p className='text-center bg-custom-color-1 border-t-2 rounded-t-md text-white '>Watch this short video to discover the secret method</p>
                    <iframe className=" w-full aspect-video border-b-2 rounded-b-md" src="https://www.youtube.com/embed/VIDEO_ID" title='video' allowFullScreen></iframe>
                </div>

                <div className='ml-10 flex justify-center'>
                    <ul className='list-none  mt-5'>
                        <li className='mb-1'> <img src={li1} alt='li1' className='inline-block h-10 w-10'></img>  Find <strong>Winning Products</strong> in less than 2
                            minutes</li>
                        <li className='mb-1'><img src={li2} alt='li2' className='inline-block h-10 w-10'></img> <p className='inline-block'> Check <strong>which Products</strong> are getting
                            <strong> Eyeballs </strong> </p>
                            <p className='relative ml-12'>and <strong>Attention</strong></p>
                        </li>
                        <li className='mb-1'><img src={li3} alt='li3' className='inline-block h-10 w-10'></img> Discover the <strong>Rising Starts in your
                            Niche</strong> </li>
                        <li className='mb-1'><img src={li4} alt='li4' className='inline-block h-10 w-10'></img> <p className='inline-block'><strong>Analyze any listing</strong> to see it's
                            <strong>perfomance</strong></p>  <p className='relative ml-12'>& insider <strong>hidden details</strong>
                            </p>
                        </li>
                        <li className='mb-1'><img src={li5} alt='li5' className='inline-block h-10 w-10'></img>  Find the <strong>Conversion Rate</strong> of the
                            Products</li>


                    </ul>
                </div>

            </div>
            <div className='mt-5 flex justify-center text-xl'>
                <div >
                    <p>Simple way to Reach Etsy Success in</p>
                    <p className='ml-5'>Minutes without Trial and Error</p>
                </div>
            </div>
            <div className='flex justify-center mt-5'>
                <div>
                    <img src={left_arrow} alt='left arrow'></img>
                </div>
                <div className='bg-custom-color-1 m-1 text-2xl px-5 py-3 border-2 rounded-lg'>
                    <p>Scale your Etsy Business Today</p>
                </div>
                <div>
                    <img src={right_arrow} alt='right arrow 2'></img>
                </div>

            </div>

            <div className='m-5 flex flex-col md:flex justify-center '>
                <div className='flex justify-center'>
                    <img src={graph} alt='graph' className='h-5 w-5'></img>
                    <p className='mx-1'> Unlocks Exponential Growth</p>

                </div>
                <div className='flex justify-center'>
                    <img src={shopping_cart_2} alt='shooping cart' className='h-5 w-5'></img>
                    <p className='mx-1 mr-2'> Buy once, Use Forever</p>
                </div>
                <div className='flex justify-center'>
                    <img src={cloud} alt='cloud' className='h-5 w-5'></img>
                    <p className='mx-1 mr-2'> Works on Cloud</p>
                </div>

            </div>


            <div className='md:flex md:justify-center'>
                <div className='flex justify-center mb-5'>
                    <img src={visa} alt='payment' ></img>

                </div>
                <div className='flex justify-center mb-5'>
                    <img src={secure} alt='payment' ></img>
                    <img src={days} alt='payment' ></img>

                </div>
            </div>


            <div className='flex justify-center mb-5'>
                <img src={mac} alt='payment' ></img>
                <img src={window} alt='payment' ></img>

            </div>



        </div>
    );
}

export default First;
