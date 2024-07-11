import React from 'react';
import OurWebsiteImg from '../../../../assets/ourwebsiteimg.webp';
import "./ourwebsite.css"
function OurWebsite() {
    return (
        <>
            <div className="mt-10 overflow-hidden">
                <div className="border grid grid-cols-12 border-black mx-10 lg:p-10  gap-10">
                    <div className="ourwebsite-img sm:col-span-12 md:col-span-6 lg:col-span-6">
                        <img src={OurWebsiteImg} alt="" className=' lg:w[500px] lg:h[500px] ' />
                    </div>
                    <div className="ourwebsite-text  sm:col-span-12 md:col-span-6 lg:col-span-6">
                        <h4 className='text-4xl font-bold'>Welcome to our Website</h4>
                        <p>About us Located in Ghaziabad, Uttar Pradesh (India), we at Gift Mart was established in the year 2015. We are one of the preeminent Suppliers of exquisite range that includes Wooden and Resin Coaster Set, Natural Horn Comb, Bone Hair Comb, Wooden Hair Comb, Horn Drinking Mugs, Horn Bone Jewelry Box, Wooden MDF Box, Mother of Pearl Box, Buffalo Horn Box, Wooden Lamp and Buffalo Horn Toggles, etc.  Apart from the compliance of different products with global quality standards, we have become a good choice for our clients. We focus more on ethical business policies and help the clients with open quality products. Additionally, to answer the needs of the clients, we make proper quality testing of the products at different levels. Our experts have a deep knowledge of dominant market trends.</p>
                        <div className="testimonial-btn text-start">
                            <button>Read More.</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurWebsite
