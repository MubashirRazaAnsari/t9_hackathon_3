import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-black w-full mt-20 sm:mt-[200px] lg:mt-[300px]">
      {/* Newsletter Section */}
      <div className="w-full px-4 sm:px-6 lg:px-[135px] py-8 lg:py-[50px]">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-white w-full sm:w-1/2 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl lg:text-[32px] font-semibold">
              <span className="text-[#FF9F0D]">St</span>ill Need Our Support
            </h2>
            <p className="text-sm lg:text-base mt-2 sm:mt-[17px]">
              Don't wait, make a smart & logical decision now. It's easy.
            </p>
          </div>

          <div className="flex w-full sm:w-auto gap-2">
            <input 
              type="text" 
              placeholder="Enter Your Email" 
              className="flex-1 sm:flex-none  text-black py-2 px-3 sm:px-4 lg:px-6 rounded text-sm lg:text-base" 
            />
            <button className="text-[#FF9F0D] bg-white py-2 px-3 sm:px-4 lg:px-6 rounded text-sm lg:text-base whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <hr className="border-[#FF9F0D] mx-4 sm:mx-6 lg:mx-[135px]" />

      {/* Main Footer Content */}
      <div className="w-full px-4 sm:px-6 lg:px-[135px] py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[30px]">
          {/* About Us Section */}
          <div className="space-y-6">
            <h2 className="text-xl lg:text-2xl font-semibold uppercase text-white">About Us</h2>
            <p className="text-white text-sm lg:text-base">
              Corporate clients and leisure travelers have relied on Groundlink for dependable, safe, and professional chauffeured car services in major cities worldwide.
            </p>
            <div className="flex items-start gap-4">
              <div className="bg-[#FF9F0D] flex-shrink-0 flex justify-center items-center w-16 h-16 rounded-full">
                <PiClockClockwiseBold className="text-white text-3xl" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Opening Hours</h3>
                <p className="text-white text-sm">Mon - Sat (8:00 AM - 6:00 PM)</p>
                <p className="text-white text-sm">Sunday - Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="space-y-4">
            <h2 className="text-xl lg:text-2xl font-semibold uppercase text-white">Useful Links</h2>
            <ul className="space-y-3">
              {['About', 'News', 'Partner', 'Team', 'Menu', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div className="space-y-4">
            <h2 className="text-xl lg:text-2xl font-semibold uppercase text-white">Help?</h2>
            <ul className="space-y-3">
              {['FAQ', 'Terms & Conditions', 'Reporting', 'Documentation', 'Support Policy', 'Privacy'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts Section */}
          <div className="space-y-4">
            <h2 className="text-xl lg:text-2xl font-semibold uppercase text-white">Recent Post</h2>
            <div className="space-y-4">
              {['Keep Your Business', 'Grow Your Network', 'Maximize Your Potential'].map((title) => (
                <div key={title} className="flex items-center gap-4">
                  <Image 
                    src="/images/footer.png" 
                    alt={title}
                    width={80}
                    height={80}
                    className="rounded object-cover"
                  />
                  <div>
                    <p className="text-gray-400 text-sm">20 Feb 2022</p>
                    <h3 className="text-white">{title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-sm text-gray-400">
              © 2023 . All Rights Reserved.
            </span>
            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest].map((Icon, index) => (
                <Link 
                  key={index} 
                  href="#" 
                  className="bg-white hover:bg-[#FF9F0D] text-black hover:text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon className="text-lg" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;