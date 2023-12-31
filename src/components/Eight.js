import React from 'react'
import first from "../img/Group 241.svg"
import second from "../img/Group 245.svg"
import third from '../img/Group 250.svg'
import underline from "../img/Vector 37.svg"
import vector from "../img/Vector.svg"
import arrow1 from "../img/Vector 35.svg"
import arrow2 from "../img/Vector 38.svg"
import left_arrow from "../img/mingcute_arrows-right-line.png";
import right_arrow from "../img/mingcute_arrows-right-line (1).png";
import days from "../img/7days1.svg";
import visa1 from "../img/toppng 4.svg"
import secure from "../img/lock1.svg";
import logo from "../img/logo.svg";
import wrong from "../img/wrong.svg"
import correct from "../img/Mask group (1).svg"
import small_right from "../img/mingcute_arrows-right-line (1).svg"
import small_left from "../img/Group.svg"
import './Eight.css'
const Eight = () => {
    return (
        <div className='bg-custom-color-2 md:pt-10 -mt-8'>
            <div className='xl:text-5xl md:text-3xl font-bold font-sans  flex-col justify-center items-center hidden md:flex '>
                <div>
                    <p>Here is how Sellerkin makes it <span className='text-custom-color-1'>easy</span> </p>
                </div>

                <div className='flex text-custom-color-1 md:relative md:left-28 xl:left-0'>
                    <div>
                        <p>for you </p>
                    </div>
                    <div className='flex flex-col gap-2 '>
                        <p> &nbsp; to find winning products</p>
                        <img src={underline} alt="" className='xl:w-full md:w-7/12 relative left-5' />
                    </div>

                </div>
            </div>
            <div className='text-4xl flex font-bold font-sans    flex-col justify-center items-center md:hidden '>

                <p>Here is how </p>
                <p>Sellerkin makes it  </p>
                <p className='text-custom-color-1'>easy for you to find</p>
                <p className='text-custom-color-1'>winning products</p>


            </div>


            <div className='hidden justify-center font-serif items-center mt-8 md:flex'>
                <p>And helps you to start having <strong>sales in weeks </strong> & helps you to <strong>grow</strong> faster</p>
            </div>
            <div className='flex flex-col justify-center font-serif items-center mt-8 md:hidden'>
                <p>And helps you to start having <strong>sales</strong></p>
                <p><strong> in weeks </strong> & helps you to <strong>grow</strong> faster</p>
            </div>

            <div className='hidden mt-20 justify-center items-center gap-16 md:flex font-serif'>
                <div>
                    <div className='font-bold xl:text-2xl md:text-sm'>
                        <p> <span className='text-custom-color-1'>Product Finder:</span> "Discover Winning Etsy</p>
                        <p>Products in Seconds with Product Finder!"</p>
                    </div>
                    <div className='mt-4 xl:text-lg md:text-xs'>
                        <p>"Product Finder is your <strong>golden ticket</strong> to Etsy success!</p>
                        <p>Find top-selling products effortlessly and skyrocket</p>
                        <p>your business by knowing what works.</p>
                    </div>
                    <div className='mt-4 xl:text-lg md:text-xs'>
                        <p>Say goodbye to guesswork and hello to</p>
                        <p><strong>instant success!"</strong></p>
                    </div>
                    <div className='mt-4 xl:text-lg md:text-xs'>
                        <div className='flex gap-2 mt-1'>
                            <img src={vector} alt="dot" />
                            <p>Rapid Product Discovery for effortless success</p>
                        </div>
                        <div className='flex gap-2 mt-1'>
                            <img src={vector} alt="dot" />
                            <p>Market Insights to save your time</p>
                        </div>
                        <div className='flex gap-2 mt-1'>
                            <img src={vector} alt="dot" />
                            <p>Trending Products list to help you launch faster</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={first} alt="image loading"  className='md:h-[319px] md:w-[299px] xl:w-full xl:h-full'/>
                </div>
            </div>
            {/* Mobile version first section */}
            <div className='flex flex-col mt-10 p-10 font-serif justify-center items-center gap-4 md:hidden bg-custom-color '>

                <div className='font-semibold text-lg sm:text-xl flex-col justify-center items-center'>
                    <p className='flex justify-center'> <span className='text-custom-color-1'>Product Finder: </span> &nbsp;"Discover </p>
                    <p className='flex justify-center'> Winning Etsy Products in</p>
                    <p className='flex justify-center'> Seconds with Product Finder!"</p>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={first} alt="image loading" className='w-4/5 h-4/5' />
                </div>
                <div className='mt-2 text-sm'>
                    <div className='flex justify-center'>
                    <p >"Product Finder is your <strong>golden ticket</strong> </p>
                    </div>
                    
                    <p className='flex justify-center'>to Etsy success! Find top-selling</p>
                    <p className='flex justify-center'> products effortlessly and skyrocket</p>
                    <p className='flex justify-center'>your business by knowing </p>
                    <p className='flex justify-center'> what works.</p>
                </div>
                <div className='mt-2 text-sm'>
                    <p className='flex justify-center'>Say goodbye to guesswork and  </p>
                    <p className='flex justify-center'>hello to &nbsp; <strong>instant success!"</strong></p>
                </div>
                <div className='mt-2 text-sm'>
                    <div className='flex gap-2 mt-1'>
                        <div className='relative top-1'>
                            <img src={vector} alt="dot" />
                        </div>

                        <div>
                            <p >Rapid Product Discovery for </p>
                            <p> effortless success</p>
                        </div>

                    </div>
                    <div className='flex gap-2 mt-1'>
                        <img src={vector} alt="dot" />
                        <p>Market Insights to save your time</p>
                    </div>
                    <div className='flex gap-2 mt-1'>
                        <img src={vector} alt="dot" />
                        <div>
                            <p>Trending Products list to help you </p>
                            <p> launch faster</p>
                        </div>

                    </div>
                </div>

            </div>
            <div className='md:flex hidden justify-center'>
                <img src={arrow1} alt="arrow loading" className='md:w-[58px] md:h-[58px]   xl:w-[145px] xl:h-[119px]' />
            </div>
            <div className='md:flex hidden xl:mt-10 font-serif justify-center items-center gap-16'>
                <div>
                    <img src={second} alt="image loading" className='md:h-[319px] md:w-[299px] xl:w-full xl:h-full'/>
                </div>
                <div>
                    <div className='font-bold xl:text-2xl  md:text-xs'>
                        <p> <span className='text-custom-color-1'>Shop Analyzer:</span> "Beat your Etsy Competition</p>
                        <p>with Shop Analyzer's Insights!"</p>
                    </div>
                    <div className='mt-4 xl:text-lg md:text-xs'>
                        <p>"Shop Analyzer empowers you to analyze your</p>
                        <p>competitors and gain a competitive edge on Etsy</p>

                    </div>
                    <div className='mt-4 xl:text-lg md:text-xs'>
                        <p><strong>Uncover their sales stats, conversion rates, and</strong></p>
                        <p>more to become the <strong>biggest player </strong> in your niche.</p>
                        <p>It's time to <strong className='underline '>lead</strong>, not follow!"</p>
                    </div>
                    <div className='mt-4 xl:text-lg md:text-xs'>
                        <div className='flex gap-2 mt-1'>
                            <img src={vector} alt="dot" />
                            <p>Competitor Insights to give you a competitive edge.</p>
                        </div>
                        <div className='flex gap-2 mt-1 xl:text-lg md:text-xs'>
                            <img src={vector} alt="dot" className='relative -top-2' />
                            <div>
                                <p>Discover what's working for top-performing shops</p>
                                <p>and copy for instant success.</p>
                            </div>
                        </div>
                        <div className='flex gap-2 mt-1'>
                            <img src={vector} alt="dot" className='relative -top-3' />
                            <div>
                                <p>Get detailed data on how competitors are achieving</p>
                                <p>their success and copy it for your own growth.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Mobile version second section */}
            <div className='flex flex-col mt-5 p-10 justify-center font-serif items-center gap-4 md:hidden'>


                <div className='font-semibold text-lg sm:text-xl'>
                    <p> <span className='text-custom-color-1'>Shop Analyzer:</span> "Beat your Etsy </p>
                    <p className='flex justify-center'>Competition with Shop</p>
                    <p className='flex justify-center'> Analyzer's Insights!"</p>
                </div>
                <div className='flex justify-center mt-4'>
                    <img src={second} alt="image loading" className='w-4/5 h-4/5' />
                </div>
                <div className='mt-4 text-sm'>
                    <p className='flex justify-center'>"Shop Analyzer empowers you to </p>
                    <p className='flex justify-center'> analyze your competitors and gain </p>
                    <p className='flex justify-center'>a competitive edge on Etsy</p>

                </div>
                <div className='mt-4 text-sm sm:text-lg'>
                    <p className='flex justify-center'><strong>Uncover their sales stats, </strong> </p>
                    <p className='flex justify-center'><strong> conversion rates, and &nbsp;</strong> more to</p>
                    <div className='flex justify-center'>
                        <p > become the <strong>biggest player </strong> in your </p>
                    </div>

                    <p className='flex justify-center'>niche. It's time to &nbsp; <strong className='underline '>lead</strong>, not follow!"</p>
                </div>
                <div className='mt-4 flex flex-col gap-2 text-sm'>
                    <div className='flex gap-2 mt-1'>
                        <img src={vector} alt="dot" className='relative -top-2' />
                        <div>
                            <p>Competitor Insights to give </p>
                            <p> you a competitive edge.</p>
                        </div>

                    </div>
                    <div className='flex gap-2 mt-1'>
                        <img src={vector} alt="dot" className='relative -top-5' />
                        <div>
                            <p>Discover what's working for top- </p>
                            <p>performing shops and copy for</p>
                            <p> instant success.</p>
                        </div>
                    </div>
                    <div className='flex gap-2 mt-1'>
                        <img src={vector} alt="dot" className='relative -top-8' />
                        <div>
                            <p>Get detailed data on how </p>
                            <p>competitors are achieving their</p>
                            <p> success and copy it for your </p>
                            <p> own growth.</p>
                        </div>
                    </div>
                </div>


            </div>
            <div className='md:flex hidden justify-center'>
                <img src={arrow2} alt="arrow loading"  className='md:w-[58px] md:h-[58px]   xl:w-[145px] xl:h-[119px]'/>
            </div>
            <div className='md:flex hidden xl:mt-10  justify-center font-serif items-center gap-16'>
                <div>
                    <div className='font-bold xl:text-2xl  md:text-xs'>
                        <p> <span className='text-custom-color-1'>Listing Analyzer:</span> "Sell Faster and Smarter</p>
                        <p>with Listing Analyzer's Magic!"</p>
                    </div>
                    <div className='mt-4 xl:text-lg md:text-xs'>

                        <p>"Listing Analyzer is your secret weapon to <strong>stand</strong></p>
                        <p><strong>out on Etsy</strong></p>
                    </div>
                    <div className='mt-4 xl:text-lg md:text-xs'>
                        <p>Analyze competitors' listings, <strong>see quantities left, </strong>and</p>
                        <p>watch your own listings shine and rank higher. Crush</p>
                        <p>the competition and be the Etsy star"</p>
                    </div>
                    <div className='mt-4 xl:text-lg md:text-xs'>
                        <div className='flex gap-2 mt-1'>
                            <img src={vector} alt="dot" className='md:w-3 md:h-3 xl:w-[16px] xl:h-[24px] md:relative md:top-1 xl:top-0'/>
                            <div>
                                <p>Analyze competitor listings to assess their</p>
                                <p>effectiveness and visibility</p>
                            </div>

                        </div>
                        <div className='flex gap-2 mt-1 xl:text-lg md:text-xs'>
                            <img src={vector} alt="dot" className='md:w-3 md:h-3 xl:w-[16px] xl:h-[24px] md:relative md:top-1 xl:top-0'  />
                            <div>
                                <p>Monitor the <strong className='underline'>quantity</strong> of a product <span className='underline font-semibold'>left in stock</span> to</p>
                                <p>stay informed about market dynamics</p>
                            </div>
                        </div>
                        <div className='flex gap-2 mt-1 xl:text-lg md:text-xs'>
                            <img src={vector} alt="dot" className='md:w-3 md:h-3 xl:w-[16px] xl:h-[24px] md:relative md:top-1 xl:top-0'/>
                            <div>
                                <p>Optimize your listings for better <strong>visibility</strong> and</p>
                                <p>higher <strong>ranking</strong> in the marketplace</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={third} alt="image loading"  className='md:h-[319px] md:w-[299px] xl:w-full xl:h-full'/>
                </div>
            </div>
            {/* Mobile version Third  section */}
            <div className='flex flex-col bg-custom-color p-10 font-serif justify-center md:hidden items-center gap-4'>

                <div className='font-semibold text-lg sm:text-xl'>
                    <p >
                        <span className='text-custom-color-1'>Listing Analyzer:</span> "Sell Faster  </p>
                    <p className='flex justify-center'> and Smarter with Listing</p>
                    <p className='flex justify-center'> Analyzer's Magic!"</p>
                </div>
                <div className='flex justify-center mt-4'>
                    <img src={third} alt="image loading" className='w-4/5 h-4/5' />
                </div>
                <div className='mt-4 text-sm'>

                    <p className='flex justify-center'>"Listing Analyzer is your secret </p>
                    <p className='flex justify-center'> weapon to &nbsp; <strong>stand out on Etsy.</strong></p>

                </div>
                <div className='mt-4 text-sm '>
                    <p className='flex justify-center'>Analyze competitors' listings, &nbsp; <strong>see </strong> </p>
                    <div  className='flex justify-center'>
                    <p><strong> quantities left, </strong> and watch your own</p>
                    </div>
                    
                    <p className='flex justify-center'> listings shine and rank higher. Crush</p>
                    <p className='flex justify-center'>the competition and be the Etsy star"</p>
                </div>
                <div className='mt-4 text-sm'>
                    <div className='flex gap-2 mt-1 '>
                        <img src={vector} alt="dot" className='relative -top-5' />
                        <div>
                            <p className='text-sm md:text-lg sm:text-xl'>Analyze competitor listings to assess </p>
                            <p className='text-sm md:text-lg sm:text-xl'>their effectiveness and </p>
                            <p className='text-sm md:text-lg sm:text-xl'> visibility</p>
                        </div>

                    </div>
                    <div className='flex gap-2 mt-1 text-sm'>
                        <img src={vector} alt="dot" className='relative -top-5' />
                        <div>
                            <p className='text-sm md:text-lg sm:text-xl'>Monitor the <strong className='underline'>quantity</strong> of a </p>
                            <p className='text-sm md:text-lg sm:text-xl'> product <span className='underline'>left in stock</span> to stay</p>
                            <p className='text-sm md:text-lg sm:text-xl'> informed about market dynamics</p>
                        </div>
                    </div>
                    <div className='flex gap-2 mt-1'>
                        <img src={vector} alt="dot" className='relative -top-5' />
                        <div>
                            <p className='text-sm md:text-lg sm:text-xl'>Optimize your listings for better </p>
                            <p className='text-sm md:text-lg sm:text-xl'><strong>visibility</strong> and higher <strong>ranking</strong> in </p>
                            <p className='text-sm md:text-lg sm:text-xl'> the marketplace</p>
                        </div>
                    </div>
                </div>


            </div>
            <div className="flex justify-center mt-5 font-sans">

                <div>
                    <img src={left_arrow} alt="left arrow" className="md:block hidden" ></img>
                </div>
                <div>
                    <img src={small_right} alt="left arrow" className="md:hidden relative top-7" ></img>
                </div>
                <div className="bg-custom-color-1 m-1 text-xl font-bold px-16 md:px-5 py-3 border-2 rounded-lg flex justify-center flex-col md:flex md:flex-row text-white gap-2">
                    <p className="">Scale Your Etsy</p>
                    <p>Business Today</p>
                </div>
                <div>
                    <img src={right_arrow} alt="right arrow 2" className="md:block hidden"></img>
                </div>
                <div>
                    <img src={small_left} alt="left arrow" className="md:hidden relative top-7" ></img>
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
            <div className='xl:text-5xl md:text-3xl font-sans mt-8 md:flex hidden flex-col justify-center items-center gap-3 font-bold'>
                <div>
                    <p>
                        Here is how Sellerkin
                    </p>
                </div>

                <div className='text-custom-color-1 flex flex-col justify-center items-center gap-3'>
                    <p>compares to the rest</p>
                    <img src={underline} alt="underline loading" className='xl:w-4/5 md:w-3/5' />
                </div>

            </div>
            {/* Mobile version */}
            <div className='text-4xl font-sans mt-8 flex flex-col justify-center items-center md:hidden gap-3 font-bold'>

                <p>
                    Here is how </p>
                <p className='text-custom-color-1'>Sellerkin compares </p>
                <p className='text-custom-color-1'>to the rest</p>


            </div>

            <div className='md:flex hidden justify-center items-center mt-10 '>
                <table className='w-3/5 table1 '>
                    <tr>
                        <th className='text-left pl-7 font-semibold'>Features</th>
                        <th>
                            <div className='flex middle justify-center items-center'>
                                <img src={logo} alt="" />
                                <p className='text-xl font-semibold pr-12'>SellerKin</p>
                            </div>
                        </th>
                        <th className='font-semibold'>Other Tools</th>
                    </tr>
                    <tr>
                        <td>Pricing</td>
                        <td className='flex justify-center items-center' >$97 One time</td>
                        <td >
                            <div className='flex justify-center items-center' >
                                <p>Subscription based</p>
                            </div></td>
                    </tr>
                    <tr>
                        <td>Money back Guarantee</td>
                        <td className='flex justify-center items-center' >7 Days Guarantee</td>
                        <td >
                            <div className='flex justify-center items-center' >
                                <img src={wrong} alt="image" />
                            </div>

                        </td>
                    </tr>
                    <tr>
                        <td>Lifetime Access</td>
                        <td >
                            <div className='flex justify-center items-center'>
                                <img src={correct} alt="image" />
                            </div>

                        </td>
                        <td >
                            <div className='flex justify-center items-center' >
                                <img src={wrong} alt="image" />
                            </div>

                        </td>
                    </tr>
                    
                    <tr>
                        <td>Rights</td>
                        <td className='flex justify-center items-center'>Standard Rights</td>
                        <td >
                            <div className='flex justify-center items-center'>
                                <p>Standard Rights</p>
                            </div></td>
                    </tr>
                    <tr>
                        <td>Advanced Analytics</td>
                        <td>
                            <div className='flex justify-center items-center' >
                                <img src={correct} alt="image" />
                            </div>

                        </td>
                        <td >
                            <div className='flex justify-center items-center' >
                                <img src={wrong} alt="image" />
                            </div>

                        </td>
                    </tr>
                </table>
            </div>

            {/* Mobile version of table */}
            <div className='flex justify-center md:hidden items-center mt-10 '>
                <table className='w-3/5 table1 '>
                    <tr>
                        <th className="">Features</th>
                        <th>
                            <div className='flex middle justify-center items-center'>
                                <img src={logo} alt="" className='hidden' />
                                <p className='text-xl'>SellerKin</p>
                            </div>
                        </th>
                        <th>Other Tools</th>
                    </tr>
                    <tr>
                        <td>Pricing</td>
                        <td className='flex justify-center items-center' >$97 One time</td>
                        <td >
                            <div className='flex justify-center items-center' >
                                <p>Subscription based</p>
                            </div></td>
                    </tr>
                    <tr>
                        <td>Money back Guarantee</td>
                        <td className='flex justify-center items-center' >7 Days Guarantee</td>
                        <td >
                            <div className='flex justify-center items-center' >
                                <img src={wrong} alt="image" />
                            </div>

                        </td>
                    </tr>
                    <tr>
                        <td>Lifetime Access</td>
                        <td >
                            <div className='flex justify-center items-center'>
                                <img src={correct} alt="image" />
                            </div>

                        </td>
                        <td >
                            <div className='flex justify-center items-center' >
                                <img src={wrong} alt="image" />
                            </div>

                        </td>
                    </tr>
                    
                    <tr>
                        <td>Rights</td>
                        <td className='flex justify-center items-center'>Standard Rights</td>
                        <td >
                            <div className='flex justify-center items-center'>
                                <p>Standard Rights</p>
                            </div></td>
                    </tr>
                    <tr>
                        <td>Advanced Analytics</td>
                        <td>
                            <div className='flex justify-center items-center' >
                                <img src={correct} alt="image" />
                            </div>

                        </td>
                        <td >
                            <div className='flex justify-center items-center' >
                                <img src={wrong} alt="image" />
                            </div>

                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Eight
