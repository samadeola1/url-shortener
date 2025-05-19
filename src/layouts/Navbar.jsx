import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 px-4 md:px-20 lg:px-[130px] shadow-md">
      <div className="flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center space-x-8">
          <span className="text-[30px] font-bold text-[#36343F]">Shortly</span>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              className="text-[#9C9BA2] hover:text-[#333337] pointer-events-none cursor-default"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-[#9C9BA2] hover:text-[#333337] pointer-events-none cursor-default"
            >
              Pricing
            </a>
            <a
              href="#resources"
              className="text-[#9C9BA2]  hover:text-[#333337] pointer-events-none cursor-default"
            >
              Resources
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-[#9C9BA2] cursor-pointer hover:text-[#333337] pointer-events-none cursor-default">
            Login
          </span>
          <button className="bg-[#2BD1D0] text-white px-4 py-2 rounded-4xl hover:bg-[#9DE1E2] pointer-events-none cursor-default">
            Sign Up
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="text-gray-800 md:hidden focus:outline-nones"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="my-10  rounded-2xl flex flex-col items-center bg-[#3A3053] text-white py-12 space-y-6 md:hidden">
          <a
            href="#features"
            className="text-2xl font-medium hover:text-gray-300 pointer-events-none cursor-default"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-2xl font-medium hover:text-gray-300 pointer-events-none cursor-default"
          >
            Pricing
          </a>
          <a
            href="#resources"
            className="text-2xl font-medium hover:text-gray-300 pointer-events-none cursor-default"
          >
            Resources
          </a>
          <hr className="w-3/4 border-gray-400" />
          <span className="text-2xl font-medium hover:text-gray-300 pointer-events-none cursor-default">
            Login
          </span>
          <button className="bg-[#2BD1D0]  text-white px-25 py-3 rounded-3xl  hover:bg-[#9DE1E2] text-2xl pointer-events-none cursor-default">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;