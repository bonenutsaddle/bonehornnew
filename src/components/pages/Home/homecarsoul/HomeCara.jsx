import Home1 from "../../../../assets/home3.jpg";
import Home2 from "../../../../assets/homeimg2.avif";
import Home3 from "../../../../assets/homeimg3.jpg";
import "./homecara.css";
import React, { useRef, } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import LatestProducts from "../latestproduct/LatestProducts";
import Mission from "../missionvalue/Mission";
import OurWebsite from "../welcome-website/OurWebsite";
import ShippingPartners from "../shippingpartner/ShippingPartners";
import PopularProduct from "../popularproduct/PopularProduct";
import QueryForm from "../queryform/QueryForm";


function HomeCara() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,

        }}
        navigation={true}
        loop={true}
        modules={[Navigation]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full  sm:h-[15rem] lg:h-[90vh]">
            <img src={Home1} alt="" className='absolute  opacity-70 w-full sm:h-fit lg:h-full object-full' />
            <div className="absolute flex flex-col capitalize lg:top-28 sm:top-2 text-center lg:w-full items-center lg:h-full">
              <h2 className="text-black lg:text-2xl lg:font-medium sm:text-sm">welcome to</h2>
              <h1 className="md:text-6xl text-3xl text-black sm:text-xl font-semibold py-5">
                RC CREATION
              </h1>
              <h3 className='text-black lg:text-2xl font-medium sm:text-sm'>Bone & Horn, Wooden Handicrafts Manufacturer & Exporter All Over The World.</h3>
              <div className="button-section-home">
                <button >Knife Handle</button>
                <button className='btn-home2'>Bone Folder</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full sm:h-[15rem] lg:h-[90vh]">
            <img src={Home2} alt="" className='absolute  opacity-70 lg:w-full lg:h-full sm:h-fit object-full' />
            <div className="absolute flex flex-col capitalize lg:top-28 sm:top-2 text-center lg:w-full items-center lg:h-full">
              <h2 className="text-black lg:text-2xl font-medium sm:text-sm ">welcome to</h2>
              <h1 className="md:text-6xl text-3xl sm:text-xl text-black font-semibold py-5">
                RC CREATION
              </h1>
              <h3 className='text-black lg:text-2xl font-medium sm:text-sm '>We provide premium quality Camel bone and water buffalo horn</h3>
              <div className="button-section-home">
                <button> Guitar Component</button>
                <button className='btn-home2'>Bone Dice</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full sm:h-[15rem] lg:h-[90vh]">
            <img src={Home3} alt="" className='absolute  opacity-70 lg:w-[100%] lg:h-full object-full' />
            <div className="absolute flex flex-col capitalize lg:top-28 sm:top-2 text-center lg:w-full items-center lg:h-full">
              <h2 className="text-black lg:text-2xl font-medium sm:text-sm">welcome to</h2>
              <h1 className="md:text-6xl text-3xl text-black font-semibold py-5 sm:text-xl">
                RC CREATION
              </h1>
              <h3 className='text-black lg:text-2xl font-medium sm:text-sm'>Wooden and Leather Handicraft Items, to make sure <br /> that these meet the industry quality standards</h3>
              <div className="button-section-home">
                <button >Pen Blanks</button>
                <button className='btn-home2'>Drinking Horn</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper >

      <LatestProducts />
      <Mission />
      <OurWebsite />
      <ShippingPartners />
      <PopularProduct />
      <QueryForm />
    </>
  )
}

export default HomeCara;