import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, href: '#' },
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaInstagram />, href: '#' },
    { icon: <FaYoutube />, href: '#' },
    { icon: <FaPinterestP />, href: '#' }
  ]

  return (
    <footer className="bg-[#1E1E1E] py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h3 className="text-[#FF9F0D] font-great-vibes text-3xl mb-2">
              St
            </h3>
            <div className="h-[2px] w-full bg-[#FF9F0D]" />
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center flex-1 max-w-2xl ml-auto">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full md:w-[400px] px-6 py-3 bg-white rounded focus:outline-none"
            />
            <button className="whitespace-nowrap px-6 py-3 bg-[#FF9F0D] text-white rounded hover:bg-[#FF9F0D]/90 transition-colors">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gray-700 mb-8" />

        {/* Copyright and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm">
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="w-10 h-10 rounded-full bg-[#FF9F0D] text-white flex items-center justify-center hover:bg-[#FF9F0D]/90 transition-colors"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 