import React from 'react';
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
import payment from "../img/payment.png"

function First() {
    return (
        <div className='bg-custom-color pb-10'>
            <div>
                <nav className='flex px-10 py-6'>
                    <div className='flex ml-40'>
                        <img src={logo} alt='SellerKin logo' className='relative -mt-4'></img>
                        <span className='pr-20 font-bold' >SellerKin</span>
                    </div>

                    <ul className='flex justify-center list-none ml-48 space-x-5'>

                        <li className=''>How it Works</li>
                        <li>Testimonials</li>
                        <li>Pricing</li>

                    </ul>
                    <div className='flex ml-14 space-x-10'>
                        <button className="border-2 rounded border-custom-color-1 px-2.5 py-0.5">Log in</button>
                        <button className="border-2 rounded border-custom-color-1 bg-custom-color-1 px-2.5 py-0.5">Get Started</button>
                    </div>

                </nav>
            </div>
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
                    <h2 className='text-3xl tracking-wide font-bold word-spacing ml-12'> <span className='inline-block'>Skyrocket Your Etsy Business <img src={shopping_cart} alt='shopping cart' className='h-9 w-9 inline-block '></img></span>  By</h2>
                    <img src={underline} alt='underline' className='relative w-3/5 ml-12'></img>
                    <h2 className='text-3xl tracking-wide font-bold word-spacing ml-8'>
                        <span className='text-custom-color-1 inline-block word-spacing'>Finding The <img src={achievement} alt='achievement sign' className='inline-block h-9 w-9 relative -mt-2 '></img>  Winning Products </span>
                        <span> And</span>
                    </h2>
                    <h2 className='text-3xl tracking-wider font-bold word-spacing ml-5'>Copying Them For Your Instant Sucess</h2>
                </div>
            </div>
            <div className='flex justify-center mt-6'>
                <div className='mt-6 rounded-lg'>

                    <p className='text-center bg-custom-color-1 border-t-2 rounded-t-md text-white'>Watch this short video to discover the secret method</p>
                    <iframe class="video-frame" width="460" height="250" src="https://www.youtube.com/embed/VIDEO_ID"
                        frameborder="0" allowfullscreen></iframe>

                </div>
                <div className='ml-10'>
                    <ul className='list-none  mt-5'>
                        <li className='mb-1'> <img src={li1} className='inline-block h-10 w-10'></img>  Find <strong>Winning Products</strong> in less than 2
                            minutes</li>
                        <li className='mb-1'><img src={li2} className='inline-block h-10 w-10'></img> <p className='inline-block'> Check <strong>which Products</strong> are getting
                            <strong> Eyeballs </strong> </p>
                            <p className='relative ml-12'>and <strong>Attention</strong></p>
                        </li>
                        <li className='mb-1'><img src={li3} className='inline-block h-10 w-10'></img> Discover the <strong>Rising Starts in your
                            Niche</strong> </li>
                        <li className='mb-1'><img src={li4} className='inline-block h-10 w-10'></img> <p className='inline-block'><strong>Analyze any listing</strong> to see it's
                            <strong>perfomance</strong></p>  <p className='relative ml-12'>& insider <strong>hidden details</strong>
                            </p>
                        </li>
                        <li className='mb-1'><img src={li5} className='inline-block h-10 w-10'></img>  Find the <strong>Conversion Rate</strong> of the
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
                    <img src={left_arrow}></img>
                </div>
                <div className='bg-custom-color-1 m-1 text-2xl px-5 py-3 border-2 rounded-lg'>
                    <p>Scale your Etsy Business Today</p>
                </div>
                <div>
                    <img src={right_arrow}></img>
                </div>

            </div>

            <div className='m-5 flex justify-center '>
                <img src={shopping_cart_2}></img>
                <p className='mx-1 mr-2'> Buy once, Use Forever</p>
                <img src={cloud}></img>
                <p className='mx-1 mr-2'> Works on Cloud</p>
                <img src={graph}></img>
                <p className='mx-1'> Unlocks Exponential Growth</p>

            </div>

            <div className='flex justify-center'>
                <img src={payment} alt='payment' ></img>
                
            </div>



        </div>
    );
}

export default First;
