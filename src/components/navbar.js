import React from 'react'

const navbar = () => {
    return (
        <div>
            <div className="flex justify-center align-center text-center gap-8 mt-2.5 mx-8 md:block">
                <div>

                    <h2 className="text-3xl tracking-wide font-bold word-spacing ">
                        {" "}
                        <span>
                            Skyrocket Your Etsy {" "}

                        </span>{" "}
                        
                    </h2>
                    <h2>
                        Business
                        <span>
                            <img
                                src={shopping_cart}
                                alt="shopping cart"
                                className="h-9 w-9 inline-block "></img>
                        </span>
                        By Finding
                    </h2>
                    
                    <h2 className="text-3xl tracking-wide font-bold word-spacing ">
                        <span className="text-custom-color-1 inline-block word-spacing">
                             The{" "}
                            <img
                                src={achievement}
                                alt="achievement sign"
                                className="inline-block h-9 w-9 relative -mt-2 "></img>{" "}
                            Winning Products{" "}
                        </span>
                        
                    </h2>
                    <h2 className="text-3xl tracking-wider font-bold word-spacing">
                        And Copying Them For 
                    </h2>
                    <h2>
                        Your Instant Sucess
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default navbar
