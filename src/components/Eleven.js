import React from 'react'
import first from "../img/Component 1.svg"
import stars from "../img/Group 486.svg"
import left_arrow from "../img/mingcute_arrows-right-line.png";
import right_arrow from "../img/mingcute_arrows-right-line (1).png";
import visa1 from "../img/toppng 4.svg"
import secure from "../img/lock1.svg";
import days from "../img/7days1.svg";
import comma from "../img/Vector (2).svg"
const Eleven = () => {
    return (
        <div className='bg-custom-color pt-10'>
            <div className='hidden md:flex flex-col justify-center items-center text-5xl font-bold font-sans'>
                <p>Don't believe what we say,<span className='text-custom-color-1'> listen to real users</span></p>
                <p><span className='text-custom-color-1'>winning with Sellerkin </span> every single day.</p>
            </div>
            <div className='flex md:hidden font-bold font-sans flex-col justify-center items-center text-5xl'>
                <p>Don't believe what </p>
                <p> we say,<span className='text-custom-color-1'> listen to</span></p>
                <p><span className='text-custom-color-1'>real users winning</span></p>
                <p><span className='text-custom-color-1'> with  Sellerkin </span></p>
                <p>every single day.</p>
            </div>



            <div className=' grid-cols-2 gap-10 mx-48 mb-6 mt-10 hidden md:grid font-serif'>
                <div className='flex justify-center items-center'>
                    <img src={first} alt="image" />
                </div>
                <div className='flex flex-col justify-center items-center gap-6'>
                    <div className='flex flex-col bg-custom-color-2 justify-center border-2 border-custom-color p-6 pt-8 w-full  shadow-xl text-2xl gap-3'>
                        <div className='flex gap-3'>
                            <p className='font-bold'>Michael</p>
                            <img src={stars} alt="" />
                            <div className='flex-grow flex justify-end'>
                                <img src={comma} alt="comma sign" className='w-5 h-4 relative top-2'/>
                            </div>
                        </div>
                        <div className='text-base'>
                            <p>Sellerkin simplifies our product research so</p>
                            <p>that i can track how many views any products</p>
                            <p>are getting and so forth</p>
                        </div>
                    </div>
                    <div className='flex flex-col bg-custom-color-2 justify-center border-2 border-custom-color p-10 w-full  shadow-xl text-2xl gap-3'>
                        <div className='flex gap-3 '>
                            <p className='font-bold'>Abhishek</p>
                            <img src={stars} alt="" />
                            <div className='flex-grow flex justify-end'>
                                <img src={comma} alt="comma sign" className='w-5 h-4 relative top-2'/>
                            </div>
                        </div>
                        <div className='text-base'>
                            <p>Finally, now finding a new product</p>
                            <p>becomes so easy, it's not a challenge</p>
                            <p>anymore, now i can concentrate more </p>
                            <p>on my business and plan to scale</p>
                        </div>
                    </div>

                    

                </div>
            </div>

            {/* Mobile version */}
            <div className='flex md:hidden justify-center items-center mt-10'>
                <img src={first} alt="image" />
            </div>

            <div className='grid grid-cols-1 md:hidden'>
                <div className='flex md:hidden flex-col justify-center items-center gap-6 mt-10' >
                    <div className='flex flex-col bg-custom-color-2 justify-center border-2 border-custom-color p-10  shadow-xl text-2xl gap-3'>
                        <div className='flex justify-center '>
                            <img src={comma} alt="comma sign" />
                        </div>
                        <div className='flex justify-center'>
                            <p className='font-bold'>Michael</p>

                        </div>
                        <div className='flex justify-center'>
                            <img src={stars} alt="" />
                        </div>

                        <div className='text-base'>
                            <p className='flex justify-center items-center'>Sellerkin simplifies our </p>
                            <p className='flex justify-center items-center'>product research so that i </p>
                            <p className='flex justify-center items-center'>can track how many </p>
                            <p className='flex justify-center items-center'> views any products are</p>
                            <p className='flex justify-center items-center'>getting and so forth</p>
                        </div>
                    </div>
                    <div className='flex flex-col bg-custom-color-2 justify-center border-2 border-custom-color p-10   shadow-xl text-2xl gap-3'>
                    <div className='flex justify-center '>
                            <img src={comma} alt="comma sign" />
                        </div>
                        <div className='flex justify-center'>
                            <p className='font-bold'>Ryan</p>

                        </div>
                        <div className='flex justify-center'>
                            <img src={stars} alt="" />
                        </div>

                        <div className='text-base'>
                            <p className='flex justify-center items-center'>Sellerkin simplifies our </p>
                            <p className='flex justify-center items-center'>product research so that i </p>
                            <p className='flex justify-center items-center'>can track how many </p>
                            <p className='flex justify-center items-center'> views any products are</p>
                            <p className='flex justify-center items-center'>getting and so forth</p>
                        </div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>





            <div className=' grid-cols-2 gap-10 mx-48 mb-6 hidden md:grid'>
                <div className='flex flex-col bg-custom-color-2 justify-center border-2 border-custom-color px-12 py-2 shadow-xl text-2xl gap-3'>
                    <div className='flex gap-3'>
                        <p className='font-bold'>Richa</p>
                        <img src={stars} alt="" />
                        <div className='flex-grow flex justify-end'>
                                <img src={comma} alt="comma sign" className='w-5 h-4 relative top-2'/>
                            </div>
                    </div>
                    <div className='text-base'>
                        <p>Personally, I loved the listing Analyzer and</p>
                        <p>Shop Analyzer Features, now i can check</p>
                        <p>any competitor stats</p>
                    </div>
                </div>

                <div className='flex flex-col bg-custom-color-2 justify-center border-2 border-custom-color p-6 shadow-xl text-2xl gap-3'>
                    <div className='flex gap-3'>
                        <p className='font-bold'>Ryan</p>
                        <img src={stars} alt="" />
                        <div className='flex-grow flex justify-end'>
                                <img src={comma} alt="comma sign" className='w-5 h-4 relative top-2'/>
                            </div>
                    </div>
                    <div className='text-base w-full'>
                        <p>Sellerkin simplifies our product research so</p>
                        <p>that i can track how many views any products</p>
                        <p>are getting and so forth</p>
                    </div>
                </div>
            </div>
            {/* Mobile version */}
            <div className='grid grid-cols-1 md:hidden'>
                <div className='flex md:hidden flex-col justify-center items-center gap-6 ' >
                    <div className='flex flex-col bg-custom-color-2 justify-center border-2 border-custom-color p-10  shadow-xl text-2xl gap-3'>
                    <div className='flex justify-center '>
                            <img src={comma} alt="comma sign" />
                        </div>
                        <div className='flex justify-center'>
                            <p className='font-bold'>Richa</p>

                        </div>
                        <div className='flex justify-center'>
                            <img src={stars} alt="" />
                        </div>

                        <div className='text-base'>
                            <p className='flex justify-center items-center'>Personally, I loved the </p>
                            <p className='flex justify-center items-center'> listing Analyzer and</p>
                            <p className='flex justify-center items-center'>Shop Analyzer Features, </p>
                            <p className='flex justify-center items-center'> now i can check any</p>
                            <p className='flex justify-center items-center'> competitor stats</p>
                        </div>
                    </div>
                    <div className='flex flex-col bg-custom-color-2 justify-center border-2 border-custom-color p-10   shadow-xl text-2xl gap-3'>
                    <div className='flex justify-center '>
                            <img src={comma} alt="comma sign" />
                        </div>
                        <div className='flex justify-center'>
                            <p className='font-bold'>Abhishek</p>

                        </div>
                        <div className='flex justify-center'>
                            <img src={stars} alt="" />
                        </div>

                        <div className='text-base'>
                            <p className='flex justify-center items-center'>Finally, now finding a </p>
                            <p className='flex justify-center items-center'> new product becomes </p>
                            <p className='flex justify-center items-center'> so easy it's not a </p>
                            <p className='flex justify-center items-center'> challenge anymore,</p>
                            <p className='flex justify-center items-center'> now i can concentrate </p>
                            <p className='flex justify-center items-center'> more on my business </p>
                            <p className='flex justify-center items-center'> and plan to scale</p>
                        </div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>

            <div className=' grid-cols-2 gap-10 mx-48 mb-6 hidden md:grid '>
                <div className='flex flex-col bg-custom-color-2 justify-center border-2 border-custom-color px-12 py-2 shadow-xl text-2xl gap-3'>
                    <div className='flex gap-3'>
                        <p className='font-bold'>Emma</p>
                        <img src={stars} alt="" />
                        <div className='flex-grow flex justify-end'>
                                <img src={comma} alt="comma sign" className='w-5 h-4 relative top-2'/>
                            </div>
                    </div>
                    <div className='text-base'>
                        <p>With the help of sellerkin, have launched 2</p>
                        <p>products, started making decent money,</p>
                        <p>Thanks a lot!</p>
                    </div>
                </div>

                <div className='flex flex-col bg-custom-color-2 justify-center border-2 border-custom-color p-12 shadow-xl text-2xl gap-3'>
                    <div className='flex gap-3'>
                        <p className='font-bold'>Richard</p>
                        <img src={stars} alt="" />
                        <div className='flex-grow flex justify-end'>
                                <img src={comma} alt="comma sign" className='w-5 h-4 relative top-2'/>
                            </div>
                    </div>
                    <div className='text-base'>
                        <p>Good part is their support, they try</p>
                        <p>to reply to you within 24-48 hrs</p>
                        <p>irrespective of the weekend</p>
                    </div>
                </div>

            </div>
            {/* Mobile version */}
            <div className='grid grid-cols-1 md:hidden' >
                <div className='flex md:hidden flex-col justify-center items-center gap-6 ' >
                    <div className='flex flex-col bg-custom-color-2 justify-center border-2 border-custom-color p-10  shadow-xl text-2xl gap-3'>
                    <div className='flex justify-center '>
                            <img src={comma} alt="comma sign" />
                        </div>
                        <div className='flex justify-center'>
                            <p className='font-bold'>Emma</p>

                        </div>
                        <div className='flex justify-center'>
                            <img src={stars} alt="" />
                        </div>

                        <div className='text-base'>
                            <p className='flex justify-center items-center'>With the help of </p>
                            <p className='flex justify-center items-center'> sellerkin, have </p>
                            <p className='flex justify-center items-center'> launched 2 products,</p>
                            <p className='flex justify-center items-center'> started making decent </p>
                            <p className='flex justify-center items-center'> money, Thanks a lot!</p>
                        </div>
                    </div>
                    <div className='flex flex-col bg-custom-color-2 justify-center border-2 border-custom-color p-10  shadow-xl text-2xl gap-3'>
                    <div className='flex justify-center '>
                            <img src={comma} alt="comma sign" />
                        </div>
                        <div className='flex justify-center'>
                            <p className='font-bold'>Richard</p>

                        </div>
                        <div className='flex justify-center'>
                            <img src={stars} alt="" />
                        </div>

                        <div className='text-base'>
                            <p className='flex justify-center items-center'>Good part is their </p>
                            <p className='flex justify-center items-center'>support, they try to </p>
                            <p className='flex justify-center items-center'> reply to you within 24- </p>
                            <p className='flex justify-center items-center'>48 hrs irrespective of</p>
                            <p className='flex justify-center items-center'> the weekend</p>
                        </div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>

            <div className=' grid-cols-2 gap-10 mx-48 mb-6 hidden md:grid'>


                <div className='flex flex-col bg-custom-color-2 justify-center border-2 border-custom-color px-12 py-2 shadow-xl text-2xl gap-3'>
                    <div className='flex gap-3'>
                        <p className='font-bold'>Vaishali</p>
                        <img src={stars} alt="" />
                        <div className='flex-grow flex justify-end'>
                                <img src={comma} alt="comma sign" className='w-5 h-4 relative top-2'/>
                            </div>
                    </div>
                    <div className='text-base'>
                        <p>I have been using sellerkin from a good</p>
                        <p>time, have a good exp. In using the product,</p>
                        <p>it does not glitch or get stuck in the middle</p>
                        <p>of seaching like other tools in the market</p>

                    </div>
                </div>

                <div className='flex flex-col bg-custom-color-2 justify-center border-2 border-custom-color p-12 shadow-xl text-2xl gap-3'>
                    <div className='flex gap-3'>
                        <p className='font-bold'>Sahil</p>
                        <img src={stars} alt="" />
                        <div className='flex-grow flex justify-end'>
                                <img src={comma} alt="comma sign" className='w-5 h-4 relative top-2'/>
                            </div>
                    </div>
                    <div className='text-base'>
                        <p>As I got the chance to interact with the</p>
                        <p>founder, I realised he has a lot of clarity on</p>
                        <p>what all needs to be created to solve a </p>
                        <p>problem and his team is working </p>
                        <p> dedicatedly on his project to make it better</p>

                    </div>
                </div>


            </div>


            <div className=' grid-cols-2 gap-10 mx-48 mb-6 hidden md:grid'>


                <div className='flex flex-col bg-custom-color-2 justify-center border-2 border-custom-color px-12 py-2 shadow-xl text-2xl gap-3'>
                    <div className='flex gap-3'>
                        <p className='font-bold'>Ankit</p>
                        <img src={stars} alt="" />
                        <div className='flex-grow flex justify-end'>
                                <img src={comma} alt="comma sign" className='w-5 h-4 relative top-2'/>
                            </div>
                    </div>
                    <div className='text-base'>
                        <p>I loved the product, it's very</p>
                        <p>easy to use and user friendly</p>

                    </div>
                </div>

                <div className='flex flex-col bg-custom-color-2 justify-center border-2 border-custom-color p-12 shadow-xl text-2xl gap-3'>
                    <div className='flex gap-3'>
                        <p className='font-bold'>Joseph</p>
                        <img src={stars} alt="" />
                        <div className='flex-grow flex justify-end'>
                                <img src={comma} alt="comma sign" className='w-5 h-4 relative top-2'/>
                            </div>
                    </div>
                    <div className='text-base'>
                        <p>I am really glad that i came to know</p>
                        <p>about sellerkin, it's a value for money</p>

                    </div>
                </div>


            </div>
            {/* Mobile version */}

            <div className='grid grid-cols-1 md:hidden'>
                <div className='flex md:hidden flex-col justify-center items-center gap-6 ' >
                    <div className='flex flex-col bg-custom-color-2 justify-center border-2 border-custom-color p-10  shadow-xl text-2xl gap-3'>
                    <div className='flex justify-center '>
                            <img src={comma} alt="comma sign" />
                        </div>
                        <div className='flex justify-center'>
                            <p className='font-bold'>Ankit</p>

                        </div>
                        <div className='flex justify-center'>
                            <img src={stars} alt="" />
                        </div>

                        <div className='text-base'>
                            <p className='flex justify-center items-center'>I loved the product, it's </p>
                            <p className='flex justify-center items-center'> very easy to use and</p>
                            <p className='flex justify-center items-center'> user friendly</p>
                        </div>
                    </div>
                    <div className='flex flex-col bg-custom-color-2 justify-center border-2 border-custom-color p-10  shadow-xl text-2xl gap-3'>
                    <div className='flex justify-center '>
                            <img src={comma} alt="comma sign" />
                        </div>
                        <div className='flex justify-center'>
                            <p className='font-bold'>Joseph</p>

                        </div>
                        <div className='flex justify-center'>
                            <img src={stars} alt="" />
                        </div>

                        <div className='text-base'>
                            <p className='flex justify-center items-center'>I am really glad that i </p>
                            <p className='flex justify-center items-center'>came to know about</p>
                            <p className='flex justify-center items-center'> sellerkin, it's a value </p>
                            <p className='flex justify-center items-center'>for money</p>
                        </div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
            {/* Mobile version */}
            <div className='grid grid-cols-1 md:hidden'>
                <div className='flex md:hidden flex-col justify-center items-center gap-6 ' >
                    <div className='flex flex-col bg-custom-color-2 justify-center border-2 border-custom-color p-10  shadow-xl text-2xl gap-3'>
                    <div className='flex justify-center '>
                            <img src={comma} alt="comma sign" />
                        </div>
                        <div className='flex justify-center'>
                            <p className='font-bold'>Vaishali</p>

                        </div>
                        <div className='flex justify-center'>
                            <img src={stars} alt="" />
                        </div>

                        <div className='text-base'>
                            <p className='flex justify-center items-center'>I have been using </p>
                            <p className='flex justify-center items-center'> sellerkin from a good</p>
                            <p className='flex justify-center items-center'>time, have a good exp. </p>
                            <p className='flex justify-center items-center'> In using the product, it</p>
                            <p className='flex justify-center items-center'> does not glitch or get </p>
                            <p className='flex justify-center items-center'>stuck in the middle</p>
                            <p className='flex justify-center items-center'>of seaching like other </p>
                            <p className='flex justify-center items-center'> tools in the market</p>
                        </div>
                    </div>
                    <div className='flex flex-col bg-custom-color-2 justify-center border-2 border-custom-color p-10  shadow-xl text-2xl gap-3'>
                    <div className='flex justify-center '>
                            <img src={comma} alt="comma sign" />
                        </div>
                        <div className='flex justify-center'>
                            <p className='font-bold'>Sahil</p>

                        </div>
                        <div className='flex justify-center'>
                            <img src={stars} alt="" />
                        </div>

                        <div className='text-base'>
                            <p className='flex justify-center items-center'>As I got the chance to </p>
                            <p className='flex justify-center items-center'> interact with the founder,</p>
                            <p className='flex justify-center items-center'> I realised he has a lot of </p>
                            <p className='flex justify-center items-center'> clarity on what all needs </p>
                            <p className='flex justify-center items-center'>to be created to solve a </p>
                            <p className='flex justify-center items-center'>problem and his team </p>
                            <p className='flex justify-center items-center'> is working dedicatedly  </p>
                            <p className='flex justify-center items-center'> on his project to </p>
                            <p className='flex justify-center items-center'> make it better</p>
                        </div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>


            <div className=' flex justify-center mt-10  md:mt-20 items-center font-bold text-xl'>
                <p>Limited Time offer</p>
            </div>


            <div className="hidden md:flex md:flex-row justify-center mt-10 font-sans ">
                <div>
                    <img src={left_arrow} alt="left arrow"></img>
                </div>
                <div className="bg-custom-color-1 m-1 text-2xl px-5 py-3 border-2 rounded-lg flex justify-center flex-col md:flex md:flex-col text-white mb-10">
                    <p className="mr-1 md:mr-1">Get instant Access to Sellerkin</p>

                    <p className=' text-base'>Soon, Prices are going to be increased</p>
                </div>
                <div>
                    <img src={right_arrow} alt="right arrow 2"></img>
                </div>
            </div>
            <div className="flex flex-row  md:hidden justify-center  font-sans mb-4">
                <div>
                    <img src={left_arrow} alt="left arrow"></img>
                </div>
                <div className="bg-custom-color-1 m-1 text-base px-5 py-3 border-2 rounded-lg flex justify-center items-center flex-col text-white font-bold">
                    <p className="mr-1 md:mr-1">Your Journey to </p>
                    <p>
                        Success Starts Here
                    </p>

                </div>
                <div>
                    <img src={right_arrow} alt="right arrow 2"></img>
                </div>
            </div>
            <div className="md:flex md:justify-center gap-4  ">
                <div className="flex justify-center mb-5">
                    <img src={visa1} alt="payment" className="w-52 md:w-auto"></img>
                </div>
                <div className="flex justify-center mb-5 gap-3">
                    <img src={secure} alt="payment" className="relative mb-2"></img>
                    <img src={days} alt="payment" className="relative mb-2"></img>
                </div>
            </div>
        </div>

    )
}

export default Eleven
