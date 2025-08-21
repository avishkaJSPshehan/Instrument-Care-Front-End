import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import NationalLogo from "../../assets/images/national-logo.jpg";
import NsfLogo from "../../assets/images/NSF-Logo.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Technician", "Contact"];

  return (
    <nav className="w-full bg-white sticky top-0 z-50 h-18">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-0">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={NationalLogo} alt="National Logo" className="h-18 w-18" />
            <img src={NsfLogo} alt="NSF Logo" className="h-13 w-25" />
            {/* <span className="text-xl font-semibold text-gray-800">Instrument Care</span> */}
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex space-x-25">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className="text-gray-800 font-medium text-lg hover:text-orange-600 transition font-poppins"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <a href="#" className="text-orange-600 font-medium hover:underline font-poppins">
              Log In
            </a> */}
            <Link to="/auth/login">
              <button className="bg-orange-200 text-orange-600 px-4 py-2 rounded-md font-medium hover:bg-orange-100 transition font-poppins">
                Log In
              </button>
            </Link>
            <Link to="/auth/tech-registration">
              <button className="bg-orange-400 text-white px-4 py-2 rounded-md font-medium hover:bg-orange-500 transition font-poppins">
                Become a Technician
              </button>
            </Link>
          </div>

          {/* Hamburger icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className="text-gray-800 font-medium text-lg hover:text-orange-600 transition font-poppins"
              >
                {link}
              </Link>
            ))}
            <button className="bg-orange-200 text-orange-600 px-4 py-2 rounded-md font-medium hover:bg-orange-100 transition font-poppins">
              Log In
            </button>
            <button className="bg-orange-400 text-white px-4 py-2 rounded-md font-medium hover:bg-orange-500 transition font-poppins">
              Become a Technician
            </button>
          </div>
        )}
        {/* Need to do Tablet Responsive */}
      </div>
    </nav>
  );
}
