import React from 'react';
import "./latestproduct.css";
import KnifeImg from "../../../../assets/knife-handle.png";
import BoneFolderImg from "../../../../assets/bone-folder.png";
import BoneDiceImg from "../../../../assets/bone-dice.png";
import GuitarComponetImg from "../../../../assets/guitar-component.png";
import PenBlankImg from "../../../../assets/pen-blank.jpeg";
import DrinkingHornImg from "../../../../assets/drinking-horn.jpg";


const LatestProducts = () => {
    return (
        <>
            <div className=' bg-[#21211f] pt-10'>
                <div className="latest-product-container lg:w-[90%] sm:p-[0.0rem] text-center ">

                    <div className="latest-text-start">
                        <h1 className='text-4xl font-semibold'>
                            <span className='text-white'>Latest </span>
                            <span>Products</span>
                            <div className="hr-line"></div>
                        </h1>
                    </div>
                    <div className="container-latest-p  sm:p-[1.3rem] overflow-x-hidden grid grid-cols-12 mt-12">
                        <div className="card-latest-p sm:col-span-12 md:col-span-6 lg:col-span-4">
                            <img src={KnifeImg} alt="" />
                            <div className="intro-latest-p">
                                <h1 className="text-h1">knife handle</h1>
                                <p className="text-p">
                                    Our expertly crafted bone knife handles are made from premium animal bone, precision-fitted to ensure a comfortable grip and durable performance, perfect for discerning knife enthusiasts and collectors.
                                </p>
                                <div className="latestproduct-button">
                                    <button className='more-product-btn'>More Product</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-latest-p sm:col-span-12 md:col-span-6 lg:col-span-4">
                            <img src={BoneFolderImg} alt="" />
                            <div className="intro-latest-p">
                                <h1 className="text-h1">bone folder</h1>
                                <p className="text-p">
                                    Our bone folder is a premium quality tool used by crafters and bookbinders alike. Our manufactured bone folders utilize high-quality materials, making them durable and precise.
                                </p>
                                <div className="latestproduct-button">
                                    <button className='more-product-btn'>More Product</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-latest-p sm:col-span-12 md:col-span-6 lg:col-span-4">
                            <img src={BoneDiceImg} alt="" />
                            <div className="intro-latest-p">
                                <h1 className="text-h1">bone dice</h1>
                                <p className="text-p">
                                    Add a touch of ancient charm to your tabletop games with our handcrafted Bone Dice. Made from natural bone, these unique dice bring a sense of history and mystique to your gameplay experience.
                                </p>
                                <div className="latestproduct-button">
                                    <button className='more-product-btn'>More Product</button>
                                </div>
                            </div>
                        </div>

                        <div className="card-latest-p sm:col-span-12 md:col-span-6 lg:col-span-4">
                            <img src={GuitarComponetImg} alt="" />
                            <div className="intro-latest-p">
                                <h1 className="text-h1">guitar componet</h1>
                                <p className="text-p">
                                    Discover the unique sound of our bone guitar components. Crafted from animal bone, the nut or saddle adds warmth and sustain, enhancing the overall tone of your instrument.
                                </p>
                                <div className="latestproduct-button">
                                    <button className='more-product-btn'>More Product</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-latest-p sm:col-span-12 md:col-span-6 lg:col-span-4">
                            <img src={PenBlankImg} alt="" />
                            <div className="intro-latest-p">
                                <h1 className="text-h1">pen blanks</h1>
                                <p className="text-p">
                                    Create unique pens with our bone pen blanks, made from high-quality animal bone. Durable and distinctive, our blanks offer a variety of shapes and sizes to elevate your pen-making craft.
                                </p>
                                <div className="latestproduct-button">
                                    <button className='more-product-btn'>More Product</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-latest-p sm:col-span-12 md:col-span-6 lg:col-span-4">
                            <img src={DrinkingHornImg} alt="" />
                            <div className="intro-latest-p">
                                <h1 className="text-h1">drinking horn</h1>
                                <p className="text-p">
                                    Unleash your wild side with our genuine animal drinking horns, crafted from naturally shed antlers and horns. A rustic, eco-friendly way to enjoy your favorite beverages.
                                </p>
                                <div className="latestproduct-button">
                                    <button className='more-product-btn'>More Product</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

export default LatestProducts
