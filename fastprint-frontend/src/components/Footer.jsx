import React from "react";
import {
  FaHome,
  FaBoxOpen,
  FaBlog,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="w-full bg-gradient-to-r from-[#016AB3] via-[#0096CD] to-[#00AEDC] text-white"
    >
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row md:justify-between gap-10 md:gap-0">
        {/* Left Section */}
        <div className="flex flex-col gap-6 md:w-1/2">
          {/* Top Icons */}
          <div className="flex flex-wrap gap-6 text-base font-medium">
            <div className="flex items-center gap-2 cursor-pointer hover:underline">
              <FaHome />
              <span>Home</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:underline">
              <FaBoxOpen />
              <span>Products</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:underline">
              <FaBlog />
              <span>Blog</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl mt-2">
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="cursor-pointer hover:text-yellow-400 transition" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="cursor-pointer hover:text-yellow-400 transition" />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="cursor-pointer hover:text-yellow-400 transition" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="cursor-pointer hover:text-yellow-400 transition" />
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 mt-4">
            <FaPhoneAlt />
            <a href="tel:+14692777489" className="hover:underline">
              +1 469-277-7489
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt />
            <a
              href="https://www.google.com/maps/dir//2828+W+Parker+Rd+Suite+B103,+Plano,+TX+75075"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              2828 W Parker Rd Suite B103, Plano, TX 75075, United States
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-4 md:w-1/2">
          <p className="text-base leading-relaxed max-w-md">
            This is a paragraph with more information about something important.
          </p>

          <h4 className="text-lg font-semibold mt-4">Subscribe</h4>

          <form className="flex flex-col sm:flex-row items-center gap-4 mt-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full sm:w-auto flex-grow rounded-full outline-none text-black text-sm"
              aria-label="Email Address"
              required
            />
            <button
              type="submit"
              className="p-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition"
              aria-label="Subscribe"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>

      {/* Yellow Line */}
      <div className="w-full border-t-4 border-yellow-400 mt-2" />

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 text-white text-sm max-w-7xl mx-auto gap-4 md:gap-0">
        <span>© 2025 Fast Print Guys, All Rights Reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="cursor-pointer hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="cursor-pointer hover:underline">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
