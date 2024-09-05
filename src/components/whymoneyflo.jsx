import { MdOutlineArrowOutward } from "react-icons/md";
import "../styles/whymoneyflo.css";
import CheckMark from "../assets/CheckMark.svg";

const Whymoneyflo = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center mx-4 md:mx-10 my-12 md:my-24 space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Left Section */}
      <div className="gradient-div5 p-6 w-full lg:w-1/2">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="font-bold text-lg md:text-md">
              🚀 <span className="paragraph">WHY CHOOSE MONEYFLO</span>
            </h2>
            <p className="text-2xl md:text-3xl font-bold mt-4">
              MoneyFlo is a home to innovative finance technologies, & credit.
            </p>
          </div>
          <a href="#">
            <button
              className="bg-gray-900 text-white py-3 px-4 md:px-6 rounded-lg mt-2 flex items-center justify-center"
              id="report-button"
            >
              Get Free P&L Report
              <span className="ml-2">
                <MdOutlineArrowOutward />
              </span>
            </button>
          </a>
          <div className="space-y-4 md:space-y-6 mt-4">
            <div className="flex items-center gap-2">
              <img src={CheckMark} className="w-5 h-5" alt="Checkmark" />
              <span className="font-bold text-sm md:text-base">
                A platform of transparency and integrity
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src={CheckMark} className="w-5 h-5" alt="Checkmark" />
              <span className="font-bold text-sm md:text-base">
                Seamless integration with leading e-commerce platforms
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src={CheckMark} className="w-5 h-5" alt="Checkmark" />
              <span className="font-bold text-sm md:text-base">
                Empowering small businesses with financial solutions
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src={CheckMark} className="w-5 h-5" alt="Checkmark" />
              <span className="font-bold text-sm md:text-base">
                Innovative technology for secure transactions
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className="gradient-div6 text-white p-6 w-full lg:w-1/2 flex flex-col justify-between lg:space-y-4 space-y-3">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">1 Million+</h2>
          <p className="text-gray-200">Monthly Transaction Volume</p>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">INR 50 CR+</h2>
          <p className="text-gray-200">Monthly GMV analyzed</p>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">24x7</h2>
          <p className="text-gray-200">Access to Financial reports</p>
        </div>
      </div>
    </section>
  );
};

export default Whymoneyflo;
