import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-gray-800">
            DispatchPro
          </div>

          {/* Desktop Menu + Profile */}
          <div className="hidden md:flex items-center ml-auto space-x-6">
            {/* Menu */}
            <div className="flex text-lg space-x-6 text-gray-700 font-bold">
              <a href="/admin" className="hover:text-black">
                Dashboard
              </a>
              <a href="/orders" className="hover:text-black">
                Orders
              </a>
              <a href="/vendors" className="hover:text-black">
                Vendors
              </a>
              <a href="/customers" className="hover:text-black">
                Customers
              </a>
              <a href="/reports" className="hover:text-black">
                Reports
              </a>
              <a href="/settings" className="hover:text-black">
                Settings
              </a>
            </div>
            {/* Profile Icon */}
            <img
              src="https://rukminim2.flixcart.com/image/704/844/poster/g/y/s/child-s-love-cute-girl-3-mqp1198-medium-original-imaeb8mqqcxd73mw.jpeg?q=20&crop=false"
              alt="Profile"
              className="w-10 h-10 rounded-full border"
            />
          </div>

          {/* Mobile Menu Button */}
           <div className="md:hidden flex items-center ml-auto">
            <button onClick={toggleMenu} className="text-gray-800">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
{isOpen && (
  <div className="md:hidden bg-purple-200 backdrop-blur-sm border-t border-gray-200 shadow-sm flex justify-end">
    <div className="flex flex-col text-lg font-bold items-end px-4 py-2 space-y-2 w-48 text-gray-800">
      <a href="/admin" className="hover:text-purple-700">
        Dashboard
      </a>
      <a href="/orders" className="hover:text-purple-700">
        Orders
      </a>
      <a href="/vendors" className="hover:text-purple-700">
        Vendors
      </a>
      <a href="/customers" className="hover:text-purple-700">
        Customers
      </a>
      <a href="/reports" className="hover:text-purple-700">
        Reports
      </a>
      <a href="/settings" className="hover:text-purple-700">
        Settings
      </a>
    </div>
  </div>
)}

    </nav>
  );
};

export default Navbar;
