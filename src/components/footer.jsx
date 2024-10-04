
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { GoArrowRight } from "react-icons/go";
// import Logo from "../assets/logo2.png";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";
// import { Link, Navigate } from "react-router-dom"; // Import Link from react-router-dom
// import VikshitBharat from "../assets/vikshitBharat.png"
// import Ajadi from "../assets/ajadi.png"
// import Culture from "../assets/culture.png"
// import Shiksha from "../assets/shiksha.png"
// import bg from "../assets/bg.jpeg"


// const Footer = () => {

//   const navigate = useNavigate();

//   const subscribeHandler = () => {
//     navigate("/payment")
//   }




//   return (
//     <div className="bg-yellow-300 pt-12 text-black" >
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-8 text-center md:text-left">

//         <div className="md:w-1/2">
//           <h2 className="text-3xl font-bold" style={{ fontFamily: 'Gowun Batang, serif' }}>Join Our Newsletter</h2>
//           <p className="mt-2 text-black" style={{ fontFamily: 'Quicksand, sans-serif' }}>
//             Newsletter dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
//           </p>
//         </div>

//         <div className="relative md:w-1/2 max-w-lg w-full">
//           <input
//             type="text"
//             placeholder="Enter your email"
//             className="w-full p-4 rounded-full text-black pr-32 focus:outline-none"
//           />

//           <button onClick={subscribeHandler} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-orange-600 transition-colors">
//             Subscribe Now <GoArrowRight />
//           </button>
//         </div>
//       </div>

//       <hr className="w-11/12 mx-auto border-t border-gray-400 opacity-40 mt-10" />

//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start mt-10 space-y-6 md:space-y-0 md:space-x-8 text-center md:text-left">

//         <div className="md:w-1/5">
//           <h1 className="text-2xl font-semibold text-black mb-4 hover:text-blue-800" style={{ fontFamily: 'Gowun Batang, serif' }}>Contact Info</h1>
//           <ul className="space-y-2">
//             <li className="flex justify-center md:justify-start items-center gap-2 text-blue-700 font-light"><FaMapMarkerAlt /> NGO ADDRESS</li>
//             <li>Flate No. 207 Inaaya Royal Hegihts, Gomti Nagar Extension, sector-01, Lucknow</li>
//             <li className="flex justify-center md:justify-start items-center gap-2 text-blue-700 font-light"><FaPhoneAlt /> CALL US:</li>
//             <li>+91-9454713121</li>
//             <li className="flex justify-center md:justify-start items-center gap-2 text-blue-700 font-light"><FaEnvelope /> EMAIL US:</li>
//             <li>sk4bharat@gmail.com</li>
//           </ul>
//         </div>

//         <div className="md:w-1/4">
//           <h1 className="text-2xl font-semibold text-black mb-4 hover:text-blue-800" style={{ fontFamily: 'Gowun Batang, serif' }}>Links</h1>
//           <ul className="space-y-2" style={{ fontFamily: 'Quicksand, sans-serif' }}>
//             <li><Link to="/" className="hover:text-orange-600">Home</Link></li>
//             <li><Link to="/events" className="hover:text-orange-600">Events</Link></li>
//             <li><Link to="/videos" className="hover:text-orange-600">Video</Link></li>
//             <li><Link to="/gallery" className="hover:text-orange-600">Gallery</Link></li>
//             <li><Link to="/contact" className="hover:text-orange-600">Contact</Link></li>
//             <li><Link to="/nomination" className="hover:text-orange-600">Nomination Form</Link></li>
//           </ul>
//         </div>

//         <div className="md:w-1/4">
//           <h1 className="text-2xl font-semibold text-black mb-4 hover:text-blue-800" style={{ fontFamily: 'Gowun Batang, serif' }}>Our Support</h1>
//           <ul className="space-y-2" style={{ fontFamily: 'Quicksand, sans-serif' }}>
//             <li><Link to="/terms" className="hover:text-orange-600">Terms & Conditions</Link></li>
//             <li><Link to="/privacy" className="hover:text-orange-600">Privacy Policy</Link></li>
//             <li className="flex justify-center md:justify-start space-x-4 py-2">
//               <a href="https://www.facebook.com/sadhanashrikutumb?mibextid=ZbWKwL" className="hover:text-orange-600"><FiFacebook /></a>
//               <a href="https://x.com/SK4Bharat?t=NOBupCQQeTD890p3dcMR3w&s=08" className="hover:text-orange-600"><FiTwitter /></a>
//               <a href="https://www.instagram.com/sadhanashrikutumb?igsh=b3gyMDBpa3FwbnZl" className="hover:text-orange-600"><FiInstagram /></a>
//               <a href="https://www.linkedin.com/in/sadhanashrikutumb/" className="hover:text-orange-600"><FiLinkedin /></a>
//               <a href="https://youtube.com/@sadhanashrikutumb?si=2_3dbAEJ0c28JOyD" className="hover:text-orange-600"><FiYoutube /></a>
//             </li>
//           </ul>
//         </div>

//         <div className="md:w-1/4 flex justify-center md:justify-end">
//           <img src={Logo} alt="Logo" className="h-56 w-64" />
//         </div>
//       </div>

//       <hr className="w-11/12 mx-auto border-t border-gray-400 opacity-40 mt-10" />

//       <div className="text-center font-light text-xs mt-6 flex flex-col gap-2">
//         <p>Copyright @ SADHANASHRI KUTUMB. All Rights Reserved by</p>
//         <p><Link to="/terms" className="hover:text-orange-600">Terms & Conditions</Link> | <Link to="/privacy" className="hover:text-orange-600">Privacy Policy</Link> | <Link to="/refund-policy" className="hover:text-orange-600">Refund Policy</Link></p>
//       </div>
//       {/* <hr className="w-11/12 mx-auto border-t border-gray-400 opacity-40 mt-10" /> */}


//       <div className="text-center font-light text-xs mt-6   gap-2">

//         <div className="flex items-center justify-center w-full">
//           <hr className="flex-grow ml-14 border-t-2 border-gray-400 opacity-70" />
//           <h2 className="text-4xl px-4 my-4" style={{ fontFamily: 'Gowun Batang, serif' }}>
//             : Support With :
//           </h2>
//           <hr className="flex-grow mr-14 border-t-2 border-gray-400 opacity-70" />
//         </div>


//         <div className="flex flex-col sm:flex-row">
//           <img src={VikshitBharat} alt="Vikshit Bharat" className="w-48 mb-10 h-auto mx-auto object-contain" />
//           <img src={Ajadi} alt="Vikshit Bharat" className="w-48 mb-10 h-auto mx-auto object-contain" />
//           <img src={Culture} alt="Vikshit Bharat" className="w-48 mb-10 h-auto mx-auto object-contain" />
//           {/* <img src={VikshitBharat} alt="Vikshit Bharat" className="w-48 mb-10 h-auto mx-auto object-contain" /> */}
//           <img src={Shiksha} alt="Vikshit Bharat" className="w-36 mb-10 h-auto mx-auto object-contain" />
//         </div>
//       </div>


//     </div>
//   );
// };

// export default Footer;








import React from "react";
import { useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import Logo from "../assets/logo2.png";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";
import { Link, Navigate } from "react-router-dom";
import VikshitBharat from "../assets/vikshitBharat.png";
import Ajadi from "../assets/ajadi.png";
import Culture from "../assets/culture.png";
import Shiksha from "../assets/shiksha.png";
import FooterBackground from "../assets/bg.jpeg" // Assuming this is the background image path
// import bg from "../assets/bg.jpeg"



const Footer = () => {
  const navigate = useNavigate();

  const subscribeHandler = () => {
    navigate("/payment");
  };

  return (
    <div
      className="bg-neutral-800 text-lime-400 pt-12 text-black"
      // style={{
      //   backgroundImage: `url(${FooterBackground})`, // Background image
      //   backgroundSize: "cover", // Make the background cover the whole area
      //   backgroundPosition: "center",
      //   opacity: '95%', 
      //   backgroundRepeat: "no-repeat", // Ensure the background doesn't repeat
      // }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-8 text-center md:text-left">
        <div className="md:w-1/2">
          <h2 className="text-3xl text-yellow-300 font-bold" style={{ fontFamily: 'Gowun Batang, serif' }}>Join Our Newsletter</h2>
          <p className="mt-2 text-yellow-100" style={{ fontFamily: 'Quicksand, sans-serif' }}>
            Keep yourself well informed about our upcomming activities, events, programs by joining us on this platform.
          </p>
        </div>

        <div className="relative md:w-1/2 max-w-lg w-full">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full p-4 rounded-full text-black pr-32 focus:outline-none"
          />

          <button
            onClick={subscribeHandler}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-zinc-900	 text-orange-300 px-6 py-2 rounded-full flex items-center gap-2 hover:bg-zinc-950 transition-colors"
          >
            Subscribe Now <GoArrowRight />
          </button>
        </div>
      </div>

      <hr className="w-11/12 mx-auto border-t border-gray-400 opacity-40 mt-10" />

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start mt-10 space-y-6 md:space-y-0 md:space-x-8 text-center md:text-left">
        {/* Contact Info */}
        <div className="md:w-1/5">
          <h1 className="text-2xl font-semibold text-white mb-4 hover:text-orange-50" style={{ fontFamily: 'Gowun Batang, serif' }}>Contact Info</h1>
          <ul className="space-y-2">
            <li className="flex justify-center md:justify-start items-center gap-2 text-white font-light"><FaMapMarkerAlt /> NGO ADDRESS</li>
            <li>Flate No. 207 Inaaya Royal Hegihts, Gomti Nagar Extension, sector-01, Lucknow</li>
            <li className="flex justify-center md:justify-start items-center gap-2 text-white font-light"><FaPhoneAlt /> CALL US:</li>
            <li>+91-9454713121</li>
            <li className="flex justify-center md:justify-start items-center gap-2 text-white font-light"><FaEnvelope /> EMAIL US:</li>
            <li>sk4bharat@gmail.com</li>
          </ul>
        </div>

        {/* Links */}
        <div className="md:w-1/4">
          <h1 className="text-2xl font-semibold text-white mb-4 hover:text-orange-50" style={{ fontFamily: 'Gowun Batang, serif' }}>Links</h1>
          <ul className="space-y-2" style={{ fontFamily: 'Quicksand, sans-serif' }}>
            <li><Link to="/" className="hover:text-orange-600">Home</Link></li>
            <li><Link to="/events" className="hover:text-orange-600">Events</Link></li>
            <li><Link to="/videos" className="hover:text-orange-600">Video</Link></li>
            <li><Link to="/gallery" className="hover:text-orange-600">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-orange-600">Contact</Link></li>
            <li><Link to="/nomination" className="hover:text-orange-600">Nomination Form</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div className="md:w-1/4">
          <h1 className="text-2xl font-semibold text-white mb-4 hover:text-orange-50" style={{ fontFamily: 'Gowun Batang, serif' }}>Our Support</h1>
          <ul className="space-y-2" style={{ fontFamily: 'Quicksand, sans-serif' }}>
            <li><Link to="/terms" className="hover:text-orange-600">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-orange-600">Privacy Policy</Link></li>
            <li className="flex justify-center md:justify-start space-x-4 py-2">
              <a href="https://www.facebook.com/sadhanashrikutumb?mibextid=ZbWKwL" className="hover:text-orange-600"><FiFacebook /></a>
              <a href="https://x.com/SK4Bharat?t=NOBupCQQeTD890p3dcMR3w&s=08" className="hover:text-orange-600"><FiTwitter /></a>
              <a href="https://www.instagram.com/sadhanashrikutumb?igsh=b3gyMDBpa3FwbnZl" className="hover:text-orange-600"><FiInstagram /></a>
              <a href="https://www.linkedin.com/in/sadhanashrikutumb/" className="hover:text-orange-600"><FiLinkedin /></a>
              <a href="https://youtube.com/@sadhanashrikutumb?si=2_3dbAEJ0c28JOyD" className="hover:text-orange-600"><FiYoutube /></a>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <div className="md:w-1/4 flex justify-center md:justify-end">
          <img src={Logo} alt="Logo" className="h-56 w-64" />
        </div>
      </div>

      <hr className="w-11/12 mx-auto border-t border-gray-400 opacity-40 mt-10" />

      <div className="text-center font-light text-xs mt-6 pb-6 flex flex-col gap-2">
        <p>Copyright @ SADHANASHRI KUTUMB. All Rights Reserved by</p>
        <p><Link to="/terms" className="hover:text-orange-600">Terms & Conditions</Link> | <Link to="/privacy" className="hover:text-orange-600">Privacy Policy</Link> | <Link to="/refund-policy" className="hover:text-orange-600">Refund Policy</Link></p>
      </div>

      {/* Support With Section */}
      {/* <div className="text-center font-light text-xs mt-6 gap-2">
        <div className="flex items-center justify-center w-full">
          <hr className="flex-grow ml-14 border-t-2 border-gray-400 opacity-70" />
          <h2 className="text-4xl px-4 my-4" style={{ fontFamily: 'Gowun Batang, serif' }}>
            : Support With :
          </h2>
          <hr className="flex-grow mr-14 border-t-2 border-gray-400 opacity-70" />
        </div>

        <div className="flex flex-col sm:flex-row">
          <img src={VikshitBharat} alt="Vikshit Bharat" className="w-48 mb-10 h-auto mx-auto object-contain" />
          <img src={Ajadi} alt="Ajadi" className="w-48 mb-10 h-auto mx-auto object-contain" />
          <img src={Culture} alt="Culture" className="w-48 mb-10 h-auto mx-auto object-contain" />
          <img src={Shiksha} alt="Shiksha" className="w-48 mb-10 h-auto mx-auto object-contain" />
        </div>
      </div> */}
    </div>
  )
};

export default Footer;
