import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./bonenutmain.css";
import BoneHomeImg from "../../../../../assets/guitar-components/bone-nut-home.jpg";
import WhiteBoneImg1 from "../../../../../assets/guitar-components/whitebonenut1.jpg";
import DyedBoneImg1 from "../../../../../assets/guitar-components/dyedbonenut1.jpg";
import VintageBoneImg1 from "../../../../../assets/guitar-components/vintagbonnut1.jpg";
import BoneshapedImg1 from "../../../../../assets/guitar-components/boneshapednut1.jpg";

function BoneNut() {
    const navigate = useNavigate()
    return (
        <>
            <div className="bone-nut bg-[#CFE175]">
                <div className="grid grid-cols-12 w-[80%] mx-auto py-12 ">
                    <div className="lg:col-span-6 md:col-span-12 sm:col-span-12">
                        <h3 className='text-[34px] font-bold mb-5'> Guitar Bone Nut</h3>
                        <p className='text-justify'>Unleash the tone of your guitar with our premium bone nuts, crafted from sustainably sourced animal bones. Our expert luthiers carefully select and shape each nut to bring out its unique characteristics, resulting in a rich, warm sound. From camel bones to buffalo horns, each nut is precision-made to fit your guitar perfectly. Experience the harmonic resonance and sustain of our bone nuts, designed to enhance your music and inspire your creativity. Upgrade your guitar with our eco-friendly, handcrafted bone nuts and discover a new level of tone and playability."</p>
                    </div>
                    <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 text-center right-0 lg:w-[60%] sm:w-[100%] sm:top-6  mx-auto relative overflow-hidden bg-cover bg-no-repeat">
                        <img src={BoneHomeImg} alt="" className='w-full max-h-[300px] rounded-xl hover:cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:rounded-xl' />
                    </div>
                </div>
            </div>

            {/* Product-Section */}

            <div className="bg-[#21211f]">
                <div className="grid grid-cols-12 w-[90%] mx-auto lg:gap-16 sm:gap-6 py-10">
                    <div className="lg:col-span-3 md:col-span-6 sm:col-span-12">
                        <div className="whiteboneproduct-img">
                            <img src={WhiteBoneImg1} alt="" onClick={() => navigate('/guitar-component/bone-nut/white-bone-nut-blank')} />
                        </div>
                        <p className='text-center text-[#ECB709] h-[50px]'>White Bone Nut Blank <br />(Bleached Bone)</p>
                        <div className="text-center mt-3">
                            <button type="button" onClick={() => navigate('/guitar-component/bone-nut/white-bone-nut-blank')} class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-[#353131]  focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">View All Products</button>
                        </div>
                    </div>
                    <div className="lg:col-span-3 md:col-span-6 sm:col-span-12">
                        <div className="whiteboneproduct-img">
                            <img src={DyedBoneImg1} alt="" />
                        </div>
                        <p className='text-center text-[#ECB709] h-[50px]'>Dyed Bone Nut Blank </p>
                        <div className="text-center mt-3">
                            <button type="button" class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-[#353131]  focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">View All Products</button>
                        </div>
                    </div>
                    <div className="lg:col-span-3 md:col-span-6 sm:col-span-12">
                        <div className="whiteboneproduct-img">
                            <img src={VintageBoneImg1} alt="" />
                        </div>
                        <p className='text-center text-[#ECB709] h-[50px]'>Vintage Bone Nut Blank <br /> (Unbleached Bone) </p>
                        <div className="text-center mt-3">
                            <button type="button" class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-[#353131]  focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">View All Products</button>
                        </div>
                    </div>
                    <div className="lg:col-span-3 md:col-span-6 sm:col-span-12">
                        <div className="whiteboneproduct-img bone-shaped-1">
                            <img src={BoneshapedImg1} alt="" className='lg:object-contain ' />
                        </div>
                        <p className='text-center text-[#ECB709] h-[50px]'>Bone Shaped & Slotted Nut </p>
                        <div className="text-center mt-3">
                            <button type="button" class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-[#353131]  focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">View All Products</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BoneNut
