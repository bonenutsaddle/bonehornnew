import React, { Component } from 'react';
import "./popularproduct.css";
import Pop1 from "../../../../assets/pop1.jpg";
import Pop2 from "../../../../assets/pop2.jpg";
import Pop3 from "../../../../assets/pop3.jpg";
import Pop4 from "../../../../assets/pop4.jpg";
import Pop5 from "../../../../assets/pop5.jpg";
import Pop6 from "../../../../assets/pop6.jpg";
import Pop7 from "../../../../assets/pop7.jpg";
import Pop8 from "../../../../assets/pop8.jpg";
import Pop9 from "../../../../assets/pop9.jpg";
import Pop10 from "../../../../assets/pop10.jpg";
import Pop11 from "../../../../assets/pop11.jpg";
import Pop12 from "../../../../assets/pop12.jpg";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function PopularProduct() {

    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     PopularProduct: true
    // };

    const settings = {
        infinite: true,
        slidesToShow: 3, // Default to 6 slides
        slidesToScroll: 1,
        speed: 500,
        autoplaySpeed: 1000,
        autoPlay: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1600, // xl
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 991, // md-lg
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576, // sm
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    return (
        <>
            <div className="latest-product-container text-center">
                <div className="latest-text-start">
                    <h1 className='text-4xl font-semibold'>
                        <span className='text-white'>Popular </span>
                        <span>Products</span>
                        <div className="hr-line"></div>
                    </h1>
                </div>
                <div className="slider-container w-[100%]  py-16">
                    <Slider {...settings} className='pl-10'>
                        <div className="card-latest-p">
                            <img src={Pop1} alt="" />
                            <div className="intro-latest-p">
                                <h1 className="text-h1 text-base">Buffalo Bone Slash Carved Rondelle Beads Light </h1>
                                <p className="text-p text-sm">
                                    Bring a warm, soft glow to your jewelry designs with our Buffalo Bone Slash Carved Rondelle Beads Light, featuring delicate carvings and a gentle, creamy hue.
                                </p>
                                <div className="latestproduct-button">
                                    <button className='more-product-btn'>More Product</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-latest-p">
                            <img src={Pop2} alt="" />
                            <div className="intro-latest-p">
                                <h1 className="text-h1 text-base">Buffalo Bone Slash Carved Rondelle Beads Brown</h1>
                                <p className="text-p text-sm">
                                    Bring warmth and sophistication to your jewelry creations with our Buffalo Bone Slash Carved Rondelle Beads Brown, showcasing intricate carvings and a rich, earthy tone.
                                </p>
                                <div className="latestproduct-button">
                                    <button className='more-product-btn'>More Product</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-latest-p">
                            <img src={Pop3} alt="" />
                            <div className="intro-latest-p">
                                <h1 className="text-h1 text-base">Buffalo Bone Slash Carved Rondelle Beads White</h1>
                                <p className="text-p text-sm">
                                    Add a touch of elegance to your designs with our Buffalo Bone Slash Carved Rondelle Beads White, featuring delicate carvings and a crisp, snowy white hue that exudes sophistication.
                                </p>
                                <div className="latestproduct-button">
                                    <button className='more-product-btn'>More Product</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-latest-p">
                            <img src={Pop4} alt="" />
                            <div className="intro-latest-p">
                                <h1 className="text-h1 text-base">Buffalo Bone Yellow Padre Prosser Button Beads </h1>
                                <p className="text-p text-sm">
                                    Infuse your jewelry with a touch of nostalgia using our Buffalo Bone Yellow Padre Prosser Button Beads, boasting a warm, sunny hue and classic button shape that adds a retro flair.
                                </p>
                                <div className="latestproduct-button">
                                    <button className='more-product-btn'>More Product</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-latest-p">
                            <img src={Pop5} alt="" />
                            <div className="intro-latest-p">
                                <h1 className="text-h1 text-base">Buffalo Horn Brown Polished Beads</h1>
                                <p className="text-p text-sm">
                                    Elevate your jewelry with our Buffalo Horn Brown Polished Beads, boasting a warm, organic hue and a high-shine finish that adds a touch of natural sophistication to any design.
                                </p>
                                <div className="latestproduct-button">
                                    <button className='more-product-btn'>More Product</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-latest-p">
                            <img src={Pop6} alt="" />
                            <div className="intro-latest-p">
                                <h1 className="text-h1 text-base">Buffalo Horn Dark Brown Polished Beads</h1>
                                <p className="text-p text-sm">
                                    Add a natural, sophisticated touch to your designs with our Buffalo Horn Dark Brown Polished Beads, featuring a rich, earthy tone and a high-gloss finish that exudes refinement.
                                </p>
                                <div className="latestproduct-button">
                                    <button className='more-product-btn'>More Product</button>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    <Slider {...settings} className='pt-16 pl-10 '>
                        <div className="card-latest-p">
                            <img src={Pop7} alt="" />
                            <div className="intro-latest-p ">
                                <h1 className="text-h1 text-base">Buffalo Horn red Beads Ultra Thin</h1>
                                <p className="text-p text-sm">
                                    Add a pop of vibrant color to your designs with our Buffalo Horn Red Beads Ultra Thin, featuring a bold, fiery hue and an ultra-slim profile for a modern, edgy look.
                                </p>
                                <div className="latestproduct-button">
                                    <button className='more-product-btn'>More Product</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-latest-p">
                            <img src={Pop8} alt="" />
                            <div className="intro-latest-p">
                                <h1 className="text-h1 text-base">Buffalo Horn black Beads Ultra Thin</h1>
                                <p className="text-p text-sm">
                                    Elevate your jewelry with our Buffalo Horn Black Beads Ultra Thin, boasting a sleek, dark finish and an ultra-slim profile that adds a touch of sophisticated elegance to any design.
                                </p>
                                <div className="latestproduct-button">
                                    <button className='more-product-btn'>More Product</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-latest-p">
                            <img src={Pop9} alt="" />
                            <div className="intro-latest-p">
                                <h1 className="text-h1 text-base">Buffalo Horn Red Hair Pipes Beads</h1>
                                <p className="text-p text-sm">
                                    Add a striking touch to your jewelry with our Buffalo Horn Red Hair Pipes Beads, featuring a vibrant, fiery hue and a unique hair pipe design that makes a statement.
                                </p>
                                <div className="latestproduct-button">
                                    <button className='more-product-btn'>More Product</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-latest-p">
                            <img src={Pop10} alt="" />
                            <div className="intro-latest-p">
                                <h1 className="text-h1 text-base">Buffalo Horn Amber Hair Pipe Beads</h1>
                                <p className="text-p text-sm">
                                    Bring a touch of natural elegance to your jewelry with our Buffalo Horn Amber Hair Pipe Beads, boasting a warm, honey-like hue and a unique hair pipe design that adds depth and character.
                                </p>
                                <div className="latestproduct-button">
                                    <button className='more-product-btn'>More Product</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-latest-p">
                            <img src={Pop12} alt="" />
                            <div className="intro-latest-p">
                                <h1 className="text-h1 text-base">Buffalo Horn Black Hair Pipe Beads</h1>
                                <p className="text-p text-sm">
                                    Add a bold, mysterious touch to your jewelry with our Buffalo Horn Black Hair Pipe Beads, featuring a sleek, dark hue and a unique hair pipe design that makes a statement.
                                </p>
                                <div className="latestproduct-button">
                                    <button className='more-product-btn'>More Product</button>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default PopularProduct
