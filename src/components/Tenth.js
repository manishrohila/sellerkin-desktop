import React from 'react'
import line from "../img/money back.svg"
import image from "../img/money-back-guarantee 1.svg"
import correct from "../img/Mask group (1).svg"
import line2 from "../img/Vector 37 (2).svg"
import   "./Tenth.css"
import rectangle from "../img/Rectangle 323.svg"
import vector from "../img/Vector.svg"
const Tenth = () => {

    return (
        <div className='bg-custom-color-2 pt-10' >

            <div className='hidden md:flex gap-2  xl:text-5xl md:text-3xl items-center justify-center  font-sans font-extrabold md:relative md:left-28 xl:static'>
                <p className='relative -top-1'>7 Days </p>
                <div className='flex flex-col gap-2'>
                    <p><span className='text-custom-color-1'>Money Back Guarantee</span></p>
                    <img src={line} alt="img loading line" className='xl:w-11/12 md:w-8/12' />
                </div>
            </div>
            <div className='flex flex-col  md:hidden gap-2 text-4xl sm:text-5xl items-center justify-center pt-10 font-extrabold'>
                <p className='relative -top-1'>7 Days <span className='text-custom-color-1'>Money</span> </p>
                <div className='flex items-center justify-center '>
                    <p><span className='text-custom-color-1'>Back Guarantee</span></p>

                </div>
            </div>


            <div className='hidden md:flex  justify-center items-center gap-10 mt-10 font-serif md:px-20'>
                <div className='bg-custom-color flex flex-col gap-5 justify-start items-center xl:p-14 text-left xl:max-w-[35rem] md:max-w-xs md:text-[10px] xl:text-base md:p-8'>
                    <div className=''>
                        <p>"Sellerkin" comes with a Rock-solid promise: our
                        unbeatable 7-day, 100% Money Back Guarantee.</p>
                    </div>
                    <div>
                        <p>Buying  Sellerkin today is a worry-free journey. We're
                        the ones taking the risk, not you. If Sellerkin doesn't
                        meet your expectations, just drop us an email, and
                       we'll give your money back, no questions asked.</p>
                    </div>
                    <div>
                        <p>it's 100% safe, risk-free, and loaded with amazing
                        benefits. Your satisfaction is our priority!</p>
                    </div>

                </div>
                <div>
                    <img src={image} alt="img loading" className='md:w-[206px] md:h-[210px] xl:w-[324px] xl:h-[329px]'/>
                </div>
            </div>
            <div className='flex  flex-col md:hidden font-serif  justify-center items-center gap-10 mt-10'>
                <div className='z-10'>
                    <img src={image} alt="img loading " className='w-40 h-40' />
                </div>
                <div className='bg-custom-color flex flex-col gap-5 justify-start items-center p-14 text-left  relative -top-24 pt-20 z-0'>

                    <div >
                        <p className='flex items-center justify-center'>"Sellerkin" comes with a </p>
                        <p className='flex items-center justify-center'> Rock-solid promise: our</p>
                        <p className='flex items-center justify-center'>unbeatable 7-day, 100% </p>
                        <p className='flex items-center justify-center'> Money Back Guarantee.</p>
                    </div>
                    <div>
                        <p className='flex items-center justify-center'>Buying  Sellerkin today is a </p>
                        <p className='flex items-center justify-center'> worry-free journey. We're</p>
                        <p className='flex items-center justify-center'>the ones taking the risk,</p>
                        <p className='flex items-center justify-center'> not you. If Sellerkin doesn't</p>
                        <p className='flex items-center justify-center'>meet your expectations,</p>
                        <p className='flex items-center justify-center'>just drop us an email, and</p>
                        <p className='flex items-center justify-center'>we'll give your money </p>
                        <p className='flex items-center justify-center'> back, no questions asked.</p>
                    </div>
                    <div>
                        <p className='flex items-center justify-center'>it's 100% safe, risk-free, </p>
                        <p className='flex items-center justify-center'>and loaded with amazing </p>
                        <p className='flex items-center justify-center'>benefits. Your satisfaction </p>
                        <p className='flex items-center justify-center'>is our priority!</p>
                    </div>

                </div>

            </div>


            <div className='flex flex-col md:flex-row xl:text-5xl md:text-3xl text-3xl font-sans font-extrabold justify-center items-center -mt-10 md:mt-16 gap-2 md:gap-0' id='pricing'>
                <div className='flex flex-col  gap-3' >
                    <p className='text-custom-color-1 flex justify-center'>Pick the option</p>
                    <img src={line2} alt="img loading curve line" className=' hidden md:block relative md:w-[230px] md:h-[5px] xl:w-[398px]  ' />
                </div>
                <div className='relative bottom-2 '>
                    <p className=''> that's best for you </p>
                </div>
            </div>
            <div className=' hidden md:flex justify-center items-center mt-20 font-serif ' >
                <div className='w-5/6 mb-20'>
                    <table className='w-full table-rounded'>
                        <tr>
                            <th className="left-align" >Features</th>
                            <th>Basic</th>
                            <th className='heading-color text-custom-color-1 border-none'>Standard</th>
                            <th>Pro</th>
                        </tr>
                        <tr>
                            <td>Searchable Products via Category</td>

                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>Product Finder</td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>Listing Analyzer</td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>

                        </tr>
                        <tr>
                            <td>Shop Analyzer</td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>

                        </tr>
                        <tr>
                            <td><strong>Connect multiple shops</strong></td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>

                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <p>Keyword Finder-Related</p>
                                    <p>Keyword Ideas only</p>
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>

                        </tr>
                        <tr>
                            <td>Etsy Fee Calculator</td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>

                        </tr>
                        <tr>
                            <td>Team Members</td>
                            <td>
                                Add upto 2 Team Members
                            </td>
                            <td>
                                Add upto 6 Team Members

                            </td>
                            <td>
                                Add upto 12 Team Members

                            </td>

                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <p className='font-bold'>Use to Launch Unlimited</p>
                                    <p className='font-bold'>products (Priceless)</p>
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>

                        </tr>
                        <tr>
                            <td>
                                <strong>Searches per month for lifetime</strong>

                            </td>

                            <td>
                                <div className='flex justify-center items-center' >
                                    <p>500</p>
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <p>1500</p>
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <p>5000</p>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>Export to CSV</td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>Advanced Data Features</td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <p className='font-bold'>Premium metrics: conversion</p>
                                    <p className='font-bold'>rate, Total views + More</p>
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>

                        </tr>
                        <tr>
                            <td>Quick sort ability</td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>Advanced Filters</td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>

                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <p className='font-bold'>Additional Shop insights: Shop Age</p>
                                    <p className='font-bold'>Sales, Conversion Rate, Total views,</p>
                                    <p className='font-bold'>Sales per listings, Review count</p>
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>

                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <p className=''>Tag Analyzer - Can check</p>
                                    <p className=''>Tags of any listings in one click</p>
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>

                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <p className='font-bold'>Additional Listings Insights-</p>
                                    <p className='font-bold'>Quantity Left, Listing Age,</p>
                                    <p className='font-bold'>Favorites + more</p>
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <p className=''>All updates and upgrades for all</p>
                                    <p className=''>above mentioned features for lifetime</p>

                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td className='font-bold'>
                                Bonus 1: Listing Optimisation Guide

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>

                        </tr>
                        <tr>
                            <td className='font-bold'>
                                Bonus 2: Etsy Success Guidebook

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>

                        </tr>
                        <tr>
                            <td className='font-bold'>
                                Bonus 3: Private Community

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>
                            <td>
                                <div className='flex justify-center items-center' >
                                    <img src={correct} alt="tick" />
                                </div>

                            </td>

                        </tr>
                        <tr className='font-serif'>
                            <td>

                            </td>
                            <td>
                                <div className='text-center'>
                                    <p>Total Value: <span className='cut-text'>Subscription</span></p>
                                    <p className='text-2xl text-custom-color-1'>Today's Price:</p>
                                    <p className='text-2xl text-custom-color-1'>$97 <span className='cut-text'>$297</span></p>
                                    <p>One Time Payment</p>
                                    <button className='bg-custom-color-1 p-2 text-white'>Buy Now</button>
                                </div>
                            </td>
                            <td>
                                <div className='text-center'>
                                    <p>Total Value: <span className='cut-text'>Subscription</span></p>
                                    <p className='text-2xl text-custom-color-1'>Today's Price:</p>
                                    <p className='text-2xl text-custom-color-1'>$147 <span className='cut-text'>$597</span> </p>
                                    <p>One Time Payment</p>
                                    <button className='bg-custom-color-1 p-2 text-white'>Buy Now</button>
                                </div>
                            </td>

                            <td>
                                <div className='text-center'>
                                    <p>Total Value: <span className='cut-text'>Subscription</span></p>
                                    <p className='text-2xl text-custom-color-1'>Today's Price:</p>
                                    <p className='text-2xl text-custom-color-1'>$297 <span className='cut-text'>$997</span> </p>
                                    <p>One Time Payment</p>
                                    <button className='bg-custom-color-1 p-2 text-white'>Buy Now</button>
                                </div>
                            </td>

                        </tr>

                    </table>
                </div>

            </div>

            <div className='bg-custom-color font-serif flex flex-col justify-center mx-auto  w-[70%] md:hidden mb-5 mt-5 '>
                <div className='relative'>
                    <img src={rectangle} alt="" className='' />
                    <p className='absolute font-medium left-28 top-1 bottom-0 text-2xl text-white '>Basic</p>
                </div>
                <div className='flex flex-col justify-center ml-8 gap-4 mt-5'>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1' />
                        </div>
                        <div className='flex flex-col'>
                            <p>Searchable Products</p>
                            <p>via Category</p>
                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1' />
                        </div>
                        <div className='flex flex-col'>
                            <p>Product Finder</p>

                        </div>
                    </div>

                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1' />
                        </div>
                        <div className='flex flex-col'>
                            <p>Listing Analyzer</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1' />
                        </div>
                        <div className='flex flex-col'>
                            <p>shop Analyzer</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Connect multiple shops</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>keyword Finder:</p>
                            <p>Related Keyword</p>
                            <p>Ideas only</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Etsy Fee Calculator</p>
                            <p></p>
                       

                        </div>
                    </div>

                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'>Use to Launch Unlimited</p>
                            <p className='font-bold'>Products (Priceless) </p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'>Add upto 2</p>
                            <p className='font-bold'>Team Members </p>

                        </div>
                    </div>
                    
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'>500 Searches per</p>
                            <p className='font-bold'>month for lifetime </p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Export to CSV</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Advanced Data Features</p>

                        </div>
                    </div>

                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Premium metrics</strong></p>
                            <p><strong>conversion rate,</strong></p>
                            <p><strong>Total views + more</strong></p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Quick sort ability</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Advanced Filters</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Additional Shop</strong></p>
                            <p><strong>Insights:Shop Age,</strong></p>
                            <p><strong>Sales, Conversion Rate,</strong></p>
                            <p><strong>Total views, Sales per</strong></p>
                            <p><strong>listings,Review count</strong></p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Tag Analyzer- Can</p>
                            <p>check Tags of any</p>
                            <p>listing in one click</p>
                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Additional Listing</strong></p>
                            <p><strong> Insights- Quantity</strong></p>
                            <p>left, Listing Age,</p>
                            <p>Favorites+More</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>All updates and</p>
                            <p>Upgrades for all</p>
                            <p>above mentioned</p>
                            <p>features for lifetime</p>
                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Bonus 1: </strong> Listing </p>
                            <p>Optimization Guide</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Bonus 2: </strong> Etsy</p>
                            <p>Success Guidebook</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Bonus 3: </strong>Private</p>
                            <p>Community Access</p>

                        </div>
                    </div>
                    <div className='text-center mb-10 flex flex-col gap-2 '>
                        <p className='text-2xl'>Total Value: <span className='cut-text'>Subscription</span></p>
                        <p className='text-2xl text-custom-color-1 font-bold'>Today's Price:</p>
                        <p className='text-2xl text-custom-color-1 font-bold'>$97 <span className='cut-text'>$297</span></p>
                        <p className='text-2xl'>One Time Payment</p>
                        <button className='bg-custom-color-1 w-1/2 mx-auto p-2 text-xl text-white rounded-md font-bold'>Buy Now</button>
                    </div>
                </div>


            </div>
            <div className='bg-custom-color font-serif  flex flex-col justify-center mx-auto  w-[70%] md:hidden mb-5 mt-10'>
                <div className='relative'>
                    <img src={rectangle} alt="" />
                    <p className='absolute left-24 font-medium top-1 bottom-0 text-2xl text-white'>Standard</p>
                </div>
                <div className='flex flex-col justify-center ml-8 gap-4 mt-5'>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1' />
                        </div>
                        <div className='flex flex-col'>
                            <p>Searchable Products</p>
                            <p>via Category</p>
                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1' />
                        </div>
                        <div className='flex flex-col'>
                            <p>Product Finder</p>

                        </div>
                    </div>

                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1' />
                        </div>
                        <div className='flex flex-col'>
                            <p>Listing Analyzer</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1' />
                        </div>
                        <div className='flex flex-col'>
                            <p>shop Analyzer</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Connect multiple shops</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>keyword Finder:</p>
                            <p>Related Keyword</p>
                            <p>Ideas only</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Etsy Fee Calculator</p>
                            

                        </div>
                    </div>
                    
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'>Use to Launch Unlimited</p>
                            <p className='font-bold'>Products (Priceless) </p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'>1500 Searches per</p>
                            <p className='font-bold'>month for lifetime </p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'>Add upto 6</p>
                            <p className='font-bold'>Team Members </p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Export to CSV</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Advanced Data Features</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Premium metrics</strong></p>
                            <p><strong>conversion rate,</strong></p>
                            <p><strong>Total views + more</strong></p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Quick Sort ability</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Advanced Filters</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Additional Shop</strong></p>
                            <p><strong>Insights:Shop Age,</strong></p>
                            <p><strong>Sales, Conversion Rate,</strong></p>
                            <p><strong>Total views, Sales per</strong></p>
                            <p><strong>listings,Review count</strong></p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Tag Analyzer- Can</p>
                            <p>check Tags of any</p>
                            <p>listing in one click</p>
                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Additional Listing</strong></p>
                            <p><strong> Insights- Quantity</strong></p>
                            <p>left, Listing Age,</p>
                            <p>Favorites+More</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>All updates and</p>
                            <p>Upgrades for all</p>
                            <p>above mentioned</p>
                            <p>features for lifetime</p>
                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Bonus 1: </strong> Listing </p>
                            <p>Optimization Guide</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Bonus 2: </strong> Etsy</p>
                            <p>Success Guidebook</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Bonus 3: </strong>Private</p>
                            <p>Community Access</p>

                        </div>
                    </div>
                    <div className='text-center mb-10 flex flex-col gap-2 '>
                        <p className='text-2xl'>Total Value: <span className='cut-text'>Subscription</span></p>
                        <p className='text-2xl text-custom-color-1 font-bold'>Today's Price:</p>
                        <p className='text-2xl text-custom-color-1 font-bold'>$147 <span className='cut-text'>$597</span></p>
                        <p className='text-2xl'>One Time Payment</p>
                        <button className='bg-custom-color-1 w-1/2 mx-auto p-2 text-xl text-white rounded-md font-bold'>Buy Now</button>
                    </div>
                </div>


            </div>
            <div className='bg-custom-color font-serif  flex flex-col justify-center mx-auto  w-[70%] md:hidden mb-10 mt-10'>
                <div className='relative'>
                    <img src={rectangle} alt="" />
                    <p className='absolute left-32 top-1 bottom-0 text-2xl text-white font-medium'>Pro</p>
                </div>
                <div className='flex flex-col justify-center ml-8 gap-4 mt-5'>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1' />
                        </div>
                        <div className='flex flex-col'>
                            <p>Searchable Products</p>
                            <p>via Category</p>
                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1' />
                        </div>
                        <div className='flex flex-col'>
                            <p>Product Finder</p>

                        </div>
                    </div>

                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1' />
                        </div>
                        <div className='flex flex-col'>
                            <p>Listing Analyzer</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1' />
                        </div>
                        <div className='flex flex-col'>
                            <p>shop Analyzer</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Connect multiple shops</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>keyword Finder:</p>
                            <p>Related Keyword</p>
                            <p>Ideas only</p>

                        </div>
                    </div>
                    
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Etsy Fee Calculator</p>
                            

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'>Use to Launch Unlimited</p>
                            <p className='font-bold'>Products (Priceless) </p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'>5000 Searches per</p>
                            <p className='font-bold'>month for lifetime </p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'>Add upto 12</p>
                            <p className='font-bold'>Team Members </p>

                        </div>
                    </div>

                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Export to CSV</p>

                        </div>
                    </div>
                    
                    
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Advanced Data Features</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Premium metrics</strong></p>
                            <p><strong>conversion rate,</strong></p>
                            <p><strong>Total views + more</strong></p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Quick Sort ability</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Advanced Filters</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Additional Shop</strong></p>
                            <p><strong>Insights:Shop Age,</strong></p>
                            <p><strong>Sales, Conversion Rate,</strong></p>
                            <p><strong>Total views, Sales per</strong></p>
                            <p><strong>listings,Review count</strong></p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>Tag Analyzer- Can</p>
                            <p>check Tags of any</p>
                            <p>listing in one click</p>
                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Additional Listing</strong></p>
                            <p><strong> Insights- Quantity</strong></p>
                            <p>left, Listing Age,</p>
                            <p>Favorites+More</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p>All updates and</p>
                            <p>Upgrades for all</p>
                            <p>above mentioned</p>
                            <p>features for lifetime</p>
                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Bonus 1: </strong> Listing </p>
                            <p>Optimization Guide</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Bonus 2: </strong> Etsy</p>
                            <p>Success Guidebook</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" className='relative top-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Bonus 3: </strong>Private</p>
                            <p>Community Access</p>

                        </div>
                    </div>
                    <div className='text-center mb-10 flex flex-col gap-2 '>
                        <p className='text-2xl'>Total Value: <span className='cut-text'>Subscription</span></p>
                        <p className='text-2xl text-custom-color-1 font-bold'>Today's Price:</p>
                        <p className='text-2xl text-custom-color-1 font-bold'>$297 <span className='cut-text'>$997</span></p>
                        <p className='text-2xl'>One Time Payment</p>
                        <button className='bg-custom-color-1 w-1/2 mx-auto p-2 text-xl text-white rounded-md font-bold'>Buy Now</button>
                    </div>
                </div>


            </div>
            

        </div>
    )
}

export default Tenth
