

// import React, { useState, useEffect, useRef } from "react";
// import Logo from "../assets/logo2.png";
// import { GoArrowRight } from "react-icons/go";
// import { Link, useNavigate } from "react-router-dom";
// import { FaUserCheck } from "react-icons/fa";
// import PreHeader from "../components/preHeader"; // Import PreHeader

// const Header = () => {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       setIsLoggedIn(true);
//     }

//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const headerHeight = document.querySelector("header")?.offsetHeight;

//       if (scrollY > headerHeight) {
//         setIsSticky(true);
//         setTimeout(() => {
//           setIsVisible(true);
//         }, 800);
//       } else {
//         setIsVisible(false);
//         setTimeout(() => {
//           setIsSticky(false);
//         }, 500);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     };

//     if (dropdownOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [dropdownOpen]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     navigate("/");
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };


//   return (
//     <div style={{ fontFamily: 'Roboto Mono, monospace' }}>
//       {/* <PreHeader />  */}

//       {/* <header
//         className={`w-full bg-transparent transition-all duration-700 ease-in-out transform ${isSticky && isVisible
//             ? "fixed top-0 z-50 shadow-lg translate-y-0"
//             : isSticky
//               ? "-translate-y-full"
//               : "relative"
//           }`}
//       >
//         <div className="flex items-center justify-between p-2 bg-black/70"> */}
//       <header
//         className={`w-full bg-transparent transition-all duration-700 ease-in-out transform ${isSticky && isVisible
//           ? "fixed top-0 z-50 shadow-lg translate-y-0"
//           : isSticky
//             ? "-translate-y-full"
//             : "relative"
//           }`}
//       >
//         <div className="flex items-center justify-between p-2 bg-black/70">


//           <div>
//             <Link to="/" onClick={toggleMenu}>
//               <img src={Logo} className="h-20 w-24  sm:h-28 sm:w-32 ml-10" alt="Logo" />
//             </Link>
//           </div>
//           <div className="hidden md:flex ">
//             <ul className="flex gap-6 items-center text-white">
//               <li><Link to="/" className="text-lg font-thin hover:text-red-600">Home</Link></li>
//               <li><Link to="/about" className="text-lg font-thin hover:text-red-600">About</Link></li>
//               <li><Link to="/member" className="text-lg font-thin hover:text-red-600">Organization</Link></li>
//               <li><Link to="/our-project" className="text-lg font-thin hover:text-red-600">Project</Link></li>
//               <li><Link to="/legal-advisor" className="text-lg font-thin hover:text-red-600">LegalAdvisor</Link></li>
//               <li><Link to="/Visitor" className="text-lg font-thin hover:text-red-600">Visitor</Link></li>
//               <li><Link to="/events" className="text-lg font-thin hover:text-red-600">Events</Link></li>
//               <li><Link to="/gallery" className="text-lg font-thin hover:text-red-600">Gallery</Link></li>
//               <li><Link to="/contact" className="text-lg font-thin hover:text-red-600">Contact</Link></li>
//               <li><Link to="/join-us" className="text-lg font-thin hover:text-red-600">JoinUs</Link></li>
//             </ul>
//           </div>

//           <div className="flex items-center gap-4">
//             {isLoggedIn ? (
//               <div className="relative" ref={dropdownRef}>
//                 <button
//                   className="text-gray-300 text-3xl mr-16 hover:text-gray-400 focus:outline-none"
//                   onClick={toggleDropdown}
//                 >
//                   <FaUserCheck />
//                 </button>
//                 {dropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
//                     <ul className="flex flex-col">
//                       <li className="px-4 py-2 hover:bg-gray-200">
//                         <Link to="/profile" onClick={() => setDropdownOpen(false)}>
//                           Profile
//                         </Link>
//                       </li>
//                       <li
//                         className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
//                         onClick={() => {
//                           handleLogout();
//                           setDropdownOpen(false);
//                         }}
//                       >
//                         Logout
//                       </li>
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <Link to="/login">
//                 <button className="flex bg-red-500 text-white px-4 py-2 rounded-md items-center gap-2 hover:bg-red-600">
//                   Register <GoArrowRight />
//                 </button>
//               </Link>
//             )}
//           </div>
//         </div>

//         {menuOpen && (
//           <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
//             <ul className="flex flex-col items-start p-4">
//               <li className="py-2">
//                 <Link to="/" onClick={toggleMenu}>Home</Link>
//               </li>
//               <li className="py-2">
//                 <Link to="/about" onClick={toggleMenu}>About</Link>
//               </li>
//               <li className="py-2">
//                 <Link to="/member" onClick={toggleMenu}>Team</Link>
//               </li>
//               <li className="py-2">
//                 <Link to="/our-project" onClick={toggleMenu}>Programs</Link>
//               </li>
//               <li className="py-2">
//                 <Link to="/legal-advisor" onClick={toggleMenu}>Legal Advisor</Link>
//               </li>
//               <li className="py-2">
//                 <Link to="/events" onClick={toggleMenu}>Events</Link>
//               </li>
//               <li className="py-2">
//                 <Link to="/Visitor" onClick={toggleMenu}>Visitor</Link>
//               </li>
//               <li className="py-2">
//                 <Link to="/gallery" onClick={toggleMenu}>Gallery</Link>
//               </li>
//               <li className="py-2">
//                 <Link to="/contact" onClick={toggleMenu}>Contact</Link>
//               </li>
//               <li className="py-2">
//                 <Link to="/join-us" onClick={toggleMenu}>JoinUs</Link>
//               </li>
//             </ul>
//           </div>
//         )}
//       </header>
//     </div>
//   );
// };

// export default Header;




import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo2.png";
import { GoArrowRight } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";
import PreHeader from "../components/preHeader"; // Import PreHeader

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isJoinDropdownOpen, setIsJoinDropdownOpen] = useState(false); // State for join dropdown
  const dropdownRef = useRef(null);
  const joinDropdownRef = useRef(null); // Ref for join dropdown

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headerHeight = document.querySelector("header")?.offsetHeight;

      if (scrollY > headerHeight) {
        setIsSticky(true);
        setTimeout(() => {
          setIsVisible(true);
        }, 800);
      } else {
        setIsVisible(false);
        setTimeout(() => {
          setIsSticky(false);
        }, 500);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (joinDropdownRef.current && !joinDropdownRef.current.contains(event.target)) {
        setIsJoinDropdownOpen(false); // Close join dropdown when clicking outside
      }
    };

    if (dropdownOpen || isJoinDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen, isJoinDropdownOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleJoinDropdown = () => {
    setIsJoinDropdownOpen(!isJoinDropdownOpen);
  };

  return (
    <div style={{ fontFamily: 'Roboto Mono, monospace' }}>
      <header
        className={`w-full bg-transparent transition-all duration-700 ease-in-out transform ${isSticky && isVisible
          ? "fixed top-0 z-50 shadow-lg translate-y-0"
          : isSticky
            ? "-translate-y-full"
            : "relative"
          }`}
      >
        <div className="flex items-center justify-between p-2 bg-black/70">
          <div>
            <Link to="/" onClick={toggleMenu}>
              <img src={Logo} className="h-20 w-24  sm:h-28 sm:w-32 ml-10" alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:flex ">
            <ul className="flex gap-6 items-center text-white">
              <li><Link to="/" className="text-lg font-thin hover:text-red-600">Home</Link></li>
              <li><Link to="/about" className="text-lg font-thin hover:text-red-600">About</Link></li>
              <li><Link to="/member" className="text-lg font-thin hover:text-red-600">Organization</Link></li>
              <li><Link to="/our-project" className="text-lg font-thin hover:text-red-600">Project</Link></li>
              <li><Link to="/legal-advisor" className="text-lg font-thin hover:text-red-600">LegalAdvisor</Link></li>
              <li><Link to="/Visitor" className="text-lg font-thin hover:text-red-600">Visitor</Link></li>
              <li><Link to="/events" className="text-lg font-thin hover:text-red-600">Events</Link></li>
              <li><Link to="/gallery" className="text-lg font-thin hover:text-red-600">Gallery</Link></li>
              <li><Link to="/contact" className="text-lg font-thin hover:text-red-600">Contact</Link></li>

              {/* Join Us with Dropdown */}
              <li
                ref={joinDropdownRef}
                className="relative text-lg font-thin hover:text-red-600 cursor-pointer"
                onClick={toggleJoinDropdown}
                onMouseEnter={() => setIsJoinDropdownOpen(true)} // Show dropdown on hover
                onMouseLeave={() => setIsJoinDropdownOpen(false)} // Hide dropdown when mouse leaves
              >
                Join Us
                {isJoinDropdownOpen && (
                  <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md  w-48 z-50">
                    <li className="px-4 py-2 hover:bg-gray-200">
                      <Link to="/internship-program" onClick={toggleJoinDropdown}>Membership</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                      <Link to="/vayam-program" onClick={toggleJoinDropdown}>VAYAM Program</Link> 
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                      <Link to="/internship-program" onClick={toggleJoinDropdown}>Internship</Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  className="text-gray-300 text-3xl mr-16 hover:text-gray-400 focus:outline-none"
                  onClick={toggleDropdown}
                >
                  <FaUserCheck />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                    <ul className="flex flex-col">
                      <li className="px-4 py-2 hover:bg-gray-200">
                        <Link to="/profile" onClick={() => setDropdownOpen(false)}>
                          Profile
                        </Link>
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => {
                          handleLogout();
                          setDropdownOpen(false);
                        }}
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login">
                <button className="flex bg-red-500 text-white px-4 py-2 rounded-md items-center gap-2 hover:bg-red-600">
                  Register <GoArrowRight />
                </button>
              </Link>
            )}
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
            <ul className="flex flex-col items-start p-4">
              <li className="py-2">
                <Link to="/" onClick={toggleMenu}>Home</Link>
              </li>
              <li className="py-2">
                <Link to="/about" onClick={toggleMenu}>About</Link>
              </li>
              <li className="py-2">
                <Link to="/member" onClick={toggleMenu}>Team</Link>
              </li>
              <li className="py-2">
                <Link to="/our-project" onClick={toggleMenu}>Programs</Link>
              </li>
              <li className="py-2">
                <Link to="/legal-advisor" onClick={toggleMenu}>Legal Advisor</Link>
              </li>
              <li className="py-2">
                <Link to="/events" onClick={toggleMenu}>Events</Link>
              </li>
              <li className="py-2">
                <Link to="/Visitor" onClick={toggleMenu}>Visitor</Link>
              </li>
              <li className="py-2">
                <Link to="/gallery" onClick={toggleMenu}>Gallery</Link>
              </li>
              <li className="py-2">
                <Link to="/contact" onClick={toggleMenu}>Contact</Link>
              </li>
              <li className="py-2">
                <Link to="/join-us" onClick={toggleMenu}>JoinUs</Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;

