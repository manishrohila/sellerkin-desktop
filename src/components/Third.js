import React from 'react';
import curveline from "../img/Line 14.svg"
const Third = () => {
    return (
        <div className='bg-custom-color pb-10'>
            <div className='flex flex-col text-center md:flex-row font-sans justify-center text-3xl'>
                <h1 className='font-bold'>
                    The <span className='text-custom-color-1 font-bold'>Winning &nbsp;</span>
                </h1>
                <h1 className='font-bold'>
                    <span className='text-custom-color-1 font-bold'>Formula</span> Revealed
                </h1>
            </div>

            <div className='flex flex-col relative'>
                <div className='flex justify-center font-serif'>
                    <div className='border-2 w-72 h-32 border-custom-color-1 bg-custom-color text-black flex justify-center text-center m-9 rounded-md flex-col'>
                        <p></p>
                        <p>Go to Quora and look for</p>
                        <p>what people are asking</p>
                    </div>
                    {/* <img src="img/Component 1.jpg" alt="arrow sign" class="arrow"></img> */}

                    <div className='border-2 w-72 h-32 border-custom-color-1 bg-custom-color text-black flex justify-center text-center m-9 rounded-md flex-col'>
                        <p></p>
                        <p>Go to facebook ads library</p>
                        <p>and then find out what</p>
                        <p>people are running ads on</p>
                    </div>
                    {/* <img src="img/Component 1.jpg" alt="arrow sign" class="arrow"></img> */}

                    <div className='border-2 w-72 h-32 border-custom-color-1 bg-custom-color text-black flex justify-center text-center m-9 rounded-md flex-col'>
                        <p></p>
                        <p>Go to google Ads Library and</p>
                        <p> find the ads being run</p>
                        <p>on different products</p>
                    </div>


                </div>
                <div className='flex justify-center'>
                <img src={curveline} alt="curve line" className='w-11/12 absolute top-24 bottom-0 left-14 right-0 ' />
                </div>
                

                <div className='flex justify-center font-serif mt-14'>
                    <div className='border-2 w-72 h-32 border-custom-color-1 bg-custom-color text-black flex justify-center text-center m-9 rounded-md flex-col'>
                        <p></p>
                        <p>Then to find out what</p>
                        <p>people are commenting</p>
                        <p>an ads one by one</p>
                    </div>
                    {/* <img src="img/Component 1.jpg" alt="arrow sign" class="arrow"></img> */}

                    <div className='border-2 w-72 h-32 border-custom-color-1 bg-custom-color text-black flex justify-center text-center m-9 rounded-md flex-col'>
                        <p></p>
                        <p>Go to Google Trends and</p>
                        <p>search for Increasing /</p>
                        <p>Decreasing Markets</p>
                    </div>
                    {/* <img src="img/Component 1.jpg" alt="arrow sign" class="arrow"></img> */}

                    <div className='border-2 w-72 h-32 border-custom-color-1 bg-custom-color text-black flex justify-center text-center m-9 rounded-md flex-col'>
                        <p></p>
                        <p>And then People can start</p>
                        <p>guessing. that this could</p>
                        <p>be the winning product</p>
                    </div>


                </div>
            </div>




        </div>

    );
};

export default Third;
