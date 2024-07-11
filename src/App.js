import React from "react";

import Navbar from "./components/Navbar/Navbar";
import HomeCara from "./components/pages/Home/homecarsoul/HomeCara";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Aboutus from "./components/pages/about-us/Aboutus";
import Contact from "./components/pages/contact-us/Contact"
import AllProductPage from "./components/pages/product/AllProductPage";

const App = () => {
  return (
    <section
      className="h-screen bg-Hero bg-cover
      font-[Poppins] md:bg-top bg-center"
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<HomeCara />} />
        <Route path='/about-us' element={<Aboutus />} />
        <Route path='/contact-us' element={<Contact />} />

      </Routes>
      <AllProductPage />
      <Footer />
    </section>
  );
};

export default App;
