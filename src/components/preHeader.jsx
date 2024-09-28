

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo2.png"
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";


const PreHeader = () => {
  return (
    <section className="bg-white py-4">
      <div className="container mx-auto flex flex-col  md:flex-row justify-around items-center">

        {/* Left Section: Logo */}
        <div className="flex gap-6 items-center mb-4 md:mb-0">
          <div>
          <Link to="/" >
          <img src={Logo} alt="India Think Council Logo" className="h-32 " />
              {/* <img src={Logo} className="h-20 w-20 p-2 ml-10" alt="Logo" /> */}
            </Link>
          </div>
          <div style={{ fontFamily: 'Gowun Batang, serif' }}>
          <h1 className="text-xl font-extrabold " style={{ fontFamily: 'Gowun Batang, serif', fontWeight: 900 }} >SADHANASHRI KUTUMB  </h1>
          <p className="text-xs text-yellow-500">Dharm | Sanskriti | Nation</p>
          <p className="text-xs">Indian Knowledge Tradition & Execution Policy Research</p>
          </div>

        </div>

        {/* Center Section: Text */}
        <div className="text-center ">
          <h1 className="text-2xl font-semibold" style={{ fontFamily: 'Eczar, serif', fontWeight: 400 }}>साधनाश्री कुटुम्ब </h1>
          <p className="text-xs text-blue-600">धर्म | संस्कृति | राष्ट्र</p>
          <p className="text-xs">भारतीय ज्ञान परंपरा और क्रियान्वयन नीति अनुसंधान</p>
        </div>

        {/* Right Section: Social Media Icons and Button */}
        <div className="flex flex-col items-center mt-10 sm:mt-0 space-y-6">
          <div className="flex space-x-3 gap-2">
            <a href="https://www.facebook.com/sadhanashrikutumb?mibextid=ZbWKwL" target="_blank">
              <FaFacebookF className="text-gray-600" />
            </a>
            <a href="https://x.com/SK4Bharat?t=NOBupCQQeTD890p3dcMR3w&s=08" target="_blank">
              <FaTwitter className="text-gray-600" />
            </a>
            <a href="https://youtube.com/@sadhanashrikutumb?si=2_3dbAEJ0c28JOyD" target="_blank">
              <IoLogoYoutube className="text-gray-600" />
            </a>
            <a href="https://www.instagram.com/sadhanashrikutumb?igsh=b3gyMDBpa3FwbnZl" className="text-gray-600"><GrInstagram /></a>
            <a href="https://www.linkedin.com/in/sadhanashrikutumb/" target="_blank">
              <FaLinkedinIn className="text-gray-600" />
            </a>
          </div>
          <div>
            <a href="/join-us" className="bg-red-600 text-white px-4 py-2 rounded">
              CONTRIBUTE NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreHeader;

