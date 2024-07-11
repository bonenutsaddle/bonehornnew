import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
// import Button from "../Button";
import NavLinks from "./NavLinks";
import "./navbar.css"

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return (
    <nav className={`bg-white ${sticky ? "sticky" : ""}`}>
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} onClick={() => navigate("/")} alt="logo" className="md:cursor-pointer h-9" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="py-7 px-3 inline-block">
              About Us
            </Link>
          </li>
          <NavLinks />

          <li>
            <Link to="/contact-us" className="py-7 px-3 inline-block">
              Contact Us
            </Link>
          </li>
        </ul>
        {/* <div className="md:block hidden">
          <Button />
        </div> */}
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white z-50 fixed w-full capitalize top-0 overflow-y-auto bottom-0 mt-[75px] pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              About Us
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Contact Us
            </Link>
          </li>
          <div className="py-5">
            {/* <Button /> */}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
