import React from "react";

import Navbar from "./components/Navbar/Navbar";
import HomeCara from "./components/pages/Home/homecarsoul/HomeCara";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Aboutus from "./components/pages/about-us/Aboutus";
import Contact from "./components/pages/contact-us/Contact";
import BoneNutProductRouting from "./components/pages/product/GuitarComponent/bonenut/BoneNutProductRouting";
import BoneNut from "./components/pages/product/GuitarComponent/bonenut/BoneNut";
import WhiteBoneNutBlank from "./components/pages/product/GuitarComponent/bonenut/whitebonenutblank/WhiteBoneNutBlank";

const App = () => {
  return (
    <section
      className="h-screen bg-Hero bg-cover
      font-[Poppins] md:bg-top bg-center"
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<HomeCara />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/products?" element={<BoneNut />} />
        <Route path="/product/details?" element={<WhiteBoneNutBlank />} />
      </Routes>

      <Footer />
    </section>
  );
};

export default App;
