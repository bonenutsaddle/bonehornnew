import React, { useState } from 'react';
import QueryFormImg from "../../../../assets/work-from-home.png";

// import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import "./queryform.css";

function QueryForm() {
    const [phone, setPhone] = useState();
    return (
        <div className="bg-blue-500 min-h-fit grid grid-cols-2 justify-center">
            <div className="w-[80%] mx-auto p-10">
                <div className="query-img h-[80%] w-[80%]">
                    <img src={QueryFormImg} alt="" />
                </div>
            </div>
            <div className="query-form-text mt-12">
                <h4 className="text-4xl font-bold text-white w-[90%]">Let's Connect With Us</h4>

                <form action="" className='space-y-4 mt-10 w-[80%]'>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <input
                                type="text"
                                placeholder='*Your Name'
                                id="name"
                                className="shadow placeholder-white appearance-none name-input-box border border-white bg-blue-800 rounded w-[100%] py-3 px-2 leading-tight text-white focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder='*E-Mail'
                                id="emai"
                                className="shadow placeholder-white appearance-none border border-white bg-blue-800 rounded w-[100%] py-3 px-2 text-white leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <PhoneInput
                                defaultCountry="ua"
                                value={phone}
                                onChange={(phone) => setPhone(phone)}
                                className="shadow  appearance-none border border-white bg-blue-800 rounded w-[100%] py-1 px-2 "
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder='*Organization Name'
                                id="name"
                                className="shadow placeholder-white appearance-none name-input-box border border-white bg-blue-800 rounded w-[100%] py-3 px-2 leading-tight text-white focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder='*Products/Service Looking For'
                                id="name"
                                className="shadow placeholder-white appearance-none name-input-box border border-white bg-blue-800 rounded w-[100%] py-3 px-2 leading-tight text-white focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div>
                            <select
                                placeholder="*Select Your Country"
                                className="shadow placeholder-white appearance-none name-input-box border border-white bg-blue-800 rounded w-[100%] py-3 px-2 leading-tight text-white focus:outline-none focus:shadow-outline"
                            >
                                <option value="">*Select Your Country</option>
                                <option value="">India</option>
                                <option value="">United States</option>
                                <option value="">Japan</option>
                                <option value="">Australia</option>
                                <option value="">Canada</option>
                                <option value="">China</option>
                                <option value="">Germany</option>
                                <option value="">United Kingdom</option>
                                <option value=""> Russia</option>
                            </select>
                        </div>
                    </div>
                    <div className='grid grid-cols-1'>
                        <textarea
                            name=""
                            id="requirements"
                            placeholder='*Describe Your Requirements'
                            className="shadow placeholder:text-white  appearance-none border border-white bg-blue-800 rounded w-[100%] py-1 px-2 "
                        >
                        </textarea>
                    </div>
                    <div className="latestproduct-button text-end  ">
                        <button className='more-product-btn px-8 py-3 text-base'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default QueryForm;

//         <label
//             htmlFor="requirements"
//             className="block text-gray-700 font-bold mb-2"
//         >
//             Describe Your Requirements
//         </label>
//         <textarea
//             id="requirements"
//             value={requirements}
//             onChange={(e) => setRequirements(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
//             rows="4"
//         ></textarea>
//     </div>
//     <div className="flex items-center justify-center">
//         <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
//         >
//             Submit
//         </button>
//     </div>
// </form>
// </div> */}