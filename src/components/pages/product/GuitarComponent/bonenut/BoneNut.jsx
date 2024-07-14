import React from "react";
import { useNavigate } from "react-router-dom";
import "./bonenutmain.css";
import BoneHomeImg from "../../../../../assets/guitar-components/bone-nut-home.jpg";
import WhiteBoneImg1 from "../../../../../assets/guitar-components/whitebonenut1.jpg";
import DyedBoneImg1 from "../../../../../assets/guitar-components/dyedbonenut1.jpg";
import VintageBoneImg1 from "../../../../../assets/guitar-components/vintagbonnut1.jpg";
import BoneshapedImg1 from "../../../../../assets/guitar-components/boneshapednut1.jpg";

import ConstantData from "../../../../../utiles/Data";
import { Link, useLocation } from "react-router-dom";

function BoneNut() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const producName = searchParams.get("headslug");

  const filteredProperties = ConstantData.filter(
    (products) => products.headslug === producName
  );

  const navigate = useNavigate();
  return (
    <>
      <div className="bone-nut bg-[#CFE175]">
        {filteredProperties.map((item, index) => (
          <div key={index} className="grid grid-cols-12 w-[80%] mx-auto py-12">
            <div className="lg:col-span-6 md:col-span-12 sm:col-span-12">
              <h3 className="text-[34px] font-bold mb-5">{item.head}</h3>
              <p className="text-justify">{item.dec}</p>
            </div>

            <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 text-center lg:w-[60%] sm:w-[100%] mx-auto relative overflow-hidden bg-cover bg-no-repeat">
              <img
                src={item.mainData[2].img}
                alt=""
                className="w-full max-h-[300px] rounded-xl hover:cursor-pointer transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Product-Section */}

      <div className="bg-[#21211f]">
        {filteredProperties.map((item, index) => (
          <div>
            {item.mainData && (
              <div className="grid grid-cols-12 w-[90%] mx-auto lg:gap-16 sm:gap-6 py-10">
                {item.mainData.map((p, i) => (
                  <Link
                    to={`/product/details?id=${p.id}`}
                    className="lg:col-span-3 md:col-span-6 sm:col-span-12"
                  >
                    <div className="whiteboneproduct-img">
                      <img src={p.img} alt="" />
                    </div>
                    <p className="text-center text-[#ECB709] h-[50px]">
                      {p.title}
                    </p>
                    <div className="text-center mt-3">
                      <button
                        type="button"
                        class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-[#353131]  focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                      >
                        View All Products
                      </button>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default BoneNut;
