import React, { Component } from 'react'
import line from "../img/money back.svg"
import image from "../img/money-back-guarantee 1.svg"
import correct from "../img/Mask group.svg"

import Slider from "react-slick";
import "./Tenth.css"
import rectangle from "../img/Rectangle 323.svg"
import vector from "../img/Vector.svg"
const Tenth = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='bg-custom-color-2'>

            <div className='hidden md:flex gap-2 text-5xl items-center justify-center'>
                <p className='relative -top-1'>7 Days </p>
                <div className='flex flex-col '>
                    <p><span className='text-custom-color-1'>Money Back Guarantee</span></p>
                    <img src={line} alt="image loading line" className='w-10/12' />
                </div>
            </div>
            <div className='flex flex-col  md:hidden gap-2 text-5xl items-center justify-center'>
                <p className='relative -top-1'>7 Days <span className='text-custom-color-1'>Money</span> </p>
                <div className='flex items-center justify-center '>
                    <p><span className='text-custom-color-1'>Back Guarantee</span></p>

                </div>
            </div>


            <div className='hidden md:flex  justify-center items-center gap-10 mt-10'>
                <div className='bg-custom-color flex flex-col gap-5 justify-start items-center p-14 text-left shadow-2xl'>
                    <div className=''>
                        <p>"Sellerkin" comes with a Rock-solid promise: our</p>
                        <p>unbeatable 7-day, 100% Money Back Guarantee.</p>
                    </div>
                    <div>
                        <p>Buying  Sellerkin today is a worry-free journey. We're</p>
                        <p>the ones taking the risk, not you. If Sellerkin doesn't</p>
                        <p>meet your expectations, just drop us an email, and</p>
                        <p>we'll give your money back, no questions asked.</p>
                    </div>
                    <div>
                        <p>it's 100% safe, risk-free, and loaded with amazing </p>
                        <p>benefits. Your satisfaction is our priority!</p>
                    </div>

                </div>
                <div>
                    <img src={image} alt="image loading" />
                </div>
            </div>
            <div className='flex  flex-col md:hidden  justify-center items-center gap-10 mt-10'>
                <div className='z-10'>
                    <img src={image} alt="image loading " className='w-40 h-40' />
                </div>
                <div className='bg-custom-color flex flex-col gap-5 justify-start items-center p-14 text-left shadow-2xl relative -top-24 pt-20 z-0'>

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


            <div className='flex flex-col md:flex-row text-5xl  justify-center items-center -mt-10 md:mt-10 '>
                <div className='flex flex-col gap-3' >
                    <p className='text-custom-color-1'>Pick the option</p>
                    <img src={line} alt="image loading curve line" className='w-80 hidden md:block' />
                </div>
                <div className='relative bottom-2'>
                    <p className=''>that's best for you </p>
                </div>
            </div>
            <div className=' hidden md:flex justify-center items-center mt-20 '>
                <div className='w-5/6 mb-20'>
                    <table className='w-full'>
                        <tr>
                            <th>Features</th>
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
                            <td>Export data</td>
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
                            <td>Adavanced data feartures</td>
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
                        <tr className=''>
                            <td>

                            </td>
                            <td>
                                <div className='text-center'>
                                    <p>Total Value: <span className='cut-text'>Subscription</span></p>
                                    <p className='text-2xl text-custom-color-1'>Today's Price:</p>
                                    <p className='text-2xl text-custom-color-1'>$97 $497</p>
                                    <p>One Time Payment</p>
                                    <button className='bg-custom-color-1 p-2 text-white'>Buy Now</button>
                                </div>
                            </td>
                            <td>
                                <div className='text-center'>
                                    <p>Total Value: <span className='cut-text'>Subscription</span></p>
                                    <p className='text-2xl text-custom-color-1'>Today's Price:</p>
                                    <p className='text-2xl text-custom-color-1'>$147 <span className='cut-text'>$497</span> </p>
                                    <p>One Time Payment</p>
                                    <button className='bg-custom-color-1 p-2 text-white'>Buy Now</button>
                                </div>
                            </td>

                            <td>
                                <div className='text-center'>
                                    <p>Total Value: <span className='cut-text'>Subscription</span></p>
                                    <p className='text-2xl text-custom-color-1'>Today's Price:</p>
                                    <p className='text-2xl text-custom-color-1'>$297 <span className='cut-text'>$1497</span> </p>
                                    <p>One Time Payment</p>
                                    <button className='bg-custom-color-1 p-2 text-white'>Buy Now</button>
                                </div>
                            </td>

                        </tr>

                    </table>
                </div>

            </div>

            <div className='bg-custom-color w-4/5 md:hidden'>
                <div className='flex flex-col '>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" />
                        </div>
                        <div className='flex flex-col'>
                            <p>Searchable Products</p>
                            <p>via Category</p>
                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" />
                        </div>
                        <div className='flex flex-col'>
                            <p>Product Finder</p>

                        </div>
                    </div>

                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" />
                        </div>
                        <div className='flex flex-col'>
                            <p>Listing Analyzer</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" />
                        </div>
                        <div className='flex flex-col'>
                            <p>shop Analyzer</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" />
                        </div>
                        <div className='flex flex-col'>
                            <p>Connect multiple shops</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" />
                        </div>
                        <div className='flex flex-col'>
                            <p>keyword Finder:</p>
                            <p>Related Keyword</p>
                            <p>Ideas only</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" />
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'>Use to Launch Unlimited</p>
                            <p className='font-bold'>Products (Priceless) </p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" />
                        </div>
                        <div className='flex flex-col'>
                            <p>Adavanced data features</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" />
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Premium metrics</strong></p>
                            <p><strong>conversion rate,</strong></p>
                            <p><strong>Total views + more</strong></p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" />
                        </div>
                        <div className='flex flex-col'>
                            <p>Advanced Filters</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" />
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
                            <img src={vector} alt="dot" />
                        </div>
                        <div className='flex flex-col'>
                            <p>Tag Analyzer- Can</p>
                            <p>check Tags of any</p>
                            <p>listing in one click</p>
                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" />
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
                            <img src={vector} alt="dot" />
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
                            <img src={vector} alt="dot" />
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Bonus 1:</strong> Listing </p>
                            <p>Optimization Guide</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" />
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Bonus 2:</strong> Etsy</p>
                            <p>Success Guidebook</p>

                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div>
                            <img src={vector} alt="dot" />
                        </div>
                        <div className='flex flex-col'>
                            <p><strong>Bonus 3:</strong>Private</p>
                            <p>Community Access</p>

                        </div>
                    </div>
                    <div className='text-center'>
                        <p>Total Value: <span className='cut-text'>Subscription</span></p>
                        <p className='text-2xl text-custom-color-1'>Today's Price:</p>
                        <p className='text-2xl text-custom-color-1'>$97 $497</p>
                        <p>One Time Payment</p>
                        <button className='bg-custom-color-1 p-2 text-white'>Buy Now</button>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Tenth
