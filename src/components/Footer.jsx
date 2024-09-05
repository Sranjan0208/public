import { FaLinkedin, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";
import moneyflo from "../assets/moneyflo.png";

const Footer = () => {
  return (
    <div className="gradient-div8 px-4 md:px-16 py-6">
      <div className="mx-auto flex flex-col items-center md:flex-row justify-between">
        {/* Left Section */}
        <div className="text-center md:text-left mb-8 md:mb-0">
          <div className="flex items-center justify-center md:justify-start mb-4">
            {/* Logo */}
            <img
              src={moneyflo}
              alt="MoneyFlo Logo"
              className="w-[14rem] md:w-[20.786rem] inline"
            />
          </div>
          <p className="text-sm md:text-base mb-4 md:w-[27rem]">
            MoneyFlo revolutionizes banking for Indian businesses with financial
            products like term loans, payments, and analytics.
          </p>

          {/* Social Media Links */}
          <p className="font-semibold text-gray-500 mb-2">Follow us on:</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="https://www.linkedin.com/company/moneyfloai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gray-100 px-4 py-2 rounded-lg"
            >
              <FaLinkedin className="mr-2" />
              <span className="font-semibold text-sm md:text-base">
                LinkedIn
              </span>
            </a>
            <a
              href="https://www.instagram.com/moneyfloai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gray-100 px-4 py-2 rounded-lg"
            >
              <FaInstagram className="mr-2" />
              <span className="font-semibold text-sm md:text-base">
                Instagram
              </span>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-left">
          <p className="text-gray-500 font-semibold mb-2 text-sm md:text-base">
            Office Address:
            <br />
            <span className="text-black">
              04, 22nd cross street, 24th Main Rd, Sector 2, HSR Layout,
              Bengaluru, Karnataka 560102
            </span>
          </p>
          <p className="text-gray-500 font-semibold mb-2 text-sm md:text-base">
            For Business, Lenders & Investors:
            <a href="mailto:ankit@moneyflo.ai" className="text-blue-600">
              {" "}
              ankit@moneyflo.ai
            </a>
          </p>
          <p className="text-gray-500 font-semibold mb-2 text-sm md:text-base">
            For Careers:
            <a href="mailto:hr@moneyflo.ai" className="text-blue-600">
              {" "}
              hr@moneyflo.ai
            </a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-300 pt-4 text-center flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          © 2024 FTM Technologies Private Limited. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center md:justify-end mt-2 space-x-4 text-sm">
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
