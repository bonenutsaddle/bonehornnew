import React from 'react';
import "./shippingpartners.css"
import FedExImg from "../../../../assets/fedex.png";
import DhlImg from "../../../../assets/dhl.png";
import UpsImg from "../../../../assets/ups.png";
import UspImg from "../../../../assets/us-150x150.png";


function ShippingPartners() {
    return (
        <>
            <div className=" w-[95%] mx-auto  py-16 items-center justify-center">
                <h4 className='text-center font-bold text-4xl'>
                    <span>Our </span>
                    <span className='text-amber-600'> Shipping Partners</span>
                </h4>
                <div className="hr-line" style={{ border: "1px solid #d79f00" }}></div>

                <section className="logoMarqueeSection">
                    <div className="container" id="logoMarqueeSection">
                        <div className="default-content-container flex items-center">
                            <div className="default-content-container-inner marquee-wrapper relative overflow-hidden inline-block">
                                <div className="marquee" style={{ animationDuration: '10s' }}>
                                    <a target="_blank"><img src={FedExImg} title className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank"><img src={DhlImg} title className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank"><img src={UpsImg} title className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank"><img src={UspImg} title className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>

                                </div>
                                <div className="marquee" style={{ animationDuration: '10s' }}>
                                    <a target="_blank"><img src={FedExImg} title className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank"><img src={DhlImg} title className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank"><img src={UpsImg} title className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank"><img src={UspImg} title className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default ShippingPartners
