import React from "react";
import facebookIcon from "../assets/icon-facebook.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import pinterestIcon from "../assets/icon-pinterest.svg";
import instagramIcon from "../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-[#232127] text-white py-10 px-6 md:px-20 lg:px-[130px]">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
        {/* Shortly Text */}
        <div className="text-center md:text-left mb-10 md:mb-0">
          <span className="text-[30px] font-bold text-white">Shortly</span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col lg:flex-row  lg:space-x-16 text-center md:text-left">
          {/* Features Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-bold text-[18px] mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#9C9BA2] hover:text-[#2BD1D0]">
                  Link Shortening
                </a>
              </li>
              <li>
                <a href="#" className="text-[#9C9BA2] hover:text-[#2BD1D0]">
                  Branded Links
                </a>
              </li>
              <li>
                <a href="#" className="text-[#9C9BA2] hover:text-[#2BD1D0]">
                  Analytics
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-bold text-[18px] mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#9C9BA2] hover:text-[#2BD1D0]">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[#9C9BA2] hover:text-[#2BD1D0]">
                  Developers
                </a>
              </li>
              <li>
                <a href="#" className="text-[#9C9BA2] hover:text-[#2BD1D0]">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-bold text-[18px] mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#9C9BA2] hover:text-[#2BD1D0]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-[#9C9BA2] hover:text-[#2BD1D0]">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-[#9C9BA2] hover:text-[#2BD1D0]">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-[#9C9BA2] hover:text-[#2BD1D0]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start space-x-6 mt-10 md:mt-0">
          <a href="#" className="hover:text-[#2BD1D0] transition duration-300">
            <img
              src={facebookIcon}
              alt="Facebook"
              className="hover:scale-110 transition duration-300"
            />
          </a>
          <a href="#" className="hover:text-[#2BD1D0] transition duration-300">
            <img
              src={twitterIcon}
              alt="Twitter"
              className="hover:scale-110 transition duration-300"
            />
          </a>
          <a href="#" className="hover:text-[#2BD1D0] transition duration-300">
            <img
              src={pinterestIcon}
              alt="Pinterest"
              className="hover:scale-110 transition duration-300"
            />
          </a>
          <a href="#" className="hover:text-[#2BD1D0] transition duration-300">
            <img
              src={instagramIcon}
              alt="Instagram"
              className="hover:scale-110 transition duration-300"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
