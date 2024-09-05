import { MdOutlineArrowOutward } from "react-icons/md";
import "../styles/HeroSection.css";

import incred from "../assets/incred.png";
import india from "../assets/IN.svg";
import highlander from "../assets/hl.png";
import ketch from "../assets/ketch.png";
import locomotive from "../assets/lm.png";
import tokyotalkies from "../assets/tt.png";
import hoop from "../assets/hoop.png";
import lifelong from "../assets/life.png";

const HeroSection = () => {
  return (
    <>
      <div className="background"></div>
      <div className="flex flex-col items-center justify-center mt-10 z-100 bg-transparent text-center p-4 md:p-6">
        <h1 className="text-4xl md:text-7xl font-bold " id="paragraph">
          Credit Gateway
        </h1>
        <h2 className="text-4xl md:text-7xl font-bold text-gray-900 mt-2">
          For Digital Businesses
        </h2>
        <p className="text-sm md:text-base text-gray-500 mt-5 md:mt-7 max-w-md md:max-w-xl">
          We empower bold, ambitious founders with a combination of{" "}
          <span className="font-semibold text-black">
            smart capital, innovative products, right partnerships & market
            intelligence.
          </span>
        </p>
        <button
          className="bg-gray-900 text-white py-2 px-4 md:py-3 md:px-6 rounded-lg mt-6 flex items-center"
          id="report-button"
        >
          Get Free P&L Report{" "}
          <span className="ml-2">
            <MdOutlineArrowOutward />
          </span>
        </button>
        <p className="text-gray-400 font-medium text-xs md:text-sm mt-4 flex items-center">
          Partner NBFC:{" "}
          <span className="font-semibold mx-2">
            <img
              src={incred}
              alt="InCred"
              className="w-[3rem] h-[1rem] md:w-[4.121rem] md:h-[1.276rem]"
            />
          </span>
        </p>
        <p className="mt-10 md:mt-12 flex items-center justify-center space-x-2 md:space-x-3">
          <img src={india} className="w-6 h-4 md:w-auto" />{" "}
          <span id="paragraph" className="text-xs md:text-base font-semibold">
            TRUSTED BY THE BEST DIGITAL BUSINESSES
          </span>
        </p>
        <div className="flex flex-wrap items-center justify-center space-x-3 md:space-x-5 mt-5">
          <img
            src={highlander}
            alt="Highlander"
            className="w-24 md:w-[12.5rem]"
          />
          <img src={ketch} alt="Ketch" className="w-24 md:w-[12.5rem]" />
          <img
            src={locomotive}
            alt="Locomotive"
            className="w-24 md:w-[12.5rem]"
          />
          <img
            src={tokyotalkies}
            alt="Tokyo Talkies"
            className="w-24 md:w-[12.5rem]"
          />
          <img src={hoop} alt="Hoop" className="w-24 md:w-[12.5rem]" />
          <img src={lifelong} alt="Lifelong" className="w-24 md:w-[12.5rem]" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
