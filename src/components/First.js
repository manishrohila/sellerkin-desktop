import React, { useState } from "react";
import "./First.css";
import logo from "../img/Mask group.png";
import shopping_cart from "../img/noto_shopping-cart.png";
import achievement from "../img/Group 193.png";
import underline from "../img/Vector 2.png";
import li1 from "../img/li11.svg";
import li2 from "../img/li22.svg";
import li3 from "../img/li33.svg";
import li4 from "../img/li44.svg";
import li5 from "../img/li55.svg";
import left_arrow from "../img/mingcute_arrows-right-line.png";
import right_arrow from "../img/mingcute_arrows-right-line (1).png";
import shopping_cart_2 from "../img/mdi_cart1.svg";
import cloud from "../img/iconamoon_cloud-yes-fill1.svg";
import graph from "../img/mdi_graph-box1.svg";
import secure from "../img/lock1.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import speaker from "../img/speaker.svg"
import top1 from "../img/1top.png"
import top2 from '../img/2top.png'
import days from "../img/7days1.svg";
import mac from "../img/mac1.svg";
import window from "../img/windows1.svg";
import visa1 from "../img/toppng 4.svg"
function First() {
    const [showMenu, setShowMenu] = useState(false);
    const menu = [
        {
            name: "How it works",
            key: 1,
        },
        {
            name: "Testimonials",
            key: 2,
        },
        {
            name: "Pricing",
            key: 3,
        },
    ];
    return (
        <div className="bg-custom-color pb-10">
            <nav className="flex md:justify-around  justify-between md:px-10 px-3 py-6 ">
                <div className="flex gap-2">
                    <img src={logo} alt="SellerKin logo" className="relative -mt-4"></img>
                    <span className="text-3xl font-bold relative xl:bottom-2 ">SellerKin</span>
                </div>
                {/* ul list  */}
                <div className="flex gap-8">
                    <div>
                        <ul className=" justify-center list-none ml-4 hidden md:flex space-x-5">
                            <li className="text-lg">How it Works</li>
                            <li className="text-lg"> Testimonials</li>
                            <li className="text-lg">Pricing</li>
                        </ul>
                    </div>

                    {/* button */}
                    <div className="space-x-10 hidden md:flex -mt-2 md:justify-end">
                        <button className="border-2 rounded border-custom-color-1 px-2.5 py-0.5 text-xl">
                            Log in
                        </button>
                        <button className="border-2 rounded border-custom-color-1 bg-custom-color-1 px-2.5 py-0.5">
                            Get Started
                        </button>
                    </div>
                </div>

                <div className="hamburger-menu md:hidden block">
                    <a href="#" onClick={() => setShowMenu(!showMenu)}>
                        <GiHamburgerMenu />
                        {showMenu ? (
                            <div className="absolute mt-3 w-32 h-36 bg-white rounded-md border-[1px] p-3 border-black/70 translate-x-[-105px]">
                                {menu.map((item) => (
                                    <div key={item.key} className="mt-3 hover:text-orange-400">
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        ) : null}
                    </a>
                </div>
            </nav>
            <div className="relative" >
                <p className="border-2 font-sans rounded-2xl bg-custom-color-1 border-custom-color-1 w-64 mx-auto flex justify-center items-center text-white ">
                    This is an invite-only page...
                </p>
                <div className="relative">
                <img src={top1} alt="top1 " className="opacity-25 z-0 hidden md:block absolute  m-4 left-0"></img>
                <img src={top2} alt="top1 " className="opacity-25 z-0 hidden md:block absolute  m-4 right-0"></img>
                </div>
                
            </div>
            

            <div className=" hidden md:block justify-center text-center align-center mt-6 mx-4 text-base ">
                <div>
                    <h4 className="font-sans">
                        Golden Scaling Gateway for {" "}
                        <span className=" font-sans font-bold">
                            all Ecom Businesses & Digital
                        </span>
                    </h4>
                    <h4>
                        <span className="font-sans font-bold">
                            Product Owners Selling on Etsy Marketplace
                        </span>
                    </h4>
                </div>
            </div>

            <div className=" block md:hidden font-sans justify-center text-center align-center mt-6 mx-4 text-base ">
                <div>
                    <h4 className="font-sans">
                        Golden Scaling Gateway for {" "}
                        <span className=" font-sans font-bold">
                            all Ecom
                        </span>
                    </h4>
                    <h4 className=" font-sans font-bold">
                        Businesses & Digital Product Owners 
                    </h4>
                    <h4>
                        <span className="font-sans font-bold">
                            Selling on Etsy Marketplace
                        </span>
                    </h4>
                </div>
            </div>
            <div className=" hidden md:block justify-center align-center text-center gap-8 mt-2.5 mx-8">
                <div className="font-sans">

                    <h2 className="text-3xl tracking-wide font-bold word-spacing ">
                        {" "}
                        <span>
                            Skyrocket Your Etsy Business{" "}
                            <img
                                src={shopping_cart}
                                alt="shopping cart"
                                className="h-9 w-9 inline-block "></img>
                        </span>{" "}
                        By
                    </h2>
                    <img
                        src={underline}
                        alt="underline"
                        className="flex justify-center ml-80  w-2/5 xl:w-2/6 xl:ml-26"></img>
                    <h2 className="text-3xl tracking-wide font-bold word-spacing ">
                        <span className="text-custom-color-1 inline-block word-spacing">
                            Finding The{" "}
                            <img
                                src={achievement}
                                alt="achievement sign"
                                className="inline-block h-9 w-9 relative -mt-2 "></img>{" "}
                            Winning Products{" "}
                        </span>
                        <span> And</span>
                    </h2>
                    <h2 className="text-3xl tracking-wider font-bold word-spacing italic">
                        Copying Them For Your Instant Sucess
                    </h2>
                </div>
            </div>
            <div className="flex justify-center align-center text-center gap-8 mt-2.5 mx-8 md:hidden">
                <div>

                    <h2 className="text-2xl tracking-wide font-bold word-spacing ">
                        {" "}
                        <span>
                            Skyrocket Your Etsy {" "}

                        </span>{" "}

                    </h2 >
                    <h2 className="text-2xl tracking-wide font-bold word-spacing ">
                        Business
                        <span>
                            <img
                                src={shopping_cart}
                                alt="shopping cart"
                                className="h-9 w-9 inline-block "></img>
                        </span>
                        By <span className="text-custom-color-1 inline-block word-spacing">Finding</span>
                    </h2>

                    <h2 className="text-2xl tracking-wide font-bold  ">
                        <span className="text-custom-color-1 inline-block word-spacing">
                            The
                            <img
                                src={achievement}
                                alt="achievement sign"
                                className="inline-block h-9 w-9 relative -mt-2 "></img>
                            Winning Products
                        </span>

                    </h2>
                    <h2 className="text-2xl tracking-wider font-bold  italic">
                        And Copying Them For
                    </h2>
                    <h2 className="text-2xl tracking-wider font-bold word-spacing italic">
                        Your Instant Sucess
                    </h2>
                </div>
            </div>

            <div className=" md:flex justify-center mt-6">
                <div className="mt-6 mx-6 rounded-lg flex justify-center flex-col xl:ml-24 font-serif">
                    <p className="text-center text-[15px] bg-custom-color-1 border-t-2 p-2 rounded-t-2xl text-white flex justify-center gap-1 ">

                        <img src={speaker} alt="speaker" className="hidden md:block"></img>

                        Watch this short video to discover the <span className="border-b-2 rounded-sm hidden md:block ">secret</span>  method
                    </p>
                    <iframe
                        className=" w-full aspect-video md:w-[542px] md:h-[287px]  border-b-2 rounded-b-xl"
                        src="https://www.youtube.com/embed/VIDEO_ID"
                        title="video"
                        allowFullScreen></iframe>
                </div>

                <div className="mx-9 hidden md:block justify-center mt-9 bg-custom-color-2 p-5 px-7 rounded-lg border md:bg-custom-color md:border-custom-color font-sans">
                    <ul className="list-none mt-5 xl:mt-0 ">

                        <li className="mb-1 xl:mb-3 ">
                            <div className="flex gap-2 xl:gap-3">
                                <img
                                    src={li1}
                                    alt="li1"
                                    className="inline-block h-11 w-11 relative bottom-2 xl:h-12 xl:w-12 "></img>{" "}
                                <ul className="list-none">
                                    <li className="xl:text-xl">
                                        Find <strong>Winning Products</strong> in less than  <strong>2 minutes</strong>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1 xl:mb-3">
                            <div className="flex gap-2 xl:gap-3">
                                <img src={li2} alt="li2" className="inline-block h-11 w-11 relative bottom-2 xl:h-12 xl:w-12 "></img>{" "}
                                <ul className="list-none">
                                    <li className="xl:text-xl">
                                        {" "}
                                        Check <strong>which Products</strong> are getting
                                        <strong> Eyeballs </strong>{" "} and <strong>Attention</strong>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="mb-1 xl:mb-3">

                            <div className="flex gap-2 xl:gap-3">
                                <img src={li3} alt="li3" className="inline-block h-11 w-11 relative bottom-2 xl:h-12 xl:w-12"></img>{" "}
                                <ul className="list-none">
                                    <li className="xl:text-xl">
                                        Discover the <strong>Rising Starts in your Niche</strong>{" "}
                                    </li>
                                </ul>
                            </div>



                        </li>
                        <li className="mb-1 xl:mb-3">

                            <div className="flex gap-2 xl:gap-3">
                                <img src={li4} alt="li4" className="inline-block h-11 w-11 relative bottom-2 xl:h-12 xl:w-12"></img>{" "}
                                <ul className="list-none">
                                    <li className="xl:text-xl">
                                        {" "}
                                        <strong>Analyze any listing</strong> to see it's {" "}
                                        <strong>perfomance</strong> & insider <strong>hidden details</strong>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1 xl:mb-3">

                            <div className="flex gap-2 xl:gap-3">
                                <img src={li5} alt="li5" className="inline-block h-11 w-11 relative bottom-2 xl:h-12 xl:w-12 "></img>{" "}
                                <ul className="list-none">
                                    <li className="xl:text-xl">
                                        Find the <strong>Conversion Rate</strong> of the Products
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-5 flex justify-center text-center text-2xl font-sans">
                <div>
                    <p>Simple way to Reach Etsy Success in</p>
                    <p className="ml-5">Minutes without <span className="font-bold">Trial and Error</span> </p>
                </div>
            </div>
            <div className="flex justify-center mt-5 font-sans">
                <div>
                    <img src={left_arrow} alt="left arrow"></img>
                </div>
                <div className="bg-custom-color-1 m-1 text-2xl px-5 py-3 border-2 rounded-lg flex justify-center flex-col md:flex md:flex-row text-white">
                    <p className="mr-1 md:mr-1">Scale Your Etsy</p>
                    <p>
                        Business Today
                    </p>
                </div>
                <div>
                    <img src={right_arrow} alt="right arrow 2"></img>
                </div>
            </div>

            <div className="m-5 flex flex-col gap-2 md:flex md:flex-row justify-center font-serif ">
                <div className="flex justify-center">
                    <img src={graph} alt="graph" className="h-5 w-5"></img>
                    <p className="mx-1"> Unlocks Exponential Growth</p>
                </div>
                <div className="flex justify-center">
                    <img
                        src={shopping_cart_2}
                        alt="shooping cart"
                        className="h-5 w-5"></img>
                    <p className="mx-1 mr-2"> Buy once, Use Forever</p>
                </div>
                <div className="flex justify-center">
                    <img src={cloud} alt="cloud" className="h-5 w-5"></img>
                    <p className="mx-1 mr-2"> Works on Cloud</p>
                </div>
            </div>

            <div className="md:flex md:justify-center gap-4">
                <div className="flex justify-center mb-5">
                    <img src={visa1} alt="payment" className="w-52 md:w-auto"></img>
                </div>
                <div className="flex justify-center mb-5 gap-3">
                    <img src={secure} alt="payment" className="relative mb-2"></img>
                    <img src={days} alt="payment" className="relative mb-2"></img>
                </div>
            </div>

            <div className="flex justify-center mb-5 gap-4">
                <img src={mac} alt="payment" className="w-24 md:w-auto "></img>
                <img src={window} alt="payment" className="relative mb-2 w-24 md:w-auto"></img>
            </div>

            <div className="mx-5 block md:hidden justify-center mt-9 bg-custom-color-2 p-5 px-7 rounded-lg border md:bg-custom-color md:border-custom-color">
                <ul className="list-none mt-5  ">

                    <li className="mb-3  ">
                        <div className="flex gap-3 xl:gap-3">
                            <img
                                src={li1}
                                alt="li1"
                                className="inline-block h-13 w-13 relative bottom-2 xl:h-12 xl:w-12 "></img>{" "}
                            <ul className="list-none">
                                <li className="xl:text-xl">
                                    Find <strong>Winning Products</strong> in less than <strong>2 minutes</strong> 
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-2">
                        <div className="flex gap-3 xl:gap-3">
                            <img src={li2} alt="li2" className="inline-block h-13 w-13 relative bottom-2 xl:h-12 xl:w-12 "></img>{" "}
                            <ul className="list-none">
                                <li className="xl:text-xl">
                                    {" "}
                                    Check <strong>which Products</strong> are getting
                                    <strong> Eyeballs </strong>{" "} and <strong>Attention</strong>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="mb-2">

                        <div className="flex gap-3 xl:gap-3">
                            <img src={li3} alt="li3" className="inline-block h-13 w-13 relative bottom-2 xl:h-12 xl:w-12"></img>{" "}
                            <ul className="list-none">
                                <li className="xl:text-xl">
                                    Discover the <strong>Rising Starts in your Niche</strong>{" "}
                                </li>
                            </ul>
                        </div>



                    </li>
                    <li className="mb-2">

                        <div className="flex gap-3 xl:gap-3">
                            <img src={li4} alt="li4" className="inline-block h-13 w-13 relative bottom-2 xl:h-12 xl:w-12"></img>{" "}
                            <ul className="list-none">
                                <li className="xl:text-xl">
                                    {" "}
                                    <strong>Analyze any listing</strong> to see it's {" "}
                                    <strong>perfomance</strong> & insider <strong>hidden details</strong>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-2">

                        <div className="flex gap-3 xl:gap-3">
                            <img src={li5} alt="li5" className="inline-block h-13 w-13 relative bottom-2 xl:h-12 xl:w-12 "></img>{" "}
                            <ul className="list-none">
                                <li className="xl:text-xl">
                                    Find the <strong>Conversion Rate</strong> of the Products
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default First;