import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false); // ✅ auto-close on link click

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <nav
        className="h-[60px] flex items-center justify-between max-w-[1171px] mx-auto px-4 sm:px-6"
        aria-label="Top"
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-x-2 text-xl font-semibold">
          <img src={assets.NASA} alt="logo" className="h-8 w-8" />
          Galaxy
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 text-[15px]">
          <a href="/" className="hover:text-[#00a6ff]">Home</a>
          <a href="#advantages" className="hover:text-[#00a6ff]">Advantages</a>
          <a href="#how-to-start" className="hover:text-[#00a6ff]">How to Start</a>
          <a href="#plans" className="hover:text-[#00a6ff]">Plans</a>
          <a href="#more" className="hover:text-[#00a6ff]">More</a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-x-4">
          <div className="cursor-pointer">🌐</div>
          <a
            href="#/dashboard"
            className="px-4 py-2 rounded-md bg-[#0098ea] text-white text-sm hover:bg-[#00a6ff] shadow"
          >
            Stake Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t shadow-sm overflow-hidden"
          >
            <div className="flex flex-col p-3 space-y-2 text-base">
              <a href="/" onClick={handleLinkClick} className="py-2 hover:text-[#00a6ff]">Home</a>
              <a href="#advantages" onClick={handleLinkClick} className="py-2 hover:text-[#00a6ff]">Advantages</a>
              <a href="#how-to-start" onClick={handleLinkClick} className="py-2 hover:text-[#00a6ff]">How to Start</a>
              <a href="#plans" onClick={handleLinkClick} className="py-2 hover:text-[#00a6ff]">Plans</a>
              <a href="#more" onClick={handleLinkClick} className="py-2 hover:text-[#00a6ff]">More</a>
              <a
                href="#/dashboard"
                onClick={handleLinkClick}
                className="mt-2 py-2 text-center rounded-md bg-[#0098ea] text-white hover:bg-[#00a6ff] text-sm"
              >
                Stake Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;




