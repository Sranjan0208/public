import { Link } from "react-router-dom";
import moneyflo from "../assets/moneyflo.png";
import "../styles/Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center w-full px-6 py-5 border-2">
      <Link to="/">
        <img src={moneyflo} alt="Moneyflo" className="h-8" />
      </Link>
      <nav className="hidden md:flex space-x-6 items-center">
        <a href="#" className="font-medium hover:text-blue-500">
          For Lenders
        </a>
        <a href="#" className="font-medium hover:text-blue-500">
          For Businesses
        </a>
        <a href="#" className="font-medium hover:text-blue-500">
          About Us
        </a>
        <button
          className="flex h-9 px-4 py-2 justify-center items-center gap-2.5 text-white font-semibold"
          id="book-button"
        >
          Book a Call
        </button>
      </nav>

      {/* Hamburger menu for mobile */}
      <div className="md:hidden">
        <button
          className="text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Breadcrumb menu */}
      <div
        className={`${
          isOpen ? "max-h-60" : "max-h-0"
        } overflow-hidden transition-all duration-300 ease-in-out md:hidden bg-white absolute top-16 left-0 right-0 shadow-lg`}
      >
        <nav className="flex flex-col items-start px-6 py-4 space-y-4">
          <a href="#" className="font-medium hover:text-blue-500">
            For Lenders
          </a>
          <a href="#" className="font-medium hover:text-blue-500">
            For Businesses
          </a>
          <a href="#" className="font-medium hover:text-blue-500">
            About Us
          </a>
          <button
            className="w-full h-9 px-4 py-2 justify-center items-center text-white font-semibold"
            id="book-button"
          >
            Book a Call
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
