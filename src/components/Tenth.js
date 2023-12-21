import React from 'react'
import line from "../img/money back.svg"
import image from "../img/money-back-guarantee 1.svg"
import correct from "../img/Mask group.svg"
import "./Tenth.css"
const Tenth = () => {
    return (
        <div className='bg-custom-color-2'>

            <div className='flex gap-2 text-5xl items-center justify-center'>
                <p className='relative -top-1'>7 Days </p>
                <div className='flex flex-col '>
                    <p><span className='text-custom-color-1'>Money Back Guarantee</span></p>
                    <img src={line} alt="image loading line" className='w-10/12' />
                </div>
            </div>

            <div className='flex  justify-center items-center gap-10 mt-10'>
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

            <div className='flex text-5xl mt-20 justify-center items-center '>
                <div className='flex flex-col gap-3' >
                    <p className='text-custom-color-1'>Pick the option</p>
                    <img src={line} alt="image loading curve line" className='w-80' />
                </div>
                <div className='relative bottom-2'>
                    <p className=''>that's best for you </p>
                </div>
            </div>
            <div className='flex justify-center items-center mt-20 '>
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
                                    <p>One line Payment</p>
                                    <button className='bg-custom-color-1 p-2 text-white'>Buy Now</button>
                                </div>
                            </td>
                            <td>
                                <div className='text-center'>
                                    <p>Total Value: <span className='cut-text'>Subscription</span></p>
                                    <p className='text-2xl text-custom-color-1'>Today's Price:</p>
                                    <p className='text-2xl text-custom-color-1'>$147 <span className='cut-text'>$497</span> </p>
                                    <p>One line Payment</p>
                                    <button className='bg-custom-color-1 p-2 text-white'>Buy Now</button>
                                </div>
                            </td>
                            
                            <td>
                                <div className='text-center'>
                                    <p>Total Value: <span className='cut-text'>Subscription</span></p>
                                    <p className='text-2xl text-custom-color-1'>Today's Price:</p>
                                    <p className='text-2xl text-custom-color-1'>$297 <span className='cut-text'>$1497</span> </p>
                                    <p>One line Payment</p>
                                    <button className='bg-custom-color-1 p-2 text-white'>Buy Now</button>
                                </div>
                            </td>

                        </tr>

                    </table>
                </div>

            </div>

        </div>
    )
}

export default Tenth
