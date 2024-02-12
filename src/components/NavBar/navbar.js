import React, { useState } from 'react';
import { IoIosCall, IoMdCart, IoMdSearch } from "react-icons/io";



const NavBar = () => {
  
  const [isUsdDropdownOpen, setIsUsdDropdownOpen] = useState(false);
  const [isEnDropdownOpen, setIsEnDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isAOpen, setIsAOpen] = useState(false);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleADropdown = () => {
    setIsAOpen(!isAOpen);
  };

  const toggleUsdDropdown = () => {
    setIsUsdDropdownOpen(!isUsdDropdownOpen);
  };

  const toggleEnDropdown = () => {
    setIsEnDropdownOpen(!isEnDropdownOpen);
  };

  return (
    <div class="shadow-md container"> 
      <div className="md:px-10 py-4 px-7">
        <div className="flex justify-between items-center">
          <div className='px-0'>AXELS</div>
          <div className="relative inline-block">
            <div className="inline-flex justify-center gap-x-1.5 px-0 text-sm font-semibold text-gray-900">
              <div className="pr-7 pl-4 relative" onClick={toggleUsdDropdown}>
                USD
                {isUsdDropdownOpen && (
                  <div className="absolute right-2 mt-10 w-48 bg-off-white shadow-md rounded-md">
                    <p className="px-4 py-2 text-black-200">United states (USD)</p>
                    <p className="px-4 py-2 text-black-200">Canada (CAD)</p>
                    <p className="px-4 py-2 text-black-200">United Kingdom (GBP)</p>
                    <p className="px-4 py-2 text-black-200">Australia (AUD)</p>
                  </div>
                )}
                <svg
                  className="h-5 w-5 absolute right-0 top-1/2 transform -translate-y-1/2 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.293 8.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  />
                </svg>
              </div>
              <div className="text-black pr-2 relative" onClick={toggleEnDropdown}>
                EN
                {isEnDropdownOpen && (
                  <div className="absolute right-0 mt-10 w-48 bg-black shadow-md rounded-md">
                    <p className="px-4 py-2 text-gray-200">EN Dropdown Content</p>
                  </div>
                )}
                <svg
                  className="h-5 w-5 absolute left-5 top-1/2 transform -translate-y-1/2 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.293 8.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  />
                </svg>
              </div>
              <div className="pl-4 text-black bold">
                Support
              </div>
              <svg
                className="-mr-1 h-5 w-5 text-black cursor-pointer"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                
              </svg>
              <svg
                className="-mr-1 h-5 w-5 text-black cursor-pointer"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                
              </svg>
            </div>
          </div>
        </div>
    <nav class="container">
      <div className="mx-auto flex justify-between items-center ">
        
        <div className="flex items-center">
          <IoIosCall className=" mr-2" />
          <p className="">+123456789</p>
        </div>

        
        <div className="flex justify-center flex-grow gap-5">   
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="rounded-md focus:outline-none "
            >
              Categories
            </button>
            {isOpen && (
              <div className="absolute mt-2 bg-white shadow-md rounded-md">
                <a href="/" className="block px-4 py-2 text-gray-800">About</a>
                <a href="/" className="block px-4 py-2 text-gray-800">Blog</a>
                <a href="/" className="block px-4 py-2 text-gray-800">Contact</a>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={toggleADropdown}
              className="rounded-md focus:outline-none "
            >
              About
            </button>
            {isAOpen && (
              <div className="absolute mt-2 bg-white shadow-md rounded-md">
                <a href="/" className="block px-4 py-2 text-gray-800">About</a>
                <a href="/" className="block px-4 py-2 text-gray-800">Blog</a>
                <a href="/" className="block px-4 py-2 text-gray-800">Contact</a>
              </div>
            )}
          </div>
          <div className="">Blog</div>
          <div className="">Contact</div>
        </div>
        <div className="flex items-center gap-3">
          <IoMdSearch />
          <IoMdCart />
          <IoIosCall/>
          
        </div>
      </div>
    </nav>

  </div>
</div>
  );
};

export default NavBar;
