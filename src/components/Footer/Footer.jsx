import React from 'react'
import "./footer.css";
import FooterLogo from "../../assets/footerlogo.png";
import { IoLocation } from "react-icons/io5";
import { FcCellPhone } from "react-icons/fc";
import { GiRotaryPhone } from "react-icons/gi";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
    return (
        <>
            <footer>
                <div className="footer-main w-[90%]  my-10 mx-auto justify-center grid grid-cols-12 sm:gap-4 gap-10 ">
                    <div className="footer1 sm:col-span-12 md:col-span-6 lg:col-span-3 mt-[-35px] ">
                        <ul>
                            <li>
                                <img src={FooterLogo} alt="" />
                            </li>
                            <li >
                                <p className='lg:w-[85%] md:w-[85%]  sm:w-full text-justify text-[0.9rem]'>
                                    RC Creation found 1985 was a cottage industries, now are the world wide largest Exporter , with an affirmation to manufacturing and retailing a high-quality range of Camel bone and water buffalo horn , Wooden and Leather Handicraft Items.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="footer2 sm:col-span-12 md:col-span-6 lg:col-span-3">
                        <h3 className='text-2xl font-bold mb-4'>Explore</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Home</li>
                            <li>Contact Us</li>
                            <h3 className='text-2xl font-bold my-4'>Follow Us</h3>
                            <div className="flex gap-2 follow-us">
                                <FaFacebook />
                                <AiFillInstagram />
                                <FaSquareTwitter />
                                <FaLinkedin />
                            </div>
                        </ul>
                    </div>
                    <div className="footer2 sm:col-span-12 md:col-span-6 lg:col-span-3">
                        <h3 className='text-2xl font-bold mb-4'>Our Products</h3>
                        <ul>
                            <li>Knife Handles</li>
                            <li>Teflon Bone Folder</li>
                            <li>Stationary Craft</li>
                            <li>Guitar Components</li>
                            <li>Popular Products</li>
                        </ul>
                    </div>
                    <div className="footer4 sm:col-span-12 md:col-span-6 lg:col-span-3">
                        <h3 className='text-2xl font-bold mb-4'>Address</h3>
                        <ul>
                            <li><p className='flex'>
                                <span><IoLocation /></span>
                                <span>Khasra No: 1703/1, Toli Mohalla, Mohalla Purvi Jatav, LONI – Ghaziabad-201102, UP, INDIA</span>
                            </p></li>
                            <li><div className='flex'>
                                <span><FcCellPhone /></span>
                                <span>+91 7428136563,</span>
                            </div></li>
                            <li><div className='flex'>
                                <span><GiRotaryPhone /></span>
                                <span>+91 011- 4227-3742</span>
                            </div></li>
                            <li><div className='flex'>
                                <span><IoMail /></span>
                                <span>info@bonehornmart.com</span>
                            </div></li>
                        </ul>
                    </div>
                </div>
                <div className="reserved-section">
                    <div className='hr-line' />
                    <p className='text-center'>Copyright &#169; 1985-2024 <span className='text-red-600 font-semibold'>RC Creation.</span> All Rights Reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
