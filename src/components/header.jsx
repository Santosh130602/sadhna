













// Header.jsx
import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/sadhanalogo.png";
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
  const dropdownRef = useRef(null);

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
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

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

  return (
    <div style={{ fontFamily: 'Roboto Mono, monospace' }}>
      {/* <PreHeader />  */}

      <header
        className={`w-full bg-transparent transition-all duration-700 ease-in-out transform ${isSticky && isVisible
            ? "fixed top-0 z-50 shadow-lg translate-y-0"
            : isSticky
              ? "-translate-y-full"
              : "relative"
          }`}
      >
        <div className="flex items-center justify-between p-4 bg-black/70">

          <div>
            <Link to="/" onClick={toggleMenu}>
              <img src={Logo} className="h-20 w-20 p-2 ml-10" alt="Logo" />
            </Link>
          </div>

          <div className="hidden md:flex">
            <ul className="flex gap-6 items-center text-white">
              <li><Link to="/" className="text-xl font-thin hover:text-red-600">Home</Link></li>
              <li><Link to="/about" className="text-xl font-thin hover:text-red-600">About</Link></li>
              <li><Link to="/member" className="text-xl font-thin hover:text-red-600">Members</Link></li>
              <li><Link to="/causes" className="text-xl font-thin hover:text-red-600">Causes</Link></li>
              <li><Link to="/events" className="text-xl font-thin hover:text-red-600">Events</Link></li>
              <li><Link to="/videos" className="text-xl font-thin hover:text-red-600">Videos</Link></li>
              <li><Link to="/gallery" className="text-xl font-thin hover:text-red-600">Gallery</Link></li>
              <li><Link to="/contact" className="text-xl font-thin hover:text-red-600">Contact</Link></li>
              <li><Link to="/donate" className="text-xl font-thin hover:text-red-600">Donate</Link></li>
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
                <Link to="/member" onClick={toggleMenu}>Members</Link>
              </li>
              <li className="py-2">
                <Link to="/causes" onClick={toggleMenu}>Causes</Link>
              </li>
              <li className="py-2">
                <Link to="/events" onClick={toggleMenu}>Events</Link>
              </li>
              <li className="py-2">
                <Link to="/videos" onClick={toggleMenu}>Videos</Link>
              </li>
              <li className="py-2">
                <Link to="/gallery" onClick={toggleMenu}>Gallery</Link>
              </li>
              <li className="py-2">
                <Link to="/contact" onClick={toggleMenu}>Contact</Link>
              </li>
              <li className="py-2">
                <Link to="/donate" onClick={toggleMenu}>Donate</Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
