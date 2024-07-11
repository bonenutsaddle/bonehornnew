import React from 'react';
import ContactBanner from "../../../assets/contact-banner.webp";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import QueryForm from "../../pages/Home/queryform/QueryForm"

function Contact() {
    return (
        <>
            <div className="relative w-full  sm:h-[15rem] lg:h-[70vh] text-center ">
                <img src={ContactBanner} alt="" className='absolute  opacity-60 w-full sm:h-fit lg:h-full object-full' />
                <div className="absolute top-16 left-10 ">
                    <h1 className="md:text-6xl lg:text-5xl text-black sm:text-xl font-semibold">
                        Contact Us <p className='text-[#902fff] text-start mt-3'>Now</p>
                    </h1>

                </div>
            </div>

            <div className="w-[90%] mx-auto my-16">
                <h4 className='text-center my-10 text-4xl w-[70%] font-bold mx-auto'>Please don't hesitate to contact us
                    with any inquiries or messages.</h4>
                <div className="bg-[#003780] p-10 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex flex-col items-center justify-center w-[33%] gap-2">
                            <FaMapMarkerAlt className="text-white text-7xl border-2 p-5 cursor-pointer hover:bg-transparent rounded-full  bg-black" />
                            <h3 className="text-white text-3xl font-bold mt-4">Address</h3>
                            <p className="text-white text-base w-[100%]  ">
                                Khasra No: 1703/1, Toli Mohalla, Mohalla Purvi Jatav, LONI – Ghaziabad-201102, UP, INDIA
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <FaPhone className="text-white text-7xl border-2 p-5 cursor-pointer hover:bg-transparent  rounded-full bg-black" />
                            <h3 className="text-white text-3xl font-bold mt-4">Get In Touch</h3>
                            <p className="text-white text-base">
                                +91 7428136563
                            </p>
                            <p className="text-white text-base">
                                +91 011- 4227-3742
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <FaEnvelope className="text-white text-7xl border-2 cursor-pointer hover:bg-transparent  p-5 rounded-full bg-black" />
                            <h3 className="text-white text-3xl font-bold mt-4">Email Address</h3>
                            <p className="text-white text-base">
                                info@bonehornmart.com
                            </p>
                            <p className="text-white text-base">
                                bonenutsaddle786@gmail.com
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <QueryForm />
        </>
    )
}

export default Contact