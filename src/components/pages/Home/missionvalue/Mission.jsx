import React from 'react';
import "./mission.css"
import { GiNightVision } from "react-icons/gi";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { SiSemanticuireact } from "react-icons/si";

function Mission() {
    return (
        <>

            <div className="containe w-[90%] mx-auto px-16 p-4 ">
                <div className="latest-text-start mt-10 text-center">
                    <h1 className='text-4xl font-semibold'>
                        <span className='text-black'>Our Vision & </span>
                        <span>Experts, Quality</span>
                        <div className="hr-line" style={{ border: "1px solid #d79f00" }}></div>
                    </h1>
                </div>
                <div className="grid grid-cols-12 gap-4 mt-10">

                    <div className="rounded-lg sm:col-span-12 md:col-span-6 lg:col-span-4 shadow-lg p-6 bg-amber-600 hover:bg-amber-800">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                                <GiNightVision style={{ fontSize: "60px" }} />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-black text-center mb-2">Vision</h3>
                        <p className="text-white text-sm px-4 font-extralight">
                            Our main priority is to attain absolute customer satisfaction for which our team works efficiently to keep the product's quality. Moreover, our team.
                        </p>
                    </div>
                    <div className="rounded-lg sm:col-span-12 md:col-span-6 lg:col-span-4 shadow-lg p-6  hover:bg-amber-600">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                                <BsFillRocketTakeoffFill style={{ fontSize: "60px" }} />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-black text-center mb-2">Experts</h3>
                        <p className="text-black text-sm px-4 ">
                            Our experts have a deep knowledge of dominant market trends. Therefore they have practiced enough to appreciate the exact obligation of the client.
                        </p>
                    </div>
                    <div className="rounded-lg sm:col-span-12 md:col-span-6 lg:col-span-4 shadow-lg p-6 bg-amber-600 hover:bg-amber-800">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                                <SiSemanticuireact style={{ fontSize: "60px" }} />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-black text-center mb-2">Quality</h3>
                        <p className="text-white text-sm px-4 font-extralight">
                            Apart from the compliance of different products with global quality standards, we have become a good choice for our clients. We focus more on ethical.
                        </p>
                    </div>
                </div>

                <div className="testimonial-container">
                    <div className="testimonial-text text-center">
                        <div className="border-text">
                            <p>In promotion and advertising, a testimonial consists of a person's experience in a written statement extolling the integrity of a product or services.</p>
                            <div className="testimonial-btn">
                                <button>Get More Info.</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Mission
